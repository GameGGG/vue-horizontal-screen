<template>
    <div class="genius">
        <div class="navTwo">
            <menu class="navtwo_btn_active">游戏帮助</menu>
            <menu class="navtwo_btn_active">版本先知</menu>
            <menu class="navtwo_btn_active">更多游戏</menu>
        </div>
        <Swp style="margin-top:10px">
            <div style="background:aliceblue;"><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
            <div style="background:green;">div2</div>
            <div style="background:yellow;">div3</div>
            <div style="background:blue;">div4</div>
            <div style="background:white;">div5</div>
        </Swp>
    </div>
</template>
<style scoped>
    .genius{
        position:relative;
        height:100%;
        width:100%;
        overflow:hidden;
    }
    .navTwo{
        position:absolute;
        top:10px;
        left:0;
        width:100%;
        height:0.6rem;
        line-height:0.6rem;
        display:flex;
        fisplay:-webkit-flex;
        font-size:0.3rem;
        z-index:2;
    }
    .navTwo menu:nth-of-type(1){
        border-top-left-radius:0.2rem;
        background:url(../assets/btn_left.png) no-repeat center bottom;
    }

    .navTwo menu:nth-of-type(2){
        border-left:none;
        border-right:none;
        background:url(../assets/btn_center.png) no-repeat center bottom;
    }
    .navTwo menu:nth-of-type(3){
        border-top-right-radius:0.2rem;
        background:url(../assets/btn_right.png) no-repeat center bottom;
    }
    .navTwo menu:nth-of-type(1).navtwo_btn_active{
        background:url(../assets/btn_left_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo menu:nth-of-type(2).navtwo_btn_active{
        background:url(../assets/btn_center_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo menu:nth-of-type(3).navtwo_btn_active{
        background:url(../assets/btn_right_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo menu{
        flex:1;
        border:1px solid #3b405a;
        border-bottom:none;
        background-size:100%;
        background:#14141e;
        text-align:center;
    }

    .genius .container{
        width:100%;
        height:
    }
</style>
<script>
    import Swp from "@/components/Swp";
    import img1 from "@/assets/banner_01.png"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        created(){
            // 提交仓库数据 标记页面跳转到游戏精灵页面
            this.$store.commit({
                type:'navListHandler',
                amount:0
            });
            // 提交仓库数据 标记页面需要显示loading
            this.$store.commit({
                type:'isLoadingHandler',
                amount:true
            });
        },
        mounted(){
            // 提交仓库数据 标记页面需要关闭loading
            this.$store.commit({
                type:'isLoadingHandler',
                amount:false
            })
        },
        components:{
            Swp
        }

    }
</script>
