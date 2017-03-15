<template>
    <div class="tools_bar">
        <div class="close_window"></div>
        <div class="jump_top"></div>
    </div>
</template>
<style scoped>
    .tools_bar{
        background:#14141e;
        width:1rem;
        padding:20px 0;
        display:flex;
        display:-webkit-flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    }
    .close_window{
        width:0.6rem;
        height:0.6rem;
        background:url(../assets/close.png) no-repeat center;
        background-size:contain;
    }
    .jump_top{
        width:0.6rem;
        height:0.6rem;
        background:url(../assets/reTop.png) no-repeat center;
        background-size:contain;
    }
</style>
<script>

    export default{
        data(){
            return{
            }
        },
        components:{

        }
    }
</script>
