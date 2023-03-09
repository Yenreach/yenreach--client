import React, { useState } from 'react';
import Header from '../../components/Header';
import ArrowDownSvg from '../../assets/arrow-down.svg';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import useSignup from '../../hooks/useSignup';


const index = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    referer: ''
  });
  console.log(data)
  const { signup, error, isLoading, setError } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("@signing", data)
    signup(data);
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
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen sm:pt-14">
        <h1 className="text-green font-bold text-3xl">
          Sign Up
        </h1>
        <form className='flex flex-col w-full md:w-fit px-6 gap-4' action="" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className="flex flex-col gap-1">
              <label className='text-sm font-semibold' htmlFor="name">Your Name</label>
              <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
            </div>
            <div className="flex flex-col gap-1">
              <label className='text-sm font-semibold' htmlFor="email">Email Address</label>
              <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="email" name='email' id='name' />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="password">Password</label>
            <div className="relative w-full">
              <input onChange={handleChange} required className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="password" name='password' id='name' />
              <BsEye className='absolute top-0 bottom-0 m-auto right-3 scale-110' />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="referer">How did you hear about yenreach?</label>
            <div className="relative w-full">
              <input onChange={handleChange} required className='border-2 p-2 w-full bg-[#f5f5f791] border-[#BABFC5] rounded-md' type="text" name='referer' id='referer' />
              <img className='absolute top-0 bottom-0 m-auto right-3 scale-75' src={ArrowDownSvg} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input onChange={handleChange} required className='border-2 p-2 border-[#BABFC5] rounded-md w-fit' type="checkbox" name='terms' id='terms' />
            <label className='text-sm font-semibold w-full' htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <Button type='submit' className='p-3 font-semibold'>
            Sign up for free 
          </Button>
        </form>
        <p className='font-semibold text-sm'>Do you already have an account? <a className='text-[#5441ff]' href='/login'>Log in</a></p>
      </div>
    </>
  )
}

export default index