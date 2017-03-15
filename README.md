# Forced horizontal screen

当页面强制横屏遇见了iscroll滑动
***

### library

	-flexible-h(移动端rem适配)
	-iscroll-h(页面滑动)
***

### 改动内容

	-flexible到flexible-h  
		flexible的实现是基于屏幕宽度来计算根元素的font-size  
		flexible-h是基于最大的边来计算根元素的font-size  
	-iscroll到iscroll-h
		iscroll的滑动计算其x，y轴方向是由屏幕的x，y轴方向。页面的强制旋转没有改变改方向  
		iscroll-h添加了一个开关ishorizontal，如果值为true就以最长边为x轴方向。
***

### 强制选择方法
	
	使用onorientationchange事件，由于onorientationchange的兼容性问题，使用onresize来做hack


