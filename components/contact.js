import React from 'react';
import './styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="contact">
       <div className="contact-container">
        <div className="contact-content">
          <h1>Contact us</h1>
        </div>
      </div>
      <div className="contact-info">
      <div className="info-item larger">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        </div>
        <h1>Address:</h1>
        <p>A108 Adam Street
        New York, NY 535022</p>
      </div>
      <div className="info-item">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faPhone} className="icon" />
        </div>
        <h1>Call Us</h1>
        <p>+123-456-7890</p>
      </div>
      <div className="info-item">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </div>
        <h1>Email Us</h1>
        <p>architek@gmail.com</p>
      </div>
    </div>
    <div className="container">
        <div className="map-container">
          
          <iframe
            title="Anfield Location"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.6191850869515!2d-2.9619748843247476!3d53.430829979999856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b216fde22f413%3A0xe1f0b1f1d2b9f9ab!2sAnfield!5e0!3m2!1sen!2suk!4v1621465213475!5m2!1sen!2suk"
          ></iframe>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <div className="input-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default Contact;

