import React from 'react';
import { I18nextProvider } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import resourcesToBackend from 'i18next-resources-to-backend'
import i18n from "i18next";
import { RouterProvider } from "react-router/dom";
import {ThemeProvider} from "styled-components";
import theme from "@css";
import router from "@router";
import '@css/main.css';
import '@css/home.css';


//const fs = import('node:fs');

//const path = require('path');
//import { useQuery } from '@tanstack/react-query'

i18n.use(detector).use(resourcesToBackend((lng,ns)=>
    import(`@locale/${lng}/${ns}.json`)
)).init({
    lng:localStorage.getItem('i18nextLng')?localStorage.getItem('i18nextLng'):'zh-Hans-CN',
    ns:['common','contents','widgets'],
    fallbackLng: 'zh-Hans-CN',
    debug: true,
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage','sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage','cookie'],
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupSessionStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,
        htmlTag: document.documentElement
    }
});
// eslint-disable-next-line no-undef
const PUBLICPATH = PUBLIC_PATH || '/';
export default function App(){
    return (
        <I18nextProvider i18n={i18n} defaultNS={['common']}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} unstable_onError={(error,errorInfo)=>{console.error(error,errorInfo)}}/>
            </ThemeProvider>
        </I18nextProvider>
    )
}