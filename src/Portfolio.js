import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Myproject from './components/myproject/Myproject';
import Footer from './components/footer/Footer';
import Aboutme from './components/aboutme/Aboutme';
import Codesample from './components/codesample/Codesample';
import Languagesframeworks from './components/languagesframeworks/Languagesframeworks';



function Portfolio() {
  return (
    <div className="App">
      <div className = 'gradient__bg'> 
        <Navbar />
        <Header />
      </div>
      <div>
        <Aboutme />
        <Languagesframeworks />
        <Codesample />
        <Myproject />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
