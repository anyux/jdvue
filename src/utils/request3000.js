import axios from 'axios'

const req = axios.create({
    // 实例独特的表示,走代理解决跨域问题
    baseURL: '/api'
})

// 拦截器 = 公共行为: 请求loading 响应关闭loading
// 响应错误常规处理 401 > 无权登录,路由跳转到401页面
// 请求时,如果有token,自动添加到请求头,响应时自动存储token

req.interceptors.response.use((response) => {
    // response: {data,config:{headers}
    if (response.data.token){
        // 保存到本地存储:sessionStorage,localStorage
        // sessionStorage 会话级别,关闭标签,会话丢失, 常用
        // localStorage 长期持久化存储
        sessionStorage.setItem('token', response.data.token)
        console.log(response.data.token)
    }
    // 处理业务的异常

    return response
},(error) => {
    // 4xx 5xx 异常
    // 非业务范畴的通用异常提示
    console.log("响应异常", error)
})

// 请求使用token
req.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')
    if (token){
        config.headers.token = token
    }
    return config;
}, (error) => {
    // 4xx 5xx 异常
    // 非业务范畴的通用异常提示
    console.log("响应异常", error)
})

// 导出到外部
export default req;