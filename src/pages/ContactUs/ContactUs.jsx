import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">

      <div className="contact-us-content">
        <div className="left-section">
          <h1>CONTACT US</h1>
          <p>Get in touch</p>
          <div className="social-icons">
            <a href="#" className="social-icon twitter"></a>
            <a href="#" className="social-icon facebook"></a>
            <a href="#" className="social-icon instagram"></a>
            <a href="#" className="social-icon youtube"></a>
          </div>
        </div>

        <div className="right-section">
          <form className="contact-form">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <textarea placeholder="Message" className="textarea-field"></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
