import React from 'react'
import { RiAddFill } from 'react-icons/ri'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../Dashboard"



const index = () => {
  return (
    <Dashboard> 
        <div className='flex-1 overflow-hidden'>
          <Head />
          <section className='p-8 px-4 sm:px-8'>
            <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl'>
                <div className='md:flex justify-between gap-6 md:mb-4'>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Company Name</label>
                        <Input className='border-gray rounded-lg' type="text" name="" id="" />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Job Title</label>
                        <Input className='border-gray rounded-lg' type="text" name="" id="" />
                    </div>
                    <div className='w-full '>
                        <label htmlFor="business_name" className='font-medium text-sm'>Job Type</label>
                        <Input className='border-gray rounded-lg' type="text" name="" id="" />
                    </div>
                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Location</label>
                        <Input className='border-gray rounded-lg mt-2' type="text" name="" id="" 
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Salary</label>
                        <Input className='border-gray rounded-lg mt-2' type="text" name="" id="" 
                        />
                    </div>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Job Overview</label>
                    <textarea name="description" id="" cols="30" rows="6" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter job Description' ></textarea>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Job Perks and Benefits</label>
                    <textarea name="description" id="" cols="30" rows="6" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter job Description' ></textarea>
                </div>
                
                <div className='flex gap-2 mt-12'>
                    <Button variant="job" className='p-2 px-12 md:px-20 rounded'>
                        Publish
                    </Button>
                    <Button outlined={true} className='p-2 px-12 md:px-20 rounded text-gray border-2 font-medium'>
                        Cancel
                    </Button>
                </div>
            </form>
          </section>
        </div>
    </Dashboard>
  )
}

export default index