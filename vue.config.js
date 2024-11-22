module.exports = {
    configureWebpack: {
        devServer:{
            proxy: {
                '/api':{
                    // 自动补充为 http://192.168.255.182:8000/api
                    target: 'http://192.168.255.182:8000',

                    changeOrigin: true,
                    // 取消自动补充动作,可自定义,取决于后端服务器是否不需要/api
                    pathRewrite: {
                        '^/api':'/task_api/disk_info'
                    }

                }
            }
        }
    }
}