import React, { useReducer, useEffect } from 'react'
import useFetch from '/src/hooks/useFetch'
import { apiGetUser, apiGetSavedBusinesses, apiUpdateUserCv, apiUpdateUser, apiUpdatePassword } from '/src/services/UserService'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'
import { CiEdit } from "react-icons/ci";
import { RiAddBoxLine, RiFileTextLine } from "react-icons/ri";
import usePost from '/src/hooks/usePost'
import useImage from '/src/hooks/useImage'

const Profile = () => {
  const { url: cvUrl, uploadImage: uploadCV, error: cvError, progress } = useImage()
  const { url: profilePhoto, uploadImage: uploadProfilePhoto } = useImage()
  
  const cvMutation = usePost({ api: apiUpdateUserCv })
  const updateUserMutation = usePost({ api: apiUpdateUser })

  const [passwordData, updatePasswordData] = useReducer(
      (state, newValue) => {
        return {
          ...state,
          ...newValue,
        };
      },
      {
        password1: "",
        password2: "",
        password3: "",
      },
  );

  const updatePasswordMutation = usePost({ 
    api: apiUpdatePassword, 
    success: (a,b,c) => {
      updatePasswordData({
        password1: "",
        password2: "",
        password3: "",
      })
    } 
  })

  const [profileDetails, updateProfileDetails] = useReducer(
      (state, newValue) => {
        return {
          ...state,
          ...newValue,
        };
      },
      {
        date_of_birth: '',
        email: '',
        name: '',
        gender: '',
        phone_number: '',
        image: '',
      },
  );

  const { isLoading, error, data: profile } = useFetch({
    api: apiGetUser,
    key: ['profile'],
  })
  // console.log("profile", profile)

  const { data: savedBusinesses }  = useFetch({
    api: apiGetSavedBusinesses,
    key: ['savedBusinesses'],
    staleTime: 1000 * 60 * 5,
  })

  useEffect(() => {
    if (profile) {
      updateProfileDetails(profile)
    }
  }, [profile])

  useEffect(() => {
    const updateCV = () => {
      cvMutation.mutate({
        user_string: profile?.verify_string,
        cv: cvUrl
      })
    }
    if (cvUrl) {
      updateCV()
    }
  }, [cvUrl])

  const handleProfilePhotoUpload = (file) => {
    console.log("file", file)
    uploadProfilePhoto(file)
  }

  const handleUploadCV = (file) => {
      uploadCV(file)
  }

  const handleChangePassword = () => {
    const data = { ...passwordData, verify_string: profile?.verify_string }
    updatePasswordMutation.mutate(data);
  };

  const handleSaveChanges = () => {
    const data = {...profileDetails, image: profilePhoto, user_string: profile?.verify_string}
    updateUserMutation.mutate(data)
  }

  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm xl:pr-80'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-25 font-normal text-green'>Edit your profile</h1>
                <Button onClickFunc={handleSaveChanges} variant='' className="p-2 px-4 rounded-md hover:brightness-110">
                    Save Changes
                </Button>
            </div>
            <section className="">
            <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 md:gap-12 mb-12 rounded-2xl bg-white p-5 md:px-7">
                <div className="flex-1 max-w-3xl">
                    <div className="mb-4 flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-black/60">
                        Personal Details
                        </h4>
                    </div>
                    <div className="mb-8 grid lg:grid-cols-2 gap-3 overflow-x-auto">
                        <label htmlFor='name' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <span className="">Full Name:</span>
                            <input
                                name='name'
                                id='name'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.name}
                                onChange={(e) =>
                                updateProfileDetails({ name: e.target.value })
                                }
                            />
                        </label>
                        <label htmlFor='phone' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <label className="">Phone No.:</label>
                            <input
                                name='phone'
                                id='phone'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.phone_number}
                                onChange={(e) =>
                                updateProfileDetails({ phone_number: e.target.value })
                                }
                            />
                        </label>
                        <label htmlFor='dob' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <label className="">D.O.B.:</label>
                            <input
                                name='dob'
                                id='dob'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.date_of_birth}
                                onChange={(e) =>
                                updateProfileDetails({ date_of_birth: e.target.value })
                                }
                            />
                        </label>
                        <label htmlFor='gender' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <label className="">Gender:</label>
                            <input
                                name='gender'
                                id='gender'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.gender}
                                onChange={(e) =>
                                updateProfileDetails({ gender: e.target.value })
                                }
                            />
                        </label>
                        <label htmlFor='email' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <label className="">Email:</label>
                            <input
                                name='email'
                                id='email'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.email}
                                onChange={(e) =>
                                updateProfileDetails({ email: e.target.value })
                                }
                            />
                        </label>
                    </div>
                </div>
                <label htmlFor="image" className="w-20 h-20 mx-auto bg-gray rounded-full relative cursor-pointer">
                    <span className="absolute bottom-0 right-0 -translate-x-1/2 bg-[#25D366] w-5 h-5 rounded-full overflow-hidden grid place-items-center z-10">
                        <CiEdit size="" color="white" className="" />
                        <img src={profileDetails?.image} alt="" />
                    </span>
                    <input type="file" name="image" id="image" className="hidden" onChange={(e)=> handleProfilePhotoUpload(e.target.files[0])}  />
                </label>
            </div>
          <div className="flex flex-col justify-between gap-12 md:flex-row lg:gap-16  rounded-2xl bg-white p-5 md:px-7 pb-8 mb-12">
            <div className="">
              <h4 className="mb-4 text-lg font-semibold text-black/60">
                Skills and experience
              </h4>
              <div className="flex gap-8 mb-8">
                <span className="w-20 text-right">Resume/CV:</span>
                <div className="flex flex-col gap-3">
                  {profile?.cv &&
                    <a href={profile?.cv} target="_blank" className="flex items-center gap-3 text-primary">
                      <RiFileTextLine size="1.5rem" className="inline-block" />
                      <span className="text-sm">View Resume</span>
                    </a>
                  }    
                  <label className="border border-black text-black bg-transparent p-1 px-2.5 text-xs hover:border-primary hover:bg-gray-200 hover:bg-opacity-30 flex items-center gap-3 rounded-md w-fit cursor-pointer">
                    <RiAddBoxLine size="1rem" className="inline-block" />
                    Upload New resume/CV
                    <input type="file" name="cv" id="cv" className="hidden" onChange={(e)=> handleUploadCV(e.target.files[0])} />
                  </label>
                </div>
              </div>
              <div className="flex gap-8 mb-8">
                <div className="flex flex-col gap-3">
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-8 text-black">
            <div className="flex-1 rounded-2xl bg-white p-5 pb-8 md:pb-20 max-w-lg">
              <h4 className="mb-8 text-lg font-semibold text-black/60">
                Change Password
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="font-medium">
                    Current Password
                  </label>
                  <input value={passwordData?.password1} onChange={(e) =>
                      updatePasswordData({ password1: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="font-medium">
                    New Password
                  </label>
                  <input value={passwordData?.password2}  onChange={(e) =>
                      updatePasswordData({ password2: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="font-medium">
                    Confirm New Password
                  </label>
                  <input value={passwordData?.password3} onChange={(e) =>
                      updatePasswordData({ password3: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex justify-end mt-3">
                  <Button onClickFunc={handleChangePassword} className="p-2 px-4 rounded-md hover:brightness-110">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
    </div>
</Dashboard>
  )
}

export default Profile  