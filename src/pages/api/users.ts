import { Collection, Document, MongoClient, ObjectId, WithId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "@/lib/mongo";
import { genSalt, hash,compare } from 'bcrypt';
import { User } from "@/lib/utils/typings";


let client: MongoClient, db,usersCollection: Collection<Document>;

type Data = {

    message?: string
    users?: WithId<Document>[] | null | User | undefined |ObjectId
  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    if (!client) {
        client = await clientPromise;
        db = client.db();
        usersCollection = db.collection("users");
    }
    if (req.method === "POST") {
        const { name, email, password } = req.body;
        let passwordHash
        if (!name || !email || !password) {
          res.status(422).json({ message: "Invalid input." });
          return;
        }
        usersCollection.findOne({ email: email }).then((user) => {
          if (user) {
            res.status(422).json({ message: "User already exists." });
            return;
          }
        });

        genSalt(10, function(err, salt) {
            if (err) {
              res.status(500).json({ message: "Invalid input." });
              return;
            };
            hash(password, salt, function(err, hash) {
              if (err) {
                res.status(500).json({ message: "Invalid input." });
                return;
              };
                passwordHash = hash
                usersCollection.insertOne({
                  name,
                  email,
                  password: passwordHash,
                  created_at: new Date(),
              }).then((result) => {
                res.status(201).json({ message: "User Created", users: result.insertedId });
              });
            });
        }
        );
        
        
    }
    else if (req.method === "GET") {
      const {email,password} = req.body;
      if (!email || !password) {
        res.status(422).json({ message: "Invalid input." });
        return;
      }
      const user  = {
        email,
        password
      }
        const users:any= await usersCollection.findOne({ email: user.email });
        if (!users) {
          res.status(404).json({ message: "Not found" });
          return;
        }
        
        const isValid = await compare(user.password, users.password);
        if (!isValid) {
          res.status(404).json({ message: "PassWord Does not Match" });
          return;
        }
        res.status(200).json({ message: "User Found", users: users});
    }
    else {
        res.status(404).json({ message: `Method ${req.method} not Allowed` });
    }

  }