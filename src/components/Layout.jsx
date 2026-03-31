import React, {useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const isHomePage = location.pathname === "/";


    return (
        <>
            <Header
                isHomePage={isHomePage}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onBack={() => navigate("/")}

            />


            <main>
                <Outlet context={{searchQuery}}>

                </Outlet>
            </main>

            <Footer/>
        </>
    );
};

export default Layout;


