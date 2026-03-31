import {useEffect, useState} from "react";
import {fetchChart} from "../API/coinGecko.js";

export const useFetchPriceChart = (coinId) => {
    const [priceChart, setPriceChart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const loadChart = async () => {
            setIsLoading(true);
            setError(null)

            try {
                if (coinId) {
                    const data = await fetchChart(coinId, controller.signal);
                    const formattedData = data.prices.map(([timestamp, value]) => ({
                        time: new Date(timestamp).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }),
                        price: Number(value.toFixed(2)),
                    }));

                    setPriceChart(formattedData);
                }

            } catch (error) {
                // console.error("Error fetching price chart: ", error);
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
    }, [coinId]);

    return {priceChart, isLoading, error}
}
