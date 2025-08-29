import React, { useEffect, useState } from 'react';
export default function RatingStar({fillColor="#f4c331",count=5,size=20,value=4.5}){ //value不能大于count
    const [starArr,setStarArr]=useState([]);
    useEffect(()=>{
        genStar();
    },[]);
    function genStar(){
        //var starList = Array.from({length:count});
        var arr = [];
        for(var i=1;i<=count;i++){
            var tt = Math.round(value);
            if(i<=tt){
                arr.push({
                    state:"full",
                    full:true,
                    order:i
                });
            }else{
                arr.push({
                    state:"empty",
                    full:false,
                    order:i
                });
            }
        }
        if(tt>value){ //.5以上
            arr[tt-1].state="half";
            arr[tt-1].full=false;
            arr[tt-1].order = i;
        }
        setStarArr(arr);
    }
    return <>
        <p>
            {starArr.map((v,i)=>
                <svg key={i} viewBox="0 0 256 256" width={size} height={size} style={{verticalAlign:"middle"}}>
                    <rect fill="none" height="256" width="256"/>
                    {v.state==='half'?(
                        <>
                            <path fill={fillColor} d="M128,189.4a8.7,8.7,0,0,0-4.4,1.3L76.7,220.4c-7.7,4.9-17.3-2.4-15-11.4l13.5-53.2a8.7,8.7,0,0,0-2.9-8.8L27.1,109.3c-5.9-4.9-2.9-14.8,4.8-15.3l59-3.8a8.3,8.3,0,0,0,7.3-5.4l22-55.4A8.3,8.3,0,0,1,128,24h0Z"/>
                            <path fill="none" d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                            <line stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="24" y2="189.4"/>
                        </>
                    ):(
                        v.state==='full'?(
                            <>
                                <path fill={fillColor} d="M128,189.4a8.7,8.7,0,0,0-4.4,1.3L76.7,220.4c-7.7,4.9-17.3-2.4-15-11.4l13.5-53.2a8.7,8.7,0,0,0-2.9-8.8L27.1,109.3c-5.9-4.9-2.9-14.8,4.8-15.3l59-3.8a8.3,8.3,0,0,0,7.3-5.4l22-55.4A8.3,8.3,0,0,1,128,24h0Z"/>
                                <path fill={fillColor} d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <line stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="24" y2="189.4"/>
                            </>
                        ):(
                            <>
                                <path fill="none" d="M128,189.4a8.7,8.7,0,0,0-4.4,1.3L76.7,220.4c-7.7,4.9-17.3-2.4-15-11.4l13.5-53.2a8.7,8.7,0,0,0-2.9-8.8L27.1,109.3c-5.9-4.9-2.9-14.8,4.8-15.3l59-3.8a8.3,8.3,0,0,0,7.3-5.4l22-55.4A8.3,8.3,0,0,1,128,24h0Z"/>
                                <path fill="none" d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                                <line stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="24" y2="189.4"/>
                            </>
                        )
                    )}
                    
                </svg>
            )}
        </p>
    </>
}