import React from 'react';

const Header = ({isHomePage, searchQuery, setSearchQuery, onBack}) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <h1>🚀 Crypto Tracker</h1>
                    <p>Real-time cryptocurrency prices and market data</p>
                </div>

                {isHomePage ? (
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search cryptos..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
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
