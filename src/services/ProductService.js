import ApiAdapter from "./ApiService"

const servicePrefix = "/products"
const serviceSuffix = ".php"

const token = JSON.parse(localStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Add Product */
export const apiAddProduct = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}add_product_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Category */
export const apiAddProductCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}add_product_category_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Category List */
export const apiAddProductCategoryList = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}add_product_category_list_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Photo */
export const apiAddProductPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}add_product_photo_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Delete Product */
export const apiDeleteProduct = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}delete_product_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Delete Product Category */
export const apiDeleteProductCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}delete_product_category_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Delete Product Photo */
export const apiDeleteProductPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}delete_product_photo_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Get Products */
export const apiGetAllProducts = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}fetch_all_product_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get One Product */
export const apiGetProduct = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}fetch_one_product_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get Product Category */
export const apiGetProductCategory = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}fetch_product_category_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Update Product */
export const apiUpdateProduct = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}update_product_api${serviceSuffix}`,
        method: "patch",
        data
    })
}


