import React from "react";
import {SearchBar} from "@com";
import icon from "@img/icons";
import image from "@img";
import {mainContent} from "@css/header.module.css";
import * as styles from "@/views/css/view.module.css";
export default function ProductItemTemplate(){
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
                <div className={styles["leftContent"]}>
                    
                </div>
                <div className={styles["rightContent"]}>
                    <div className={styles['festervial']}><p>七夕节</p><p>送礼上ejuan</p></div>
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
                                        <path class="cls-1" d="M27,27H5a1,1,0,0,1-.89-1.45,18.14,18.14,0,0,0,1.89-8V14a10,10,0,0,1,20,0v3.53a18.14,18.14,0,0,0,1.89,8A1,1,0,0,1,27,27ZM6.55,25h18.9A20.14,20.14,0,0,1,24,17.53V14A8,8,0,0,0,8,14v3.53A20.14,20.14,0,0,1,6.55,25Z"/><path class="cls-1" d="M16,31a5,5,0,0,1-5-5,1,1,0,0,1,2,0,3,3,0,0,0,.88,2.12,3.08,3.08,0,0,0,4.24,0,1,1,0,0,1,1.42,1.42A5,5,0,0,1,16,31Z"/>
                                        <path class="cls-1" d="M16,6a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V5A1,1,0,0,1,16,6Z"/>
                                        <path class="cls-1" d="M26,5a2,2,0,1,1,2-2A2,2,0,0,1,26,5Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"/>
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
                </div>
            </section>
        </section>
    </section>
}
