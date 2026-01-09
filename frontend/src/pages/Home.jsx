import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
    </div>
  )
}

export default Home
