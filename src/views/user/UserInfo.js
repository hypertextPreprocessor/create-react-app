import React from 'react';
import {Input,Button} from "@com";
import styled from 'styled-components';
import SvgIcon from "@img/icons/SvgIcon";
export const StyledUserInfo = styled(UserInfo)`
    width:96%;
    margin:0 auto;
    .form-item{
        display:flex;
        flex-flow:row nowrap;
        align-items:center;
    }
    .form-item>label{
        font-size:1.4rem;
        flex-basis:98px;
        flex-shrink:0;
        font-weight:bold;
    }
    .form-item>div{
        flex-basis:100%;
        flex-grow:1;
        flex-shrink:1;
    }
    .avtar{
        flex-flow:column nowrap;
        justify-content:center;
        align-items:center;
    }
    .avtar>div:nth-of-type(1){
        cursor:pointer;
        width:155px;
        height:155px;
        display:flex;
        align-items:center;
        justify-content:center;
        border:1px solid ${props=>props.theme.containerBgColor};
        border-radius:.5rem;
        margin:1rem 0rem;
    }
    .avtar>div svg{
        cursor:pointer;
    }
    .avtar button{
        width:20%;
        min-width:155px;
    }
`;
function UserInfo({className}){
    return <div className={className}>
        <div className="padding-sm radius bg-white">
            <div className="flex avtar margin-tb">
                <div><SvgIcon icon="upload" width="45" height="45" strokeWidth="2"/></div>
                <Button>upload</Button>
            </div>
            <div className="form-item">
                <label htmlFor="nickname">昵称</label>
                <div><Input type="text" id="nickname"/></div>
            </div>
            <div className="form-item">
                <label htmlFor="gender">性别</label>
                <div>
                    <div className="flex gap-sm" id="gender">
                        <div className="flex align-center"><Input type="radio" name="gender" id="macho"/><label htmlFor="">男</label></div>
                        <div className="flex align-center"><Input type="radio" name="gender" id="hembra"/><label htmlFor="">女</label></div>
                        <div className="flex align-center"><Input type="radio" name="gender" id="secretismo"/><label htmlFor="">保密</label></div>
                    </div>
                </div>
            </div>
            <div className="form-item">
                <label htmlFor="phone">手机号码</label>
                <div>
                    <Input type="number" id="phone" className="no-spin"/>
                </div>
            </div>
            <div className="form-item">
                <label htmlFor="email">邮箱</label>
                <div>
                    <Input type="email" id="email" className="no-spin"/>
                </div>
            </div>
            <div className="form-item">
                <label htmlFor="password">登录密码</label>
                <div>
                    <Input type="password" id="password" className="no-spin"/>
                </div>
            </div>
            <div className="padding-tb flex align-center justify-center"><Button>提交</Button></div>
        </div>
    </div>
}