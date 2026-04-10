import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}/>
            <p className={styles.p}>Loading data...</p>
        </div>
    );
};

export default Loader;
