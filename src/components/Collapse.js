import React ,{useEffect, useState} from 'react';
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
import {collapse_title,collapse_title_left,collapse_ul,collapse_board_style,collapse_active} from "@com/css/com.module.css";
export default function Collapse({children,items=[],bordered=true,titleBgColor="bg-gray",defaultActiveKey,accordion=false,iconSize=35,icon}){
    if(!icon){
        icon = <SvgIcon icon="sharp_v" width={iconSize} height={iconSize} style={{transform:'rotate(180deg)'}} stroke="none" fill="var(--disabled-color)" strokeWidth="3"/>;
    }
    function activeThisPanel(e,itm){
        var clickObj = e.currentTarget;
        //console.log(clickObj.nextElementSibling)
        var boardPanel = clickObj.parentElement;//.querySelector(`div.${collapse_board_style}`);
        var iconSvg = clickObj.querySelector("div:nth-of-type(2)");

        if(accordion){ //si true , remains panel are closed state except the current activing one;
            var lis = boardPanel.parentElement.querySelectorAll("li");
            for(var i=0;i<lis.length;i++){
                lis[i].classList.remove(collapse_active);
            }
        }
        if(boardPanel.classList.contains(collapse_active)){
            boardPanel.classList.remove(collapse_active);
        }else{
            boardPanel.classList.add(collapse_active);
        }

        activeAtPanel(itm);
       
    }
    function activeAtPanel(itm){

    }
    useEffect(()=>{

    },[]);
    if(children){
        if(/Array/i.test(Object.prototype.toString.call(children))){
            if(children.length){
                return <ul className={collapse_ul}>
                    {items.map((item,index)=>(
                        <li key={index} className={cn({collapse_active:(defaultActiveKey===item.key)})}>
                            <div className={cn(collapse_title,'flex','padding-sm','align-center','justify-between',titleBgColor,{'solids-bottom':bordered})} onClick={(event)=>{activeThisPanel(event,item)}}>
                                <div className={cn(collapse_title_left)}>
                                    {item.label}
                                </div>
                                <div>
                                    {icon}
                                </div>
                            </div>
                            <div className={cn(collapse_board_style,'padding-sm')}>
                                {children.map(child=>child.type === Collapse.Item?(child.props.children.props['data-key'] === item.key?child:null):null)}
                            </div>
                        </li>
                    ))}
                    
                </ul>;
            }
        }else if((/Object/i.test(Object.prototype.toString.call(children)) && children.type === Collapse.Item)){
            return children;
        }else{
            return <h1>子组件必须是1&lt;Collapse.Item&gt;</h1>
        }
    }else{
        return <ul className={collapse_ul}>
            {items.map((item,index)=>(
                <li key={index} className={cn({[collapse_active]:(defaultActiveKey===item.key)})}>
                    <div className={cn(collapse_title,'flex','padding-sm','align-center','justify-between',titleBgColor,{'solids-bottom':bordered})} onClick={(event)=>{activeThisPanel(event,item)}}>
                        <div className={cn(collapse_title_left)}>
                            {item.label}
                        </div>
                        <div>
                            {icon}
                        </div>
                    </div>
                    <div className={cn(collapse_board_style,'padding-sm')}>
                        {item.children?<Collapse.Item>{item.children}</Collapse.Item>:
                            <>Empty field</>
                        }
                    </div>
                </li>
            ))}
        </ul>
    };

    
}
Collapse.Item = function({children}){
    return <>{children}</>;
}
