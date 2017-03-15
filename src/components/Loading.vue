<template>
    <div class="loading" v-show="flag">
        <img src="../assets/loading_icon.png" alt="loading" class="loading_into"/>
    </div>
</template>
<style scoped>
    .loading{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width:1rem;
        height:1rem;
        z-index:100;
        background:url(../assets/loading_track.png) no-repeat center;
        background-size:contain;
    }
    .loading_into{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        transform:rotate(0deg);
        animation:load .8s linear infinite;
    }

    @keyframes load{
        from{
            transform:rotate(360deg);
        }
        to{
            transform:rotate(0deg);
        }
    }
    @-webkit-keyframes load{
        from{
            transform:rotate(360deg);
        }
        to{
            transform:rotate(0deg);
        }
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['flag']
    }
</script>
