import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import ServicesHeader from '../components/ServicesHeader'
import ServicesList from '../components/ServicesList'
import ServiceFooter from '../components/ServiceFooter'
import Footer from '../components/Footer'
import AboutCursor from '../components/AboutCursor'
import HomeMouse from '../components/HomeMouse'

export const Services = () => {
    const listRef = useRef(null);

  // Scroll to the list section
  const handleArrowClick = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HomeMouse/>
        <Navbar/>
      <ServicesHeader onArrowClick={handleArrowClick} />
      <ServicesList ref={listRef} />
      <ServiceFooter/>
      <Footer/>
    </div>
  )
}
