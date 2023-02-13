/**
 * @desc 获取浏览器类型和版本
 * @return {Object}
 */
function getBrowser() {
    let sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edg\/([\d\.]+)/)) ? sys.edg = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ({ name: 'ie', version:  sys.ie})
    if (sys.edg) return ({ name: 'edge', version:  sys.edg})
    if (sys.edge) return ({ name: 'edge', version:  sys.edge})
    if (sys.firefox) return ({ name: 'firefox', version:  sys.firefox})
    if (sys.chrome) return ({ name: 'chrome', version:  sys.chrome})
    if (sys.opera) return ({ name: 'opera', version:  sys.opera})
    if (sys.safari) return ({ name: 'safari', version:  sys.safari})
    return 'Unkonwn'
}
module.exports = getBrowser;
