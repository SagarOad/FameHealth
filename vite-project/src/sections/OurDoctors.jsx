import React from 'react'
import Slider from '../components/Slider'

const OurDoctors = () => {
  return (
    <div className='text-center md:px-28 py-20'>
      <div className='px-[20px]'>
        <h1 className='text-[33px] text-[#464646] font-bold font-[poppins]'>Meet Our Doctors</h1>
         <div className='w-[10%] my-4 mx-auto h-[4px] bg-[#6AC4B5]'></div>
         <p className='text-[20px] text-[#737272]'>
         Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations or other related services for the investigation or treatment of a Disability.
         </p>
         </div>
         <Slider />

         <button type="button" className="drop-shadow-lg text-white bg-[#114A8C] hover:bg-[#0f427c] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-4 text-center mt-10 mr-3 md:mr-0">Explore More Doctors</button>
    </div>
  )
}

export default OurDoctors