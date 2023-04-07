import ApiAdapter from "./ApiService"

const servicePrefix = "/auth"

export const apiRegister =  (data) => {
    return ApiAdapter.fetchData({
        url:  "/add_user_api.php",
        method: "post",
        data
    })
}

export const apiLogin =  (data) => {
    return ApiAdapter.fetchData({
        url: "/user_login_api.php",
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
    return ApiAdapter.fetchData({
        url: `/forgot_email_api.php?string=${email}`,
        method: "get",
    })
}
export const apiTest =  () => {
    return ApiAdapter.fetchData({
        url: "/fetch_approved_businesses_api.php",
        method: "get",
    })
}

