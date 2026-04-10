# 📊 Crypto Price Tracker

A fast, responsive cryptocurrency dashboard built with React and Vite.  
Track the market, compare coins, and explore detailed price data through a clean two-page interface powered by the CoinGecko API.

## Live Demo

[Open the app](https://crypto-price-black.vercel.app/)

## 📌 Why This Project

Crypto Price Tracker is a frontend-focused project built around real API data and practical UI patterns.  
It combines data fetching, routing, search, sorting, conditional rendering, charting, and error handling in a compact but scalable architecture.

---

## ✨ Key Features

- Browse the top 100 cryptocurrencies by market cap
- Search by coin name or symbol
- Sort by rank, name, price, 24h change, and market cap
- Toggle between grid and list views
- Open a dedicated page for each coin
- View a 7-day price chart
- See loading, error, and retry states
- Use the app comfortably on desktop and mobile

---

## 🛠 Tech Stack

- React 19
- Vite
- React Router
- Recharts
- CoinGecko API
- JavaScript
- CSS Modules

---

## 📄 Pages

### 🔹 Home

The home page provides a quick market overview and lets users explore coins efficiently.

It includes:

- searchable market list
- sorting controls
- grid/list layout switch
- coin cards with price, rank, volume, and market cap

### 🔹 Coin Details

The details page focuses on a single asset and surfaces its key market information.

It includes:

- coin identity and rank
- current price
- 24h price change
- 24h high and low
- market cap
- trading volume
- circulating supply
- total supply
- 7-day chart

---

## ✉️ Routing

```text
/           Home page
/coin/:id   Coin details page
 ```

---

## 📁 Architecture

The project uses a layered, feature-oriented structure to keep UI, business logic, and reusable parts separated.

- Fetch and display live cryptocurrency market data
- Build a multi-page experience using React Router
- Implement search and sorting logic for dynamic data
- Visualize price history with charts
- Create reusable UI components and utility functions
- Organize a React project with a simple and maintainable structure


```text
src/
  app/
    layout/
    router/
    styles/
  pages/
    home/
    coin-detail/
  widgets/
    header/
    footer/
    market-controls/
  features/
    search-coins/
    sort-coins/
    toggle-coin-view/
  entities/
    coin/
      api/
      lib/
      model/
      ui/
  shared/
    lib/
    ui/
```
---

## 🔹 Layer Overview

- `app` contains application setup, layout, routing, and global styles
- `pages` contains route-level screens
- `widgets` contains composed UI sections
- `features` contains focused user interactions
- `entities` contains coin-related domain logic
- `shared` contains reusable UI and utilities

---

## 🔹 Data Source
The app uses the CoinGecko API for all market data.

Endpoints used:

- `coins/markets` for the main list
- `coins/{id}` for coin details
- `coins/{id}/market_chart` for 7-day chart data

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/username/crypto-price.git
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start development server

```bash
npm run dev
```

The app runs at:

```bash
http://localhost:5173/
```

---

## 🔹 Implementation Notes
- Detail page and chart are lazy-loaded
- Search input is optimized with deferred rendering
- API errors are handled with user-friendly retry states
- The app depends on CoinGecko API availability and rate limits

---

## 🔹 Future Improvements
- Add favorites or watchlist support
- Add pagination or infinite scrolling
- Add more chart ranges
- Add currency selection
- Add unit and integration tests
