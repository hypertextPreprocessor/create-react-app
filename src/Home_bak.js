import React, { useEffect,useState } from 'react';
import {useWindowState} from '@caveats/externalStore';
import '@/css/main.css';
import bg1 from '@img/bg1.gif';
import list1 from '@img/R.jpeg';
import brainstrorm from "@img/StickyNotePacks.jpg";
import logo from '@img/logo.png';
import wuliu from '@img/wuliu.png';
import yinxiao from '@img/yinxiao.png';
import sanji from '@img/sanji.png';
import dingdan from '@img/dingdan.png';
import fenbu from '@img/fenbu.png';
import wxmini from '@img/wxmini.png';
import phone from '@img/phone.png';
import pc from '@img/pc.png';
import cantingsumiao from "@img/0.gif"
import xxee from "@img/cantingsumiao.png"
import px55 from '@img/55x.png';
export default function Home(){
    const winRec = useWindowState();

    const begining = {
        width:'100%',height:winRec.winHeight,backgroundImage:`url(${bg1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        justifyContent:'center',
        color:'#ffffff',

    }
    const logoStyle = {
        
        width:'20%',
        top:'10px',
        left:'10px'
    }
    const cases = {
        position:'fixed',
        top:0,
        left:0,
        width:'100%'
    }
    const caselist = {
        width:'100%',
        position:'absolute',
        top:0,
        left:0
    }
    const li1 = {
        width:'100%',height:winRec.winHeight,backgroundImage:`url(${brainstrorm})`,backgroundSize:'100%',backgroundRepeat:'no-repeat',backgroundPosition:'center center',
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
        justifyContent:'space-between' 
    }
    const li2 = {width:'100%',height:winRec.winHeight,backgroundImage:`url(${list1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center center',
    backgroundColor:'#00000096',
    backgroundBlendMode:'overlay',
    color:'#ffffff',
    position:'absolute'
    }
    const cote = {
        position:'absolute',
        top:0,
        left:0,
        width:'10rem',
        height:'10rem',
        borderRadius:'10rem',
        overflow:'hidden',
        backgroundColor:'rgb(223 223 223 / 81%)',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        justifyContent:'center',
        padding:'1rem'
    }
    useEffect(()=>{
        window.skrollr.init({
            /*
            render:function(data){
                console.log(data);
            },
            */
            keyframe:function(element,name,direction){
                console.log(element,name)
                
            }
        });
    },[]);
    return (
        <section style={{backgroundColor:'#202130',position:'relative'}}>
            <div style={{width:'100%',height:winRec.winHeight,position:'absolute',top:0,left:0}} id="anchorBody"></div>
            <div className="begining" data-emit-events data-anchor-target="#anchorBody" data-top-top="transform[bounce]:rotate(0deg);opacity:1" data-top-bottom="transform[bounce]:rotate(360deg);opacity:0" style={begining}>
                {/*
                <div style={logoStyle} data-0="transform[bounce]:scale(0.1)" data-300="transform[bounce]:scale(1)"><img style={{width:'100%'}} src={logo} alt="logo"/></div>
                */}
                <h1 style={{padding:'2rem',fontSize:'5rem'}}>免费的绝不是最贵的 </h1>
                <h2 style={{padding:'1rem',fontSize:'3rem'}}>我们郑重申明：无任何商业套路！</h2>
                <p style={{padding:'0.5rem',fontSize:'1.8rem'}}>让天下没有烫手的山芋，让平民也有趁手的工具</p>
                <button style={{padding:'1rem 2rem',marginTop:'2rem',cursor:'pointer'}}>查看规则 &gt;&gt;</button>
            </div>
            <div style={cases}>
                <ul>
                    <li style={{...caselist}} className="cli1">
                        {/*<div style={li1}  data-800="opacity:0" data-2000="opacity:1"></div>*/}
                        <div style={li1} data-emit-events data-anchor-target="#anchorBody" data-top-top="opacity:0" data-top-bottom="opacity:1" className="cli1_con">
                            <div style={{display:'block',width:'10rem',margin:'0 auto',position:'absolute',left:'5%'}}>
                                <div style={cote} data-800="background-color:rgba(223, 223, 223, 0.81);color:rgba(0,0,0,0.81)" data-2000="background-color:rgba(119, 76 ,206,0.81);color:rgba(255,255,255,0.81))"><h1>独立站商城 + 推广运营工具</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,14rem)"><img style={{width:'80%',margin:'0 auto'}} src={fenbu} alt=""/><h1>分销策略</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,28rem)"><img style={{width:'80%',margin:'0 auto'}} src={dingdan} alt=""/><h1>订单系统</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,42rem)"><img style={{width:'80%',margin:'0 auto'}} src={sanji} alt=""/><h1>仓库管理</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,-14rem)"><img style={{width:'80%',margin:'0 auto'}} src={yinxiao} alt=""/><h1>营销策略</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,-28rem)"><img style={{width:'80%',margin:'0 auto'}} src={wuliu} alt=""/><h1>物流</h1></div>
                            </div>
                            <div style={{width:'10rem',margin:'0 auto',position:'absolute',right:'5%'}}>
                                <div style={cote} data-800="background-color:rgba(223, 223, 223, 0.81);color:rgba(0,0,0,0.81)" data-2000="background-color:rgba(119, 76 ,206,0.81);color:rgba(255,255,255,0.81))"><h1>客户端</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,14rem)"><img style={{width:'80%',margin:'0 auto'}} src={phone} alt=""/><h1>移动设备-H5</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,28rem)"><img style={{width:'80%',margin:'0 auto'}} src={pc} alt=""/><h1>PC-H5</h1></div>
                                <div style={cote} data-800="transform:translate(0rem,0rem)" data-2000="transform:translate(0rem,-14rem)"><img style={{width:'80%',margin:'0 auto'}} src={wxmini} alt=""/><h1>微信小程序</h1></div>
                            </div>
                        </div>
                    </li>
                    <li style={{...caselist}} data-emit-events className="cli2" data-3000="opacity:0" data-4000="opacity:1">
                        <div style={li2} className="cli2_con">
                            {/* 
                            <div><h1>本地部署 - 省去服务器和平台抽成</h1></div>
                            <div><h1>多种支付渠道 - 微信/支付宝支付，触碰支付/京东支付</h1></div>
                            */}
                            <div style={{height:'100%',display:'flex',flexFlow:'column nowrap',alignItems:'center',justifyContent:'center'}}>
                                <img data-4000="transform:rotate(0deg) scale(0.1);" data-6000="transform:rotate(360deg) scale(1);"  style={{width:'41.7rem'}} src={cantingsumiao} alt=""/>
                            </div>
                            <img style={{position:'relative',width:'23rem'}} src={px55} alt=""/>
                            <svg width="1100" height="1100" style={{background:"blue",top:0,position:'absolute'}}>
                                <path d="m 51.511398,89.777005 c 0,0 73.587712,-14.71754 67.111992,44.741325" fill="none" stroke="white" strokeWidth="2" />
                                <rect x="100" y="100" width="288" height="120" fill="none" stroke="white" strokeWidth="2"  strokeDasharray="8,8"/>
                            </svg>
                        </div>
                    </li>
                    <li style={{...caselist,backgroundColor:"#ffffff",height:winRec.winHeight}} className="cli3" data-8000="opacity:0" data-10000="opacity:1" data-emit-events>
                                <div>
                                    <h1 style={{color:"#ffffff"}}>前沿科技展示</h1>
                                </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </section>
    )
}