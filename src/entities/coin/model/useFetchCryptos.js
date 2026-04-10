import {useEffect, useState} from "react";
import {fetchCryptos} from "../api/coinGecko.js";

export const useFetchCryptos = () => {
    const [cryptos, setCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryKey, setRetryKey] = useState(0);

    const retry = () => setRetryKey((prev) => prev + 1);

    useEffect(() => {
        const controller = new AbortController();

        const loadCryptos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchCryptos(controller.signal);

                setCryptos(data);


            } catch (error) {
                if(error.name === "AbortError") {
                    return;
                }
                    setCryptos([]);
                    setError(error);
            } finally {
                if(!controller.signal.aborted){
                    setIsLoading(false)
                }
            }
        }

        loadCryptos()

        return () => {
            controller.abort();
        }
    }, [retryKey]);

    return {cryptos, isLoading, error, retry}
}
