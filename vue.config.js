// 适配
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 35 // 350px
})
module.exports = {
  runtimeCompiler: true, //是否使用包含运行时编译器的Vue内核版本
  lintOnSave: false, //关闭eslinet检查
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    port: 8080,
    open: true,
    quiet: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }
}