function checkDevice(){
    var ua = navigator.userAgent;
    var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(ua);
    const measureByWidth = window.matchMedia("(width <= 1024px)").matches;
    var isDesktop = !isMobile && !measureByWidth;
    return {isDesktop,isMobile}
}
export {checkDevice};