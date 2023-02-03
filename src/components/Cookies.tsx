'use client'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {}

const Cookies = (props: Props) => {
    const [show, setShow] = React.useState(true)
  return (
    <div className={`w-screen  py-6 z-[9999] fixed bottom-0 bg-gray-100 md:bg-transparent md:my-6 shadow-2xl  flex items-center justify-evenly px-6 md:flex-row flex-col space-y-6 md:space-y-0 duration-1000 transition-transform ${show?"translate-y-0 ":"translate-y-full"}`} >
      <div className='md:flex items-center justify-center w-[90vw] md:bg-orange-50 md:p-6 md:rounded-xl'>

        <div className='flex-1'>
          <h3 className='text-xl font-bold'>We Value Your Privacy</h3>
          <p className='text-sm font-light'>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. Read More</p>
        </div>
        <div className='flex justify-evenly relative'>   
          <button className='bg-[#a3832d] text-white px-4 py-2 rounded-lg mr-4 cursor-pointer' onClick={()=>setShow(false)}>Accept All</button>
          <button className='border-[#a3832d] border-2 text-[#a3832d] px-4 py-2 rounded-lg cursor-pointer' onClick={()=>setShow(false)}>Reject All</button>
        </div>
      </div>
                
      </div>
  )
}

export default Cookies