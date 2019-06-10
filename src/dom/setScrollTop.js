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