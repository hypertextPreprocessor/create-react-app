import React, { useState } from 'react';
import {Button} from "@com";
import styled from 'styled-components';
import image from "@img";
import {useWindowState} from "@caveats/externalStore";
const StyledCart = styled.div`
    .shopName{
        padding:1.3rem 0;
    }
    >div.head>div,.product_item>div>div.shopName{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        gap:1.2rem;
    }
    >div.head>div>p,.product_item>div>div>p{
        font-size:1.5rem;
    }
    >div.head>div>p>input,.product_item>div>div>p>input{
        width:22px;
        height:22px;
        vertical-align:bottom;
        margin-right:1rem;
    }
    .product_item{
        width:98%;
        margin:1.2rem auto;
        padding:0.5rem;
    }
    .shopItem{
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
        gap:1.2rem;
        ${props=>props.$devices.isDesktop?`
            align-items:flex-end;
        `:null}
    }
    .shopItem>div:nth-of-type(1){
        display:flex;
        flex-flow:row nowrap;
        gap:1.2rem;
        ${props=>props.$devices.isDesktop?`
            flex:4;
        `:null}
    }
    .shopItem>div:nth-of-type(2){
        display:flex;
        flex-flow:row nowrap;
        /*width:calc(100% - 1.2rem * 2);*/
        align-items:center;
        justify-content:space-between;
        padding:0 1.2rem;
        ${props=>props.$devices.isDesktop?`
            flex:1;
        `:null}
    }
    .shopItem>div:nth-of-type(3){
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between; 
        ${props=>props.$devices.isDesktop?`
            flex:1;
        `:null}
    }
    .shopItem>div:nth-of-type(2)>div:nth-of-type(1)>input{
        width:55px;
        padding:0.3rem;
        text-align:center;
        margin:0.3rem;
    }
    .shopItem>div:nth-of-type(1)>div:nth-of-type(1){
        position:relative;
        max-width:90px;
        border-radius:0.8rem;
        overflow:hidden;
        flex:1 1 20%;
    }
    .shopItem>div:nth-of-type(1)>div:nth-of-type(2){
        flex:1 1 80%;
    }
    .shopItem>div:nth-of-type(1)>div:nth-of-type(1)>img{
        width:100%;
        height:100%;
        vertical-align:middle;
    }
    .shopItem>div:nth-of-type(1)>div:nth-of-type(1)>input{
        position:absolute;
        top:5px;
        left:5px;
        width:22px;
        height:22px;
        opacity:0.5;
        cursor:pointer;
    }
    >.foot{
        background:#fff;
        padding:1.2rem;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
    }
    >.foot>div:nth-of-type(1){
        flex:1;
    }
     >.foot>div:nth-of-type(2){
        flex:3;
        justify-content:flex-end;
        gap:1.2rem;
    }
    >.foot>div:nth-of-type(2){
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
    }
    >.foot>div:nth-of-type(2)>div:nth-of-type(1){
        display:flex;
        flex-flow:column nowrap;
    }
    >.foot>div:nth-of-type(2)>div:nth-of-type(1)>div{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between;
        gap:1.2rem;
    }
    .product_list>div>div>div.shopItem + .shopItem{
        border-top:1px solid ${props=>props.theme.containerBgColor};
        margin-top:1.2rem;
        padding-top:1.2rem;
    }
`;
export default function Cart(){
    const {devices} = useWindowState();
    const [allChecked,setAllChecked] = useState(false);
    function setChecked(){
        setAllChecked(!allChecked);
    }
    return <StyledCart $devices={devices}>
        <div className="head">
            <div className="padding-sm">
                <p onClick={setChecked}><input type="radio" checked={allChecked} name="allchecked"/> 全选</p>
                <Button type="default">删除</Button>
            </div>
        </div>
        <div className="product_list">
            {Array.from({length:6}).map((v,i)=>            
            <div className="product_item bg-white radius" key={i}>
                <div>
                    <div className="shopName">
                        <p><input type="radio" name="shopChecked"/>斯纳恩（Snaen）京东自营旗舰店</p>
                    </div>
                    <div className="shopItem">
                        <div>
                            <div>
                                <input type="radio" name="productCheck"/>
                                <img src={image['example']} alt=""/>
                            </div>
                            <div>
                                <h3>得力（deli）0.5按动中性笔芯替芯学生中性笔替芯签字笔芯 S01/S08/1008/K35适用同G-5 黑色子弹头20支/盒 S782</h3>
                                <p>【基础款】黑色-0.5mm子弹头20支</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Button type="default" size="small">-</Button>
                                <input type="text" name="num" value={"1"}/>
                                <Button size="small">+</Button>
                            </div>
                            <div className="priceTag"><span>$</span><span>99</span><sup>98</sup></div>
                        </div>
                        <div>
                            <Button type="plain">收藏</Button>
                            <Button ghost>删除</Button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        <div className="foot">
            <div>已选0件商品</div>
            <div>
                <div>
                    <div>合计:<p className="priceTag"><span>$</span><span>199</span><sup>69</sup></p></div>
                    <div><p>商品总额:$200.69</p><p>共减:$2.91</p><p>优惠明细</p></div>
                </div>
                <div><Button>结算</Button></div>
            </div>
        </div>
    </StyledCart>
}

