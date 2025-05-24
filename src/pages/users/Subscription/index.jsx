import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { TfiCrown } from 'react-icons/tfi'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllSubscriptions, apiGetBusinessSubscriptions, apiGetOneBusiness } from '/src/services/UserService'
import SubscriptionModal from './SubscriptionModal'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Button from '/src/components/ui/Button'
import { MdArrowDropDown } from 'react-icons/md'
import Loader from '/src/components/Loader'
import { useMutation } from "@tanstack/react-query";
import { apiInitiateSubscription, apiInitiatePayment } from '/src/services/SubscriptionService'
import usePost from '/src/hooks/usePost'
import Table from '/src/components/Table'
import { expired, formatDate } from '/src/utils/dateFunc'


const columns = [
    {
      name: "subscription",
      label: "Subscription",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "payment_plan",
      label: "Plan",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "started",
      label: "Date Started",
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (value, meta) => {
        return  (
          <div className="flex items-center">
            <span className="">{formatDate(value)}</span>
          </div>
        )
    },
    },
    {
      name: "expired",
      label: "Expiry Date",
      extra: true,
      options: {
        filter: true,
        sort: true,
      },
      custom: (value, meta) => {
        return  (
          <div className="flex items-center">
            <span className="">{formatDate(value)}</span>
          </div>
        )
    },
    },
    {
        name: "expired",
        label: "Status",
        extra: true,
        options: {
          filter: true,
          sort: true,
        },
        custom: (value, meta) => {
            // console.log("meta", meta)
            return  (
              <div className={`flex items-center gap-4 ${meta?.status}`}>
                <span className={((!expired(value) && meta?.status == 1 )|| (!expired(value) && meta?.status==2)) ? "text-green" : "text-red-500"}>{expired(value) ? "Expired" : meta?.status==2 ? "Renewed" : meta?.status == 1 ? "Active" : "Cancelled" }</span>
              </div>
            )
        },
      },
  ];


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

      const {  data: business  } = useFetch({
        api: apiGetOneBusiness,
        param: { id },
        key: ['business', id],
      })

      const { data: userSubscriptions } = useFetch({
        api: apiGetBusinessSubscriptions,
        key:  ['userSubscriptions', id],
        param: id,
      })

      // console.log("subscriptions", subscriptions)

    const subscribeMutation = usePost({ 
        api: apiInitiateSubscription, 
        showSuccessMessage: false,
        success: (data,b,c) => {
            paymentMutation.mutate({
                platform: "Flutterwave",
                user_type: user?.user_type,
                user_string: user?.id,
                reason: "business_subscription",
                subject: data?.id
            })
        }
      })
    
    const paymentMutation = usePost({ 
        api: apiInitiatePayment, 
        showSuccessMessage: false,
        success: (data,b,c) => {
            window.location.href = data?.url
        }
      })
    
    const handleSubmit = (v_string) => {
        // e.preventDefault()
        console.log("vsurf", v_string)
        const data = { 
            'user_type': user?.user_type,
            'user_string': user?.id,
            'business_string': id,
            'paymentplan_string': v_string
         }
        console.log("data", data)
        subscribeMutation.mutate(data)
    }
    
    
  return (
    <Dashboard> 
    <div className='relative flex-1 overflow-hidden overflow-y-auto'>
        <Head />
        {(isLoading || subscribeMutation?.isLoading || paymentMutation?.isLoading) && <Loader loader={4} />}
        <section className='p-8 px-4 py-16 text-sm sm:px-8 md:pt-16'>
           {userSubscriptions &&
            <div className='p-4 mb-12 bg-white rounded-xl'>
                <h3 className='mb-3 text-xl font-medium text-green'>{} Subscriptions</h3>
                    <Table data={userSubscriptions} columns={columns} />
            </div>}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {subscriptions?.map(subscription => 
                    (<div key={subscription.id} className='p-5 py-7 rounded min-w-[250px] bg-white'>
                        <div className='flex items-center gap-3 mb-12'>
                            <TfiCrown size="1.4rem" color="00C885" />
                            <h3 className='text-lg font-medium text-green'>{subscription?.package} Package</h3>
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
                            <div className='relative mx-auto mt-2 w-fit h-fit'>
                                <select onChange={ (e) => setPlan(prev =>( {...prev, [e.target.name]: e.target.value})) } name={subscription?.package} id={subscription?.package} className='appearance-none max-w-[160px] mx-auto border border-green rounded-md outline-none cursor-pointer px-4 py-3 pr-8 bg-inherit'>
                                    <option value="">Change Duration</option>
                                    {subscription.plans?.map(plan => (
                                        <option key={plan?.id} value={[plan?.id, plan?.duration, plan?.duration_type, plan?.price]}>{plan?.duration} {plan?.duration_type==="3" ? "Month(s)" : "Year" }</option>
                                    ))}
                                </select>
                                <MdArrowDropDown className='absolute -translate-y-1/2 right-2 top-1/2' size="1.5rem" color="00C885" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-t border-[#00000010] pt-6 relative'>
                            <div>
                                <span className='text-lg font-medium'>₦{plan[subscription?.package]?.split(",")[3] || ""}</span><span>/{plan[subscription?.package]?.split(",")[1] > 1 && plan[subscription?.package]?.split(",")[1]}{plan[subscription?.package]?.split(",")[2] === "3" ? "Month(s)" : "Year"}</span>
                            </div>
                            <Button disabled={!plan[subscription?.package]} onClickFunc={() => handleSubmit(plan[subscription?.package].split(",")[0])} className={`py-1.5 px-3 rounded-sm disabled:bg-green/80 peer`}>
                                Subscribe
                            </Button>
                            <span className='absolute hidden text-xs font-semibold peer-hover:peer-disabled:block -bottom-6 text-green'>Choose a duration above</span>
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