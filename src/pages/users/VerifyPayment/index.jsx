import React, { useEffect } from 'react'
import { useParams, Navigate, useSearchParams, useNavigate } from 'react-router-dom'
import { apiVerifyPayment } from '/src/services/SubscriptionService'
import usePost from '/src/hooks/usePost'
import Loading from '/src/components/Loader'


const VerifyPayment = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const tranx_id = searchParams.get("transaction_id")
    const txref = searchParams.get("tx_ref")


    const { data, error, isLoading, isSuccess, mutate, status,} = usePost({ api: apiVerifyPayment })
 
    useEffect(() => {
        const verify = async () => {
            console.log("tx", txref, tranx_id)
            await mutate({ txref, tranx_id })
        }

        if (txref && tranx_id) {
            verify()
        }
    }, [txref, tranx_id])

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    console.log("verify transaction data", data)


    useEffect(() => {
        if (isSuccess || data) {
            console.log("redirecting function", data)
            const redirectFunc = () => {
                if(data?.reason == "business_subscription"){
                    return navigate(`/users/subscription/${data?.verify_string}?string=${data?.verify_string}&method=online_payment`);
                } else if(data?.reason == "business_subscription_renewal"){
                    return navigate(`/users/subscription/${data?.verify_string}_renewal?string=${data?.verify_string}&method=online_payment`);
                } else if(data?.reason == "billboard_payment"){
                    return navigate(`/users/billboard_apply?string=${data?.verify_string}&method=online_payment`);
                } else {
                    $session?.message("No Payment Reason was provided");
                    return navigate("failure.php");
                }
                return navigate(`/users`)
            }
            setTimeout(redirectFunc, 3000)
        }
    }, [isSuccess, data])

    return (
        <div className='flex justify-center items-center gap-6 h-screen'>
            {isLoading && <Loading /> }
            {isSuccess && (
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1>Payment Successful</h1>
                    <p>Thank you for your payment</p>
                </div>
            )}
            {error && (
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1>Payment Failed</h1>
                    <p>Sorry, your payment failed</p>
                    <p>For any complaints or further enquiries, pleae reach out to us by sending a mail to <a href="mailto:support@yenreach.com">support@yenreach.com</a></p>
                </div>
            )}
        </div>
  )
}

export default VerifyPayment