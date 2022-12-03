import React from 'react'
import SideNav from '../../../components/users/SideNav'
import Home from '../../../components/users/Home'
import Button from '../../../components/ui/Button'

import DP from '../../../assets/dashboard/img.svg'
import ArrowDown from '../../../assets/arrow-down.svg'
import BusinessIMG from '../../../assets/dashboard/business-img.svg'
import Media from '../../../assets/dashboard/media.svg'
import Good from '../../../assets/good.svg'
import Edit from '../../../assets/edit.svg'
import Star from '../../../assets/star.svg'


const index = () => {
  return (
    <div className='flex bg-footer-bg'>
      <SideNav />
      {/* <Home /> */}
      <div className='flex-1'>
        <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex items-center justify-between'>
          <div className='text-[#69707D]'>
              Business {'>'} Hard rock cafe
          </div>
          <div className='flex items-center gap-4 text-sm'>
            <button className='py-1.5 px-4 bg-green text-white font-medium'>Overview</button>
            <button className='py-1.5 px-4 bg-[#F1F1F1]'>Marketplace</button>
            <button className='py-1.5 px-4 bg-[#F1F1F1]'>Jobs</button>
          </div>
          <div className='flex items-center gap-1'>
            <img src={DP} alt="" />
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center'>
          <Button className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16'>
            Edit Cover Photo
          </Button>
          <img src={BusinessIMG} alt="" className='z-100 w-28 overflow-hidden left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 mx-auto absolute' />
        </div>
        <section className='px-7'>
          <div className='flex flex-col items-center w-10/12 mx-auto mb-12 pt-16'>
            <h1 className='text-3xl font-semibold text-dark-light mb-2'>Hard Rock Cafe</h1>
            <p className='text-sm text-[#476788] mb-3 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta pretium, neque aliquet purus massadsfghasd placerat mauris. Blandit amet, imperdiet adipiscing mattis lobortis sem mauris eget elit. Sapien ut eu felis integer sit. Ac eu dui nulla nam. Vel venenatis elementum orci in arcu ipsum tellus molestie. Gravida volutpat, donec eget tellus proin sit lacus, sapien. Et a dolor quam nec adipiscing sit quam. Tempor, sagittis, quis vulputate amet, quis et. Tortor senectus ullamcorper enim facilisis et praesent diam, dui. Ac sed feugiat orci sed. Metus turpis mauris auctor integer pellentesque iaculis. Gravida.
            </p>
            <div className='flex items-center flex-wrap gap-3 text-xsm text-green md:w-7/8 mb-16'>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Schooling</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Institution</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Business</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Marketing</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Accounting</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Finance</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>Web Design</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>Web Design</span>
              </div>
          </div>
          <div className='mb-11'>
            <h2 className='text-green text-lg font-medium mb-3'>Contact Information</h2>
            <div className='p-4 sm:py-12 sm:px-16 bg-white'>
              <div className='sm:flex gap-4 xl:gap-32 justify-between text-sm text-[#476788]'>
                <div className='flex flex-col gap-2 sm:gap-6 mb-4'>
                  <div>
                    <span>07083458427</span>
                  </div>
                  <div>
                    <span>Kheengdavid@gmail.com</span>
                  </div>
                  <div>
                    <span>www.davidikperi.com</span>
                  </div>
                </div>
                <div className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nisl faucibus tellus cursus etiam euismod magnis tincidunt. Molestie lectus sit sed quis vulputate eros. Bibendum lectus enim accumsan pharetra non. Placerat nibh nulla quisque bibendum in ac feugiat. Pulvinar in morbi arcu, erat sit dignissim.
                </div>
                <div className='flex flex-col gap-2 sm:gap-6'>
                  <div>
                    <span>07083458427</span>
                  </div>
                  <div>
                    <span>Kheengdavid@gmail.com</span>
                  </div>
                  <div>
                    <span>www.davidikperi.com</span>
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
              <p className='mb-4'>You are currently on the Silver package subscription plan</p>
              <a href="" className='underline text-green text-sm'>Click here to check out your subscription plan</a>
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
    </div>
  )
}

export default index