import axios from "axios"
axios.defaults.baseURL = ""

axios.interceptors.request.use(function(config){
    config.url += '/en'
    return config 
}, function(error) { return Promise.reject(error) })

export default axios