import React from 'react';
import styles from './CoinViewToggle.module.css';

const CoinViewToggle = ({value, onChange}) => {
    return (
        <div className={styles.viewToggle}>
            <button className={styles.button + " " + `${value === "grid" ? "active" : ""}`} onClick={() => onChange("grid")}>Grid
            </button>
            <button className={styles.button + " " + `${value === "list" ? "active" : ""}`} onClick={() => onChange("list")}>List
            </button>
        </div>
    );
};

export default CoinViewToggle;
