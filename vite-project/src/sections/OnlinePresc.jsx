import React from 'react'
import PrescUpload from '../components/PrescUpload'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const OnlinePresc = () => {
  return (
    <div className='mt-28'>
      <hr className='bg-[#4A4A4A] hidden lg:block mb-[-122px]' />
        <div className='presc-upload-bg md:rounded-[150px] w-[95%] md:w-[80%] h-auto mx-auto py-12 px-[40px] md:px-[70px] md:px-[60px] xl:px-[110px]  flex flex-col justify-center md:flex-row md:justify-center md:items-center'>
            <div className='md:pr-14'>
             <h1 className='text-white font-bold font-[poppins] text-[43px] md:text-[43px]'>Online Laboratory</h1>
              <p className='text-white text-[26px]'>Lorem Ipsum is simple the greatest dummy text of all time in the industry</p>
            </div>

            <div>
            <button type="button" className="text-white text-[14px] lg:text-[18px] w-[200px] md:w-[290px] flex justify-center items-center bg-[#114A8C] rounded-[50px] hover:bg-[#0f427c] focus:ring-4 focus:outline-none font-medium rounded-lg md:px-6 px-[8px]  md:py-4 py-[12px] text-center  mr-3 md:mr-0">Explore More Doctors <AiOutlinePlusCircle size={33} className='ml-3' /></button>
            </div>
        </div>
         <hr className='bg-[#6AC4B5] w-[40%] mx-auto h-1 mt-12' />
        <PrescUpload />
    </div>
  )
}

export default OnlinePresc