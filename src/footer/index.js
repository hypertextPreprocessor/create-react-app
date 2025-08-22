import React from "react";
import { NavLink } from "react-router";
import SignIn from "@com/SignIn";
import * as styles from "@css/header.module.css";
export default function Footer(){
    function scrollToTop(){
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
    return <>
        {/* singin ?*/}
        <SignIn/>
        <div className={styles["backToTop"]}><button onClick={scrollToTop}>Back To Top</button></div>
        <div className={styles["footerBottom"]}>

            <p style={{padding:'1.2rem 0',textAlign:'center'}}>@2025 All Rights Reserved</p>
        </div>
    </>
}