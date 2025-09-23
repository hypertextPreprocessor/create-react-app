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
export function NavBack({url=-1,title="返回"}){
    const navigate = useNavigate();
    function navBack(){
         navigate(url);
    }
    return <div className="padding-sm bg-white radius solid-bottom flex align-center gap-sm">
        <SvgIcon onClick={navBack} icon="arrow_left" width="22" height="22" strokeWidth="8" fill="#333"/>
        {title?<h1 onClick={navBack} className="text-lg">{title}</h1>:null}
    </div>
}