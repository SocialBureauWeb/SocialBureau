import React from 'react'
import Navbar from '../components/Navbar'
import HomeIntro from '../components/HomeIntro'
import HomeMouse from '../components/HomeMouse'
import HomeSection from '../components/HomeSection'
import HomeCards from '../components/HomeCards'
import Hometagline from '../components/Hometagline'
import HomeFooter from '../components/HomeFooter'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div className='bg-black'>      
        <HomeMouse/>
        <HomeIntro/>
        <Navbar/>
        <HomeSection/>
        <HomeCards/>
        <Hometagline/>
        <HomeFooter/>
        <Footer/>
    </div>
  )
}
