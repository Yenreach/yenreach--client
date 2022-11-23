import React from 'react'
import Hero from '../../assets/hero.svg'
import Search from '../../assets/search.svg'


const index = () => {
  return (
    <div className='bg-hero-pattern h-screen bg-cover bg-center text-white flex flex-col justify-between items-center py-20'>
        <h1 className='text-40 text-center leading-tight font-medium'>The No.1 Business listing<br />website in Nigeria</h1>
        <form action="" method="post" className='flex'>
            <input className='px-4 py-3 rounded-tl-md rounded-bl-md bg-inherit border-2 border-white' type="text" name="business" id="business" placeholder='business'/>
            <input className='px-4 py-3 border-l-0 border-r-0 bg-inherit border-2 border-white' type="text" name="location" id="location" placeholder='location' />
            <button className='bg-color1 rounded-tr-md rounded-br-md text-white py-1.5 px-5'>
              <img src={Search} alt="search icon" />
            </button>
        </form>
        <div className='flex items-center justify-between w-4/5'>
          <div className='flex flex-col items-center'>
            <span className='text-40 font-medium'>2000+</span>
            <span className='2xl'>Businesses</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-40 font-medium'>172+</span>
            <span className='2xl'>Locations</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-40 font-medium'>50000+</span>
            <span className='2xl'>Audience</span>
          </div>
        </div>
    </div>
  )
}

export default index