/**
 * Created by ganlei on 2017/3/30.
 */
import HotQuestion from './../data/hot_requestion';
import Scroll from 'iscroll';

 const actions = {
     getHotQuestion({commit}){     // 获取游戏帮助中问题列表
        setTimeout(() => {
            commit('setHotQuestion',{
                value:HotQuestion
            })
            commit('refrenshScroll');
        },100)
     },
     newScroll(content){      // 实例化iscroll
         if(content.state.Scroll){      // 如果iscroll对象以存在，则销毁它
             content.state.Scroll.destroy();
         }else{   // iscroll对象不存在就添加事件   在横竖屏改变时以及页面加载完成时刷新iscroll，解决首次进入时页面滚动失效问题
             window.addEventListener('orientationchange',function(){
               content.commit('refrenshScroll')
             },false)
             window.addEventListener('load',function(){
               content.commit('refrenshScroll')
             },false)
         }
         content.state.Scroll = new Scroll("#wapper",{
             scrollbars: true,
             tap:true
         })

     }
}

export default actions
