import React ,{useEffect} from 'react';
import {useWindowState} from '@caveats/externalStore';
import { useTranslation } from 'react-i18next';
import '@css/home.css';
export default function Home(){
    const winRec = useWindowState();
    const { t ,i18n,ready} =  useTranslation();
    useEffect(()=>{
        document.documentElement.setAttribute('lang','zh-Hans-CN');
        //i18n.changeLanguage('zh-Hans-CN');
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
    },[])
    return (
        <section style={{width:'100%',position:'relative'}}>
            <div className="head" style={{height:winRec.winHeight}}>
                <h1> { t('s1-title1') } </h1>
                <h2>我们郑重申明：无任何商业套路！</h2>
                <p>让天下没有烫手的山芋，让平民也有趁手的工具</p>
                <p><button>查看规则 &gt;&gt;</button></p>
            </div>
            <div className="body">
                <ul>
                    <li>第一屏</li>
                    <li>第二屏</li>
                    <li>第三屏</li>
                    <li>第四屏</li>
                    <li>第五屏</li>
                    <li>第六屏</li>
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