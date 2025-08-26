import React from "react";
import image from "@img";
import { NavLink } from "react-router";
const styles={
    h1:{
        padding:'1.2rem',
        fontSize:'1.5rem'
    },
    prod:{
        
    },
    prodimg:{
        width:'100%'
    },
    prodOuterCon:{
        backgroundColor:'#fff'
    },
    prodCon:{
        //flex:1
        width:'48%'
    },
    conntz:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'center',
        gap:'2%'
    },
    title:{
        fontSize:'1.3rem',
        paddingBottom:'1.2rem'
    },
    seemore:{
        padding:'1.2rem',
        fontSize:'1.3rem'
    }
}
export default function ProductCabin({productArrayList=[],title="Product Cabin"}){
    return <div style={styles.prodOuterCon}>
        <h1 style={styles.h1}>{title}</h1>
        <div style={styles.conntz}>
        {productArrayList.map((p,i)=><div key={i} style={styles.prodCon}>
            <p style={styles.prod}><img style={styles.prodimg} src={image['example']} alt=""/></p>
            <p style={styles.title}>Desktops</p>
        </div>)}
        </div>
        <NavLink style={styles.seemore} to="/toMore">See more</NavLink>
    </div>;
}
export function TopSellerProduct({productArrayList=[],title="Product Title"}){
    return <div style={{backgroundColor:"#ffffff"}}>
        <h1 style={styles.h1}>{title}</h1>
        <div>
            {productArrayList.map((p,i)=>
            <div key={i} style={{display:'flex',flexFlow:'row nowrap'}}>
                <div style={{width:'23%',padding:'2%'}}><p><img style={{width:'100%'}} src={image['example']} alt=""/></p></div>
                <div style={{width:'71%',padding:'2% 2% 2% 0',fontSize:'1.5rem'}}>
                    <p style={{display:'-webkit-box',WebkitBoxOrient:'vertical',WebkitLineClamp:2,overflow:'hidden'}}>Moncozy KleanPal Pro Baby Bottle Washer,Sterilizer & Dryer - All-inOne Product,nice and hight quility and qs guerrentee</p>
                    <p className="priceTag">
                        <span>$</span><span>299</span><sup>99</sup>
                    </p>
                </div>
            </div>)}
        </div>
    </div>
}
export function Tarifa({title="Tarifa"}){
    return <div style={{backgroundColor:'#ffffff'}}>
        <h1 style={styles.h1}>{title}</h1>
        <p><img style={{width:'100%'}} src={image['example']} alt=""/></p>
    </div>
}