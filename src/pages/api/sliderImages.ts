// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sliderImages } from "@/utils/typings";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  images: sliderImages[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
  } else if (req.method === "GET") {
    let images = [
      {
        id: "1",
        //take images from unsplash
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
        title: "First Image",
      },
      {
        id: "2",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
        title: "Second Image",
      },
      {
        id: "3",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
        title: "Third Image",
      },
    ];

    

    res.status(200).json({ images: images});
  }
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
