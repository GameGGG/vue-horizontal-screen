<template>
    <div id="platform">
        <div>this is template body</div>
    </div>
</template>
<style>
    #platform{
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
                amount:3
            })
        },
        mounted(){
            this.$store.commit('refrenshScroll');
        }
    }
</script>
