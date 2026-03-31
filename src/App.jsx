import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Loader from "./components/UI/Loader.jsx";
import Layout from "./components/Layout.jsx";

const CoinDetail = lazy(() => import("./pages/CoinDetail.jsx"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"coin/:id"} element={<CoinDetail/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
