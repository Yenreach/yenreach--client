import ApiAdapter from "./ApiAdapter"

const servicePrefix = "/auth"

export const apiRegister =  (data) => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "/register",
        method: "post",
        data
    })
}

export const apiLogin =  (data) => {
    return ApiAdapter.fetchData({
        url: servicePrefix + "/login",
        method: "post",
        data
    })
}

