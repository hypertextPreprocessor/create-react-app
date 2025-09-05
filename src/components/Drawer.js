import React, { useEffect, useMemo, useRef } from 'react';
import {createPortal} from "react-dom";
import { createRoot } from 'react-dom/client';
import classNames from 'classnames';
import SvgIcon from "@img/icons/SvgIcon";
import {makeContainerInsertion} from "@utlis";
import {drawer_container,ej_drawer_title} from "@com/css/com.module.css";
/*
    direction - 从哪个方向打开 [bottom , top , left, right]
*/
var defaultParams = {
    style:{
        transition:'all .2s ease-in-out'
    },
    direction:"bottom",
    show:true,
    title:"Title",
    titleAlign:"text-left",
    children:null,
    content:"content"
}
export default function Drawer(params){
    const mainConRef = useRef(null);
    params = Object.assign({},defaultParams,params);
    const properties = useMemo(()=>{
        if(params.show){
            document.body.style.overflow = 'hidden';
            switch(params.direction){
                case "bottom":
                    //params.style = Object.assign({},params.style,{bottom:0 + 'px',left:0});
                    break;
                case "top":
                    break;
                case "left":
                    break;
                case "right":
                    break;
                default:
                    break;
            }
            return params;
        }
    },[params]);

    useEffect(()=>{
        show();
    },[properties]);
    function show(){
        if(mainConRef.current){
            document.querySelector("#app").classList.add("back_cover_effect");
            if(params.direction==="bottom"){
                mainConRef.current.style.setProperty('bottom',-mainConRef.current.clientHeight + 'px');
                setTimeout(()=>{
                    document.body.style.overflow = 'hidden';
                    mainConRef.current.style.setProperty('bottom',0);
                },200);
            }else if(params.direction==="top"){
                mainConRef.current.style.setProperty('top',-mainConRef.current.clientHeight + 'px');
                setTimeout(()=>{
                    document.body.style.overflow = 'hidden';
                    mainConRef.current.style.setProperty('top',0);
                },200);
            }else if(params.direction==="left"){
                mainConRef.current.style.setProperty('left',-mainConRef.current.clientWidth + 'px');
                setTimeout(()=>{
                    document.body.style.overflow = 'hidden';
                    mainConRef.current.style.setProperty('left',0);
                },200);
            }else if(params.direction==="right"){
                mainConRef.current.style.setProperty('right',-mainConRef.current.clientWidth + 'px');
                setTimeout(()=>{
                    document.body.style.overflow = 'hidden';
                    mainConRef.current.style.setProperty('right',0);
                },200);
            }
        }
    }
    if(params.show){
        var container = makeContainerInsertion({className:'ej_drawer'});
        function close(){
            document.body.style.overflow = 'auto';
            document.querySelector("#app").classList.remove("back_cover_effect");
            if(params.direction==="bottom"){
                mainConRef.current.style.setProperty('bottom',-mainConRef.current.clientHeight + 'px');
            }else if(params.direction==="top"){
                mainConRef.current.style.setProperty('top',-mainConRef.current.clientHeight + 'px');
            }else if(params.direction==="left"){
                mainConRef.current.style.setProperty('left',-mainConRef.current.clientWidth + 'px');
            }else if(params.direction==="right"){
                mainConRef.current.style.setProperty('right',-mainConRef.current.clientWidth + 'px');
            }
            setTimeout(()=>{
                if(params.onClose){
                    params.onClose();
                    document.querySelector('#ej_drawer').remove();
                }else{
                    document.querySelector('#ej_drawer').remove();
                }
            },200);
        }
        return <>
            {createPortal(<>
                <div className={classNames(drawer_container)}> {/*<!--遮罩层-->*/}
                    <div className={classNames({'bg-white':params.title})} style={properties.style} ref={mainConRef}>
                        {params.direction === "top"?(
                            <>
                                {params.children?(
                                    params.children
                                ):params.content}
                                <div className={classNames(ej_drawer_title)}><h1 className={params.titleAlign}>{params.title?params.title:''}</h1><p onClick={close}>
                                    <SvgIcon icon="close_cross" width="32" height="32" stroke={params.title?"#000":"#fff"} fill="none" strokeWidth="2"/>
                                    </p>
                                </div>
                            </>
                        ):(
                            <>
                                <div className={classNames(ej_drawer_title)}><h1 className={params.titleAlign}>{params.title?params.title:''}</h1><p onClick={close}>
                                    <SvgIcon icon="close_cross" width="32" height="32" stroke={params.title?"#000":"#fff"} fill="none" strokeWidth="2"/>
                                    </p>
                                </div>
                                {params.children?(
                                    params.children
                                ):params.content}
                            </>
                        )}
                        
                    </div>
                </div>
            </>,container)}
        </>
    }else{
        return null;
    }
}
Drawer.show=function(params={}){
    params = Object.assign({},defaultParams,params);
    var container = makeContainerInsertion({className:'ej_drawer'});
    createRoot(container).render(<Drawer {...{...params}}/>);

}
Drawer.close=function(){
    if(document.querySelector("#ej_drawer")){
        document.body.style.overflow = 'auto';
        var dom = document.querySelector("#ej_drawer>div>div");
        dom.style.setProperty('bottom',-dom.clientHeight + 'px');
        setTimeout(()=>{
            document.querySelector('#ej_drawer').remove();
        },200);
    }
}