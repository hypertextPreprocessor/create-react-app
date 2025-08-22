import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination, Scrollbar } from 'swiper/modules';
import images from "@img/icons";
import image from "@img";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import * as styles from "@css/header.module.css";
export default function ProductTemplate(){
    return (
        <>
            {/* -----best seller in home*----- */}
            <div className={styles["mainContent"]}>
                <div className={styles["bestSeller"]}>
                    <h1>Best Sellers in Home & Kitchen</h1>
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        modules={[Navigation,Pagination,Scrollbar]}
                        navigation={{
                            enabled:true
                        }}
                        scrollbar={{hide:true}}
                        spaceBetween={10}
                        slidesPerView={7}
                    >
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((v,i)=><SwiperSlide key={i}>
                            <div className={styles["bestSellerItem"]}>
                                <img src={image["55"]} alt=""/>
                            </div>
                        </SwiperSlide>)}
                        
                    </Swiper>
                </div>
            </div>
            {/*Best Sellers in Clothing, Shoes & Jewelry*/}
            <div className={styles["mainContent"]}>
                <div className={styles["bestSeller"]}>
                    <h1>Best Sellers in Home & Kitchen</h1>
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        modules={[Navigation,Pagination,Scrollbar]}
                        navigation={{
                            enabled:true
                        }}
                        scrollbar={{hide:true}}
                        spaceBetween={10}
                        slidesPerView={7}
                    >
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((v,i)=><SwiperSlide key={i}>
                            <div className={styles["bestSellerItem"]}>
                                <img src={image["55x"]} alt=""/>
                            </div>
                        </SwiperSlide>)}
                        
                    </Swiper>
                </div>
            </div>
            {/*宫格item */}
            <div className={styles["griditems"]}>
                {[1,2,3,4].map((m,n)=>(
                    <div key={n} className={styles["groupitem"]}>
                        <h1>Pre-loved designer jewelry</h1>
                        <div className={styles["subitemcontainer"]}>
                            {[1,2,3,4].map((v,i)=>(
                                <div key={i} className={styles["groupItemImg"]}>
                                    <p><img src={image["list2-c1"]} alt=""/></p>
                                    <p>Cartier</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}