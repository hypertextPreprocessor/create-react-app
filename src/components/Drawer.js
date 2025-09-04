import React from 'react';
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
    style:{},
    direction:"bottom",
    show:true,
    title:"Title",
    titleAlign:"text-left",
    children:null,
    content:"content"
}
export default function Drawer(params){
    params = Object.assign({},defaultParams,params);
    if(params.show){
        var container = makeContainerInsertion({className:'ej_drawer'});
        function close(){

        }
        return <>
            {createPortal(<>
                <div className={classNames(drawer_container)}> {/*<!--遮罩层-->*/}
                    <div className={classNames({'bg-white':params.title})} style={params.style}>
                        <div className={classNames(ej_drawer_title)}><h1 className={params.titleAlign}>{params.title?params.title:''}</h1><p>
                            <SvgIcon icon="close_cross" width="32" height="32" stroke={params.title?"#000":"#fff"} fill="none" strokeWidth="2"/>
                            </p>
                        </div>
                        {params.children?(
                            params.children
                        ):params.content}
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

}