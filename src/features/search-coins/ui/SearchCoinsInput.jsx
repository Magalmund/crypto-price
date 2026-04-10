import React from 'react';
import styles from "./SearchCoinsInput.module.css";

const SearchCoinsInput = ({searchQuery, setSearchQuery}) => {
    return (
        <input
            type="text"
            placeholder="Search cryptos..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchCoinsInput;
