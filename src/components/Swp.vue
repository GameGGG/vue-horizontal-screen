<template>
    <div :style="" id="swp_wt_swp">
        <div :class="layoutClass" :style="computedScroll" ref="wg_swp_wapper">
            <slot></slot>
        </div>
        <div class="swiper-left-btn"></div>
        <div class="swiper-right-btn"></div>
        <div class="swiper-bottom-list"></div>
    </div>
</template>
<style scoped lang="scss">
    #swp_wt_swp{
        overflow:hidden;
        width:100%;
        height:5rem;
        font-size:0.3rem;
        color:red;
        .swiper-wapper-h{
            float:left;
            display:flex;
            display:-webkit-flex;
            flex-direction:row;
            div{
                flex:1 !important;
            }
        }
        .swiper-wapper-z{
            display:flex;
            display:-webkit-flex;
            flex-direction:column;
            div{
              flex:1;
              font-size:100px;
            }
        }

        .swiper-wapper-f{
            position:relative;
            width:100%;
            height:100%;
            div{
                position:absolute;
                top:0;
                left:0;
                opacity:0;
            }
        }
    }

</style>
<script>
    export default{
        props:{
            styles:{
                type:String,Object,
                default:''
            },
            hori:{
                type:String,
                default:'h'
            },
            time:{
                type:Number,
                default:5000
            },
            animation:{
                type:Object,
                default:function(){
                    return {
                        type:'scroll',
                        time:'1s',
                        timing:'ease-out'
                    }
                }
            },
            loop:{
                type:Boolean,
                default:true
            }
        },
        data(){
            return{
                bindStyles:{},                     // 绑定样式
                layoutClass:'swiper-wapper-h',    // 布局类名
                timerId:'',                       // 存储延时定时器id
                soltNodeList:null,                // 挂载子组件集合
                number:0,                         // 挂载子组件个数
                swiperNum:0                       // swiper显示第几页
            }
        },
        mounted(){
            // 挂载子组件挂载成功获取子组件节点
            this.soltNodeList = this.$refs.wg_swp_wapper;
            this.number = this.soltNodeList.children.length;

            // 判断布局类型
            this.layout(this.animation.type);
            // 判断是否需要克隆节点
            if(this.loop){
                this.cloneNode();
            }
            this.start();
        },
        methods:{
            next(){
                // 下一张
                if(this.swiperNum < this.number-1){
                    this.swiperNum ++;
                }else{
                    this.swiperNum = 0;
                }
            },
            prev(){
                // 上一张
                if(this.swiperNum > 0){
                    this.swiperNum --;
                }else{
                    this.swiperNum = this.number - 1
                }
            },
            start(){
                if(this.number <= 1) return;
                this.timerId = setTimeout(() => {
                    this.next();
                    this.start();
                },this.time)
            },
            animationType(){        // 动画效果处理
                var result = "all " + (this.animation.time || '1s') + " " + this.animation.timing + "";
                return result;
            },
            cloneNode(){        // 克隆第一个节点，用做无缝轮播
                var cloneNode = this.soltNodeList.children[0].cloneNode(true);
                this.$refs.wg_swp_wapper.appendChild(cloneNode);
                this.number++;
            },
            layout(type){      // 根据轮播方式，决定布局方式
                switch(type){
                    case 'fade': this.fadeHandler();break;      // 淡入淡出使用类名swiper-wapper-f
                    case 'scroll': this.scrollHandler();break;
                    default : scrollHandler();   // 默认布局方式使用类名 swiper-wapper-h
                }
            },
            fadeHandler(){
                this.layoutClass = "swiper-wapper-f"; // 设置类名布局
                //
            },
            scrollHandler(){
                this.layoutClass = "swiper-wapper-h"; // 设置类名布局
                // 绑定动态属性值
                var transition = this.animationType();;
                this.bindStyles = {       // 静态绑定样式
                    transition
                }
            }
        },
        computed:{
            computedScroll(){
                if(this.soltNodeList){
                    var length = this.number,   // 有多少挂载子组件
                        width = '',       // swiper wapper的宽度
                        height = '',      // swiper wapper的高度
                        t = -this.swiperNum/length*100 + '%',   // 每次位移量
                        transform = this.hori === 'h' ? 'translateX('+t+')' : 'translateY('+t+')';
                    if(this.hori === 'h'){          // 横屏滚动样式
                        transform = 'translateX('+t+')';
                        width = length*100 + "%";
                        height = '100%';
                    }else{                          // 竖屏滚动样式
                        transform =  'translateY('+t+')';
                        width = '100%';
                        height = length*100 + '%';
                    };
                    console.log(this.bindStyles)
                    var obj = { transform, width, height, ...this.bindStyles };
                    return obj
                }
            },
            computedFade(){

            }
        }
    }
</script>
