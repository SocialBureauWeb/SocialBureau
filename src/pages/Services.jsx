import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import ServicesHeader from '../components/ServicesHeader'
import ServicesList from '../components/ServicesList'

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
        <Navbar/>
      <ServicesHeader onArrowClick={handleArrowClick} />
      <ServicesList ref={listRef} />
    </div>
  )
}
