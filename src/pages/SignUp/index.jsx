import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Header from '../../components/Header';
import ArrowDownSvg from '../../assets/arrow-down.svg';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import useAuth from '../../hooks/useAuth';

const index = () => {
  const [showPassword, setShowPassword] = React.useState({password: false, password2: false});

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    referral: ''
  });
  const location = useLocation()

  const { auth, error, isLoading, setError, messageState } = useAuth({from: location?.state?.from});

  const handleSubmit = (event) => {
    event.preventDefault();
    auth(data, "signup");
    // console.log("@signing", data)
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

    
  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-center gap-8 items-center min-h-screen pt-20 pb-20">
      <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
        <h1 className="text-green font-bold text-2xl">
          Sign Up
        </h1>
        <form className='flex flex-col w-full md:w-fit px-6 gap-4 relative' action="" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className="flex flex-col gap-1">
              <label className='text-sm font-medium text-black/80' htmlFor="name">Your Name</label>
              <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
            </div>
            <div className="flex flex-col gap-1">
              <label className='text-sm font-medium text-black/80' htmlFor="email">Email Address</label>
              <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="email" name='email' id='name' />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80' htmlFor="password">Password</label>
            <div className="relative w-full">
              <input onChange={handleChange} required className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword?.password ? "text" : "password"} name='password' id='password' />
              {!showPassword?.password ? <BsEye onClick={() => setShowPassword(prev => ({...prev, password: true }))} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword(prev => ({...prev, password: false }))} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}      
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80' htmlFor="password2">Confirm Password</label>
            <div className="relative w-full">
              <input onChange={handleChange} required className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword?.password2 ? "text" : "password"} name='password2' id='password2' />
              {!showPassword?.password2 ? <BsEye onClick={() => setShowPassword(prev => ({...prev, password2: true }))} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword( prev => ({...prev, password2: false }))} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}  
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80' htmlFor="referer">How did you hear about yenreach?</label>
            <div className="relative w-full">
              <input onChange={handleChange} required className='border-2 p-2 w-full bg-[#f5f5f791] border-[#BABFC5] rounded-md' type="text" name='referer' id='referer' />
              <img className='absolute top-0 bottom-0 m-auto right-3 scale-75' src={ArrowDownSvg} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] rounded-md w-fit cursor-pointer' type="checkbox" name='terms' id='terms' />
            <a href='/terms' target="_blank" className='text-[#5441ff] text-sm font-semibold w-full cursor-pointer'>
              I agree to terms & conditions
            </a>
            
          </div>
          <Button className='p-3 font-semibold disabled:bg-green/90' type='submit' disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign up for free " }
          </Button>
          <div className='flex justify-center absolute -bottom-8 left-0 w-full'>
            {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
          </div>
          <p className='font-semibold text-sm'>Do you already have an account? <Link to='/login' className='text-[#5441ff]'>Log in</Link></p>
        </form>
        </div>
      </div>
    </>
  )
}

export default index