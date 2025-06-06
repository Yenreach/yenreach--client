import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'
import useFetch from '/src/hooks/useFetch'
import { apiGetUser, apiGetSavedBusinesses } from '/src/services/UserService'
import { useAuthContext } from '/src/hooks/useAuthContext'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'
import BusinessCard from '../../../components/ui/BusinessCard'
import Loader from '/src/components/Loader'



const Profile = () => {
  const { user } = useAuthContext()
//   console.log("user", user)

    const { isLoading, error, data: profile} = useFetch({
        api: apiGetUser,
        key: ['profile', user?.id],
        param: user?.id
      })
    const { data: savedBusinesses, error: errorProfile } = useFetch({
        api: apiGetSavedBusinesses,
        key: ['savedBusinesses'],
      })

//   console.log("profile", profile)

    
  return (
    <Dashboard> 
    {isLoading && <Loader loader={4} />}
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm'>
            <div className='md:max-w-xl bg-white px-8 py-5 mb-16 rounded-3xl'>
                <div className='mb-4'>
                    <span className='block w-12 h-12 rounded-full bg-gray'>
                    <img src={profile?.image} alt="" className='w-full h-full object-cover rounded-full' />
                    </span>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-12 text-sm mb-12'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-gray-dark'>Name</span>
                        <span className='font-medium'>{profile?.name}</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='text-gray-dark'>Email Address</span>
                        <span className='font-medium'>{profile?.email}</span>
                    </div>
                </div>
                <div>
                    <h6 className='mb-1'>Documents</h6>
                    <div className='flex gap-12 justify-between text-sm mb-12 md:w-8/12 h-12 border border-gray rounded py-2 px-1'>
                        <div className='flex gap-4 items-center'>
                            <span className='bg-[#00c8851a] flex justify-cent items-center p-2 text-xs text-green rounded'>PDF</span>
                            <a target="_blank" href={profile?.cv} className='flex flex-col'>
                                <span className=''>View Resume</span>
                                {/* <span className='text-gray text-xs'>Uploaded 22-10-22</span> */}
                            </a>
                        </div>
                        {/* {profile?.cv &&
                    <a href={profile?.cv} target="_blank" className="flex items-center gap-3 text-primary">
                      <RiFileTextLine size="1.5rem" className="inline-block" />
                      <span className="text-sm">View Resume</span>
                    </a>
                  }     */}
                        <MdDelete size='20px' color='black' />
                    </div>
                </div>
                <Link to='/users/profile/edit'>
                    <Button className="px-5 py-3 rounded">
                        Edit Profile
                    </Button>
                </Link>
            </div>
            <div>
                <h6 className='mb-1 text-lg text-green'>Favourites</h6>
                <div className='bg-white rounded-3xl py-4 pl-8'>
                    <div className='flex justify-end gap-2 mb-4'>
                        <span className='flex justify-center items-center p-1 px-2 bg-green rounded-l-full'>
                            <HiOutlineChevronLeft size='20px' color='white' />
                        </span>
                        <span className='flex justify-center items-center p-1 px-2 bg-green rounded-r-full'>
                            <HiOutlineChevronRight size='20px' color='white' />
                        </span>
                    </div>
                    <div className='flex flex-nowrap overflow-hidden gap-6 w-full'>
                        {savedBusinesses?.map((business) => (
                            <BusinessCard key={business.id} business={business} className='w-56' />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
</Dashboard>
  )
}

export default Profile  