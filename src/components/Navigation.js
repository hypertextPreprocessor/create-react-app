import React, { useState } from 'react';
import cn from "classnames";
import styled from 'styled-components';
import {tripleControl} from "@utlis";
import SvgIcon from "@img/icons/SvgIcon";
/*
    style - style for menu list on the every level of ul
    items - list item ,Array-object, [{label,key,icon,children}]
    mainStyle - style on main (group) menu
    subStyle - style on sub (children items) menu
    expandAll - Boolean | string, wheather to expand all the items on every menu item
                    -true expand all 
                    -false Collapse all the item
                    -string expand the spencified menu on key (string) 
    
*/

const StyledNavigation = styled.div`
      &[style]:hover{
        color:${props=>props.theme.tarifaColor};
        background:${props=>props.item.children && props.item.children.length?'none':props.theme.lightTarifa} !important;
      }
      & ~ ul{
        height:${props=>props.expandall==='true'?'auto':'0'};
        overflow:hidden;
        transition:all .3s 0s ease-in-out;
      }
      &.active ~ ul{
        height:auto !important;
      }
      &>p:nth-of-type(2) svg{
        transition:all .3s 0s ease-in-out;
        transform:rotate(0deg);
      }
      &.active >p:nth-of-type(2) svg{
        transform:rotate(90deg);
      }
`;

export default function Navigation({style={},items,mainStyle={},subStyle={},expandAll=true}){
    const mainMenuStyle = {
        ...mainStyle,
        background:"#ffffffff"
    }
    const subMenuStyle = {
        ...subStyle,
        background:"#ebebebff"
    }
    const computedSytle=Object.assign({},{
        listStyleType:'none',
        fontSize:'1.4rem'
    },style);
    function itemClick(event,item){
        //console.log(item);
        //console.log(event.currentTarget.clientHeight)//36
        //console.log(event.currentTarget.style.getPropertyValue('height')); //""
        //console.log(window.getComputedStyle(event.currentTarget).getPropertyValue('height')) //20px
        if(event.currentTarget.clientHeight!==0){   //收
            var ce = event.currentTarget.parentElement.querySelectorAll('ul');
            for(var i=0;i<ce.length;i++){
                ce[i].style.setProperty('height',0);
            }
            //event.currentTarget.style.setProperty('height',0);
        }
        if(event.currentTarget.classList.contains('active')){
            event.currentTarget.classList.remove('active');
        }else{
            event.currentTarget.classList.add('active');
        }
        
    }
    return items.map((item,index)=><ul key={item.key} style={{...computedSytle}}>
        <li style={{cursor:'pointer'}}>
            <StyledNavigation 
                onClick={(event)=>{itemClick(event,item)}} 
                expandall={(typeof expandAll=== 'boolean' && expandAll)?'true':'false'} item={item} 
                className={cn('flex','align-center','justify-between','padding-sm',{'active':tripleControl(expandAll,item.key)})} 
                style={(item.children && item.children.length)?mainMenuStyle:subMenuStyle}
            >
                <p className={cn('flex','align-center','justify-start','gap-sm')}>
                    {item.icon?item.icon:null}
                    <span>{item.label}</span>
                </p>
                <p>
                    {(item.children && item.children.length)?
                        <SvgIcon style={{verticalAlign:'middle'}} icon="greater_than" width="14" height="14" strokeWidth={2}/>:null
                    }
                </p>
            </StyledNavigation>
            {item.children && item.children.length && <Navigation items={item.children}/>}
        </li>
    </ul>)
}
