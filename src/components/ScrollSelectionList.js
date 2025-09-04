import React, { useRef } from 'react';
import classNames from 'classnames';
import {canAllClassOnParentEle} from "@utlis";
import {scroll_selection_container,scroll_selection_item,scroll_selection_item_active} from "@com/css/com.module.css";
/* @params 
    singleton - 控制单选还是多选
    defaultSelected - 默认选中 【true ｜ false ｜ Number】
    list - 可以用纯字符串的数组，也可以用自定义的key-value组合的Object，默认的key的key是key ，默认的value的key是value
*/
export default function ScrollSelectionList({style={},children,list=[],singleton=true,defaultSelected=false,onSelect,key='key',value='value'}){ 
    const containerRef = useRef(null);
    function toggleActive(e,s){
        if(singleton){  //单选
            //unSelectAll();
            canAllClassOnParentEle(e.currentTarget,scroll_selection_item_active);
            /*
            if(e.currentTarget.classList.contains(scroll_selection_item_active)){
                e.currentTarget.classList.remove(scroll_selection_item_active);
            }else{
                e.currentTarget.classList.add(scroll_selection_item_active);
            }
            */
            onSelect && onSelect(s);
        }else{  //多选
            if(e.currentTarget.classList.contains(scroll_selection_item_active)){
                e.currentTarget.classList.remove(scroll_selection_item_active);
            }else{
                e.currentTarget.classList.add(scroll_selection_item_active);
            }
            var eles = e.currentTarget.parentElement.querySelectorAll(`div.${scroll_selection_item_active}`);
            var selectArr = [];
            if(s[key]){
                for(var j=0;j<eles.length;j++){
                    selectArr.push(eles[j].textContext)
                }
            }else{
                for(var i=0;i<eles.length;i++){
                    selectArr.push({
                        [key]:eles[i].getAttribute('data-key'),
                        [value]:eles[i].textContext
                    })
                }
            }
            
            onSelect && onSelect(selectArr);
        }
    }
    function unSelectAll(){
        var eles = containerRef.current.querySelectorAll("div");
        for(var i=0;i<eles.length;i++){
            eles[i].classList.remove(scroll_selection_item_active);
        }
    }
    function judgeParams(){ //控制参数defaultSelected的表现，可以取 【true ｜ false ｜ Number】 取true时默认选中第一个；
        if(/Boolean/i.test(Object.prototype.toString.call(defaultSelected))){
            if(defaultSelected){
                return 0;
            }else{
                return false;
            }
        }else{
            return defaultSelected;
        }
    }
    return <div style={style} className={classNames('flex',scroll_selection_container)} ref={containerRef}>
        {children?children:(
            list.map((l , i)=><div
            key={i} 
            data-key={l[key]?l[key]:l}
            onClick={(event)=>toggleActive(event,l)} 
            className={classNames(scroll_selection_item,{[scroll_selection_item_active]:judgeParams()===i})}
        >{l[value]?l[value]:l}</div>)
        )}
    </div>
}