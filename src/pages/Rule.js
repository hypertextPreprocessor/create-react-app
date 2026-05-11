import React,{useEffect,useRef} from 'react';
import { Link } from "react-router";
import { Trans,useTranslation } from 'react-i18next';
import styled from 'styled-components';

const WrapperRule = styled.div`
    & ul {
        list-style: disc;
        padding-left: 20px;
    }
    & .rightcontainer{
        position:relative;
    }
    & .rightcontainer h1{
        font-size:2rem;
    }
    & .leftcontainer>div>h1{
        font-size:2.5rem;
    }
    & .rightcontainer ul li {
        font-size:1.4rem;
        line-height: 3rem;
    }
    & .leftcontainer>div ul li{
        font-size:1.3rem;
        line-height:2.4rem;
    }
    & .leftcontainer>div h1,& .leftcontainer>div h2,& .leftcontainer>div h3,& .leftcontainer>div h4{
        line-height: 6rem;
    }
    & .leftcontainer>div h2{
        font-size:1.4rem;
        font-weight: 600;
    }
     & .leftcontainer>div h3{
        font-size:1.3rem;
        font-weight: 600;
    }
    & .leftcontainer>div p{
        font-size:1.3rem;
        line-height: 2.4rem;
        padding:6px 0;
    }
`;
export default function Rule(){
    const rightContainerRef = useRef(null);
    function scl(){
        if(document.documentElement.scrollTop === 0){
            rightContainerRef.current.style.position = 'relative';
            rightContainerRef.current.style.top = `0px`;
        }else{
            rightContainerRef.current.style.position = 'absolute';
            rightContainerRef.current.style.top = `${document.documentElement.scrollTop}px`;
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',scl);
        return ()=>{
            window.removeEventListener('scroll',scl);
        }
    },[]);
    const { t } = useTranslation(['common']);
    return <WrapperRule>
        <h1 className="text-3xl text-bold py-3 text-center">免费规则</h1>
        <div className="flex flex-row gap-6">
            <div className="flex-5 leftcontainer p-6">
                <div className="px-0 lg:px-[20%]">
                    <h1 id="p1">{t('rule.p1.title')}</h1>
                    <ul>
                        <li>{t('rule.p1.p11')}</li>
                        <li>{t('rule.p1.p12')}</li>
                        <li>{t('rule.p1.p13')}</li>
                        <li>{t('rule.p1.p14')}</li>
                        <li>{t('rule.p1.p15')}</li>
                    </ul>
                    <h1 id="p2">{t('rule.p2.title')}</h1>
                    <ul style={{listStyle:'none'}} className="bg-pink-200 border-2 border-pink-300 rounded-md p-4">
                        <li>{t('rule.p2.p21')}</li>
                        <li>
                            <ul>
                                <li>
                                    <Trans i18nKey="rule.p2.p22.p221" />
                                </li>
                                <li>
                                    <Trans i18nKey="rule.p2.p22.p222.p2221" />
                                    <ul style={{listStyleType:'digits'}}>
                                        <li>{t('rule.p2.p22.p222.p2222')}</li>  
                                        <li>{t('rule.p2.p22.p222.p2223')}</li>  
                                        <li>{t('rule.p2.p22.p222.p2224')}</li>  
                                        <li>{t('rule.p2.p22.p222.p2225')}</li>  
                                    </ul>
                                </li>  
                                <li><Trans i18nKey="rule.p2.p22.p223" /></li>
                            </ul>
                        </li>
                    </ul>
                    <h1 id="p3">{t('rule.p3.title')}</h1>
                    <ul style={{listStyleType:'digits'}} className="bg-blue-300 border-2 border-cyan-300 rounded-md p-4">
                        <li>{t('rule.p3.p31')}</li>
                        <li>{t('rule.p3.p32')}</li>
                        <li>{t('rule.p3.p33')}</li>
                        <li>{t('rule.p3.p34')}</li>
                        <li>{t('rule.p3.p35')}</li>
                        <li>{t('rule.p3.p36')}</li>
                        <li>{t('rule.p3.p37')}</li>
                    </ul>
                    <h1 id="p4">{t('rule.p4.title')}</h1>
                    <p className="text-2xl py-3">{t('rule.p4.p41')}</p>
                    <h2 id="p42">{t('rule.p4.p42.title')}</h2>
                    <h3 id="p421">{t('rule.p4.p42.p421.title')}</h3>
                    <ul style={{listStyleType:'none'}} className="border-2 border-black-400 rounded-md p-4">
                        <li>
                            <p>{t('rule.p4.p42.p421.p4211')}</p>
                            <ul>
                                <li>
                                    <p id="p4212">{t('rule.p4.p42.p421.p4212.title')}</p>
                                    <ul>
                                        <li>
                                            <Trans 
                                                i18nKey="rule.p4.p42.p421.p4212.p42121" 
                                                components={{
                                                    a1: <a href="#step1" target="_self" className="text-blue-500 underline" />,
                                                    a2: <a href="#step2" target="_self" className="text-blue-500 underline" />,
                                                    a3: <a href="#step3" target="_self" className="text-blue-500 underline" />
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p  id="p4213">{t('rule.p4.p42.p421.p4213.title')}</p>
                                    <ul>
                                        <li>{t('rule.p4.p42.p421.p4213.p42131')}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>{t('rule.p4.p42.p421.p4214')}</p>
                    <p>{t('rule.p4.p42.p421.p4215')}</p>
                    <p>{t('rule.p4.p42.p421.p4216')}</p>
                    <h3 id="p422">{t('rule.p4.p42.p422.title')}</h3>
                    <ul style={{listStyleType:'none'}} className="border-2 border-black-400 rounded-md p-4">
                        <li>{t('rule.p4.p42.p422.p4221')}</li>
                    </ul>
                    <h3 id="p423">{t('rule.p4.p42.p423.title')}</h3>
                    <ul style={{listStyleType:'none'}} className="border-2 border-black-400 rounded-md p-4">
                        <li>{t('rule.p4.p42.p423.p4231')}</li>
                        <li>
                            <ul>
                                <li id='step1'>{t('rule.p4.p42.p423.p4232')}</li>
                                <li id='step2'>{t('rule.p4.p42.p423.p4233')}</li>
                                <li id='step3'>{t('rule.p4.p42.p423.p4234')}</li>
                            </ul>
                        </li>
                    </ul>
                    <p>{t('rule.p4.p42.p423.p4235')}</p>
                    <p>
                        <Trans i18nKey="rule.p4.p42.p423.p4236" components={{
                            a1:<Link className="text-blue-500 underline" to="/calculator"/>
                        }} />
                    </p>
                    <h1 id="p5">{t("rule.p5.title")}</h1>
                    <ul style={{listStyleType:'digits'}} className="border-2 border-black-400 rounded-md p-4">
                        <li>
                            <p>{t("rule.p5.p51")}</p>
                            <p>{t("rule.p5.p52")}</p>
                        </li>
                        <li>
                            <p>{t("rule.p5.p53")}</p>
                            <p>{t("rule.p5.p54")}</p>
                        </li>
                        <li>
                            <p>{t("rule.p5.p55")}</p>
                            <p>{t("rule.p5.p56")}</p>
                        </li>
                        <li>
                            <p>{t("rule.p5.p57")}</p>
                            <p>{t("rule.p5.p58")}</p>
                        </li>
                        <li><p>{t("rule.p5.p59")}</p></li>
                    </ul>
                    <h1 id="p6">{t("rule.p6.title")}</h1>
                    <p className="indent-10">{t("rule.p6.p61")}</p>
                    <p className="font-bold">{t("rule.p6.p62")}</p>
                    <p className="indent-10">{t("rule.p6.p63")}</p>
                    <p className="font-bold">{t("rule.p6.p64")}</p>
                    <p className="indent-10">{t("rule.p6.p65")}</p>
                    <p className="indent-10">{t("rule.p6.p66")}</p>
                    <p className="indent-10">{t("rule.p6.p67")}</p>
                </div>
            </div>
            <div className="flex-3 bg-amber-5 border-l-4 border-l-pink-200 outline-2 outline-cyan-400 outline-offset-2 rounded-md rightcontainer p-6">
                <div ref={rightContainerRef}>
                    <h1>{t('rule.contents')}</h1>
                    <ul>
                        <li>
                            <h1><a href="#p1" target="_self">{t('rule.p1.title')}</a></h1>
                            <ul>
                                <li><a href="#p2" target="_self">{t('rule.p2.title')}</a></li>
                                <li><a href="#p3" target="_self">{t('rule.p3.title')}</a></li>
                            </ul>
                        </li>
                        <li>
                            <h1><a href="#p4" target="_self">{t('rule.p4.title')}</a></h1>
                            <ul>
                                <li><a href="#p42" target="_self">{t('rule.p4.p42.title')}</a></li>
                                <ul>
                                    <li>
                                        <h1><a href="#p421" target="_self">{t('rule.p4.p42.p421.title')}</a></h1>
                                        <ul>
                                            <li><a href="#p4212" target="_self">{t('rule.p4.p42.p421.p4212.title')}</a></li>
                                            <li><a href="#p4213" target="_self">{t('rule.p4.p42.p421.p4213.title')}</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#p422" target="_self">{t('rule.p4.p42.p422.title')}</a></li>
                                    <li><a href="#p423" target="_self">{t('rule.p4.p42.p423.title')}</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <h1><a href="#p5" target="_self">{t('rule.p5.title')}</a></h1>
                        </li>
                        <li>
                            <h1><a href="#p6" target="_self">{t('rule.p6.title')}</a></h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </WrapperRule>;
}