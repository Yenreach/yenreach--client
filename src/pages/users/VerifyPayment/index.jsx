import React, { useEffect, useParams } from 'react'
import { Navigate } from 'react-router-dom'
import { apiVerifyPayment } from '/src/services/SubscriptionService'
import usePost from '/src/hooks/usePost'
import Loading from '/src/components/Loader'


const VerifyPayment = () => {
    const { id, tx_ref, transaction_id } = useParams()


    const { data, error, isLoading, isSuccess, mutate, status,} = usePost({ api: apiVerifyPayment })
 
    useEffect(() => {
        const verify = async () => {
            await mutate({ id, tx_ref, transaction_id })
        }

        if (id && tx_ref && transaction_id) {
            verify()
        }
    }, [id, tx_ref, transaction_id])

    if (isLoading) {
        return <div>Loading...</div>
    }

    useEffect(() => {
        if (isSuccess || data) {
            const redirectFunc = () => {
                if(data?.reason == "business_subscription"){
                    redirect_to(`https://yenreach.com/users/business_subscription?string=${data?.verify_string}&method=online_payment`);
                } else if(data?.reason == "business_subscription_renewal"){
                    redirect_to(`https://yenreach.com/users/business_subscription_renewal?string=${data?.verify_string}&method=online_payment`);
                } else if(data?.reason == "billboard_payment"){
                    redirect_to(`https://yenreach.com/users/billboard_apply?string=${data?.verify_string}&method=online_payment`);
                } else {
                    $session?.message("No Payment Reason was provided");
                    redirect_to("failure.php");
                }
                return <Navigate to="/dashboard" />
            }
            setTimeout(redirectFunc, 3000)
        }
    }, [isSuccess, data])

    return (
        <div className='flex justify-center items-center gap-6'>
            {Loading && <Loading /> }
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