import React from 'react'
import AppointmentBar from '../components/AppointmentBar'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
      <div>
        <Navbar />
        <div className='main-banner'>
        <MainBanner />
        </div>
       </div>
  )
}

export default LandingPage