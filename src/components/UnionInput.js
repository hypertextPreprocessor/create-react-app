import React, { useEffect } from 'react';
import cn from "classnames";
import * as styles from "@com/css/com.module.css";
/*
count: number of inputs
onChange: function
gap: gap between inputs
border: border style [none | underline | box]
maxWidth: max width of each input
bgColor: background color of each input 
txtColor: text color of each input
autoSubmit: auto submit when all inputs are filled,
adjustHeight: adjust height to be same as width
*/
export default function UnionInput({
    style={},
    autoSubmit=true,
    fontSize="3rem",
    maxWidth="7.2rem",
    count=6,
    onChange,
    onSubmit,
    gap="1.2rem",
    border='underline',
    bgColor="#f2f2f2",
    txtColor="#000",
    adjustHeight=true
}){
    
    var inputStyle = Object.assign({},{
        width:`calc(100%/${count} - ${gap})`,
        maxWidth:maxWidth,
        fontSize:fontSize,
        fontWeight:'bold',
        textAlign:'center',
        mozppearance: 'textfield'
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
    useEffect(()=>{
        if(adjustHeight){
            var p = document.querySelectorAll( `.${styles['union_input']}>input`);
            for(var i=0;i<p.length;i++){
                p[i].style.setProperty('height',p[i].offsetWidth+'px');
            }
        }
    },[adjustHeight])
    function canSubmitCheck(){
        var p = document.querySelectorAll( `.${styles['union_input']}>input`);
        var validInput = 0;
        var value = [];
        for(var i=0;i<p.length;i++){
            if(p[i].value){
                value.push(p[i].value);
                validInput ++;
                continue;
            }
        }
        onChange && onChange(value);
        if(validInput===count && autoSubmit && onSubmit){
            onSubmit && onSubmit(value);
        }
    }
    function nextInputFocus(currentInput){
        currentInput.nextElementSibling && currentInput.nextElementSibling.focus();
    }
    function preInputFocus(currentInput){
        currentInput.previousElementSibling && currentInput.previousElementSibling.focus();
    }
    function inputChange(event){
        if(event.target.value>9){   //输入了两位数
            event.target.value = event.target.value%10;
        }else if(event.target.value){   //当前有值才退下一个input
            canSubmitCheck();
            nextInputFocus(event.target);
        }
    }
    function inputBefore(event){
        //console.log('before',event.target.value);
    }
    function inputKeyDown(event){
        if(event.keyCode === 8){    //backspace
            //event.target.value = '';
            if(event.target.nextElementSibling==null && event.target.value){ //最后一个input且有值
                event.target.value = '';
            }else{
                preInputFocus(event.target);
            }
        }else if(event.keyCode === 46){ //delete
            if(event.target.previousElementSibling==null && event.target.value){ //第一个input且有值
                event.target.value = '';
            }else{
                nextInputFocus(event.target);
            }
        }
    }
    function inputFocus(event){
        if(event.target.value){
            event.target.select();
        }
    }
    return <p className={cn(styles['union_input'])} style={{gap:gap}}>
        {Array.from({length:count}).map((v,i)=><input type="number" min={0} max={9}
            onBeforeInput={inputBefore}
            onChange={inputChange} 
            onKeyDown={inputKeyDown}
            onFocus={inputFocus}
            className={cn('padding-sm','radius','no-spin')}  style={{...inputStyle}} key={i} name={'input'+i} 
        />)}
    </p>
}
