const baseUrl = 'http://localhost:20000/'

export default {
    method: 'get',
    //基础url前缀
    baseUrl: baseUrl + 'api/',
    //请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    //设置基础超时时间
    timeout: 1000 * 40
}