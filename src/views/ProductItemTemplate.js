//bellow for PC
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet ,useNavigate} from "react-router";
import cn from 'classnames';
import {SearchBar,Button,Tabs,Modal,RatingStar,PopOver,ProductGrid,SkuTemplate,ScrollSelectionList,Drawer} from "@com";
import {canAllClassOnParentEle} from "@utlis";
import {useWindowState} from "@caveats/externalStore";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import BigNumber from "bignumber.js";
import icon from "@img/icons";
import image from "@img";
import {mainContent} from "@css/header.module.css";
import * as styles from "@/views/css/view.module.css";
import 'react-photo-view/dist/react-photo-view.css';
//bellow for mobile
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import SvgIcon from "@img/icons/SvgIcon";
function DrawerContent(){
    return <div className={styles['drawer_content']}>
        <h2>Chooise your Location</h2>
        <p>Delivery options and delivery speeds may vary of different locations</p>
        <p><Button>Sign in to see your address</Button></p>
        <ul>
            <li>
                <SvgIcon icon="location" width="25" height="25" fill="#000"/>
                <p>Enter a US zip code</p>
            </li>
            <li>
                <SvgIcon icon="gps_tracking" width="25" height="25"/>
                <p>Use my Current Location</p>
            </li>
            <li>
                <p style={{width:'25px',height:'25px',display:'flex',alignItems:'center',justifyContent:'center'}}><SvgIcon icon="world_wide" width="18" height="18" continentColor="#b5b5b5"/></p>
                <p>Ship outside the US</p>
            </li>
        </ul>
    </div>;
}
export default function ProductItemTemplate(){
    const {devices} = useWindowState();
    if(devices.isDesktop){
        return <ProductItemTemplatePC />;
    }else{
        return <ProductItemTemplateMobile />;
    }
}
export function ProductItemTemplateMobile(){
    let navigate = useNavigate();
    const [show,setShow] = useState(false);
    function goComment(){
        navigate("/comments");
    }
    function openDrawer(){
        
        /*
        Drawer.show({
            title:false,
            direction:"right",
            content:<DrawerContent/>
        });
        */
        
       setShow(true);
       //setShow(false);
    }
    return <section>
        <PhotoProvider>
            <Swiper spaceBetween={0} slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }}>
                {Array.from({length:6}).map((v,i)=><SwiperSlide key={i}>
                    <PhotoView src={image['example']}>
                        <div><img style={{width:'100%'}} src={image['example']} alt=""/></div>
                    </PhotoView>
                </SwiperSlide>)}
            </Swiper>
        </PhotoProvider>
        <div className="bg-white radius padding-sm">
            <p className="priceTag"><span>$</span><span>469</span><sup>63</sup></p>
            <h1>AOCTIK德国品牌智能早教机器狗机器人儿童玩具男女孩1-3-7-13岁生日礼物 金色 豪华顶配-六一儿童节 送礼佳品</h1>
        </div>
        <div>
            <SkuTemplate 
                defaultKey="1"
                skuList={[
                    {
                        key:'1',
                        label:
                            <>
                                <p>Capicity:</p>
                                <p className="text-bold padding-tb-sm">Intel i7 - 9700</p>
                            </>,
                        children:<ScrollSelectionList singleton={true} defaultSelected={true} list={[{key:'sku1',value:'Intel i7 Core - GTx8010'},{key:"sku2",value:"AMD Ec200-1600"}]} onSelect={(v)=>{
                            console.log(v);
                        }}></ScrollSelectionList>
                },{
                        key:'2',
                        label:
                            <>
                                <p>Style:</p>
                                <p className="text-bold padding-tb-sm">64GB</p>
                            </>,
                        children:<ScrollSelectionList>
                            {Array.from({length:5}).map((sku,ski)=><div key={ski} className={cn(styles['sku_custom'],{[styles['sku_custom_active']]:ski===0})} onClick={(event)=>{
                                canAllClassOnParentEle(event.currentTarget,styles['sku_custom_active'])
                            }}>
                                <p>64GB RAM | 1TB SSD</p>
                                <div>
                                    <div>
                                        <p className="priceTag"><span>$</span><span>688</span><sup>98</sup></p>
                                        <p>in stock</p>
                                    </div>
                                    <div><img src={image['example']} alt=""/></div>
                                </div>
                            </div>)}
                        </ScrollSelectionList>
                }]}/>
        </div>
        <div className="padding-sm radius bg-white margin-tb">
            <p className="text-xl">Free Delivery <span className="text-bold">Tomorrow , {new Date().toLocaleDateString()},</span> Order within <span className="text-green">8 hours 38 mins.</span>Details</p>
            <p className="text-lg padding-top-sm">
                <SvgIcon icon="location" width="20" height="20" style={{verticalAlign:'middle'}} fill="#000" strokeWidth="0.5"/>
                <span className="text-blue" onClick={openDrawer}>Delivery to Phonix</span>
            </p>
            <div className="padding-tb-sm flex align-center justify-end ">
                <Button ghost>-</Button>
                <input type="number" min={1} max={99} defaultValue={1} style={{width:'50px',textAlign:'center',margin:'0 0.5rem',lineHeight:'2.3rem'}}/>
                <Button>+</Button>
            </div>
            <div className="padding-tb-sm flex justify-between">
                <p><Button size="large">Buy Now</Button></p>
                <p><Button size="large" type="default" style={{backgroundColor:"gold"}}>Add to Cart</Button></p>
            </div>
        </div> 
        <Tabs items={[{key:'0',label:'评价'},{key:'1',label:'详情'},{key:'2',label:'推荐'}]} defaultActiveKey="0" bindScroll={true}>
            <div id="0" className={cn('padding-sm')}>
                <div className={cn('flex','padding-tb-sm','justify-between')}>
                    <p className={cn('text-xl','text-bold')}>评价<span className={cn('margin-left-sm')}>200+</span></p>
                    <p className={cn('flex','align-center','text-xl','text-grey')}><span>好评度 100%</span><SvgIcon style={{verticalAlign:'middle'}} stroke="#8799a3" icon="greater_than" width="15" height="15" fill="none" strokeWidth={2}/></p>
                </div>
                <ProductSellingPoints points={["材质坚固","质量好","结实耐用","精美绝伦","功能强大","顶呱呱"]}/>
                <div className={cn('padding-tb-sm',styles['commentContentExtracionMobile'])}>
                    <div className={cn(styles['cce-m-head'],'flex','align-center','justify-between')}>
                        <div className="flex align-center">
                            <p class="margin-right-sm"><img src={icon['logo']} alt=""/></p>
                            <p className="text-lg">用户昵称</p>
                        </div>
                        <div><p className="text-lg text-grey">2025-08-13</p></div>
                    </div>
                    <div className={styles['cce-m-content']}>
                        <p className="padding-tb-sm text-xl">很好玩的玩具，小朋友4岁生日礼物，非常喜欢，功能很多，还可以学习，可以跟随，给小朋友养的电子宠物，帮助孩子学习英语，还能陪伴孩子。</p>
                        <div>
                            <PhotoProvider>
                                {Array.from({length:9}).map((v,i)=><PhotoView key={i} src={image['example']}>
                                    <p key={i}><img src={image['example']} alt=""/></p>
                                </PhotoView>
                                )}
                            </PhotoProvider>
                        </div>
                    </div>
                    <div className="flex align-center justify-center padding-sm"><Button size="small" onClick={goComment}>查看全部评价</Button></div>
                </div>
            </div>
            <div id="1">
                <div className="margin-top">
                    <Tabs 
                        defaultActiveKey="0" 
                        bindScroll={false} 
                        items={[{
                            key:"0",label:"商品介绍",children:Array.from({length:9}).map((v,i)=><p><img style={{width:'100%',verticalAlign:'middle'}} src={image['example']} alt='' /></p>)},{
                            key:"1",label:"规格参数",children:<ProductSpecifications/>},{
                            key:"2",label:"售后保障",children:<StoreStatement/>}]}
                    />
                </div>
            </div>
            <div id="2">
                <div className="padding-tb">
                    <h1 className="padding-tb-sm">猜你喜欢</h1>
                    <ProductGrid colNum={3}/>
                </div>
            </div>
        </Tabs>
        <Drawer show={show} content={<DrawerContent/>} direction="bottom" onClose={()=>{setShow(false)}}/>
        
    </section>

}
export function ProductItemTemplatePC(){
    
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
                                <SvgIcon icon="heart" height="18px" width="18px"/>
                                <span>关注店铺</span>
                            </p>
                            <p>
                                <SvgIcon icon="assistant" width="18" height="18"/>
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
                                <SvgIcon icon="up_breaket" width="18" hegiht="18" />
                            </button>
                            <div ref={scrollViewRef}>
                                <div>
                                    {Array.from({length:20}).map((v,i)=><p key={i} onMouseEnter={()=>{viewThisItem(v)}}><img src={image["example"]} alt=""/></p>)}
                                </div>
                            </div>
                            <button onClick={scrollDown}>
                                 <SvgIcon icon="up_breaket" width="18" hegiht="18" style={{transform:'rotate(180deg)'}}/>
                            </button>
                        </div>
                        <div onMouseEnter={(e)=>{zoomInObject(e)}} onMouseOut={(e)=>{cancelZoomOnObject(e)}}>
                            <img src={image['CB483369110']} alt="" ref={esCoverRef}/>
                            <p><img src={image["example"]} alt=""/></p>
                        </div>
                    </div>
                    <Tabs style={{marginTop:'1.2rem'}} defaultActiveKey="0" 
                        bindScroll={true}
                        items={[{label:"大家评",key:"0",children:<h1>Hello</h1>},{label:"店铺",key:"1",children:"H2"},{label:"商品详情",key:"2",children:"H3"},{label:"售后保障",key:"3",children:"H4"},{label:"推荐","key":"4",children:"H5"}]}
                    >
                       <div id="0">
                            <div className={styles['commentHead']}>
                                <p>买家评价<span>(200+)</span></p>
                                <p onClick={()=>{commentModalShow()}}>
                                    好评率高达<span>100%</span>
                                    <SvgIcon icon="greater_than" width="12" height="12" strokeWidth={3} stroke="var(--disabled-color)"/>
                                </p>
                            </div>
                            <ProductSellingPoints points={["材质坚固","质量好","结实耐用","精美绝伦","功能强大","顶呱呱"]}/>
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
                                        <SvgIcon icon="heart" height="18px" width="18px"/>
                                        <span>关注店铺</span>
                                    </p>
                                    <p>
                                        <SvgIcon icon="assistant" height="18px" width="18px"/>
                                        <span>联系客服</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="2">
                            <div className={styles["productDetail"]}>
                                <h1 className="padding-tb-sm">商品详情</h1>
                                <ProductSpecifications/>
                                <div className="padding-top">
                                        {Array.from({length:6}).map((v,i)=><p><img style={{width:'100%',verticalAlign:'middle'}} src={image['example']} alt=''/></p>)}
                                </div>
                                
                            </div>
                            
                        </div>
                        <div id="3">
                            <StoreStatement/>
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
                                        <SvgIcon icon="notify" width="20" height="20" fill="var(--star-bg-color)" stroke="none" strokeWidth="3"/>
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
                            <SvgIcon icon="info" width="15" height="15"  strokeWidth={3} stroke="#000"/>
                        </p>
                    </div>
                </div>
                <Outlet />
            </div>
        </Modal>
    </section>
}

function ProductSellingPoints({points=[]}){
    return <div className={styles["commentSpecifics"]}>
        <p>材质坚固</p>
        <p>质量好</p>
        <p>结实耐用</p>
        <p>精美绝伦</p>
        <p>功能强大</p>
        <p>顶呱呱</p>
    </div>
}
function ProductSpecifications(){
    return <div className={styles['goods-base']}>
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
}
function StoreStatement(){
    return <div className={cn(styles['afterSaleProof'],'margin-top')}>
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
}