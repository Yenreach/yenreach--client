import React from 'react'
import { MdCheckBox } from 'react-icons/md'
import { TfiCrown } from 'react-icons/tfi'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetUser } from '/src/services/UserService'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '/src/components/ui/Button'
import BusinessCard from '../../../components/ui/BusinessCard'




const Billboard = () => {
    const { isLoading, error, data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: () => getData(apiGetUser),
      })
      console.log("data", profile)
    
  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm'>
            <div className='p-5 py-7 bg-white'>
                <div className='mb-20 md:w-4/5'>
                    <h3 className='text-green text-md font-medium mb-3'>Get Much More Eyeballs, Get MUCH MORE SALES</h3>
                    <p className='mb-2'>
                        The only way your business can survive is by getting the right attention in the right place, at the right time and to the right people. <br />
                        By showcasing your business on our homepage billboard, you get the ultimate advantage of putting your business in front of thousands of customers who might just be searching for your product or service and are ready to do business with you, RIGHT-AWAY.    
                    </p>
                    <div>
                        <h4>Here are some of the things you enjoy just by having your business displayed on our Yenreach billboard:</h4>
                        <ul className='list-disc pl-8'>
                            <li>Drive traffic directly to your Yenreach page so customers can contact you with ease.</li>
                            <li>Build massive brand awareness</li>
                            <li>Showcase your business to thousands of our daily website visitors</li>
                            <li>Get your business displayed 24 hours a day and gain STEADY visibility and eyeballs that can turn into cash.</li>
                            <li>Reach a wider demographic of potential customers.</li>
                            <li>Build trust and credibility among potential customers</li>
                        </ul>
                    </div>
                </div>
                <div className='mb-20 md:w-4/5'>
                    <h3 className='text-green text-md font-medium mb-3'>What do I need?</h3>
                    <p>
                        Getting your Business or any other interest displayed on the Yenreach Billboard is not actually as difficult as you think. All you need are need the following:
                    </p>
                    <ul className='list-decimal pl-8'>
                        <li className=''>An Image to display. This Image has to be in either JPG, JPEG or PNG format. It must not be more than 300KB. Furthermore it should not contain any explicit or gory content. Furthermore, it is advisable that the Aspect Ratio of your Picture's resolution should be ...</li>
                        <li>Get a catchy Text/Copy for your Advert.</li>
                        <li>You'll also need a link that when the Viewer clicks on, it will lead them to a page where they'll learn more about the Ad</li>
                        <li>Please, it is highly important that your link or text or image should not suggest any form of unscrupulous activity. Yenreach reserves the right to take down any Advert that does not meet our requirememnts</li>
                        <li>Also note that the slots for Billboard are limited. So, there is a possibility that your advert application may not be approved immediately.</li>
                    </ul>
                </div>
                <div className='flex flex-wrap gap-4 md:gap-8'>
                    {[1,2,3].map(el => 
                        (<div className='p-5 py-7 rounded min-w-[250px] bg-white border border-[#00000011]'>
                            <div className='flex items-center gap-3 mb-12'>
                                <TfiCrown size="1.4rem" color="00C885" />
                                <h3 className='text-green font-medium text-lg'>Silver Package</h3>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 border-t border-[#00000010] pt-6'>
                                <div>
                                    <span className='font-medium text-lg text-green'>₦70,000</span><span className=''>/3 Month</span>
                                </div>
                                <Button className='py-1.5 px-3 rounded-sm'>
                                    Subscribe
                                </Button>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        </section>
    </div>
</Dashboard>
  )
}

export default Billboard  