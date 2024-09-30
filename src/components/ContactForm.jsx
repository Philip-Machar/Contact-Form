const ContactForm = () => {
  return (
    <form className="bg-white p-4 rounded-md flex flex-col gap-4">
        <h1>Contact Us</h1>

        <div className="flex gap-4"> 
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name *</label>
            <input className="border-[2px] rounded" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name *</label>
            <input className="border-[2px] rounded" type="text" />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email *</label>
          <input className="border-[2px] rounded w-full" type="email" />
        </div>

        <div>
          <label htmlFor="queryType">Query Type *</label>
          <div className="flex gap-4">
            <div className="flex gap-2 border-[2px] px-4 py-2 rounded">
              <input type="radio" />
              <div>General Enquiry</div>
            </div>
            <div className="flex gap-2 border-[2px] px-4 py-2 rounded">
              <input type="radio" />
              <div>Support Request</div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message">Message *</label>
          <textarea className="border-[2px] rounded w-full h-24" />
        </div>

        <div className="flex gap-2">
          <input type="checkbox" />
          <div>I consent to being contacted by the team *</div>
        </div>

        <button className="text-white bg-green-medium rounded py-2">Submit</button>
    </form>
  )
}

export default ContactForm
