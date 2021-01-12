module.exports = {
    //webpack-dev-server 相关配置
    devServer: {
        port: 80,
        proxy: null, // 设置代理
    },
    productionSourceMap: false //打包不生成map文件
}