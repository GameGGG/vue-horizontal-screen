<template>
    <div>
        <div class="navTwo">
            <menu></menu>
            <menu></menu>
            <menu></menu>
        </div>
    </div>
</template>
<style>
    body{

    }
</style>
<script>

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
        }

    }
</script>
