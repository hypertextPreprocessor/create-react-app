import React from 'react';
import styled from 'styled-components';
import SvgIcon from "@img/icons/SvgIcon";
export const StyledDeliveryAddress = styled(DeliveryAddress)`
    width:96%;
    margin:0 auto;
    padding-bottom:3rem;
    >div>div{
        border:1px solid ${props=>props.theme.containerBgColor};
        box-shadow:1px 1px 1px 1px ${props=>props.theme.containerBgColor};
        padding:0.8rem;
        font-size:1.4rem;
    }
    >div>div>div:nth-of-type(1){
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between;
    }
    >div>div>div:nth-of-type(1)>p:nth-of-type(1){
        font-size:1.5rem;
        font-weight:bold;
    }
    >div>div>div:nth-of-type(1)>p:nth-of-type(1)>span:nth-of-type(2){
        margin:0 1.2rem;
    }
    >div>div>div:nth-of-type(1)>p:nth-of-type(1)>span:nth-of-type(3){
        margin:0 1.2rem;
        font-weight:normal;
        background-color:${props=>props.theme.starBgColor};
        padding:0.3rem 1.2rem;
        border-radius:0.3rem;
    }
    >div>div>div:nth-of-type(1)>p:nth-of-type(2){
        cursor:pointer;
    }
    .form-item{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        gap:1rem;
        padding:0.3rem 0rem;
    }
    .form-item>label{
        color:${props=>props.theme.disabledColor};
        padding:0 1rem;
        flex-basis:120px;

    }
    .form-item>*{
        width:100%;
        flex-grow:1;
        flex-shrink:1;
    }
    >div>div>div:nth-of-type(2){
        padding:1rem 0rem;
    }
    >div>div>div:nth-of-type(2)>div:last-child{
        padding:1rem;
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between;
    }
    >div>div>div:nth-of-type(2)>div:last-child>p{
        cursor:pointer;

    }
    >div>div>div:nth-of-type(2)>div:last-child>p:nth-of-type(1):hover,>div>div>div:nth-of-type(2)>div:last-child>p:nth-of-type(2):hover{
        color:${props=>props.theme.tarifaColor};
    }
    >div>div>div:nth-of-type(2)>div:last-child>p:nth-of-type(1):hover svg g{
        stroke:${props=>props.theme.tarifaColor};
    }
    >div>div>div:nth-of-type(1)>p:nth-of-type(1)>span:nth-of-type(2):hover svg g{
        stroke:${props=>props.theme.tarifaColor};
    }
`;
function DeliveryAddress({className}){
    return <div className={className}>
        <div>
            {Array.from({length:8}).map((v,i)=><div key={i} className="margin-top bg-white radius">
                <div className="padding-tb solids-bottom">
                    <p><span>家庭收货地址</span><span><SvgIcon style={{verticalAlign:'middle',cursor:'pointer'}} icon="setting" width="20" height="20" strokeWidth="1"/></span><span>默认地址</span></p>
                    <p><SvgIcon icon="close_cross" width="20" height="20" strokeWidth="2"/></p>
                </div>
                <div>
                    <div className="form-item">
                        <label htmlFor="name">收货人</label>
                        <div><p>汤蔺</p></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">所在地区</label>
                        <div><p>广东广州市增城区新塘镇</p></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">地址</label>
                        <div><p>东进东路8号新都盛世名门世泽轩-3栋1202</p></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">手机</label>
                        <div><p>15920419777</p></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">固定电话</label>
                        <div><p>020-83360666</p></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">邮箱</label>
                        <div><p>tanglinespanol@outlook.com</p></div>
                    </div>
                    <div><p><SvgIcon style={{marginRight:'0.8rem'}} icon="edit" width="20" height="20" strokeWidth="22"/>编辑</p><p>设为默认</p></div>
                </div>
            </div>)}
        </div>
    </div>
}