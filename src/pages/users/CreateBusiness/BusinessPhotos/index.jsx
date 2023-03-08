import React from 'react'
import useUploadImage from '../../../../hooks/useUploadImage'
import Button from '../../../../components/ui/Button'
import Input from '../../../../components/ui/Input'
import Add from '/src/assets/add.svg'
import { useMutation } from "@tanstack/react-query";
import { apiAddBusiness } from '../../../../services/UserService'


const index = ({ setStep, handleBusinessData, businessData, setBusinessData }) => {    
    const { url: profileImg, uploadImage: uploadProfileImg, error, progress } = useUploadImage()
    const { url: coverImg, uploadImage: uploadCoverImg, error: coverImgError, progress: coverImgProgress } = useUploadImage()

    const addBusinessMutation = useMutation({
        mutationFn: (data) => {
          return apiAddBusiness(data)
        },
        onSuccess: (data, variables, context) => {
            console.log("success adding business", data)
            setStep(3)
        },
        onError: (error, variables, context) => {
          console.log("error adding business", error)
        },
      })
    

    console.log("url", profileImg, "error", error, "progress", progress)
    console.log("url", coverImg, "error", coverImgError, "progress", coverImgProgress)


    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { ...businessData, profile_img: profileImg, cover_img: coverImg }
        console.log("data", data)
        addBusinessMutation.mutate(data)
    }

  return (
    <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
        <div className='relative mb-2 p-6 border-[6px] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -rotate-45 font-semibold'>2/2</span>
        </div>
        <p htmlFor="business_name" className=''>Upload the cover and profile picture of your business</p>
        <p className='text-xs text-[#777777]'>Note: You can only upload images in png, Jpeg format and they must be less than 4mb in size</p>
        
        <div className='mt-9 mb-32 md:flex gap-9'>
            <div className='mb-4'>
                <label htmlFor="profile_img" className='font-medium text-sm bg-[#E5E5E5] p-16 py-20 flex flex-col items-center justify-center max-w-[25rem] rounded-2xl relative'>
                        <>
                            <img src={Add} alt="" className='mb-4 border-2 rounded-full' />
                            <span className='text-center'>Select profile Image for your business</span>
                        </>
                {profileImg &&
                        <img src={profileImg} alt="" className='top-0 left-0 w-full h-full object-cover absolute z-10' />
                    }        
                    
                </label>
                <Input required={true} onChange={(e) => uploadProfileImg(e.target.files[0])} className='border-[#E5E5E5] rounded-lg hidden' type="file" name="profile_img" id="profile_img" />
            </div>
            <div className=''>
                <label htmlFor="cover_img" className='font-medium text-sm bg-[#E5E5E5] p-16 py-20 flex flex-col items-center justify-center max-w-[25rem] rounded-2xl relative'>
                        <>
                            <img src={Add} alt="" className='mb-4 border-2 rounded-full' />
                            <span className='text-center'>Select cover Image for your business</span>
                        </>
                    {coverImg && <img src={coverImg} alt="" className='top-0 left-0 w-full h-full object-cover absolute z-10' />
                    }        
                </label>
                <Input required={true} onChange={(e) => uploadCoverImg(e.target.files[0])} className='border-[#E5E5E5] rounded-lg hidden' type="file" name="cover_img" id="cover_img" />
            </div>
        </div>
        <Button type='submit' className='p-3 w-full flex justify-center'>
            Create my business
        </Button>
    </form>
  )
}

export default index