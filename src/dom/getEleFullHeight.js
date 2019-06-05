/**
 * @desc 获取元素高度 包括margin
 * @return {Number}
 */
function getEleFullHeight(el) {
    el = (typeof el === 'string') ? document.querySelector(el) : el;
    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

module.exports = getEleFullHeight;
