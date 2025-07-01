import React from 'react'
import Navbar from '../components/Navbar'
import CaseStudyHeader from '../components/CaseStudyHeader'
import CaseStudyCards from '../components/CaseStudyCards'
import CaseStudyFooter from '../components/CaseStudyFooter'
import Footer from '../components/Footer'
import HomeMouse from '../components/HomeMouse'

export const CaseStudy = () => {
  return (
    <div>
        <HomeMouse/>
        <Navbar/>
        <CaseStudyHeader/>
        <CaseStudyCards/>
        <CaseStudyFooter/>
        <Footer/>
    </div>
  )
}
