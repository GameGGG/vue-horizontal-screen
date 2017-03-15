/**
 * Created by ganlei on 2017/3/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
  state:{
    isLoading:true,     //是否显示loading,默认为true
    navList:0             //导航管理，0:gameGenius 1:service 2:record 3:platform
  },
  mutations:{
    navListHandler(state,opt){    // 处理页面导航状态处理器
        state.navList = opt.amount;
    },
    isLoadingHandler(state,opt){  // 处理loading状态处理器
        state.isLoading = opt.amount;
    }
  }
})
export default store;
