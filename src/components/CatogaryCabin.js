import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from "react-router";
import {RatingStar} from "@com";
import { Navigation, Autoplay,Pagination, Scrollbar } from 'swiper/modules';
import {useWindowState} from "@caveats/externalStore";
import * as styles from "@css/header.module.css";
import images from "@img/icons";
import image from "@img";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
export default function CatogaryCabin({title,children=null}){
    const {devices} = useWindowState();
    return <div>
                <div className={styles["bestSeller"]}>
                    <h1>{title}</h1>
                    <Swiper
                        className={devices.isDesktop ? null : "nav-disabled"}
                        pagination={{
                            type: 'progressbar',
                        }}
                        modules={[Navigation,Pagination,Scrollbar]}
                        navigation={{
                            enabled:true
                        }}
                        scrollbar={{hide:true}}
                        spaceBetween={10}
                        slidesPerView={devices.isDesktop?6:3}
                    >
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((v,i)=><SwiperSlide key={i}>
                            <NavLink to="/item/15321500212" style={{color:'#000',textDecoration:'none'}}>
                            <div className={styles["bestSellerItem"]}>
                                <p><img src={image["55"]} alt=""/></p>
                                {children?children:(
                                    <div className={styles["cateCabinText"]}>
                                        <p>Logitech G915 X LightSpeed TkL Housing Using Mouse.</p>
                                        <div>
                                            <span>4.0</span>
                                            <div>
                                                <RatingStar size={devices.isDesktop?20:12}/>
                                            </div>
                                            <span>309</span>
                                        </div>
                                        <p className="priceTag">
                                            <span>$</span><span>209</span><sup>99</sup>
                                            <span className="list">List: $299.99</span>
                                        </p>
                                        <p>FREE DELIVERY Tue,Sep 2</p>
                                    </div>
                                )}
                            </div>
                            </NavLink>
                        </SwiperSlide>)}
                        
                    </Swiper>
                </div>
    </div>
}
CatogaryCabin.Tarifa = function({title="Title 1"}){
    return <CatogaryCabin title={title}>
        <div className={styles["cateCabinTarifa"]}>
            <p><span>36% off</span><span>Limited time deal</span></p>
            <p className="priceTag">
                <span>$</span><span>209</span><sup>99</sup>
                <span className="list">List: $299.99</span>
            </p>
            <p>Amazon Fire HD 10 tablet (newst arrival component) sale</p>
        </div>
    </CatogaryCabin>
}