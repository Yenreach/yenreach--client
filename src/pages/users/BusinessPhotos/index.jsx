import React from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Add from '../../../assets/add.svg'

const index = ({ setStep }) => {
  return (
    <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl'>
        <div className='relative mb-2 p-6 border-[6px] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -rotate-45 font-semibold'>2/2</span>
        </div>
        <p htmlFor="business_name" className=''>Upload the cover and profile picture of your business</p>
        <p className='text-xs text-[#777777]'>Note: You can only upload images in png, Jpeg format and they must be less than 4mb in size</p>
        
        <div className='mt-9 mb-32 md:flex gap-9'>
            <div className='mb-4'>
                <label htmlFor="profile_img" className='font-medium text-sm bg-[#E5E5E5] p-16 py-20 flex flex-col items-center justify-center max-w-[25rem] rounded-2xl'>
                    <img src={Add} alt="" className='mb-4 border-2 rounded-full' />
                    <span className='text-center'>Select profile Image for your business</span>
                </label>
                <Input className='border-[#E5E5E5] rounded-lg hidden' type="file" name="profile_img" id="profile_img" />
            </div>
            <div className=''>
                <label htmlFor="cover_img" className='font-medium text-sm bg-[#E5E5E5] p-16 py-20 flex flex-col items-center justify-center max-w-[25rem] rounded-2xl'>
                    <img src={Add} alt="" className='mb-4 border-2 rounded-full' />
                    <span className='text-center'>Select cover Image for your business</span>
                </label>
                <Input className='border-[#E5E5E5] rounded-lg hidden' type="file" name="cover_img" id="profile_img" />
            </div>
        </div>
        <Button className='p-3 w-full flex justify-center' onClickFunc={() => setStep(3)}>
            Create my business
        </Button>
    </form>
  )
}

export default index