export const mapPriceChart = (prices = [], locale = "en-US") => {
    if(!Array.isArray(prices)) return [];

    return prices
        .filter((point) => Array.isArray(point) && point.length >= 2)
        .map(([timestamp, value]) => ({
            timestamp,
            time: new Date(timestamp).toLocaleDateString(locale, {
                month: "short",
                day: "numeric",
            }),
            price: Number(Number(value).toFixed(2)),
        }));
}
