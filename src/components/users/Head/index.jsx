import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Links from '../Links'
import { useAuthContext } from "/src/hooks/useAuthContext"
import ArrowDown from '/src/assets/arrow-down.svg'
import DP from '/src/assets/dashboard/img.svg'
import useFetch from '/src/hooks/useFetch'
import { apiGetOneBusiness } from '/src/services/UserService'
import { apiGetUser, apiGetSavedBusinesses } from '/src/services/UserService'

const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { user } = useAuthContext()

  const { data: profile} = useFetch({
    api: apiGetUser,
    key: ['profile', user?.verify_string],
    param: user?.verify_string
  })


  return (
    <div className='p-4 px-3 sm:px-7 bg-white flex gap-4 justify-between items-center'>
        <h1 className='text-xl text-[#69707D] font-medium'>
            Dashboard
        </h1>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1 h-8 w-8'>
            <img src={profile?.image || DP} alt="" className='w-full h-full rounded-full object-cover' />
            {/* <img src={ArrowDown} alt="" /> */}
          </div>
          { isOpen ? 
            <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50 text-gray-dark`} /> 
            : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-gray-dark' />
          }
        </div>
          <Links isOpen={isOpen} />
    </div>
  )
}

export default index