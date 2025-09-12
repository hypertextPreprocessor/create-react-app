import React, { useEffect,useState,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination, Scrollbar } from 'swiper/modules';
import { useNavigate,NavLink } from "react-router";
import {useWindowState} from "@caveats/externalStore";
import {mainMenu,userMenu} from "@router/menu.js";
import {Menu} from "@com";
import images from "@img/icons";
import image from "@img";
import Model from "@com/Modal";
import {useGeoLocation} from "@caveats/geoLocation";
import SvgIcon from "@img/icons/SvgIcon";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import * as styles from "@css/header.module.css"; //className={styles["sectionTop"]}

export default function Header(){
    let navigate = useNavigate();
   //const [state,setState] = useGeoLocation({latitude:33.4484,longitude:-112.074});
   const [model,setModel] = useState(false);
   const [menuLocation,setMenuLocation] = useState('left');
   const [menuObj,setMenuObj] = useState([]);
   const menuRef = useRef(null);
   function menuclick(){
        //menuRef.current.openMenu();
   }
    useEffect(()=>{
        
    },[menuObj]);
    function toHome(){
        navigate("/");
    }
    return (
    <>
        <section className={styles["pcHeadStyle"]}>
            <section className={styles["sectionTop"]}>
                <div className={styles["logo"]} onClick={toHome}>
                    <img src={images["logo"]} alt="logo"/>
                </div>
                <div className={styles["location"]} onClick={()=>{setModel(true)}}>
                    <p className={styles["locationp1"]}>
                        <SvgIcon icon="location" fill="#fff"/>
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
                        <li><NavLink to="/login">sing in</NavLink></li>
                        <li>orders</li>
                        <li className={styles["cartbtn"]}>
                            <SvgIcon icon="cart" width="25" height="25" fill="none" stroke="#fff" strokeWidth={16} />
                            <p>Cart</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles["sectionBottom"]}>
                <HotSellCategory menuClick={()=>{
                    setMenuObj(x=>mainMenu);
                    setMenuLocation(x=>'left');
                    menuclick();
                }}/>
            </section>
            <Model show={model} title="choose your location" content="We are trying to access your location ,you have to allow us to have your geo location permission." onClose={()=>{setModel(false)}}/>
        </section>
        <section className={styles["mobileHeadStyle"]}>
            <section className={styles["sectionTop"]}>
                <div className={styles["menu_logo"]}>
                    <div>
                        <SvgIcon onClick={()=>{
                            setMenuObj(x=>mainMenu);
                            setMenuLocation(x=>'left');
                            menuclick();
                        }} icon="menu_triple_line" fill="#fff" width="32" height="32" stroke="none"/>
                        <img src={images["logo"]} alt="logo" onClick={toHome}/>
                    </div>
                    <div>
                        <p>
                            {/*<span><NavLink to="/login">Sign in</NavLink></span>*/}
                            <span onClick={()=>{
                                //setMenuLocation('right');
                                setMenuObj(x=>userMenu);
                                setMenuLocation(x=>'right');
                                menuclick();
                            }}>Lattie</span>
                            <SvgIcon icon="fulano" width="18" height="18" stroke="none" fill="#fff" estilo={1}/>
                        </p>
                        <p>
                            <SvgIcon icon="cart" width="30" height="30" fill="none" stroke="#fff" strokeWidth={16}/>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles["searchBox"]}>
                <div className={styles["searchBoxOne"]}>
                    <div>
                        <input type="text" />
                        <button>
                            <SvgIcon icon="search" width="30" height="30" fill="#fff" stroke="none"/>
                        </button>
                    </div>
                </div>
                <div className={styles['hscory']}>
                    <HotSellCategory menuClick={menuclick}/>
                </div>
            </section>
            <section className={styles["sectionBottom"]}>
                <SvgIcon icon="location" width="22" height="22" fill="#fff" stroke="none"/>
                <span style={{marginLeft:3}}>Delivery to China</span>
            </section>
        </section>
        <Menu ref={menuRef} items={menuObj} location={menuLocation} onClose={()=>{setMenuObj([])}}/>
    </>
    );
}

function HotSellCategory({menuClick}){ //热卖产品列表
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
            ul.removeEventListener("wheel",handleWhellEvent);
        }
    },[]);
    const {devices} = useWindowState();
    return <>
        <ul ref={ulRef} className={styles["HotSellCategory"]} >
            {devices.isDesktop?(
                <li onClick={menuClick}>
                    <SvgIcon icon="menu_triple_line" fill="#fff" width="32" height="32" stroke="none"/>
                </li>
            ):null}
            {arr.map((it,ii)=><li key={ii}>{it}</li>)}
        </ul>
    </>
}
