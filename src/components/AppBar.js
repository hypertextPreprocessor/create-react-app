import React from 'react';
import { useParams,useNavigate,useHref } from "react-router";
import * as styles from "@com/css/com.module.css";
export default function AppBar({title}){
    let navigate = useNavigate(); 
    function navBack(){
        navigate(-1);
    }
    return <div className={styles["appBar"]}>
        <p onClick={navBack}>
            <svg viewBox="0 0 512 512" width="25" height="22">
                <path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"/>
            </svg>
        </p>
        <p><h1>{title}</h1></p>
    </div>
}