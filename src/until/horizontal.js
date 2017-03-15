/**
 * Created by ganlei on 2017/3/14.
 */
(function(doc,win){
    var docEl = doc.documentElement,
        width = 0,
        height = 0,
        supportOrientation = (typeof win.orientation === 'number' && typeof win.onorientationchange === 'object'), // 判断是否支持orientationchange事件
        bodyNode = doc.querySelector('body'),
        orientation,
        updateOrientation = function(){
            var timer = setTimeout(function(){
                clearInterval(timer);
                var docElC = docEl.getBoundingClientRect();
                width = docElC.width > docElC.height ? docElC.width : docElC.height;
                height = docElC.width > docElC.height ? docElC.height : docElC.width;
                if(supportOrientation){ //支持orientationchange事件使用window.orientation判断横竖屏
                    orientation = win.orientation;
                    switch(orientation){
                        case 90:
                        case -90:
                            // 横屏
                            orientation = "landscape";
                            break;
                        default:
                            // 竖屏
                            orientation = "portrait";
                            break;
                    }
                }else{  // 不支持orientationchange事件，使用宽高判断横竖屏事件
                    // 宽度大于高度为横屏  否则为竖屏
                    orientation = (win.innerWidth > win.innerHeight) ? 'landscape' : 'portrait';
                }
                // 根据横竖屏调用不同的处理函数
                if(orientation === 'portrait'){
                    landscapeHandler();
                }else{
                      portraitHandler();
                }
            },400)
        },
        landscapeHandler=function(){            // 如果为竖屏，者旋转页面
            bodyNode.style.width = width + "px";
            bodyNode.style.height = height + "px";
            bodyNode.style.position = "fixed";
            bodyNode.style.top = (width-height)/2 + "px";
            bodyNode.style.left = (height-width)/2 + "px";
            bodyNode.style.transform = 'rotate(-90deg)';
            bodyNode.style.transformOrigin = '50% 50%';
        },
        portraitHandler=function(){             // 如果为横屏 则将可能的旋转属性替换掉
            bodyNode.style.cssText = "width:100%;height:100%;"
        };

        updateOrientation();
        if(supportOrientation){
            // 监听orientationchange事件
            window.addEventListener('orientationchange',updateOrientation,false);
        }else{
            //监听resize事件
            window.addEventListener('resize',updateOrientation,false);
        }

})(document,window)
