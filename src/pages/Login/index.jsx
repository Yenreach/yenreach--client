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
          Login
        </h1>
        <form className='flex flex-col w-full md:w-[30%] px-6 md:px-0 gap-10' action="">
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">Full Name / Email Address</label>
            <input className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">Password</label>
            <div className="relative w-full">
              <input className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
              <img className='absolute top-0 bottom-0 m-auto right-3 scale-75' src={PasswordSvg} alt="" />
            </div>
            <p className="w-full text-xs text-[#FF6B93] text-right">Forgot Password?</p>
          </div>
          
          <Button className='p-3 font-semibold'>
            Login to my account
          </Button>
        </form>
        <p className='font-semibold text-sm'>Don't have an account? <a className='text-[#5441ff]' href='/signup'>Sign Up</a></p>
      </div>
    </>
  )
}

export default index  