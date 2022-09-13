import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home'
import search from './search'

const state = {}
//唯一能修改state的手段
const mutations = {}
//这里可以修改业务逻辑，可以异步处理，但不能修改state
const actions = {}
//理解为计算属性
const getters = {}

export default new Vuex.Store({
    modules:{
        home,
        search
    }
})

