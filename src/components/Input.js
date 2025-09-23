import React, {useRef,useImperativeHandle, useEffect,useState} from 'react';
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@com/css/com.module.css";
import { set } from 'bignumber.js';
import styled from 'styled-components';
/*
type: text | password | email | number
placeholder: placeholder text
style: custom style object
maxWidth: max width of the input
fontSize: font size of the input
bgColor: background color of the input
txtColor: text color of the input
border: border style [none | underline | box]
*/
const StyledP = styled.p`
    position:relative;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
    & > input{
    
    }
    & > svg{
        cursor:pointer;
        width:${props=>props['data-height']}px;
        height:${props=>props['data-height']}px;
        flex-basis:32px;
        flex-grow:0;
        flex-shrink:0; 
        background-color:${props=>props['data-bg-color']};    
        ${props=>props['data-border']==='none'?
            null:(props['data-border'] === 'underline'?'border-bottom:1px solid ' + props['data-input-style']['borderColor']:
                (props['data-border']==='box')?`
                    border:1px solid ${props['data-input-style']['borderColor']};
                `:null
            )
        }
    }
`;

export default function Input({
    padding=true,
    ref,
    type='text',
    placeholder='',
    style={},
    fontSize="1.5rem",
    maxWidth="100%",
    bgColor="#f2f2f2",
    borderColor="#333",
    txtColor="#000",
    border='underline',
    autoComplete="true",
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
    value,
    defaultValue,
    id,
    name,
    className=null,
    perfix=null,
    suffix=null
}){
    const [passwordVisiblity,setPasswordVisiblity] = useState(false);
    const [elHeight,setElHeight] = useState(null);
    var inputRef = useRef(null);
    useImperativeHandle(ref,()=>{
        return inputRef.current;
    },[])
    useEffect(()=>{
        setElHeight(inputRef.current.clientHeight);
    },[elHeight])
    var inputStyle = Object.assign({},{
        width:'100%',
        maxWidth:maxWidth,
        fontSize:fontSize,
        mozppearance: 'textfield',
        outline: 'none'
    },style);
    switch(border){
        case 'none':
            inputStyle = {...inputStyle,border:'none'};
            break;
        case 'underline':
            inputStyle = {...inputStyle,border:'none',borderBottom:`1px solid ${borderColor}`};
            break;
        case 'box':
            inputStyle = {...inputStyle,border:`1px solid ${borderColor}`,borderRadius:'4px',padding:'0.2rem 0.4rem'};
            break;
        default:
            break;
    }
    if(bgColor && bgColor!=='none'){
        inputStyle = {...inputStyle,backgroundColor:bgColor};
    }
    if(txtColor && txtColor!=='none'){
        inputStyle = {...inputStyle,color:txtColor};
    }
    function setPasswordVilibility(){
        setPasswordVisiblity(passwordVisiblity=>!passwordVisiblity);
    }
    return (
        <StyledP 
            className={cn('bg-white',{'padding-sm':padding})} 
            data-bg-color={bgColor} 
            data-height={elHeight} 
            data-input-style={{borderColor:borderColor}}
            data-border={border}
        >
            <input 
                id={id} 
                name={name} 
                ref={inputRef} 
                type={passwordVisiblity?'text':type} 
                autoComplete={autoComplete}
                className={cn({'padding-sm':padding,'radius':(suffix || perfix)?false:true},styles['custom_input'],className)} 
                style={inputStyle} 
                placeholder={placeholder} 
                onChange={onChange} 
                onKeyDown={onKeyDown} 
                onFocus={onFocus} 
                onBlur={onBlur} 
                value={value} 
                defaultValue={defaultValue} 
            />
            {suffix?suffix:null}
            {type==="password"?(
                <SvgIcon onClick={setPasswordVilibility} icon={passwordVisiblity?"eye":"eye_slash"} style={{width:'20px',height:'22px',border:'none',cursor:'pointer',position:'absolute',right:'14px',top:'50%',transform:'translate(-3px ,-50%)'}} width="20" height="22"/>
            ):null}
        </StyledP>
    )
}