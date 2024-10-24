import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import usePost from '/src/hooks/usePost'
import Loader from '/src/components/Loader'
import { apiForgotEmail } from '../../services/AuthService';



const index = () => {
  const [email, setEmail] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  const forgotPasswordMutation = usePost({ 
    api: apiForgotEmail,
    success: (data) => {
      console.log("data", data)
      setSuccess(true)
    }
   })

   const handleSubmit = () => {
    forgotPasswordMutation.mutate(email)
  }

  console.log({forgotPasswordMutation})
  
  return (
    <>
    {forgotPasswordMutation.isLoading && <Loader Loader={4} />}
      <Header />
      <div className="flex flex-col w-full justify-center items-center h-screen px-6">
        {!success ? 
        <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
          <h1 className="text-green font-bold text-2xl mb-8">
            Password Recovery
          </h1>
          <p className='text-sm text-black/50 max-w-[330px] text-center'>Please enter the email Address of your account so we can send you a ONE-TIME Password</p>
          <form className='flex flex-col w-full gap-12 mt-4 text-sm' action="">
            <div className="flex flex-col gap-1 w-full">
              <label className='text-sm font-medium text-black/80' htmlFor="name">Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 p-2 border-black/10 bg-[#f5f5f791] rounded-md' type="email" name='email' id='email' />
            </div>
            <Button onClickFunc={handleSubmit} className='p-3 font-semibold'>
              Recover my account
            </Button>
          </form>
          
          <p className='font-semibold text-sm mt-8'>Don't have an account? <Link to='/signup' className='text-[#5441ff]'>Sign Up</Link></p>
        </div>
        :
        <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
          <h1 className="text-green font-bold text-2xl mb-8">
            Password Recovery
          </h1>
          <p className='text-center'>
              Your Password reset link has been sent to your mail - <b>{email}</b>
          </p>
          <p className='font-semibold text-xs mt-8'>Don't have an account? <Link to='/signup' className='text-[#5441ff]'>Sign Up</Link></p>
      </div>
        }
      </div>
    </>
  )
}

export default index