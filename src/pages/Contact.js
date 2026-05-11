import React from 'react';
import { useTranslation } from 'react-i18next';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styled from 'styled-components';
import {images} from "/assets/index.js";
const WrapperContact = styled.div`
    & > div:nth-child(1)>*{
        display: flex;
        gap:10px;
        align-items: center;
        justify-content: flex-start;
        min-width:365px;
    }
    & > div:nth-child(1) img{
        width:24px;
    }
    & > div:nth-child(2)>ul>li img{
        width:32px;
        cursor: pointer;
    }
`;
const xonx = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}; 
export default function Contact(){
    const {t} = useTranslation();
    return <div style={xonx}><WrapperContact className="w-full xl:w-3/4 m-auto text-xl gap-x-6">
        <div className="flex flex-col items-center justify-start">
            <h1 className="text-3xl text-bold py-3"><img src={images['logo']} alt="tel"/>{t("company.name")}</h1>
            <p className="py-3 text-2xl"><img src={images['tel']} alt="tel"/><a href="tel:+8615920419705">+86 159 2041 9705</a></p>
            <p className="py-3"><img src={images['location_fill']} alt="tel"/>{t("company.address")}</p>
        </div>
        <div className="mt-10">
            <ul className="flex flex-row items-center justify-center gap-6">
                <li><a href="https://wa.me/+8615920419705" target="_blank" rel="noreferrer"><img src={images['whatsapp']} alt=''/></a></li>
                <li>
                    <PhotoProvider>
                        <PhotoView src={images['wxqrcode']}>
                            <img src={images['icon64_wx_logo']} alt=''/>
                        </PhotoView>
                    </PhotoProvider>
                </li>
                <li><a href="https://t.me/seekonelinesky" target="_blank" rel="noreferrer"><img src={images['telegram']} alt=''/></a></li>
            </ul>
        </div>
    </WrapperContact></div>;
}