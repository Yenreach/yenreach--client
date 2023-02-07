import React from 'react'
import BusinessCard from '../ui/BusinessCard'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'

const index = () => {
  return (
    <>
			<div className='flex items-center justify-center w-full gap-10'>
				<p className='font-medium text-smm'>Currently Exploring businesses in</p>
				<div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-light">
					<img src={Location} alt="location" />
					<span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
				</div>
			</div>
			<SearchBar variant='business' />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </div>
      <div className="grid w-full py-6 text-xl font-extrabold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
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