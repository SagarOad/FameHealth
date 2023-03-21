import React from 'react'
import BlogImg1 from '../assets/Blogimgs/b11.jpg'

const BlogCard = () => {
  return (
        <div className="bg-white my-8 mx-6 text-left rounded-lg">
    <a href="#">
        <img className="rounded-t-lg w-full" src={BlogImg1} alt="" />
    </a>

    <div className='my-3'>
        <p className='text-[#292929] font-bold'>ADMIN</p>
        <p className='text-[#BCBCBC] font-bold'>15 JUNE, 2023</p>
     </div>

     <hr className='bg-[#BCBCBC] h-[2px]' />

    <div className="my-3">
        <a href="#">
            <h5 className="mb-2 text-xl font-extrabold text-[#292929] dark:text-white">Increasing In Especially Inquietube Companions Acceptance</h5>
        </a>
        <p className="mb-3 text-[16px] font-normal text-[#BCBCBC]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center mt-3 px-6 py-3 text-[18px] font-bold text-center text-[#292929] border-2 border-[#6AC4B5] rounded-full">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  )
}

export default BlogCard