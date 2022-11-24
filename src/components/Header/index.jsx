import React from 'react'
import Logo from "../../assets/logo.svg"

const index = () => {
  return (
    <header className='flex items-center justify-between py-5 bg-white px-36'>
      <div>
        <img src={Logo} alt="" />
      </div>
      <nav className="flex items-center gap-x-14">
        <ul className='flex items-center text-sm text-dark-light gap-x-7 font-medium'>
          <li><a href="home">Home</a></li>
          <li><a href="explore" className='text-color1 pb-1.5 border-b-2 px-1 font-medium'>Explore</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="login">Login</a></li>
        </ul>
        <button className='bg-color1 text-white py-1.5 px-3 rounded-sm'>
          Add my business
        </button>
      </nav>
    </header>
  )
}

export default index