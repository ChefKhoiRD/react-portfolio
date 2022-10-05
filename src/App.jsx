// Import 
import React from 'react';
import About from './about/About';
import Projects from './projects/Projects';
import Home from './home/Home';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Display on page
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path = "/" element = { <Home /> } />
                <Route exact path = "/about" element = { <About /> } />
                <Route exact path = "/projects" element = {<Projects />} />
                <Route exact path = "/contact" element = {<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
};

// Export to index.js
export default App;