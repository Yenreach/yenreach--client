import React from 'react';
import Header from '../../components/Header';
import PasswordSvg from '../../assets/password.svg';
import ArrowDownSvg from '../../assets/arrow-down.svg';
import Button from '../../components/ui/Button';

const index = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen ">
        <h1 className="text-green font-bold text-3xl">
          Sign Up
        </h1>
        <form className='flex flex-col w-full md:w-fit px-6 gap-4' action="">
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className="flex flex-col gap-1">
              <label className='text-sm font-semibold' htmlFor="name">Your Name</label>
              <input className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
            </div>
            <div className="flex flex-col gap-1">
              <label className='text-sm font-semibold' htmlFor="email">Email Address</label>
              <input className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="email" name='email' id='name' />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="password">Password</label>
            <div className="relative w-full">
              <input className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="password" name='password' id='name' />
              <img className='absolute top-0 bottom-0 m-auto right-3 scale-75' src={PasswordSvg} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">How did you hear about yenreach?</label>
            <div className="relative w-full">
              <input className='border-2 p-2 w-full bg-[#f5f5f791] border-[#BABFC5] rounded-md' type="text" name='name' id='name' />
              <img className='absolute top-0 bottom-0 m-auto right-3 scale-75' src={ArrowDownSvg} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input className='border-2 p-2 border-[#BABFC5] rounded-md w-fit' type="checkbox" name='name' id='name' />
            <label className='text-sm font-semibold w-full' htmlFor="name">I agree to terms & conditions</label>
          </div>
          <Button className='p-3 font-semibold'>
            Sign up for free 
          </Button>
        </form>
        <p className='font-semibold text-sm'>Do you already have an account? <a className='text-[#5441ff]' href='/login'>Log in</a></p>
      </div>
    </>
  )
}

export default index