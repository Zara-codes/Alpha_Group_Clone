import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import ChooseUs from '../components/ChooseUs'
import OurAgencies from '../components/OurAgencies'
import OurSolutions from '../components/OurSolutions'
import IndustriesWeServe from '../components/IndustriesWeServe'
import Featured from '../components/Featured'
import TrustedBy from '../components/Trusted'
import Testimonials from '../components/Testimonials'
import Latest from '../components/Latest'
import CTASection from '../components/CTASection'
import RecognizedExcellence from '../components/RecognizedExcellence'
import FeaturedIn from '../components/FeaturedIn'

const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ChooseUs />
      <OurAgencies />
      <OurSolutions />
      <IndustriesWeServe />
      <Featured />
      <TrustedBy />
      <Testimonials />
      <Latest />
      <CTASection />
      <RecognizedExcellence />
      <FeaturedIn />
    </div>
  )
}

export default Home
