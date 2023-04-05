import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Analytics from './Analytics';
import { BsTelephone, BsGlobe, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from 'react-icons/md'
import { TbBrandFacebook } from 'react-icons/tb'
import useFetch from '/src/hooks/useFetch'
import { apiGetOneBusiness, apiGetBusinessCategories, apiGetBusinessSubscription, apiGetBusinessPageVisits } from '/src/services/UserService'
import { apiGetBusinessFacilities, apiGetBusinessReviews, apiGetBusinessReviewsStats } from '/src/services/CommonService'
import Header from "/src/components/users/Header"
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import BusinessIMG from '../../../assets/dashboard/business-img.svg'
import Media from '../../../assets/dashboard/media.svg'
import Good from '../../../assets/good.svg'
import Edit from '../../../assets/edit.svg'
import Star from '../../../assets/star.svg'
import Loader from '../../../components/Loader'
import { expired, formatDate } from '/src/utils/dateFunc'

const index = () => {
  const { id } = useParams()
  const reviewsContainerRef = useRef(null)

  const { isLoading, error, data: business  } = useFetch({
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

  // console.log('subscription', subscription, expired(subscription?.true_expiry))
  return (
    <Dashboard>
      <div className='flex-1 overflow-y-auto overflow-hidden'>
        {isLoading && <Loader loader={4} />}
          <Header business_string={id} type="business" />
          {business && (
          <>
            <div className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center bg-gray'>
              <Link to={`/users/edit-business/${id}`} className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16 bg-green text-white'>
                Edit Profile
              </Link>
              <img src={BusinessIMG} alt="" className='z-100 w-28 overflow-hidden left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 mx-auto absolute' />
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
                  <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
                  <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
                  <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
                  <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
                  <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
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
                <Button className='flex items-center justify-center gap-3 rounded-md py-2.5 w-full mt-11'>
                  <img src={Edit} alt="" />
                  Edit business profile
                </Button>
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