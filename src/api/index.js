import ajax from './ajax'

/* 根据经纬度获取位置详情 */
export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})

/* 获取食品分类列表 */
export const getCateNavList = () => ajax({
    url: '/index_category'
  })
  