`Document.createAttribute()` 方法创建并返回一个新的属性节点。这个对象创建一个实现了 [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr) 接口的节点。这个方式下DOM不限制节点能够添加的属性种类。

## 语法

```javascript
attribute = document.createAttribute(name)
```

## 参数

- `name` ，属性的属性名。

## 返回值

一个 [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr) 节点。

## 例子

```javascript
var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

