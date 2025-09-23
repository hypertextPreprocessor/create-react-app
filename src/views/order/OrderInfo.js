import React from 'react';
import styled from 'styled-components';
import {NavBack,Button} from "@com";
import {Steps} from "@com";
import SvgIcon from "@img/icons/SvgIcon";
import {useWindowState} from "@caveats/externalStore";
/*
订单详情
*/
const StyledOrderInfo = styled.div`
width:96%;
margin:0 auto;
>div{
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
    align-items:center;
}
.headtop>*{
    padding:0.8rem;
}
.headtop{
    
    
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
    ${props=>props.$devices.isDesktop?`
        width:20%;
        min-width:177px;
        border-right:1px solid ${props.theme.containerBgColor};
    `:`
        padding:1rem 0rem;
        width:100%;
        border-bottom:1px solid ${props.theme.containerBgColor};
    `}
}
`;
export default function OrderInfo({iconSize=55}){
    const {devices} = useWindowState();
    return <StyledOrderInfo $devices={devices}>
        <NavBack />
        <div className="bg-white padding-sm radius margin-top">
            <div className="headtop">
                <p>订单号：336262079784</p>
                <h1>完成</h1>
                <Button>评价</Button>
            </div>
            <Steps layout={devices.isDesktop?'horizontal':'vertical'} style={{flex:1}} cosas={[{
                title:"提交订单",
                icon:<SvgIcon icon="submit_order" width={iconSize} height={iconSize} strokeWidth="1"/>
            },{
                title:"商品出库",
                icon:<SvgIcon icon="delivery" width={iconSize} height={iconSize} strokeWidth="8"/>
            },{
                title:"等待收货",
                icon:<SvgIcon icon="receive" width={iconSize} height={iconSize} strokeWidth="13"/>
            },{
                title:"完成",
                icon:<SvgIcon icon="tick" width={iconSize} height={iconSize} strokeWidth="1"/>
            }]}/>
        </div>
    </StyledOrderInfo>
}