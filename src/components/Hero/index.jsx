import React from 'react'
import Hero from '../../assets/hero.svg'
import SearchBar from '../ui/SearchBar'


const index = () => {
  return (
    <div className='bg-[url("assets/hero.svg")] h-[80vh] lg:h-screen bg-cover bg-center text-white flex flex-col justify-between items-center py-32 pt-52 sm:py-20 sm:pt-40 px-4 md:px-10 lg:px-24'>
      <h1 className='text-3xl font-medium leading-tight text-center sm:text-40'>The No.1 Business listing<br />website in Nigeria</h1>
      <SearchBar />
      <div className='flex items-center justify-between w-full px-2 sm:w-4/5'>
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-semibold sm:text-40'>2000+</span>
          <span className='2xl'>Businesses</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-semibold sm:text-40'>172+</span>
          <span className='2xl'>Locations</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-semibold sm:text-40'>50000+</span>
          <span className='2xl'>Audience</span>
        </div>
      </div>
    </div>
  )
}

export default index