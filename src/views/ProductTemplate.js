import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination, Scrollbar } from 'swiper/modules';
import SignIn from "@com/SignIn";
import {ProductCabin,TopSellerProduct,Tarifa} from "@com";
import images from "@img/icons";
import image from "@img";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import * as styles from "@css/header.module.css";
import {useWindowState} from "@caveats/externalStore";
export default function ProductTemplate(){
    const {devices} = useWindowState();
    if(devices.isDesktop){
            return (
            <section>
                <section>
                    <div className={styles["mainContent"]}>
                        <Swiper
                            modules={[Navigation,Autoplay]}
                            navigation={{enabled:true}}
                            autoplay={
                                {
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }
                            }
                            spaceBetween={0}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <div className={styles["swiperimg"]}>
                                    <img src={image["R"]} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles["swiperimg"]}>
                                    <img src={image["R"]} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles["swiperimg"]}>
                                    <img src={image["R"]} alt=""/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles["groupitems"]}>
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
                    </div>
                </section>
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
            </section>
        );
    }else{
        return <section>
            <section>
                <div className={styles["samplearea"]}>
                    {[1,2,3,4].map((m,n)=><p key={n}><img src={image["example"]} alt=""/></p>)}
                </div>
            </section>

            <section className={styles["mobileContent"]}>
                <p style={{backgroundColor:'var(--second-color)',color:'white',padding:'12px',fontSize:'1.3rem'}}>You are on ejuan.com. You can also shop on Amazon for millions of products with fast local delivery.<span>Click here to go to my amazon</span></p>
                <SignIn />
                <ProductCabin title="Score the top PCs & Accessories" productArrayList={[1,2,3,4]}/>
                <ProductCabin title="Score the top PCs & Accessories" productArrayList={[1,2,3,4]}/>
                <TopSellerProduct title="Top Sellers in Baby Products for you" productArrayList={[1,2,3,4]}/>
                <Tarifa title="Toys Under $30"/>
            </section>
        </section>
    }
}