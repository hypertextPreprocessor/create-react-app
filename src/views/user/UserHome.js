import React from 'react';
import cn from "classnames";
import styled from 'styled-components';
import image from "@img";
import SvgIcon from "@img/icons/SvgIcon";
import { useNavigate } from "react-router";
export const StyledUserHome = styled(UserHome).attrs({title:''})`

    background:${props=>props.theme.containerBgColor};
    >div{
        width:96%;
        margin:0 auto;    
    }
    & .avtar{
        width:48px;
        height:48px;
        border-radius:48px;
        overflow:hidden;
    }
    & .avtar>img{
        width:100%;
        vertical-align:center;
    }
    & .avtarCon{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;


    }
    & .UserCon{
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
    }
    .user_assets>div{
        flex-basis:25%;
        flex-grow:1;
        flex-shrink:0;
        gap:1.2rem;
        text-align:center;
        cursor:pointer;
    }
    .func_area>div{
        flex-basis:20%;
        flex-shrink:1;
        flex-grow:1;
        gap:1.2rem;
        text-align:center;
        cursor:pointer;
        padding-top:1rem;
    }
    .func_area>div:hover p:nth-of-type(1)>svg g{
        stroke:red;
        color:red;
    }
    .func_area>div>p:nth-of-type(1){
        position:relative;
    }
    .func_area>div>p:nth-of-type(1)>span{
        font-size:1.2rem;
        background-color:${props=>props.theme.tarifaColor};
        color:#fff;
        padding:0.1rem;
        border-radius:1rem;
        box-shadow:1px 1px 2px 1px #bdbdbd;
        position:absolute;
        left:calc(50% + 1.2rem);
        min-width:15px;
    }
    .func_area>div:hover p:nth-of-type(2){
        color:${props=>props.theme.tarifaColor};
    }
    .func_area>div:hover p:nth-of-type(1)>svg.fill g{
        fill:${props=>props.theme.tarifaColor};
    }
    .list{
        padding-top:1.6rem;
        border-bottom:1px solid #dedede;
        padding-bottom:1.6rem;
    }
    .list>div>div:nth-of-type(1)>p{
        width:80px;
        height:80px;
        overflow:hidden;
        border-radius:0.3rem;
    }
    .list>div>div:nth-of-type(1)>p>img{
        width:100%;
        vertical-align:center;
    }
    .list>div{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        gap:1.6rem;
    }
    .list>div>div:nth-of-type(2){
        overflow:hidden;
    }
    .list>div>div:nth-of-type(2)>p:nth-of-type(1){
        font-size:1.5rem;
        padding-bottom:0.4rem;
    }

`;
function UserHome({className,type}){
    const navigate = useNavigate();
    return <div className={className}>
        <div>
            <div className={cn('padding-sm','radius','bg-white')}>
                <div className={cn('UserCon')}>
                    <div className={cn('avtarCon')} onClick={()=>{navigate('/user/user-info')}}>
                        <div><p className={cn('avtar')}><img src={image['cantingsumiao']} alt=""/></p></div>
                        <div className={cn('user_name','margin-left')}>
                            <h2 className="text-xl">User name</h2>
                            <p>金牌会员</p>
                        </div>
                    </div>
                    <div>勋章</div>
                </div>
                <div className={cn('user_assets','flex')}>
                    <div>
                        <p className="text-xl padding-tb-sm">21</p>
                        <p className="text-df">优惠券</p>
                    </div>
                    <div>
                        <p className="text-xl padding-tb-sm">21</p>
                        <p className="text-df">礼品卡</p>
                    </div>
                    <div>
                        <p className="text-xl padding-tb-sm">66</p>
                        <p className="text-df">折扣券</p>
                    </div>
                </div>
            </div>
            <div className="margin-top radius bg-white padding-sm">
                <h1 className="solid-bottom padding-bottom-sm text-xl">我的订单</h1>
                <div className={cn('flex','align-center','func_area','padding-tb-df','solid-bottom')}>
                    <div>
                        <p><SvgIcon icon="pay_pending" width="26" height="26" strokeWidth={42}/><span>12</span></p>
                        <p className="text-lg padding-tb-sm">待付款</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="delivery" width="26" height="26" /><span>8</span></p>
                        <p className="text-lg padding-tb-sm">待收货</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="comment_rate" width="26" height="26" strokeWidth={30}/></p>
                        <p className="text-lg padding-tb-sm">待评价</p>
                    </div>
                    <div>
                        <p><SvgIcon className="fill" icon="refund" width="26" height="26" fill="#000"/><span>1</span></p>
                        <p className="text-lg padding-tb-sm">退换/售后</p>
                    </div>
                    <div>
                        <p><SvgIcon className="fill" icon="collapse_all" width="26" height="26" fill="#000" /></p>
                        <p className="text-lg padding-tb-sm">全部</p>
                    </div>
                </div>
                <div>
                        
                </div>
            </div>
            <div className="margin-top radius bg-white padding-sm">
                {Array.from({length:3}).map((v,i)=><div key={i} className={cn('list')}>
                    <div>
                        <div>
                            <p><img src={image['example']} alt=""/></p>
                        </div>
                        <div>
                            <p className="oneLineTxt">订单已送达,您的快递已暂存至DHL快递【005】柜</p>
                            <p><span>普通快递</span>|<span>2025-09-11 12:46:55</span></p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}