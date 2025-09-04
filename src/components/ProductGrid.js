import React from 'react';
import image from "@img";
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@com/css/com.module.css";
export default function ProductGrid({colNum=3}){
    return <div className={cn(styles["productGrid"],'flex','flex-wrap')}>
        {Array.from({length:6}).map((v,i)=><div key={i} style={{width:`calc(100% / ${colNum} - 1.2rem)`}}>
            <div><img src={image["example"]} alt=""/></div>
            <div>
                <p className="twoLineTxt margin-tb-sm">SEB WESELY儿童玩具机器狗新款智能1-3-6-10岁机器人男孩女孩早教生日礼物 声控手势【宝石蓝-旗舰款】 【当日/隔日达】</p>
                <p className="priceTag">
                    <span>$</span><span>209</span><sup>99</sup>
                    <span className="list">List: $299.99</span>
                </p>
                <p className="flex align-center justify-end" style={{cursor:"pointer"}}>
                    <SvgIcon icon="cart" width="25" height="25" fill="none" stroke="var(--tarifa-color)" strokeWidth={16} />
                </p>
            </div>
        </div>)}
    </div>
}