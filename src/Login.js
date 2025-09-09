import React, { useCallback, useEffect, useRef,useState } from 'react';
import cn from "classnames";
import {Button,UnionInput,Input,Sso} from "@com";
import icon from "@img/icons";
import {useWindowState} from "@caveats/externalStore";
import SvgIcon from "@img/icons/SvgIcon";
import * as styles from "@css/header.module.css";
export default function Login(){
    const containerRef = useRef(null);
    const emailRef = useRef(null);
    const vcodeRef = useRef(null);
    const passwordRef = useRef(null);
    const {winHeight} = useWindowState();
    const [isNewUserContext,setIsNewUserContext] = useState({
        btnTxt:'New User or forgot your password Click here to Set your password',
        isNewUser:false,
        title:'input your password',
        placeholder:'input your password'
    });
    var inputListener = useCallback((e)=>{
       if(e.keyCode === 13){
            goToNextPage();
       }
    },[])
    function setPasswordVilibility(){

    }
    useEffect(()=>{
        var emailInput = emailRef.current;
        var vcodeInput = vcodeRef.current;
        var passwordInput = passwordRef.current;
        emailInput.addEventListener('keydown',inputListener);
        vcodeInput.addEventListener('keydown',inputListener);
        passwordInput.addEventListener('keydown',inputListener);
        return ()=>{
            emailInput.removeEventListener('keydown',inputListener);
            vcodeInput.removeEventListener('keydown',inputListener);
            passwordInput.removeEventListener('keydown',inputListener);
        }
    },[inputListener]);
    function goToNextPage(){
        var getContainerWidth = containerRef.current.clientWidth;
        var currentPos = containerRef.current.scrollLeft;
        containerRef.current.scroll({
            left:getContainerWidth+currentPos,
            behavior:'smooth'
        })
    }
    function goToPreviousPage(){
        var getContainerWidth = containerRef.current.clientWidth;
        var currentPos = containerRef.current.scrollLeft;
        containerRef.current.scroll({
            left:currentPos - getContainerWidth,
            behavior:'smooth'
        })
    }
    function setNewPasswordBtn(){
        if(isNewUserContext.isNewUser){
            setIsNewUserContext({
                btnTxt:'New User or forgot your password Click here to Set your password',
                isNewUser:false,
                title:'input your password',
                placeholder:'input your password'
            })
        }else{
             setIsNewUserContext({
                btnTxt:'I have my own password,click here to login',
                isNewUser:true,
                title:'Set your password',
                placeholder:'set your password'
            })
        }
       
    }
    return <section style={{height:winHeight?winHeight+'px':'auto',display:'flex',flexFlow:'column nowrap',justifyContent:'space-between'}}>
        <div className={styles['login_logo_banner']}><img src={icon['logo']} alt=""/><span>HengChi Veiculo Auto Parts</span></div>
        <div className={styles['login_form_container']} ref={containerRef}>
            <div className={cn('cu-form',styles['cu-form'])}>
                <div className={cn('cu-form-group',styles['cu-form-group'])}>
                    <label className={cn('title',styles['title'])} htmlFor="email">邮箱</label>
                    <Input type="email" name="email" id="email" autoComplete='true' ref={emailRef}/>
                </div>
                <div className={styles["cu-form-footer"]}>
                    <Button onClick={goToNextPage}>Continue</Button>
                </div>
                <div className="bg-white padding-sm">
                    <p className="text-lg">By continuing,you are agree to Ejuan's Conditions of Use and Privacy Notice</p>
                </div>
                <div className="bg-white padding-tb-sm solids-bottom">
                    <p className="padding-sm">Login in via:</p>
                    <Sso providerList={[{
                        icon:icon['icons8-google-96'],
                        name:'Google'
                    },{
                        icon:icon['icons8-amazon-50'],
                        name:'Amazon'
                    },{
                        icon:icon['icons8-github-50'],
                        name:'GitHub'
                    },{
                        icon:icon['icons8-microsoft-48'],
                        name:'Microsoft'
                    },{
                        icon:icon['icons8-apple-50'],
                        name:'Apple'
                    }]}/>
                </div>
                <div className="bg-white padding-sm">
                    <p className="text-lg">Create Free Bussiness Account</p>
                </div>
            </div>
            <div className={cn(styles['cu-form'])}>
                <NavBack title="Verify it's you" onClick={goToPreviousPage}/>
                <div className={cn('cu-form-group',styles['cu-form-group'])}>
                    <label className={cn('title',styles['title'])} htmlFor="xx">图形</label>
                    <Input type="text" name="xx" id="xx" autoComplete='true'/>
                </div>
                <div className={cn('cu-form-group',styles['cu-form-group'])}>
                    <label className={cn('title',styles['title'])} htmlFor="vcode">验证码</label>
                    <Input type="text" name="vcode" id="vcode" autoComplete='true' ref={vcodeRef}/>
                </div>
                <div className={styles["cu-form-footer"]}>
                    <Button onClick={goToNextPage}>Continue</Button>
                </div>
            </div>
            <div className={cn(styles['cu-form'])}>
                <NavBack title={isNewUserContext.title} onClick={goToPreviousPage}/>
                <div className={cn('cu-form-group',styles['cu-form-group'])}>
                    <label style={{flex:'1',textAlign:'center'}} className={cn('title',styles['title'])} htmlFor="password">密码</label>
                    <div style={{position:'relative',flex:'5'}}>
                        <Input type="password" name="passowrd" id="password" autoComplete="true" placeholder={isNewUserContext.placeholder} ref={passwordRef}/>
                        {/*
                        <input style={{width:'100%'}} type="password" name="password" id="password" autoComplete='true' placeholder={isNewUserContext.placeholder} ref={passwordRef}/>
                        <SvgIcon onClick={setPasswordVilibility} icon="eye" style={{cursor:'pointer',position:'absolute',right:'10px',top:'50%',transform:'translateY(-50%)'}} width="20" height="20"/>
                        */}
                    </div>
                    
                </div>
                <div className={styles["cu-form-footer"]}>
                    <Button onClick={goToNextPage}>Continue</Button>
                </div>
                <div className={cn('bg-white','padding-sm',styles['form_ext'])}>
                    <p className="text-lg padding-sm">Forgot your password?</p>
                    <p style={{cursor:'pointer',textWrap:'auto'}} className="text-lg padding-sm" onClick={setNewPasswordBtn}>{isNewUserContext.btnTxt}</p>
                </div>
            </div>
            <div className={cn(styles['cu-form'])}>
                <div>
                    <NavBack title="检查您的邮件，填写发送的验证码" onClick={goToPreviousPage}/>
                </div>
                <div className={cn('padding-sm','bg-white')}>
                    <UnionInput onSubmit={(v)=>{console.log(v)}}/>
                </div>
            </div>
        </div>
        <div className={cn(styles['login_copoyright_footer'],'padding-sm')}>
            <div className={cn('flex','justify-between','padding-sm')}>
                <p>联系我们</p>
                <p>技术支持</p>
            </div>
            <p className="text-xl text-center padding-sm">广州立八商贸有限公司 版权所有<br/> &copy; Ejuan &trade; info service vs. HengChi veiculo &reg; 2025 </p>
            <p className="text-center">广州市黄埔区珠江村</p>
        </div>
    </section>;
}


function NavBack({title,onClick}){
    return <div className={cn('bg-white','padding-sm','solid-bottom','flex','align-center','gap-sm','text-xl')}>
        <SvgIcon onClick={onClick && onClick} style={{cursor:'pointer'}} icon="arrow_left" width="25" height="25" fill="var(--main-color)"/>
        {title?<p>{title}</p>:null}
    </div>
}