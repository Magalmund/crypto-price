import React, {useMemo, useState} from 'react';
import CryptoCard from "../components/CryptoCard.jsx";
import {filterAndSort} from "../utils/filterAndSort.js";
import {useFetchCryptos} from "../hooks/useFetchCryptos.js";
import Loader from "../components/UI/Loader.jsx";
import ErrorMessage from "../components/UI/ErrorMessage.jsx";
import {useOutletContext} from "react-router";

const Home = () => {
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("market_cap_rank");
    const {searchQuery} = useOutletContext()
    const {cryptos, isLoading, error} = useFetchCryptos();

    const filteredList = useMemo(() => {
        return filterAndSort(cryptos, sortBy, searchQuery)
    }, [cryptos, sortBy, searchQuery])


    if(isLoading) return <Loader />

    if(!cryptos.length || error) return <ErrorMessage error={error} />

    return (
        <div className="app">
            <div className="controls">
                <div className="filter-group">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="market_cap_rank">Rank</option>
                        <option value="name">Name</option>
                        <option value="price">Price (Low to High)</option>
                        <option value="price_desc">Price (High to Low)</option>
                        <option value="change">24h Change</option>
                        <option value="market_cap">Market Cap</option>
                    </select>
                </div>
                <div className="view-toggle">
                    <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>Grid
                    </button>
                    <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>List
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="loading">
                    <div className="spinner"/>
                    <p>Loading crypto data...</p>
                </div>
            ) : (
                <div className={`crypto-container ${viewMode}`}>
                    {filteredList.map((crypto) => (
                        <CryptoCard key={crypto.id} crypto={crypto}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
