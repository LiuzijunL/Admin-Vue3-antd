module.exports = {
    //webpack-dev-server 相关配置
    devServer: {
        port: 80,
        proxy: { // 设置代理
            '/api': {
                target: 'http://localhost/:20000',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    productionSourceMap: false, //打包不生成map文件
    configureWebpack: (config) => {
        config.entry.app = ["babel-polyfill", "./src/main.js"] // main是入口js文件
    },
    // CSS 相关选项
    css: {
        // 将组件内的CSS提取到一个单独的CSS文件(只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        
        //是否开启CSS source map ？
        sourceMap: false
    }
}