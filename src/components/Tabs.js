import React, { useRef, useState } from 'react';
import * as styles from '@com/css/com.module.css';
import * as moduleStyle from "@/views/css/view.module.css";
import * as headerStyle from "@css/header.module.css";
export default function Tabs({style={},defaultActiveKey,items,bindScroll=true,children=null}){
    const [active,setActive] = useState(defaultActiveKey);
    const tabRef = useRef(null);
    const tabContainerRef = useRef(null);
    function activeTab(tab,event){
        setActive(tab.key);
        var tablist = event.currentTarget.parentElement.querySelectorAll("li");
        for(var i=0;i<tablist.length;i++){
            tablist[i].classList.remove(styles["active"]);
        }
        event.currentTarget.classList.add(styles["active"]);
        if(bindScroll){
           var toAnchor = calcScrollTop(tab.key);
           window.scroll({
                top:Math.floor(toAnchor)
            })
        }
    }
    window.addEventListener('scroll',(event)=>{
        if(tabContainerRef.current.getBoundingClientRect().top <= 0){
            tabRef.current.style.left=tabContainerRef.current.getBoundingClientRect().left + 'px';
            tabRef.current.style.width=tabContainerRef.current.clientWidth + 'px';
            tabRef.current.classList.add(styles['tabs-float']);
        }else{
            tabRef.current.removeAttribute('style');
            tabRef.current.classList.remove(styles['tabs-float']);
        }
        if(bindScroll){
            for(var i =0;i<items.length;i++){
                var c = calcScrollTop(items[i].key);
                if(window.scrollY>=c-2){ //2为容错率
                    if(items[i+1]!== undefined){
                        if(window.scrollY<calcScrollTop(items[i+1].key)){
                            console.log(items[i].key);
                            addActiveClass(items[i].key);
                        }
                    }else{
                        addActiveClass(items[i].key);
                    }
                }
            }
        }
    })
    function addActiveClass(key){
       
        setActive(key);
        var liElems = tabRef.current.querySelectorAll("li");
        for(var i=0;i<liElems.length;i++){
            if(liElems[i].getAttribute('data-key') === key){
                console.log(liElems[i].getAttribute('data-key'),key);
                liElems[i].classList.add(styles["active"]);
            }else{
                liElems[i].classList.remove(styles["active"]);
            }
        }
        
    }
    function calcScrollTop(key){
        var menuHeight = document.querySelector(`.${styles['tabs']}`).offsetHeight;
        var ele = document.getElementById(`${key}`).getBoundingClientRect().top;
        var bu = window.getComputedStyle(document.querySelector(`.${styles['tabContainer']}`)).paddingTop;
        var buu = Number(bu.match(/(\d+)(\.)?(\d+)/g)[0]);
        var toAnchor = ele + window.scrollY - menuHeight - buu;
        return toAnchor;
    }
    return <>
        <div style={style} className={styles["tabContainer"]} ref={tabContainerRef}>
            <div style={{position:'relative'}}>
                <ul className={styles["tabs"]} ref={tabRef}>
                    {items.map((v,i)=><li data-key={v.key} className={defaultActiveKey===v.key?styles['active']:null} key={i} onClick={(e)=>activeTab(v,e)}>
                        <p style={{color:'inherit',textDecoration:'none'}}>{v.label}</p>
                    </li>)}
                </ul>
                {bindScroll?(
                    <div>
                        {children}
                    </div>
                ):(
                    <div>
                        {items.filter(item=>item.key===active)[0].children}
                    </div>
                )}
            </div>
        </div>
    </>
}