import {useEffect, useState} from "react";
import {fetchCryptos} from "../API/coinGecko.js";

export const useFetchCryptos = () => {
    const [cryptos, setCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const loadCryptos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchCryptos(controller.signal);

                setCryptos(data);


            } catch (error) {
                // console.log("Error fetching crypto: ", error);
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
    }, []);

    return {cryptos, isLoading, error}
}
