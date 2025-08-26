import React,{useRef,useImperativeHandle,useState} from 'react';
import {MenuGenerator} from "@com";
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
            closeMenuRef.current.style.left='390px';
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
        <menu style={m.menu} ref={menuRef}>
            <div id="menu" style={m.usertitle} ref={userLogRef}>
                <p>
                    <svg version="1.1" viewBox="0 0 24 24" width="34" height="34">
                        <g id="info"/>
                        <g id="icons" fill="#fff">
                            <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z" id="user2"/>
                        </g>
                    </svg>
                </p>
                <h1 style={{marginLeft:'1.2rem'}}>Hello,Sign in</h1>
            </div>
            <div className={styles["menuPanel"]} ref={menuPanelRef}>
                <MenuGenerator list={menu} itemConHeight={itemConHeight} itemClicked={itemClicked} navBack={navBack}/>
            </div>
        </menu>
        <p ref={closeMenuRef} style={m.close} onClick={closeMenu}>
            <svg viewBox="0 0 32 32" width="32" height="32">
                <g id="cross" fill="#fff" stroke='#fff'><line className="cls-1" x1="7" x2="25" y1="7" y2="25"/>
                    <line className="cls-1" x1="7" x2="25" y1="25" y2="7"/>
                </g>
            </svg>
        </p>
    </div>
    );
}