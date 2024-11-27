import {useState} from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     /*----- Handle form submission logic here -----*/

     console.log('Form submitted:', formData);

     /*----- Clear form -----*/
setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert('Thank you for your message! We will get back to you soon.')
  };

  return (
    <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
            <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Have questions  or feedback about our products? Reach out to us using the contact form below.</p>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                        />
                    </div>
                <button type='submit' className='submit-button'>Send a Message</button>
                </form>
            </div>
        </div>          
  );
}
/* export default Contact */

export default Contact;