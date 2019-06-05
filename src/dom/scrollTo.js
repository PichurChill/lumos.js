let getScrollTop = require('./getScrollTop');
let setScrollTop = require('./setScrollTop');
let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${end}指定位置
 * @el {dom} dom元素
 * @start {Number} 开始滚动的位置
 * @end {Number} 停止滚动的位置
 * @duration {Number} 持续时间
 * @forceScroll {Boolean} 到达 ${end} 后再次点击时候从 ${start} 再次滚动
 */

function scrollTo(el, start, end, duration, forceScroll = false) {
    // 每次移动的 px
    let step = Math.abs(end - start) / duration * 10
    if (start === end) return;

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
        d = (start - step < end) ? end : start - step;
    }
    if (end === getScrollTop(el) && !forceScroll) {
        return
    }
    setScrollTop(el, d)
    requestAnimFrame(() => scrollTo(el, d, end, duration - 16));
}

module.exports = scrollTo;