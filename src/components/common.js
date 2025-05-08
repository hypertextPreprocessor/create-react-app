import React, { useEffect,useRef } from 'react';
import i18n from "i18next";
export default function LanguageSelect(){
    const selectRef = useRef(null);
    function idomaOrder(lng){
        if(lng === 'ar'){
            document.documentElement.setAttribute('dir','rtl');
        }else{
            document.documentElement.setAttribute('dir','ltr');
        }
    }
    useEffect(()=>{
        var storage = localStorage.getItem('i18nextLng');
        if(storage){
            idomaOrder(storage);
            for(var i=0;i<selectRef.current.options.length;i++){
                if(selectRef.current.options[i].value === storage){
                    selectRef.current.options.selectedIndex = i;
                }
            }
        }
    },[])
    return (
        <select ref={selectRef} name="language" className="languageSelect" onChange={(v)=>{
            idomaOrder(v.target.value);
            //document.documentElement.setAttribute('lang',v.target.value);
            i18n.changeLanguage(v.target.value);
        }}>
            <option value="zh-Hans-CN">简体中文</option>
            <option value="en">English</option>
            <option value="es-419">Español</option>
            <option value="ar">العربية</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="ja">日本語</option>
            <option value="ko">한국인</option>
            <option value="ru">Русский</option>
        </select>
    )
}