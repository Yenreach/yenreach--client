import React from 'react'
import Hero from '../../assets/hero.svg'
import Search from '../../assets/search.svg'
import Input from '../ui/Input'
import Button from '../ui/Button'


const index = () => {
  return (
    <div className='bg-hero-pattern h-[80vh] lg:h-screen bg-cover bg-center text-white flex flex-col justify-between items-center py-32 pt-52 sm:py-20 sm:pt-40 px-4 md:px-10 lg:px-24'>
        <h1 className='text-3xl font-medium sm:text-40 text-center leading-tight'>The No.1 Business listing<br />website in Nigeria</h1>
        <form action="" method="post" className='flex'>
            <Input type="text" name="business" id="business" placeholder='business' className='rounded-tl-md rounded-bl-md' />
            <Input type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
            <Button className='rounded-tr-md rounded-br-md py-4 px-4'>
              <img src={Search} alt="search icon" className='w-12' />
            </Button>
        </form>
        <div className='flex items-center justify-between w-full sm:w-4/5 px-2'>
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