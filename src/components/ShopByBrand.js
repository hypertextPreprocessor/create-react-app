import React from "react";
import {useWindowState} from "@caveats/externalStore";
import image from "@img";
export default function ShopByBrand({list=[]}){
    const {devices} = useWindowState();
    var width = devices.isDesktop?'calc((100% - 1% * 5)/5)':'100%';
    return <>
        <div style={{width:'100%',position:'relative',height:'5.2rem',backgroundColor:'#ffffff',marginTop:'1.2rem'}}>
            <hr style={{width:'100%',position:'absolute',top:'50%'}}/>
            <h1 style={{position:'relative',top:'1.6rem',background:'white',width:'fit-content',padding:'0 1.2rem',left:'50%',marginLeft:'-9rem'}}>SHOP BY BRAND</h1>
        </div>
        <div style={{width:'100%',display:'flex',flexFlow:'row wrap',gap:'1%'}}>
            {list.map((v,i)=><p key={i} style={{width:width,marginBottom:'1%'}}>
                <img style={{width:'100%',verticalAlign:"middle"}} src={image["R"]} alt=""/>
            </p>)}
        </div>
    </>
}