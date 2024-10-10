import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Prepare data to match the placeholders in the EmailJS template
    const emailData = {
      from_name: formData.name,   // 'from_name' should match your EmailJS template placeholder
      from_email: formData.email, // 'from_email' should match your EmailJS template placeholder
      phone_number: formData.phoneNo, // 'phone_number' should match your EmailJS template placeholder
      subject: formData.subject,
      message: formData.message,
    };
  
    // Send form data using EmailJS
    emailjs.send('service_xe0gfme', 'template_jn5fbj1', emailData, 'lIlx1uB9-DRDm1oTY') 
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
  
        // Clear the form
        setFormData({
          name: '',
          email: '',
          phoneNo: '',
          subject: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message, please try again.');
      });
  };
  

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
