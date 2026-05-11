import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {images} from "/assets/index.js";
const WrapperCompany = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;
const xonx = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}; 
//console.log(images);
export default function Company(){
    const { t } = useTranslation(['common']);
    
    return <div style={xonx}><WrapperCompany className="w-full xl:w-3/4 m-auto text-xl gap-x-6">
        <div className="flex-3">
            <p className="p-3 rounded-lg border-2 border-sky-300" style={{textIndent:'3rem'}}>{t('company.description')}</p>
        </div>
        <div className="flex-1 text-center">
            <p className="rounded-lg overflow-hidden border-2 border-sky-300"><img src={images['1778123584175']} alt="CEO"/></p>
            <p className="text-lg font-bold py-3">{t('company.name')}</p>
            <p className="text-base">{t('company.address')}</p>
        </div>
    </WrapperCompany></div>
}
