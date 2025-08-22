import React from "react";
import { NavLink } from "react-router";
import * as styles from "@css/header.module.css";
export default function SignIn(){
    return <div className={styles["signinmodule"]}>
            <h1>See personalized recommendations</h1>
            <button>Sign in</button>
            <p>New customer?<NavLink to="/sign-in">Start here.</NavLink></p>
        </div>;
}