import Msite from '../pages/Msite/Msite'

import Info from '../pages/Shop/Info/Info.vue'

export default [
  // {
  //   path: '路由路径',
  //   component: 路由组件
  // }
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },


  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children:[
      {
        path:'/shop/goods',
        component:Goods
      },
      //重定向
      {
        path:'/shop',
        redirect:'/shop/goods'
      },
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]