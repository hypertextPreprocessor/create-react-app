import React,{ useEffect, useRef,useState} from 'react';
import {createPortal} from "react-dom";
import styled from 'styled-components';
import {Input,StyledOrderList} from "@com";
import SvgIcon from "@img/icons/SvgIcon";
import {useWindowState} from "@caveats/externalStore";
export const StyledMyOrder = styled(MyOrder)`
    width:96%;
    margin:0 auto;
    .orderTab{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between;
    }
    .orderTab>div:nth-of-type(1){
        display:flex;
        flex-flow:row nowrap;
        gap:1.2rem;

    }
    .orderTab>div:nth-of-type(1)>p{
        cursor:pointer;
    }
    .orderTab>div:nth-of-type(1)>p.active{
        color:${props=>props.theme.tarifaColor};
        border-bottom:1px solid ${props=>props.theme.tarifaColor};
    }
    .orderTab>div:nth-of-type(1)>p:hover{
        color:${props=>props.theme.tarifaColor};
    }
`;
function MyOrder({className}){
    const titleRef = useRef(null);
    const tabRef = useRef(null);
    const {devices} = useWindowState();
    const [mouted,setMounted] = useState(false);
    useEffect(()=>{
        if(titleRef.current && tabRef.current){
            setMounted(true);
        }
    },[mouted]);
    return <div className={className}>
        <div className="radius padding-sm solid-bottom bg-white titleRef" ref={titleRef}>
            <h1 className="text-lg">我的订单</h1>

        </div>
        <div className="orderContainer margin-top bg-white raidus">
            <div className="orderTab padding-sm" ref={tabRef}>
                <div>
                    <p className="active">全部订单</p>
                    <p>待付款</p>
                    <p>待收货/使用</p>
                    <p>待评价</p>
                </div>
                {mouted?
                    createPortal(
                        <div>
                            <Input type="text" suffix={<SvgIcon icon="search" width="22" height="22"></SvgIcon>}/>
                        </div>,
                        devices.isDesktop?tabRef.current:titleRef.current
                    ):<p>无法渲染</p>
                }
            </div>
             <div className="padding-sm bg-white">
                <StyledOrderList devices={devices} example="lin"/>
            </div>
        </div>
    </div>
}