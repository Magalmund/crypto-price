import React, {useMemo, useState} from 'react';
import {filterAndSort} from "../../../shared/lib/filtering/filterAndSort.js";
import {useOutletContext} from "react-router";
import { CryptoCard, useFetchCryptos } from "../../../entities/coin";
import { MarketControls } from "../../../widgets/market-controls";
import { Loader } from "../../../shared/ui/loader";
import { ErrorMessage } from "../../../shared/ui/error";

const Home = () => {
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("market_cap_rank");
    const {searchQuery} = useOutletContext()
    const {cryptos, isLoading, error, retry} = useFetchCryptos();

    const filteredList = useMemo(() => {
        return filterAndSort(cryptos, sortBy, searchQuery)
    }, [cryptos, sortBy, searchQuery])

    if (error) {
        return (
            <ErrorMessage
                title="Failed to load market data"
                message={error?.message ?? "Please try again later."}
                onRetry={retry}
                variant="page"
            />
        );
    }

    return (
        <div className="app">
            <MarketControls
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            {isLoading ? (
                <Loader/>
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
