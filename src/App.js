import React, { useEffect } from 'react';
import { I18nextProvider,useTranslation } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import resourcesToBackend from 'i18next-resources-to-backend'
import i18n from "i18next";
import { BrowserRouter, Routes, Route } from "react-router";
import '@css/main.css';
import Home from './Home';
import Menu from '@/components/Menu';
import Company from '@/pages/Company';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import Rule from '@/pages/Rule';
import Calculator from '@/pages/Calculator';
import "./index.css";

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
    transSupportBasicHtmlNodes: true,
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
            <BrowserRouter basename={PUBLICPATH}>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Company />} />
                    <Route path="/team" element={<Team/>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rule" element={<Rule />} />
                    <Route path="/calculator" element={<Calculator/>} />
                </Routes>
            </BrowserRouter>
        </I18nextProvider>
    )
}