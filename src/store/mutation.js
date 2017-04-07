/**
 * Created by ganlei on 2017/3/30.
 */

 const mutations = {
    navListHandler(state,opt){    // 处理页面导航状态处理器
        state.navList = opt.amount;
        // this.refrenshScroll();
    },
    isLoadingHandler(state,opt){  // 处理loading状态处理器
        state.isLoading = opt.amount;
    },
    setHotQuestion(state,opt){
        state.hotQuestion = opt.value;
    },
    refrenshScroll(state){    // 刷新iscroll
        if(!state.Scroll) return;
        setTimeout(() => {
            state.Scroll.refresh();
        },500)
    },
    gameHelpListView(state){
        state.gameHelpQuestionShow = !state.gameHelpQuestionShow;
    }
}

export default mutations
