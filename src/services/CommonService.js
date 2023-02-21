import ApiAdapter from "./ApiService"

const servicePrefix = "/"
const serviceSuffix = ".php"

/* Home/index */

export const apiHomeBusiness =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_home_businesses_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiBusinessCategories =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_filled_categories_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiBusinessOfTheWeek =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_business_of_the_week_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiBusinessStates =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_business_states_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiBillboards =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_active_billboards_api" + serviceSuffix,
        method: "get"    
    })
}

/* Explore */

export const apiGetApprovedBusinesses =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_public_approved_businesses_api" + serviceSuffix,
        method: "get"    
    })
}

/* Blogs */

export const apiGetAllBlogs =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_all_blog_post_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiGetBlog =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_one_blog_post_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiGetComments =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_comments_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiPostComment =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_comments_api" + serviceSuffix,
        method: "get"    
    })
}

/* User Activities */

export const apiRegister =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "add_user_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiLogin =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "user_login_api" + serviceSuffix,
        method: "get"    
    })
}

export const apiForgotEmail =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "forgot_email_api" + serviceSuffix,
        method: "get"    
    })
}
export const apiPageVisits =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "transfer_page_visits_api" + serviceSuffix,
        method: "get"    
    })
}


export const apiActivityLog =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "add_activity_log_api" + serviceSuffix,
        method: "get"    
    })
}

/* Dashboard */

export const apiGetBusinessByUser =  () => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "fetch_business_by_user_string_api" + serviceSuffix,
        method: "get"    
    })
}