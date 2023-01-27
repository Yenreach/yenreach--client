import React from 'react'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'


const index = ({ step, setStep}) => {
  return (
    <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl'>
        <div className='relative mb-11 p-6 border-[6px] border-r-[#E8E8E8] border-t-[#E8E8E8] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -rotate-45 font-semibold'>1/2</span>
        </div>
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
        <Button className='p-3 w-full flex justify-center' onClickFunc={() => setStep(2)}>
            Next
        </Button>
    </form>
  )
}

export default index