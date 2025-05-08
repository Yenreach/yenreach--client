import ApiAdapter from "./ApiService"
import BaseService from "./BaseService"

const servicePrefix = "/auth"

export const apiRegister =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/register`,
        method: "post",
        data
    })
}

export const apiLogin =  (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/login`,
        method: "post",
        data
    })
}

export const apiResetPassword =  (data) => {
    return ApiAdapter.fetchData({
        url: "/reset_user_password_api.php",
        method: "post",
        data
    })
}
export const apiCheckPassword =  ({ user_string, p_string }) => {
    // console.log("user_string", user_string, "p_string", p_string)
    return ApiAdapter.fetchData({
        url:`/check_user_password_api.php?user_string=${user_string}&p_string=${p_string}`,
        method: "get",
    })
}

export const apiForgotEmail =  (email) => {
    return BaseService.post('/forgot_email_api.php', { email })
}

export const apiForgotPasswordTemp =  (data) => {
    return ApiAdapter.fetchData({
        url: `forgot_email_api.php`,
        method: "post",
        data 
    })
}

export const apiTest =  () => {
    return ApiAdapter.fetchData({
        url: "/fetch_approved_businesses_api.php",
        method: "get",
    })
}

