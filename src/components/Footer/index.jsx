import React from 'react'
import Logo from "../../assets/logo.svg"
import Button from '../ui/Button'
import Input from '../ui/Input'

const index = () => {
  return (
    <footer className='py-12 mb-11'>
        <header className='flex items-center justify-between bg-white py-2 border-y-2 border-[#D3DAE6] px-36 mb-28'>
          <div>
            <h3>Yenreach.com 2022</h3>
          </div>
          <nav className="flex items-center gap-x-14">
            <ul className='flex items-center text-sm gap-x-7 opacity-80'>
              <li><a href="home" className='text-color1 font-medium'>Home</a></li>
              <li><a href="explore" className=''>Explore</a></li>
              <li><a href="blog">Blog</a></li>
              <li><a href="about">About</a></li>
              <li><a href="contact">Contact</a></li>
              <li><a href="login" className='opacity-70'>Login</a></li>
            </ul>
          </nav>
        </header>
        <div className='px-36 flex justify-between w-11/12'>
          <div className='flex gap-32'>
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
          <div>
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
    </footer>
  )
}

export default index