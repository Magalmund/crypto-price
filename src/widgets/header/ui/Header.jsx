import React from 'react';
import styles from './Header.module.css';
import { SearchCoinsInput } from "../../../features/search-coins";

const Header = ({isHomePage, searchQuery, setSearchQuery, onBack}) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoSection}>
                    <span className={styles.eyebrow}>Dark Neumorphic Dashboard</span>
                    <h1 className={styles.h1}>Crypto Tracker</h1>
                    <p className={styles.p}>Real-time cryptocurrency prices with a tactile black and graphite interface.</p>
                </div>

                {isHomePage ? (
                    <div className={styles.searchSection}>
                        <SearchCoinsInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    </div>
                ) : (
                    <button onClick={onBack} className="back-button">
                        ← Back to Market
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
