import React from 'react'
import BlogCard from '../../components/ui/BlogCard'

const index = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 bg-[url(assets/blog-hero-bg.svg)]">
        <h1 className="text-5xl text-[#89F1B4] font-semibold text-center">
          Keep up with the business world
        </h1>
        <h2 className='text-2xl text-white font-medium'>Articles on Yenreach.com makes sure you never miss a thing</h2>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="w-full text-center">Top Article</h2>
        <div className='grid grid-cols-3 gap-6 text-white'>
          <div className="relative bg-[url('assets/businesses/coperate.svg')] h-104 p-4 min-w\">
            <span className='absolute bottom-24 w-2/3 text-3xlm'>The struggle in the  Corperate world</span>
          </div>
          <div className='grid grid-cols-2 gap-2 col-span-2'>
            <div className="relative bg-[url('assets/businesses/sme.svg')] p-5">
              <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>SME gains $30Mil on Seed A</span>
            </div>
            <div className="relative bg-[url('assets/businesses/tech.svg')] p-5">
              <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
            </div>
            <div className="relative bg-[url('assets/businesses/insure.svg')] p-5">
              <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>The future of Innsurance Companies </span>
            </div>
            <div className="relative bg-[url('assets/businesses/google.svg')] p-5">
              <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>How Google Harms us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="w-full text-center">Top Article</h2>
        <div className='grid grid-cols-3 gap-6 text-white'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  )
}

export default index