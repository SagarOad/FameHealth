import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const DoctorCard = (props) => {
 
  return (
    <div className='bg-[#6AC4B5] drop-shadow-lg m-32 h-[300px]  mx-auto rounded-[40px] pb-8'>
        <div className='flex flex-col items-center justify-center'>
             <img src={props.img} className='w-[120px] mt-[-68px] border-1 rounded-[100%]' />
            <h1 className='text-white mt-2 text-[30px] font-semibold'>{props.name}</h1>
            <p className='text-white my-2 text-[18px]'>{props.speciality}</p>
            <div className='flex mb-4'>
            <AiFillStar color='#ffc109' size={24} />
            <AiFillStar color='#ffc109' size={24} />
            <AiFillStar color='#ffc109' size={24} />
            <AiFillStar color='#ffc109' size={24} />
            <AiFillStar color='#ffc109' size={24} />
            </div>
           
           <div className='flex'>
            <button className='text-white w-[120px] sm:w-[100px] md:w-[140px] drop-shadow-lg sm:w-[134px] md:w-[154px] bg-[#114A8C] hover:bg-[#0d3a6d] focus:ring-4 focus:outline-none font-medium rounded-[18px] text-[10px] md:text-[12px] px-1 py-4 text-center m-2 mt-0 md:mr-4'>Book An Appointment</button>
            <button className='text-white w-[120px] sm:w-[100px] md:w-[140px] drop-shadow-lg sm:w-[134px] md:w-[154px] bg-[#114A8C] hover:bg-[#0d3a6d] focus:ring-4 focus:outline-none font-medium rounded-[18px] text-[10px] md:text-[12px] px-1 py-4 text-center m-2 mt-0 md:mr-0'>Consult Online</button>
            </div>
        </div>
        
    </div>
  )

  
}

export default DoctorCard