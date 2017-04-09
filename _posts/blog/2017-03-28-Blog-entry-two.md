---
layout: post
title:  "历史管理-在一个页面实现前进后退"
date:   2017-03-28 22:58:11
categories: blog
---

<p>
   Q:假设有一个需求,要求前进后退到用户前一次操作状态的页面,如何实现呢?接下来看例子
</p>

```
<body>
    <button id="btn">35选7</button>
    <div id="wrap"></div>
    <script>
        var oWrap=document.getElementById("wrap");
        var oBtn=document.getElementById("btn");
        oBtn.onclick=function(){

            oWrap.innerHTML=getRandomData(35,7).join();
            window.location.hash=getRandomData(35,7).join();//设置hash值  IE8以下不兼容
        }
        window.onhashchange=function(){//hash值变化时  触发
            var num=window.location.hash.substring(1);
            oWrap.innerHTML=num;
        }
        function getRandomData(all,num){
            var allData=[];
            var getData=[];
            for(var i=1;i<=all;i++){
                allData.push(i);
            }

            for(var i=0;i<num;i++){
                getData.push(allData.splice(Math.floor(Math.random()*allData.length),1))
            }

            return getData;
            console.log(getData)
        }
    </script>
</body>
```
<p>接下来 利用H5的history实现同样的问题(IE10以上才支持)</p>

```
<body>
    <button id="btn">35选7</button>
    <div id="wrap"></div>
    <script>
        var oWrap=document.getElementById("wrap");
        var oBtn=document.getElementById("btn");
        oBtn.onclick=function(){

            oWrap.innerHTML=getRandomData(35,7).join();
            history.pushState(getRandomData(35,7).join(),null);
        }
        window.onpopstate=function(ev){
            var num=ev.state;
            oWrap.innerHTML=num;
        }
        function getRandomData(all,num){
            var allData=[];
            var getData=[];
            for(var i=1;i<=all;i++){
                allData.push(i);
            }

            for(var i=0;i<num;i++){
                getData.push(allData.splice(Math.floor(Math.random()*allData.length),1))
            }

            return getData;
            console.log(getData)
        }
    </script>
</body>
```