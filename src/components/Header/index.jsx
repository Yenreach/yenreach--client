import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Button from '../ui/Button'

const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()

  return (
    <header className='bg-white shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full'>
      <div>
        <img src={Logo} alt="" className='h-12 md:h-12' />
      </div>
      <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
        <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
          <li><Link to="/" className={`${pathname==="/" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Home</Link></li>
          <li><Link to="/explore" className={`${pathname==="/explore" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Explore</Link></li>
          <li><Link to="/blogs" className={`${pathname==="/blogs" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Blog</Link></li>
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
      {/* <img src={Menu} alt="" className='w-8 md:hidden relative z-50' /> */}
      { isOpen ? 
        <MdOutlineClose onClick={() => setIsOpen(false)} className='text-3xl md:hidden relative z-50  text-green' /> 
        : <BiMenu onClick={() => setIsOpen(true)} className='text-3xl md:hidden relative z-50 text-green' />
      }
      <div className={`md:hidden fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white z-20 translate-x-full ${isOpen && "translate-x-0"} transition-all`}>
        <nav className="md:hidden flex flex-col gap-16 p-4 pt-20 px-8 mb-8">
          <ul className='flex flex-col text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
            <li><Link to="/" className={`${pathname==="/" && "text-green"} pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link to="/explore" className={`${pathname==="/explore" && "text-green"} pb-1.5 px-1 font-medium`}>Explore</Link></li>
            <li><Link to="/blogs" className={`${pathname==="/blogs" && "text-green"} pb-1.5 px-1 font-medium`}>Blog</Link></li>
            <li><Link to="/about" className={`${pathname==="/about" && "text-green"} pb-1.5 px-1 font-medium`}>About</Link></li>
            <li><Link to="/contact" className={`${pathname==="/contact" && "text-green"} pb-1.5 px-1 font-medium`}>Contact</Link></li>
            <li><Link to="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
          </ul>
          <Link to="/login">
            <Button className='py-1.5 px-3 rounded-sm'>
              Add my business
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default index