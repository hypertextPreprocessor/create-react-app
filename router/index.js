import {createBrowserRouter} from "react-router";
import Home from '@/Home';
import ProductTemplate from "@/views/ProductTemplate"

// eslint-disable-next-line no-undef
const PUBLICPATH = PUBLIC_PATH || '/';
const router = createBrowserRouter([
    {
        path:"/",
        Component:Home,
        children:[{
            index:true,Component:ProductTemplate
        }]
    }
],{
    basename:PUBLICPATH
});
export default router;