import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useSearchParams, useNavigate, Link } from 'react-router-dom'
import { apiVerifyPayment, apiGetTransaction, apiSubscribeBusiness, apiMarkBillboardAsPaid } from '/src/services/SubscriptionService'
import usePost from '/src/hooks/usePost'
import useFetch from '/src/hooks/useFetch'
import Loading from '/src/components/Loader'


const VerifyPayment = () => {
    const [txn_string, setTxnString] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const tranx_id = searchParams.get("transaction_id")
    const txref = searchParams.get("tx_ref")

    
    const { isLoading: transactionLoading, error: transactionError, data: transaction  } = useFetch({
        api: apiGetTransaction,
        param: txn_string,
        key: ['transaction', txn_string],
        enabled: !!txn_string,
    })




    const { data: VerifyPaymentData, error, isLoading, isSuccess, mutate, status,} = usePost({ 
        api: apiVerifyPayment, 
        showSuccessMessage: false,
        success: (data) => {
            // console.log("success", data)
            if(data?.reason == "business_subscription"){
                setTxnString(data?.id)
                // return navigate(`/users/subscription/${data?.id}?string=${data?.id}&method=online_payment`);
            } else if(data?.reason == "business_subscription_renewal"){
                setTxnString(data?.id)
                // return navigate(`/users/subscription/${data?.id}_renewal?string=${data?.id}&method=online_payment`);
            } else if(data?.reason == "billboard_payment"){
                setTxnString(data?.id)
                // return navigate(`/users/billboard_apply?string=${data?.id}&method=online_payment`);
            } else {
                return navigate("/users");
            }
            // return navigate(`/users`)
        },
    })
    const subscribeBussiness = usePost({ 
        api: apiSubscribeBusiness, 
        showSuccessMessage: false,
        success: (data) => {
            // console.log("data success", data)
            return navigate(`/users/business/${data?.business_string}`);
        },
    })
    const markBillboardAsPaid = usePost({ 
        api: apiMarkBillboardAsPaid, 
        showSuccessMessage: false,
        success: (data) => {
            // console.log("data success", data)
            return navigate(`/users/billboard/`);
        },
    })
 
    useEffect(() => {
        const verify = async () => {
            // console.log("tx", txref, tranx_id)
            await mutate({ txref, tranx_id })
        }

        if (txref && tranx_id) {
            verify()
        }
    }, [txref, tranx_id])

    useEffect(() => {
        if(transaction){
            const subscribe = async () => {
                await subscribeBussiness.mutate({
                    id: transaction?.subject,
                    payment_method: "online_payment",
                    amount_paid: transaction?.amount,
               })
            }
            const billboard = async () => {
                await markBillboardAsPaid.mutate({
                    id: transaction?.subject,
                    payment_method: "online_payment",
                    amount_paid: transaction?.amount,
               })
            }
            if (VerifyPaymentData?.reason === "billboard_payment") {
                billboard()
            } else {
                subscribe()
            }
        }
    }, [transaction])

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    // console.log("verify transaction data", data)


    // useEffect(() => {
    //     if (isSuccess || data) {
    //         console.log("redirecting function", data)
    //         const redirectFunc = () => {
    //             if(data?.reason == "business_subscription"){
    //                 return navigate(`/users/subscription/${data?.id}?string=${data?.id}&method=online_payment`);
    //             } else if(data?.reason == "business_subscription_renewal"){
    //                 return navigate(`/users/subscription/${data?.id}_renewal?string=${data?.id}&method=online_payment`);
    //             } else if(data?.reason == "billboard_payment"){
    //                 return navigate(`/users/billboard_apply?string=${data?.id}&method=online_payment`);
    //             } else {
    //                 $session?.message("No Payment Reason was provided");
    //                 return navigate("failure.php");
    //             }
    //             return navigate(`/users`)
    //         }
    //         setTimeout(redirectFunc, 3000)
    //     }
    // }, [isSuccess, data])

    return (
        <div className='flex justify-center items-center gap-6 h-screen'>
            {isLoading && <Loading /> }
            {isSuccess && (
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-3xl text-green'>Payment Successful</h1>
                    <p className='text-lg'>Thank you for your payment</p>
                    <p className='text-sm italic'>You will be redirected to your dashboard shortly</p>
                </div>
            )}
            {error && (
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-3xl text-red-500'>Payment Failed</h1>
                    <p className='text-lg'>Sorry, your payment failed</p>
                    <p className='text-sm italic'>For any complaints or further enquiries, pleae reach out to us by sending a mail to <a href="mailto:support@yenreach.com">support@yenreach.com</a></p>
                    <Link to='/users' className='text-green'>Go to Dashboard</Link>
                </div>
            )}
        </div>
  )
}

export default VerifyPayment