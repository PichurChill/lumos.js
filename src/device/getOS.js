
/**
 * @desc 获取操作系统类型
 * @return {Object} 
 */
function getOS() {
    let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    let vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return { name: 'ios' }
    if (/android/i.test(userAgent)) return { name: 'android'}
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return { name: 'windowsPhone' }
    if (/mac/i.test(appVersion)) return { name: 'macOSX' }
    if (/win/i.test(appVersion)) return { name: 'windows'}
    if (/linux/i.test(appVersion)) return { name: 'linux' }
}

module.exports = getOS;