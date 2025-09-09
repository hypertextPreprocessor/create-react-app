import React from 'react';
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
/*
    style - style for menu list on the every level of ul
    items - list item ,Array-object, [{label,key,icon,children}]
    mainStyle - style on main (group) menu
    subStyle - style on sub (children items) menu
    expandAll - Boolean | string, wheather to expand all the items on every menu item
                    -true expand all 
                    -false expand the first item
                    -string expand the spencified menu on key (string) 
    
*/
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
    return items.map((item,index)=><ul key={item.key} style={{...computedSytle}}>
        <li style={{cursor:'pointer'}}>
            <div className={cn('flex','align-center','justify-between','padding-sm')} style={(item.children && item.children.length)?mainMenuStyle:subMenuStyle}>
                <p className={cn('flex','align-center','justify-start','gap-sm')}>
                    {item.icon?item.icon:null}
                    <span>{item.label}</span>
                </p>
                <p>
                    {(item.children && item.children.length)?
                        <SvgIcon style={{verticalAlign:'middle'}} icon="greater_than" width="14" height="14" strokeWidth={2}/>:null
                    }
                    
                </p>
            </div>
            {item.children && item.children.length && <Navigation items={item.children}/>}
        </li>
    </ul>)
}