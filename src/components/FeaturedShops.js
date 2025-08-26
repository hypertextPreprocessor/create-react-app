import React from "react";
import image from "@img";
import * as styles from "@css/header.module.css";
export default function FeaturedShops({title,datalist=[]}){
    return (
        <div className={styles["featuredShop"]}>
            <h1>{title}</h1>
            <div className={styles["featuredBox"]}>
            {datalist.map((v,i)=>
                <div key={i} className={styles["featuredItem"]}>
                    <p><img src={image["cantingsumiao"]} alt=""/></p>
                    <h2>Laptops</h2>
                    <ul>
                        <li>Shop all</li>
                        <li>Shop MacBooks</li>
                        <li>Shop Windows laptops</li>
                        <li>Shop touchscreen laptops</li>
                        <li>Shop 2-in-1 laptops</li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    );
}