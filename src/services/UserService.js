import ApiAdapter from "./ApiService"

const servicePrefix = "/users"
const serviceSuffix = ".php"

const token = JSON.parse(localStorage.getItem("user"))?.verify_string


/* Get user businesses */
export const apiGetAllBusinesses = () => {
    console.log("token", token)
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



