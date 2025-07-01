import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { AboutSB } from '../components/AboutSB'
import AboutCursor from '../components/AboutCursor'
import { AboutTagline } from '../components/AboutTagline'
import AboutFooter from '../components/AboutFooter'
import AboutCoreValues from '../components/AboutCoreValues'
import Footer from '../components/Footer'

export const About = () => {

  return (
    <div className='bg-black text-white '>
      <AboutCursor/>        
        <AboutSB/>
        <AboutTagline/>
        <AboutCoreValues/>
        <AboutFooter/>
        <Navbar/>
        <Footer/>
    </div>
  )
}
