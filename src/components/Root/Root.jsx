// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="w-[85%] mx-auto">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;