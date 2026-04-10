import React from "react";
import styles from "./MarketControls.module.css";
import {SortCoinsSelect} from "../../../features/sort-coins/index.js";
import {CoinViewToggle} from "../../../features/toggle-coin-view/index.js";

const MarketControls = ({ sortBy, onSortChange, viewMode, onViewModeChange }) => {
    return (
        <div className={styles.controls}>
            <SortCoinsSelect value={sortBy} onChange={onSortChange} />
            <CoinViewToggle value={viewMode} onChange={onViewModeChange} />
        </div>
    );
};

export default MarketControls;
