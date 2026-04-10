import React, {useDeferredValue, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router";
import {Header} from "../../widgets/header/index.js";
import {Footer} from "../../widgets/footer/index.js";

const MainLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const deferredQuery = useDeferredValue(searchQuery);

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
                <Outlet context={{searchQuery: deferredQuery}}>

                </Outlet>
            </main>

            <Footer/>
        </>
    );
};

export default MainLayout;


