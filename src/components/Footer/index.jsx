import React from 'react'
import Logo from "../../assets/logo.svg"
import Circle from "../../assets/circle.svg"
import Button from '../ui/Button'
import Input from '../ui/Input'

const index = () => {
  return (
      <footer className='bg-footer-bg pb-14'>
        <div className='flex items-center justify-between gap-8 py-2 border-y-2 border-[#D3DAE6] px-8 md:px-10 lg:px-24 mb-12 sm:mb-28'>
          <h3 className='text-center'>Yenreach.com 2022</h3>
          <nav className="hidden sm:flex items-center gap-x-14 md:gap-4 lg:gap-7">
            <ul className='flex items-center text-sm gap-3 md:gap-4 lg:gap-7 opacity-80'>
              <li><a href="home" className='text-green font-medium'>Home</a></li>
              <li><a href="explore" className=''>Explore</a></li>
              <li><a href="blog">Blog</a></li>
              <li><a href="about">About</a></li>
              <li><a href="contact">Contact</a></li>
              <li><a href="login" className='opacity-70'>Login</a></li>
            </ul>
          </nav>
        </div>
        <div className='px-8 md:px-10 lg:px-24 sm:flex justify-between sm:w-11/12'>
          <div className='flex justify-between gap-8 lg:gap-32 mb-8'>
            <div>
              <h4 className='text-sm font-medium mb-7'>Other pages</h4>
              <ul className='text-smm text-footer-gray flex flex-col gap-6'>
                <li>FAQ</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-medium mb-7'>Affiliates</h4>
              <ul className='text-smm text-footer-gray flex flex-col gap-6'>
                <li>Dordorian concept LTD</li>
                <li>BYS Graduate School</li>
                <li>Busitech model college</li>
                <li>Busitech University</li>
              </ul>
            </div>
          </div>
          <div className='mb-8'>
            <h4 className='text-25 mb-2'>Stay Updated</h4>
            <span className='text-smm text-footer-gray'>Keep a close watch on your favourite businesses</span>
            <form action="" method="post" className='flex text-xs mt-7'>
              <Input type="email" name="email" id="email" placeholder='Enter your email' className='px-2 py-1.5 border-r-0 border-2 rounded-tl-md rounded-bl-md border-gray w-full' />
              <Button className='rounded-tr-md rounded-br-md py-1.5 px-5 text-xs'>
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className='flex items-center justify-between pt-3 px-8 md:px-10 lg:px-24 border-t-2 border-[#D3DAE6]'>
          <img src={Logo} alt="" className='' />
          <div className='flex items-center gap-4'>
            <img src={Circle} alt="" className='w-4 md:w-6' />
            <img src={Circle} alt="" className='w-4 md:w-6 ' />
            <img src={Circle} alt="" className='w-4 md:w-6' />
          </div>
        </div>
      </footer>
  )
}

export default index