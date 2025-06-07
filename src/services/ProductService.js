import ApiAdapter from "./ApiService"

const servicePrefix = "/products"

const token = JSON.parse(sessionStorage.getItem("user"))?.token


/* Get user */
export const apiGetUser = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${token}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }     
    })
}


/* Add Product */
export const apiAddProduct = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Add Product Category */
export const apiAddProductCategory = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Add Product Category List */
export const apiAddProductCategoryList = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Add Product Photo */
export const apiAddProductPhoto = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Delete Product */
export const apiDeleteProduct = ({business_string, product_string}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?business_string=${business_string}&product_string=${product_string}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        } 
    })
}

/* Delete Product Category */
export const apiDeleteProductCategory = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "delete",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Delete Product Photo */
export const apiDeleteProductPhoto = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "delete",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
}

/* Get Products */
export const apiGetAllProducts = (query={}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?limit=${query?.num_per_page || 40}&page=${query?.page || 1}&search=${query?.search || ''}&category=${query?.category || ''}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }   
    })
}

/* Sort Products */
export const apiSortProducts = (query={}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}?sort=${query?.sort || ''}&per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${query?.token}`
        }   
    })
}

/* Get Products */
export const apiGetAllProductsAdmin = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get Products by Business string */
export const apiGetAllBusinessProducts = ({ id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/products`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Product */
export const apiGetProduct = ({ id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get One Product */
export const apiGetRelatedProducts = ({ id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}/related`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}

/* Get Product Category */
export const apiGetProductCategories = ({ token }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/categories`,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
}


/* Update Product */
export const apiUpdateProduct = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "put",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

/* Update Product Status */
export const apiUpdateProductStatus = (data, { token, id }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/${id}`,
        method: "post",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



