
//适配的配置
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   // 设计稿10等分之后的值
})



module.exports = {
  runtimeCompiler: true,//模板不能编译时
  lintOnSave: false, // 关闭enlint语法检查
  css: { // 添加postcss配置 适配的
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: { //配置代理 可配置多个
    port:8082,//本地端口号 可不写
    proxy: {
      '/api': { //相当于街头
        target: 'http://localhost:4000',//去请求的服务器地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
        
      },
    //   '/foo': {
    //     target: 'url',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/foo': ''
    //     }   
    //   }
    }
  }
}
