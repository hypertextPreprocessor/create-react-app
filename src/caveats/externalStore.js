import { useSyncExternalStore } from 'react';
var obj = {
    winWidth:document.documentElement.clientWidth,
    winHeight:document.documentElement.clientHeight
}
let listeners = [];
function getClientRectSezi(){
    obj = Object.assign({},obj,{
        winHeight:document.documentElement.clientHeight,
        winWidth:document.documentElement.clientWidth
    })
    emitChange();
}
function subscribe(callback) {
    listeners = [...listeners,callback];
    window.addEventListener('resize',getClientRectSezi);
    window.addEventListener('load',getClientRectSezi);
    return ()=>{    //unSubscribe   
        listeners = listeners.filter((item)=>item !== callback);
        window.removeEventListener('resize',getClientRectSezi);
        window.removeEventListener('load',getClientRectSezi);
    }
}
function emitChange(){
    listeners.forEach((item)=>{
        item();
    });
}
function getSnapshot(){
   return obj;
}
export function useWindowState(){
    const resize = useSyncExternalStore(subscribe, getSnapshot);
    return resize;
}