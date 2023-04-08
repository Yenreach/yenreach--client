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
                <Link to="/login">
                    <Button className='px-12 py-3 rounded'>
                        Add my business
                    </Button>
                </Link>
            </div>
            <div className='flex flex-col sm:items-center mb-20 md:mb-32 sm:flex-row gap-9'>
                <img src={AllHere} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px]" />
                <div className='flex flex-col items-start gap-12 max-w-[450px]'>
                    <h3 className='font-medium text-xl text-green'>They are all Here</h3>
                    <p className='text-xs text-[#476788] -mt-4'>
                    We are the premier destination for businesses looking to expand their reach and connect with potential customers. Our platform is designed to help businesses of all sizes grow and succeed by providing them with a powerful marketing tool.
                    <br />
                    With our easy-to-use search engine, users can quickly and easily find the businesses they need. Whether you're looking for a restaurant, a clothing store, or a service provider, we've got you covered. Our database is constantly updated with the latest information, so you can be sure that you're getting accurate and up-to-date results.
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
                    <br />

                    Our platform is easy to use and allows job seekers to search for jobs based on location, industry, and job title. We also offer advanced search filters to help job seekers find the exact job they're looking for.
                    <br />
                    For employers, we offer a simple and effective way to find the best talent for their organization. With our job listing platform, employers can easily post job openings and attract top talent from our pool of qualified candidates.
                    </p>
                    <Link to="/explore" state={{ data: "jobs" }} >
                        <Button variant='job' className='py-2 px-20'>
                            Explore Jobs
                        </Button>
                    </Link>
                </div>
                <img src={AllHereJ} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px]" />
            </div>
            <div className='flex flex-col sm:items-center mb-20 md:mb-32 sm:flex-row gap-9'>
                <img src={AllHereP} alt="" className="object-cover w-full sm:w-1/2 max-h-[330px]" />
                <div className='flex flex-col items-start gap-12 max-w-[450px]'>
                    <h3 className='font-medium text-xl text-orange'>They are all Here</h3>
                    <p className='text-xs text-[#476788] -mt-4'>
                    We offer a marketplace for businesses to sell their products and services. Our marketplace is designed to help businesses of all sizes reach a wider audience and increase their sales.
                        <br />
                    With our easy-to-use platform, businesses can create an online storefront that showcases their products and services. Our platform is secure and offers a variety of payment options, making it easy for customers to purchase products and services with confidence.
                        <br />
                    For customers, our marketplace offers a wide range of products and services from a variety of businesses. Whether you're looking for handmade crafts, unique gifts, or professional services, our marketplace has something for everyone.
                    </p>
                    <Link to="/explore" state={{ data: "marketplace" }} >         
                        <Button variant='product' className='py-2 px-20'>
                            Explore Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
        <section className='px-4 mb-12 md:px-10 lg:px-24'>
            {/* {businessOfTheWeek &&
                <div className='mb-36 py-12'>
                    <h2 className='mb-2 font-medium text-center text-xl text-green'>Business of the week</h2>
                    <div className='flex flex-col items-center sm:flex-row gap-14'>
                        <img className='flex-1 object-cover w-full sm:w-2/5' src={BusOfTheWeek} alt="Business of The Week" />
                        <div className='flex-1.5 flex flex-col gap-6 items-start'>
                            <h3 className='text-lg'>Yenreach Business school</h3>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus faucibus lobortis blandit consectetur massa rutrum dignissim luctus. Non quis fringilla ac semper quam non egestas velit. Mauris, odio viverra amet viverra. Quisque cursus non libero, vestibulum rhoncus, pulvinar donec hendrerit netus. Nibh neque vitae nulla morbi vulputate amet ac. Viverra elementum ullamcorper duis diam iaculis condimentum integer ut. Neque rhoncus convallis dictum viverra.
                            </p>
                            <Link to="/business"> 
                                <Button className='text-sm rounded-md py-2.5 px-10 font-medium'>
                                    view business
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            } */}
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
        <section className='px-4 mb-12 md:px-10 lg:px-24 mt-32 w-full'>
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