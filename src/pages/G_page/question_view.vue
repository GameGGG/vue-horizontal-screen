<template>
    <div>
        <div>this is template body</div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        props:{
            data:{
                type:String,
                default:null
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
