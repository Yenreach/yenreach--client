import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Button from '../ui/Button'

const index = () => {
  const { pathname } = useLocation()

  return (
    <header className='bg-white shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full'>
      <div>
        <img src={Logo} alt="" className='h-16 md:h-12' />
      </div>
      <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
        <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
          <li><Link to="/" className={`${pathname==="/" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Home</Link></li>
          <li><Link to="/explore" className={`${pathname==="/explore" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Explore</Link></li>
          <li><Link to="/blog" className={`${pathname==="/blog" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Blog</Link></li>
          <li><Link to="/about" className={`${pathname==="/about" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>About</Link></li>
          <li><Link to="/contact" className={`${pathname==="/contact" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Contact</Link></li>
          <li><Link to="/login" className={`${pathname==="/login" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Login</Link></li>
        </ul>
        <Link to="/login">
          <Button className='py-1.5 px-3 rounded-sm'>
            Add my business
          </Button>
        </Link>
      </nav>
      <img src={Menu} alt="" className='w-8 md:hidden' />
    </header>
  )
}

export default index