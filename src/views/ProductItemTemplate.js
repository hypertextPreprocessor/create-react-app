import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import cn from 'classnames';
import {SearchBar,Button,Tabs,Modal,RatingStar,PopOver,ProductGrid} from "@com";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import BigNumber from "bignumber.js";
import icon from "@img/icons";
import image from "@img";
import {mainContent} from "@css/header.module.css";
import * as styles from "@/views/css/view.module.css";
import 'react-photo-view/dist/react-photo-view.css';
export default function ProductItemTemplate(){
    const escaparateRef = useRef(null);
    const scrollViewRef = useRef(null);
    const esCoverRef = useRef(null);
    const zoomStageRef = useRef(null);
    const onStateImg = useRef(null);
    const rightConTopPartRef = useRef(null);
    const rightContentRef = useRef(null);
    const leftContentRef = useRef(null);
    const effectiveCommentRef = useRef(null);
    const modalRef = useRef(null);
    const [escaparateHeight,setEscaparateHeight] = useState(640);
    const [zoomStageWidth,setZoomStageWidth] = useState('auto');
    const [commentDetailShow,setCommentDetailShow] = useState(false);
    function scrollDown(){
        var moveArea = scrollViewRef.current.scrollHeight - scrollViewRef.current.clientHeight;
        var clientHeight = scrollViewRef.current.clientHeight;
        var currentScrollPoint = scrollViewRef.current.scrollTop;
        if(currentScrollPoint<=moveArea){
            currentScrollPoint = currentScrollPoint + clientHeight;
        }else{
            currentScrollPoint = moveArea;
        }
        scrollViewRef.current.scroll({
            top:currentScrollPoint,
            behavior: "smooth"
        })
    }
    function scrollUp(){
        var currentScrollPoint = scrollViewRef.current.scrollTop;
        var mov = 0;
        if(currentScrollPoint>=scrollViewRef.current.clientHeight){
            mov = currentScrollPoint - scrollViewRef.current.clientHeight;
        }else{
            mov = 0;
        }
        scrollViewRef.current.scroll({
            top:mov,
            behavior: "smooth"
        })
    }
    function viewThisItem(v){
        console.log(v);
    }
    function setZoomContainer(w,h,mx,my){
        let maskWidth = new BigNumber(esCoverRef.current.clientWidth);
        let maskHeight = new BigNumber(esCoverRef.current.clientHeight);
        let containerWidth = new BigNumber(w);
        let containerHeight = new BigNumber(h);
        //zoomStageWidth;
        let copulativa =  maskWidth.dividedBy(zoomStageWidth); //系数
        let stateImgWidth = containerWidth.dividedBy(copulativa);
        let stateImgHeight = containerHeight.dividedBy(copulativa);
        onStateImg.current.style.width=stateImgWidth.toNumber() + 'px';
        onStateImg.current.style.height=stateImgHeight.toNumber() + 'px';

        //橱窗处
        let maxScrollLeftEscaparate = containerWidth.minus(maskWidth);
        let maxScrollTopEscaparate = containerHeight.minus(maskHeight);
        //放大处
        let maxScrollLetStage = stateImgWidth.minus(zoomStageWidth);
        let maxScrollTopStage = stateImgHeight.minus(zoomStageWidth);
        //求系
        let copulativaX = maxScrollLeftEscaparate.dividedBy(maxScrollLetStage);
        let copulativaY = maxScrollTopEscaparate.dividedBy(maxScrollTopStage);

       

        let st = new BigNumber(mx).dividedBy(copulativaX);
        let sl = new BigNumber(my).dividedBy(copulativaY);
        zoomStageRef.current.scroll({
            top:sl.toNumber(),
            left:st.toNumber(),
            behavior:'instant'
        });
    }
    function zoomInObject(event){
        var width =event.currentTarget.clientWidth;
        var height = event.currentTarget.clientHeight;
        event.currentTarget.addEventListener('mousemove',(v)=>{
            //console.log(esCoverRef.current.clientWidth,esCoverRef.current.clientHeight);
            var centerX = esCoverRef.current.clientWidth / 2;
            var centerY = esCoverRef.current.clientHeight / 2;
            var containerX = width - centerX;
            var containerY = height - centerY;
            esCoverRef.current.style.display='block';
            let xx = v.offsetX - centerX<0?0:(v.offsetX > containerX?containerX-centerX:v.offsetX - centerX);
            let yy = v.layerY - centerY <0?0:(v.layerY > containerY?containerY - centerY:v.layerY - centerY);
            esCoverRef.current.style.left= xx + 'px';
            esCoverRef.current.style.top= yy + 'px';
            //var start = [v.offsetX,v.layerY];
            //var end = [v.offsetX+esCoverRef.current.clientWidth,v.layerY+esCoverRef.current.clientHeight];
            //var containerWidth = escaparateRef.current.clientWidth;
            //var containerHeight = escaparateRef.current.clientHeight;
            //var perX = start / containerWidth;
            //var perY = end / containerHeight;
            setZoomContainer(width,height,xx,yy);
            zoomStageRef.current.style.display = 'block';
            setZoomStageWidth(zoomStageRef.current.clientWidth);
        })
    }
    function cancelZoomOnObject(event){
        //event.currentTarget.removeEventListener('mousemove');
        zoomStageRef.current.style.display='none';
        esCoverRef.current.style.display='none';
    }
    function getLeftContainterBottomEdge(){
        let x = new BigNumber(document.documentElement.clientHeight);
        let y = new BigNumber(leftContentRef.current.clientHeight);
        let z = new BigNumber(leftContentRef.current.getBoundingClientRect().top);
        let v = x.minus(y).minus(z).toNumber();
        return v;
    }
    function adjustLeftConHeight(){
        let x = new BigNumber(document.documentElement.clientHeight);
        let y = new BigNumber(rightContentRef.current.clientHeight);
        let z = new BigNumber(rightContentRef.current.getBoundingClientRect().top);
        let v = x.minus(y).minus(z).toNumber();
        rightConTopPartRef.current.style.height=(rightConTopPartRef.current.clientHeight + v) + 'px';
    }
    var reserveWidth;
    var left;
    const lpp = useCallback((event)=>{
        leftPanelPositing(event)
    },[]);
    function leftPanelPositing(event){
        var top = escaparateRef.current.getBoundingClientRect().top;
        if(top>0){
            reserveWidth = rightContentRef.current.clientWidth;
            left = rightContentRef.current.getBoundingClientRect().left;

            rightContentRef.current.removeAttribute('style');
        }else{
            if(getLeftContainterBottomEdge()>0){
                rightContentRef.current.removeAttribute('style');
                rightContentRef.current.style.setProperty('position','absolute');
                rightContentRef.current.style.setProperty('bottom',0);
            }else{
                rightContentRef.current.style.setProperty('position','fixed');
                rightContentRef.current.style.setProperty('top',0);
                rightContentRef.current.style.setProperty('left',left+'px');
                rightContentRef.current.style.setProperty('width',reserveWidth+'px');
            }
        }
        adjustLeftConHeight();
    }
    function commentModalShow(){
        document.body.style.overflow='hidden';
        //effectiveCommentRef
        //console.log(modalRef);
        setCommentDetailShow(true);
    }
    function commentModalHide(){
        document.body.style.overflow='auto';
        setCommentDetailShow(false);
    }
    useEffect(()=>{
        if(commentDetailShow){
            let h1 = modalRef.current.querySelector(".modal-header").clientHeight;
            let h2 = modalRef.current.querySelector(".modal-footer").clientHeight;
            let hh = new BigNumber(modalRef.current.clientWidth).times(0.04);
            let maxHeight = new BigNumber(window.innerHeight).minus(h1).minus(h2).minus(hh).toNumber();
            
            modalRef.current.querySelector(".modal-content").style.setProperty('scrollbar-width','thin');
            modalRef.current.querySelector(".modal-content").style.setProperty('overflow-y','scroll');
            modalRef.current.querySelector(".modal-content").style.setProperty('max-height',maxHeight+'px');
        }
        adjustLeftConHeight();
        window.addEventListener('scroll',lpp);
        window.addEventListener('resize',lpp);
        setEscaparateHeight(escaparateRef.current.clientWidth);
        setZoomStageWidth(zoomStageRef.current.clientWidth);
        //viewerjs
        //const viewer = new Viewer()
        return ()=>{
            window.removeEventListener('scroll',lpp);
            window.removeEventListener('resize',lpp);
        }
    },[commentDetailShow,lpp]);
    function freshCommentList({event,type}){
        console.log(event.currentTarget.classList.contains(styles['active']));
        if(event.currentTarget.classList.contains(styles['active'])){
            event.currentTarget.classList.remove(styles['active']);
        }else{
            event.currentTarget.classList.add(styles['active']);
        }
    }
    return <section>
        <section className={mainContent}>
            <section className={styles["shopHeader"]}>
                <div className={styles["shopBrief"]}>
                    <p><img src={icon["logo"]} alt=""/></p>
                    <div>
                        <p>ACOTICK 玩具旗舰店<span>五星店铺</span></p>
                        <div>
                            <p>
                                <svg height="18px" width="18px" id="Layer_1" version="1.1" viewBox="0 0 512 512">
                                    <path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"/>
                                </svg>
                                <span>关注店铺</span>
                            </p>
                            <p>
                               <svg viewBox="0 0 1024 1024" width="18" height="18">
                                    <path d="M894.1 355.6h-1.7C853 177.6 687.6 51.4 498.1 54.9S148.2 190.5 115.9 369.7c-35.2 5.6-61.1 36-61.1 71.7v143.4c0.9 40.4 34.3 72.5 74.7 71.7 21.7-0.3 42.2-10 56-26.7 33.6 84.5 99.9 152 183.8 187 1.1-2 2.3-3.9 3.7-5.7 0.9-1.5 2.4-2.6 4.1-3 1.3 0 2.5 0.5 3.6 1.2a318.46 318.46 0 0 1-105.3-187.1c-5.1-44.4 24.1-85.4 67.6-95.2 64.3-11.7 128.1-24.7 192.4-35.9 37.9-5.3 70.4-29.8 85.7-64.9 6.8-15.9 11-32.8 12.5-50 0.5-3.1 2.9-5.6 5.9-6.2 3.1-0.7 6.4 0.5 8.2 3l1.7-1.1c25.4 35.9 74.7 114.4 82.7 197.2 8.2 94.8 3.7 160-71.4 226.5-1.1 1.1-1.7 2.6-1.7 4.1 0.1 2 1.1 3.8 2.8 4.8h4.8l3.2-1.8c75.6-40.4 132.8-108.2 159.9-189.5 11.4 16.1 28.5 27.1 47.8 30.8C846 783.9 716.9 871.6 557.2 884.9c-12-28.6-42.5-44.8-72.9-38.6-33.6 5.4-56.6 37-51.2 70.6 4.4 27.6 26.8 48.8 54.5 51.6 30.6 4.6 60.3-13 70.8-42.2 184.9-14.5 333.2-120.8 364.2-286.9 27.8-10.8 46.3-37.4 46.6-67.2V428.7c-0.1-19.5-8.1-38.2-22.3-51.6-14.5-13.8-33.8-21.4-53.8-21.3l1-0.2zM825.9 397c-71.1-176.9-272.1-262.7-449-191.7-86.8 34.9-155.7 103.4-191 190-2.5-2.8-5.2-5.4-8-7.9 25.3-154.6 163.8-268.6 326.8-269.2s302.3 112.6 328.7 267c-2.9 3.8-5.4 7.7-7.5 11.8z" fill="#2c2c2c" p-id="4714">
                                    </path>
                                </svg>
                                <span>联系客服</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <SearchBar />
                </div>
            </section>
            <section className={styles["Content"]}>
                <div className={styles["leftContent"]} ref={leftContentRef}>
                    <div className={styles["escaparate"]} ref={escaparateRef} style={{height:escaparateHeight}}>
                        <div>
                            <button onClick={scrollUp}>
                                <svg height="18" viewBox="0 0 48 48" width="18">
                                    <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"/><path d="M0 0h48v48h-48z" fill="none"/>
                                </svg>
                            </button>
                            <div ref={scrollViewRef}>
                                <div>
                                    {Array.from({length:20}).map((v,i)=><p key={i} onMouseEnter={()=>{viewThisItem(v)}}><img src={image["example"]} alt=""/></p>)}
                                </div>
                            </div>
                            <button onClick={scrollDown}>
                                <svg height="18" viewBox="0 0 48 48" width="18" style={{transform:'rotate(180deg)'}}>
                                    <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"/><path d="M0 0h48v48h-48z" fill="none"/>
                                </svg>
                            </button>
                        </div>
                        <div onMouseEnter={(e)=>{zoomInObject(e)}} onMouseOut={(e)=>{cancelZoomOnObject(e)}}>
                            <img src={image['CB483369110']} alt="" ref={esCoverRef}/>
                            <p><img src={image["example"]} alt=""/></p>
                        </div>
                    </div>
                    <Tabs style={{marginTop:'1.2rem'}} defaultActiveKey="0" 
                        bindScroll={true}
                        items={[{label:"大家评",key:"0",children:<h1>Hello</h1>},{label:"店铺",key:"1",children:"H2"},{label:"商品详情",key:"2",children:"H3"},{label:"售后保障",key:"3",children:"H4"},{label:"推荐","key":4,children:"H5"}]}
                    >
                       <div id="0">
                            <div className={styles['commentHead']}>
                                <p>买家评价<span>(200+)</span></p>
                                <p onClick={()=>{commentModalShow()}}>
                                    好评率高达<span>100%</span>
                                    <svg id="Layer_1" version="1.1" viewBox="0 0 50 50" width="12" height="12">
                                        <g id="Layer_1_1_">
                                            <polygon points="13.854,48.707 37.561,25 13.854,1.293 12.439,2.707 34.732,25 12.439,47.293  "/>
                                        </g>
                                    </svg>
                                </p>
                            </div>
                            <div className={styles["commentSpecifics"]}>
                                <p>材质坚固</p>
                                <p>质量好</p>
                            </div>
                            <div className={styles["commentContentExtracion"]}>
                                <div className={styles["cce-head"]}>
                                    <p><img src={icon['logo']} alt=""/></p>
                                    <p>用户昵称</p>
                                </div>
                                <div className={styles["cce-content"]}>
                                    <p>机器狗的外观萌趣可爱，材质结实耐摔。智能互动很丰富，能讲故事、做游戏，孩子的欢乐源泉，真心不错！</p>
                                    <div>
                                        {Array.from({length:9}).map((v,i)=>
                                            <p key={i} onClick={()=>{commentModalShow()}}><img src={image['example']} alt=""/></p>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="1">
                            <div className={styles["storeBriefCon"]}>
                                <h1>进店逛逛</h1>
                                <div className={styles["storeBrief"]}>
                                <div>
                                    <div><img src={icon['logo']} alt=""/></div>
                                    <div>
                                        <p>ACOTICK 玩具旗舰店</p>
                                        <p>五星店铺</p>
                                    </div>
                                </div>
                                <div>
                                    <p>商品评价<span>高</span></p>
                                    <p>物流速度<span>高</span></p>
                                    <p>客服表现<span>高</span></p>
                                </div>
                                <div>
                                    <p>
                                        <svg height="18px" width="18px" id="Layer_1" version="1.1" viewBox="0 0 512 512">
                                            <path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"/>
                                        </svg>
                                        <span>关注店铺</span>
                                    </p>
                                    <p>
                                    <svg viewBox="0 0 1024 1024" width="18" height="18">
                                            <path d="M894.1 355.6h-1.7C853 177.6 687.6 51.4 498.1 54.9S148.2 190.5 115.9 369.7c-35.2 5.6-61.1 36-61.1 71.7v143.4c0.9 40.4 34.3 72.5 74.7 71.7 21.7-0.3 42.2-10 56-26.7 33.6 84.5 99.9 152 183.8 187 1.1-2 2.3-3.9 3.7-5.7 0.9-1.5 2.4-2.6 4.1-3 1.3 0 2.5 0.5 3.6 1.2a318.46 318.46 0 0 1-105.3-187.1c-5.1-44.4 24.1-85.4 67.6-95.2 64.3-11.7 128.1-24.7 192.4-35.9 37.9-5.3 70.4-29.8 85.7-64.9 6.8-15.9 11-32.8 12.5-50 0.5-3.1 2.9-5.6 5.9-6.2 3.1-0.7 6.4 0.5 8.2 3l1.7-1.1c25.4 35.9 74.7 114.4 82.7 197.2 8.2 94.8 3.7 160-71.4 226.5-1.1 1.1-1.7 2.6-1.7 4.1 0.1 2 1.1 3.8 2.8 4.8h4.8l3.2-1.8c75.6-40.4 132.8-108.2 159.9-189.5 11.4 16.1 28.5 27.1 47.8 30.8C846 783.9 716.9 871.6 557.2 884.9c-12-28.6-42.5-44.8-72.9-38.6-33.6 5.4-56.6 37-51.2 70.6 4.4 27.6 26.8 48.8 54.5 51.6 30.6 4.6 60.3-13 70.8-42.2 184.9-14.5 333.2-120.8 364.2-286.9 27.8-10.8 46.3-37.4 46.6-67.2V428.7c-0.1-19.5-8.1-38.2-22.3-51.6-14.5-13.8-33.8-21.4-53.8-21.3l1-0.2zM825.9 397c-71.1-176.9-272.1-262.7-449-191.7-86.8 34.9-155.7 103.4-191 190-2.5-2.8-5.2-5.4-8-7.9 25.3-154.6 163.8-268.6 326.8-269.2s302.3 112.6 328.7 267c-2.9 3.8-5.4 7.7-7.5 11.8z" fill="#2c2c2c" p-id="4714">
                                            </path>
                                        </svg>
                                        <span>联系客服</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="2">
                            <div className={styles["productDetail"]}>
                                <h1>商品详情</h1>
                                <div className={styles['goods-base']}>
                                    {Array.from({length:6}).map((v,i)=>
                                        <div className={styles['item']} key={i}>
                                            <div className={styles['flex-center']}><p>品牌</p></div>
                                            <div className={styles['adaptive']}><p>AOCTIK</p></div>
                                        </div>
                                    )}
                                    <div className={cn(styles['exclusive-row'],styles['item'])}>
                                        <div className={styles['flex-center']}><p>包装清单</p></div>
                                        <div className={styles['adaptive']}><p>AOCTIK</p></div>
                                    </div>
                                </div>
                                {Array.from({length:6}).map((v,i)=><p><img style={{width:'100%',verticalAlign:'middle'}} src={image['example']} alt=''/></p>)}
                            </div>
                            
                        </div>
                        <div id="3">
                            <div className={cn(styles['afterSaleProof'],'margin-top')}>
                                <h1>售后保障</h1>
                                <div>
                                    <h1 className="padding-tb">卖家服务</h1>
                                    <div>
                                        送货上门
                                    </div>
                                    <h1 className="padding-tb">卖家承诺</h1>
                                    <div>
                                        京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
                                    </div>
                                    <h1 className="padding-tb">正品行货</h1>
                                    <div>
                                        京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="4">
                            <div>
                                <h1 className="margin-tb text-xxl">看了又看</h1>
                                <ProductGrid colNum={3}/>
                            </div>
                        </div>
                    </Tabs>
                </div>
                <div className={styles["rightContent"]} ref={rightContentRef}>
                    <div ref={zoomStageRef} style={{height:zoomStageWidth}} className={styles['zoomStage']}>
                        <p ref={onStateImg}>
                            <img src={image['example']} alt=""/>
                        </p>
                        
                    </div>
                    <div className={styles['festervial']}><p>七夕节</p><p>送礼上ejuan</p></div>
                    <div className={styles['rightConTopPart']} ref={rightConTopPartRef}>
                        <div>
                            <div className={styles["productTitleCon"]}>
                                <h1>AOCTIK德国品牌智能早教机器狗机器人儿童玩具男女孩1-3-7-13岁生日礼物 金色 豪华顶配-六一儿童节 送礼佳品</h1>
                                <p><img style={{width:'25px'}} src={icon['favourite_folder_yellow_icon']} alt=""/><span>收藏</span></p>
                            </div>
                            <div className={styles['priceCon']}>
                                <div className={styles["priceMain"]}>
                                    <div>
                                        <div>
                                            <p className="priceTag"><span>$</span><span>410</span><sup>06</sup></p>
                                            <p>到手价</p>
                                            <p>$420.26</p>
                                        </div>
                                        <p>累计评价<span>200+</span></p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 32 32" width="20" height="20">
                                            <g data-name="Layer 31" id="Layer_31" fill="var(--star-bg-color)">
                                                <path d="M27,27H5a1,1,0,0,1-.89-1.45,18.14,18.14,0,0,0,1.89-8V14a10,10,0,0,1,20,0v3.53a18.14,18.14,0,0,0,1.89,8A1,1,0,0,1,27,27ZM6.55,25h18.9A20.14,20.14,0,0,1,24,17.53V14A8,8,0,0,0,8,14v3.53A20.14,20.14,0,0,1,6.55,25Z"/>
                                                <path d="M16,31a5,5,0,0,1-5-5,1,1,0,0,1,2,0,3,3,0,0,0,.88,2.12,3.08,3.08,0,0,0,4.24,0,1,1,0,0,1,1.42,1.42A5,5,0,0,1,16,31Z"/>
                                                <path d="M16,6a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V5A1,1,0,0,1,16,6Z"/>
                                                <path d="M26,5a2,2,0,1,1,2-2A2,2,0,0,1,26,5Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"/>
                                            </g>
                                        </svg>
                                        <p>降价通知</p>
                                    </div>
                                </div>
                                <div className={styles['cupons']}>
                                    <p>满额返券</p>
                                    <p>满11减10</p>
                                    <p>最高返10</p>
                                </div>
                            </div>
                            <div className={styles["formCon"]}>
                                <div className={styles["formItem"]}>
                                    <div>送至</div>
                                    <div>
                                        <p><span>10:10前付款，预计今天（08月27日）送达</span><span>包邮</span></p>
                                        <div className={styles["addressSelect"]}>
                                            <p><span>ejuan物流</span><span>211限时达</span></p>
                                            <p>广东省广州市白云湖街道</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["formItem"]}>
                                    <div>规格</div>
                                    <div className={styles["guige"]}>
                                        <p className={styles["active"]}>
                                            <span><img src={image['55x']} alt=""/></span>
                                            <span>灰色</span>
                                        </p>
                                        <p>
                                            <span><img src={image['55x']} alt=""/></span>
                                            <span>粉色</span>
                                        </p>
                                        <p>
                                            <span><img src={image['55x']} alt=""/></span>
                                            <span>金色</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles["formItem"]}>
                                    <div>服务</div>
                                    <div className={styles["servioso"]}>
                                        <ul><li>可配送全球</li><li>7天保价</li><li>闪电退款</li><li>免费更换</li><li>售后服务</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['billout']}>
                            <div className={styles['BottomBtn']}>
                                <p>
                                    <Button ghost>-</Button><span>1</span><Button ghost>+</Button>
                                </p>
                                <p>
                                    <Button>加入购物车</Button>
                                    <Button>立即购买</Button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <Modal ref={modalRef} style={{flex:0.5}} show={commentDetailShow} title={<div>
            <p style={{fontSize:'1.8rem',fontWeight:'bold',marginBottom:'1.2rem'}}>商品评价</p>
            <div className={styles["commentpopheadtab"]}>
                <p className={styles['active']}>全部好评</p>
                <p>图/视频<span>50</span></p>
                <p>好评<span>100+</span></p>
                <p>中评<span>3</span></p>
                <p>差评<span>0</span></p>
            </div>
        </div>} onClose={()=>{commentModalHide()}}>
            <div>
                <div className={styles["commentparamsoption"]}>
                    <div>
                        <p onClick={(event)=>{freshCommentList({event,type:'new'})}}>最新</p>
                        <hr/>
                        <p onClick={(event)=>{freshCommentList({event,type:'present'})}}>当前商品</p>
                    </div>
                    <div>
                        <p>ejuan鼓励真实、有用的评价</p>
                        <p>
                            <svg height="15" version="1.1" viewBox="0 0 512 512" width="15">
                                <g>
                                    <g>
                                        <circle cx="251.5" cy="172" r="20"/><polygon points="272,344 272,216 224,216 224,224 240,224 240,344 224,344 224,352 288,352 288,344   "/>
                                    </g>
                                    <g>
                                        <path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z     M256,446.7c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7    C446.7,361.1,361.1,446.7,256,446.7z"/>
                                    </g>
                                </g>
                            </svg>
                        </p>
                    </div>
                </div>
                <Outlet />
            </div>
        </Modal>
    </section>
}
