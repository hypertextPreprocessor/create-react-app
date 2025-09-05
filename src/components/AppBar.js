import React from 'react';
import { useParams,useNavigate,useHref } from "react-router";
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@com/css/com.module.css";

export default function AppBar({title,titleAlign="text-left"}){
    let navigate = useNavigate(); 
    function navBack(){
        navigate(-1);
    }
    return <div className={cn(styles["appBar"],'bg-white')}>
        <div onClick={navBack}>
            <SvgIcon icon="arrow_left" width="25" height="22" fill="#000"/>
        </div>
        <div className={titleAlign}><h1>{title}</h1></div>
    </div>
}