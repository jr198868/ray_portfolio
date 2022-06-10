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
import Codedemo1 from './Codedemo1';
import Codedemo2 from './Codedemo2';
import Portfolio from '../src/Portfolio'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portfolio />}></Route>
                <Route path="/Portfolio" element={<Portfolio />}></Route>
                <Route path="/Codedemo1" element={<Codedemo1 />}></Route>
                <Route path="/Codedemo2" element={<Codedemo2 />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
