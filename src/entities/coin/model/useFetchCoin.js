import {useEffect, useState} from "react";
import {fetchCoin} from "../api/coinGecko.js";

export const useFetchCoin = (coinId) => {
    const [coin, setCoin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryKey, setRetryKey] = useState(0);

    const retry = () => {setRetryKey((prev) => prev + 1)}


    useEffect(() => {
        const controller = new AbortController();

        const loadCoin = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchCoin(coinId, controller.signal);

                setCoin(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }
                setCoin(null);
                setError(error || "Request error");

            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        if (coinId) {
            loadCoin();
        } else {
            setCoin(null);
            setIsLoading(false);
        }

        return () => {
            controller.abort();
        };
    }, [coinId, retryKey]);

    return {coin, isLoading, error, retry};
};
