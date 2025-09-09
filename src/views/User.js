import React from 'react';
import {Navigation} from "@com";
import SvgIcon from "@img/icons/SvgIcon";
import cn from "classnames";
import {useWindowState} from "@caveats/externalStore";
import {mainContent} from "@css/header.module.css";
function itemGen(key,label,icon=null,children=null){
    return {key,label,icon,children};
}
const items = [
    itemGen("mine","我的信息",<SvgIcon style={{verticalAlign:'middle'}} icon="fulano" width="16" height="16" strokeWidth={1} />,[
        itemGen("mine_info","个人信息","",null),
        itemGen("mine_delivery","收货地址","",null),
    ]),
    itemGen("order","订单中心",<SvgIcon icon="order" width="16" height="16" strokeWidth={3}/>,[
        itemGen("order_mine","我的订单","",null),
        itemGen("order_show","评价晒单","",null),
    ]),
    itemGen("foco","关注中心",<SvgIcon icon="concentrate" width="16" height="16" strokeWidth={37} />,[
        itemGen("foco_product","关注的商品","",null),
        itemGen("foco_shop","关注的店铺","",null),
        itemGen("foco_activity","关注的活动","",null),
    ]),
    itemGen("assets","资产中心",<SvgIcon icon="assets" width="16" height="16" strokeWidth={10}/>,[
        itemGen("assets_bank","支付通道","",null),
        itemGen("assets_coupon","优惠券","",null),
        itemGen("assets_gift","礼品卡","",null),
    ]),
]
export default function User(){
    const {devices} = useWindowState();
    if(devices.isDesktop){
        return <User.Pc/>;
    }else{
        return <User.Mobile/>;
    }
}
User.Pc = function({LeftMenuWidth=178,containerClass=mainContent}){
    return <>
        <section className={cn('flex',containerClass,'bg-white')}>
            <section style={{flexGrow:0,flexShrink:0,flexBasis:LeftMenuWidth+'px'}}>
                <Navigation items={items}/>
            </section>
            <section style={{flexGrow:1,flexShrink:0}}>
                <h1>Right View Area</h1>
            </section>
        </section>
    </>;
}
User.Mobile = function(){
    return <h1>Mobile</h1>;
}