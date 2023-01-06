import axios from "axios";
import appConfig from "../configs/app.config";

const BaseService = axios.create({
    baseURL: appConfig.apiPrefix,
    timeout: 2000,
    headers: {'X-Custom-Header': 'Yenreach'}
})


BaseService.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("config", config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
BaseService.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default BaseService