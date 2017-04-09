---
layout: post
title:  "操作iframe"
date:   2017-03-28 21:58:11
categories: blog
---

<p>
   在工作学习中, 如果要求操作页面中iframe怎么办呢?或者说在页面中的iframe中又想操作父页面的元素呢?下面,跟大家详细解释说明:
</p>
<p>
   首先选取iframe这个元素,通过dom.contentWindow得到iframe的window对象,接下来就可以通过这个对象去做你想做的事情了,如下面的例子:
</p>


```
<body>
    <span id="fontWrap">父页面</span><span>测试</span>
    <button>改变iframe字体颜色</button>
    <iframe src="https://www.baidu.com"></iframe>
    <script>
        var oBtn=document.querySelector("button");
        var oIframe=document.querySelector("iframe");
        oBtn.onclick=function(){
            //oIframe.contentWindow.document.body.style.color="red";//没有兼容性
            oIframe.contentDocument.body.style.color="green";//IE8以下不支持
        }
        oIframe.onload=function(){
            alert(1);//IE8下不兼容  只能用绑定的形式(attachEvent)
        }
    </script>
</body>
```

<p>
   那如果iframe内向操作父页面呢,如下面的例子:
</p>

```
<body>
    子页面2
    <button id="btn">改变父页面的字体颜色</button>
    <button id="btn2">改变顶层页面的字体颜色</button>
    <script>
        var oBtn=document.getElementById("btn");
        var oBtn2=document.getElementById("btn2");
        oBtn.onclick=function(){
            window.parent.document.body.style.color="yellow";//window.parent 得到父页面的window对象
        }
        oBtn2.onclick=function(){
            window.top.document.body.style.color="yellow";//window.top 得到最顶层页面的window对象
        }
    </script>
</body>
```

<p>那么 现在有一个小Demo:禁止其他用户把自己的页面放入iframe中,  联系上文,应该是不难实现吧,具体来看一看</p>

```
if(window!=window.top){
            window.top.location.href=window.location.href;
        }
```
