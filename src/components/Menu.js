import React,{useRef,useImperativeHandle,useState} from 'react';
import { NavLink } from "react-router";
import {MenuGenerator} from "@com";
import {useWindowState} from "@caveats/externalStore";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from '@com/css/com.module.css';

const m = {
    container:{
        display:'none',
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:9999
    },
    menu:{
        position:'fixed',
        top:0,
        left:'-375px',
        backgroundColor:'#fff',
        width:'375px',
        height:'100%',
        transition:'all 0.8s 0.2s ease-in-out'
    },
    usertitle:{
        backgroundColor:'var(--second-color)',
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
        //justifyContent:'center'
        padding:'3%',
        color:'#ffffff'
    },
    close:{
        position:'fixed',
        top:'2%',
        left:'390px',
        cursor:'pointer',
        transition:'all 2s .2s ease-in-out'
    },
    title:{
        padding:'2%',
        width:'88%',
        margin:'0 auto'
    }
}
export default function Menu({ref}){
    const {devices} = useWindowState();
    const [itemConHeight,setItemConHeight] = useState('auto');
    const menu = [{
        title:'Trending',
        items:[{title:'Best Sellers',url:"/category/12"},{title:'New Releases'},{title:'Movers & Shakers'}]
    },{
        title:'Digital Content And Devices',
        items:[{
            title:'Prime Video',
            subItems:[{
                    title:'Prime Video',
                    items:[{title:"Video1"}]
                },{
                    title:'Categories',
                    items:[{title:"Categories1"}]
                },{
                    title:'My Stuff',
                    items:[{title:"Stuff1"}]
                },{
                    title:'Watch Anywhere',
                    items:[{title:"Anywhere1"}]
                },{
                    title:'Getting Started',
                    items:[{title:"Started1"}]
                }
            ]
        },{
            title:'More to Explore',
            subItems:[{
                title:'Kids',
                items:[{title:"Kids"}]
            },{
                title:"Olds",
                items:[{
                    title:"Olds",
                    subItems:[{
                        title:"Olds",
                        items:[{title:"facilities"}]
                    }]
                }]
            }]
        },{title:'Echo & Alexa'},{title:'Fire Tablets'},{title:'Fire TV'},{title:'Kindle E-readers & Books'},{title:'Audible Audiobooks'}]
    },{
        title:'Shop By Department',
        items:[{
            title:'Clothing,Shoes,Jewelry & watches'
        },{
            title:'Amazon Fresh'
        },{
            title:'Whole Foods Market'
        },{
            title:'Books'
        },{
            title:'Old styles'
        },{
            title:"New Products"
        }]
    }];
    const bgCover = useRef();
    const menuRef = useRef();
    const userLogRef = useRef();
    const closeMenuRef = useRef();
    const menuPanelRef = useRef();
    function closeMenu(){
        document.body.style.overflow='auto';
        //menuRef.current.classList.add(styles["moveOut"]);
        menuRef.current.style.left='-375px';
        closeMenuRef.current.style.left='-390px';
        setTimeout(()=>{
            bgCover.current.style.display='none';
        },1000);
    }
    function openMenu(){
        document.body.style.overflow='hidden';
        bgCover.current.style.display='block';
        setTimeout(()=>{
            var docH = document.documentElement.clientHeight - userLogRef.current.clientHeight;
            //setItemConHeight(`calc(100% - ${userLogRef.current.clientHeight})`);
            setItemConHeight(docH + 'px')
            menuRef.current.style.left='0';
            var toWidth = menuRef.current.clientWidth;
            closeMenuRef.current.style.left=Number(toWidth + 10) + 'px';

        })
    }
    const [menulist,setMenulist] = useState(menu);
    useImperativeHandle(ref,()=>{
        return {
            openMenu:openMenu,
            closeMenu:closeMenu
        }
    },[])
    function itemClicked(subItems,num){
        console.log('subItems',subItems);
        if(!subItems){
            closeMenu();
        }else{
            setTimeout(()=>{
                menuPanelRef.current.scroll({
                    left:userLogRef.current.clientWidth*(num+1),
                    behavior:"smooth"
                })
            })
        }

    }
    function navBack(num){
        console.log('num',num);
        menuPanelRef.current.scroll({
            left:userLogRef.current.clientWidth * (num),
            behavior:"smooth"
        })
    }
    return (
    <div style={m.container} ref={bgCover}>
        <menu style={{...m.menu,width:devices.isDesktop?m.menu.width:'76%',minWidth:'290px'}} ref={menuRef}>
            <div id="menu" style={m.usertitle} ref={userLogRef}>
                <p>
                    <SvgIcon icon="fulano" width="34" height="34" fill="#fff" stroke="none"/>
                </p>
                <h1 style={{marginLeft:'1.2rem'}}>Hello,<NavLink to="/login" style={{color:'#fff',textDecoration:'none'}}>Sign in</NavLink></h1>
            </div>
            <div className={styles["menuPanel"]} ref={menuPanelRef}>
                <MenuGenerator list={menu} itemConHeight={itemConHeight} itemClicked={itemClicked} navBack={navBack}/>
            </div>
        </menu>
        <p ref={closeMenuRef} style={m.close} onClick={closeMenu}>
            <SvgIcon icon="close_cross" width="32" height="32" fill="#fff" stroke='#fff' strokeWidth="2"/>
        </p>
    </div>
    );
}