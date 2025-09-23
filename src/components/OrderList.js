import React from 'react';
import {Input} from '@com';
import image from "@img";
import {Button} from "@com";
import styled from 'styled-components';
import SvgIcon from '@img/icons/SvgIcon';
//import {useWindowState} from "@caveats/externalStore";
export const StyledOrderList = styled(OrderList).attrs(props=>({
    devices:props.devices??{isDesktop:true}
}))`
    >div:nth-of-type(1)>ul:nth-of-type(1){
        list-style-type:none;
        display:flex;
        flex-flow:${props=>props.devices.isDesktop?'row nowrap':'column nowrap'};
    }
    >div:nth-of-type(1)>ul:nth-of-type(1)>li:not(div:nth-of-type(1)>ul:nth-of-type(1)>li:nth-of-type(1)){
        flex:1 1 18%;
    }
    >div:nth-of-type(1)>ul:nth-of-type(1)>li:nth-of-type(1){
        flex-grow:2 !important;
        flex-shrink:0 !important;
        flex-basis:55%;
        justify-content:space-between;
    }
    >div:nth-of-type(1)>ul>li{
        font-size:1.3rem;
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        flex-basis:calc(100% / 6);
        justify-content:center;
        ${props=>props.devices.isDesktop?null:'margin:0.8rem 0rem;'}
    }
    >div>ul>li:nth-of-type(1){
        flex-grow:1;
        flex-shrink:0;
    }
     >div>ul>li:nth-of-type(1)>p>input{
        background:none;
        background-color:transparent;
        min-width:150px;
     }
    >div>ul>li>select{
        border:none;
        background:transparent;
        outline:none;
        border-bottom:1px solid ${props=>props.theme.disabledColor};
    }
    >div:nth-of-type(1)>ul>li:nth-of-type(2){
        flex-grow:1;
        flex-shrink:0;
    }

    >div:nth-of-type(2)>div{
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
    }
    >div:nth-of-type(2)>ul{
        list-style-type:none;
    }
    >div:nth-of-type(2)>div:nth-of-type(1){
        background:${props=>props.theme.containerBgColor};
        padding:0.8rem;
    }
    >div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div{
        display:flex;
        flex-flow:${props=>props.devices.isDesktop?'row wrap':'column wrap'};
        gap:0.8rem;
        font-size:1.4rem;
        align-items:flex-start;
    }
`;

function OrderList({className,devices}){
    //const {devices} = useWindowState();
    return <div className={className}>
        <div>
            <ul className="solid-bottom">
                <li>
                    <Input type="date" name="from" bgColor="none"/> to <Input type="date" name="to" bgColor="none"/>
                    {devices.isDesktop?<p>订单详情</p>:null}
                </li>
                {devices.isDesktop?
                    <>
                        <li>收货人</li>
                        <li>金额</li>
                    </>
                :null}
                
                <li><select name="status" className="padding-sm">
                        <option>全部状态</option>
                        <option>等待付款</option>
                        <option>等待收货</option>
                        <option>已完成</option>
                        <option>已取消</option>
                    </select></li>

                {devices.isDesktop?<li>操作</li>:null}
            </ul>
        </div>
        {Array.from({length:3}).map((v,i)=><Order devices={devices} className="margin-top solid-bottom" key={i}/>)}
    </div>
}
const StyledOrder = styled.div.attrs(props=>({
    devices:props.$devices??{isDesktop:true}
}))`

.product-item{
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};

}
.product-item:not(:last-child){
    ${props=>props.devices.isDesktop?'border-bottom:1px solid' + props.theme.containerBgColor + ';':'border-right:1px solid '+ props.theme.containerBgColor + ';'}
    ${props=>props.devices.isDesktop?'padding-bottom:0.8rem;':'padding-right:0.8rem;'}
}
.product-item>div:nth-of-type(1){
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
}
.product-item>div:nth-of-type(1)>p:nth-of-type(1){
    width:83px;
    height:83px;
    overflow:hidden;
    border-radius:0.8rem;
}
.product-item>div:nth-of-type(1)>p:nth-of-type(2){
    width:40%;
    height:fit-content;
    overflow:hidden;
}
.product-item>div:nth-of-type(1)>p:nth-of-type(1)>img{
    width:100%;
    vertical-align:center;
}
&>ul{
    padding-top:0.8rem;
    padding-bottom:0.8rem;
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
}
&>ul>li:not(&>ul>li:nth-of-type(1)){
    flex:1 1 18%;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    gap:0.8rem;
}
&>ul>li:nth-of-type(1){
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?'column nowrap':'row nowrap'};
    flex-grow:2 !important;
    flex-shrink:0 !important;
    flex-basis:55%;
    gap:0.8rem;
    
}
${props=>props.$devices.isDesktop?null:`
    &>ul>li:nth-of-type(1){
        border-bottom:1px solid ${props.theme.containerBgColor};
        overflow-x:scroll;
    }
    &>ul>li:nth-of-type(1)>div{
        width:calc(100vw/3);
    }
    &>ul>li:nth-of-type(1)>div{
        display:flex;
        flex-flow:column nowrap;
        align-items:center;
        justify-content:center;
    }
    &>ul>li:nth-of-type(1)>div>div:nth-of-type(1){
        display:flex;
        flex-flow:column nowrap;
        align-items:center;
        justify-content:center;
    }
    &>ul>li:nth-of-type(1)>div>div:nth-of-type(1)>p:nth-of-type(2){
        width:100%;
        margin-top:0.8rem;
        margin-bottom:0.8rem;
    }
    &>ul>li:nth-of-type(1)>div>div:nth-of-type(2){
        width:100%;
        padding-bottom:0.8rem;
        text-align:right;
    }
    &>ul>li:not(:first-child){
        font-size:1.5rem;
        padding-top:0.8rem;
        padding-bottom:0.8rem;
        flex-flow:row wrap !important;
        justify-content:space-between;
    }
`}
>div{
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    background: #e5e5e5;
    padding: 0.8rem;
}
>div>div:nth-of-type(1)>div{
        display:flex;
        flex-flow:${props=>props.devices.isDesktop?'row wrap':'column wrap'};
        gap:0.8rem;
        font-size:1.4rem;
        align-items:flex-start;
}
`;
function Order({className,devices}){
    return <StyledOrder className={className} $devices={devices}>
            <div>
                <div>
                    <div>
                        <p>2025-09-12 11:09:21</p>
                        <p>订单号：336792767500</p>
                        <p>老长沙家常菜·无预制菜（大沙地店）</p>
                    </div>
                </div>
                <div>
                    <SvgIcon icon="delete" width="22" height="22" strokeWidth="1"/>
                </div>
            </div>
            <ul>
                <li>
                        {Array.from({length:3}).map((v,i)=><div className="product-item" key={i}>
                            <div>
                                <p><img src={image['example']} alt=""/></p>
                                <p className="twoLineTxt padding-lr-sm">晨光(M&G)按动中性笔k35中性笔按动办公专用黑色签字经典商务笔中性笔考试专用黑笔刷</p>
                            </div>
                            <div><p>x1</p></div>
                        </div>)}
                </li>
                <li>
                    <p>张嘤嘤</p>
                </li>
                <li>
                    <p>信用卡支付</p>
                    <p>$13.80</p>
                </li>
                <li>
                    <p>已完成</p>
                    <p>订单详情</p>
                </li>
                <li>
                    <p>
                        评价
                    </p>
                    <Button size="small" ghost>确认收货</Button>
                </li>
            </ul>
        </StyledOrder>;
}