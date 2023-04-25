import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { apiGetUser } from '/src/services/UserService'
import { apiForgotPasswordTemp } from '/src/services/AuthService'
import { apiForgotEmail } from '/src/services/CommonService'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import Loading from '/src/components/Loader';
import useTimeOutMessage from "/src/hooks/useTimeOutMessage"


const ChangePassword = () => {
  const { messageState, setMessageState } = useTimeOutMessage()
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false)
  const [email, setEmail] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const navigate = useNavigate()


  const resetPasswordMutation = usePost({ 
    api: apiForgotPasswordTemp,
    success: (data) => {
        console.log("data", data)
        setLoading(false)
        setSuccess(true)
        setTimeout(() => {
            navigate('/login')
        }, 3000)
    },
    failure: (data) => {
        setLoading(false)
    },
   })




  const handleResetPassword = () => {
    if (password !== confirmPassword) {
        setMessageState('Passwords do not match')
        return
    } else if (password.length < 8) {
        setMessageState('Password must be at least 8 characters')
        return
    } else {
        setLoading(true)
        resetPasswordMutation.mutate({email, new_password: password, confirm_password: confirmPassword})
    }
    }

    // console.log('PCHECK', passwordCheck)
  

  return (
    <>
      {(resetPasswordMutation?.isLoading) && <Loading />}
      <Header />
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen px-6 xs:px-8">
        <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
          <h1 className="text-green font-bold text-2xl mb-8">
            Password Reset
          </h1>
          <>
            {!success ?
                <>
                <form className='flex flex-col w-full gap-10 relative' action="" onSubmit={(e) => { 
                    e.preventDefault()
                    handleResetPassword()
                    }}>
                    <div className="flex flex-col gap-1">
                        <label className='text-sm font-medium text-black/80'htmlFor="name">Email</label>
                        <div className="relative w-full">
                            <input required onChange={(event) => setEmail(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={"email"} name='email' id='email' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-sm font-medium text-black/80'htmlFor="name">Password</label>
                        <div className="relative w-full">
                            <input required onChange={(event) => setPassword(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword1 ? "text" : "password"} name='password' id='password' />
                            {!showPassword1? <BsEye onClick={() => setShowPassword1(true)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword1(false)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                    <label className='text-sm font-medium text-black/80'htmlFor="name">Confirm Password</label>
                    <div className="relative w-full">
                        <input required onChange={(event) => setConfirmPassword(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword2 ? "text" : "password"} name='password' id='password' />
                        {!showPassword2? <BsEye onClick={() => setShowPassword2(true)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' /> : <BsEyeSlash onClick={() => setShowPassword2(false)} className='absolute top-0 bottom-0 m-auto right-3 z-20 scale-110 cursor-pointer' />}
                    </div>
                    </div>
                    
                    <Button className='p-3 font-semibold disabled:bg-green/90' type='submit' disabled={loading}>
                    {loading ? "Loading..." : "Reset" }
                    </Button>
                    <div className='flex justify-center absolute -bottom-8 left-0 w-full'>
                    {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
                    </div>
                </form>
                <p className='font-semibold text-xs mt-8'>Don't have an account? <Link to='/signup' className='text-[#5441ff]'>Sign Up</Link></p>
                </>
                :
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-black/80'>Your password has been successfully reset, you would be redirected to login</p>
                    {/* <Link to='/login' className='text-xs text-green'>Or Click here to login</Link> */}
                </div>
                }
          </>
          
        
        </div>
      </div>
    </>
  )
}

export default ChangePassword  