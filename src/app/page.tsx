'use client'
import Image from 'next/image'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import eventImg1 from '@/assets/images/event1.jpg'
import aboutImg from '@/assets/images/about.png'

export default function Home() {
  return (
    <main >
      {/* Hero Section Starts */}
      <section className='w-[100vw] h-[90vh] overflow-clip'>
        <div className='w-[98vw] mx-auto h-[75vh] rounded-2xl'>
          <Image src={eventImg1} alt="photo by Sam Moghadam Khamseh" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </section>
      {/* Hero Section Ends */}

      {/* About Section Starts */}
      <section className=''>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Light & Sound</h2>
            <div className='md:flex-row flex flex-col md:items-center'>
              <div className='w-[40%] overflow-clip  p-6'>

                <Image src={aboutImg} alt="photo by Sam Moghadam Khamseh" className="  max-w-[450px] max-h-[80vh] object-cover rounded-2xl" />
              </div>
              <div className='md:w-1/2'>
                <p className='text-xl mb-6'>
                  Our large warehouse stocks the newest audio and lighting equipment to accommodate various needs. Our experienced staff will help you with all the technical aspects of your job and work closely ensure you receive the best quality and service available. We can provide services and support for all types and sizes of events, ranging from small corporate and personal events to large arena or outdoor productions.
                </p>
                <a href="#" className='bg-[#a3832d] px-4 py-2 rounded-md mt-6'>Learn More</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Testimonial Section Starts */}
      <section className=''>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* <!-- quote - start --> */}
              <div className="flex flex-col items-center bg-[#a3832d] rounded-lg gap-4 md:gap-6 px-8 py-6">
                <div className="max-w-md text-white lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
                  </div>

                  <div>
                    <div className="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">Ajill Annan</div>
                    <p className="text-indigo-200 text-sm md:text-sm text-center sm:text-left">PM / LEvantate Labs</p>
                  </div>
                </div>
              </div>
              {/* <!-- quote - end --> */}

              {/* <!-- quote - start --> */}
              <div className="flex flex-col items-center bg-[#a3832d] rounded-lg gap-4 md:gap-6 px-8 py-6">
                <div className="max-w-md text-white lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
                  </div>

                  <div>
                    <div className="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">M Akhil P Raj </div>
                    <p className="text-indigo-200 text-sm md:text-sm text-center sm:text-left">CTO / Levantate Labs</p>
                  </div>
                </div>
              </div>
              {/* <!-- quote - end --> */}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Ends */}


      {/* Contact Section Starts */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          {/* <!-- form - start --> */}
          <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div>
              <label htmlFor="first-name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">First name*</label>
              <input name="first-name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="last-name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Last name*</label>
              <input name="last-name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Company</label>
              <input name="company" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
              <input name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Subject*</label>
              <input name="subject" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
              <textarea name="message" className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-[#a3832d] -500 hover:bg-[#a3832d] -600 active:bg-[#a3832d] -700 focus-visible:ring ring-[#a3832d] -300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

              <span className="text-gray-500 text-sm">*Required</span>
            </div>

            <p className="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" className="hover:text-[#a3832d] -500 active:text-[#a3832d] -600 underline transition duration-100">Privacy Policy</a>.</p>
          </form>
          {/* <!-- form - end --> */}
        </div>
      </div>
      {/* Contact Section Ends */}
    </main>
  )
}
