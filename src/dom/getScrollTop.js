/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop(el) {
    if (el === window) {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }
    return el.scrollTop
}

module.exports = getScrollTop;