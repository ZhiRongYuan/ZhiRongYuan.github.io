---
layout: post
title:  "js数组去重的多种常用方法"
date:   2017-03-10 21:51:11
categories: blog
---

<p>
<h5><a style="color:red">第一种是比较常规的方法</a></h5>
<h5>思路：</h5>
<ul>
<li>1.构建一个新的数组存放结果</li>
<li>2.for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比</li>
<li>3.若结果数组中没有该元素，则存到结果数组中</li>
</ul>
</p>

```
<script>
Array.prototype.unique1 = function(){
 var res = [this[0]];
 for(var i = 1; i < this.length; i++){
  var repeat = false;
  for(var j = 0; j < res.length; j++){
   if(this[i] == res[j]){
    repeat = true;
    break;
   }
  }
  if(!repeat){
   res.push(this[i]);
  }
 }
 return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique1());
</script>
```




<p>
<h5><a style="color:red">第二种方法比上面的方法效率要高</a></h5>
<h5>思路：</h5>
<ul>
<li>1.先将原数组进行排序</li>
<li>2.检查原数组中的第i个元素 与 结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置</li>
<li>3.如果不相同，则将该元素存入结果数组中</li>
</ul>
</p>

```
<script>
Array.prototype.unique2 = function(){
 this.sort(sortNumber); //先排序
 var res = [this[0]];
 for(var i = 1; i < this.length; i++){
  if(this[i] !== res[res.length - 1]){
   res.push(this[i]);
  }
 }
 return res;
}

function sortNumber(a, b)
{
return a - b
}

var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique2());
</script>
```





<p>
<h5><a style="color:red">第三种方法（推荐使用）</a></h5>
<h5>思路：</h5>
<ul>
<li>1.创建一个新的数组存放结果</li>
<li>2.创建一个空对象</li>
<li>3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中</li>
</ul>
</p>

```
<script>
Array.prototype.unique3 = function(){
 var res = [];
 var json = {};
 for(var i = 0; i < this.length; i++){
  if(!json[this[i]]){
   res.push(this[i]);
   json[this[i]] = 1;
  }
 }
 return res;
}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
alert(arr.unique3());
</script>
```



<p>
<h5><a style="color:red">第四种方法（最简单的去重方法）</a></h5>
<h5>思路：</h5>
<ul>
<li>1.新建一新数组，遍历传入数组，值不在新数组就加入该新数组中</li>
<li>注意:注意点：判断值是否在数组的方法“indexOf”是ECMAScript5 方法，IE8以下不支持，需多写一些兼容低版本浏览器代码</li>
</ul>
</p>

```
// 最简单数组去重法
function unique1(array){
var n = []; //一个新的临时数组
//遍历当前数组
for(var i = 0; i < array.length; i++){
//如果当前数组的第i已经保存进了临时数组，那么跳过，
//否则把当前项push到临时数组里面
if (n.indexOf(array[i]) == -1) n.push(array[i]);
}
return n;
}
</script>
```