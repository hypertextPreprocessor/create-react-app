import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
//import { useQuery } from '@tanstack/react-query'
const PUBLICPATH = PUBLIC_PATH || '/';
const Home = function(){
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default function App(){

    return (
        <BrowserRouter basename={PUBLICPATH}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}