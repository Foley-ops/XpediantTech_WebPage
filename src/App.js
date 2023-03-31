import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Services from './pages/services.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <Router>
      <header ><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></header>
      
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/> } />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      </Routes>

 
 
    </Router>

  );
}

  
export default App;
