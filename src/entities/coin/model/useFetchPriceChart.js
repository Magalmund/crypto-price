import {useEffect, useState} from "react";
import {fetchChart} from "../api/coinGecko.js";
import {mapPriceChart} from "./mapPriceChart.js";

export const useFetchPriceChart = (coinId) => {
    const [priceChart, setPriceChart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryKey, setRetryKey] = useState(0);

    const retry = () => {setRetryKey((prev) => prev + 1)}

    useEffect(() => {
        const controller = new AbortController();

        const loadChart = async () => {
            setIsLoading(true);
            setError(null)

            try {
                if (coinId) {
                    const data = await fetchChart(coinId, controller.signal);
                    const formattedData = mapPriceChart(data.prices)

                    setPriceChart(formattedData);
                }

            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }
                setPriceChart([]);
                setError(error || "Request error");
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        loadChart();

        return () => {
            controller.abort()
        }
    }, [coinId, retryKey]);

    return {priceChart, isLoading, error, retry}
}
