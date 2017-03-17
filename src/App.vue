<template>
    <div id="app">
        <NavC :active='navList'></NavC>
        <div id="wapper">
            <Loading :flag="isLoading"></Loading>
            <router-view></router-view>
        </div>
        <ToolsBar></ToolsBar>
    </div>
</template>

<script>
/**
 *  引入导航组件Nav  右边工具组件ToolsBar  Loading组件
 */
import KeyBoard from 'vue-keyboard-wg';
import Nav from '@/components/Nav';
import ToolsBar from '@/components/ToolsBar';
import Loading from '@/components/Loading';
export default {
    name: 'app',
    data(){
        return {
            keyBoardValue:''
        }
    },
    computed:{
        isLoading(){    // 计算属性 获取仓库中loading状态
            return this.$store.state.isLoading
        },
        navList(){      // 计算属性 获取仓库中导航状态值
            return this.$store.state.navList
        }
    },
    components:{        // 注册组件
        NavC:Nav,
        ToolsBar,
        Loading,
        KeyBoard
    }
}
</script>

<style>
html,body{
  height:100%;
  margin:0;
  padding:0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    height:100%;
    display:flex;
    display:-webkit-flex;
    justify-content:space-between;
    background:url(./assets/background.png) repeat;
}
#wapper{
    flex:1;
    margin:0 0.2rem;
    overflow:hidden;
}
</style>
