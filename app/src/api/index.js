//所有的api接口统一的管理
import requests from './request'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
