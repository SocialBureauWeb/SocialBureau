import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DetailedService } from '../components/DetailedService'

export const ServiceDetails = () => {
  return (
    <div>
        <Navbar/>
        <DetailedService/>
        <Footer/>
    </div>
  )
}
