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
import Footer from '../components/Footer'
import TrustedBy from '../components/Trusted'
import Testimonials from '../components/Testimonials'

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
      <IndustriesWeServe />
      <Featured />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
