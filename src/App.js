import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { useQuery } from '@tanstack/react-query'

export default function App(){
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}