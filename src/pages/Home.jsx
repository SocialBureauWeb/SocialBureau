import React from 'react'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import MouseGlow from '../components/MouseGlow'
import Slider from '../components/Slider'
import ScrollEffect from '../components/ScrollEffect'
import BackedBy from '../components/BackedBy'
import ScrollEffect2 from '../components/ScrollEffect2'
import Card from '../components/Cards'

export const Home = () => {
  return (
    <div className='bg-black'>      
        <MouseGlow/>
        <Intro/>
        <Navbar/>
        <Section/>
        <Card/>
        {/* <ScrollEffect/> */}
        <ScrollEffect2/>
        <BackedBy/>
       
        {/* <Slider/> */}
    </div>
  )
}
