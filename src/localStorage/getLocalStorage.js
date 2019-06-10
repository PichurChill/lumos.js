/**
 * @desc  获取Cookie
 * @param {String} key
 */
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value === null) {
        return "";
    }
    let json = JSON.parse(value)
    let data =json.data
    let time =json.time
    let days =json.days
    if (days === 0) {
        return data;
    } else if (new Date().getTime() - time > days * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(key)
        return "";
    } else {
        return data;
    }
}

module.exports = getLocalStorage
