import React, { useEffect } from 'react';
import styled from 'styled-components';
import cn from "classnames";
import {Input} from "@com";
/*
layout - horizontal | vertical | inline | include

*/
const StyledForm = styled.div`
    .form-item{
        flex-flow:${props=>props.$layout==='horizontal'?'row nowrap':props.$layout==='vertical'?'column nowrap':'row nowrap'};
    }
    .form-item>*:nth-child(1){
        flex:${props=>props.$labelCol.span};
        font-size:1.3rem;
    }
    .form-item>*:nth-child(2){
        flex:${props=>props.$labelCol.offset};
    }
`; 
export default function Form({children,layout="horizontal",labelCol={span:3,offset:12}}){
    useEffect(()=>{},[]);
    return <StyledForm $labelCol={labelCol} $layout={layout}>
        {children}
    </StyledForm>
}
const StyledFormItem = styled.div`
    display:flex;
`;
export const FormItem = function({className,children,label,name}){
    useEffect(()=>{
        
    },[])
    if(children){
        return <StyledFormItem className={cn(className,"form-item","padding-tb-sm")}>
            <label>{label}</label>
            {children}
        </StyledFormItem>;
    }else{
        <StyledFormItem>
            <label>{label}</label>
            <Input type="text" placeholder="" name={name}/>
        </StyledFormItem>
    }
}