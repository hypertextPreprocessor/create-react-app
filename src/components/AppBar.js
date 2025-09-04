import React from 'react';
import { useParams,useNavigate,useHref } from "react-router";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@com/css/com.module.css";

export default function AppBar({title}){
    let navigate = useNavigate(); 
    function navBack(){
        navigate(-1);
    }
    return <div className={styles["appBar"]}>
        <div onClick={navBack}>
            <SvgIcon icon="arrow_left" width="25" height="22" fill="#000"/>
        </div>
        <div><h1>{title}</h1></div>
    </div>
}