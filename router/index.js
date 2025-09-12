import {createBrowserRouter} from "react-router";
import Home from '@/Home';
import ProductTemplate from "@/views/ProductTemplate";
import CategoryTemplate from "@/views/CategoryTemplate";
import ProductItemTemplate from "@/views/ProductItemTemplate";
import CommentTemplate from "@/views/CommentTemplate";
import CommentMobileTemplate from "@/views/CommentMobileTemplate";
import Login from "@/Login";
import User from "@/views/user/User";
import {StyledUserHome} from "@/views/user/UserHome";
import {StyledUserInfo} from "@/views/user/UserInfo";
import {StyledDeliveryAddress} from "@/views/user/DeliveryAddress";
//import { checkDevice } from '@utlis/index';
// eslint-disable-next-line no-undef
const PUBLICPATH = PUBLIC_PATH || '/';
const router = createBrowserRouter([
    {
        path:"/",
        Component:Home,
        children:[{
            index:true,Component:ProductTemplate
        },{
            path:"category/:id",Component:CategoryTemplate
        },{
            path:"item/:id/:user?/:commentId?",Component:ProductItemTemplate,
            children:[{
                index:true,Component:CommentTemplate
            }]
        },{
            path:"user",
            Component:User,
            children:[{
                index:true,Component:StyledUserHome
            },{
                path:"user-info",
                Component:StyledUserInfo
            },{
                path:"user-delivery-address",
                Component:StyledDeliveryAddress
            }]
        }]
    }
    ,{
        path:"/comments/:id?/:user?/:commentId?",
        Component:CommentMobileTemplate
    },{
        path:"/login",
        Component:Login
    }
],{
    basename:PUBLICPATH
});
export default router;