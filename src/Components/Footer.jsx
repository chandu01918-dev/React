import React from "react";
import logo1 from "../assets/logo1.png";
import fblogo from "../assets/fblogo.png";
import youtubelogo from "../assets/youtubelogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo1} alt="Pixel Photography" />
          <p>
            Capturing timeless moments with creativity and passion.
            Professional photography for every special occasion.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>We’d love to connect with you for your next shoot or collaboration.</p>
 
                <p><strong>Address:</strong> 123 Pixel Street, Hyderabad, India</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> info@pixelphotography.com</p>
 
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src={fblogo} alt="Facebook" />
            <img src={youtubelogo} alt="YouTube" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Pixel Photography | All Rights Reserved</p>
      </div>
    </footer>
  );
}
