import React, {lazy, Suspense} from 'react';
import {Loader} from "../../shared/ui/loader/index.js";
import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "../layout/MainLayout.jsx";
import {Home} from "../../pages/home/index.js";

const CoinDetail = lazy(() =>
    import("../../pages/coin-detail/").then((module) => ({
        default: module.CoinDetail
    }))
);

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"coin/:id"} element={<CoinDetail/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
