import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineClose, MdOutlineDashboard, MdOutlineSearch, MdOutlineArticle } from 'react-icons/md'
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Button from '../ui/Button'
import { useAuthContext } from "/src/hooks/useAuthContext"


const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { dispatch, user } = useAuthContext()
  const { pathname } = useLocation()

  return (
    <>
      <header className='text-black/60 bg-white shadow-md flex items-center justify-between pt-2 md:py-5 md:px-10 lg:px-24 fixed bottom-0 left-0 z-10 w-full border-t border-black/10 md:hidden'>
        <nav className="flex items-center gap-x-14 md:gap-4 lg:gap-7 w-full">
          <ul className='flex items-center justify-between w-full text-xs text-dark-light gap-2 md:gap-4 lg:gap-7 font-medium'>
            <li className={`${pathname==="/" && "text-green"} flex-1`}>
                <Link to="/" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <AiOutlineHome className='text-xl' />
                    Home
                </Link>
            </li>
            <li className={`${pathname==="/explore" && "text-green"} flex-1`}>
                <Link to="/explore" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <MdOutlineSearch className='text-xl' />
                    Explore
                </Link>
            </li>
            <li className={`${pathname==="/blogs" && "text-green"} flex-1`}>
                <Link to="/blogs" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <MdOutlineArticle className='text-xl' />
                    Blog
                </Link>
            </li>
            <li className={`${pathname.includes("/users") && "text-green"} flex-1`}>
                <Link to="/users" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <MdOutlineDashboard className='text-xl' />
                    Account
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default index