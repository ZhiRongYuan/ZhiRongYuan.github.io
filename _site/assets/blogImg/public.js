/**
 *
 * @authors panhx (by yy163.me)
 * @date    2016-02-16 11:35:29
 * @version 01
 */
(function($){
    //判断浏览器是否太旧
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否isChrome浏览器
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
        if (isIE) {
            var IE5 = IE55 = IE6 = IE7 = IE8 = false;
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            IE55 = fIEVersion == 5.5;
            IE6 = fIEVersion == 6.0;
            IE7 = fIEVersion == 7.0;
            IE8 = fIEVersion == 8.0;
            IE9 = fIEVersion == 9.0;
            if (IE55||IE6||IE7||IE8) {
                return "IE8pre";
            }else if (IE9) {
                return "IE9";
            }{
                return "IE9next"
            }

        }
        if (isFF) {
            return "FF";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isChrome) {
            return "Chrome";
        }
        if (isSafari) {
            return "Safari";
        }
    }
    //ie判断
    switch (myBrowser()) {
        case 'IE8pre':
            alert('你的浏览器太旧了无法正常展示CSS3代码效果，建议你下载最新的Chrome浏览器！')
            break;
        case 'IE9':
            alert('你的浏览器比较旧，不能正常运行本页面的动画效果！')
            break;
    }
})(jQuery);