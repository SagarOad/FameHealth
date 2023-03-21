import React from 'react'
import OurServicesSlider from '../components/OurServicesSlider'

const OurServices = () => {
  return (
    <div className='bg-[#6AC4B5] mt-32 p-8 md:p-16 text-center'>
        
        <h1 className='text-[33px] text-white font-bold font-[poppins]'>Our Services</h1>
         <div className='w-[10%] my-4 mx-auto h-[4px] bg-white'></div>
         <div className='md:px-56'>
           <p className='text-[20px] text-white'>
         Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations or other related services for the investigation or treatment of a Disability.
         </p>
        </div>
        <OurServicesSlider />
    </div>
  )
}

export default OurServices