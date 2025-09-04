import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from '@com/css/com.module.css';
const m = {
    title:{
        padding:'2%',
        width:'88%',
        margin:'0 auto'
    }
}
function MenuList({isSub,list,itemConHeight,itemClicked,navBack}){
    let navigate = useNavigate();

    return <div style={{height:itemConHeight}}>
        {isSub?(
        <div style={{borderBottom:'1px solid #ddd'}}>
            <div onClick={navBack} style={{display:'flex',flexFlow:'row nowrap',alignItems:'center',justifyContent:'flex-start',lineHeight:'4.2rem',cursor:'pointer',width:'88%',margin:'0 auto'}}>
                <SvgIcon icon="arrow_left" width="28" height="28" fill="#000000ff" stroke="none"/>
                <h1 style={{marginLeft:'1.2rem'}}>Item 12</h1>
            </div>
        </div>
        ):null}

        {list.map((item,index)=>(
            <div key={index}>
                <h2 style={m.title}>{item.title}</h2>
                <ul style={{listStyleType:'none'}}>
                    {item.items.map((iit,iid)=>
                        <li className={styles["menuItem"]} key={iid} style={{fontSize:'1.4rem',lineHeight:'4.2rem'}} onClick={()=>{
                            if(iit.url){
                                navigate(iit.url);
                            }
                            itemClicked(iit.subItems);
                            
                        }}>
                            <div style={{width:'88%',listStyleType:'none',margin:'0 auto'}}>
                                <p >{iit.title}</p>
                                {iit.subItems?(<p>
                                    <SvgIcon icon="greater_than" width="20" height="20" style={{verticalAlign:'middle'}} strokeWidth="2" stroke="var(--disabled-color)"/>
                                </p>):null}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        ))}
    </div>
}

export default function MenuGenerator({list,itemConHeight,itemClicked,navBack}){
    const [level,setLevel] = useState([list]);
    useEffect(()=>{
       //console.log('level',level)
    },[level])
    return level.map((l,x)=>{
        return <MenuList isSub={x>0} list={l} itemConHeight={itemConHeight} itemClicked={(si)=>{
            if(si && si.length){ //需要自行实现通过接口加载子级菜单或者以key判断是否还有子级菜单
                setLevel(x=>[...x,si]);
            }
            itemClicked(si,x);
        }} navBack={()=>{
            level.splice(level.length-1,1);
            var arr = Object.assign([],level);
            setLevel(arr);
            navBack(x);
        }} key={x}/>;
    });
}