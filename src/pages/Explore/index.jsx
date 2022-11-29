import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import Jobs from '../../components/Jobs'
import BusinessIcon from '../../assets/businesses/business.svg'
import JobIcon from '../../assets/jobs/job.svg'
import ProductIcon from '../../assets/products/product.svg'
import Location from '../../assets/location.svg'


const index = () => {
  return (
    <div className='pt-22 w-full relative'>
        <Header />
        <div className="tab flex px-4 py-6 md:px-28 gap-3 md:gap-8 shadow-md border-t border-gray-light sticky z-20 top-[79px] md:top-[88px] bg-white">
            <div className="business flex justify-start items-center gap-1 md:marker:gap-3">
              <img className='w-full' src={BusinessIcon} alt="" />
              <span className='text-gray text-xs font-medium'>Business</span>
            </div>
            <div className="business flex justify-start items-center gap-1 md:marker:gap-3">
              <img src={JobIcon} alt="" />
              <span className='text-gray text-xs font-medium'>Jobs & Careers</span>
            </div>
            <div className="business flex justify-start items-center gap-1 md:marker:gap-3">
              <img src={ProductIcon} alt="" />
              <span className='text-gray text-xs font-medium'>Marketplace</span>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-5 px-5 md:py-20 md:px-20">
          <div className='flex w-full justify-center items-center gap-10'>
            <p className='text-smm font-medium'>Currently Exploring businesses in</p>
            <div className="py-2 px-4 bg-orange-light flex justify-center items-center gap-2">
              <img src={Location} alt="location" />
              <span className='text-smm font-medium'>Bayelsa, Yenegoa</span>
            </div>
          </div>
          
          {/* <Product /> */}
          <Jobs />
        </div>
        {/* <Footer /> */}
    </div>
  )
}   

export default index