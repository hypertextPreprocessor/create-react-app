import React from 'react';
import styled from 'styled-components';
import image from "@img";
import {Button} from "@com";
import {useWindowState} from "@caveats/externalStore";
import { useNavigate ,useHref } from 'react-router';
const StyledUserComment = styled.div`
    width:96%;
    margin:0 auto;
    .tabCon{
        background-color:#fff;
    }
    .tab{
        list-style-type:none;
        display:flex;
        flex-flow:row nowrap;
        font-size:1.4rem;
        gap:1.2rem;
    }
    .tab>li{
        position:relative;
        cursor:pointer;
    }
    .tab>li>sup{
        font-size:1rem;
        padding:0.3rem;
        background:${props=>props.theme.tarifaColor};
        color:#fff;
        border-radius:22px;
    }
    .tab>li:hover{
        color:${props=>props.theme.tarifaColor};
    }
    .tab>li.active{
        color:${props=>props.theme.tarifaColor};
        border-bottom:1px solid ${props=>props.theme.tarifaColor};
    }
    .table-title{
        list-style-type:none;
        display:flex;
        gap:1.2rem;
    }
    .table-title>li:nth-of-type(1){
        flex:4 1 2%;
    }
    .table-title>li{
        flex:1 0 2%;
    }
`;
export default function UserComment(){
    return <StyledUserComment>
        <div className="radius padding-sm solid-bottom bg-white titleRef">
            <h1 className="text-lg">评价晒单</h1>
        </div>
        <div className="margin-top">
            <div className="tabCon radius">
                <ul className="tab padding-sm">
                    <li className="active">待评价<sup>233</sup></li>
                    <li>@/回复</li>
                    <li>已评价</li>
                </ul>
            </div>
        </div>
        <div className="bg-white">
            <ul className="table-title padding-sm">
                <li>订单详情</li>
                <li>收货人</li>
                <li>金额</li>
                <li>操作</li>
            </ul>
            {Array.from({length:3}).map((v,i)=><CommentOrderList key={i} />)}
        </div>
    </StyledUserComment>
}
const StyledCommentOrderList = styled.div`
    .product{
        list-style-type:none;
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
        gap:1.2rem;
    }
    .product>li:nth-of-type(1){
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?'column nowrap':'row nowrap'};
        overflow-x:scroll;
        gap:1.2rem;
    }
    .product>li:nth-of-type(1)>div{
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
        align-items:${props=>props.$devices.isDesktop?'flex-start':'center'};
        flex-basis:33.3%;
        flex-grow:1;
        flex-shrink:0;
        gap:1.2rem;
    }
    .product>li:nth-of-type(1)>div>p{
        flex:1 1 33.3%;
        gap:1.2rem;
        
    }
    .product>li:nth-of-type(1)>div>p:nth-of-type(1)>img{width:100%;vertical-align:center;}
    .product>li:nth-of-type(1)>div>p:nth-of-type(1){
        flex-basis:83px;
        flex-grow:0;

    }
    .product>li:not(:first-child){
       flex:1;
       display:flex;
       flex-flow:${props=>props.$devices.isDesktop?'column wrap':'row wrap'};
       align-items:center;
       justify-content:${props=>props.$devices.isDesktop?'flex-start':'space-between'};
       gap:1.2rem;
    }
`;
function CommentOrderList(){
    const navigate = useNavigate();
    let href = useHref("user-comment-create");
    function toComment(){
        navigate("/user/user-comment-create");
    }
    function goOrderInfo(){
        navigate("/user/user-order-info");
    }
    const {devices} = useWindowState();
    return <StyledCommentOrderList $devices={devices}>
        <div className="flex align-center gap-sm bg-theme padding-sm radius"><p>2025-09-15 11:25:37</p><p>订单号： 337071335943</p></div>
        <div>
            <ul className="product padding-sm">
                <li>
                    {Array.from({length:2}).map((v,i)=><div key={i}>
                        <p style={{width:'83px',height:'83px',overflow:'hidden'}} className="radius"><img src={image['example']} alt=""/></p>
                        <p className="twoLineTxt margin-tb-sm">会叫仿真猫咪情人节生日礼物送女友老婆闺蜜女孩特别玩偶仿生假猫 会叫纯白胖猫+铃铛</p>
                    </div>)}
                </li>
                <li>张嘤嘤</li>
                <li><p>支付金额</p><p className="priceTag"><span>$</span><span>99</span><sup>99</sup></p></li>
                <li>
                    <Button type="link" onClick={goOrderInfo}>订单详情</Button>
                    <Button onClick={toComment}>评价</Button>
                </li>
            </ul>
        </div>
    </StyledCommentOrderList>
}