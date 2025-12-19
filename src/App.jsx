import React from 'react'
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from './Components/Contact';
import Header from './Components/Header';
import Services from './Components/Services';

import { BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        
        <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  )
}
