import React from 'react';
import styled from 'styled-components';
import SvgIcon from "@img/icons/SvgIcon";
/*
style - additional style on outer most container ,which is div;
layout - horizontal | vertical;
cosas - Object-Array list item for each setp ,consist of {title , icon}
arrowSize - size for arrow icon , default 32 
currentStep - hightlight to current setp ,default 0  which means hightlight nothing. can't be greater than cosas's length;
*/
const StyledSteps = styled.div`
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
}
.progress_item>hr{
    ${props=>props.$layout}
    width:22px;
    height:0;
    border-top:6px dotted #333;

    flex:1 1 100%;
}
.progress_item{
    display:flex;
    flex-flow:${props=>props.$layout==='horizontal'?'row nowrap':'column nowrap'};
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
`;
export default function Steps({style={},layout="horizontal",cosas=[],arrowSize="32",currentStep=0}){
    return <StyledSteps $layout={layout} $cosalen={cosas.length} style={style}>
        <div className="flex progress">
            <div>
                {cosas && cosas.length && cosas.map((v,i)=><div key={i} className="progress_item"><p>
                    {v.icon}
                    <span>{v.title}</span>
                </p>{i !== cosas.length-1?<>
                    <hr/><SvgIcon icon="next" width={arrowSize} height={arrowSize}/>
                </>:null}</div>)}
            </div>
        </div>
    </StyledSteps>
}
export function Acontecimiento({title}){
    return <div>
        {title}
    </div>
}