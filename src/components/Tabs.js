import React, { useRef, useState } from 'react';
import * as styles from '@com/css/com.module.css';
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
            /*
            window.scroll({
                top:
            })
            */
           var ele = document.getElementById(`${tab.key}`);
           console.log(ele.getBoundingClientRect());
           /*
           window.scroll({
                top:ele.getBoundingClientRect().top
            })
           */
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
    })
    return <>
        <div style={style} className={styles["tabContainer"]} ref={tabContainerRef}>
            <div style={{position:'relative'}}>
                <ul className={styles["tabs"]} ref={tabRef}>
                    {items.map((v,i)=><li className={defaultActiveKey===v.key?styles['active']:null} key={i} onClick={(e)=>activeTab(v,e)}>
                        <a style={{color:'inherit',textDecoration:'none'}} href={'#' + v.key}>{v.label}</a>
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