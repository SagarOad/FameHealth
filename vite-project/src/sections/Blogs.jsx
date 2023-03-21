import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <div className='bg-white mt-32 p-6 md:p-16 text-center'>
         <h1 className='text-[33px] text-[#464646] font-bold font-[poppins]'>Blogs/News</h1>
         <div className='w-[10%] my-4 mx-auto h-[4px] bg-[#6AC4B5]'></div>
         <div className='px-12 mb-6 md:px-46 lg:px-56'>    
           <p className='text-[20px] text-[#464646]'>
         Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations or other related services for the investigation or treatment of a Disability.
          </p>
         </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3'>
         <BlogCard />
         <BlogCard />
         <BlogCard />
        </div>
    </div>
  )
}

export default Blogs