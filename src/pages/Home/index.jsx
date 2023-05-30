import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { apiBusinessOfTheWeek, apiGetApprovedBusinesses } from '../../services/CommonService'
import getData from '../../utils/getData'
import Header from '/src/components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Trustees from '../../components/Trustees'
import Accordion from '../../components/Accordion'
import Billboard from '../../components/Billboard'
import AllHere from '../../assets/businesses/all-here.svg'
import AllHereJ from '../../assets/jobs/all-here.svg'
import AllHereP from '../../assets/products/all-here.svg'
import BusOfTheWeek from '../../assets/bus_of_the_week.svg'
import Button from '../../components/ui/Button'
import Loader from '/src/components/Loader'
import useFetch from '/src/hooks/useFetch'
import Error from '../../components/Error'
import Image from '/src/components/Image';


const index = () => {
    const { data: aprrovedBusinesses, error: errorApprovedBusinesses } = useFetch({
        key:  ['aprrovedBusinesses'],
        api: apiGetApprovedBusinesses,
        staleTime: 1000 * 60 * 5,
    })

    const { data: businessOfTheWeek, error: errorBusinessOfTheWeek } = useFetch({
        api: apiBusinessOfTheWeek,
        key: ['businessOfTheWeek'],
        staleTime: 1000 * 60 * 5,
        cacheTime : 1000 * 60 * 60,
      })
    // console.log("businessOfTheWeek", businessOfTheWeek, "error", errorBusinessOfTheWeek)

  return (
    <>
        {/* <Error /> */}
        <Header />
        <Hero businesses={aprrovedBusinesses} />
        {/* <Trustees /> */}
        <Category />
        <section className='px-4 py-12 md:px-10 lg:px-24'>
            <div className='bg-[url("assets/audience.svg")] h-64 md:h-60 bg-cover bg-center text-white flex flex-col justify-between items-center py-10 mb-28 px-4 sm:px-12 md:px-24'>     
                <div className='flex flex-col items-center gap-5'>
                    <h2 className='text-lg md:text-xl font-medium text-center'>Get your business to the right audience</h2>
                    <span className='text-sm'>It's Totally free</span>
                </div>
                <Link to="/users">
                    <Button className='px-12 py-3 rounded'>
                        Add my business
                    </Button>
                </Link>
            </div>
            <div className='flex flex-col sm:items-center mb-20 md:mb-32 sm:flex-row gap-9'>
                <img src={AllHere} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px] bg-gray" />
                <div className='flex flex-col items-start gap-12 max-w-[450px]'>
                    <h3 className='font-medium text-xl text-green'>They are all Here</h3>
                    <p className='text-xs text-[#476788] -mt-4'>
                    We are the premier destination for businesses looking to expand their reach and connect with potential customers. Our platform is designed to help businesses of all sizes grow and succeed by providing them with a powerful marketing tool.
                    <br /><br />
                    With our easy-to-use search engine, users can quickly and easily find the businesses they need. Whether you're looking for a restaurant, a clothing store, or a service provider, we've got you covered. Our database is constantly updated with the latest information, so you can be sure that you're getting accurate and up-to-date results.
                    <br /><br />
                    Our intention is to save you the time, effort and money you would have expended going round in search of a particular business. Businesses here are arranged by states and industry. Input the industry and the state of choice in the search engine and oops you will find all the businesses in that category in the state. We understand the importance of your time, please save it by constantly using <a href="www.yenreach.com" className='underline text-green'>Yenreach.com</a> to find local businesses of choice.
                    </p>
                    <Link to="/explore">
                        <Button className='py-2 px-20'>
                            Explore Businesses
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col-reverse sm:items-center mb-20 md:mb-32 sm:flex-row gap-9'>
                <div className='flex flex-col sm:items-end gap-12 max-w-[450px]'>
                    <h3 className='font-medium text-xl text-blue'>They are all Here</h3>
                    <p className='text-xs text-[#476788] -mt-4'>
                    Looking for your next career opportunity? Look no further than our job listing platform. We offer a wide range of job listings across various industries, making it easy for job seekers to find the perfect role for their skills and experience.
                    {/* <br /><br />
                    Our platform is easy to use and allows job seekers to search for jobs based on location, industry, and job title.  */}
                    <br /><br />
                    For employers, we offer a simple and effective way to find the best talent for their organization. With our job listing platform, employers can easily post job openings and attract top talent from our pool of qualified candidates.
                    <br /><br />
                     We serve as a recruitment agency but also connects potential employees to job opportunities and help employers to get the best hands within a very short period. Employers can easily create and manage job listings, providing all the necessary details about the job vacancy, such as the job title, job description, job requirements, salary, and location. 
                     {/* They can also search through resumes and filter candidates by qualifications, experience, and other relevant criteria.  */}
                     <br /><br />
                    Other additional services we offer here include, resume writing and optimization, interview coaching, hiring, training/certification and career advice. We understand that job hunting can be a challenging and stressful process, which is why we are here to support and guide users every step of the way.
                    </p>
                    <Link to="/explore" state={{ data: "jobs" }} >
                        <Button variant='job' className='py-2 px-20'>
                            Explore Jobs
                        </Button>
                    </Link>
                </div>
                <img src={AllHereJ} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px] bg-gray" />
            </div>
            <div className='flex flex-col sm:items-center sm:flex-row gap-9'>
                <img src={AllHereP} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px] bg-gray" />
                <div className='flex flex-col items-start gap-12 max-w-[450px]'>
                    <h3 className='font-medium text-xl text-orange'>They are all Here</h3>
                    <p className='text-xs text-[#476788] -mt-4'>
                    We offer a marketplace for businesses to sell their products and services. Our marketplace is designed to help businesses of all sizes reach a wider audience and increase their sales.
                        <br /><br />
                    With our easy-to-use platform, businesses can create an online storefront that showcases their products and services. 
                    <br /><br />
                    For customers, our marketplace offers a wide range of products and services from a variety of businesses. Whether you're looking for handmade crafts, unique gifts, or professional services, our marketplace has something for everyone.
                    <br /><br />
                    Users can buy and sell products and services daily from the comfort of their homes and get such goods delivered to them. Sellers can easily create and manage their online stores, providing all the necessary details about their products or services, e.g price, pictures and descriptions etc. Buyers can browse through the listings and contact the sellers.
                    </p>
                    <Link to="/explore" state={{ data: "marketplace" }} >         
                        <Button variant='product' className='py-2 px-20'>
                            Explore Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
        <section className='px-4 mb-12 md:px-10 lg:px-24 mt-4 md:mt-12'>
            {businessOfTheWeek &&
                <div className='mb-36 py-12'>
                    <h2 className='mb-2 font-medium text-center text-xl text-green'>Business of the week</h2>
                    <div className='flex flex-col items-center sm:flex-row gap-14'>
                        <img className='flex-1 object-cover w-full sm:w-2/5' src={businessOfTheWeek?.profile_img.replace("mediatoken", "media&token")}  alt="Business of The Week"  />
                        <div className='flex-1 flex flex-col gap-6 items-start'>
                            <h3 className='text-lg'>{businessOfTheWeek?.name}</h3>
                            <p className='text-sm'>
                               {businessOfTheWeek?.description.substring(0, 400)}...
                            </p>
                            <Link to={`/business/${businessOfTheWeek?.verify_string}`}> 
                                <Button className='text-sm rounded-md py-2.5 px-10 font-medium'>
                                    view business
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            <div className=''>
                <h2 className='mb-3 font-medium text-center text-lg text-green'>keep up with the business world</h2>
                <div className='flex flex-col grid-cols-3 gap-6 text-white sm:grid'>
                    <div className="relative bg-[url('assets/businesses/coperate.svg')] bg-cover bg-center h-52 sm:h-104 p-4 min-w\">
                        <span className='absolute w-2/3 bottom-12 sm:bottom-24 text-xl'>The struggle in the  Corperate world</span>
                    </div>
                    <div className='flex flex-col grid-cols-2 col-span-2 gap-2 sm:grid'>
                        <div className="relative bg-[url('assets/businesses/sme.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-lg font-semibold bottom-12'>SME gains $30Mil on Seed A</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/tech.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-lg font-semibold bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/insure.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-lg font-semibold bottom-11'>The future of Innsurance Companies </span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/google.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-lg font-semibold bottom-11'>How Google Harms us</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='px-4 mb-12 md:px-10 lg:px-24 mt-32 w-screen overflow-hidden'>
            <Billboard />
        </section>
        <section className='px-4 py-12 sm:px-20 md:px-32 lg:px-64 mb-11'>
            <h2 className='font-medium text-center text-lg text-green'>Frequently asked questions</h2>
            <Accordion />
        </section>
        <Footer />
    </>
  )
}

export default index