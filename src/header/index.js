import React, { useEffect,useState,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination, Scrollbar } from 'swiper/modules';
import {Menu} from "@com";
import images from "@img/icons";
import image from "@img";
import Model from "@com/Modal";
import {useGeoLocation} from "@caveats/geoLocation";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import * as styles from "@css/header.module.css"; //className={styles["sectionTop"]}
export default function Header(){
   const [state,setState] = useGeoLocation({latitude:33.4484,longitude:-112.074});
   const [model,setModel] = useState(false);
    useEffect(()=>{

        
    },[]);
    return (
    <>
        <section className={styles["pcHeadStyle"]}>
            <section className={styles["sectionTop"]}>
                <div className={styles["logo"]}>
                    <img src={images["logo"]} alt="logo"/>
                </div>
                <div className={styles["location"]} onClick={()=>{setModel(true)}}>
                    <p className={styles["locationp1"]}>
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><title/>
                                <path d="M262.12,378a15,15,0,0,1-7.33-1.91A230.8,230.8,0,0,1,136.68,174.88q0-2.5.06-5c.8-37.5,14.81-69.11,40.52-91.4C199.91,58.82,230.05,48,262.12,48S324.32,58.82,347,78.47c25.71,22.29,39.72,53.9,40.52,91.4h0q.06,2.5.06,5A230.8,230.8,0,0,1,269.44,376.09,15,15,0,0,1,262.12,378Zm0-300c-24.85,0-48,8.21-65.21,23.13-19.13,16.59-29.57,40.58-30.18,69.38,0,1.45,0,2.91,0,4.37a200.76,200.76,0,0,0,95.44,170.73,200.75,200.75,0,0,0,95.43-170.73c0-1.46,0-2.92-.05-4.37h0c-.61-28.8-11.05-52.79-30.18-69.38C310.12,86.21,287,78,262.12,78Z"/>
                                <path d="M262.43,247.4a72.13,72.13,0,1,1,72.13-72.13A72.21,72.21,0,0,1,262.43,247.4Zm0-114.25a42.13,42.13,0,1,0,42.13,42.12A42.17,42.17,0,0,0,262.43,133.15Z"/>
                                <path d="M262.12,450c-40.47,0-78.75-8.06-107.79-22.69C122,411,104.23,388.19,104.23,363c0-33.41,31.25-62.26,83.6-77.16A15,15,0,0,1,196,314.7c-37.55,10.69-61.81,29.65-61.81,48.3,0,27,52.52,57,127.89,57S390,390,390,363c0-18.65-24.26-37.61-61.81-48.3a15,15,0,0,1,8.21-28.86C388.75,300.74,420,329.59,420,363c0,25.19-17.79,48-50.1,64.31C340.86,441.94,302.58,450,262.12,450Z"/>
                        </svg>
                    </p>
                    <div className={styles["locationp2"]}>
                        <p>
                            Delivering to Phoenix
                        </p>
                        <p>Update Location</p>
                    </div>
                </div>
                <div className={styles["search"]}>
                    <select>
                        <option value="en">全部类目</option>
                    </select>
                    <input type="text" value="" placeholder="search"/>
                    <button>search</button>
                </div>
                <div>
                    <ul className={styles["nav"]}>
                        <li>
                            <select>
                                <option value="en">en</option>
                                <option value="es">es</option>
                                <option value="fr">fr</option>
                                <option value="de">de</option>
                                <option value="zh">zh</option>
                            </select>
                        </li>
                        <li>sing in</li>
                        <li>orders</li>
                        <li className={styles["cartbtn"]}>
                            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="none" height="256" width="256"/>
                                <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <circle cx="80" cy="204" fill="none" r="20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <circle cx="184" cy="204" fill="none" r="20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            </svg>
                            <p>Cart</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles["sectionBottom"]}>
                <HotSellCategory />
            </section>
            <Model show={model} title="choose your location" content="We are trying to access your location ,you have to allow us to have your geo location permission." onClose={()=>{setModel(false)}}/>
        </section>
        <section className={styles["mobileHeadStyle"]}>
            <section className={styles["sectionTop"]}>
                <div className={styles["menu_logo"]}>
                    <div>
                        <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" fill="#ffffff">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                        </svg>
                        <img src={images["logo"]} alt="logo"/>
                    </div>
                    <div>
                        <p>
                            <span>Sign in</span>
                            <svg data-name="Layer 1" id="Layer_1" width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke="none" fill="#ffffff"><title/>
                                <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z"/>
                                <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z"/>
                            </svg>
                        </p>
                        <p>
                            <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="none" height="256" width="256"/>
                                <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <circle cx="80" cy="204" fill="none" r="20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <circle cx="184" cy="204" fill="none" r="20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            </svg>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles["searchBox"]}>
                <div className={styles["searchBoxOne"]}>
                    <div>
                        <input type="text" />
                        <button>
                            <svg height="30px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="30px" fill="#ffffff">
                                <path d="M445,386.7l-84.8-85.9c13.8-24.1,21-50.9,21-77.9c0-87.6-71.2-158.9-158.6-158.9C135.2,64,64,135.3,64,222.9  c0,87.6,71.2,158.9,158.6,158.9c27.9,0,55.5-7.7,80.1-22.4l84.4,85.6c1.9,1.9,4.6,3.1,7.3,3.1c2.7,0,5.4-1.1,7.3-3.1l43.3-43.8  C449,397.1,449,390.7,445,386.7z M222.6,125.9c53.4,0,96.8,43.5,96.8,97c0,53.5-43.4,97-96.8,97c-53.4,0-96.8-43.5-96.8-97  C125.8,169.4,169.2,125.9,222.6,125.9z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles['hscory']}>
                    <HotSellCategory/>
                </div>
            </section>
            <section className={styles["sectionBottom"]}>
                <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="1" id="_1" fill="#ffffff">
                        <path d="M262.12,378a15,15,0,0,1-7.33-1.91A230.8,230.8,0,0,1,136.68,174.88q0-2.5.06-5c.8-37.5,14.81-69.11,40.52-91.4C199.91,58.82,230.05,48,262.12,48S324.32,58.82,347,78.47c25.71,22.29,39.72,53.9,40.52,91.4h0q.06,2.5.06,5A230.8,230.8,0,0,1,269.44,376.09,15,15,0,0,1,262.12,378Zm0-300c-24.85,0-48,8.21-65.21,23.13-19.13,16.59-29.57,40.58-30.18,69.38,0,1.45,0,2.91,0,4.37a200.76,200.76,0,0,0,95.44,170.73,200.75,200.75,0,0,0,95.43-170.73c0-1.46,0-2.92-.05-4.37h0c-.61-28.8-11.05-52.79-30.18-69.38C310.12,86.21,287,78,262.12,78Z"/>
                        <path d="M262.43,247.4a72.13,72.13,0,1,1,72.13-72.13A72.21,72.21,0,0,1,262.43,247.4Zm0-114.25a42.13,42.13,0,1,0,42.13,42.12A42.17,42.17,0,0,0,262.43,133.15Z"/>
                        <path d="M262.12,450c-40.47,0-78.75-8.06-107.79-22.69C122,411,104.23,388.19,104.23,363c0-33.41,31.25-62.26,83.6-77.16A15,15,0,0,1,196,314.7c-37.55,10.69-61.81,29.65-61.81,48.3,0,27,52.52,57,127.89,57S390,390,390,363c0-18.65-24.26-37.61-61.81-48.3a15,15,0,0,1,8.21-28.86C388.75,300.74,420,329.59,420,363c0,25.19-17.79,48-50.1,64.31C340.86,441.94,302.58,450,262.12,450Z"/>
                    </g>
                </svg>
                <span style={{marginLeft:3}}>Delivery to China</span>
            </section>
        </section>
        <Menu />
    </>
    );
}

