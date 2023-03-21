import React from 'react'
import { CiMedicalCase } from 'react-icons/ci'

const OurServicesCard = () => {
  return (
    <div className='bg-white w-[80%] rounded-[33px] mx-auto m-4 p-12 flex flex-col justify-center items-center'>
      <div className='bg-[#6AC4B5] p-4 rounded-full'>
      <CiMedicalCase className='' size={62} />
      </div>
      <h1>Find Best Doctors</h1>
      <p>Nearly every business collects metrics on inventory, sales, and workplace process</p>
      <button>Read more</button>
    </div>
  )
}

export default OurServicesCard