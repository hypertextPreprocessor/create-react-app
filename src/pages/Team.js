import React from 'react';
import { useTranslation } from 'react-i18next';
//import LanguageSelect from './common';
import styled from 'styled-components';
import {images} from "/assets/index.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const WrapperTeam = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
`;

export default function Team(){
    const { t } = useTranslation(['common']);
    
    return <WrapperTeam className="w-full m-auto text-xl gap-x-6">
        <Swiper 
            direction={'vertical'}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
                width:'100%',
                height:'100%'
            }}
        >
            <SwiperSlide style={{
                display:'flex'
            }}>
                <div className="flex flex-row flex-1 text-center items-center justify-center gap-x-16 px-[2%]">
                    <p className="flex-1"><img style={{width:'100%'}} src={images['1778123584175']} alt="Tang Lin"/></p>
                    <div className="flex-2 text-left">
                        <div className="bg-red-300 p-3 rounded-lg mb-6 xl:max-w-3/4">
                            <h1 className="text-3xl/12 ">汤蔺</h1>
                            <p>36岁 | 汉族 | 四川 |</p>
                            <p>软件工程师 / 架构师 / 全栈工程师</p>
                        </div>
                        <div className="xl:max-w-3/4">
                            <ul className="pl-3 rounded-lg border-2 border-sky-300" style={{textIndent:'3rem'}}>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">教育背景</p>
                                    <p>中山大学 2010.09 - 2012.07</p>
                                    <p>计算机组成原理、电子技术基础、计算机应用技术、高级语言程序设计（一）、数据结构导论、微型计算机及接口技术、操作系统概论、数据库及其应用、计算机网络技术</p>
                                </li>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">项目经验</p>
                                    <p>所有前端领域相关的经验，后台和一些硬件基础，曾为当下众多b2c，o2o等多种渠道模式下的企业制作各种客户端的产品，也制作市面上常用的企业工具如ERP，OA，CMS等，在大数据，物联网项目上也有涉及，研究训练AI，VR/AR的应用场景，涉及行业到餐饮、广告、媒体、政府部门、即时通信、金融等诸多领域，获国内先进技术水平荣誉。</p>
                                </li>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">个人技能</p>
                                    <p>10年来专注于h5领域里的开发，特别设计移动端的软件，跨平台混合应用的解决方案，能独自行进从需求-原型-ui-架构-开发-测试整套流程，扎实的专业技能和外语能力不局限于开发语言的限制，各种框架的应用，过硬的专业技能为基、分枝开叶到广泛的领域涉猎追踪当下信息技术产业，能在任何时间任何事务的问题面前结合天时、地利、人和提供最为完美的解决方案 </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{
                display:'flex'
            }}>
                <div className="flex flex-row flex-1 text-center items-center justify-center gap-x-16 px-[2%]">
                    <p className="flex-1"><img style={{width:'100%'}} src={images['chenjijian']} alt="chenjijian"/></p>
                    <div className="flex-2 text-left">
                        <div className="bg-red-300 p-3 rounded-lg mb-6 xl:max-w-3/4">
                            <h1 className="text-3xl/12 ">陈济尖</h1>
                            <p>28岁 | 汉族 | 广东 |</p>
                            <p>高级java工程师 / 架构师 / 全栈工程师</p>
                        </div>
                        <div className="xl:max-w-3/4">
                            <ul className="pl-3 rounded-lg border-2 border-sky-300" style={{textIndent:'3rem'}}>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">教育背景</p>
                                    <p>华南师范大学  2014.09 - 2017.06</p>
                                    <p>专业：软件工程。课程：计算机网络技术，操作系统原理、数据结构和编译原理，数据库基础和软件工程，java语言，软件工程和程序模式设计，嵌入式软件及工具</p>
                                </li>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">项目经验</p>
                                    <p>粤卡通ETC只能管理服务平台，汇豪嘉园物业管理系统，趣野营，物e购平台，易易考试，数字云校，易前程，行业涉及教育、旅游、电子商务等领域。</p>
                                </li>
                                <li>
                                    <p className="font-bold text-red-300 text-2xl/12">个人技能</p>
                                    <p>专注于Spring Boot和现代架构模式设计、JVM性能调优，OAuth2.0和JWT验证和授权，自动化与持续集成/持续部署 (CI/CD)，容器技术和分布式部署，JUnit单元测试和代码审查及分析 </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </WrapperTeam>;
}
