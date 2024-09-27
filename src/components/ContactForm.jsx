const ContactForm = () => {
  return (
    <form className="bg-while p-4">
        <h2 text-2xl font-bold mb-4>Contact Us</h2>

        <label htmlFor="firstName">First Name *</label>
        <input type="text" />

        <label htmlFor="lastName">Last Name *</label>
        <input type="text" />

        <label htmlFor="email">Email *</label>
        <input type="text" />

        <label htmlFor="query">Query Type *</label>
        <input type="radio" />
        <input type="radio" />

        <label htmlFor="mesaage">Message</label>
        <input type="textarea" />

        <label htmlFor="check"></label>
        <input type="checkbox" />
    </form>
  )
}

export default ContactForm
