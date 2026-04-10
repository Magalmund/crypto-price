import React from 'react';
import styles from './Header.module.css';
import { SearchCoinsInput } from "../../../features/search-coins";

const Header = ({isHomePage, searchQuery, setSearchQuery, onBack}) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoSection}>
                    <h1 className={styles.h1}>🚀 Crypto Tracker</h1>
                    <p className={styles.p}>Real-time cryptocurrency prices and market data</p>
                </div>

                {isHomePage ? (
                    <div className={styles.searchSection}>
                        <SearchCoinsInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    </div>
                ) : (
                    <button onClick={onBack} className="back-button">
                        ← Back to List
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
