/**
 * @desc  删除Cookie
 * @param {String} key
 */
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

module.exports = removeLocalStorage
