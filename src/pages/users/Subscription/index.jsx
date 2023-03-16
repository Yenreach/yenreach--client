import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { TfiCrown } from 'react-icons/tfi'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllSubscriptions,apiGetAllSubscriptionPlans } from '/src/services/UserService'
import SubscriptionModal from './SubscriptionModal'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '/src/components/ui/Button'
import { MdArrowDropDown } from 'react-icons/md'
import Loader from '/src/components/Loader'
import { useMutation } from "@tanstack/react-query";
import { apiInitiateSubscription, apiInitiatePayment } from '/src/services/SubscriptionService'

const initialPlanState = {
    "Special": "",
    "Premium": "",
    "Gold": "",
    "Silver": "",
}


const Subscription = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuthContext()
    const [plan, setPlan] = useState(initialPlanState)
    const [modalOpen, setModalOpen] = useState(false)

    const { isLoading, error, data: subscriptions } = useFetch({
        api: apiGetAllSubscriptions,
        key: ['subscriptions'],
        staleTime: 1000 * 60 * 5,
        cacheTime : 1000 * 60 * 60,
      })

    //   console.log(user)

      const subscribeMutation = useMutation({
        mutationFn: async (data) => {
          const response =  await apiInitiateSubscription(data)
          console.log("response from initiate subscription", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("success sub", data)
            paymentMutation.mutate({
                platform: "Flutterwave",
                user_type: user?.user_type,
                user_string: user?.verify_string,
                reason: "business_subscription",
                subject: data?.verify_string
            })
        },
        onError: (error, variables, context) => {
          console.log("error sub", error)
        },
      })

      const paymentMutation = useMutation({
        mutationFn: async (data) => {
          const response =  await apiInitiatePayment(data)
          console.log("from initiate payment", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("success payment", data)
            window.location.href = data?.url
        },
        onError: (error, variables, context) => {
          console.log("error payment", error)
        },
      })
    
    const handleSubmit = (v_string) => {
        // e.preventDefault()
        console.log("vsurf", v_string)
        const data = { 
            'user_type': user?.user_type,
            'user_string': user?.verify_string,
            'business_string': id,
            'paymentplan_string': v_string
         }
        console.log("data", data)
        subscribeMutation.mutate(data)
    }
    
    
  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden relative'>
        <Head />
        {isLoading && <Loader loader={4} />}
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
                                <select onChange={ (e) => setPlan(prev =>( {...prev, [e.target.name]: e.target.value})) } name={subscription?.package} id={subscription?.package} className='appearance-none max-w-[160px] mx-auto border border-green rounded-md outline-none cursor-pointer px-4 py-3 pr-8 bg-inherit'>
                                    <option value="">Change Duration</option>
                                    {subscription.plans?.map(plan => (
                                        <option key={plan?.verify_string} value={[plan?.verify_string, plan?.duration, plan?.duration_type, plan?.price]}>{plan?.duration} {plan?.duration_type==="3" ? "Month(s)" : "Year" }</option>
                                    ))}
                                </select>
                                <MdArrowDropDown className='absolute right-2 top-1/2 -translate-y-1/2' size="1.5rem" color="00C885" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-t border-[#00000010] pt-6'>
                            <div>
                                <span className='font-medium text-lg'>₦{plan[subscription?.package]?.split(",")[3] || "null"}</span><span>/{plan[subscription?.package]?.split(",")[1] > 1 && plan[subscription?.package]?.split(",")[1]}{plan[subscription?.package]?.split(",")[2] === "3" ? "Month(s)" : "Year"}</span>
                            </div>
                            <Button onClickFunc={() => handleSubmit(plan[subscription?.package].split(",")[0])} className='py-1.5 px-3 rounded-sm'>
                                Subscribe
                            </Button>
                            {/* <Button onClickFunc={() => setModalOpen(true)} className='py-1.5 px-3 rounded-sm'>
                                Subscribe
                            </Button> */}
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