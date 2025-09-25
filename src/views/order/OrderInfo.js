import React from 'react';
import styled from 'styled-components';
import {NavBack,Button} from "@com";
import {Steps} from "@com";
import SvgIcon from "@img/icons/SvgIcon";
import {useWindowState} from "@caveats/externalStore";
import image from "@img";
import { useNavigate } from 'react-router';
/*
订单详情
*/
const StyledOrderInfo = styled.div`
width:96%;
margin:0 auto;
>div:not(:first-child){
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
    .devInfo{
    
    }
    .devInfo>div{
        
    }
    .productImg{
        border-radius:0.4rem;
        overflow:hidden;
        max-width:120px;
    }
    .productImg>img{
        width:100%;
        vertical-align:middle;
    }
    .devInfo_left{
        padding-bottom:1.2rem;
        display:flex;
        flex-flow:row nowrap;
        gap:1.2rem;
        border-bottom:1px solid ${props=> props.theme.containerBgColor};    
        
    }
    .devInfo_left>div:nth-of-type(1){
        flex:1 1 40%;
    }
    .devInfo_left>div:nth-of-type(2){
        flex:1 1 60%;
    }
    .devInfo_right_progress{
        display:flex;
        flex-flow:row nowrap;
        align-items:flex-top;
        padding:2rem 0rem;
    }
    .devInfo_right_progress>div:nth-of-type(1){
        flex:1 1 20%;
        text-align:right;
    }
    .devInfo_right_progress>div:nth-of-type(3){
        flex:1 1 80%;
    }
    .devInfo_right_progress>div:nth-of-type(3)>h3{
        line-height:2.3rem;
    }
    .devInfo_right_progress>div:nth-of-type(3)>p{
        font-size:1.2rem;
    }
    .devInfo_right_progress>div:nth-of-type(2){
        text-align:center;
        display:flex;
        flex-flow:column nowrap;
        align-items:center;
    }
    .devInfo_right_progress>div:nth-of-type(2)>hr{
        border:none;
        width:1px;
        height:100%;
        background:red;
    }
    .user_dev_spec{
        width:100%;
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?'row nowrap':'column nowrap'};
    }
    .user_dev_spec>div{
        flex:1 0 33.33%;
    }
    .form_item{
        display:flex;
        flex-flow:row nowrap;
        margin:1.2rem 0rem;
    }
    .form_item .form_label{
        flex:0 0 90px;
    }
    .form_item .form_value{
        flex:1 1 auto;
    }
    .user_dev_spec h3{
        line-height:2.5rem;
    }
    .user_dev_spec>div>div{
        padding:0.8rem;
        height:-webkit-fill-available;
    }
    .user_dev_spec>div:not(:last-child)>div{
        ${props=>props.$devices.isDesktop?`
                border-right:1px solid ${props.theme.containerBgColor};
            `:`
                border-bottom:1px solid ${props.theme.containerBgColor};
            `}
        
    }
`;
export default function OrderInfo({iconSize=55}){
    const {devices} = useWindowState();
    const navigate = useNavigate();
    function toComment(){
        navigate('/user/user-comment-create');
    }
    return <StyledOrderInfo $devices={devices}>
        <NavBack />
        <div className="bg-white padding-sm radius margin-top">
            <div className="headtop">
                <p>订单号：336262079784</p>
                <h1>完成</h1>
                <Button onClick={toComment}>评价</Button>
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
        <div className="margin-top bg-white radius padding-sm">
            <div className="flex devInfo">
                <div>
                        <div className="devInfo_left">
                            <div className="productImg"><img src={image['example']} alt=""/></div>
                            <div>
                                <p>送货方式：快递运输</p>
                                <p>承运人：邮政速递包裹</p>
                                <p>承运人电话：11183</p>
                                <p>货运单号：9831560099590</p>
                            </div>
                        </div>
                        <div className="devInfo_right">
                            <div className="devInfo_right_progress">
                                <div>2025-09-09/周二20:19:12</div>
                                <div><SvgIcon icon="tick" width="22" height="22" strokeWidth="1" /><hr/></div>
                                <div>
                                    <h3>已签收取件码 61711602</h3>
                                    <p>[广州市]您的快件已取走【新都盛世名门世泽轩7栋架空层丰巢柜】，如有疑问请电联快递员【电话:13760643309】，揽投部【电话:18124937956】，投诉电话【电话:18124937956】。有事呼叫我，少一次投诉，多一份感恩。中国邮政将全心呵护您的所托，监督电话11183。</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div></div>
            </div>
        </div>
        <div className='margin-top bg-white radius padding-sm'>
            <div className="user_dev_spec">
                <div>
                    <div>
                        <h3>收货人信息</h3>
                        <div className="form_item">
                            <p className="form_label">收货人：</p>
                            <p className="form_value">汤蔺</p>
                        </div>
                        <div className="form_item">
                            <p className="form_label">地址：</p>
                            <p className="form_value">广东广州市增城区新塘镇东进东路8号新都盛世名门世泽轩-3栋1202</p>
                        </div>
                        <div className="form_item">
                            <p className="form_label">手机号码：</p>
                            <p className="form_value">+861856220010</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>配送信息</h3>
                        <div className="form_item">
                            <p className="form_label">配送方式：</p>
                            <p className="form_value">快递运输</p>
                        </div>
                        <div className="form_item">
                            <p className="form_label">期望送货日期：</p>
                            <p className="form_value">工作日、双休日与节假日均可送货</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>付款信息</h3>
                        <div className="form_item">
                            <p className="form_label">付款方式：</p>
                            <p className="form_value">在线支付</p>
                        </div>
                        <div className="form_item">
                            <p className="form_label">付款时间：</p>
                            <p className="form_value">2025-09-06 09:25:11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </StyledOrderInfo>
}