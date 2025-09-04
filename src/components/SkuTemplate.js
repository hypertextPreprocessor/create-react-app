import React from 'react';
import {Collapse} from "@com";
/*使用方法
<SkuTemplate 
    defaultKey="1"
    skuList={[
        {
            key:'1',
            label:
                <>
                    <p>Capicity:</p>
                    <p className="text-bold padding-tb-sm">Intel i7 - 9700</p>
                </>,
            children:<ScrollSelectionList singleton={true} defaultSelected={true} list={[{key:'sku1',value:'Intel i7 Core - GTx8010'},{key:"sku2",value:"AMD Ec200-1600"}]} onSelect={(v)=>{
                console.log(v);
            }}></ScrollSelectionList>
    },{
            key:'2',
            label:
                <>
                    <p>Style:</p>
                    <p className="text-bold padding-tb-sm">64GB</p>
                </>,
            children:<p>Hello,tanglin</p>
    }]}
/>

<SkuTemplate skuList={[{key:'2',label:<><p>Style:</p><p className="text-bold padding-tb-sm">64GB</p></>},{key:'3',label:'Example3'}]}>
    <div data-key="2">2</div>
    <div data-key="3">3</div>
</SkuTemplate>
*/
export default function SkuTemplate({style={},skuList=[],children,defaultKey}){
    if(children){
         if(/Array/i.test(Object.prototype.toString.call(children))){
            return <div style={style} className="bg-white margin-tb radius text-xl"><Collapse items={skuList} defaultActiveKey={defaultKey}>
                {children.map((v,i)=><Collapse.Item>{v}</Collapse.Item>)}
            </Collapse></div>
        }else{
            return <div style={style} className="bg-white margin-tb radius text-xl"><Collapse items={skuList} defaultActiveKey={defaultKey}>
                <Collapse.Item>{children}</Collapse.Item>
            </Collapse></div>
        }

    }else{
        return <div style={style} className="bg-white margin-tb radius text-xl">
            <Collapse items={skuList} defaultActiveKey={defaultKey}/>
        </div>
    }

}