import axios from "axios"

axios.defaults.baseURL = "https://dashboard.otium.ge/api"
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang')

axios.interceptors.request.use(function(config){
    // console.log(config)
    // config.url += '/' + localStorage.getItem('lang')
    // console.log(config)

    return config 
}, function(error) { return Promise.reject(error) })

const response = await axios.get('/pages/1')

// console.log('shit')
// console.log(response)

export default axios