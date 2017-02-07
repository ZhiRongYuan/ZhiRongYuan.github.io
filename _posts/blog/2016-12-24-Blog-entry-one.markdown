---
layout: post
title:  "::selection 选择器"
date:   2016-12-24 18:11:16
categories: blog
---

在默认情况下，选择网站文本都是深蓝的背景，白色的字体的，如下图：
<div class="selectionBefore"></div>
现在请你选择一下本网站的文字看看，是不是发现是这样的：
<div class="selectionAfter"></div>
变成了透明背景蓝色字体了。
如何实现的呢？其实并不难，只是用了::selection伪类选择器，代码如下：

```
::selection { background: #ffffff;color:#2396f0; }
::-moz-selection { background: #ffffff;color:#2396f0; }
::-webkit-selection { background: #ffffff;color:#2396f0; }
```

注意：::selection只支持background和color两个属性，如果你设置其他属性是没有效果的。