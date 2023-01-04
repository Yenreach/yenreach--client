import React from 'react'
import ProductCard from '../ui/ProductCard'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'

const index = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-smm'>Currently Exploring businesses in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <SearchBar variant='product' />
      <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-extrabold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex gap-2 mt-10 border border-gray w-fit">
        <img src={LeftArrow} alt="" />
        <span className='grid p-2 font-medium place-items-center'>1</span>
        <span className='grid p-2 font-medium place-items-center'>2</span>
        <span className='grid p-2 font-medium place-items-center'>3</span>
        <span className='grid p-2 font-medium place-items-center'>4</span>
        <img src={RightArrow} alt="" />
      </div>
    </>
  )
}

export default index