import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import useLogin from '../../hooks/useLogin';

const index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const { user } = useAuthContext()
  const location = useLocation()
  
  const { login, error, isLoading, setError } = useLogin();


  if (user) {
    return <Navigate to={{ pathname: '/users', state: { from: location } }} />
  }

  

  return (
    <>
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen ">
        <h1 className="text-green font-bold text-3xl">
          Login
        </h1>
        <form className='flex flex-col w-full md:w-[30%] px-6 md:px-0 gap-10' action="">
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">Full Name / Email Address</label>
            <input onChange={(event) => setEmail(event.target.value)} className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-semibold' htmlFor="name">Password</label>
            <div className="relative w-full">
              <input onChange={(event) => setPassword(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword ? "text" : "password"} name='password' id='password' />
              {!showPassword? <BsEye onClick={() => setShowPassword(true)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword(false)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}
            </div>
            <p className="w-full text-xs text-[#FF6B93] text-right">Forgot Password?</p>
          </div>
          
          <Button className='p-3 font-semibold' onClickFunc={() => login(email, password)}>
            {isLoading ? "Loading..." : "Login to my account" }
          </Button>
        </form>
        <p className='font-semibold text-sm'>Don't have an account? <a className='text-[#5441ff]' href='/signup'>Sign Up</a></p>
      </div>
    </>
  )
}

export default index  