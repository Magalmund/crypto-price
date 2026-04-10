import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>Data provided by CoinGecko API</p>
        </footer>
    );
};

export default Footer;
