import React, { useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { TfiCrown } from 'react-icons/tfi'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetAllSubscriptions,apiGetAllSubscriptionPlans } from '/src/services/UserService'
import SubscriptionModal from './SubscriptionModal'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '/src/components/ui/Button'
import { MdArrowDropDown } from 'react-icons/md'




const Subscription = () => {
    const [modalOpen, setModalOpen] = useState(false)

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
    <div className='flex-1 overflow-y-auto overflow-hidden relative'>
        <Head />
        <section className='p-8 px-4 sm:px-8 text-sm md:pt-16 py-16'>
            <div className='flex flex-wrap gap-4'>
                {subscriptions?.map(subscription => 
                    (<div key={subscription.id} className='p-5 py-7 rounded min-w-[250px] bg-white'>
                        <div className='flex items-center gap-3 mb-12'>
                            <TfiCrown size="1.4rem" color="00C885" />
                            <h3 className='text-green font-medium text-lg'>{subscription?.package} Package</h3>
                        </div>
                        <div className='flex flex-col gap-6 mb-10'>
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
                            <div className='relative w-fit h-fit mt-2 mx-auto'>
                                <select name="" id="" className='appearance-none max-w-[160px] mx-auto border border-green rounded-md outline-none cursor-pointer px-4 py-3 pr-8 bg-inherit'>
                                    <option value="">Change Duration</option>
                                    <option value="">1 month</option>
                                    <option value="">3 months</option>
                                    <option value="">6 months</option>
                                    <option value="">1 year</option>
                                </select>
                                <MdArrowDropDown className='absolute right-2 top-1/2 -translate-y-1/2' size="1.5rem" color="00C885" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-t border-[#00000010] pt-6'>
                            <div>
                                <span className='font-medium text-lg'>₦1000</span><span>/month</span>
                            </div>
                            <Button onClickFunc={() => setModalOpen(true)} className='py-1.5 px-3 rounded-sm'>
                                Subscribe
                            </Button>
                        </div>
                    </div>)
                )}
            </div>
        </section>
        {modalOpen && <SubscriptionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </div>
</Dashboard>
  )
}

export default Subscription  