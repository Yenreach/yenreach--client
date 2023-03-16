import React, { useState, useEffect } from 'react'
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
import { apiVerifyPayment } from '/src/services/SubscriptionService'


const Subscription = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { id, tx_ref, transaction_id, ...restData } = useParams()


      const confirmSubScriptionMutation = useMutation({
        mutationFn: async (data) => {
          const response =  await apiVerifyPayment(data)
          console.log("response from confirm subscription", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("success sub", data)
            setIsLoading(false)
        },
        onError: (error, variables, context) => {
          console.log("error sub", error)
          setIsLoading(false)
        },
      })
    
      
      useEffect(() => {
        const handleCheck = (v_string) => {
            // e.preventDefault()
            // console.log("vsurf", v_string)
            const data = { 
                txref: tx_ref,
                tranx_id: transaction_id,
                data: restData
             }
            console.log("data", data)
            confirmSubScriptionMutation.mutate(data)
        }
        handleCheck

    }, [])

    
    
  return (
    <Dashboard> 
    <div className='flex-1 overflow-y-auto overflow-hidden relative'>
        <Head />
        {isLoading && <Loader loader={4} />}
        {!isLoading && "Something About ur payment"}
        {modalOpen && <SubscriptionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </div>
</Dashboard>
  )
}

export default Subscription  