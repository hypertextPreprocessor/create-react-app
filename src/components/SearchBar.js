import React from 'react';
import {Button} from "@com";
import * as styles from "@com/css/com.module.css";
export default function SearchBar(){
    return <div className={styles["SearchBar"]}>
        <input type="search" name="search"/>
        <div>
            <Button type="primary" ghost>搜本店</Button>
            <Button>搜全站</Button>
        </div>
    </div>;
}