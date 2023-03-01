import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetAllCategories } from '/src/services/CommonService'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'


const index = ({ setStep, handleBusinessData}) => {
    const { isLoading, error, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => getData(apiGetAllCategories),
      })
    console.log("categories", categories)

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep(2)
    }
  return (
    <form action="" className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
        <div className='relative mb-11 p-6 border-[6px] border-r-[#E8E8E8] border-t-[#E8E8E8] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -rotate-45 font-semibold'>1/2</span>
        </div>
        <div className='mb-8'>
            <label htmlFor="name" className='font-medium text-sm'>Business Name</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="name" id="name" placeholder='Enter your business name' />
        </div>
        <div className='mb-8'>
            <label htmlFor="description" className='font-medium text-sm'>Business Description</label>
            <textarea required={true} onChange={handleBusinessData} name="description" id="description" cols="30" rows="10" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter your business Discription' />
        </div>
        <div className='mb-8'>
            <label htmlFor="category" className='font-medium text-sm'>Add tags</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="category" id="category" placeholder='Add a tag to your business' />
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='mb-8 w-full'>
                <label htmlFor="phone" className='font-medium text-sm'>Phone Number</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="phone" id="phone" placeholder='Enter your business Phone number' />
            </div>
            <div className='w-full'>
                <label htmlFor="email" className='font-medium text-sm'>Email Address</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="email" id="email" placeholder='Enter your business Email Address' />
            </div>
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="state_id" className='font-medium text-sm'>State</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="state_id" id="state_id" placeholder='Enter state' />
            </div>
            <div className='w-full mb-8'>
                <label htmlFor="lga" className='font-medium text-sm'>LGA</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="lga" id="lga" placeholder='Enter LGA' />
            </div>
            <div className='w-full '>
                <label htmlFor="town" className='font-medium text-sm'>City/Town</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="town" id="town" placeholder='Enter city' />
            </div>
        </div>
        <div className='mb-8'>
            <label htmlFor="address" className='font-medium text-sm'>Business Address</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="address" id="address" placeholder='Enter your business Address' />
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="month_started" className='font-medium text-sm'>Business start month</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="month_started" id="month_started" placeholder='Enter your business start Month' />
            </div>
            <div className='w-full '>
                <label htmlFor="year_started" className='font-medium text-sm'>Business start year</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="year_started" id="year_started" placeholder='Enter your business start Year' />
            </div>
        </div>
        <Button type='submit' className='p-3 w-full flex justify-center'>
            Next
        </Button>
    </form>
  )
}

export default index