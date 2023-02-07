'use client'
type Props = {}

const ContactUs = (props: Props) => {
  return (
    <section className="bg-bgColor py-6 sm:py-8 lg:py-12" id="contact-us">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      {/* <!-- text - start --> */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-gray-50 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>

        <p className="max-w-screen-md text-gray-500  md:text-lg text-center mx-auto">Thank you for considering Upsight for your event&apos;s light and sound needs. We would love to hear from you and discuss how we can help bring your vision to life. Please fill out the form below with your event details and one of our team members will be in touch shortly. We look forward to working with you!.</p>
      </div>
      {/* <!-- text - end --> */}

      {/* <!-- form - start --> */}
      <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
        <div>
          <label htmlFor="first-name" className="inline-block text-gray-50 text-sm sm:text-base mb-2">First name*</label>
          <input name="first-name" className="w-full bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="last-name" className="inline-block text-gray-50 text-sm sm:text-base mb-2">Last name*</label>
          <input name="last-name" className="w-full bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="inline-block text-gray-50 text-sm sm:text-base mb-2">Company</label>
          <input name="company" className="w-full bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="inline-block text-gray-50 text-sm sm:text-base mb-2">Email*</label>
          <input name="email" className="w-full bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="subject" className="inline-block text-gray-50 text-sm sm:text-base mb-2">Subject*</label>
          <input name="subject" className="w-full bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="inline-block text-gray-50 text-sm sm:text-base mb-2">Message*</label>
          <textarea name="message" className="w-full h-64 bg-slate-900 text-gray-800  focus:ring ring-[#a3832d] -300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
        </div>

        <div className="sm:col-span-2 flex justify-between items-center">
          <button className="inline-block bg-[#a3832d] -500 hover:bg-[#a3832d] -600 active:bg-[#a3832d] -700 focus-visible:ring ring-[#a3832d] -300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

          <span className="text-gray-500 text-sm">*Required</span>
        </div>

          </form>
      {/* <!-- form - end --> */}
    </div>
  </section>
  )
}

export default ContactUs