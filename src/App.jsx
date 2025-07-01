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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
