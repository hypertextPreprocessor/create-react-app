import React from "react";
import "./css/main.css";
import images from "@img/icons";
export default function Model({show=true,title="title",content="null",children,onClose}){

    if(show){
            return <div className="modal">
            <div>
                <div className="modal-header">
                    <h1>{title}</h1>
                    <p onClick={onClose}><img src={images["cancel_close_delete_icon"]} alt=""/></p>
                </div>
                <div class="modal-content">
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