function HotSellCategory(){ //热卖产品列表
    var arr = ["Video","Image","Car pets","Hot Sale","Housing falicating","Main Tool","Tesla","New Realeases","Today's Deal","Customer Service","Smart Home","New Energy","Media Widgets","Shop By Interest",15,16,17,18,19,20,21,22,23];
    const ulRef = useRef(null);
  
    useEffect(()=>{
        const ul = ulRef.current;
        var chi=0 ;
        var maxScroll = ulRef.current.scrollWidth - ulRef.current.clientWidth;
        const handleWhellEvent = function(event){
            event.preventDefault();
            /*
            window.addEventListener('scroll',(evt)=>{
                evt.preventDefault();
            })
            */
            if(event.deltaY>0){
                chi = (chi + 18 > maxScroll)?maxScroll:chi+18;
            }else{
                chi = (chi - 18 < 0)?0:chi - 18;
            }
            
            ul.scroll({
                left:chi,
                behavior: "smooth",
            })
        }
        ul.addEventListener("wheel",handleWhellEvent);
        return ()=>{
            ul.removeEventListener("wheel");
        }
    },[]);
    return <>
        <ul ref={ulRef} className={styles["HotSellCategory"]} >
            <li>
                <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px">
                    <path fill="#fff" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                </svg>
            </li>
            {arr.map((it,ii)=><li key={ii}>{it}</li>)}
        </ul>
    </>
}
