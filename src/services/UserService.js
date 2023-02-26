import ApiAdapter from "./ApiService"

const servicePrefix = "/users"
const serviceSuffix = ".php"

const token = JSON.parse(localStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}

/* Update user */
export const apiUpdateUser = (data) => {
    return ApiAdapter.fetchData({
        url: `edit_user_profile_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Activity Log */
export const apiAddActivityLog = (data) => {
    return ApiAdapter.fetchData({
        url: `add_activity_log_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Get user businesses */
export const apiGetAllBusinesses = () => {
    // console.log("token", token)
    return ApiAdapter.fetchData({
        url: `fetch_business_by_user_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}

/* Get user business */
export const apiGetOneBusiness = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_by_string_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business categories */
export const apiGetBusinessCategories = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_categories_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business photos */
export const apiGetBusinessPhotos = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_photos_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business videos */
export const apiGetBusinessVideos = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_videolinks_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business working hours */
export const apiGetBusinessWorkingHours = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_working_hours_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business branches */
export const apiGetBusinessBranches = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_branches_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business Subscription */
export const apiGetBusinessSubscription = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_latest_subscription_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Related Businesses */
export const apiGetRelatedBusinesses = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_related_businesses_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Related Businesses */
export const apiGetBusinessReviews = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_user_reviews_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetBillboardPaymentTypes = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_advert_payment_types_api${serviceSuffix}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetUserBillboardApplications = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_advert_payment_types_api${serviceSuffix}?user_string=${token}`,
        method: "get"    
    })
}

/* Get Subscriptions */
export const apiGetAllSubscriptions = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_business_subscriptions_api${serviceSuffix}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetAllSubscriptionPlans = (package_string) => {
    return ApiAdapter.fetchData({
        url: `fetch_subscription_plans_api${serviceSuffix}?string=${package_string}`,
        method: "get"    
    })
}

/* Get Saved/Favorite Businesses */
export const apiGetSavedBusinesses = () => {
    return ApiAdapter.fetchData({
        url: `fetch_saved_businesses_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}

/* Post business page visits */
export const apiAddPageVisits = (data) => {
    return ApiAdapter.fetchData({
        url: `create_page_visit_api${serviceSuffix}`,
        method: "post",
        data    
    })
}


