import axios from 'axios'
import qs from 'qs'
import router from '../router'

// 1. 生成 Axios 的伪实例, instance不是真正new Axios，但是拥有axios实例的所有属性和方法
const instance = axios.create({
  baseURL: '/api'
})

// 2. 添加请求拦截器, 理解： 即将要发送请求的时候，将请求拦截下来，对当前的请求批量处理，如： 添加token，修改请求的参数
instance.interceptors.request.use(config => {
  // 1) config包含当前请求的所有请求信心： method, url, data
  
  // 2) 修改post请求的请求参数格式： 默认的参数格式是json对象格式{a: xxx, b: yyy}, 当前服务器能处理的是url-encoding， 如： a=xxx&b=yyy
  config.data = qs.stringify(config.data) // json对象格式 ---> url-encoding形式

  //3.携带token  authorization在请求头里要有这个字段
  //判断是否需要token
  if (config.headers.needToken) {
       //从localstorage中先拿到token
       let token = localStorage.getItem('token_key')
       if (token) {//如果有token 携带到请求头中
         config.headers.authorization = token
       } else {//没有就抛出一个错误
         throw Error('请先登录')
       }
  }
  
  
  return config
})

// 3. 设置响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    // alert('请求失败')
    console.log(error);
    // 错误信息的种类
    if (!error.response) {//请求还没有发出去 在请求拦截器报错
      alert(error.message)
      //若不在login页面则让它跳转至登录页面  router.currentRoute当前所在的路由对象
      if (router.currentRoute.path !== '/login') {
        router.replace('/login')
      }

    } else {//请求发送后在响应回来的错误信息
      if (error.response.status === 401) {
          alert('token过期 重新登录')
          //去登录页面
          if (router.currentRoute.path !== '/login') {
            router.replace('/login')
          }

      } else if(error.response.status === 404) {
          alert('找不到资源')
      }else{
          alert('请求错误')
      }  
      
    }
    // 默认会返回一个成功的promise实例，但是没有数据
    // 手动返回一个状态为初始化的promise
    return new Promise(() => {})
  }
)



export default instance