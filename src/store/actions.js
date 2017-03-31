/**
 * Created by ganlei on 2017/3/30.
 */
import HotQuestion from './../data/hot_requestion';
import Scroll from 'iscroll';

 const actions = {
     getHotQuestion({commit}){
        setTimeout(() => {
            commit('setHotQuestion',{
                value:HotQuestion
            })
        },100)
     },
     newScroll(content){
         if(content.state.Scroll){
           content.state.Scroll.destroy();
         }
         content.state.Scroll = new Scroll("#wapper",{
             scrollbars: true,
             tap:true
         })
         window.addEventListener('orientationchange',function(){
              content.commit('refrenshScroll')
         },false)
     }
}

export default actions
