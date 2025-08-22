import React from 'react';
const m = {
    container:{
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:9999
    },
    menu:{
        position:'fixed',
        top:0,
        left:0,
        backgroundColor:'#fff',
        width:'375px',
        height:'100%'
    },
    usertitle:{
        backgroundColor:'var(--second-color)',
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
        //justifyContent:'center'
        padding:'3%',
        color:'#ffffff'
    }
}
export default function Menu(){
    return (
    <div style={m.container}>
        <menu style={m.menu}>
            <div style={m.usertitle}>
                <p>
                    <svg version="1.1" viewBox="0 0 24 24" width="34" height="34">
                        <g id="info"/>
                        <g id="icons" fill="#fff">
                            <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z" id="user2"/>
                        </g>
                    </svg>
                </p>
                <h1>Hello,Sign in</h1>
            </div>
            <h2>Title</h2>
        </menu>
    </div>
    );
}