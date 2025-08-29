import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import BigNumber from 'bignumber.js';
export default function PopOver({children,trigger="hover",position="top",content="Hello,popover",popBgColor="var(--container-bg-color)"}){
    const popRef = useRef(null);
    const popContainerRef = useRef(null);
    const popPinRef = useRef(null);
    const [top, setTop] = useState(0);
    const [left,setLeft] = useState(0);
    const [showPop,setShowPop] = useState(false);
    const spanStyle={
        arrowDown:{
            borderTop:`12px solid ${popBgColor}`,
            borderLeft:'10px solid transparent',
            borderRight:'10px solid transparent',
            bottom:'-12px'
        },
        arrowUp:{
            borderBottom:`12px solid ${popBgColor}`,
            borderLeft:'10px solid transparent',
            borderRight:'10px solid transparent',
            top:'-12px'
        },
        arrowLeft:{
            borderTop:'10px solid transparent',
            borderBottom:'10px solid transparent',
            borderLeft:`12px solid var(--container-bg-color)`,
            right:'-12px'
        },
        arrowRight:{
            borderTop:'10px solid transparent',
            borderBottom:'10px solid transparent',
            borderRight:`12px solid var(--container-bg-color)`,
            left:'-12px'
        }
    }
    const [pinStyle,setPinStyle] = useState(spanStyle.arrowDown);
    const posAdjustCache = useCallback((position)=>{positionAdjustMent(position)},[position])
    function positionAdjustMent(position){
        let rect = popRef.current.getBoundingClientRect();
        let pw = popRef.current.offsetWidth;
        let ph = popRef.current.offsetHeight;
        let ch = popContainerRef.current.offsetHeight;
        let cw = popContainerRef.current.offsetWidth;
        let iw = popPinRef.current.offsetWidth;
        let ih = popPinRef.current.offsetHeight;
        //center
        if(position==='top'){
            setPinStyle(spanStyle.arrowDown);
            let leftRate = new BigNumber(cw).minus(pw).dividedBy(2).toNumber();
            let iwLeft = new BigNumber(cw).minus(iw).dividedBy(2).toNumber();
            setTop(rect.top-ch-12);
            setLeft(rect.left-leftRate);
            popPinRef.current.style.setProperty('left',iwLeft+'px');
        }else if(position==='bottom'){
            setPinStyle(spanStyle.arrowUp);
            let leftRate = new BigNumber(cw).minus(pw).dividedBy(2).toNumber();
            let iwLeft = new BigNumber(cw).minus(iw).dividedBy(2).toNumber();
            setTop(rect.bottom+12);
            setLeft(rect.left-leftRate);
            popPinRef.current.style.setProperty('left',iwLeft+'px');
        }else if(position === 'left'){
            setPinStyle(spanStyle.arrowLeft);
            let leftRate = new BigNumber(rect.left).minus(cw).minus(iw).toNumber();
            let iwLeft = new BigNumber(ch).minus(ih).dividedBy(2).toNumber();
            let iwTop = new BigNumber(ch).minus(ph).dividedBy(2);
            let iwTopx = new BigNumber(rect.top).minus(iwTop).toNumber();
            setTop(iwTopx);
            setLeft(leftRate);
            popPinRef.current.style.setProperty('top',iwLeft+'px');
        }else if(position === 'right'){
            setPinStyle(spanStyle.arrowRight);
            let leftRate = new BigNumber(rect.right).toNumber();//.minus(cw).minus(iw).toNumber();
            let iwLeft = new BigNumber(ch).minus(ih).dividedBy(2).toNumber();
            let iwTop = new BigNumber(ch).minus(ph).dividedBy(2);
            let iwTopx = new BigNumber(rect.top).minus(iwTop).toNumber();
            setTop(iwTopx);
            setLeft(leftRate+12);
            console.log(leftRate)
            popPinRef.current.style.setProperty('top',iwLeft+'px');
        }
    }
    function mouseLeave(){
        hide();
    }
    function mouseEnter(){
        show();
    }
    function show(){
        setShowPop(true);
    }
    function hide(){
        setShowPop(false);
    }
    useEffect(()=>{
        if(showPop){
            posAdjustCache(position);
        }
        
    },[showPop,posAdjustCache,position])
    return <span ref={popRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {children}
        {showPop && createPortal(<div ref={popContainerRef} style={{
            position:'fixed',
            top:  top+ 'px',
            left: left+ 'px',
            zIndex:105
        }}>
            <div style={{
                minWidth:'0px',
                position:"relative",
                backgroundColor:popBgColor,
                padding:'1.2rem',
                borderRadius:'0.8rem',
                boxShadow:'1px 1px 1px 1px #dedede'
            }}>
                {content}
                <span ref={popPinRef} style={{position:'absolute',width:0,height:0,...pinStyle}}></span>
            </div>
        </div>,document.body)}
    </span>
}