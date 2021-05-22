在 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 文档中，**`Document.createElement()`** 方法用于创建一个由标签名称 tagName 指定的 HTML 元素。如果用户代理无法识别 tagName，则会生成一个未知 HTML 元素 [`HTMLUnknownElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLUnknownElement)。

## 语法

```javascript
var element = document.createElement(tagName[, options]);
```

## 参数

**tagName**

指定要创建元素类型的字符串,创建元素时的 [`nodeName`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName) 使用 `tagName` 的值为初始化，该方法不允许使用限定名称(如:"html:a")，在 HTML 文档上调用 `createElement()` 方法创建元素之前会将`tagName` 转化成小写，在 Firefox、Opera 和 Chrome 内核中，`createElement(null)` 等同于 `createElement("null")`

ptions**可选**

一个可选的参数 `ElementCreationOptions` 是包含一个属性名为 `is` 的对象，该对象的值是用 `customElements.define()` 方法定义过的一个自定义元素的标签名。

## 返回值

新建的元素(Element)

## 实例

### HTML

创建一个新的 `<div>` 并且插入到ID为“`div1`”的元素前。

```html
<!DOCTYPE html>
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>
```

### JavaScript

```javascript
document.body.onload = addElement;

function addElement () {
  // 创建一个新的 div 元素
  let newDiv = document.createElement("div");
  // 给它一些内容
  let newContent = document.createTextNode("Hi there and greetings!");
  // 添加文本节点 到这个新的 div 元素
  newDiv.appendChild(newContent);

  // 将这个新的元素和它的文本添加到 DOM 中
  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

