/**
 * Created by ganlei on 2017/3/13.
 */
import Vue from 'vue';
import http from 'vue-resource'
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(http);

// 获取数据信息
import mutations from './mutation.js'
import actions from './actions.js'

const state = {
  Scroll:'',          // 滑动管理
  hotQuestion:[],     // 热门问题
  isLoading:true,     // 是否显示loading,默认为true
  navList:0             // 导航管理，0:gameGenius 1:service 2:record 3:platform
}

var store = new Vuex.Store({
    state ,
    mutations ,
    actions
})
export default store;
