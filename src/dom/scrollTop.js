function scrollTop(el, from = 0, to, duration = 500) {
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);
    scroll(el, from, to, step);
}
module.exports = scrollTop;

