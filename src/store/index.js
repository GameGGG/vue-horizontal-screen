/**
 * Created by ganlei on 2017/3/13.
 */
import Vue from 'vue';
import http from 'vue-resource'
import Vuex from 'vuex';
import Scroll from 'iscroll';
Vue.use(Vuex);
Vue.use(http);

// 获取数据信息
import HotQuestion from './../data/hot_requestion'



var store = new Vuex.Store({
    state:{
        Scroll:'',          // 滑动管理
        hotQuestion:[],     // 热门问题
        isLoading:true,     // 是否显示loading,默认为true
        navList:0             // 导航管理，0:gameGenius 1:service 2:record 3:platform
    },
    mutations:{
        navListHandler(state,opt){    // 处理页面导航状态处理器
            state.navList = opt.amount;
        },
        isLoadingHandler(state,opt){  // 处理loading状态处理器
            state.isLoading = opt.amount;
        },
        setHotQuestion(state,opt){
            state.hotQuestion = opt.value;
        },
        newScroll(state){
            console.log(document.querySelector("#wapper"))
            state.Scroll = new Scroll("#wapper",{
                scrollbars: true,
                tap:true
            })
            console.log(state.Scroll);

        },
        refrenshScroll(store){
            if(!store.Scroll) return;
            setTimeout(() => {
                store.Scroll.refresh();
            },300)
        }
    },
    actions:{
        getHotQuestion({commit}){
            setTimeout(() => {
                commit('setHotQuestion',{
                    value:HotQuestion
                })
            },100)
        }
    }
})
export default store;
