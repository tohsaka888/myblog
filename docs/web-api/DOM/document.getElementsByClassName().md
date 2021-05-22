返回一个包含了所有指定类名的子元素的类数组对象。当在document对象上调用时，会搜索整个DOM文档，包含根节点。你也可以在任意元素上调用[`getElementsByClassName()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getElementsByClassName) 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

## 语法

```javascript
var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);
```

- elements 是一个实时[`集合`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)，包含了找到的所有元素。
- names 是一个字符串，表示要匹配的类名列表；类名通过空格分隔
- getElementsByClassName 可以在任何元素上调用，不仅仅是 document。 调用这个方法的元素将作为本次查找的根元素.

## 实例

获取所有 class 为 'test' 的元素:

```javascript
document.getElementsByClassName('test');
```

获取所有 class 同时包括 'red' 和 'test' 的元素.

```javascript
document.getElementsByClassName('red test');
```

在id 为'main'的元素的子节点中，获取所有class为'test'的元素

```javascript
document.getElementById('main').getElementsByClassName('test');
```

