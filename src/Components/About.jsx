import React from 'react'
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import About3 from "../assets/About3.jpg";
 
export default function About() {
  return (
    <div class="about-card">
 
      <h2>ABOUT US</h2>
      <p>At Pixel Photography, We specialize in creating timeless memories through our lens. Our team of Professional photographers is passionate about capturing authentic emotions and moments</p>
      <div class="image-banner">
        <div class="image-track">
        <img  src={About1} alt="image" />
        <img  src={About2} alt="image" />
        <img  src={About3} alt="image" />

        <img  src={About1} alt="image" />
        <img  src={About2} alt="image" />
        <img  src={About3} alt="image" /> 
      </div>
      </div>
      
      
    </div>
  );
}
 