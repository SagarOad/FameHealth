import { Input } from 'postcss'
import React from 'react'

const AppointmentBar = () => {
  return (
    <div className=''>
    <div className='flex items-center w-[65%] mx-auto rounded-3xl justify-evenly p-6 mt-24 bg-[#6AC4B5]'>
        
      
        <select id="countries" className="w-[25%] h-14 m-2 bg-[#8fcbc1] border-2 border-white text-white text-sm rounded-lg  block w-full p-2.5">
          <option selected>Select Hospital</option>
          <option value="US">Agha Khan Hospital</option>
          <option value="CA">National Medical Center</option>
          <option value="FR">Indus Hospital</option>
          <option value="DE">South City Hospital</option>
        </select>
      
     
      
        <input type={Input} id="countries" placeholder='Search Doctor, Hospital ...' className="placeholder-white outline-none w-[50%] h-14 m-2 bg-[#8fcbc1] border-2 border-white text-white text-sm rounded-lg  block w-full p-2.5" />
      

      <button className='w-[25%] m-2 h-14 text-black bg-white text-[12px] px-8 rounded-md py-3 font-bold text-center'>BOOK AN APPOINTMENT</button>


      </div>

    </div>
  )
}

export default AppointmentBar