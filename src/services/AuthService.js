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

export const apiForgotEmail =  (data) => {
    return ApiAdapter.fetchData({
        url: "/user_login_api.php",
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

