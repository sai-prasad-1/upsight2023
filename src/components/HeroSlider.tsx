'use client'
import React from 'react'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import eventImg1 from '@/assets/images/event1.jpg'
import eventImg12 from '@/assets/images/event12.jpeg'
import homeImg2 from '@/assets/images/home2.jpg'
import homeImg3 from '@/assets/images/home3.jpg'

import Image from 'next/image'


type Props = {}

const HeroSlider = (props: Props) => {
  return (
    <section className='w-[100vw] h-[90vh] overflow-clip  bg-bgColor'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[EffectFade, Autoplay]}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
         
        >
          <SwiperSlide><div className='w-[98vw] mx-auto h-[75vh] rounded-2xl'>
            <Image src={eventImg1} alt="photo by Sam Moghadam Khamseh" className="w-full h-full object-cover rounded-2xl" />
          </div></SwiperSlide>
          <SwiperSlide><div className='w-[98vw] mx-auto h-[75vh] rounded-2xl'>
            <Image src={homeImg2} alt="photo by Sam Moghadam Khamseh" className="w-full h-full object-cover rounded-2xl" />
          </div></SwiperSlide>
          <SwiperSlide><div className='w-[98vw] mx-auto h-[75vh] rounded-2xl'>
            <Image src={homeImg3} alt="photo by Sam Moghadam Khamseh" className="w-full h-full object-cover rounded-2xl" />
          </div></SwiperSlide>

        </Swiper>



      </section>
  )
}

export default HeroSlider