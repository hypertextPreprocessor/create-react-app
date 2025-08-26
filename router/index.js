import {createBrowserRouter} from "react-router";
import Home from '@/Home';
import ProductTemplate from "@/views/ProductTemplate";
import CategoryTemplate from "@/views/CategoryTemplate";
import ProductItemTemplate from "@/views/ProductItemTemplate";

// eslint-disable-next-line no-undef
const PUBLICPATH = PUBLIC_PATH || '/';
const router = createBrowserRouter([
    {
        path:"/",
        Component:Home,
        children:[{
            index:true,Component:ProductTemplate
        },{
            path:"/category/:id",Component:CategoryTemplate
        },{
            path:"/item/:id",Component:ProductItemTemplate
        }]
    }
],{
    basename:PUBLICPATH
});
export default router;