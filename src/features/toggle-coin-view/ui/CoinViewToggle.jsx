import React from 'react';
import styles from './CoinViewToggle.module.css';

const CoinViewToggle = ({value, onChange}) => {
    return (
        <div className={styles.viewToggle}>
            <button
                className={`${styles.button} ${value === "grid" ? styles.active : ""}`}
                onClick={() => onChange("grid")}
                type="button"
            >
                Grid
            </button>
            <button
                className={`${styles.button} ${value === "list" ? styles.active : ""}`}
                onClick={() => onChange("list")}
                type="button"
            >
                List
            </button>
        </div>
    );
};

export default CoinViewToggle;
