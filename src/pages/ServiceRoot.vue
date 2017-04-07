<template>
    <div id="service">
        <div>this is template body</div>
    </div>
</template>
<style>
    #service{
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
                amount:1
            })
        },
        mounted(){
            this.$store.commit('refrenshScroll');
        }
    }
</script>
