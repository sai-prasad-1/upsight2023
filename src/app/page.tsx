
import Image from 'next/image'
import eventImg12 from '@/assets/images/event12.jpeg'
import HeroSlider from '@/components/HeroSlider';
import Gallery from '@/components/Gallery';
import ContactUs from '@/components/ContactUs';
import Cookies from '@/components/Cookies';
import rent1 from '@/assets/images/rent1.jpg'
import rent2 from '@/assets/images/rent2.jpg'
import rent3 from '@/assets/images/rent3.jpg'
import rent4 from '@/assets/images/rent4.jpg'
import rent5 from '@/assets/images/rent5.jpg'
import rent7 from '@/assets/images/rent7.jpg'
import rent8 from '@/assets/images/rent8.jpg'
import rent10 from '@/assets/images/rent10.jpg'


export default function Home() {
  const gearImages = [rent1, rent2, rent3, rent4, rent5, rent7, rent8, rent10]
  return (
    <main >
      {/* Hero Section Starts */}
      <HeroSlider />
      {/* Hero Section Ends */}

      {/* About Section Starts */}
      <section className=''>
        <div className='blob-bg'></div>
      
        <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-white text-2xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Light & Sound</h2>
            <div className='md:flex-row flex flex-col md:items-center'>
              <div className='md:w-[45%] overflow-clip  p-6'>

                <Image src={eventImg12} alt="photo by Sam Moghadam Khamseh" className=" w-full h-full max-h-[80vh] object-cover rounded-2xl border-2 border-[#a3832d] p-1" />
              </div>
              <div className='md:w-1/2'>
                <p className='text-white mb-6'>
                  Our large warehouse stocks the newest audio and lighting equipment to accommodate various needs. Our experienced staff will help you with all the technical aspects of your job and work closely ensure you receive the best quality and service available. We can provide services and support for all types and sizes of events, ranging from small corporate and personal events to large arena or outdoor productions.
                </p>
                <a href="#" className='bg-[#a3832d] px-4 py-2 rounded-md  text-white mt-6'>Learn More</a>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* About Section Ends */}

      {/*Gallery Section Starts */}
      <Gallery />
      {/*Gallery Section Ends */}

      {/* Gear we use Section Starts */}
      <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4 md:mb-8">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 lg:mb-0">Gears We House</h2>

            <p className="max-w-md text-gray-400 text-center lg:text-right">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 rounded-lg gap-4 lg:gap-6">
            {/* <!-- logo - start --> */}
            {gearImages.map((imagenum,index) => (
              <div className="h-[100px]  flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4 group " key={index}>
                <Image src={imagenum} className="max-w-full w-fit h-full group-hover:grayscale-0 grayscale" alt={`imagenum`} />
              </div>
            ))}
            {/* <!-- logo - end --> */}


          </div>
        </div>
      </div>
      {/* gear we use section ends */}


      {/* Testimonial Section Starts */}
      <section className=''>
        <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* <!-- quote - start --> */}
              <div className="flex flex-col items-center bg-[#a3832d] rounded-lg gap-4 md:gap-6 px-8 py-6">
                <div className="max-w-md text-white lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" width={100} height={100} alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
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
                    <Image src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" width={100} height={100} alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
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

      {/* FAQ Section Starts */}
      <div className="bg-bgColor py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Frequently asked questions</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {/* <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-[#a3832d] sm:text-lg md:text-xl font-semibold">Akhill Chettane Engane Valakam?</h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-[#a3832d] sm:text-lg md:text-xl font-semibold">How to Bend Akhill chettan?</h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-[#a3832d] sm:text-lg md:text-xl font-semibold">is Akhill the father of Blockchain?</h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-[#a3832d] sm:text-lg md:text-xl font-semibold">(webpack-internal:///(sc_client)/.?</h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>
            {/* <!-- question - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- faq - end --> */}


      {/* Contact Section Starts */}
      <ContactUs />
      {/* Contact Section Ends */}

      {/* cookie section starts */}
      <Cookies/>
      {/* cookie section ends */}
    </main>
  )
}
