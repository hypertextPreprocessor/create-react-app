import React from 'react';
import cn from "classnames";
import styled from 'styled-components';
import image from "@img";
import SvgIcon from "@img/icons/SvgIcon";
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
        color:red;
    }
`;
function UserHome({className,type}){
    return <div className={className}>
        <div>
            <div className={cn('padding-sm','radius','bg-white')}>
                <div className={cn('UserCon')}>
                    <div className={cn('avtarCon')}>
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
                        <p><SvgIcon icon="pay_pending" width="26" height="26" strokeWidth={42} /><span>12</span></p>
                        <p className="text-lg padding-tb-sm">待付款</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="delivery" width="26" height="26" /><span>8</span></p>
                        <p className="text-lg padding-tb-sm">待收货</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="delivery" width="26" height="26" /></p>
                        <p className="text-lg padding-tb-sm">待评价</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="delivery" width="26" height="26" /><span>1</span></p>
                        <p className="text-lg padding-tb-sm">退换/售后</p>
                    </div>
                    <div>
                        <p><SvgIcon icon="delivery" width="26" height="26" /></p>
                        <p className="text-lg padding-tb-sm">全部</p>
                    </div>
                </div>
                <div>
                        
                </div>
            </div>

        </div>
    </div>
}