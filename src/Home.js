import React ,{useEffect} from 'react';
import {useWindowState} from '@caveats/externalStore';
import { useTranslation } from 'react-i18next';
import { Outlet } from "react-router";
//import LanguageSelect from '@/components/common';
import '@css/home.css';
export default function Home(){
    const winRec = useWindowState();
    const { t ,i18n,ready} =  useTranslation();
    useEffect(()=>{
        //document.documentElement.setAttribute('lang','zh-Hans-CN');
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
        <>
            <header></header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}