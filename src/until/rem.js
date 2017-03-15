/**
 * Created by ganlei on 2017/3/13.
 */
(function(doc,win){
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',     // orientationchange事件不兼容使用resize事件
      setScale = function(){
          var clientWidth = docEl.getBoundingClientRect().width > docEl.getBoundingClientRect().height ? docEl.getBoundingClientRect().width : docEl.getBoundingClientRect().height     // 获取元素宽度
          if(!clientWidth) return;
          docEl.style.fontSize = 100 * (clientWidth / 1334) + "px"; // 基本元素设置为100px为1rem
      }
      if(!doc.addEventListener) return;
      win.addEventListener(resizeEvt,function(){
          var timer = setTimeout(function(){
              setScale();
          },400)
      },false);
      doc.addEventListener('DOMContentLoaded',setScale,false);
})(document,window)
