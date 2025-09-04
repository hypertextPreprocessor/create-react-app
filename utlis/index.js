/*gen unique random id*/
const randomId = function(length = 6) {
  return Math.random().toString(36).substring(2, length+2);
};
const checkId = function(id, existing = []) {
  let match = existing.find(function(item) {
    return item === id;
  });
  return match ? false : true;
};
const getId = function({ length, existing = [] }) {
  const limit = 100; // max tries to create unique id
  let attempts = 0; // how many attempts
  let id = false;
  while(!id && attempts < limit) {
    id = randomId(length); // create id
    if(!checkId(id, existing)) { // check unique
      id = false; // reset id
      attempts++; // record failed attempt
    }
  }
  return id; // the id or false if did not get unique after max attempts
}

function checkDevice(){
    var ua = navigator.userAgent;
    var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(ua);
    const measureByWidth = window.matchMedia("(width <= 1024px)").matches;
    var isDesktop = !isMobile && !measureByWidth;
    return {isDesktop,isMobile}
}
//dom 操作之单选;
function canAllClassOnParentEle(currentTargetDom,activeClassName){
    var parentTargetDom = currentTargetDom.parentElement;
    var activeDoms = parentTargetDom.querySelectorAll(`.${activeClassName}`);
    console.log(currentTargetDom,activeClassName)
    for(var i=0;i<activeDoms.length;i++){
        activeDoms[i].classList.remove(activeClassName);
    }
    currentTargetDom.classList.add(activeClassName);
}
//装配Container并插入到位置
function makeContainerInsertion({className=getId({length:8}),targetDom=document.body}){
    if(targetDom.querySelector(`#${className}`)){
        return targetDom.querySelector(`#${className}`);
    }else{
        var container = document.createElement('div');
        container.id=className;
        targetDom.appendChild(container);
        return container;
    }

}
export {checkDevice,canAllClassOnParentEle,getId,makeContainerInsertion};