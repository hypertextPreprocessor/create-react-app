import React from 'react';
export default function Button({type="primary",size="middle",ghost,children}){
    var style= {cursor:'pointer',borderRadius:'0.6rem',padding:'0.6rem 2rem',border:'none'};
    switch(type){
        case 'primary':
            style={...style,
                backgroundColor:'var(--btn-bg-color)',
                color:'#ffffff'
            };
            break;
        case 'default':
            style={...style,
                backgroundColor:'none',
                color:'#000',
                border:'1px solid #333'
            };
            break;
        case 'dashed':
            style={...style,
                backgroundColor:'none',
                color:'#000',
                border:'1px dashed #333'
            }
            break;
        case 'link':
            style={...style,
                color:'blue',
                backgroundColor:'transprant',
                background:'none'
            }
            break;
        case 'text':
            style={...style,
                color:'#000',
                backgroundColor:'transprant',
                background:'none'
            }
            break;
        default:
            style={...style};
    }
    switch(size){
        case 'large':
            style={...style,
                lineHeight:'3rem',
                padding:'0.6rem 4rem',
                fontSize:'1.8rem'
            };
            break;
        case 'middle':
            style={...style};
            break;
        case 'small':
            style={...style,
                padding:'0.4rem 1rem',
                fontSize:'1.2rem',
                borderRadius:'0.2rem'
            };
            break;
        default:
            style={...style}
    }
    if(ghost){
        style = {...style,
            color:'var(--btn-bg-color)',
            backgroundColor:'transparent',
            border:type==='dashed'?'1px dashed var(--btn-bg-color)':'1px solid var(--btn-bg-color)'
        }
    }
    return <button style={style}>{children}</button>
}