import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
interface ILayoutProps{
    children:React.ReactNode
}

const Layout = ({children}:ILayoutProps) => {
    return (
        <>

            {children}
            <Header />
            <Footer/>

        </>
    );
};

export default Layout;