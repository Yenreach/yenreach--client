import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SubscriptionModal from './SubscriptionModal'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import Loader from '/src/components/Loader'
import usePost from '/src/hooks/usePost'
import { apiVerifyPayment } from '/src/services/SubscriptionService'


const Subscription = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { id, tx_ref, transaction_id, ...restData } = useParams()

  const confirmSubScriptionMutation = usePost({ api: apiVerifyPayment })

      
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
        handleCheck()

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