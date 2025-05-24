import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Analytics from './Analytics';
import { BsTelephone, BsGlobe, BsInstagram, BsWhatsapp, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from 'react-icons/md'
import { TbBrandFacebook } from 'react-icons/tb'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import { apiGetOneBusiness, apiEditBusinessProfileImage, apiEditBusinessCoverImage, apiAddBusinessPhoto } from '/src/services/UserService'
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




const Business = () => {
  const { id } = useParams()
  const { user } = useAuthContext()
  const reviewsContainerRef = useRef(null)
  const navigate = useNavigate()
  const coverImageRef = useRef(null)
  const { url: profilePhoto, uploadImage: uploadProfilePhoto, loading: uploadingProfileImage } = useImage()
  const { url: CoverPhoto, uploadImage: uploadCoverPhoto, loading: uploadingCoverPhoto } = useImage()
  const { url: a, uploadImage: addBusinessPhoto, loading: uploadingBusinessPhoto } = useImage()

  const { data: business, error: errorBusiness, isLoading, refetch: refetchBusiness  } = useFetch({
    api: apiGetOneBusiness,
    param: { id },
    key: ['business', id],
  })

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
        id: id,
        profileImg: profilePhoto
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
        id: id,
        coverImg: CoverPhoto
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
        id: id,
        filepath: a
      })
    }
    if (businessPhoto) {
      updateCoverImg()
    }
  }, [businessPhoto])
  
  
  // const { isLoading, error, data: business, refetch: refetchBusiness  } = useFetch({
  //   api: apiGetOneBusiness,
  //   param: id,
  //   key: ['userBusiness', id],
  // })

  const rating = useMemo(() => {
    if (business?.reviews?.length) {
      const rating = business?.reviews?.reduce((a, b) => ({ star: a.star + b.star }), { star: 0 }) 
      return Math.round(rating?.star / business?.reviews?.length)
    }
    return 0
  }, [business?.reviews])
  
  // const { data: pageVisits } = useFetch({
  //   api: apiGetBusinessPageVisits,
  //   param: id,
  //   key: ['pageVisits', id],
  // })
  
  // const { data: businessCategories } = useFetch({
  //   api: apiGetBusinessCategories,
  //   param: id,
  //   key: ['businessCategories', id],
  // })
  
  // const { error: subscriptionError, data: subscription } = useFetch({
  //   api: apiGetBusinessSubscription,
  //   param: id,
  //   key: ['subscription', id],
  // })

  // console.log({ business })

  // const { data: facilities, error: errorFacilities } = useFetch({
  //   api: apiGetBusinessFacilities,
  //   param: id,
  //   key: ['facilities', id]
  // })

  // const { data: reviews, error: errorReviews } = useFetch({
  //   api: apiGetBusinessReviews,
  //   param: id,
  //   key: ['userReviews', id]
  // })

  // const { data: reviewStats, error: errorStats } = useFetch({
  //   api: apiGetBusinessReviewsStats,
  //   param: id,
  //   key: ['userReviewStats', id]
  // })

  //   const { data: workingHours, error: errorWorkingHours } = useFetch({
  //   api: apiGetBusinessWorkingHours,
  //   param: id,
  //   key: ['workingHours', id],
  // })


  // const analytics = useMemo(() => {
  //   if (pageVisits?.pagevisits) {
  //       const newState = {
  //         "01": { count: 0 },
  //         "02": { count: 0 },
  //         "03": { count: 0 },
  //         "04": { count: 0 },
  //         "05": { count: 0 },
  //         "06": { count: 0 },
  //         "07": { count: 0 },
  //         "08": { count: 0 },
  //         "09": { count: 0 },
  //         "10": { count: 0 },
  //         "11": { count: 0 },
  //         "12": { count: 0 },
  //       }
  //       pageVisits?.pagevisits.map((visit) => {
  //         newState[visit?.month].count += 1
  //       })
  //       // setAnalytics(initialState)
  //       const data = Object.keys(newState)?.map((item, index) => newState[item].count)
  //       return data
  //     }
      
  // }, [pageVisits?.pagevisits])



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


  return (
    <Dashboard>
      <div className='flex-1 overflow-hidden overflow-y-auto'>
        {isLoading && <Loader loader={4} />}
          <Header business_string={id} type="business" />
          {business && (
          <>
            <div onClick={handle} className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center bg-gray cursor-pointer'>
            <input ref={coverImageRef} type="file" name="cover_image" id="cover_image" className="hidden" onChange={(e)=> uploadCoverPhoto(e.target.files[0])}  />

              <img src={business?.coverImg.replace("mediatoken", "media&token")} name={business?.name} className='absolute object-cover w-full h-full' />
              <Link to={`/users/edit-business/${id}`} className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16 bg-green text-white'>
                Edit Profile
              </Link>
              <div className='absolute bottom-0 mx-auto -translate-x-1/2 translate-y-1/2 rounded-full z-100 w-28 h-28 left-1/2' >
                <label htmlFor="image" className="absolute top-0 w-full h-full mx-auto rounded-full cursor-pointer bg-gray">
                    <span className="absolute bottom-0 right-0 -translate-x-1/2 bg-[#25D366] w-5 h-5 rounded-full overflow-hidden grid place-items-center z-10">
                        <CiEdit size="" color="white" className="" />
                    </span>
                    <input type="file" name="image" id="image" className="hidden" onChange={(e)=> uploadProfilePhoto(e.target.files[0])}  />
                    <Image url={business?.profileImg} name={business?.name} className='object-cover w-full h-full rounded-full' />
                </label>
              </div>
            </div>
            <section className='px-7'>
              <div className='flex flex-col items-center w-10/12 pt-16 mx-auto mb-8'>
                <h1 className='mb-2 text-3xl font-semibold text-dark-light'>{business?.name}</h1>
                <p className='text-sm text-[#476788] mb-3 text-center'>
                  {business?.description}
                </p>
                <div className='flex flex-wrap items-center gap-3 mb-16 text-xsm text-green md:w-7/8'>
                  {business?.categories?.map(category =><span key={category.id} className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>{category.category}</span>)}
                  </div>
              </div>
              <div className='mb-11'>
                <h2 className='mb-3 text-lg font-medium text-green'>Contact Information</h2>
                <div className='p-4 bg-white sm:py-12 sm:px-16'>
                    <div className='flex flex-col gap-4 lg:flex-row xl:gap-32 justify-between text-sm text-[#476788]'>
                      <div className='flex flex-col flex-wrap gap-4 md:flex-row sm:gap-6'>
                        {business?.address &&
                        <div className='flex items-center gap-2'>
                          <MdOutlineLocationOn size="1.3rem" />
                          <span>{business?.address}</span>
                        </div>}
                        {business?.phonenumber &&
                          <div className='flex items-center gap-2'>
                            <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`tel:${business.phonenumber}`}>
                            <BsTelephone size="1.3rem" />
                            <span>{business?.phonenumber}</span>
                          </a>
                        </div>}
                        {business?.email &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`mailto:${business.email}`}>
                            <MdOutlineMarkEmailUnread size="1.3rem" />
                            <span>Send Mail</span>
                          </a>
                        </div>
                        }
                        {business?.website &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.website}>
                            <BsGlobe size="1.3rem" />
                            <span>Our website</span>
                          </a>
                        </div>
                        }
                          {business?.facebook_link &&
                          <div className='flex items-center gap-2'>
                            <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.facebook_link}>
                              <TbBrandFacebook size="1.3rem" />
                              <span>See us on facebook</span>
                            </a>
                          </div>
                          }
                            {business?.instagram_link &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.instagram_link}>
                            <BsInstagram size="1.3rem" />
                            <span>Instagram Page</span>
                          </a>
                        </div>
                        }
                        {business?.whatsapp &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`https://wa.me/${business?.whatsapp}`}>
                            <BsWhatsapp size="1.3rem" />
                            Chat on Whatsapp
                          </a>
                        </div>
                        }
                        {business?.twitter_link &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.twitter_link}>
                            <BsTwitter size="1.3rem" />
                            <span>Go to twitter</span>
                          </a>
                        </div>
                        }
                        {business?.linkedin_link &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.linkedin_link}>
                            <BsLinkedin size="1.3rem" />
                            <span>Check out LinkedIn</span>
                          </a>
                        </div>
                        }
                      </div>
                   </div>
                </div>
              </div>
              <div className='mb-16'>
                <h2 className='mb-3 text-lg font-medium text-green'>Working Hours</h2>
                <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                {
                business?.workingHours ?  
                  <div className="max-w-lg pb-10 mb-5 overflow-hidden bg-white rounded-lg">
                    <ul className="mt-4 mb-8">
                      {business?.workingHours?.map((hour) => (
                        <li key={hour.id} className="py-2 text-sm border-b border-gray-200 md:py-3">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">{hour.day}</span>
                            <span className="text-gray-800">{hour.openingTime} - {hour.closingTime}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/users/business/${id}/working-hours`} className='p-1.5 px-3 text-xs font-arialsans bg-green text-white mt-4'>
                      Update Working Hours
                    </Link>
                  </div> 
                :
                  <div className='flex flex-col items-center justify-between gap-3 md:flex-row md:gap-8'>
                    <p>No workings hours set</p>
                    <Link to={`/users/business/${id}/working-hours`} className='p-1.5 px-3 text-xs font-arialsans bg-green text-white'>
                      Add Working Hours
                    </Link>
                  </div>
              }
                </div>
              </div>
              <div className='mb-11'>
                <h2 className='mb-3 text-lg font-medium text-green'>Business media</h2>
                <div className='flex flex-col sm:flex-row flex-wrap gap-2 text-sm text-[#476788]'>
                  {business?.photos?.length ? business?.photos?.map((photo, index) => <img key={index} src={photo?.filepath} alt=""  className='object-cover object-center sm:w-32 sm:h-40 bg-black/30' />) 
                  : <span className='text-[#476788] text-xs sm:text-sm'>No photos</span>
                  }
                  {(business?.photos?.length < 2 || (business?.photos?.length < Number(business?.subscription?.photos))) ? 
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
                        {business?.subscription?.photos ? <span className='text-[#476788] text-xs sm:text-sm'>
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
                <h2 className='mb-3 text-lg font-medium text-green'>Business Features</h2>
                <div className='bg-white text-[#476788] p-12 rounded-2xl'>
                  <div className='grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-3xl'>
                    {
                    !business?.facilities?.length ? 
                    <div className='flex items-center'>
                      {/* <img src={Bad} alt="" className='object-cover object-center mr-3' /> */}
                      <span>No Facilities added yet</span>
                    </div>
                    :
                    business?.facilities?.map(facility => <div key={facility.id} className='flex items-center'>
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
              {/* <div className='mb-20'>
                <h2 className='mb-3 text-lg font-medium text-green'>Business Analytics</h2>
                <div className='font-arialsans text-sm text-[#476788] p-2 sm:p-12 bg-white rounded-2xl overflow-hidden max-h-96 w-full'>
                  <Analytics analytics={analytics} />
                </div>
              </div> */}
              <div className='mb-16'>
                <h2 className='mb-3 text-lg font-medium text-green'>Subscription</h2>
                <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                  <p className='mb-4'>{!expired(business?.trueExpiry) ? `You are currently on the ${business?.subscription} package subscription plan` : "You do not have any active subscription"}</p>
                  <Link to={`/users/subscription/${id}`} className='text-sm underline text-green'>{business?.subscription && "Click here to check out your subscription plan"}</Link>
                </div>
              </div>
              <div className='mb-16'>
                <h2 className='mb-3 text-lg font-medium text-green'>Reviews</h2>
                <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                  {
                    (business?.review?.length > 0) && (!!rating) ? 
                      <>
                      {
                        business?.reviews && business?.reviews?.length > 0 &&
                        <>
                        <div className='flex items-center gap-3.5 mb-2'>
                            {  [...Array(rating).keys()].map((_, i) => <img key={i} src={Star} alt="" />)}
                          </div>
                          <p className='mb-9'>Your business is currently rated {rating} stars from the reviews of {business?.reviews?.length || 0} users</p>
                          <div ref={reviewsContainerRef} className='flex flex-wrap w-full gap-6 overflow-hidden'>
                            {business?.reviews?.map(review => 
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
                          <div className='items-center justify-end hidden gap-4 lg:flex'>
                            <span  onClick={changeReview} className="bg-green cursor-pointer p-0.5 rounded-l-full">
                              <MdChevronLeft size="1.5rem" color='white' />
                            </span>
                            <span onClick={changeReview} className="bg-green cursor-pointer p-0.5 rounded-r-full">
                              <MdChevronRight size="1.5rem" color='white' />
                            </span>
                          </div>
                        </>
                      }
                      </>
                    :
                    <p className='mb-9'>No reviews yet</p>
                  }
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

export default Business