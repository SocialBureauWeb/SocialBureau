import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { CaseStudy } from './pages/CaseStudy'
import ScrollTop from './components/ScrollTop'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
       <ScrollTop />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
