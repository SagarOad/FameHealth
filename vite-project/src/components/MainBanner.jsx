import React from 'react'
import AppointmentBar from './AppointmentBar'

const MainBanner = () => {
  return (
    <div className='main-banner bg-banner-img1 bg-no-repeat bg-cover bg-center'>
    <div className='h-[100%] py-[90px] items-center'>
      <div className='text-center px-4'>
        <p className='text-[22px] md:text-[28px] text-white'>FEEL THE DISTANCE WITH US</p>
        <h1 className='text-[62px] md:text-[85px] font-extrabold font-[poppins] text-white'>YOUR HEALTH</h1>
        <h2 className='text-[40px] md:text-[50px] text-white'>IS OUR PRIORITY</h2>

        <div className='flex mt-4 justify-center'>
            <button className='text-white mx-6 bg-[#6AC4B5] hover:bg-[#5ad9c4] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 md:px-4 py-4 text-center mr-3 md:mr-0'>Meet Our Doctors</button>
            <button className='text-white border-2 text-sm px-8 rounded-md mx-6 py-4 text-center mr-3'>Our Services</button>
        </div>

        <AppointmentBar />
      </div>
    </div>
    </div>
  )
}

export default MainBanner