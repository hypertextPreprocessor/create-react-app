import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SvgIcon from "@img/icons/SvgIcon";
import { createPortal } from 'react-dom';
import {Button} from "@com";

/*
style - additional style on outer most container ,which is div;
layout - horizontal | vertical;
cosas - Object-Array list item for each setp ,consist of {title , icon}
arrowSize - size for arrow icon , default 32 
currentStep - hightlight to current setp ,default 0  which means hightlight nothing. can't be greater than cosas's length;
*/
const StyledSteps = styled.div`
padding:2rem 0rem;
display:flex;
flex-flow:${props=>props.$layout==='horizontal'?'column nowrap':'row nowrap'};
width:100%;
justify-content:space-evenly;
.progress{
    flex-flow:${props=>props.$layout==='horizontal'?'column nowrap':'column nowrap'};
}
.progress>div:nth-of-type(1){
    display:flex;
    flex-flow:${props=>props.$layout==='horizontal'?'row nowrap':'column nowrap'};
    align-items:center;
    justify-content:center;
    width:90%;
    margin:0 auto;
    gap:1.2rem;
}
.progress_item>div:nth-of-type(1)>hr{
    ${props=>props.$layout==='horizontal'?`
    width:22px;
    height:0;
    border-top:6px dotted #333;
        `:`
    height:22px;
    width:0;
    border-left:6px dotted #333;    
        `}
    flex:1 1 100%;
}
.progress_item>div:nth-of-type(1)>svg{
        display:inline;
        vertical-align:middle;
    ${props=>props.$layout==='horizontal'?null:`
         transform:rotate(90deg);
         flex:1 1 50px;
         `
    }
}
.progress_item{
    display:flex;
    flex-flow:column nowrap;
    flex:1 1 calc(100vw / ${props=>props.$cosalen});
    align-items:center;
}
.progress_item>p{
    display:flex;
    flex-flow:column nowrap;
    padding:0 1.2rem;
    position:relative;
}
.progress_item>p>span{
    position:absolute;
    bottom: -26px;
    left:0;
    width: calc(100% - 1.2rem * 2);
    padding:0 1.2rem;
    text-align: center;
}
.progress_item:is(:last-child){
    flex-basis:auto;
    flex-grow:0;
    flex-shrink:1;
}
.progress>div:nth-of-type(2){
    width:90%;
    margin:0 auto;
}
.progress>div:nth-of-type(2)>ul{
    list-style-type:none;
    display:flex;
    flex-flow:row nowrap;
}
.progress>div:nth-of-type(2)>ul>li{
    flex:1 1 calc(100vw / ${props=>props.$cosalen});
}
.progress_item>div:nth-of-type(1){
    display:flex;
    flex-flow:${props=>props.$layout==='horizontal'?'row nowrap':'column nowrap'};
    align-items:center;

}
.progress_item>div:nth-of-type(2){
    padding:1.2rem;
    ${props=>props.$layout==='horizontal'?null:`
        text-align:center;
    `}
}
.progress_item>div{
    flex:1;
    width:100%;
}
`;
export default function Steps({style={},layout="horizontal",cosas=[],arrowSize="32",currentStep=0}){
    const stepCon = useRef(null);
    const [mounted,setMounted] = useState(false);
    const [ajustFlex,setAdjustFlex] = useState([]);
    useEffect(()=>{
        if(stepCon.current){
            setMounted(true);
            var items = document.querySelectorAll(".progress_item");
            var whArr = [{
                title:"订单号",
                value:"336262079784"
            },{
                title:"运单号",
                value:"xjd-20949483"
            },{
                title:"剩余收货时间",
                value:new Date().toLocaleDateString()
            },{
                title:"售后选项",
                value:<Button size="small">申请退款</Button>
            }];
            for(var ii=0;ii<items.length;ii++){
                whArr[ii].adjustedWidth = items[ii].clientWidth;
                whArr[ii].adjustedHeight = items[ii].clientHeight;
            }
            setAdjustFlex(whArr);
        }
    },[mounted])
    return <StyledSteps $layout={layout} $cosalen={cosas.length} style={style} ref={stepCon}>
        <div className="flex progress">
            <div>
                {cosas && cosas.length && cosas.map((v,i)=><div key={i} className="progress_item">
                    <div>
                    <p>
                    {v.icon}
                    
                </p>{i !== cosas.length-1?<>
                    <hr/><SvgIcon icon="next" width={arrowSize} height={arrowSize}/>
                </>:null}
                </div>
                <div>{v.title}</div>
                </div>)}
            </div>
        </div>
        {mounted?createPortal(<Acontecimiento layout={layout} cosas={cosas} flexAdjust={ajustFlex}/>,stepCon.current):null}
    </StyledSteps>
}
const StyledAcontecimiento = styled.div`
    >div{
        ${props=>props.$layout==='horizontal'?`
            width:90%;
            margin:0 auto;    
        `:null}
    }
    >div>ul{list-style-type:none;}
    >div>ul{
        display:flex;
        flex-flow:${props=>props.$layout==='horizontal'?'row nowrap':'column nowrap'};
        gap:1.2rem;
    }
    >div>ul>li{
        flex:1 1 calc(100vw / ${props=>props.$cosalen});
    }
`;
export function Acontecimiento({layout="horizontal",cosas=[],flexAdjust=[]}){
    return <StyledAcontecimiento $layout={layout} $cosalen={cosas.length}>
        <div>
            <ul>
                {flexAdjust && flexAdjust.length && flexAdjust.map((v,i)=><li key={i} style={{flexBasis:layout==="horizontal"?v.adjustedWidth + 'px':v.adjustedHeight+'px'}}>
                    <p>{v.title}</p>
                    <p>{v.value}</p>
                </li>)}
            </ul>
        </div>
    </StyledAcontecimiento>
}