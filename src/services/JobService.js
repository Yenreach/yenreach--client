import ApiAdapter from "./ApiService"

const servicePrefix = "/jobs"
const serviceSuffix = ".php"

const token = JSON.parse(localStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Add Job */
export const apiAddJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_job_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Job Category */
export const apiAddJobCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_job_category_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Job Category List */
export const apiAddJobCategoryList = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_job_category_list_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Job Photo */
export const apiAddJobPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_job_photo_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Delete Job */
export const apiDeleteJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_job_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Delete Job Category */
export const apiDeleteJobCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_job_category_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Delete Job Photo */
export const apiDeleteJobPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_job_photo_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Get Jobs */
export const apiGetAllJobs = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_all_job_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get One Job */
export const apiGetJob = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_one_job_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get Job Category */
export const apiGetJobCategory = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_job_category_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Update Job */
export const apiUpdateJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/update_job_api${serviceSuffix}`,
        method: "patch",
        data
    })
}



