<template>
    <div>
        <div style="width:100%;height:5rem;border-radius:5px;padding-top:10px">
            <Swp time="5000" :animation="{type:'scroll',time:'1s',timing:'ease-out'}" loop="true" hori="h">
                <div><img src="../../assets/banner_01.png" style="width:100%;height:100%;"></div>
                <div><img src="../../assets/banner_01.png" style="width:100%;height:100%;"></div>
                <div><img src="../../assets/banner_01.png" style="width:100%;height:100%;"></div>
                <div><img src="../../assets/banner_01.png" style="width:100%;height:100%;"></div>
                <div><img src="../../assets/banner_01.png" style="width:100%;height:100%;"></div>
            </Swp>
        </div>
        <div class="search_question">
            <input type="text" name="search" v-model="search"/>
            <button>搜索</button>
        </div>
        <div class="hot_question">
            <ul v-for="item in hotQuestion">
                <li v-for="item in item" :style="item.lv | fontColorFilter" @touchend="hotTouchHandler(item.type)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang='scss'>
    .hot_question{
        margin:10px 0 10px;
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
    .search_question{
        width:100%;
        height:30px;
        border:2px solid #3b405a;
        margin-top:10px;
        border-radius:15px;
        background:#13131c;
        input{
            float:left;
            margin-left:10px;
            border:none;
            background:inherit;
            height:100%;
            outline:none;
            width:70%;
            color:#fff;
        }
        button{
            float:right;
            margin:1px;
            border:none;
            width:20%;
            height:28px;
            border-top-right-radius:14px;
            border-bottom-right-radius:14px;
            background:#b02a79;
            color:#fff;
        }
    }
</style>
<script>
    import Swp from "@/components/Swp";
    export default{
        data(){
            return{
                msg:'hello vue',
                search:''                       // 搜所框的内容
            }
        },
        methods:{
            hotTouchHandler(data){
                console.log(data);
            }
        },
        activated(){
            this.$store.commit({
                type:'isLoadingHandler',
                amount:false
            });
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
            },
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
        components:{
            Swp
        }
    }
</script>
