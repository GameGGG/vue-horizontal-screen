<template>
    <div :style="" id="swp_wt_swp">
        <div :class="layoutClass" :style="styleHandler" ref="wg_swp_wapper">
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
        height:100%;
        font-size:0.3rem;
        color:red;
        .swiper-wapper-h{
            float:left;
            display:flex;
            display:-webkit-flex;
            flex-direction:row;
            div{
                flex:1 !important;
                overflow:hidden;
            }
        }
        .swiper-wapper-z{
            display:flex;
            display:-webkit-flex;
            flex-direction:column;
            div{
                flex:1 !important;
                overflow:hidden;
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
                width:100%;
                height:100%;
            }
        }
    }

</style>
<script>
    export default{
        props:{
            style:{
                type:String,Object,
                default:''
            },
            hori:{
                type:String,
                default:'h'
            },
            time:{
                type:String,
                default:'5000'
            },
            animation:{
                type:Object,
                default:function(){
                    return {
                        type:'fade',
                        time:'1s',
                        timing:'ease-out'
                    }
                }
            },
            loop:{
                type:String,
                default:'false'
            }
        },
        data(){
            return{
                bindStyles:{},                    // 绑定样式
                layoutClass:'swiper-wapper-h',    // 布局类名
                timerId:'',                       // 存储延时定时器id
                soltNodeList:null,                // 挂载子组件集合
                number:0,                         // 挂载子组件个数
                swiperNumPre:0,                   // swiper上一张为第几页
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
            if(this.loop === "true"){
                this.cloneNode();
            }
            this.start();
        },
        methods:{
            next(){
                this.swiperNumPre = this.swiperNum;
                // 下一张
                if(this.swiperNum < this.number-1){
                    this.swiperNum ++;
                }else{
                    this.swiperNum = 0;
                    if(this.loop === "true" && this.animation.type === "scroll"){
                        setTimeout(() => {this.next()},100);
                    }
                }
            },
            prev(){
                this.swiperNumPre = this.swiperNum;
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
                    if(this.animation.type === 'fade'){
                        this.fadeHandler();
                    }
                    this.start();
                },this.time)
            },
            animationType(){        // 动画效果处理
                var result = "transform " + (this.animation.time || '1s') + " " + this.animation.timing + "";
                return result;
            },
            cloneNode(){        // 克隆第一个节点，用做无缝轮播
                var cloneNode = this.soltNodeList.children[0].cloneNode(true);
                this.$refs.wg_swp_wapper.appendChild(cloneNode);
                this.number++;
            },
            layout(type){      // 根据轮播方式，决定布局方式
                this.setAnimation();
                switch(type){
                    case 'fade': this.layoutClass = "swiper-wapper-f";this.fadeInit();break;      // 淡入淡出使用类名swiper-wapper-f
                    case 'scroll': this.hori === 'h' ? this.layoutClass = "swiper-wapper-h" : this.layoutClass = "swiper-wapper-z";break;
                    default : this.layoutClass = "swiper-wapper-h";   // 默认布局方式使用类名 swiper-wapper-h
                };

            },
            setAnimation(){
                var transition = this.animationType();
                this.bindStyles = {       // 静态绑定样式
                  transition
                }
            },
            fadeHandler(){
                this.soltNodeList.children[this.swiperNum].style.opacity = '1';
                this.soltNodeList.children[this.swiperNumPre].style.opacity = ''
            },
            fadeInit(){
                // 初始化淡入当初元素css  第一张默认透明度为1
                this.soltNodeList.children[this.swiperNum].style.opacity = '1';
                for(let i in this.computedFade){    // 初始化每张的动画效果
                    for(let j = 0;j<this.number;j++){
                        this.soltNodeList.children[j].style[i] = this.computedFade[i];
                    }
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
                        transform = this.hori === 'h' ? 'translateX('+t+')' : 'translateY('+t+')',
                        obj;
                    if(this.hori === 'h'){          // 横屏滚动样式
                        transform = 'translateX('+t+')';
                        width = length*100 + "%";
                        height = '100%';
                    }else{                          // 竖屏滚动样式
                        transform =  'translateY('+t+')';
                        width = '100%';
                        height = length*100 + '%';
                    };
                    obj = { transform, width, height, ...this.bindStyles };
                    if(this.swiperNum == 0 && this.loop === "true" && this.animation.type === "scroll"){
                        obj = { transform, width, height };
                    }
                    return obj
                }
            },
            computedFade(){
                var obj = this.bindStyles;
                return obj;
            },
            styleHandler(){
                if(this.animation.type === 'scroll'){
                    return this.computedScroll;
                }else{
                    return '';
                }
            }
        }
    }
</script>
