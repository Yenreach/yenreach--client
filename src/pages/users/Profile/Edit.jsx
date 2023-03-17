import React, { useReducer } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetUser, apiGetSavedBusinesses } from '/src/services/UserService'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'
import { CiEdit } from "react-icons/ci";
import { RiAddBoxLine } from "react-icons/ri";





const Profile = () => {
    const [passwordData, updatePasswordData] = useReducer(
        (state, newValue) => {
          return {
            ...state,
            ...newValue,
          };
        },
        {
          current_password: "",
          password: "",
          password_confirmation: "",
        },
      );
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
          first_name: '',
          gender: '',
          phone_number: '',
          photo: '',
          skills: [],
        },
      );
    const { isLoading, error, data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: () => getData(apiGetUser),
    })
    const { data: savedBusinesses } = useQuery({
        queryKey: ['savedBusinesses'],
        queryFn: () => getData(apiGetSavedBusinesses),
    })
      console.log("profile", profile)
    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        updateProfileDetails({ [name]: value });
        };
    
    const handlePhotoUpload = () => {
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm xl:pr-80'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-25 font-normal text-green'>Edit your profile</h1>
                <Button variant='' className="p-2 px-4 rounded-md hover:brightness-110">
                    Save Changes
                </Button>
            </div>
            <section className="">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-12 mb-12 rounded-2xl bg-white p-5 md:px-7">
                <div className="flex-1 max-w-3xl">
                    <div className="mb-4 flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-black/60">
                        Personal Details
                        </h4>
                    </div>
                    <div className="mb-8 grid lg:grid-cols-2 gap-3 overflow-x-auto">
                        <label htmlFor='full_name' className="flex gap-4 items-center border p-3 rounded-md relative cursor-pointer">
                            <CiEdit size="1.5rem" color="#25D366" className="absolute top-1/2 -translate-y-1/2 right-2" />
                            <span className="">Full Name:</span>
                            <input
                                name='full_name'
                                id='full_name'
                                type="text"
                                className="bg-inherit outline-none w-fit"
                                placeholder=""
                                value={profileDetails?.first_name}
                                onChange={(e) =>
                                updateProfileDetails({ first_name: e.target.value })
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
                                placeholder="Email"
                                value={profileDetails?.email}
                                onChange={(e) =>
                                updateProfileDetails({ email: e.target.value })
                                }
                            />
                        </label>
                    </div>
                </div>
                <label htmlFor="photo" className="w-20 h-20 bg-gray rounded-full relative cursor-pointer">
                    <span className="absolute bottom-0 right-0 -translate-x-1/2 bg-[#25D366] w-5 h-5 rounded-full overflow-hidden grid place-items-center z-10">
                        <CiEdit size="" color="white" className="" />
                    </span>
                    <input type="file" name="photo" id="photo" className="hidden" onChange={(e)=> handlePhotoUpload(e.target.files[0])}  />
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
                  <button className="border border-black text-black bg-transparent p-1 px-2.5 text-xs hover:border-primary hover:bg-gray-200 hover:bg-opacity-30 flex items-center gap-3 rounded-md w-fit">
                    <RiAddBoxLine size="1rem" className="inline-block" />
                    Upload New resume/CV
                  </button>
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
                  <input value={passwordData?.current_password} onChange={(e) =>
                      updatePasswordData({ current_password: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="font-medium">
                    New Password
                  </label>
                  <input value={passwordData?.password}  onChange={(e) =>
                      updatePasswordData({ password: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="font-medium">
                    Confirm New Password
                  </label>
                  <input value={passwordData?.password_confirmation} onChange={(e) =>
                      updatePasswordData({ password_confirmation: e.target.value })
                    } type="text" className="border border-black/40 p-2 px-4 outline-none focus:outline-black/60"  />
                </div>
                <div className="flex justify-end mt-3">
                  <Button onClick={handleChangePassword} className="p-2 px-4 rounded-md hover:brightness-110">
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