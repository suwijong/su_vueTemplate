//发送异步请求 获取数据
import {
    getAddress,
  } from '../api'
  
  import {
    SAVE_ADDRESS,
  } from './mutations-type'
  
  
  //在哪个组件要获取数据就在那里触发
  export default {
    async getAddressAction({commit}){
      let result = await getAddress(40.10038,116.36867) //注意是否传参
      // if(result.code === 0){
      //   commit(SAVE_ADDRESS, result.data)//触发mutation 更新state数据
      // }
      !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)  
    },
  }