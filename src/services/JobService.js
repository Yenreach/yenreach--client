import ApiAdapter from "./ApiService"

const servicePrefix = "/jobs"

const token = JSON.parse(sessionStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${token}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}


/* Add Job */
export const apiAddJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data    
    })
}


/* Get Jobs */
export const apiGetAllJobs = (query) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}&search=${query?.search || ''}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get Jobs */
export const apiGetAllJobsAdmin = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get Jobs by business */
export const apiGetAllBusinessJobs = (business_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${business_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Job */
export const apiGetJob = (job_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${job_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Application */
export const apiGetApplication = (application_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${application_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get All Applications by Job string */
export const apiGetApplicationsByJob = (job_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${job_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get All Applications by User string */
export const apiGetApplicationsByUser = (user_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?string=${user_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Delete Application */
export const apiDeleteApplication = ({application_string, job_string }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?application_string=${application_string}&job_string=${job_string}`,
        method: "delete",
        data  
    })
}

/* Delete Job */
export const apiDeleteJob = ({business_string, job_string }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?job_string=${job_string}&business_string=${business_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        } 
    })
}



/* Submit Job Application */
export const apiSubmitApplication = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data
    })
}
/* Update Job */
export const apiUpdateJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data
    })
}

/* Update Job status */
export const apiUpdateJobStatus = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data
    })
}



