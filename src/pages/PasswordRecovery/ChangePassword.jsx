import React, { useEffect } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { apiGetUser } from '/src/services/UserService'
import { apiCheckPassword, apiResetPassword } from '/src/services/AuthService'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import Loading from '/src/components/Loader';

const ChangePassword = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [locationData, setLocationData] = React.useState(null);

  const resetPasswordMutation = usePost({ api: apiResetPassword })

  const {isLoading: userLoading, data: userData } = useFetch({
    api: apiGetUser,
    key: ['profile'],
    param: {user_string: locationData?.[0]},
    enabled: !!locationData[0],
  })

  const { data: passwordCheck, isLoading: checkingPassword } = useFetch({
    api: apiCheckPassword,
    key: ['checkPassword'],
    param: {user_string: userData?.verify_string, p_string: locationData?.[1]},
    enabled: !!userData?.verify_string,
  })

  const { user } = useAuthContext()
  const location = useLocation()

  useEffect(() => {
    console.log(location?.search?.split("?")[1]?.split("/"))
  }, [location])
  
  if (user) {
    return <Navigate to={{ pathname: '/users', state: { from: location } }} />
  }

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
    } else if (password.length < 8) {
        setError('Password must be at least 8 characters')
        return
    } else {
        resetPasswordMutation.mutate({verify_string: userData?.verify_string, password, confirmPassword})
    }
    }
  

  return (
    <>
      {(userLoading || checkingPassword) && <Loading />}
      <Header />
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen px-6 xs:px-8">
      <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
        <h1 className="text-green font-bold text-2xl mb-8">
          Password Reset
        </h1>
        <form className='flex flex-col w-full gap-10 relative' action="" onSubmit={(e) => { 
            e.preventDefault()
            handleResetPassword()
          }}>
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
          
          <Button className='p-3 font-semibold disabled:bg-green/90' type='submit' disabled={isLoading}>
            {loading ? "Loading..." : "Reset" }
          </Button>
          {/* <div className='flex justify-center absolute -bottom-8 left-0 w-full'>
            {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
          </div> */}
        </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword  