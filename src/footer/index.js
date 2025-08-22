import React from "react";
import { NavLink } from "react-router";
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
        <div className={styles["signinmodule"]}>
            <h1>See personalized recommendations</h1>
            <button>Sign in</button>
            <p>New customer?<NavLink to="/sign-in">Start here.</NavLink></p>
        </div>
        <div className={styles["backToTop"]}><button onClick={scrollToTop}>Back To Top</button></div>
        <div className={styles["footerBottom"]}>

            <p style={{padding:'1.2rem 0',textAlign:'center'}}>@2025 All Rights Reserved</p>
        </div>
    </>
}