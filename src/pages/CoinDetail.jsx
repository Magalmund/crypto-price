import React, {lazy, Suspense} from 'react';
import {useParams} from "react-router";
import {formatMarketCap, formatPrice} from "../utils/formatter.js";
import {useFetchCoin} from "../hooks/useFetchCoin.js";
import Loader from "../components/UI/Loader.jsx";
import ErrorMessage from "../components/UI/ErrorMessage.jsx";

const CoinPriceChart = lazy(() => import("../components/CoinPriceChart.jsx"));

const CoinDetail = () => {
    const {id} = useParams();
    const {coin, isLoading, error} = useFetchCoin(id);

    if(isLoading) return <Loader />

    if(!coin) return <ErrorMessage error={error} />


    const priceChange = coin.market_data.price_change_percentage_24h || 0;
    const isPositive = priceChange >= 0;

    return (
        <div className="app">
            <div className="coin-detail">
                <div className="coin-header">
                    <div className="coin-title">
                        <img src={coin.image.large} alt={coin.name}/>
                        <div>
                            <h1>{coin.name}</h1>
                            <p className="symbol">{coin.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                    <span className="rank">Rank #{coin.market_data.market_cap_rank}</span>
                </div>

                <div className="coin-price-section">
                    <div className="current-price">
                        <h2>{formatPrice(coin.market_data.current_price.usd)}</h2>
                        <span
                            className={`change-badge ${isPositive ? "positive" : "negative"}`}
                        >
                            {isPositive ? "↑" : "↓"} {Math.abs(priceChange).toFixed(2)}%
                        </span>
                    </div>

                    <div className="price-ranges">
                        <div className="price-range">
                            <span className="range-label">24h High</span>
                            <span className="range-value">
                                {formatPrice(coin.market_data.high_24h.usd)}
                            </span>
                        </div>
                    </div>
                    <div className="price-range">
                        <span className="range-label">24h Low</span>
                        <span className="range-value">
                            {formatPrice(coin.market_data.low_24h.usd)}
                        </span>
                    </div>
                </div>
                <div className="chart-section">
                    <h3>Price Chart (7 days)</h3>
                    <Suspense fallback={<Loader/>}>
                        <CoinPriceChart coinId={id}/>
                    </Suspense>
                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Market Cap</span>
                        <span className="stat-value">
                            ${formatMarketCap(coin.market_data.market_cap.usd)}
                        </span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">Volume (24)</span>
                        <span className="stat-value">
                        ${formatMarketCap(coin.market_data.total_volume.usd)}
                    </span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">Circulating Supply</span>
                        <span className="stat-value">
                        {coin.market_data.circulating_supply?.toLocaleString() || "N/A"}
                    </span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">Total Supply</span>
                        <span className="stat-value">
                        {coin.market_data.total_supply?.toLocaleString() || "N/A"}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetail;
