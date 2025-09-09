import React from "react";
import { NavLink,useNavigate } from "react-router";
import * as styles from "@css/header.module.css";
export default function SignIn(){
    const navigate = useNavigate();
    function toSingIn(){
        navigate("/login");
    }
    return <div className={styles["signinmodule"]}>
            <h1>See personalized recommendations</h1>
            <button onClick={toSingIn}>Sign in</button>
            <p>New customer?<NavLink to="/sign-in">Start here.</NavLink></p>
        </div>;
}