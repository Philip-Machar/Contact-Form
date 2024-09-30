const ContactForm = () => {
  return (
    <form className="bg-white p-9 rounded-2xl flex flex-col gap-5 w-[600px]">
        <h1 className="text-2xl font-bold">Contact Us</h1>

        <div className="flex gap-4"> 
          <div className="flex flex-col gap-2 w-full">
            <label className="flex gap-2" htmlFor="firstName">First Name <div className="text-green-medium">*</div></label>
            <input className="border-green-lighter border-[2px] rounded h-9" type="text" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="flex gap-2" htmlFor="lastName">Last Name <div className="text-green-medium">*</div></label>
            <input className="border-green-lighter border-[2px] rounded h-9" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2" htmlFor="email">Email Address <div className="text-green-medium">*</div></label>
          <input className="border-green-lighter border-[2px] rounded w-full h-9" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2" htmlFor="queryType">Query Type <div className="text-green-medium">*</div></label>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center border-green-lighter border-[2px] px-10 py-2 rounded h-12 w-full">
              <input type="radio" />
              <div>General Enquiry</div>
            </div>
            <div className="flex gap-2 items-center border-green-lighter border-[2px] px-4 py-2 rounded w-full">
              <input type="radio" />
              <div>Support Request</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2" htmlFor="message">Message <div className="text-green-medium">*</div></label>
          <textarea className="border-green-lighter border-[2px] rounded w-full h-24" />
        </div>

        <div className="flex gap-4 items-center mb-2 mt-2">
          <input className="w-5 h-5" type="checkbox" />
          <div>I consent to being contacted by the team *</div>
        </div>

        <button className="text-white bg-green-medium rounded-lg py-4">Submit</button>
    </form>
  )
}

export default ContactForm
