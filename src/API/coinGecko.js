const BASE_URL = "https://api.coingecko.com/api/v3"


export const fetchCryptos = async (signal) => {
    const response = await fetch (`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`, {signal});

    if(!response.ok){
        throw new Error("Failed to fetch cryptos")
    }

    return response.json();
}

export const fetchCoin = async (id, signal) => {
    const response = await fetch(`${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`, {signal});

    if(!response.ok) {
        throw new Error("Failed to fetch coin data");
    }

    return response.json();
}

export const fetchChart = async (id, signal) => {
    const response = await fetch(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`, {signal});
    if (!response.ok) {
        throw new Error("Failed to fetch chart data");
    }
    return response.json();
};
