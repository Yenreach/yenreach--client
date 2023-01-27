import React from 'react'
import { RiAddFill } from 'react-icons/ri'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"



const index = () => {
  return (
    <Dashboard> 
        <div className='flex-1 overflow-hidden'>
          <Head />
          <section className='p-8 px-4 sm:px-8'>
            <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl'>
                <div className='mb-8'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Product Name</label>
                    <Input className='border-gray rounded-lg mt-2' type="text" name="" id="" placeholder='Enter product name' />
                </div>
                <div className='mb-8'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Description</label>
                    <textarea name="description" id="" cols="30" rows="10" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter product Description' ></textarea>
                </div>
                <div className='mb-8 md:flex justify-between gap-9'>
                    <div className='mb-8 w-full'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Category</label>
                        <Input className='border-gray rounded-lg mt-2' type="text" name="" id="" placeholder='Enter your business Phone number' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Add Tags</label>
                        <Input className='border-gray rounded-lg mt-2' type="text" name="" id="" placeholder='Enter your business Email Address' />
                    </div>
                </div>
               
                <div className='mb-8'>
                    <h6 className='font-medium text-sm'>Product Images</h6>
                    <div className='flex items-center flex-wrap gap-4 mt-2'>
                        {/* <div className='flex items-center gap-4 flex-wrap'> */}
                            <div className='bg-gray rounded-lg w-36 h-36'></div>
                            <div className='bg-gray rounded-lg w-36 h-36'></div>
                            <div className='bg-gray rounded-lg w-36 h-36'></div>
                            <div className='bg-gray rounded-lg w-36 h-36'></div>
                            <div className='bg-gray rounded-lg w-36 h-36'></div>
                        {/* </div> */}
                        <label htmlFor="add_image" className='font-medium text-sm mb-2 bg-gray rounded-lg w-36 h-36 flex flex-col gap-2 justify-center items-center px-4'>
                            <RiAddFill size="24px" color='gray' />
                            <p className='text-center text-xs'>
                                <span className='font-semibold'>Choose a file </span>
                                <span className='font-normal'>or drag it here</span>
                            </p>
                        </label>
                        <Input className='border-gray rounded-lg mt-2 hidden' type="file" name="" id="add_image" />
                    </div>
                </div>
                <div className='flex sm:justify-end gap-2'>
                    <Button outlined={true} className='p-2 px-12 md:px-20 rounded text-gray border-2 font-medium'>
                        Cancel
                    </Button>
                    <Button variant="product" className='p-2 px-12 md:px-20 rounded'>
                        Save
                    </Button>
                </div>
            </form>
          </section>
        </div>
    </Dashboard>
  )
}

export default index