const BASE_URL = "https://api.coingecko.com/api/v3"

const createApiError = async (response, fallbackMessage) => {
    let message = fallbackMessage;

    if (response.status === 429) {
        message = "Too many requests. Please try again in a few seconds.";
    } else if (response.status >= 500) {
        message = "Server is temporarily unavailable. Please try again later.";
    } else if (response.status === 404) {
        message = "Requested data was not found.";
    }

    const error = new Error(message);
    error.status = response.status;
    error.code = "API_ERROR";

    return error;
};


export const fetchCryptos = async (signal) => {
    const response = await fetch (`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`, {signal});

    if(!response.ok){
        throw await createApiError (response.status, "Failed to load cryptocurrency list.");
    }

    return response.json();
}

export const fetchCoin = async (id, signal) => {
    const response = await fetch(`${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`, {signal});

    if(!response.ok) {
        throw await createApiError(response, "Failed to load coin details.");
    }

    return response.json();
}

export const fetchChart = async (id, signal) => {
    const response = await fetch(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`, {signal});
    if (!response.ok) {
        throw await createApiError(response, "Failed to load chart data.");
    }
    return response.json();
};
