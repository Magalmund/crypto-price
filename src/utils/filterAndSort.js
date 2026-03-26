export const filterAndSort = (array, sortBy, searchQuery) => {

    let list = [...array];

    if (searchQuery) {
        let query = searchQuery.trim().toLowerCase();
        list = list.filter((crypto) => {
                return (
                    crypto.name.toLowerCase().includes(query) ||
                    crypto.symbol.toLowerCase().includes(query)
                )
            }
        )
    }

    list.sort((a, b) => {
        switch (sortBy) {
            case "name":
                return a.name.localeCompare(b.name);
            case "price":
                return a.current_price - b.current_price;
            case "price_desc":
                return b.current_price - a.current_price;
            case "change":
                return a.price_change_percentage_24h - b.price_change_percentage_24h;
            case "market_cap":
                return a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h;
            default:
                return a.market_cap_rank - b.market_cap_rank;
        }
    });
    return list;
}
