import React, { useEffect,useMemo } from 'react';
import { NavLink,useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export default function Menu(){
    //const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [pathTo,setPathTo] = React.useState('/');
    const [activeIndex, setActiveIndex] = React.useState(null);
    const menuObj = useMemo(()=>[{
        name:t("menu.company"),
        path:'/about',
        active:false,
        index:0
    },{
        name:t("menu.team"),
        path:'/team',
        active:false,
        index:1
    },{
        name:t("menu.rule"),
        path:'/rule',
        active:false,
        index:2
    },{
        name:t("menu.contact"),
        path:'/contact',
        active:false,
        index:3
    }],[t]);
    useEffect(()=>{
        
    },[i18n])
    return <WrapperMenu>
        {menuObj.map((item,index)=><div key={index}>
            <NavLink to={item.active?'/':item.path}  style={{color:'#999',fontSize:'18px',padding:'10px 0'}}>
                {({isActive})=>(isActive || activeIndex === index)?<span onClick={(e)=>{
                    e.stopPropagation(); 
                    //console.log(navigate);
                    //navigate("/");
                    menuObj.map((obj)=>{
                        if(obj.index===index){
                            obj.active = true;
                        }else{
                            obj.active = false;
                        }
                    });



                    
                    setActiveIndex(index);
                }}>{t("menu.home")}</span>:item.name}
            </NavLink>
        </div>)}
    </WrapperMenu>;
}
const WrapperMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > div{
        margin: 0 20px;
        font-size: 18px;
        color: #999;
        padding: 10px 0;
        cursor: pointer;
    }
`;