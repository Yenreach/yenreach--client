import ApiAdapter from "./ApiService"

const servicePrefix = "/users"
/* Get user */
export const apiGetUser = ({ token }) => {
    // console.log("user", user_string, "token", token)
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/me`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Update user */
export const apiUpdateUser = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `edit_user_profile_api`,
        method: "post",
        data
    })
}
/* Update user */
export const apiUpdateUserCv = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `update_user_cv_api`,
        method: "post",
        data
    })
}
/* Update Password */
export const apiUpdatePassword = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `change_user_password_api`,
        method: "post",
        data
    })
}

/* Activity Log */
export const apiAddActivityLog = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `add_activity_log_api`,
        method: "post",
        data
    })
}

/* Get user businesses */
export const apiGetAllBusinesses = ({ token }) => {
    // console.log("token", token)
    return ApiAdapter.fetchData({
        url: `/user/business`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get user business */
export const apiGetOneBusiness = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get user business */
export const apiGetBusinessPageVisits = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `fetch_pagevisits_by_business_api/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get business categories */
export const apiGetBusinessCategories = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/categories/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get business photos */
export const apiGetBusinessPhotos = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/photos/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiAddBusinessPhoto = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/photos`,
        method: "post",
        data
    })
}

/* Get business videos */
export const apiGetBusinessVideos = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/videos`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get business working hours */
export const apiGetBusinessWorkingHours = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/working-hours`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get business branches */
export const apiGetBusinessBranches = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/working-hours`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get business Subscription */
export const apiGetBusinessSubscription = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/subscriptions`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Related Businesses */
export const apiGetRelatedBusinesses = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/related`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Related Businesses */
export const apiGetBusinessReviews = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `/business/${id}/reviews`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Billboard Payment */
export const apiGetBillboardPaymentTypes = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_advert_payment_types_api`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Billboard Payment */
export const apiGetUserBillboardApplications = (user_string) => {
    return ApiAdapter.fetchData({
        url: `fetch_billboard_applications_by_user_api?user/${user_string || token}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Subscriptions */
export const apiGetAllSubscriptions = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_business_subscriptions_api`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
/* Get Business Subscriptions */
export const apiGetBusinessSubscriptions = (string) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_subscriptions_api/${string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Billboard Payment */
export const apiGetAllSubscriptionPlans = (package_string) => {
    return ApiAdapter.fetchData({
        url: `fetch_subscription_plans_api/${package_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Saved/Favorite Businesses */
export const apiGetSavedBusinesses = () => {
    // console.log("token", token)
    return ApiAdapter.fetchData({
        url: `fetch_saved_businesses_api/${token}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Add business */
export const apiAddBusiness = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `/business`,
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: data
    })
}

/* Add business working hour */
export const apiAddBusinessWorkingHours = (data, { token }) => {
    return ApiAdapter.fetchData({

        url: `/business`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}
    })
}

/* Delete working hour */
export const apiDeleteBusinessWorkingHour = ({string}) => {
    return ApiAdapter.fetchData({
        url: `/business/working-hours/${string}`,
        method: "get",
    })
}


/* Edit business */
export const apiEditBusiness = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `/business`,
        url: `edit_business_profile_api`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}
    })
}
/* Edit business Profile Image */
export const apiEditBusinessProfileImage = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `update_profile_image_api`,
        method: "post",
        data
    })
}

/* Edit business Profile Image */
export const apiEditBusinessCoverImage = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `update_cover_image_api`,
        method: "post",
        data
    })
}

/* Get states */
export const apiGetStates = () => {
    return ApiAdapter.fetchData({
        url: `/states`,
        method: "get",
    })
}

/* Get lgas */
export const apiGetLGAs = () => {
    return ApiAdapter.fetchData({
        url: `/sta`,
        method: "get",
    })
}


/* Add business page visits */
export const apiAddPageVisits = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `create_page_visit_api`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}   
    })
}



