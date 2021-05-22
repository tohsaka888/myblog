## Document

**`Document`** 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是[DOM 树](https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core)。DOM 树包含了像 [`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 、[`<table>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table) 这样的元素，以及[大量其他元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL ，如何在文档中创建一个新的元素这样的问题。

## 属性

`document.body`

返回当前文档的 [`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 或 [`<frameset>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/frameset) 节点。

`document.contentType`

根据当前文档的 MIME Header，返回它的 Content-Type。

`document.documentElement`

返回当前文档的直接子节点。对于 HTML 文档，[`HTMLHtmlElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLHtmlElement) 对象一般代表该文档的[`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素。

`document.scripts`

返回文档中所有的 [`<script>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 元素。

## 方法

从其他的document文档中获取一个节点。 该节点以及它的子树上的所有节点都会从原文档删除 (如果有这个节点的话), 并且它的`ownerDocument` 属性会变成当前的document文档。 之后你可以把这个节点插入到当前文档中。

`document.createAttribute()`		见后文



