import React from 'react';
import SvgIcon from "@img/icons/SvgIcon";
export const mainMenu = [
    {
        label:"Trending",
        key:"trending",
        children:[
            {label:"Best Sellers",url:"/category/12",key:"t1"},{label:"New Releases",key:"t2",url:'/category/12'}
        ]
    },
    {
        label:"Digital Content And Devices",
        key:"dcad",
        children:[{
            label:"Prime Video",
            key:"d1",
            children:[{
                label:"Prime Video",
                key:"d11",
                children:[{
                    label:"video1",
                    key:"d111"
                }]
            },{
                label:"Categories",
                key:"d12",
                children:[{
                    label:"Categories1",
                    key:"d121"
                }]
            },{
                label:"Any Where",
                key:"d13",
                children:[{
                    label:"AnyWhere1",
                    key:"d131"
                }]
            },{
                label:"started",
                key:"d14",
                children:[{
                    label:"Started1",
                    key:"d141"
                }]
            }]
        },{
            label:"More to Explore",
            key:"d2",
            children:[{
                label:"Kids",
                key:"d21",
                children:[{
                    label:"Kids",
                    key:"d211"
                },{
                    label:"Olds",
                    key:"d22",
                    children:[{
                        label:"Olds",
                        key:"d221",
                        children:[{
                            label:"Olds next",
                            key:"d2211",
                            children:[{
                                label:"facilities",
                                key:"d22111",
                                children:[{
                                    label:"example",
                                    key:"d221111"
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        },{label:"Echo & Alexa",key:"d3"},{label:"Fire Tablets",key:"d4"},{label:"Kindle E-readers & Books",key:"d5"},{label:"Audible AudioBooks",key:"d6"}]
    },{
        label:"Shop By Department",
        key:"sbd1",
        children:[{
            label:"Clothing,Shoes,Jewelry & watches",
            key:"sdb11"
        },{
            label:"Ejuan Fresh",
            key:"sdb12"
        },{
            label:"Whole Foods Market",
            key:"sdb13"
        },{
            label:"Books",
            key:"sdb14"
        },{
            label:"Old Styles",
            key:"sdb15"
        },{
            label:"New Products",
            key:"sdb16"
        }]
    }
];
export const userMenu = [{
    label:"我的信息",
    key:"mine",
    url:null,
    icon:<SvgIcon style={{verticalAlign:'middle'}} icon="fulano" width="16" height="16" strokeWidth={1} />,
    children:[{
        label:"个人信息",
        key:"mine_info",
        url:"/user/user-info",
        icon:null,
        children:null
    },{
        label:"收货地址",
        key:"mine_delivery",
        url:"/user/user-delivery-address",
        icon:null,
        children:null
    }]
},{
    label:"订单中心",
    key:"order",
    url:null,
    icon:<SvgIcon icon="order" width="16" height="16" strokeWidth={3}/>,
    children:[{
        label:"我的订单",
        key:"order_mine",
        url:"/user/user-order",
        icon:null,
        children:null
    },{
        label:"评价晒单",
        key:"order_show",
        url:'/user/user-comment',
        icon:null,
        children:null
    }]
},{
    label:"关注中心",
    key:"foco",
    url:null,
    icon:<SvgIcon icon="concentrate" width="16" height="16" strokeWidth={37} />,
    children:[{
        label:"关注的商品",
        key:"foco_product",
        url:null,
        icon:null,
        children:null
    },{
        label:"关注的店铺",
        key:"foco_shop",
        url:null,
        icon:null,
        children:null
    },{
        label:"关注的活动",
        key:"foco_activity",
        url:null,
        icon:null,
        children:null
    }]
},{
    label:"资产中心",
    key:"assets",
    url:null,
    icon:<SvgIcon icon="concentrate" width="16" height="16" strokeWidth={37} />,
    children:[{
        label:"支付通道",
        key:"assets_bank",
        url:null,
        icon:null,
        children:null
    },{
        label:"优惠券",
        key:"assets_coupon",
        url:null,
        icon:null,
        children:null
    },{
        label:"礼品卡",
        key:"assets_gift",
        url:null,
        icon:null,
        children:null
    }]
}]