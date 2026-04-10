import React from 'react';
import styles from './SortCoinsSelect.module.css'

const SortCoinsSelect = ({value, onChange}) => {

    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Sort by:</label>
            <select className={styles.select} value={value} onChange={e => onChange(e.target.value)}>
                <option value="market_cap_rank">Rank</option>
                <option value="name">Name</option>
                <option value="price">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="change">24h Change</option>
                <option value="market_cap">Market Cap</option>
            </select>
        </div>
    );
};

export default SortCoinsSelect;
