# 📊 Crypto Price Tracker

A modern cryptocurrency tracking application built with **Vite** and **React**, featuring live market data, search and sorting, coin detail pages, and chart visualization using the CoinGecko API.

---

## 📌 Description

This project was built as a frontend practice application focused on working with real API data and building a clean, responsive single-page application with React.

- Fetch and display live cryptocurrency market data
- Build a multi-page experience using React Router
- Implement search and sorting logic for dynamic data
- Visualize price history with charts
- Create reusable UI components and utility functions
- Organize a React project with a simple and maintainable structure

---

## 🎯 Focus Areas

Frontend practice project focused on:

- React component architecture
- State management with Hooks
- API integration with `fetch`
- Conditional rendering and loading states
- Client-side filtering and sorting
- Responsive UI development
- Data formatting and presentation
- Clean project structure

---

## 🧠 Architecture Overview

### 🔹 Home Page

The main page is responsible for:

- Fetching cryptocurrency market data
- Displaying coins in `grid` and `list` view
- Searching by coin name or symbol
- Sorting by rank, name, price, 24h change, and market cap
- Auto-refreshing data every 30 seconds

---

### 🔹 Coin Detail Page

The detail page includes:

- Coin information and market stats
- Current price and 24h performance
- 24h high and low values
- 7-day price chart using `Recharts`
- Navigation back to the main list

---

### 🔹 Data Layer

The application:

- Uses a separate API module for CoinGecko requests
- Splits logic into reusable utility functions
- Formats prices and market capitalization values for better UX
- Keeps page components focused on rendering and UI behavior

---

### 👨‍💻 Main Goals

Frontend practice project focused on:

- Working with asynchronous API requests
- Understanding React rendering and state updates
- Building reusable and readable components
- Structuring a small real-world style frontend app
- Practicing data-driven UI development

---

## 🛠 Tech Stack

- **Vite**
- **React**
- **React Router**
- **Recharts**
- **CoinGecko API**
- JavaScript (ES6+)
- CSS3

---

## ✨ Features

- Live cryptocurrency market data
- Search by name and symbol
- Sorting by different market parameters
- Grid and list layout toggle
- Detailed coin page
- 7-day chart visualization
- Auto-refresh every 30 seconds
- Responsive design for desktop and mobile

---

## 📁 Project Structure

```text
src/
  API/
    coinGecko.js
  components/
    CryptoCard.jsx
  pages/
    Home.jsx
    CoinDetail.jsx
  utils/
    filterAndSort.js
    formatter.js
  App.jsx
  main.jsx
  index.css
```

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

