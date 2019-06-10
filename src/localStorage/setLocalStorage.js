/**
 * @desc  设置Cookie
 * @param {String} key
 * @param {Any value} value
 * @param {Number} days  默认 0 为不过期
 */
function setLocalStorage(key, value, days = 0) {
    let curTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime, days: days }))
}

module.exports = setLocalStorage
