import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Analytics from './Analytics';
import { BsTelephone, BsGlobe, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from 'react-icons/md'
import { TbBrandFacebook } from 'react-icons/tb'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import { apiGetOneBusiness, apiGetBusinessCategories, apiGetBusinessSubscription, apiGetBusinessPageVisits, apiEditBusinessProfileImage, apiEditBusinessCoverImage, apiAddBusinessPhoto } from '/src/services/UserService'
import { apiGetBusinessFacilities, apiGetBusinessReviews, apiGetBusinessReviewsStats } from '/src/services/CommonService'
import Header from "/src/components/users/Header"
import Dashboard from "../../../components/layout/Dashboard"
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import Good from '../../../assets/good.svg'
import Edit from '../../../assets/edit.svg'
import Star from '../../../assets/star.svg'
import Loader from '../../../components/Loader'
import { expired, formatDate } from '/src/utils/dateFunc'
import Image from '../../../components/Image';
import useImage from '/src/hooks/useImage'
import { CiEdit } from 'react-icons/ci';
import { useAuthContext } from '/src/hooks/useAuthContext'
import Add from '/src/assets/add.svg'




const index = () => {
  const { id } = useParams()
  const { user } = useAuthContext()
  const reviewsContainerRef = useRef(null)
  const navigate = useNavigate()
  const coverImageRef = useRef(null)
  const { url: profilePhoto, uploadImage: uploadProfilePhoto, loading: uploadingProfileImage } = useImage()
  const { url: CoverPhoto, uploadImage: uploadCoverPhoto, loading: uploadingCoverPhoto } = useImage()
  const { url: businessPhoto, uploadImage: addBusinessPhoto, loading: uploadingBusinessPhoto } = useImage()

  const profileImageMutation = usePost({ 
    api: apiEditBusinessProfileImage ,
    success: (data) => {
      // console.log("data")
    }
  })
  const coverImageMutation = usePost({ 
    api: apiEditBusinessCoverImage ,
    success: (data) => {
      // console.log("data")
    }
  })
  const businessImageMutation = usePost({ 
    api: apiAddBusinessPhoto ,
    success: (data) => {
      refetchBusiness()
    }
  })


  useEffect(() => {
    const updateProfileImg = () => {
      profileImageMutation.mutate({
        user_string: user?.verify_string,
        business_string: id,
        profile_img: profilePhoto
      })
    }
    if (profilePhoto) {
      updateProfileImg()
    }
  }, [profilePhoto])

  useEffect(() => {
    const updateCoverImg = () => {
      coverImageMutation.mutate({
        user_string: user?.verify_string,
        business_string: id,
        cover_img: CoverPhoto
      })
    }
    if (CoverPhoto) {
      updateCoverImg()
    }
  }, [CoverPhoto])

  useEffect(() => {
    const updateCoverImg = () => {
      businessImageMutation.mutate({
        user_string: user?.verify_string,
        business_string: id,
        filepath: businessPhoto
      })
    }
    if (businessPhoto) {
      updateCoverImg()
    }
  }, [businessPhoto])
  
  
  const { isLoading, error, data: business, refetch: refetchBusiness  } = useFetch({
    api: apiGetOneBusiness,
    param: id,
    key: ['userBusiness', id],
  })

  
  const { data: pageVisits } = useFetch({
    api: apiGetBusinessPageVisits,
    param: id,
    key: ['pageVisits', id],
  })
  
  const { data: userCategories } = useFetch({
    api: apiGetBusinessCategories,
    param: id,
    key: ['userCategories', id],
  })
  
  const { error: subscriptionError, data: subscription } = useFetch({
    api: apiGetBusinessSubscription,
    param: id,
    key: ['subscription', id],
  })

  // console.log("sub")

  const { data: facilities, error: errorFacilities } = useFetch({
    api: apiGetBusinessFacilities,
    param: id,
    key: ['facilities', id]
  })

  const { data: reviews, error: errorReviews } = useFetch({
    api: apiGetBusinessReviews,
    param: id,
    key: ['userReviews', id]
  })

  const { data: reviewStats, error: errorStats } = useFetch({
    api: apiGetBusinessReviewsStats,
    param: id,
    key: ['userReviewStats', id]
  })

  const analytics = useMemo(() => {
    if (pageVisits?.pagevisits) {
        const newState = {
          "01": { count: 0 },
          "02": { count: 0 },
          "03": { count: 0 },
          "04": { count: 0 },
          "05": { count: 0 },
          "06": { count: 0 },
          "07": { count: 0 },
          "08": { count: 0 },
          "09": { count: 0 },
          "10": { count: 0 },
          "11": { count: 0 },
          "12": { count: 0 },
        }
        pageVisits?.pagevisits.map((visit) => {
          newState[visit?.month].count += 1
        })
        // setAnalytics(initialState)
        const data = Object.keys(newState)?.map((item, index) => newState[item].count)
        return data
      }
      
  }, [pageVisits?.pagevisits])



  const changeReview = (val) => {
    if(reviewsContainerRef.current?.children?.length > 0){
      if (val === -1) {
        reviewsContainerRef.current.scrollLeft -= reviewsContainerRef.current?.children[0]?.clientWidth
      } else {

        reviewsContainerRef.current.scrollLeft += reviewsContainerRef.current?.children[0]?.clientWidth
      }
    }
  }

  useEffect(() => {
    if (business?.reg_stage < 3) {
      navigate(`/users/edit-business/${id}`)
    }
  }, [business])

  // console.log('subscription', subscription, expired(subscription?.true_expiry))

  const handle = (e) => {
    if (e.target === e?.currentTarget) {
      // console.log("cover image")
      coverImageRef.current.click()
    }
  }

  // console.log("b", subscription?.subscription)

  return (
    <Dashboard>
      <div className='flex-1 overflow-y-auto overflow-hidden'>
        {isLoading && <Loader loader={4} />}
          <Header business_string={id} type="business" />
          {business && (
          <>
            <div onClick={handle} className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center bg-gray cursor-pointer'>
            <input ref={coverImageRef} type="file" name="cover_image" id="cover_image" className="hidden" onChange={(e)=> uploadCoverPhoto(e.target.files[0])}  />

              <img src={business?.cover_img.replace("mediatoken", "media&token")} name={business?.name} className='absolute w-full h-full object-cover' />
              <Link to={`/users/edit-business/${id}`} className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16 bg-green text-white'>
                Edit Profile
              </Link>
              <div className='z-100 w-28 h-28 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 mx-auto absolute rounded-full' >
                <label htmlFor="image" className="absolute top-0 w-full h-full mx-auto bg-gray rounded-full cursor-pointer">
                    <span className="absolute bottom-0 right-0 -translate-x-1/2 bg-[#25D366] w-5 h-5 rounded-full overflow-hidden grid place-items-center z-10">
                        <CiEdit size="" color="white" className="" />
                    </span>
                    <input type="file" name="image" id="image" className="hidden" onChange={(e)=> uploadProfilePhoto(e.target.files[0])}  />
                    <Image url={business?.profile_img} name={business?.name} className='w-full h-full object-cover rounded-full' />
                </label>
              </div>
            </div>
            <section className='px-7'>
              <div className='flex flex-col items-center w-10/12 mx-auto mb-8 pt-16'>
                <h1 className='text-3xl font-semibold text-dark-light mb-2'>{business?.name}</h1>
                <p className='text-sm text-[#476788] mb-3 text-center'>
                  {business?.description}
                </p>
                <div className='flex items-center flex-wrap gap-3 text-xsm text-green md:w-7/8 mb-16'>
                  {userCategories?.map(category =><span key={category.id} className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>{category.category}</span>)}
                  </div>
              </div>
              <div className='mb-11'>
                <h2 className='text-green text-lg font-medium mb-3'>Contact Information</h2>
                <div className='p-4 sm:py-12 sm:px-16 bg-white'>
                    <div className='flex flex-col gap-4 lg:flex-row xl:gap-32 justify-between text-sm text-[#476788]'>
                      <div className='flex flex-col gap-4 sm:gap-6'>
                        {business?.phonenumber &&
                          <div className='flex items-center gap-2'>
                          <BsTelephone size="1.3rem" />
                          <span>{business?.phonenumber}</span>
                        </div>}
                        {business?.email &&
                        <div className='flex items-center gap-2'>
                          <MdOutlineMarkEmailUnread size="1.3rem" />
                          <span>{business?.email}</span>
                        </div>
                        }
                        {business?.website &&
                        <div className='flex items-center gap-2'>
                          <BsGlobe size="1.3rem" />
                          <span>{business?.website}</span>
                        </div>
                        }
                      </div>
                      {business?.address &&
                      <div className='flex items-center gap-2'>
                        <MdOutlineLocationOn size="1.3rem" />
                        <span>{business?.address}</span>
                      </div>}
                      <div className='flex flex-col gap-4 sm:gap-6'>
                      {business?.facebook_link &&
                        <div className='flex items-center gap-2'>
                          <TbBrandFacebook size="1.3rem" />
                          <span>{business?.facebook_link}</span>
                        </div>
                        }
                        {business?.instagram_link &&
                        <div className='flex items-center gap-2'>
                          <BsInstagram size="1.3rem" />
                          <span>{business?.instagram_link}</span>
                        </div>
                        }
                        {business?.whatsapp &&
                        <div className='flex items-center gap-2'>
                          <BsWhatsapp size="1.3rem" />
                          <span>{business?.whatsapp}</span>
                        </div>
                        }
                      </div>
                   </div>
                </div>
              </div>
              <div className='mb-11'>
                <h2 className='text-green text-lg font-medium mb-3'>Business media</h2>
                <div className='flex flex-col sm:flex-row flex-wrap gap-2 text-sm text-[#476788]'>
                  {business?.photos?.length ? business?.photos?.map((photo, index) => <img key={index} src={photo?.filepath} alt=""  className='sm:w-32 sm:h-40 object-cover object-center bg-black/30' />) 
                  : <span className='text-[#476788] text-xs sm:text-sm'>No photos</span>
                  }
                  {(business?.photos?.length < 2 || (business?.photos?.length < Number(subscription?.subscription?.photos))) ? 
                    <div className='mb-4'>
                      <label htmlFor="business_photo" className='font-medium text-xs bg-[#E5E5E5] p-4 flex flex-col items-center justify-center relative cursor-pointer sm:w-32 sm:h-40'>
                              <>
                                  <img src={Add} alt="" className='mb-4 border-2 rounded-full' />
                                  <span className='text-center'>Add a business Photo</span>
                              </>                        
                      </label>
                      <input onChange={(e) => addBusinessPhoto(e.target.files[0])} className='border-[#E5E5E5] rounded-lg hidden' type="file" name="business_photo" id="business_photo" />
                    </div> 
                    :
                    <>
                    <div className='mb-4'>
                      <label htmlFor="business_photo" className='font-medium text-xs bg-[#E5E5E5] p-4 flex flex-col items-center justify-center relative cursor-pointer sm:w-32 sm:h-40 text-center'>
                        {subscription?.subscription?.photos ? <span className='text-[#476788] text-xs sm:text-sm'>
                          You have reached the maximum number of photos for your subscription
                          </span>
                        : <Link to={`/users/subscriptions/${id}`} className='text-[#476788] text-xs sm:text-sm'>
                            Click here to Subscribe to add more photo(s)
                          </Link>
                          }                     
                      </label>
                    </div> 
                    </>

                  }
                </div>
              </div>
              <div className='mb-24 font-arialsans'>
                <h2 className='text-green text-lg font-medium mb-3'>Business Features</h2>
                <div className='bg-white text-[#476788] p-12 rounded-2xl'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm  lg:max-w-3xl'>
                    {facilities?.map(facility => <div key={facility.id} className='flex items-center'>
                      <img src={Good} alt="" className='object-cover object-center mr-3' />
                      <span>{facility.facility}</span>
                    </div>)}
                  </div>
                </div>
                <Link to={`/users/edit-business/${id}`} className='flex items-center justify-center gap-3 rounded-md py-2.5 w-full mt-11 bg-green text-white'>
                  <img src={Edit} alt="" />
                  Edit business profile
                </Link>
              </div>
              <div className='mb-20'>
                <h2 className='text-green text-lg font-medium mb-3'>Business Analytics</h2>
                <div className='font-arialsans text-sm text-[#476788] p-2 sm:p-12 bg-white rounded-2xl overflow-hidden max-h-96 w-full'>
                  <Analytics analytics={analytics} />
                </div>
              </div>
              <div className='mb-16'>
                <h2 className='text-green text-lg font-medium mb-3'>Subscription</h2>
                <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                  <p className='mb-4'>{!expired(subscription?.true_expiry) ? `You are currently on the ${subscription?.subscription} package subscription plan` : "You do not have any active subscription"}</p>
                  <Link to={`/users/subscription/${id}`} className='underline text-green text-sm'>{subscription && "Click here to check out your subscription plan"}</Link>
                </div>
              </div>
              <div className='mb-16'>
                <h2 className='text-green text-lg font-medium mb-3'>Reviews</h2>
                <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                  <div className='flex items-center gap-3.5 mb-2'>
                    {[...Array(reviewStats?.average).keys()].map((_, i) => <img key={i} src={Star} alt="" />)}
                  </div>
                  <p className='mb-9'>Your business is currently rated {reviewStats?.average} stars from the reviews of {reviewStats?.total} users</p>
                  <div ref={reviewsContainerRef} className='flex flex-wrap overflow-hidden gap-6 w-full'>
                    {reviews?.map(review => 
                    <div key={review.id} className='p-3 px-5 bg-[#F0F0F0] w-full sm:w-96'>
                      <div className='flex items-center gap-2 mb-3'>
                        <img src={Star} alt="" />
                        <span className='text-sm'>{review.user}</span>
                      </div>
                      <p className='text-xsm text-[#476788]'>
                        {review.review}
                      </p>
                    </div>
                    )}
                  </div>
                  <div className='hidden lg:flex gap-4 items-center justify-end'>
                    <span  onClick={changeReview} className="bg-green cursor-pointer p-0.5 rounded-l-full">
                      <MdChevronLeft size="1.5rem" color='white' />
                    </span>
                    <span onClick={changeReview} className="bg-green cursor-pointer p-0.5 rounded-r-full">
                      <MdChevronRight size="1.5rem" color='white' />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </>
          )
        }
      </div>
    </Dashboard>
  )
}

export default index