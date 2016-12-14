## 背景固定，页面滚动
html5部分：
```html
<div class="cd-main-content">
	<div class="cd-fixed-bg cd-bg-1">
		<h2><a href="#">使用CSS3制作的页面背景固定和滚动效果</a></h2>
	</div> <!-- cd-fixed-bg -->
	<div class="cd-scrolling-bg cd-color-2">
		<div class="cd-container">
			<p>html5</p>
		</div> <!-- cd-container -->
	</div> <!-- cd-scrolling-bg -->
	<div class="cd-fixed-bg cd-bg-2">
		<h2>html5前端学习</h2>
	</div> <!-- cd-fixed-bg -->
	<div class="cd-scrolling-bg cd-color-3">
		<div class="cd-container">
			<p>css</p>
		</div> <!-- cd-container -->
	</div> <!-- cd-scrolling-bg -->
	<div class="cd-fixed-bg cd-bg-3">
		<h2>php后端学习</h2>
	</div> <!-- cd-fixed-bg -->	
</div> 
```
#### css部分
页面布局，按照三张固定背景图（cd-fixed-bg和cd-bg-\*）和两块滚动文字内容区（cd-scrolling-bg和cd-bg-\*）。
```css
body {
  font-size: 100%;/*body使用100%，则子元素用rem就是响应式的，如果设为62.5%，则1rem=10px*/
  font-family: "Roboto", sans-serif;
  color: #3d3536;
  background-color: white;
}
.cd-container {
 /*这个类使得滚动文字内容区，最大宽度为768px，并且内容区居中，宽度占宽度浏览器宽度90%*/
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
}

.cd-fixed-bg h1, .cd-fixed-bg h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  /*上面4条，将固定背景上显示的标题（这个标题不固定）居中，但是十一第一个字为准，因此整个标题并不居中（只有第一个自字居中）*/
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  /*正因为整个标题并不居中，因此只要使用transform: translateX(-50%) translateY(-50%);*/
  width: 90%;
  max-width: 1366px;
  text-align: center;
  /*font-size: 30px;*/
  font-size: 1.875rem;/*浏览器默认字体16px，因此1.875rem=30px*/
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  color: white;
}
/*根据浏览器视口大小，设置不通的字体大小及粗细*/
@media only screen and (min-width: 768px) {
  .cd-fixed-bg h1, .cd-fixed-bg h2 {
    font-size: 36px;
  }
    .cd-scrolling-bg {
    padding: 8em 0;
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 2;
    font-weight: 300;
  }
  .cd-fixed-bg {
    background-attachment: fixed;/*使背景固定*/
  }
}
@media only screen and (min-width: 1170px) {
  .cd-fixed-bg {
    background-attachment: fixed;/*使背景固定*/
  }
  .cd-fixed-bg h1, .cd-fixed-bg h2 {
    font-size: 48px;
    font-weight: 300;
  }
}
/*设置滚动的页面的属性*/
.cd-scrolling-bg {
  position: relative;
  min-height: 100%;
  padding: 4em 0;
  line-height: 1.6;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.cd-scrolling-bg.cd-color-1 {
  background-color: #99a478;
  color: #3d3536;
}
.cd-scrolling-bg.cd-color-2 {
  background-color: #b4d7a8;
  color: #3d3536;
}
```
