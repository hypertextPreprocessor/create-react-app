import React from 'react';
import styled from 'styled-components';
import image from "@img";
import {RatingStar,Form ,FormItem, Button, NavBack} from "@com";
import SvgIcon from "@img/icons/SvgIcon";
import {useWindowState} from "@caveats/externalStore";
const StyledComment = styled.div`
    width:96%;
    margin:0 auto;
.shopDiv{
    display:flex;
    flex-flow:${props=>props.$devices.isDesktop?"row wrap":"column wrap"};
    gap:1.2rem;
}
.shopHeadImg{
    width:${props=>props.$devices.isDesktop?"85px":'calc(100vw / 6)'};
    height:${props=>props.$devices.isDesktop?"85px":'calc(100vw / 6)'};
    border-radius:${props=>props.$devices.isDesktop?"85px":'calc(100vw / 6)'};
    overflow:hidden;
}
.shopDiv>div:nth-of-type(1){
    display:flex;
    gap:1.2rem;
}
.shopHeadImg>img{
    width:100%;
    vertical-align:center;
}
.shopTitle{
    display:flex;
    flex-flow:column nowrap;
    align-items:flex-start;
    justify-content:space-between;
    padding:1.2rem 0;
}
.shopTitle>p{
    font-size:1.6rem;
}
.shopTitle>ul{
    list-style-type:none;
    display:flex;
    flex-flow:row nowrap;
    gap:1.2rem;
}
.shopTitle>ul>li{
    text-align:center;
}
.shopTitle>ul>li>p:nth-of-type(1){
    font-size:1.3rem;
}
.shopTitle>ul>li>p:nth-of-type(2){
    fong-size:1rem;
}
.shop-rating{
    ${props=>props.$devices.isDesktop?`
        border-left:1px solid ${props.theme.containerBgColor};
        padding-left:1.2rem;
        `:`
        border-top:1px solid ${props.theme.containerBgColor};
        padding-top:1.2rem;
        `}
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:70%;
    gap:1.2rem;
}
.shop-rating>div{
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
    gap:1.2rem;
    flex-basis:220px;
    flex-grow:0;
    flex-shrink:0;
}
.shop-rating>div>p:nth-of-type(1){
    font-size:1.3rem;
    flex:1;
}
.shop-rating>div>p:nth-of-type(2){
    flex:1;
}
.clist>div:not(:last-child){
        border-bottom:1px solid ${props=>props.theme.containerBgColor};
        padding-bottom:1.2rem;
        padding-top:1.2rem;
}
.clist>div:is(:last-child){
        padding-top:1.2rem;
}
`;
export default function Comment(){
    const {devices} = useWindowState();
    return <StyledComment $devices={devices}>
        <NavBack />
        <div className="margin-top bg-white padding-sm radius">
            <div className="shopDiv">
                <div>
                    <div className="shopHeadImg"><img src={image['example']} alt=""/></div>
                    <div className="shopTitle">
                        <p>陈记麻辣香锅连锁</p>
                        <ul>
                            <li><p>综合</p><p>5</p></li>
                            <li><p>商品</p><p>5</p></li>
                            <li><p>服务</p><p>5</p></li>
                            <li><p>物流</p><p>5</p></li>
                        </ul>
                    </div>
                </div>
                <div className="shop-rating">
                    <div><p>商品符合度</p><RatingStar /></div>
                    <div><p>店家服务态度</p><RatingStar /></div>
                    <div><p>快递配送速度</p><RatingStar /></div>
                    <div><p>快递员服务</p><RatingStar /></div>
                    <div><p>快递包装</p><RatingStar /></div>
                </div>
            </div>
        </div>
        <div className="clist margin-top bg-white padding-sm radius">
            {Array.from({length:3}).map((v,i)=><CommentProductList key={i}/>)}
        </div>
        <div class="padding-sm flex align-center justify-center bg-white margin-top radius"><Button size="large">submit</Button></div>
    </StyledComment>;
}
const StyledCommentProductList = styled.div`
    ul{
        list-style-type:none;
        display:flex;
        flex-flow:column nowrap;
    }
    ul>li{
        display:flex;
        flex-flow:${props=>props.$devices.isDesktop?"row nowrap":"column nowrap"};
        gap:1.2rem;
    }
    .productBrief{
        display:flex;
        flex-flow:column nowrap;
        align-items:center;
        flex:0 0 20%;
    }
    .productBrief>p:nth-of-type(2){
        font-size:1.2rem;
        padding-top:0.8rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
    }  
    .productBrief>p:nth-of-type(3){
        font-size:1rem;
        color:${props=>props.theme.disabledColor};
        padding-top:0.8rem;
        padding-bottom:0.8rem;
    }
    .productBrief>p:nth-of-type(1){
        width:calc(100vw / 4);
        max-width:120px;
        border-radius:0.5rem;
        overflow:hidden;
    }
    .productBrief>p:nth-of-type(1)>img{
        width:100%;
        vertical-align:middle;
    }
    .commentBrief>div:nth-of-type(1){
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        gap:1.2rem;
        color:${props=>props.theme.starBgColor};
    }
    .commentBrief{
        flex:1 1 100%;
    }
    .form>div{
        display:flex;
        flex-flow:row nowrap;
        
    }
    .form>div *:nth-child(1){
        flex:0 1 220px;
    }       
    .form>div *:nth-child(2){
        flex:1 1 100%;
    }
    .sendimgcon>p{
        display:flex;
        flex-flow:column nowrap;
        align-items:center;
        cursor:pointer;

    }
`;
function CommentProductList(){
    const {devices} = useWindowState();
    return <StyledCommentProductList $devices={devices}>
        <ul>
            <li>
                <div className="productBrief solid-right">
                    <p><img src={image['example']} alt=""/></p>
                    <p>晨光(M&G)按动中性笔k35中性笔按动办公专用黑色签字经典商务笔中性笔考试专用黑笔刷题笔0.5mm教师笔 混色3支【加笔芯10黑10红10蓝】</p>
                    <p>混色3支【加笔芯10黑10红10蓝】</p>
                </div>
                <div className="commentBrief">
                    <div>
                        <p><SvgIcon icon="info" width="18" height="18" strokeWidth="3" /></p>
                        <p>请至少填写一件商品的评价</p>
                    </div>
                    <Form layout={devices.isDesktop?"horizontal":"vertical"}>
                        <FormItem label="商品评分" name="pin">
                            <RatingStar/>
                        </FormItem>
                        <FormItem label="评价晒单" name="commenttext">
                            <textarea autocomplete='true' wrap="off"  rows="8" className="padding-sm"  style={{width:'100%',minHeight:'55px'}}/>
                        </FormItem>
                    </Form>
                    <div className="sendimgcon flex justify-evenly">
                        {devices.isDesktop?<p><SvgIcon icon="pc" strokeWidth="5" width="22"/><span>电脑传图</span></p>:null}
                        <p><SvgIcon icon="mobile" strokeWidth="2" width="22"/><span>手机传图</span></p>
                    </div>
                </div>
            </li>
        </ul>
    </StyledCommentProductList>
}