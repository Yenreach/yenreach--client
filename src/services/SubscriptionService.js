import ApiAdapter from "./ApiService"

const servicePrefix = "/subscription"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Initiate Subscription */
export const apiInitiateSubscription = (data) => {
    return ApiAdapter.fetchData({
        url: `/initiate_subscription_payment_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Initiate Payment */
export const apiInitiatePayment = (data) => {
    return ApiAdapter.fetchData({
        url: `/initiate_payments_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Verify Payment */
export const apiVerifyPayment = (data) => {
    return ApiAdapter.fetchData({
        url: `/flutterwave_verify_transaction_api${serviceSuffix}`,
        method: "post",
        data    
    })
}


