import React from 'react'
import Copywrite from '../components/Copywrite'
import LoginSignup from '../components/LoginSignup'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import ProductSlider from '../components/ProductSlider'
import Blogs from '../sections/Blogs'
import Footer from '../sections/Footer'
import OnlinePresc from '../sections/OnlinePresc'
import OurDoctors from '../sections/OurDoctors'
import OurPharmacy from '../sections/OurPharmacy'
import OurServices from '../sections/OurServices'

const LandingPage = () => {
  return (
      <div>
        <LoginSignup />
        <Navbar />
        <MainBanner />
        <OurDoctors />
        <OnlinePresc />
        <OurPharmacy />
        <ProductSlider />
        <OurServices />
        <Blogs />
        <Footer />
        <Copywrite />
       </div>
  )
}

export default LandingPage