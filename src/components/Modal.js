import React, { useEffect, useRef } from "react";
import { useImperativeHandle } from 'react';
import "./css/main.css";
import images from "@img/icons";
export default function Model({ref,style={},show=true,title="title",content=null,children,onClose}){
    const containerRef = useRef(null);
    useImperativeHandle(ref,()=>{
        return show&&containerRef.current;
    },[show])
    useEffect(()=>{
        if(show){
            //console.log(containerRef.current)
        }
    },[show])
    if(show){
            return <div className="modal" ref={containerRef}>
            <div style={style}>
                <div className="modal-header">
                    <h1>{title}</h1>
                    <p onClick={onClose}><img src={images["cancel_close_delete_icon"]} alt=""/></p>
                </div>
                <div className="modal-content">
                    {content? <p>{content}</p> : children}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Done</button>
                </div>
            </div>
        </div>
    }else{
        return null;
    }

}