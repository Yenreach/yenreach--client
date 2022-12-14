import React from 'react'
import BlogCard from '../../components/ui/BlogCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'

const index = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 py-10 px-4 md:py-24 bg-[url(assets/blog-hero-bg.svg)] mt-[79px] md:mt-[88px]">
        <h1 className="text-3xl md:text-5xl text-[#89F1B4] font-semibold text-center">
          Keep up with the business world
        </h1>
        <h2 className='md:text-2xl text-lg text-white'>Articles on Yenreach.com makes sure you never miss a thing</h2>
      </div>
      <div className="flex flex-col gap-20 px-4 md:px-8 lg:px-[8.4375rem] py-20">
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-blue text-3xl font-semibold">Top Articles</h2>
          <div className='flex flex-col sm:grid grid-cols-3 gap-2 text-white'>
            <div className="relative bg-[url('assets/businesses/coperate.svg')] bg-cover bg-center h-52 sm:h-[26.5rem] p-4">
              <span className='absolute bottom-12 sm:bottom-24 w-2/3 text-3xlm'>The struggle in the  Corperate world</span>
            </div>
            <div className='flex flex-col sm:grid grid-cols-2 gap-2 col-span-2'>
              <div className="relative bg-[url('assets/businesses/sme.svg')] p-5 h-52 bg-cover bg-center">
                <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>SME gains $30Mil on Seed A</span>
              </div>
              <div className="relative bg-[url('assets/businesses/tech.svg')] p-5 h-52 bg-cover bg-center">
                <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
              </div>
              <div className="relative bg-[url('assets/businesses/insure.svg')] p-5 h-52 bg-cover bg-center">
                <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>The future of Innsurance Companies </span>
              </div>
              <div className="relative bg-[url('assets/businesses/google.svg')] p-5 h-52 bg-cover bg-center">
                <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>How Google Harms us</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-blue text-3xl font-semibold">Latest Articles</h2>
          <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-4">
          <img src={LeftArrow} alt="" />
          <span className='font-medium bg-green w-6 h-6 text-sm text-white grid place-items-center'>1</span>
          <span className='font-medium w-6 h-6 text-sm grid place-items-center'>2</span>
          <span className='font-medium w-6 h-6 text-sm grid place-items-center'>3</span>
          <span className='font-medium w-6 h-6 text-sm grid place-items-center'>4</span>
          <img src={RightArrow} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index