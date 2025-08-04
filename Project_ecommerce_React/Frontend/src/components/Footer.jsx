import React from 'react';
import './Footer.css'; 
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
   
    <footer className="footer">
  <div className="footer-top">
    <div>
      <h4>About Us</h4><br />
      <p>We provide quality products at affordable prices.</p>
    </div>
    <div>
      <h4>Contact</h4><br/>
      <p>Email: Electronics@mart.com</p>
      <p>Phone: +91-1234567890</p>
    </div>
    <div>
      <h4>Quick Links</h4><br />
      <p>Home</p>
      <p>Products</p>
      <p>Support</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;