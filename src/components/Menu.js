import React,{useRef,useImperativeHandle,useState, useEffect, useCallback} from 'react';
import { useNavigate } from "react-router";
import {useWindowState} from "@caveats/externalStore";
import SvgIcon from "@img/icons/SvgIcon";
import styled from 'styled-components';
/*
const scrollMove = keyframes`
    from {
        transform:translateX(0) rotate(0deg);
    }
    to {
        transform:translateX(100px) rotate(360deg);
    }
`;
*/
//animation:${scrollMove} .3s ease-in-out 1;
export const StyledMenu = styled.div`
    display:none;
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    z-index:9999;
    background-color:rgba(0,0,0,0.7);
    >div{
        position:absolute;
        top:0;
        background:white;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        width:15%;
        min-width:${props=>props['data-min-width']}px;
        overflow:hidden;
    }
    >div>div{
        flex-basis: 100%;
        flex-grow: 1;
        flex-shrink: 0;
    }
    >div>div ul{
        list-style-type:none;
    }
    >div>div ul li:not(.outerUl>li){
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        justify-content:space-between;
    }
    >div>div ul li p:not(.outerUl>li>p){
        font-size:1.6rem;
        cursor:pointer
    }
    >div>div ul li li:hover:not(.outerUl>li>p){
        color:${props=>[props.theme.tarifaColor]};
        background-color:${props=>[props.theme.lightTarifa]};
    }
    >div>div>ul>li>p{
        font-size:1.8rem;
        font-weight:bold;
    }
    >div>div ul li p:has( svg){
        
    }
    >div>div>div{
        background-color:${props=>props.theme.secondColor};
        color:#fff;
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
        gap:1rem;
    }
    >div>div>div:nth-of-type(2){
        background-color:${props=>props.theme.containerBgColor};
        color:#000;
    }
    >p{
        cursor:pointer;
        position:absolute;
        top:0;
        transform:rotate(0deg); 
    }
    
`;
export default function Menu({ref,items=[],minWidth=325,onOpen,onClose,location="left",knockOnCover=true}){
    const navigate = useNavigate();
    const {winHeight} = useWindowState();
    const menuContainerRef = useRef(null);
    const closeRef = useRef(null);
    var execClose = useCallback(function(){
        menuContainerRef.current.style.setProperty(location,`${-menuContainerRef.current.clientWidth}px`);
        closeRef.current.style.setProperty(location,-closeRef.current.clientWidth + 'px');
        closeRef.current.style.setProperty('transform','rotate(0deg)');
        
        setTimeout(()=>{
            menuContainerRef.current.style.removeProperty('transform');
            closeRef.current.style.removeProperty('transform');
            menuContainerRef.current.parentElement.style.setProperty('display','none');
            document.body.style.setProperty('overflow','auto');
            onClose && onClose();
        },300);
    },[location,onClose]);
    const [menuSerise,setMenuSerise] = useState([items]);
    const openCache = useCallback(open,[onOpen,location]);
    const closeCache = useCallback(close,[knockOnCover,execClose]);
    function open(){
        menuContainerRef.current.parentElement.style.setProperty('display','block');
        document.body.style.setProperty('overflow','hidden');
        if(location === 'right'){
            closeRef.current.style.setProperty('width',closeRef.current.clientHeight+'px');
        }
        menuContainerRef.current.style.setProperty(location,-menuContainerRef.current.clientWidth + 'px');
        closeRef.current.style.setProperty(location,-closeRef.current.clientWidth + 'px');
        
        menuContainerRef.current.style.setProperty('transition','all .3s 0s ease-in-out');
        closeRef.current.style.setProperty('transition','all .3s 0s ease-in-out');
        setTimeout(()=>{

            menuContainerRef.current.style.setProperty(location,"0px");
            closeRef.current.style.setProperty(location,`${menuContainerRef.current.clientWidth}px`);

            closeRef.current.style.setProperty('transform','rotate(360deg)');
            document.body.style.setProperty('overflow','hidden');
            onOpen && onOpen();
        },300);
    }
    function close(e){
        if(knockOnCover){
            if(e.currentTarget !== closeRef.current && e.currentTarget !== e.target){
                return false;
            }
        }
        execClose();
    }
     useEffect(() => {
        setMenuSerise([items]);
    }, [items]);
    useEffect(()=>{
        if(items && items.length){
            menuContainerRef.current.style.setProperty('height',winHeight + 'px');
            if(location === 'left'){
                menuContainerRef.current.style.removeProperty('right');
                closeRef.current.style.removeProperty('right');
            }else if(location === 'right'){
                menuContainerRef.current.style.removeProperty('left');
                closeRef.current.style.removeProperty('left');
            }
            menuContainerRef.current.style.setProperty(location,-menuContainerRef.current.clientWidth + 'px');
            closeRef.current.style.setProperty(location,-closeRef.current.clientWidth + 'px');
            openCache();
        }
    },[items,winHeight,menuSerise,location,openCache]);
    useImperativeHandle(ref,()=>{
        return {
            openMenu:openCache,
            closeMenu:closeCache, 
            container:menuContainerRef?.current?.parentElement
        }
    },[openCache,closeCache])
    if(items && items.length){
        function navBack(){

            menuContainerRef.current.scroll({
                left:menuContainerRef.current.scrollLeft -  menuContainerRef.current.clientWidth,
                behavior:"smooth"
            })

            setTimeout(()=>{
                setMenuSerise(s=>s.slice(0,-1));
            },300)
            
        }
        function subMenuClick(e,item){
            if(item.url){
                navigate(item.url);
                execClose();
            }else if(item.children && item.children.length){
                //createRoot(menuContainerRef.current).render(<GenMenu items={item.children} subMenuClick={subMenuClick}/>);
                //menuContainerRef.current.appendChild(<GenMenu items={item.children} subMenuClick={subMenuClick}/>)
                setMenuSerise(s=>[...s,item.children]);
                setTimeout(()=>{
                    menuContainerRef.current.scroll({
                        left:menuContainerRef.current.clientWidth * menuSerise.length,
                        behavior:"smooth"
                    })
                })
            }
        }
        return <StyledMenu data-min-width={minWidth} onClick={knockOnCover?close:null}>
            <div ref={menuContainerRef}>
                {menuSerise.length?menuSerise.map((v,i)=><GenMenu index={i} key={i} items={v} subMenuClick={subMenuClick} navBack={navBack}/>):<h1>{menuSerise},Empty,{JSON.stringify(menuSerise)}</h1>}
            </div>
            <p className="padding-sm" ref={closeRef} onClick={close}>
                <SvgIcon icon="close_cross" width="32" height="32" fill="#fff" stroke='#fff' strokeWidth="2"/>
            </p>
        </StyledMenu>
    }else{
        return null;
    }
}
function GenMenu({items=[],subMenuClick,index=0,navBack}){
    useEffect(()=>{

    },[items])
    return <div>
            <div className="padding-sm"><SvgIcon icon="fulano" width="34" height="34" fill="#fff" stroke="none"/><h1>Sing in</h1></div>
            {index>0?<div className="padding-sm">
                <SvgIcon style={{cursor:'pointer'}} onClick={navBack && navBack} icon="arrow_left" width="28" height="28" fill="#000000ff" stroke="none"/>
                <h1>Title</h1>
            </div>:null}
            <ul className="outerUl">
                {items.map((v,i)=>
                <li key={v.key}>
                    <p className="padding-sm">{v.label}</p>
                    {v.children && v.children.length?(
                        <ul>
                            {v.children && v.children.length?(v.children.map((sv ,si)=><li data-key={sv.key} key={sv.key} onClick={(event)=>{subMenuClick && subMenuClick(event,sv)}}>
                                <p className="padding-sm">{sv.label}</p>
                                {sv.children && sv.children.length?<p className="padding-sm">
                                    <SvgIcon icon="greater_than" width="20" height="20" style={{verticalAlign:'middle'}} strokeWidth="2" stroke="var(--disabled-color)"/>
                                </p>:null}
                            </li>)):null}
                        </ul>
                    ):null}
                </li>)}
            </ul>
        </div>
}