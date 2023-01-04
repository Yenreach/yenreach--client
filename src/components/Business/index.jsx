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
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </div>
      <div className="w-full bg-new-job-listing text-white rounded-2xl font-extrabold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
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