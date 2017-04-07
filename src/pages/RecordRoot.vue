<template>
    <div id="record">
        <div>this is template body</div>
    </div>
</template>
<style>
    #record{
        position:absolute;
        top:0;
        left:0;
        width:100%;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        beforeCreate(){
            this.$store.commit({
                type:'navListHandler',
                amount:2
            })
        },
        mounted(){
            this.$store.commit('refrenshScroll');
        }
    }
</script>
