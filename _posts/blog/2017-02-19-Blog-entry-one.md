---
layout: post
title:  "封装绑定事件函数"
date:   2017-02-18 16:51:11
categories: blog
---

```
function bind(obj,evName,fn) {
    if(obj.addEventListener){
        obj.addEventListener(evName,fn,false);
    }else{
        obj.attachEvent("on"+evName,function(){
            fn.call(obj);
        })
    }
}
```

详解：
<ul>
    <li>1.obj.事件  这种方法只能绑定一个事件；</li>
    <li>2.注意：attactEvent绑定事件时，事件名称需要加上"on"；</li>
    <li>3.obj.addEventListener事件绑定方法只在标准浏览器才有，IE8以下需要采用obj.attachEvent;</li>
    <li>4.obj.attachEvent绑定的事件方法中 this指向window,需要调用call方法改变this指向。</li>
</ul>