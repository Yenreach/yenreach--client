import React from 'react'
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Button from '../ui/Button'

const index = () => {
  return (
<<<<<<< HEAD
    <header className='bg-white flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full'>
=======
    <header className='bg-white flex items-center justify-between py-5 px-4 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full'>
>>>>>>> 34aba418132a191f27ee6cd8bb76ab510aba0cbc
      <div>
        <img src={Logo} alt="" className='h-16 md:h-12' />
      </div>
      <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
        <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
          <li><a href="home">Home</a></li>
          <li><a href="explore" className='text-green pb-1.5 border-b-2 px-1 font-medium'>Explore</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="login">Login</a></li>
        </ul>
        <Button className='py-1.5 px-3 rounded-sm'>
          Add my business
        </Button>
      </nav>
      <img src={Menu} alt="" className='w-8 md:hidden' />
    </header>
  )
}

export default index