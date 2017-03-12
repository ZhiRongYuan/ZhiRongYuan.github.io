---
layout: post
title:  "React 克隆组件  -----   React.cloneElement"
date:   2017-03-10 21:58:11
categories: blog
---

<p>
上一周公司项目要求实现按钮级权限,简单来说就是需要通过后台数据绑定来控制前端页面哪些操作按钮需要渲染,哪些操作按钮不
需要渲染,这可为难了我好些天啊,那么多页面,想想头疼,好在现在方案已经想出来了,大体的方案是:在原有的按钮标签外再套一层 按钮权限控制
标签,然后没个具体的按钮对照后台给定的唯一值传入到这个"按钮权限控制"组件,然后在组件中 判断改按钮该不该渲染,之中用到的一个技术
点就是React.cloneElement,可以修改子元素的属性值,废话不讲,具体说说React.cloneElement吧
</p>

<p>
     <a style="color:red">React.cloneElement</a>
     <ul>
        <li>
        参数：TYPE（ReactElement），[PROPS（object）]，[CHILDREN（ReactElement）]
        </li>
        <li>
        克隆并返回一个新的 ReactElement （内部子元素也会跟着克隆），新返回的元素会保留有旧元素的 props、ref、key，也会集成新的 props（只要在第二个参数中有定义）。
        </li>
     </ul>
</p>

```
var Hello = React.createClass({
            render: function() {
                var span = <span a="1">VaJoy</span>;
                var newSpan = React.cloneElement(span, {b:'2'}, <em>CNBlog</em>);
                console.log(newSpan.props);
                return <div>Hello {span},{newSpan}</div>; //Hello VaJoy,CNBlog
            }
        });

        React.render(<Hello />, document.body);
```

<p>
要注意的是，createElement 的第一个参数必须是字符串或 ReactClass，而在 cloneElement 里第一个参数应该是 ReactElement：
</p>

```
var Li = React.createClass({
			render: function() {
				return <li>{this.props.i}</li>
			}
		});
		var Ul = React.createClass({
			deal : function(child, index){
				//注意下面这行换成 createElement 会报错！因为child是ReactElement而不是ReactClass或字符串
				return React.cloneElement(child, {i:index});
			},
			render: function() {
				return <ul>{this.props.children.map(this.deal)}</ul>;
			}
		});
		React.render((
			<Ul>
				<Li i="9" />
				<Li i="8" />
				<Li i="7" />
			</Ul>
		), document.body);
```