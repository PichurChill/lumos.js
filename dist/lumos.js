(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lumos"] = factory();
	else
		root["lumos"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}

module.exports = setCookie;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * 
 * @desc 判断数据是否为 “空”, '' - 空字符串  undefined
 * @param  {String} name 
 * @return {Boolean or Any value}
 */
function isEmpty(val, defaultValue) {
  var flag = val === '' || val === undefined || val === null;
  if (defaultValue !== undefined) {
    if (flag) {
      return defaultValue;
    }
    return val;
  } else {
    return flag;
  }
}

module.exports = isEmpty;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop(el) {
    if (el === window) {
        return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    }
    return el.scrollTop;
}

module.exports = getScrollTop;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * 
 * @desc 设置滚动条距顶部的距离
 * @param {dom} el
 * @param {Number} value
 */
function setScrollTop(el, d) {
    if (el === window) {
        window.scrollTo(0, d);
    } else {
        el.scrollTop = d;
    }
}

module.exports = setScrollTop;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * @desc   函数节流。
 * 适用于限制`resize`和`scroll`等函数的调用频率
 *
 * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}   noTrailing     可选，默认为false。
 *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
 *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
 *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
 * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                    执行去节流功能时，调用`callback`。
 * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
 *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
 *
 * @return {Function}  新的节流函数
 */
module.exports = function throttle(delay, noTrailing, callback, debounceMode) {

    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeoutID;

    // Keep track of the last time `callback` was executed.
    var lastExec = 0;

    // `noTrailing` defaults to falsy.
    if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }

    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {

        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;

        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Number(new Date());
            callback.apply(self, args);
        }

        // If `debounceMode` is true (at begin) this is used to clear the flag
        // to allow future `callback` executions.
        function clear() {
            timeoutID = undefined;
        }

        if (debounceMode && !timeoutID) {
            // Since `wrapper` is being called for the first time and
            // `debounceMode` is true (at begin), execute `callback`.
            exec();
        }

        // Clear any existing timeout.
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        if (debounceMode === undefined && elapsed > delay) {
            // In throttle mode, if `delay` time has been exceeded, execute
            // `callback`.
            exec();
        } else if (noTrailing !== true) {
            // In trailing throttle mode, since `delay` time has not been
            // exceeded, schedule `callback` to execute `delay` ms after most
            // recent execution.
            //
            // If `debounceMode` is true (at begin), schedule `clear` to execute
            // after `delay` ms.
            //
            // If `debounceMode` is false (at end), schedule `callback` to
            // execute after `delay` ms.
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }

    // Return the wrapper function.
    return wrapper;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @desc webpack打包入口文件  
 * @example 自动引入子目录下所有js文件
 */
var moduleExports = {};

var r = __webpack_require__(6);
r.keys().forEach(function (key) {
  var attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  moduleExports[attr] = r(key);
});
moduleExports['version'] = __webpack_require__(22).version;
module.exports = moduleExports;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cookie/getCookie.js": 7,
	"./cookie/removeCookie.js": 8,
	"./cookie/setCookie.js": 0,
	"./data/isEmpty.js": 1,
	"./date/dateFormat.js": 9,
	"./device/getBrowser.js": 10,
	"./device/getOS.js": 11,
	"./dom/getEleFullHeight.js": 12,
	"./dom/getScrollTop.js": 2,
	"./dom/scrollTo.js": 13,
	"./dom/setScrollTop.js": 3,
	"./function/debounce.js": 14,
	"./function/throttle.js": 4,
	"./localStorage/getLocalStorage.js": 15,
	"./localStorage/removeLocalStorage.js": 16,
	"./localStorage/setLocalStorage.js": 17,
	"./object/deepClone.js": 18,
	"./string/strReplace.js": 19,
	"./url/parseQueryString.js": 20,
	"./url/stringfyQueryString.js": 21
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * 
 * @desc 根据 name 读取 cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

module.exports = getCookie;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setCookie = __webpack_require__(0);
/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1);
}

module.exports = removeCookie;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @desc 获取浏览器类型和版本
 * @return {Object}
 */
var isEmpty = __webpack_require__(1);

function dateFormat(date, fmt) {
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };
    if (isEmpty(fmt)) {
        fmt = 'yyyy-MM-dd hh:mm:ss';
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fmt;
}
module.exports = dateFormat;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * @desc 获取浏览器类型和版本
 * @return {Object}
 */
function getBrowser() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s = void 0;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return { name: 'ie', version: sys.ie };
    if (sys.edge) return { name: 'edge', version: sys.edge };
    if (sys.firefox) return { name: 'firefox', version: sys.firefox };
    if (sys.chrome) return { name: 'chrome', version: sys.chrome };
    if (sys.opera) return { name: 'opera', version: sys.opera };
    if (sys.safari) return { name: 'safari', version: sys.safari };
    return 'Unkonwn';
}
module.exports = getBrowser;

