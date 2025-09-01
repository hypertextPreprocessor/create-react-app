import React from 'react';
import image from "@img";
import cn from "classnames";
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
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <rect fill="none" height="256" width="256"/>
                        <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" 
                            fill="none" 
                            stroke="var(--tarifa-color)" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                        />
                        <circle cx="80" cy="204" 
                            fill="none" r="20" 
                            stroke="var(--tarifa-color)" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                        />
                        <circle cx="184" cy="204" 
                            fill="none" 
                            r="20" 
                            stroke="var(--tarifa-color)" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                        />
                        <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" 
                            fill="none" 
                            stroke="var(--tarifa-color)" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                        /></svg>
                </p>
            </div>
        </div>)}
    </div>
}