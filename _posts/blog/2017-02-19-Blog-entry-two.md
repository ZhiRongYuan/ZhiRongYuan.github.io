---
layout: post
title:  "阻止冒泡事件和默认事件"
date:   2017-02-18 20:51:11
categories: blog
---

<p>使用 JavaScript 时为了达到预期效果经常需要阻止事件和动作执行. 一般我们会用到三种方法,
分别是 stopPropagation(), preventDefault() 和 return false. 它们之间有什么区别, 该何时使用呢? 将在本文中进行讲解.</p>
<a style="color:red">术语</a>
<p>监听事件, 在在节点上能被监听的页面操作. 如: select 节点的 change 事件, a 节点的 click 事件.
浏览器默认动作, 指特定页面元素上带有的功能. 如: 点击 a 链接节点的跳转动作, 表单提交动作.</p>

<a style="color:red">stopPropagation();</a>
<p>因为事件可以在各层级的节点中传递, 不管是冒泡还是捕获, 有时我们希望事件在特定节点执行完之后不再传递,
可以使用事件对象的 stopPropagation() 方法.</p><p>假设页面上存在一个浮动弹出层, 显示在最前面, 当点击弹出层以
外页面区域时, 隐藏弹出层. 为了做到这样的效果, 我们会监听 documentElement 的 click 事件, 一旦事件被
触发即隐藏弹出层. 但是...这显然存在问题. 当用户点击弹出层时, 我们不希望它隐藏掉. 但因为事件的冒泡传递,
 documentElement 的 click 事件也会被触发. 这个时候, 我们可以监听弹出层的 click 事件,
 并使用 stopPropagation()方法阻止冒泡. 请参考下面的代码.</p>


```
// 在弹出对话框上点击时, 不进行任何页面操作, 并阻止冒泡
document.getElementById('dialog').onclick = function(ev) {
	ev.stopPropagation();
};
```

```
// 在 documentElement 节点上监听到点击事件时, 隐藏对话框
document.documentElement.onclick = function(ev) {
	document.getElementById('dialog').style.display = 'none';
};
```

<p>stopPropagation() 相当好用, 可是 IE8 及以前版本都不支持. IE 的事件对象包含特有的属性 cancelBubble,
只要将它赋值为 false 即可阻止事件继续. 如:</p>

```
// 在弹出对话框上点击时, 不进行任何页面操作, 并阻止冒泡
document.getElementById('dialog').onclick = function(ev) {
	ev.cancelBubble = false;
};
```

<a style="color:red">preventDefault()</a>
<p>一个带事件监听的链接代码如下:</p>

```
<a href="http://w3c.org" onclick="alert('JavaScript Click Event');">点击链接</a>
```
<p>点击该链接, 显示对话框后跳转页面. 由此可知, 除了执行监听事件还会触发浏览器默认动作; 执行监听事件在前,
触发浏览器默认动作在后.这里有个经典示例, 我们希望点击链接在新窗口打开页面, 但不希望当前页面跳转. 这个时候
可以使用 preventDefault() 阻止后面将要执行的浏览器默认动作.</p>

```
<a id="link" href="http://w3c.org">W3C 首页链接</a>
```

```
<script>
// 在新窗口, 打开页面
document.getElementById('link').onclick = function(ev) {
	// 阻止浏览器默认动作 (页面跳转)
	ev.preventDefault();
	// 在新窗口打开页面
	window.open(this.href);
};
</script>
```

<a style="color:red">return false</a>
<p>退出执行, return false 之后的所有触发事件和动作都不会被执行. 有时候 return false 可以用来替代
stopPropagation() 和 preventDefault(), 比如我们上面新窗口打开链接的例子, 如:</p>

```
<a id="link" href="http://w3c.org">W3C 首页链接</a>
```

```
<script>
// 在新窗口, 打开页面
document.getElementById('link').onclick = function(ev) {
	// 在新窗口打开页面
	window.open(this.href);
	// 退出执行 (在监听事件之后执行的浏览器默认动作将不会被执行)
	return false;
};
</script>
```

<p>有人认为 return false = stopPropagation() + preventDefault(), 其实是错的. return false 不但阻止事件,
 还可以返回对象, 跳出循环等... 方便地一刀切而不够灵活, 滥用易出错.</p>