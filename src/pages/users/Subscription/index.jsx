import React, { useEffect } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { TfiCrown } from 'react-icons/tfi'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetAllSubscriptions,apiGetAllSubscriptionPlans } from '/src/services/UserService'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '/src/components/ui/Button'
import BusinessCard from '../../../components/ui/BusinessCard'




const Subscription = () => {
    const { isLoading, error, data: subscriptions } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: () => getData(apiGetAllSubscriptions),
      })
    // console.log("subscriptions", subscriptions)

    // useEffect(() => {
    //     async function getA(id) {
    //         return await getData(apiGetAllSubscriptionPlans, id)
    //     }
    //     const data = getA(subscriptions[1]?.verify_string)
    //     console.log("plans", data)
    // }, [subscriptions])
    
  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm md:pt-16'>
            <div className='flex flex-wrap gap-4'>
                {subscriptions?.map(subscription => 
                    (<div key={subscription.id} className='p-5 py-7 rounded min-w-[250px] bg-white'>
                        <div className='flex items-center gap-3 mb-12'>
                            <TfiCrown size="1.4rem" color="00C885" />
                            <h3 className='text-green font-medium text-lg'>{subscription?.package} Package</h3>
                        </div>
                        <div className='flex flex-col gap-6 mb-20'>
                            <div className='flex items-center gap-2'>
                                <MdCheckBox color="00C885" size="1.3rem" />
                                <span>{subscription?.photos} photos</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdCheckBox color="00C885" size="1.3rem" />
                                <span>{subscription?.videos} videos</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdCheckBox color="00C885" size="1.3rem" />
                                <span>{subscription?.branches} branches</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                {subscription?.slider==="0" ? <MdCheckBoxOutlineBlank color="00C885" size="1.3rem" /> :<MdCheckBox color="00C885" size="1.3rem" />}
                                <span>{subscription?.slider} slider</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-t border-[#00000010] pt-6'>
                            <div>
                                <span className='font-medium text-lg'>₦1000</span><span>/month</span>
                            </div>
                            <Button className='py-1.5 px-3 rounded-sm'>
                                Subscribe
                            </Button>
                        </div>
                    </div>)
                )}
            </div>
        </section>
    </div>
</Dashboard>
  )
}

export default Subscription  