/**
 * 
 * @desc 根据 name 读取 cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
  let arr = document.cookie.replace(/\s/g, "").split(';');
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

module.exports = getCookie