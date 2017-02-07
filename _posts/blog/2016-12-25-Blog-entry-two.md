---
layout: post
title:  "js实现复制文本到剪切板"
date:   2016-12-25 16:51:11
categories: blog
---





```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>js实现复制文本到剪切板</title>
</head>
<body>
    <textarea cols="50" rows="2" id="richard">祝大家17年一切顺利</textarea>
    <input onclick="copyText()" type="button" value="复制"/>
    <script>
        function copyText() {
            var copyText=document.getElementById("richard");
            copyText.select();
            document.execCommand("copy");//执行浏览器复制命令
            alert("复制成功！");
        }
    </script>
</body>
</html>
```

实例如下：
 <div>
    <textarea class="copyTextarea" cols="50" rows="2" id="richard">祝大家17年一切顺利</textarea>
        <input onclick="copyText()" type="button" value="复制"/>
        <script>
            function copyText() {
                var copyText=document.getElementById("richard");
                copyText.select();
                document.execCommand("copy");//执行浏览器复制命令
                alert("复制成功！");
            }
        </script>
 </div>