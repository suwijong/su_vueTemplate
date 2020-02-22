##1,全局安装vue,vue-cli  //vue -V可查看版本  
安装依赖  npm install  @vue/cli  -g (一般是安装的,所以初始化项目即可)
初始化项目  vue  create  <projectName>
vue2脚手架使用
如果要使用vue2的脚手架
安装桥接:npm install @vue/cli-init
初始化项目:vue init webpack <projectName>
##2,脚手架的一般配置  vue-cli官网
自己创建vue.config.js 配置文件 一定要暴露module.exports ={}里面写配置
模板编译:runtimeCompiler: true
Eslint说明:lintOnSave: false,全部关闭
适配下载工具库:npm install postcss-px2rem  lib-flexible --save 
             在配置文件写配置,一定要在main.js中引入import 'lib-flexible/flexible'
stylus下载工具库:npm install stylus stylus-loader
使用ui库,先下载再去bable.config.js中配置
##3,路由 在main.js中引入挂载全局
核心概念 npm install vue-router
1. 生成路由器: const router = new VueRouter()
2. 安装路由器: new Vue(router)  //在main.js中引入安装
3. 管理路由: new VueRouter({[{path: '路由路径', component: '路由组件'}]})
4. 请求路由: 1) router-link to='路由路径'， 2) $router.路由方法
5. 显示路由组件: router-view
##4,axios请求 二次封装
依赖:npm install axios
     npm install querystring
api文件夹 
数据管理:将方法挂载到全局
在main.js中:import * as API from './api'
            Vue.prototype.$API = API
在各个组件都可以使用:  async mounted(){
          let result = await this.$API.getCateNavList()
          } 
##5,vuex数据管理,各组件间通信 npm install vuex
创建store文件夹 在main.js中引入挂载全局
要在那里获取异步数据就在那里触发action mounted(){
              this.$store.dispatch('getAddressAction')
            }
不发请求 直接更新this.$store.commit('SAVE_ADDRESS')            
1. 核心概念：

   1. store对象

      1. state： 多个组件共享的数据，用于集中管理
      2. mutations
         1. mutation本质是函数
         2. mutation作用: 修改state的状态数据
         3. mutation特性： 只能处理同步数据，处理不了异步数据
      3. actions
         1. action本质是函数
         2. action作用: 1) 获取异步数据 2) 调用mutation同时将异步数据交给mutation
         3. 调用mutation： commit('mutation的函数名', 交给mutation的异步数据)
      4. getters
         1. getter本质：函数
         2. getter作用： 同Vue的computed一样，依赖于原数据(state数据)进行计算得到新的数据
      5. dispatch
         1. dispatch本质： 函数
         2. dispatch作用： 调用action

   2. 组件同Vuex交互

      1. mapState, 语法： computed
         1. ...mapState(['映射的状态数据key'])， 不能动态定义映射的key值
         2. ...mapState({key: state => state.key})
2. 常见问题
   1. 刷新Vuex数据丢失
      1. 问题原因： 
         1. Vuex的数据保存在运行的内存中
         2. 刷新页面会重新初始化整个应用，重新分配内存
      2. 解决方案：
         1. 当页面刷新的时候重新发请求获取数据，更新Vuex中的数据
         2. 利用页面刷新的事件  + sessionStorage
            1. 在unload事件的回调中将数据保存至sessionStorage中
            2. 在组件重新加载之后从sessionStorage中读取并更新至Vuex中
See [Configuration Reference](https://cli.vuejs.org/config/).
