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
          Password Recovery
        </h1>
        <p className='text-sm px-6 md:w-1/4 text-center'>Please enter the email Address of your account so we can send you a ONE-TIME Password</p>
        <form className='flex flex-col w-full md:w-[30%] px-6 md:px-0 gap-10' action="">
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">Email Address</label>
            <input className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="email" name='email' id='email' />
          </div>
          
          <Button className='p-3 font-semibold'>
            Recover my account
          </Button>
        </form>
        <p className='font-semibold text-sm'>Don't have an account? <a className='text-[#5441ff]' href='/signup'>Sign Up</a></p>
      </div>
    </>
  )
}

export default index