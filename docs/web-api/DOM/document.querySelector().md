文档对象模型[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)引用的`querySelector()`方法返回文档中与指定选择器或选择器组匹配的第一个 [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)对象。 如果找不到匹配项，则返回`null`。

##　语法

```javascript
element = document.querySelector(selectors);
```

## 参数

**selectors**

包含一个或多个要匹配的选择器的 DOM字符串[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。 该字符串必须是有效的**CSS选择器字符串**；如果不是，则引发`SYNTAX_ERR`异常。请参阅[使用选择器定位DOM元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)以获取有关选择器以及如何管理它们的更多信息。

## 返回值

表示文档中与指定的一组CSS选择器匹配的**第一个元素**,一个 [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)对象。如果没有匹配到，则返回null。

如果您需要与指定选择器匹配的所有元素的列表，则应该使用[`querySelectorAll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll) 。

## 实例

这个例子中，会返回当前文档中第一个类名为 "`myclass`" 的元素：

```javascript
var el = document.querySelector(".myclass");
```

