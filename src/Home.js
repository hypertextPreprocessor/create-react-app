import React ,{useEffect,useRef,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useWindowState} from '@caveats/externalStore';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '@/components/common';
import Bitmap from "@img/bitmap.svg";
import fenbu from '@img/fenbu.png';
import dingdan from '@img/dingdan.png';
import sanji from '@img/sanji.png';
import yinxiao from '@img/yinxiao.png';
import wuliu from '@img/wuliu.png';
import wxmini from '@img/wxmini.png';
import phone from '@img/phone.png';
import pc from '@img/pc.png';
import Rc from "@img/R.jpeg";
import mjiang from '@img/mjiang.jpeg';
import zhuoqiushe from '@img/zhuoqiushe.jpg';
import c1 from "@img/c1.webp";
import c2 from "@img/c2.webp";
import c3 from "@img/c3.webp";
import c4 from "@img/c4.webp";
import tupian from "@img/tupian.png";
import shipin from "@img/shipin.png";
import face1 from "@img/face-01.png";
import face2 from "@img/face-02.png";
import face3 from "@img/face-03.png";
import '@css/home.css';
import 'swiper/css';

export default function Home(){
    const winRec = useWindowState();
    const { t ,i18n,ready} =  useTranslation();
    const caseLeft = useRef(null);
    const caseRight = useRef(null);
    const changeBtn = useRef(null);
    const clippele = useRef(null);
    const faceswitchlist = useRef(null);
    const [face,setFace] = useState(c2);
    useEffect(()=>{
        //document.documentElement.setAttribute('lang','zh-Hans-CN');
        //i18n.changeLanguage('zh-Hans-CN');
        window.skrollr.init({
           
            
            render:function(data){
                //console.log('data.curTop',data.curTop);
            },
            
            keyframe:function(element,name,direction){
                caseLeft.current.classList.add('caseLeft');
                caseRight.current.classList.add('caseRight');
                if(element.className.includes('scr2')){
                   console.log(caseLeft.current);
                   caseLeft.current.classList.remove('caseLeft');
                   caseRight.current.classList.remove('caseRight');
                }
                
            }
        });
        var plist = faceswitchlist.current.querySelectorAll('p');
        //console.log(plist);
        for(let i=0;i<plist.length;i++){
            plist[i].onclick=function(){
                plist.forEach((v)=>{
                    v.classList.remove('active');
                })
                this.classList.add('active');
                
                if(i===0){
                    setFace(c2);
                }else if(i===1){
                    setFace(c4);
                }else if(i===2){
                    setFace(c3);
                }
            }
        }
    },[])
    function mouseenterevent(e){
        e.target.onmousemove=function(en){
            clippele.current.style.clipPath=`inset(0 0 0 ${en.x}px)`;
            changeBtn.current.style.left=en.x + 'px';
        }
        
    }
    return (
        <section style={{width:'100%',position:'relative'}}>
            <LanguageSelect />
            <div className="head" data-emit-events style={{height:winRec.winHeight}} data-0="opacity:1;transform:rotate(0deg) scale(1);z-index:99;" data-1000="opacity:0;transform:rotate(360deg) scale(3);z-index:-1;">
                <h1> { t('s1-title1') } </h1>
                <h2>{ t('s1-title2') }</h2>
                <p>{ t('s1-title3') }</p>
                <p><button>{t('widgets:ruleBtn')} &gt;&gt;</button></p>
            </div>
            <div className="body" data-0="z-index:100;" data-1000="z-index:100">
                <ul>
                    <li style={{height:winRec.winHeight}} className="scr1" data-emit-events data-0="background:rgba(0,0,0,0.1);transform:scale(0.1);border-radius:100%;z-index:99;display:block;" data-1000="background:rgba(0,0,0,1);transform:scale(1);border-radius:0%;;z-index:2;display:block;">
                        <svg 
                            width={winRec.winWidth} 
                            height={winRec.winHeight} 
                            viewBox={`0,0,${winRec.winWidth},${winRec.winHeight}`} 
                            preserveAspectRatio="xMinYMin meet" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                             <text x={winRec.winWidth / 2 } y="90" data-1000="@y:0" data-2000={`@y:${winRec.winHeight - 20}`} stroke="#ffffff" fill="#ffffff" fontSize="3rem" style={{transform:'translateX(-380px)'}}>多元化玩法,低层本高度可定制化,业务范围广泛</text>
                             <image xlinkHref={Bitmap} x="0" y="0" width={winRec.winWidth} height={winRec.winHeight} data-0="@width:0%;@height:0%;" data-1000="@width:100%;@height:100%;"/>

                        </svg>
                        <div className="scr1_sub2">
                            <div>
                                <ul>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(-280px);"><img src={fenbu} alt=""/><h1>分销策略</h1></li>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(-140px);"><img src={dingdan} alt=""/><h1>订单系统</h1></li>
                                    <li><img src={sanji} alt=""/><h1>仓库管理</h1></li>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(140px);"><img src={yinxiao} alt=""/><h1>营销策略</h1></li>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(280px);"><img src={wuliu} alt=""/><h1>物流</h1></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(-140px);"><img src={phone} alt=""/><h1>移动设备-H5</h1></li>
                                    <li><img src={pc} alt=""/><h1>PC-H5</h1></li>
                                    <li data-1000="transform:translateY(0px);" data-2000="transform:translateY(140px);"><img src={wxmini} alt=""/><h1>微信小程序</h1></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li style={{height:winRec.winHeight}} className="scr2" data-emit-events  data-2200="display:flex;z-index:99;opacity:0;background:#ffffff;clip-path:circle(10%);" data-3200="display:flex;z-index:2;opacity:1;background:#ffffff;clip-path:circle(100%);">
                        <h1>万物物联 - 传递解决方案</h1>
                        <h2>设备您来采购.不包办旨在公开透明,不作为中间商介入.</h2>
                        <ul className="showcaselist">
                            <li className="caseLeft" ref={caseLeft}> 
                                <div className="showcaseitem">
                                    <div><img src={Rc} alt=""/></div>
                                    <h2>高档点餐系统</h2>
                                    <p>两套自由部署方案</p>
                                    <p>无佣设计-最大化商家利益</p>
                                    <p>跨平台设计</p>
                                </div>
                            </li>
                            <li>
                                <div className="showcaseitem">
                                    <div><img src={mjiang} alt=""/></div>
                                    <h2>共享棋牌系统</h2>
                                    <p>扫码进门</p>
                                    <p>小程序预约</p>
                                    <p>全程自助</p>
                                    <p>智能控制硬件</p>
                                    <p>远程控制</p>
                                    <p>实时监控</p>
                                </div>
                            </li>
                            <li className="caseRight" ref={caseRight}>
                                <div className="showcaseitem">
                                    
                                    <div>
                                        <img src={zhuoqiushe} alt=""/>
                                        
                                    </div>
                                    <h2>自助桌球室</h2>
                                    <p>全程自助</p>
                                    <p>自动结算</p>
                                    <p>实时监控</p>
                                    <p>预约排队</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li style={{height:winRec.winHeight,backgroundColor:'#0a1117'}} className="scr2" data-4200="display:block;z-index:99;opacity:0;background:#0a1117;clip-path:circle(10%);" data-5200="display:block;z-index:2;opacity:1;background:#0a1117;clip-path:circle(100%);">
                        <div style={{background:'#0a1117'}}><h1 style={{textAlign:'center',padding:'2rem 0',fontSize:'3rem',color:'#ffffff'}}>探索不止于此....</h1></div>
                        <Swiper>
                            <SwiperSlide>
                                <div style={{display:'flex',flexFlow:'row nowrap',background:'#0a1117'}}>
                                    <div style={{position:'relative',width:'70%'}} onMouseEnter={mouseenterevent}>
                                        <img style={{width:'100%'}} src={c1} alt=""/>
                                        <p ref={clippele} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
                                            <img style={{width:'100%'}} src={face} alt=""/>
                                        </p>
                                        <button ref={changeBtn} style={{cursor:"pointer",transform:'translate3d(-50%, 0, 0)',position:'absolute',height:'100%',border:'1px solid #F26161',outline:"0px",width:'0px'}}>
                                            <svg style={{position:"relative",left:'-10px'}} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="21" height="20" rx="6" fill="#F26161"></rect><path d="M15.8403 11.1597L15.3997 11.6003C14.549 12.451 14.1237 12.8763 13.8305 12.9368C13.3575 13.0344 12.8824 12.7802 12.7013 12.3325C12.589 12.055 12.707 11.4651 12.9429 10.2855C12.9607 10.1965 12.9696 10.152 12.9744 10.1072C12.9821 10.036 12.9821 9.96405 12.9744 9.89277C12.9696 9.84802 12.9607 9.80352 12.9429 9.71451C12.707 8.53486 12.589 7.94503 12.7013 7.66747C12.8824 7.21983 13.3575 6.96555 13.8305 7.06317C14.1237 7.12369 14.549 7.54902 15.3997 8.39968L15.8403 8.84034C16.2631 9.26308 16.4744 9.47445 16.5461 9.72101C16.599 9.90324 16.599 10.0968 16.5461 10.279C16.4744 10.5256 16.2631 10.7369 15.8403 11.1597Z" fill="white"></path><path d="M5.15965 8.84035L5.60032 8.39968C6.45098 7.54902 6.87631 7.12369 7.16954 7.06317C7.64247 6.96555 8.11759 7.21983 8.2987 7.66747C8.41099 7.94503 8.29303 8.53486 8.0571 9.71451C8.0393 9.80352 8.0304 9.84802 8.02557 9.89277C8.01788 9.96405 8.01788 10.036 8.02557 10.1072C8.0304 10.152 8.0393 10.1965 8.0571 10.2855C8.29303 11.4651 8.41099 12.055 8.2987 12.3325C8.11759 12.7802 7.64246 13.0344 7.16954 12.9368C6.87631 12.8763 6.45098 12.451 5.60032 11.6003L5.15965 11.1597C4.73692 10.7369 4.52555 10.5256 4.45392 10.279C4.40098 10.0968 4.40098 9.90324 4.45392 9.72101C4.52555 9.47445 4.73692 9.26308 5.15965 8.84035Z" fill="white"></path></svg>
                                        </button>
                                        <div ref={faceswitchlist} className="faceswitchlist" style={{position:'absolute',bottom:0,width:'100%',display:'flex',flexFlow:'row nowrap',gap:'2rem',justifyContent:"center"}}>
                                            <p className="active" style={{width:'3.5rem',cursor:'pointer'}}><img style={{width:'100%'}} src={face1} alt="face-01"/></p>
                                            <p style={{width:'3.5rem',cursor:'pointer'}}><img style={{width:'100%'}} src={face2} alt="face-02"/></p>
                                            <p style={{width:'3.5rem',cursor:'pointer'}}><img style={{width:'100%'}} src={face3} alt="face-03"/></p>
                                        </div>
                                    </div>
                                    <div style={{width:'auto',color:"#ffffff",display:'flex',flexFlow:"column nowrap",alignItems:'flex-start',justifyContent:"center"}}>
                                        <h1 style={{fontSize:"3rem"}}>无缝AI换脸</h1>
                                        <h2>综合多家AI大模型产品,制作各类美颜、搞笑、恶搞视频和图片</h2>
                                        <div style={{width:'100%'}}>
                                            <h1>点击即可生成,毫无PS痕迹~</h1>
                                            <div style={{width:'100%',marginTop:"3rem",border:'2px dashed #ffffff',borderRadius:'2rem',minHeight:'20rem',padding:'2rem',display:'flex',flexFlow:'row nowrap',alignItems:'center',justifyContent:'space-between'}}>
                                                <div>
                                                    <p>
                                                        <img style={{width:'25px'}} src={tupian} alt=""/>
                                                        <img style={{width:'25px'}} src={shipin} alt=""/>
                                                    </p>
                                                    <p style={{fontSize:"1.5rem"}}>拖动图片或视频到这里上传</p>
                                                </div>
                                                <button style={{backgroundColor:"#ffdc73",border:'none',padding:'0.5rem 1rem',borderRadius:'2rem'}}>选择文件</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div>
                                        <h1>既能配音，又能翻译-高质量仿真自然语言处理程序</h1>
                                        <ol>
                                            <li>使用Neural2 voices TTS自然语言引擎配 + LLM</li>
                                            <li>超过140多个国家的语言翻译和同声传译</li>
                                            <li>自动切换对应字幕</li>
                                            <li>支持多种音频/视频格式</li>
                                        </ol>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>3D 体验</SwiperSlide>
                            <SwiperSlide>webRTC</SwiperSlide>
                        </Swiper>
                    </li>
                    <li style={{height:winRec.winHeight}}>第四屏</li>
                    <li style={{height:winRec.winHeight}}>第五屏</li>
                    <li style={{height:winRec.winHeight}}>第六屏</li>
                </ul>
            </div>
            <nav className="dot">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </nav>
        </section>
    )
}