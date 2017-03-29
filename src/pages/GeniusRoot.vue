<template>
    <div class="genius">
        <div class="navTwo">
            <menu class="navtwo_btn_active">游戏帮助</menu>
            <menu class="navtwo_btn_active">版本先知</menu>
            <menu class="navtwo_btn_active">更多游戏</menu>
        </div>
        <div style="width:100%;height:5rem;border-radius:5px;padding-top:10px">
            <Swp time="5000" :animation="{type:'scroll',time:'1s',timing:'ease-out'}" loop="true" hori="h">
              <div><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
              <div><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
              <div><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
              <div><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
              <div><img src="../assets/banner_01.png" style="width:100%;height:100%;"></div>
            </Swp>
        </div>
        <div class="hot_question">
            <ul v-for="item in hotQuestion">
                <li v-for="item in item" :style="item.lv | fontColorFilter" @touchend="hotTouchHandler(item.type)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .genius{
        position:relative;
        width:100%;
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

    .hot_question{
        margin:10px 0 20px;
        width:100%;
        display:flex;
        display:-webkit-flex;
        flex-direction:row;
    }
    .hot_question ul{
        display:inherit;
        flex-direction:column;
        flex:1;
        box-sizing:border-box;
        padding:1px 0px;
    }
    .hot_question li{
        height:0.6rem;
        bor-sizing:border-box;
        border:1px solid #111;
        margin:2px;
        background:#3f2c6d;
        font-size:0.24rem;
        line-height:0.58rem;
    }
</style>
<script>
    import Swp from "@/components/Swp";
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
            this.$store.dispatch('getHotQuestion');
            this.$store.commit('refrenshScroll');
        },
        updated(){
            this.$store.commit('refrenshScroll');
        },
        computed:{
            hotQuestion(){
                let dataArr = this.$store.state.hotQuestion,
                    arrTotal = [],
                    arrOne = [],
                    arrTwo = [],
                    arrThree = [];
                dataArr.sort((a,b) => {           // 按问题热门度等级进行排序
                    return parseInt(b.lv) - parseInt(a.lv)
                });
                dataArr.map((item,index) => {     // 分组
                    let num = index%3;
                    switch(num){
                        case 0:arrOne[arrOne.length] = item;break;
                        case 1:arrTwo[arrTwo.length] = item;break;
                        default:arrThree[arrThree.length] = item;
                    }
                })
                arrTotal = [arrOne,arrTwo,arrThree]
                return arrTotal
            }
        },
        filters:{
            fontColorFilter(num){     // 根据问题等级的颜色筛选器
                let result = '';
                switch(parseInt(num)){
                    case 1:result = "color:#fff";break;
                    case 2:result = "color:yellow";break;
                    default :result = "color:red";
                }
                return result;
            }
        },
        methods:{
            hotTouchHandler(data){
                console.log(data);
            }
        },
        components:{
            Swp
        }

    }
</script>
