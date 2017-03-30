# Forced horizontal screen

当页面强制横屏遇见了iscroll滑动
***

	cd vue-horizontal-screen
	npm install
	npm run dev

***
### library

- vue2
- vue-router
- vuex
- vue-keyboard-wg
- iscroll
***

### 改动内容

- iscroll到iscroll-h
	iscroll的滑动计算其x，y轴方向是由屏幕的x，y轴方向。页面的强制旋转没有改变改方向  
	iscroll-h添加了一个开关ishorizontal，如果值为true就以最长边为x轴方向。
***

### 强制横屏方法
	
使用onorientationchange事件，由于onorientationchange的兼容性问题，使用onresize来做hack

***

### 键盘实现
	
通过旋转进行了强制横屏实现，可是对原生键盘的支持就变得尴尬了。当我们强制横屏时，而手机虚拟键盘弹起为竖屏显示，
这就导致我们需要竖屏输入横屏观察。
这里使用vue-keyboard组件，然后对其进行了一些改变[vue-keyboard-wg](https://github.com/StopllL/vue-keyboard-wg)


