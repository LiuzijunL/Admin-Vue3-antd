import axios from 'axios'
import config from './config'

const instance = axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
    timeout: config.timeout
})
// 请求拦截
instance.interceptors.request.use(
    config => {
        return config
    },
    err => {
        Promise.reject(err)
    }
)
// 响应拦截
instance.interceptors.response.use(
    response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
            data = JSON.parse(response.request.responseText)
        } else {
            data = response.data
        }
        return data
    },
    err => {
        Promise.reject(err)
    }
)


export default function $axios(options) {
    return new Promise((resolve, reject) => {
        // 请求处理
        instance(options).then(res => {
            resolve(res)
            return false
        }).catch(error => {
            reject(error)
        })
    })
}