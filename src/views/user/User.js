import React from 'react';
import {Navigation} from "@com";
import cn from "classnames";
import {useWindowState} from "@caveats/externalStore";
import {mainContent} from "@css/header.module.css";
import { Outlet } from 'react-router';
import {userMenu} from "@router/menu.js";
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
                <Navigation items={userMenu} expandAll={true}/>
            </section>
            <section style={{flexGrow:1,flexShrink:0}}>
                <Outlet/>
            </section>
        </section>
    </>;
}
User.Mobile = function(){
    return <>
        <p className="margin-top"></p>
        <Outlet/>
    </>;
}