/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * @desc 获取操作系统类型
 * @return {Object} 
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return { name: 'ios' };
    if (/android/i.test(userAgent)) return { name: 'android' };
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return { name: 'windowsPhone' };
    if (/mac/i.test(appVersion)) return { name: 'macOSX' };
    if (/win/i.test(appVersion)) return { name: 'windows' };
    if (/linux/i.test(appVersion)) return { name: 'linux' };
}

module.exports = getOS;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * @desc 获取元素高度 包括margin
 * @return {Number}
 */
function getEleFullHeight(el) {
    el = typeof el === 'string' ? document.querySelector(el) : el;
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

module.exports = getEleFullHeight;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var getScrollTop = __webpack_require__(2);
var setScrollTop = __webpack_require__(3);
var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${end}指定位置
 * @el {dom} dom元素
 * @start {Number} 开始滚动的位置 可选
 * @end {Number} 停止滚动的位置
 * @duration {Number} 持续时间
 */

function scrollTo(el, start, end, duration) {
    // 省略 start 参数，只指定了 end 参数
    if (arguments.length === 3) {
        var arg = [].concat(Array.prototype.slice.call(arguments));
        el = arg[0];
        start = getScrollTop(el);
        end = arg[1];
        duration = arg[2];
    }

    // 每次移动的 px
    var step = Math.abs(end - start) / duration * 10;
    if (start === end) return;

    var d = start + step > end ? end : start + step;
    if (start > end) {
        d = start - step < end ? end : start - step;
    }
    if (end === getScrollTop(el)) {
        return;
    }
    setScrollTop(el, d);
    requestAnimFrame(function () {
        return scrollTo(el, d, end, duration - 16);
    });
}

module.exports = scrollTo;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(4);

/**
 * @desc 函数防抖 
 * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
 * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @example 适用场景：如在线编辑的自动存储防抖。
 * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}  atBegin       可选，默认为false。
 *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                    如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
 * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                  执行去抖动功能时，，调用`callback`。
 *
 * @return {Function} 新的防抖函数。
 */
function debounce(delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};
module.exports = debounce;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * @desc  获取Cookie
 * @param {String} key
 */
function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value === null) {
        return "";
    }
    var json = JSON.parse(value);
    var data = json.data;
    var time = json.time;
    var days = json.days;
    if (days === 0) {
        return data;
    } else if (new Date().getTime() - time > days * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(key);
        return "";
    } else {
        return data;
    }
}

module.exports = getLocalStorage;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * @desc  删除Cookie
 * @param {String} key
 */
function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

module.exports = removeLocalStorage;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * @desc  设置Cookie
 * @param {String} key
 * @param {Any value} value
 * @param {Number} days  默认 0 为不过期
 */
function setLocalStorage(key, value) {
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var curTime = new Date().getTime();
  localStorage.setItem(key, JSON.stringify({ data: value, time: curTime, days: days }));
}

module.exports = setLocalStorage;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
function deepClone(values) {
    var copy = void 0;

    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != (typeof values === "undefined" ? "undefined" : _typeof(values))) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}

module.exports = deepClone;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * 
 * @param {String} str
 * @param {Number} start 开始替换的下标位置
 * @param {Number} length 从 start 开始的字符数
 * @param {String} subStr  要替换上去的字符串
 */
function strReplace(str, start, length, subStr) {
  var reg = new RegExp('(.{' + start + '}).{' + length + '}');
  return str.replace(reg, '$1' + subStr);
}

module.exports = strReplace;

/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function parseQueryString(url) {
    url = !url ? window.location.href : url;
    if (url.indexOf('?') === -1) {
        return {};
    }
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    search = search.split('&');
    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

module.exports = parseQueryString;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}

module.exports = stringfyQueryString;

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = {"name":"lumos.js","version":"0.0.9","description":"Front-End utils","main":"dist/lumos.min.js","scripts":{"dev":"concurrently --kill-others \"npm run build-pack-watch\" \"npm run demo-server\" \"npm run test --testMode=watch\"","build":"node script/build.js","build-copy":"node script/build-copy.js","build-pack":"node script/build-pack","build-pack-watch":"nodemon --watch src ./script/build-pack.js","demo-server":"cd demo && npm i && nodemon ./app.js","test":"npm run build-pack && karma start script/karma.conf.js"},"repository":{"type":"git","url":"git@github.com:PichurChill/lumos.js.git"},"keywords":["util","tool"],"author":"pichurchill","license":"MIT","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0","chai":"^4.2.0","concurrently":"^4.1.0","copy":"^0.3.2","coveralls":"^3.0.4","karma":"^3.1.4","karma-chai":"^0.1.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.2","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","mocha":"^5.2.0","ora":"^3.0.0","rimraf":"^2.6.2","webpack":"^4.28.3"},"dependencies":{"uglifyjs-webpack-plugin":"^2.1.3"}};

/***/ })
/******/ ]);
});