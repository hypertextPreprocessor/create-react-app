import React from 'react';
import cn from "classnames";
import * as styles from "@com/css/com.module.css";
export default function Sso({style={},providerList=[],iconSize=50}){
    var computedStyle = Object.assign({},{
        flexFlow:'column nowrap',
        width:iconSize + 'px'
    },style)
    return <ul style={{listStyle:'none',flexFlow:'row wrap'}} className={cn('flex','align-center','gap-sm','justify-center')}>
        {providerList.map((item,index)=><li key={index} style={{cursor:'pointer'}}>
            <p style={computedStyle} className={cn('padding-sm','flex')}>
                <img style={{width:'100%',verticalAlign:'middle'}} src={item.icon} alt={item.name}/>
                <span className={cn('padding-tb-sm','text-center','text-lg')}>{item.name}</span>
            </p>
        </li>)}
    </ul>
} 