import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link, useSearchParams } from 'react-router-dom'
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
import useTimeOutMessage from "/src/hooks/useTimeOutMessage"


const ChangePassword = () => {
  const { messageState, setMessageState } = useTimeOutMessage()
  const [passwordCheck, setPasswordCheck] = React.useState(false);
  const [checkingPassword, setCheckingPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false)
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [locationData, setLocationData] = React.useState([]);
  const { user } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  

  console.log({ searchParams: searchParams.get('hash') })
  console.log({ searchParams: searchParams.get('id') })
  console.log({ searchParams: searchParams.get('time') })


  const resetPasswordMutation = usePost({ 
    api: apiResetPassword,
    success: (data) => {
      setSuccess(true)
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
   })

  // const {isLoading: userLoading, data: userData } = useFetch({
  //   api: apiGetUser,
  //   key: ['profile'],
  //   param: locationData?.length && locationData[0],
  //   enabled: locationData?.length ? !!locationData[0] : false,
  //   onSuccess: async (data) => {
  //     console.log("user data", data, "location data", locationData)
  //     setCheckingPassword(true)
  //     if (userData?.id) {
  //       const { data } = await apiCheckPassword({user_string: userData?.id, p_string: locationData?.length && locationData[1]})
  //       console.log("data", data)
  //       if (data?.status === 'success') {
  //         setPasswordCheck(true)
  //       } else {
  //         setPasswordCheck(false)
  //       }
  //     }
  //     setCheckingPassword(false)
  //   }
  // })


  useEffect(() => {
    setLocationData(location?.search?.split("?")[1]?.split("/"))

  }, [location])
  
  // if (user) {
  //   return <Navigate to={{ pathname: '/users', state: { from: location } }} />
  // }

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
        setMessageState('Passwords do not match')
        return
    } else if (password.length < 8) {
        setMessageState('Password must be at least 8 characters')
        return
    } else {
        resetPasswordMutation.mutate({
          id: searchParams.get('id'),
          hash: searchParams.get('hash'),
          time: searchParams.get('time'),
          password, 
          confirmPassword
        })
    }
    }

    // console.log('PCHECK', passwordCheck)
  

  return (
    <>
      {resetPasswordMutation?.isLoading && <Loading />}
      <Header />
      <div className="flex flex-col w-full justify-center gap-14 items-center h-screen px-6 xs:px-8">
        <div className='max-w-lg flex flex-col justify-center items-center gap-4 w-full md:pt-8'>
          <h1 className="text-green font-bold text-2xl mb-8">
            Password Reset
          </h1>
          {/* {passwordCheck ?  */}
          <>
          {!success ?
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
                
                <Button className='p-3 font-semibold disabled:bg-green/90' type='submit' disabled={loading}>
                  {loading ? "Loading..." : "Reset" }
                </Button>
                <div className='flex justify-center absolute -bottom-8 left-0 w-full'>
                  {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
                </div>
              </form>
          :
          <div className='flex flex-col gap-4'>
            <p className='text-sm text-black/80'>Your password has been successfully reset</p>
            <Link to='/login' className='text-xs text-green'>Click here to login</Link>
          </div>
          }
          </>
          {/* :
          <div className='flex flex-col gap-4'>
            <p className='text-sm text-black/80'>The link you are trying to access is invalid or has expired</p>
            <Link to='/password-recovery' className='text-xs text-green'>Click here to restart the password reset process</Link>
          </div>
          } */}
        </div>
      </div>
    </>
  )
}

export default ChangePassword  