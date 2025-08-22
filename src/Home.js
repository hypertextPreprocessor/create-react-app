import React from 'react';
//import {useWindowState} from '@caveats/externalStore';
//import { useTranslation } from 'react-i18next';
import { Outlet } from "react-router";
import Header from '@/header';
import Footer from "@/footer";
//import LanguageSelect from '@/components/common';
import '@css/home.css';
export default function Home(){
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}