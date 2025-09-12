import React, {useRef,useImperativeHandle, useEffect,useState} from 'react';
import cn from "classnames";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@com/css/com.module.css";
import { set } from 'bignumber.js';
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
export default function Input({
    ref,
    type='text',
    placeholder='',
    style={},
    fontSize="2rem",
    maxWidth="100%",
    bgColor="#f2f2f2",
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
    className=null
}){
    const [passwordVisiblity,setPasswordVisiblity] = useState(false);
    var inputRef = useRef(null);
    useImperativeHandle(ref,()=>{
        return inputRef.current;
    },[])
    useEffect(()=>{
        
    },[])
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
            inputStyle = {...inputStyle,border:'none',borderBottom:'1px solid #ccc'};
            break;
        case 'box':
            inputStyle = {...inputStyle,border:'1px solid #ccc',borderRadius:'4px',padding:'0.2rem 0.4rem'};
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
        <p className={cn('bg-white','padding-sm')} style={{position:'relative'}}>
            <input 
                id={id} 
                name={name} 
                ref={inputRef} 
                type={passwordVisiblity?'text':type} 
                autoComplete={autoComplete}
                className={cn('padding-sm','radius',styles['custom_input'],className)} 
                style={inputStyle} 
                placeholder={placeholder} 
                onChange={onChange} 
                onKeyDown={onKeyDown} 
                onFocus={onFocus} 
                onBlur={onBlur} 
                value={value} 
                defaultValue={defaultValue} 
            />
            {type==="password"?(
                <SvgIcon onClick={setPasswordVilibility} icon={passwordVisiblity?"eye":"eye_slash"} style={{cursor:'pointer',position:'absolute',right:'14px',top:'50%',transform:'translateY(-50%)'}} width="20" height="18"/>
            ):null}
        </p>
    )
}