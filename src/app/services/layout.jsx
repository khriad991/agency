import React from 'react';
import NavBar from "@/components/home/NavBar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar bg="bg-gray1"/>
            {children}
        </div>
    );
};

export default Layout;