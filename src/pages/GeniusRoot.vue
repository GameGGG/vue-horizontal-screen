<template>
    <div class="genius">
        <ul class="navTwo" ref="pageTitle">
            <li :class="pagesTitle[0]" data-n='0' ref="test">游戏帮助</li>
            <li :class="pagesTitle[1]" data-n='1'>版本先知</li>
            <li :class="pagesTitle[2]" data-n='2'>更多游戏</li>
        </ul>
        <keep-alive>
            <component :is="jumpPage"></component>
        </keep-alive>

    </div>
</template>
<style scoped>
    .genius{
        position:relative;
        width:100%;
        border-bottom:1px solid transparent;
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
    .navTwo li:nth-of-type(1){
        border-top-left-radius:0.2rem;
        background:url(../assets/btn_left.png) no-repeat center bottom;
    }

    .navTwo li:nth-of-type(2){
        border-left:none;
        border-right:none;
        background:url(../assets/btn_center.png) no-repeat center bottom;
    }
    .navTwo li:nth-of-type(3){
        border-top-right-radius:0.2rem;
        background:url(../assets/btn_right.png) no-repeat center bottom;
    }
    .navTwo li:nth-of-type(1).navtwo_btn_active{
        background:url(../assets/btn_left_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo li:nth-of-type(2).navtwo_btn_active{
        background:url(../assets/btn_center_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo li:nth-of-type(3).navtwo_btn_active{
        background:url(../assets/btn_right_active.png) no-repeat center bottom;
        background-size:100%;
        color:#ffbf21;
    }
    .navTwo li{
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
    import gameHelp from './G_page/game_help';
    import newVersion from './G_page/new_version';
    import moreGame from './G_page/more_game';
    export default{
        data(){
            return{
                pages:0
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
            this.$store.dispatch('getHotQuestion');
            this.$store.dispatch('newScroll');

            this.$refs.pageTitle.addEventListener('tap',this.tapPagesTitleHandler,false)

        },
        updated(){
            this.$store.commit('refrenshScroll');  //  每次组件更新都重新计算iscroll的高度
        },
        computed:{   // 计算属性，响应状态的改变
            pagesTitle(){    // 页面小标签响应状态改变对应值的类名
                let arr = [' ',' ',' '];
                arr[this.pages] = "navtwo_btn_active";
                return arr;
            },
            jumpPage(){  // 页面跳转
                let str = '';
                switch(this.pages){
                    case 0: str = 'gameHelp';break;
                    case 1: str = 'newVersion';break;
                    case 2: str = 'moreGame';break;
                }
                return str
            }

        },
        methods:{
            tapPagesTitleHandler(e){
                this.$store.commit({
                    type:'isLoadingHandler',
                    amount:true
                });
                this.pages = parseInt(e.target.getAttribute('data-n'))
            }
        },
        components:{
            gameHelp,
            newVersion,
            moreGame
        }

    }
</script>
