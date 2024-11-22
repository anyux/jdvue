// 引入request3000实例

import req from "@/utils/request3000";

export const test = ()=>{
    return req.get('/')
}

export const login = () =>{
    return req({
        url: '/login',
        method: 'post'
    })
}