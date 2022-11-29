import React from 'react'
import ProductCard from '../ui/ProductCard'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'

const index = () => {
  return (
    <>
      <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-extrabold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex gap-2 border border-gray w-fit mt-10">
        <img src={LeftArrow} alt="" />
        <span className='font-medium p-2 grid place-items-center'>1</span>
        <span className='font-medium p-2 grid place-items-center'>2</span>
        <span className='font-medium p-2 grid place-items-center'>3</span>
        <span className='font-medium p-2 grid place-items-center'>4</span>
        <img src={RightArrow} alt="" />
      </div>
    </>
  )
}

export default index