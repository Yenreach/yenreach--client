import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "../../assets/logo.svg"
import Button from '../ui/Button'
import { useAuthContext } from "/src/hooks/useAuthContext"


const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { dispatch, user } = useAuthContext()
  const { pathname } = useLocation()

  const handleOutsideClick = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
   }

  return (
    <>
      <header className='bg-white shadow-md flex items-center justify-between py-3.5 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full min-h-[50px]'>
        <Link to={"/"}>
          <img src={Logo} alt="" className='h-8 md:h-12' />
        </Link>
        <nav className="items-center hidden md:flex gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col items-center text-sm font-medium md:flex-row text-dark-light gap-7 md:gap-4 lg:gap-7'>
            <li><Link to="/" className={`${pathname==="/" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link to="/explore" className={`${pathname==="/explore" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Explore</Link></li>
            <li><Link to="/blogs" className={`${pathname==="/blogs" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Blog</Link></li>
            <li><Link to="/about" className={`${pathname==="/about" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>About</Link></li>
            <li><Link to="/contact" className={`${pathname==="/contact" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Contact</Link></li>
            {!user ? 
            <li><Link to="/login" className={`${pathname==="/login" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            }
          </ul>
          <Link to={user ? "/users" : "/users/add-business"}>
            <Button className='py-1.5 px-3 rounded-sm'>
              {user ? "My Businesses" : "Add my business"}
            </Button>
          </Link>
        </nav>
        { isOpen ? 
          <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
          : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-green' />
        }
      </header>
        <div onClick={handleOutsideClick} className={`md:hidden fixed top-0 right-0 w-full min-h-screen h-screen z-30 translate-x-full ${isOpen && "translate-x-0"} transition-all duration-300 bg-black/50`}>
          <div className='w-5/6 w-full h-full max-w-sm px-4 py-2 ml-auto bg-white shadow md:px-10 rounded-tl-xl'>
            <div className='flex items-center justify-end'>
              { isOpen ? 
                <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
                : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-green' />
              }
            </div>
            <nav className="flex flex-col w-full gap-16 p-4 pt-20 mb-8 md:hidden">
              <ul className='flex flex-col w-full gap-4 text-sm font-medium text-dark-light md:gap-4 lg:gap-7'>
                <li className='w-full'><Link to="/" className={`${pathname==="/" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>Home</Link></li>
                <li className='w-full'><Link to="/explore" className={`${pathname==="/explore" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>Explore</Link></li>
                <li className='w-full'><Link to="/blogs" className={`${pathname==="/blogs" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>Blog</Link></li>
                <li className='w-full'><Link to="/about" className={`${pathname==="/about" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>About</Link></li>
                <li className='w-full'><Link to="/contact" className={`${pathname==="/contact" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>Contact</Link></li>
                {!user ? 
                <li className='w-full'><Link to="/login" className={`${pathname==="/login" && "text-green border-b-2 border-green"} inline-block w-full py-2 px-3 font-medium rounded-md`}>Login</Link></li>
                  :
                  <li>
                    <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                      Logout
                    </div>
                  </li>
                }
              
              </ul>
              <Link to="/users/add-business">
                <Button resetSize={true} className='px-2.5 py-2 text-[12px] rounded-sm'>
                  Add my business
                </Button>
              </Link>
            </nav>
          </div>
        </div>
    </>
  )
}

export default index