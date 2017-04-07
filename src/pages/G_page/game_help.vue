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
            <input type="text" name="search" v-model="searchInfo"/>
            <button ref="btn">搜索</button>
        </div>
        <div class="hot_question" v-show="hasMatch" ref="list_box">
            <ul v-for="item in hotQuestion">
                <li v-for="item in item" :style="item.lv | fontColorFilter" :dataType="item.type">{{ item.name }}</li>
            </ul>
        </div>
        <div class="not_match" v-show="!hasMatch">
              <p>抱歉 您的问题已经超出小精灵的知识范畴啦</p>
              <p>您可以通过客户服务来解决此问题。<a to="/service" style="color:#ffbf21;text-decoration:underline;" ref="jumpServer">点击此处</a></p>
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
        width:98%;
        height:30px;
        border:2px solid #3b405a;
        margin:10px auto 0;
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
            outline:none;
        }
    }
    .not_match{
        margin:10px 0.2rem;
        font-size:0.24rem;
        p{
            display:block;
            text-align:left;
            line-height:0.48rem;
        }
        p:nth-of-type(1){
            color:#be3333;
        }
        p:nth-of-type(2){
            color:#ffffff;
        }
    }
</style>
<script>
    import Swp from "@/components/Swp";
    export default{
        data(){
            return{
                hasMatch:true,   // 是否匹配成功
                matchList:[],
                searchInfo:''                       // 搜所框的内容
            }
        },
        methods:{
            matchQuestion(){   // 查找热门问题中与搜索字符相匹配的问题
                let str = this.searchInfo;
                let questionList = this.$store.state.hotQuestion || [];
                let matchList = [];
                if(str){      // 如果搜索框不为空字符串 返回对应的匹配值
                    questionList.map(function(item){
                        for(var i = 0;i<str.length;i++){
                            if(item.name.indexOf(str[i]) >= 0){
                                matchList[matchList.length] = item;
                                break;   // 查找到匹配字符 跳出循环
                            }
                        }
                    })
                    return matchList;
                }else{        // 如果搜索框为空字符串，返回所有热门问题
                    return questionList
                }
            },
            jumpServer(){
                console.log(1);
                location.href += 'service';
            }
        },
        activated(){
            this.$store.commit({
                type:'isLoadingHandler',
                amount:false
            });
        },
        mounted(){
             // 给热门问题条例添加tap事件;
             console.log(this.$refs.list_box)
             this.$refs.list_box.addEventListener('tap',function(e){
                  e = e || window.event;
                  if(e.target.nodeName === 'li' || e.target.nodeName === 'LI'){
                      console.log(e.target.getAttribute('dataType'))
                      this.$store.commit('gameHelpListView');
                  }
             }.bind(this),false);
             this.matchQuestion();
             this.$store.dispatch('getHotQuestion');
             this.$refs.btn.addEventListener('tap',this.matchQuestion,false)  // 监听iscroll抛出的tap事件，进行搜索匹配
             this.$refs.jumpServer.addEventListener('tap',this.jumpServer,false)
        },
        computed:{
            hotQuestion(){
                let dataArr = this.matchQuestion(),
                    arrTotal = [],
                    arrOne = [],
                    arrTwo = [],
                    arrThree = [],
                    dataCloneArr = dataArr.slice();    // 克隆节点，避免sort()对原数组进行改变，从而导致响应循环
                if(dataCloneArr.length > 0){
                    this.hasMatch = true;
                }else{
                    this.hasMatch = false;
                }
                dataCloneArr.sort(function(a,b){
                    return  parseInt(b.lv) - parseInt(a.lv);
                })
                dataCloneArr.map((item,index) => {     // 分组
                    let num = index%3;
                    switch(num){
                        case 0:arrOne[arrOne.length] = item;break;
                        case 1:arrTwo[arrTwo.length] = item;break;
                        default:arrThree[arrThree.length] = item;
                    }
                })
                arrTotal = [arrOne,arrTwo,arrThree]
                this.$store.commit('refrenshScroll');
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
