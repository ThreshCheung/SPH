import {reqCategoryList} from '@/api';

const state = {
    CategoryList:[]
}
//唯一能修改state的手段
const mutations = {
    CATEGORYLIST(state,CategoryList){
        state.CategoryList = CategoryList
    }
}
//这里可以修改业务逻辑，可以异步处理，但不能修改state
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    }
}
//理解为计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}