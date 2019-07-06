# lumos.js
前端工具类库 | JavaScript utility library

[![npm](https://img.shields.io/npm/v/lumos.js.svg?color=%231f7fbf)](https://www.npmjs.com/package/lumos.js)
[![Travis (.com)](https://img.shields.io/travis/com/pichurchill/lumos.js.svg)](https://travis-ci.com/pichurchill/lumos.js)
[![Coveralls github](https://img.shields.io/coveralls/github/PichurChill/lumos.js.svg)](https://coveralls.io/github/PichurChill/lumos.js)
[![GitHub](https://img.shields.io/github/license/PichurChill/lumos.js.svg)](https://github.com/PichurChill/lumos.js/blob/master/LICENSE)

https://pichurchill.github.io/lumos.js


[![screenshot](http://blog.cdn.ifrena.com/lumos-screen-shot.png)](https://pichurchill.github.io/lumos.js)

## 介绍
-  🧙‍ 名字来源：[Lumos](https://harrypotter.fandom.com/wiki/Lumos_Maxima)
- 🦉 想较完整地做一个较“现代化构建”的项目学习下，顺便整理一下一些常用的前端工具类
- 👍 参考并学习： [proYang/outils](https://github.com/proYang/outils)

## 实现
- 💡 `Lumos` 的动画效果
- ⚙️`travis-ci` 配合 `github` 来做持续化构建，实现自动发布到 `npm` 等功能
- 🔧 使用 `karma`、`mocha`、`chai` 做单元测试，`coverage` 测试覆盖率

## 安装
### 浏览器
``` html
<script src="./lumos.min.js"></script>
<script>
    lumos.scrollTo(window, 0, 200)
</script>
```

### npm
```
$ npm install lumos.js --save
```
按需引入
``` javascript
const getScrollTop= require('lumos.js/getScrollTop')
getScrollTop(window)

// or

import { getScrollTop } from 'lumos.js'
getScrollTop(window)
```
全量引入
``` javascript
const lumos= require('lumos.js')
lumos.getScrollTop(window)

// or

import lumos from 'lumos.js'
lumos.getScrollTop(window)

```


## 文档
coming soon...

[Document](https://pichurchill.github.io/lumos.js/#/document)

```
├── cookie
│   ├── getCookie.js
│   ├── removeCookie.js
│   └── setCookie.js
├── data
│   └── isEmpty.js
├── date
│   └── dateFormat.js
├── device
│   ├── getBrowser.js
│   └── getOS.js
├── dom
│   ├── getEleFullHeight.js
│   ├── getScrollTop.js
│   ├── scrollTo.js
│   └── setScrollTop.js
├── function
│   ├── debounce.js
│   └── throttle.js
├── localStorage
│   ├── getLocalStorage.js
│   ├── removeLocalStorage.js
│   └── setLocalStorage.js
├── object
│   └── deepClone.js
├── string
│   └── strReplace.js
└── url
    ├── parseQueryString.js
    └── stringfyQueryString.js
```
