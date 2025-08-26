import React from 'react';
import {useWindowState} from "@caveats/externalStore";
import {CategoryCabin,FeaturedShops,ShopByBrand} from "@com";
import image from "@img";
import * as styles from "@css/header.module.css";
export default function CategoryTemplate(){
    const {devices} = useWindowState();
    return <>
        <div className={styles["mainContent"]}>
            <h1 className={styles['cateTitle']}>Computer & Accessories</h1>
            <div className={styles["poster1"]}>
                <img src={image["Untitled"]} alt=""/>
            </div>
            <div>
                <div>
                    <CategoryCabin title="Just In: Conputers & accessories"/>
                    <FeaturedShops title="Featured shops" datalist={[1,2,3,4,5,6]}/>
                    <CategoryCabin.Tarifa title="Save on PC devices"/>
                    <CategoryCabin.Tarifa title="Save on Peripherals"/>
                    <ShopByBrand list={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}/>
                </div>
            </div>
        </div>
    </>
}