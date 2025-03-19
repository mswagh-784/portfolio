import React, { useState } from 'react';
import './css/contact_form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="subject">Subject</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="freelancing-info">
            <h3>Freelancing Services</h3>
            <p>
              I offer a range of freelancing services including web development, mobile app development, and software consulting. With years of experience in the industry, I am committed to delivering high-quality solutions that meet your needs.
            </p>
            <p>
              Whether you need a new website, a custom mobile app, or expert advice on your software projects, I am here to help. Feel free to reach out to discuss your requirements and get a quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;