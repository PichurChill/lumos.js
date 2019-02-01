/**
 * 
 * @desc 判断数据是否为 “空”, '' - 空字符串  undefined
 * @param  {String} name 
 * @return {Boolean or Any value}
 */
function isEmpty(val, defaultValue) {
  let flag = val === '' || val === undefined || val === null
  if (defaultValue !== undefined) {
    if (flag) {
      return defaultValue
    }
    return val
  } else {
    return flag
  }
}

module.exports = isEmpty