/**
 * 
 * @param {String} str
 * @param {Number} start 开始替换的下标位置
 * @param {Number} length 从 start 开始的字符数
 * @param {String} subStr  要替换上去的字符串
 */
function strReplace(str, start, length, subStr) {
    let reg = new RegExp(`(.{${start}}).{${length}}`)
    return str.replace(reg, '$1' + subStr)
}

module.exports = strReplace
