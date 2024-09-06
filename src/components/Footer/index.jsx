import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Circle from "../../assets/circle.svg"
import { toast } from 'react-toastify';
import Loader from '../Loader'
// import Logo from "../../assets/logo.svg"
// import Logo2 from "../../assets/yenreach.png"
import Logo3 from "../../assets/yen-logo.png"



const Footer = () => {
  const { pathname } = useLocation()
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Email submitted successfully");
      setEmail('')
    }, 2000)
  }

  return (
      <footer className='bg-footer-bg pb-14'>
        {loading && <Loader loader={4} />}
        <div className='flex items-center justify-between gap-8 py-2 border-y-2 border-[#D3DAE6] px-8 md:px-10 lg:px-24 mb-12 sm:mb-28'>
          <h3 className='text-center'>Yenreach.com 2022</h3>
          <nav className="items-center hidden sm:flex gap-x-14 md:gap-4 lg:gap-7">
            <ul className='flex items-center gap-3 text-sm md:gap-4 lg:gap-7 opacity-80'>
              <li><Link to="/" className={`${pathname==="/" && "text-green font-medium"}`}>Home</Link></li>
              <li><Link to="/explore" className={`${pathname==="/explore" && "text-green font-medium"}`}>Explore</Link></li>
              <li><Link to="/blogs" className={`${pathname==="/blogs" && "text-green font-medium"}`}>Blog</Link></li>
              <li><Link to="/about" className={`${pathname==="/about" && "text-green font-medium"}`}>About</Link></li>
              <li><Link to="/contact" className={`${pathname==="/contact" && "text-green font-medium"}`}>Contact</Link></li>
              <li><Link to="/login" className={`${pathname==="/login" && "text-green font-medium"}`}>Login</Link></li>
            </ul>
          </nav>
        </div>
        <div className='justify-between px-8 md:px-10 lg:px-24 sm:flex sm:w-11/12'>
          <div className='flex justify-between gap-8 mb-8 lg:gap-32'>
            <div>
              <h4 className='text-sm font-medium mb-7'>Other pages</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li>
                  <Link to={"/faqs"}>FAQ</Link>
                  </li>
                <li>
                  <Link to={"/terms"}>
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy"}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-medium mb-7'>Affiliates</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li>
                  <Link to={"/subsidiaries"}>
                    Dordorian concept LTD
                  </Link>
                </li>
                <li>
                  <Link to={"/subsidiaries"}>
                   BYS Graduate School
                  </Link>
                </li>
                <li>
                  <Link to={"/subsidiaries"}>
                    Busitech model college
                  </Link>
                </li>
                <li>
                  <Link to={"/subsidiaries"}>
                    Busitech University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-8'>
            <h4 className='mb-2 text-25'>Stay Updated</h4>
            <span className='text-xs text-footer-gray'>Keep a close watch on your favourite businesses</span>
            <form onSubmit={handleSubmit} action="" method="post" className='flex text-xs mt-7'>
              <Input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='px-2 py-1.5 border-r-0 border-2 rounded-tl-md rounded-bl-md border-gray w-full' />
              <Button type={'submit'} className='rounded-tr-md rounded-br-md py-1.5 px-5 text-xs'>
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className='flex items-center justify-between pt-3 px-8 md:px-10 lg:px-24 border-t-2 border-[#D3DAE6]'>
          {/* <img src={Logo} alt="" className='' /> */}
          {/* <img src={Logo2} alt="" className='w-32 h-4 my-2 md:my-3 md:w-36 md:h-5' /> */}
          <img src={Logo3} alt="" className='h-8 md:my-3 md:w-44 w-36 md:h-10' />

          <div className='flex items-center gap-4'>
            <img src={Circle} alt="" className='w-4 md:w-6' />
            <img src={Circle} alt="" className='w-4 md:w-6 ' />
            <img src={Circle} alt="" className='w-4 md:w-6' />
          </div>
        </div>
      </footer>
  )
}

export default Footer