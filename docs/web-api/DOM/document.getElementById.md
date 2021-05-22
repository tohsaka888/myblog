[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)的方法 [`getElementById()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)返回一个匹配特定 [ID](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)的元素. 由于元素的 ID 在大部分情况下要求是独一无二的，这个方法自然而然地成为了一个高效查找特定元素的方法。

如果需要查找到那些没有ID 的元素，你可以考虑通过CSS选择器使用 [`querySelector()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)。

## 语法

```javascript
var element = document.getElementById(id);
```

## 参数

- **`element`**是一个 [Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 对象。如果当前文档中拥有特定ID的元素不存在则返回null.
- **`id`**是大小写敏感的字符串，代表了所要查找的元素的唯一ID.

## 返回值

返回一个匹配到 ID 的 DOM [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 对象。若在当前 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 下没有找到，则返回 null。

## 实例

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>getElementById example</title>
</head>
<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>
</body>
</html>
```

### JavaScript

```javascript
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
```

## 注意

对 “Id” 的拼写一定要正确。如果大小写不匹配，无论看起来多么合情合理，`getElementByID()` 都是不合理的且永远都不会工作的。

不同于其他 `Element` 查找方法（如[`Document.querySelector()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 以及 [`Document.querySelectorAll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)），`getElementById()` 只有在作为 `document` 的方法时才能起作用，而在DOM中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的 “局部” 版本。