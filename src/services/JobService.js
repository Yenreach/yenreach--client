import ApiAdapter from "./ApiService"

const servicePrefix = "/jobs"

const token = JSON.parse(sessionStorage.getItem("user"))?.id


/* Get user */
export const apiGetUser = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}


/* Add Job */
export const apiAddJob = (data, { token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}


/* Get Jobs */
export const apiGetAllJobs = (query={}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?limit=${query?.limit || 40}&page=${query?.page}&search=${query?.search || ''}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }   
    })
}

/* Get Jobs */
export const apiGetAllJobsAdmin = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/all`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get Jobs by business */
export const apiGetAllBusinessJobs = ({ token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/jobs`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Job */
export const apiGetJob = ({ token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Application */
export const apiGetApplication = ({ id, applicationId }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/applications/${applicationId}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get All Applications by Job string */
export const apiGetApplicationsByJob = ({ token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/applications`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get All Applications by User string */
export const apiGetApplicationsByUser = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Delete Application */
export const apiDeleteApplication = ({ applicationId, id, token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/application/$${applicationId}`,
        method: "delete",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        } 
    })
}

/* Delete Job */
export const apiDeleteJob = ({ id, token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "delete",
        headers: {
            Authorization: `Bearer ${token}`
        } 
    })
}



/* Submit Job Application */
export const apiSubmitApplication = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/applications`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
/* Update Job */
export const apiUpdateJob = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "put",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

/* Update Job status */
export const apiUpdateJobStatus = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "put",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



