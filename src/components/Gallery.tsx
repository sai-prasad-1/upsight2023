'use client'
import { sliderImages } from '@/lib/utils/typings'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import  { Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    
}

function Gallery ({}: Props) {
  const [images, setImages] = useState<sliderImages[]>([])
  async function getImages() {
    const res = await fetch('/api/sliderImages')
    const data = await res.json()
    setImages(data.images)
  }
  useEffect(() => {
    getImages()
  }, [])
  return (
    <section>
    <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Gallery</h2>

        <div className='mb-6'>
          <Swiper
            spaceBetween={50}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={
              {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            loop={true}

          >

            {images && images.map((image, index) => (
              <SwiperSlide key={index}>
                {/* <!-- image - start --> */}
                <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                  <Image src={image.image} loading="lazy" alt="Photo by Minh Pham" fill className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                  <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                  <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">{image.title}</span>
                </a>
                {/* <!-- image - end --> */}
              </SwiperSlide>
            ))}


          </Swiper>
        </div>

        <div className="flex justify-between items-start sm:items-center gap-8">
          <p className="max-w-screen-sm text-gray-500 text-sm lg:text-base">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

          <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery