import React ,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import jspreadsheet from 'jspreadsheet-ce';
import jsuites from 'jsuites';
import 'jspreadsheet-ce/dist/jspreadsheet.css';
import 'jspreadsheet-ce/dist/jspreadsheet.themes.css';
import 'jsuites/dist/jsuites.css';

const  WrapperCalculator = styled.div`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    & .calboxtop{
        font-size:1.6rem;
        line-height:3rem;
    }
    & .calboxtop input[type="checkbox"]{
        width:20px;
        height:20px;
    }
    & .calboxtop input[type="number"],& .calboxtop select{
        width:200px;
        border:1px solid #ccc;
        padding:2px 5px;
        border-radius:5px;
        vertical-align: middle;
    }
    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        display: inline-grid;
        background-color: #fff;
        border: 2px solid #555;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        place-content: center;
        vertical-align: middle;
        cursor: pointer;
    }

    input[type="checkbox"]::before {
        font-size:2rem;
        content: "\u2714";
        width: 20px;
        height: 20px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        background-color: #0000ff21;
        box-shadow: inset 1em 1em #0000ff21; /* Color of the checkmark */
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }
`;

export default function Calculator(){
    const { t } = useTranslation(['common']);
    const [result, setResult] = React.useState({
        hoursPerStaff: 0,
        totalProjectHours: 0,
        displayRate: 0,
        totalCNY: 0,
        discount: "0 折"
    });
    const [formData, setFormData] = React.useState({
        visibleUI: false,
        uiCount: '',
        inVisibleUI: false,
        inVisibleUICount: '',
        needTest:false,
        coWork:false,
        frameWork:false,
        frameWorkCount:'',
        person:true,
        personCount:1,
        paymentMode:'4-3-3'

    });
    const spreadsheetRef = React.useRef(null);
    const [sheetsData,setSheetsData] = useState([
        ["启动/登录","可见UI","6","8","12","0","26"],
        ["总计","","","","","","26"],
        ["单价","","","","","","75"],
        ["总价","","","","","","26"],
        ["优惠力度","免架构费","","","","","900"],
        ["优惠力度","免架测试费","","","","","206"],
        ["","总计优惠","","","","","1106"],
        ["最终报价","","","","","","10050"]
    ]);
/**
 * 恒韵翡翠报价计算器逻辑
 */
    function calculateQuote(formData) {
        // --- 1. 获取输入参数 ---
        const uiCount = parseInt(formData.uiCount) || 0;
        const funcCount = parseInt(formData.inVisibleUICount) || 0;
        const archCount = parseInt(formData.needTest) || 0;
        const staffCount = parseInt(formData.personCount) || 1; // 人员数量
        const paymentMode = formData.paymentMode; // 如 "4-3-3"
        
        const needTest = formData.needTest;
        const needSync = formData.coWork;

        // --- 2. 计算基础总工时 (1人作业时的原始工时) ---
        // 参考市场平均：架构16h, UI 8h, 功能6h
        let baseHours = (archCount * 16) + (uiCount * 8) + (funcCount * 6);
        
        if (needTest) baseHours *= 1.2; // 测试加成 20%
        if (needSync) baseHours *= 1.1; // 对接加成 10%

        // --- 3. 应用人员效率公式 (每增一人减1/3) ---
        // 公式: Base * (2/3)^(n-1)
        let finalHours = baseHours * Math.pow((2/3), (staffCount - 1));

        // 强制保底：如果计算结果小于8小时，按8小时计
        if (finalHours < 8 && baseHours > 0) {
            finalHours = 8;
        }

        // --- 4. 价格与折扣逻辑 ---
        const BASE_UNIT_PRICE = 75; // 10-0-0 时的最终单价
        
        // 付款方式溢价表 (以 10-0-0 为 100% 基准)
        const modes = {
            "10-0-0": 1.0,
            "9-1-0": 1.05,
            "8-1-1": 1.1,
            "7-2-1": 1.15,
            "6-3-1": 1.25,
            "5-3-2": 1.35,
            "4-3-3": 1.5   // 对应单价 $112.5
        };

        const multiplier = modes[paymentMode] || 1.5;
        const currentRate = BASE_UNIT_PRICE * multiplier; // 实际参与计算的单价
        
        // --- 5. 计算总价 ---
        // 总价 = 最终缩减后的工时 * 单价 * 人员数量
        const totalUSD = finalHours * currentRate * staffCount;
        const exchangeRate = 1;//7.2;
        const totalCNY = totalUSD * exchangeRate;

        // --- 6. 返回结果 ---
        return {
            hoursPerStaff: finalHours.toFixed(2), // 每人耗时
            totalProjectHours: (finalHours * staffCount).toFixed(2), // 项目总人时
            displayRate: currentRate.toFixed(2),
            totalCNY: Math.round(totalCNY),
            // 计算相对 4-3-3 的折扣率
            discount: ((1 / multiplier) * 10).toFixed(1) + " 折" 
        };
    }
    function startCalculation(){
        const result = calculateQuote(formData);
        
        console.log(result);
        //alert(`每人耗时: ${result.hoursPerStaff} 小时\n项目总人时: ${result.totalProjectHours} 小时\n单价: $${result.displayRate}\n总价: ¥${result.totalCNY}\n相对 4-3-3 的折扣率: ${result.discount}`);
        setResult(result);
    }
    useEffect(() => {
        // 初始化jspreadsheet
        jspreadsheet(spreadsheetRef.current, {
            worksheets:[{
                data:sheetsData,
                columns:[
                    {type:"text",title:"主模块",width:120},
                    {type:"text",title:"子模块",width:120},
                    {type:"text",title:"页面数量",width:120},
                    {type:"text",title:"开发",width:120},
                    {type:"text",title:"对接",width:120},
                    {type:"text",title:"测试",width:120},
                    {type:"text",title:"总计",width:120}
                ]
            }]
        });
    }, []);
    return (
        <WrapperCalculator>
            <h1 className="text-[2rem] text-center py-8 border-b-4 border-b-blue-300 outline-gray-800 outline-1 outline-offset-1">{t('cal.title')}</h1>
            <div className="calboxtop p-4 w-full md:w-3/4 mx-auto">
                <ul>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={formData.visibleUI} onChange={
                                    (e) => {
                                        setFormData(prev => ({...prev, visibleUI: e.target.checked}));
                                    }}
                                />
                                <span className="ml-2">{t('cal.p1')}</span>
                            </label>
                            <input type="number" value={formData.uiCount} onChange={(e) => {
                                setFormData(prev => ({...prev, uiCount: parseInt(e.target.value) || ''}))
                                // jspreadsheet.spreadsheet.fill();
                                // setSheetsData(sheetsData=>{
                                //     sheetsData.unshift(["可见UI","可见UI","","","","",""]);
                                //     console.log(sheetsData)
                                //     return sheetsData;
                                // })
                            }} placeholder={t('cal.hint1')}/>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p2')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={formData.inVisibleUI} onChange={(e) => setFormData(prev => ({...prev, inVisibleUI: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p21')}</span>
                            </label>
                            <input type="number" value={formData.inVisibleUICount} onChange={(e) => setFormData(prev => ({...prev, inVisibleUICount: parseInt(e.target.value) || ''}))} placeholder={t('cal.hint1')}/>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p22')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={formData.needTest} onChange={(e) => setFormData(prev => ({...prev, needTest: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p23')}</span>
                            </label>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p24')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={formData.coWork} onChange={(e) => setFormData(prev => ({...prev, coWork: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p25')}</span>
                            </label>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p26')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={formData.frameWork} onChange={(e) => setFormData(prev => ({...prev, frameWork: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p27')}</span>
                            </label>
                            <input type="number" value={formData.frameWorkCount} onChange={(e) => setFormData(prev => ({...prev, frameWorkCount: parseInt(e.target.value) || ''}))} placeholder={t('cal.hint1')}/>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p28')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" disabled={true} checked={formData.person} onChange={(e) => setFormData(prev => ({...prev, person: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p29')}</span>
                            </label>
                            <input type="number" value={formData.personCount} onChange={(e) => setFormData(prev => ({...prev, personCount: parseInt(e.target.value) || ''}))} placeholder={t('cal.hint1')}/>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p210')}</p>
                    </li>
                    <li>
                        <p className="flex flex-row items-center gap-4 m-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" disabled={true} checked={formData.person} onChange={(e) => setFormData(prev => ({...prev, person: e.target.checked}))}/>
                                <span className="ml-2">{t('cal.p211')}</span>
                            </label>
                            <select value={formData.paymentMode} onChange={(e) => setFormData(prev => ({...prev, paymentMode: e.target.value}))}>
                                <option value="4-3-3">4-3-3---------基础报价</option>
                                <option value="5-3-2">5-3-2---------低首付</option>
                                <option value="6-3-1">6-3-1---------风险分期</option>
                                <option value="7-2-1">7-2-1---------均衡分期</option>
                                <option value="8-1-1">8-1-1---------标准分期</option>
                                <option value="9-1-0">9-1-0---------90%预付</option>
                                <option value="10-0-0">10-0-0-------全款预付</option>
                            </select>
                        </p>
                        <p className="pl-4 border-l bg-gray-200 py-3">{t('cal.p213')}</p>
                    </li>
                </ul>
            </div>
            <p className="py-8 text-center"><button onClick={startCalculation} className="cursor-pointer text-[2.2rem] p-4 bg-cyan-500 rounded-lg w-2xs text-amber-50">{t('cal.p217')}</button></p>
            <hr className="w-full border-t-4 border-t-blue-300 outline-gray-800 outline-1 outline-offset-1"/>
            <h1 className="text-[2rem] py-8 text-center">{t('cal.p216')}</h1>
            <div className="calboxtop p-4 w-full md:w-3/4 mx-auto">
                <p>
                    {`每人耗时: ${result.hoursPerStaff} 小时\n单价: $${result.displayRate}\n总价: ¥${result.totalCNY}\n相对 4-3-3 的折扣率: ${result.discount}`}
                    <span>{t('cal.p214')}</span>{result.totalProjectHours}<span>{t('cal.p215')}</span>
                </p>
                <h2>{t("cal.resutlHint")}</h2>
                <div id="spreadsheet" ref={spreadsheetRef} className="text-center py-5"></div>
                <h2>{t("cal.hint2")}</h2>
            </div>
        </WrapperCalculator>
    )
}