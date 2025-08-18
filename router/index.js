import {createBrowserRouter} from "react-router";
import Home from '@/Home';

const PUBLICPATH = PUBLIC_PATH || '/';
const router = createBrowserRouter([
    {
        path:"/",
        Component:Home
    }
],{
    basename:PUBLICPATH
});
export default router;