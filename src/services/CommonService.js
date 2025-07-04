import ApiAdapter from "./ApiService"

const servicePrefix = "/business"
const serviceSuffix = ""

const token = JSON.parse(sessionStorage.getItem("user"))?.id

/* Home/index */

export const apiHomeBusiness =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiBusinessCategories =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/categories`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiBusinessOfTheWeek =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiBusinessAnalytics =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiBusinessStates =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiBillboards =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Explore */
export const apiGetApprovedBusinesses =  (query = {}) => {
    // console.log({ query })
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?page=${query?.page || '1'}&limit=${query?.num_per_page || '40'}&search=${query.search || ''}&category=${query.category || ''}&state=${query.state || ''}&lga=${query.lga || ''}&sort=${query.sort || ''}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }    
    })
}

/* Sort Businesses */
export const apiSortBusinesses = (query) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }  
    })
}


export const apiGetFilledCategories =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetBusinessStates =  ({ token }) => {
    // business states
    return ApiAdapter.fetchData({
        url: `/states`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiBusinessSearch =  ({ search, location }) => {
    const url = location && search ? servicePrefix + "business_search_api" + "?search_string=" + encodeURI(search) + "&location=" + encodeURI(location) : 
    search ? servicePrefix + "business_search_api" + "?search_string=" + encodeURI(search) :
    servicePrefix + serviceSuffix
    // business search
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}


/* Get states */
export const apiGetStates = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

/* Get lgas */
export const apiGetLGAs = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


// /* Business */
// export const apiGetOneBusiness = (business_token) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/${business_token}`,
//         method: "get",
//         headers: {
//             Authorization: `Bearer ${token}`
//         }    
//     })
// }

export const apiGetBusinessCategories = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetBusinessWorkingHours = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetBusinessBranches = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessSubscription = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessSubscriptionByString = (subscription_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetRelatedBusinesses = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessFacilities = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessReviews = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessReview = (token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBusinessReviewsStats = (business_token) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiAddBusinessReview = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data
    })
}

export const apiUpdateBusinessReview = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data
    })
}

export const apiSaveBusiness = ({buisnes_string}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

/* Blogs */

export const apiGetAllBlogs =  (query={}) => {
    return ApiAdapter.fetchData({
        url: `/blogs?page=${query?.page || '1'}&limit=${query?.num_per_page || '40'}&search=${query.search || ''}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }    
    })
}

export const apiGetBlog =  (id) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetBlogComments =  (id) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetComments =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiAddComment =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data    
    })
}

export const apiFeedback =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post" ,
        data   
    })
}
export const updateBusinessPhoto =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post" ,
        data   
    })
}


/* User Activities */

export const apiRegister =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiLogin =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiForgotEmail =  (email) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiGetCookie =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiPageVisits =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}
export const apiAddPageVisit =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data 
    })
}


export const apiActivityLog =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

export const apiGetAllCategories =  ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/categories`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

