import React from 'react'
import {Link} from "react-router-dom";
import "./Style.css";
import logo1 from "../assets/logo1.png";


export default function Header() {
  return (
    <div class="header">
      <img className="logo" src={logo1} alt="Logo" />
      <div class="nav">
      <Link to={"/Home"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Services"}>Services</Link>
      
      <Link to={"/Contact"}>Contact</Link>
      </div>
      
    </div>
  )
}
