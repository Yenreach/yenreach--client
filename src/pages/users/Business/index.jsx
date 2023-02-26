import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsTelephone, BsGlobe, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from 'react-icons/md'
import { TbBrandFacebook } from 'react-icons/tb'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetOneBusiness, apiGetBusinessCategories, apiGetBusinessSubscription } from '/src/services/UserService'
import Header from "/src/components/users/Header"
import Dashboard from "../../../components/layout/Dashboard"
import Button from '../../../components/ui/Button'
import ArrowDown from '../../../assets/arrow-down.svg'
import BusinessIMG from '../../../assets/dashboard/business-img.svg'
import Media from '../../../assets/dashboard/media.svg'
import Good from '../../../assets/good.svg'
import Edit from '../../../assets/edit.svg'
import Star from '../../../assets/star.svg'


const index = () => {
  const { id } = useParams()
  
  const { isLoading, error, data: business } = useQuery({
    queryKey: ['userBusiness'],
    queryFn: () => getData(apiGetOneBusiness, id),
  })
  
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getData(apiGetBusinessCategories, id),
  })

  const { error: subscriptionError, data: subscription } = useQuery({
    queryKey: ['subscription'],
    queryFn: () => getData(apiGetBusinessSubscription, id),
  })
  // console.log("business", subscription)
  // console.log("subscriptionError", subscriptionError)


  return (
    <Dashboard>
      <div className='flex-1 overflow-scroll'>
          <Header business_string={id} type="business" />
          <div className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center'>
            <Button className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16'>
              Edit Cover Photo
            </Button>
            <img src={BusinessIMG} alt="" className='z-100 w-28 overflow-hidden left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 mx-auto absolute' />
          </div>
          <section className='px-7'>
            <div className='flex flex-col items-center w-10/12 mx-auto mb-12 pt-16'>
              <h1 className='text-3xl font-semibold text-dark-light mb-2'>{business?.name}</h1>
              <p className='text-sm text-[#476788] mb-3 text-center'>
                {business?.description}
              </p>
              <div className='flex items-center flex-wrap gap-3 text-xsm text-green md:w-7/8 mb-16'>
                {categories?.map(category =><span key={category.id} className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>{category.category}</span>)}
                </div>
            </div>
            <div className='mb-11'>
              <h2 className='text-green text-lg font-medium mb-3'>Contact Information</h2>
              <div className='p-4 sm:py-12 sm:px-16 bg-white'>
                <div className='sm:flex gap-4 xl:gap-32 justify-between text-sm text-[#476788]'>
                  <div className='flex flex-col gap-2 sm:gap-6 mb-4'>
                    <div className='flex items-center gap-2'>
                      <BsTelephone size="1.3rem" />
                      <span>{business?.phonenumber || "null"}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MdOutlineMarkEmailUnread size="1.3rem" />
                      <span>{business?.email || "null"}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <BsGlobe size="1.3rem" />
                      <span>{business?.website || "null"}</span>
                    </div>
                  </div>
                 <div className='flex items-center gap-2'>
                      <MdOutlineLocationOn size="1.3rem" />
                      <span>{business?.address || "null"}</span>
                    </div>
                  <div className='flex flex-col gap-2 sm:gap-6'>
                  <div className='flex items-center gap-2'>
                      <TbBrandFacebook size="1.3rem" />
                      <span>{business?.facebook_link || "null"}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <BsInstagram size="1.3rem" />
                      <span>{business?.instagram_link || "null"}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <BsWhatsapp size="1.3rem" />
                      <span>{business?.whatsapp || "null"}</span>
                    </div>
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
              <div className='flex sm:flex-row flex-wrap gap-6 text-sm text-[#476788] p-12 bg-white rounded-2xl'>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
              </div>
              <Button className='flex items-center justify-center gap-3 rounded-md py-2.5 w-full mt-11'>
                <img src={Edit} alt="" />
                Edit business profile
              </Button>
            </div>
            <div className='mb-20'>
              <h2 className='text-green text-lg font-medium mb-3'>Business Analytics</h2>
              <div className='font-arialsans flex sm:flex-row flex-wrap gap-6 text-sm text-[#476788] p-12 bg-white rounded-2xl'>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
                <div className='flex items-center'>
                  <img src={Good} alt="" className='object-cover object-center mr-3' />
                  <span>24/7 availability</span>
                </div>
              </div>
            </div>
            <div className='mb-16'>
              <h2 className='text-green text-lg font-medium mb-3'>Subscription</h2>
              <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                <p className='mb-4'>{subscription || "You do not have any active subscription"}</p>
                <a href="" className='underline text-green text-sm'>{subscription && "Click here to check out your subscription plan"}</a>
              </div>
            </div>
            <div className='mb-16'>
              <h2 className='text-green text-lg font-medium mb-3'>Reviews</h2>
              <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                <div className='flex items-center gap-3.5 mb-2'>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
                <p className='mb-9'>Your business is currently rated 4.7 from review from over 200 users</p>
                <div className='flex flex-wrap overflow-hidden gap-6 w-full'>
                  <div className='p-3 px-5 bg-[#F0F0F0] sm:w-96'>
                    <div className='flex items-center gap-2 mb-3'>
                      <img src={Star} alt="" />
                      <span className='text-sm'>David Ikperi</span>
                    </div>
                    <p className='text-xsm text-[#476788]'>
                      Lorem ipsum dolor sit amet consectetur. Lacus feugiat gravida eget velit amet. Magna convallis aliquet vestibulum et massa. Ac maecenas ultricies cras eget convallis amet mauris. Quam quisque pellentesque diam lorem. Lorem sit duis ridiculus porta sagittis erat scelerisque orci vehicula. Eget ipsum magna risus viverra auctor mi. Hendrerit elementum quis aliquam accumsan tempus enim tincidunt. Id scelerisque eu mi morbi tincidunt. Tellus fermentum lectus ut ut donec nisl vel odio. Lectus tristique.
                    </p>
                  </div>
                  <div className='p-3 px-5 bg-[#F0F0F0] sm:w-96'>
                    <div className='flex items-center gap-2 mb-3'>
                      <img src={Star} alt="" />
                      <span className='text-sm'>David Ikperi</span>
                    </div>
                    <p className='text-xsm text-[#476788]'>
                      Lorem ipsum dolor sit amet consectetur. Lacus feugiat gravida eget velit amet. Magna convallis aliquet vestibulum et massa. Ac maecenas ultricies cras eget convallis amet mauris. Quam quisque pellentesque diam lorem. Lorem sit duis ridiculus porta sagittis erat scelerisque orci vehicula. Eget ipsum magna risus viverra auctor mi. Hendrerit elementum quis aliquam accumsan tempus enim tincidunt. Id scelerisque eu mi morbi tincidunt. Tellus fermentum lectus ut ut donec nisl vel odio. Lectus tristique.
                    </p>
                  </div>
                  <div className='p-3 px-5 bg-[#F0F0F0] sm:w-96'>
                    <div className='flex items-center gap-2 mb-3'>
                      <img src={Star} alt="" />
                      <span className='text-sm'>David Ikperi</span>
                    </div>
                    <p className='text-xsm text-[#476788]'>
                      Lorem ipsum dolor sit amet consectetur. Lacus feugiat gravida eget velit amet. Magna convallis aliquet vestibulum et massa. Ac maecenas ultricies cras eget convallis amet mauris. Quam quisque pellentesque diam lorem. Lorem sit duis ridiculus porta sagittis erat scelerisque orci vehicula. Eget ipsum magna risus viverra auctor mi. Hendrerit elementum quis aliquam accumsan tempus enim tincidunt. Id scelerisque eu mi morbi tincidunt. Tellus fermentum lectus ut ut donec nisl vel odio. Lectus tristique.
                    </p>
                  </div>
                  <div className='p-3 px-5 bg-[#F0F0F0] sm:w-96'>
                    <div className='flex items-center gap-2 mb-3'>
                      <img src={Star} alt="" />
                      <span className='text-sm'>David Ikperi</span>
                    </div>
                    <p className='text-xsm text-[#476788]'>
                      Lorem ipsum dolor sit amet consectetur. Lacus feugiat gravida eget velit amet. Magna convallis aliquet vestibulum et massa. Ac maecenas ultricies cras eget convallis amet mauris. Quam quisque pellentesque diam lorem. Lorem sit duis ridiculus porta sagittis erat scelerisque orci vehicula. Eget ipsum magna risus viverra auctor mi. Hendrerit elementum quis aliquam accumsan tempus enim tincidunt. Id scelerisque eu mi morbi tincidunt. Tellus fermentum lectus ut ut donec nisl vel odio. Lectus tristique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </Dashboard>
  )
}

export default index