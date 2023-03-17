import React from 'react'
import { MdDelete } from 'react-icons/md'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'
import { useQuery } from '@tanstack/react-query'
import { MdOutlineAddBox } from 'react-icons/md'
import Input from '/src/components/ui/Input'
import getData from '/src/utils/getData'
import { apiGetUser, apiGetSavedBusinesses } from '/src/services/UserService'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'




const Profile = () => {
    const { isLoading, error, data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: () => getData(apiGetUser),
    })
    const { data: savedBusinesses } = useQuery({
        queryKey: ['savedBusinesses'],
        queryFn: () => getData(apiGetSavedBusinesses),
    })
    //   console.log("saved", savedBusinesses)
    
  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm lg:pr-60'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-25 font-normal text-green'>Edit your profile</h1>
                <Button variant='' className='px-4 py-2 text-sm rounded'>
                    Save Changes
                </Button>
            </div>
            <div className='bg-white px-8 py-5 mb-8 rounded-2xl flex flex-col-reverse md:flex-row md:items-center gap-4 justify-between'>
                <div>
                    <h2 className='text-lg font-medium my-6 md:mt-0'>Personal Details</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input required className='border-gray rounded-lg mt-2 xl:w-72' type="number" name="price" id="price" placeholder='Enter Price' />
                        <Input required className='border-gray rounded-lg mt-2 xl:w-72' type="number" name="quantity" id="quantity" placeholder='Enter Available Quantity' />
                        <Input required className='border-gray rounded-lg mt-2 xl:w-72' type="text" name="color" id="color" placeholder='Enter Color' />
                        <Input required className='border-gray rounded-lg mt-2 xl:w-72' type="text" name="color" id="color" placeholder='Enter Color' />
                        <Input required className='border-gray rounded-lg mt-2 xl:w-72' type="text" name="color" id="color" placeholder='Enter Color' />
                    </div>
                </div>
                <div className='in-w-[80px]'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/fir-test-f9e66.appspot.com/o/images%2Fb61cd6ed-6fb4-4c1b-b348-c3156d03bb11?alt=media&token=f65537e4-2e26-469c-9f60-2102a3cc7912' alt='profile' className='w-20 h-20 rounded-full object-cover object-center' />
                </div>
            </div>
            <div className='bg-white px-8 py-6 mb-8 rounded-2xl'>
                <h4 className='text-lg font-medium mb-6'>Skills and experience</h4>
                <div className='flex gap-10'>
                    <span>Resume/CV:</span>
                    <div className='flex flex-col items-start gap-3'>
                        <span className='p-3 px-4 md:px-10 rounded border bg-slate-50 text-green'>Davidikperi_CV</span>
                        <label htmlFor='resume' className='p-1 px-2 border rounded-md bg-transparent hover:border-green hover:bg-gray hover:bg-opacity-30 text-xs cursor-pointer flex items-center'>
                            <MdOutlineAddBox size="0.8rem" className='inline-block mr-2' />
                            <span className='whitespace-nowrap'>
                                Upload New resume/CV
                            </span>
                            <input type="file" name="resume" id="resume" className='hidden' />
                        </label>
                    </div>
                </div>
            </div>
            <div className='bg-white px-8 py-6 mb-16 rounded-2xl max-w-lg'>
                <h4 className='text-lg font-medium mb-10'>Change Password</h4>
                <div className='mb-8 flex flex-wrap gap-5'>
                    <div className='w-full'>
                        <label htmlFor="price" className='text-sm'>Current Password</label>
                        <Input required className='border-gray rounded-lg mt-2' type="number" name="price" id="price" placeholder='Enter Price' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="quantity" className='text-sm'>New Password</label>
                        <Input required className='border-gray rounded-lg mt-2' type="number" name="quantity" id="quantity" placeholder='Enter Available Quantity' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="color" className='text-sm'>Confirm New Password</label>
                        <Input required className='border-gray rounded-lg mt-2' type="text" name="color" id="color" placeholder='Enter Color' />
                    </div>
                </div>
            </div>
        </section>
    </div>
</Dashboard>
  )
}

export default Profile  