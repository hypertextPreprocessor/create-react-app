import React from 'react';
export default function Button({style={},type="primary",size="middle",ghost,children,onClick}){
    var styleInternal= Object.assign({},{cursor:'pointer',borderRadius:'0.6rem',padding:'0.6rem 2rem',border:'none'});
    switch(type){
        case 'primary':
            styleInternal={...styleInternal,
                backgroundColor:'var(--btn-bg-color)',
                color:'#ffffff'
            };
            break;
        case 'default':
            styleInternal={...styleInternal,
                backgroundColor:'none',
                color:'#000',
                border:'1px solid #333'
            };
            break;
        case 'dashed':
            styleInternal={...styleInternal,
                backgroundColor:'none',
                color:'#000',
                border:'1px dashed #333'
            }
            break;
        case 'link':
            styleInternal={...styleInternal,
                color:'blue',
                backgroundColor:'transprant',
                background:'none'
            }
            break;
        case 'text':
            styleInternal={...styleInternal,
                color:'#000',
                backgroundColor:'transprant',
                background:'none'
            }
            break;
        default:
            styleInternal={...styleInternal};
    }
    switch(size){
        case 'large':
            styleInternal={...styleInternal,
                lineHeight:'3rem',
                padding:'0.6rem 4rem',
                fontSize:'1.8rem'
            };
            break;
        case 'middle':
            styleInternal={...styleInternal};
            break;
        case 'small':
            styleInternal={...styleInternal,
                padding:'0.4rem 1rem',
                fontSize:'1.2rem',
                borderRadius:'0.2rem'
            };
            break;
        default:
            styleInternal={...styleInternal}
    }
    if(ghost){
        styleInternal = {...styleInternal,
            color:'var(--btn-bg-color)',
            backgroundColor:'transparent',
            border:type==='dashed'?'1px dashed var(--btn-bg-color)':'1px solid var(--btn-bg-color)'
        }
    }
    return <button style={{...styleInternal,...style}} onClick={onClick}>{children}</button>
}