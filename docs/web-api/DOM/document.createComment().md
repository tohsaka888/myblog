`createComment()` 方法用来创建并返回一个注释节点.

## 语法

```javascript
var commentNode = document.createComment(data)
```

## 例子

```javascript
var docu = new DOMParser().parseFromString('<xml></xml>',  "application/xml")

var comment = docu.createComment('这是注释内容');

docu.getElementsByTagName('xml')[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// 弹出 <xml><!--这是注释内容--></xml>
```

