import React from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';

const index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const { user } = useAuthContext()
  const location = useLocation()
  
  const { auth, error, isLoading, setError, messageState } = useAuth({from: location?.state?.from});

  // console.log("location login", location)

  if (user) {
    return <Navigate to={{ pathname: '/users', state: { from: location } }} />
  }


  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen px-6 xs:px-8">
      <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
        <h1 className="text-green font-bold text-2xl mb-8">
          Login
        </h1>
        <form className='flex flex-col w-full gap-10 relative' action="" onSubmit={(e) =>{ 
            e.preventDefault()
            auth({email, password})
          }}>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80' htmlFor="name">Full Name / Email Address</label>
            <input required onChange={(event) => setEmail(event.target.value)} className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="email" name='name' id='name' />
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80'htmlFor="name">Password</label>
            <div className="relative w-full">
              <input required onChange={(event) => setPassword(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword ? "text" : "password"} name='password' id='password' />
              {!showPassword? <BsEye onClick={() => setShowPassword(true)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword(false)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}
            </div>
            <Link to='/password-recovery' className='text-[#FF6B93] text-xs ml-auto'>Forgot Password?</Link>
          </div>
          
          <Button className='p-3 font-semibold disabled:bg-green/90' type='submit' disabled={isLoading}>
            {isLoading ? "Loading..." : "Login to my account" }
          </Button>
          <div className='flex justify-center absolute -bottom-8 left-0 w-full'>
            {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
          </div>
        </form>
        <p className='font-semibold text-sm mt-8'>Don't have an account? <Link to='/signup' className='text-[#5441ff]'>Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default index  