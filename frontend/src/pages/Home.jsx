import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import ChooseUs from '../components/ChooseUs'
import OurAgencies from '../components/OurAgencies'
import OurSolutions from '../components/OurSolutions'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ChooseUs />
      <OurAgencies />
      <OurSolutions />
    </div>
  )
}

export default Home
