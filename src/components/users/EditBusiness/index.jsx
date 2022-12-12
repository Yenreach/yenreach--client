import React from 'react'
import Head from '../Head'
import Input from '../../ui/Input'
import Button from '../../ui/Button'



const index = () => {
  return (
    <main className='flex-1'>
    <Head />
    <section className='p-8 px-4 sm:px-8'>
        <h1 className='text-2xl text-green font-medium mb-5'>Edit your Business profile</h1>
        {/* <BusinessDetails /> */}
        <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl'>
            <div className='mb-8'>
                <label htmlFor="business_name" className='font-medium text-sm'>Business Name</label>
                <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business name' />
            </div>
            <div className='mb-8'>
                <label htmlFor="business_name" className='font-medium text-sm'>Business Description</label>
                <textarea name="descripttion" id="" cols="30" rows="10" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter your business Discription' ></textarea>
            </div>
            <div className='mb-8'>
                <label htmlFor="business_name" className='font-medium text-sm'>Add tags</label>
                <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Add a tag to your business' />
            </div>
            <div className='mb-8 md:flex justify-between gap-9'>
                <div className='mb-8 w-full'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Phone Number</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business Phone number' />
                </div>
                <div className='w-full'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Email Address</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business Email Address' />
                </div>
            </div>
            <div className='mb-8 md:flex justify-between gap-9'>
                <div className='w-full mb-8'>
                    <label htmlFor="business_name" className='font-medium text-sm'>State</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter state' />
                </div>
                <div className='w-full mb-8'>
                    <label htmlFor="business_name" className='font-medium text-sm'>LGA</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter LGA' />
                </div>
                <div className='w-full '>
                    <label htmlFor="business_name" className='font-medium text-sm'>City/Town</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter city' />
                </div>
            </div>
            <div className='mb-8'>
                <label htmlFor="business_name" className='font-medium text-sm'>Business Address</label>
                <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business Address' />
            </div>
            <div className='mb-8 md:flex justify-between gap-9'>
                <div className='w-full mb-8'>
                    <label htmlFor="business_name" className='font-medium text-sm'>Business start month</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business start Month' />
                </div>
                <div className='w-full '>
                    <label htmlFor="business_name" className='font-medium text-sm'>Business start year</label>
                    <Input className='border-gray rounded-lg' type="text" name="" id="" placeholder='Enter your business start Year' />
                </div>
            </div>
            <Button className='p-3 w-full flex justify-center'>
                Save changes
            </Button>
        </form>
        </section>
    </main>
  )
}

export default index