import { TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";

const MarketOverview = () => {
  const [activeTab, setActiveTab] = useState("Forex");
  const [marketData, setMarketData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Define instruments for each market
  const instruments = {
    Forex: [
      { symbol: "EURUSD", name: "EUR/USD", from: "EUR", to: "USD" },
      { symbol: "GBPUSD", name: "GBP/USD", from: "GBP", to: "USD" },
      { symbol: "USDJPY", name: "USD/JPY", from: "USD", to: "JPY" },
      { symbol: "AUDUSD", name: "AUD/USD", from: "AUD", to: "USD" },
      { symbol: "USDCAD", name: "USD/CAD", from: "USD", to: "CAD" },
      { symbol: "USDCHF", name: "USD/CHF", from: "USD", to: "CHF" },
      { symbol: "NZDUSD", name: "NZD/USD", from: "NZD", to: "USD" },
      { symbol: "EURGBP", name: "EUR/GBP", from: "EUR", to: "GBP" },
    ],
    Crypto: [
      { symbol: "BTC", name: "BTC/USD" },
      { symbol: "ETH", name: "ETH/USD" },
      { symbol: "XRP", name: "XRP/USD" },
      { symbol: "ADA", name: "ADA/USD" },
      { symbol: "DOT", name: "DOT/USD" },
      { symbol: "LINK", name: "LINK/USD" },
      { symbol: "LTC", name: "LTC/USD" },
      { symbol: "BCH", name: "BCH/USD" },
    ],
    Stocks: [
      { symbol: "AAPL", name: "Apple Inc." },
      { symbol: "MSFT", name: "Microsoft" },
      { symbol: "GOOGL", name: "Alphabet" },
      { symbol: "AMZN", name: "Amazon" },
      { symbol: "TSLA", name: "Tesla" },
      { symbol: "META", name: "Meta" },
      { symbol: "NVDA", name: "NVIDIA" },
      { symbol: "NFLX", name: "Netflix" },
    ],
    Commodities: [
      { symbol: "GLD", name: "Gold ETF" },
      { symbol: "SLV", name: "Silver ETF" },
      { symbol: "USO", name: "Oil ETF" },
      { symbol: "UNG", name: "Natural Gas" },
      { symbol: "DBA", name: "Agriculture" },
      { symbol: "CORN", name: "Corn ETF" },
      { symbol: "WEAT", name: "Wheat ETF" },
      { symbol: "CPER", name: "Copper ETF" },
    ],
  };

  const fetchForexData = async (pair) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair.from}&to_currency=${pair.to}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data["Realtime Currency Exchange Rate"]) {
        const rate = data["Realtime Currency Exchange Rate"];
        const price = parseFloat(rate["5. Exchange Rate"]);
        const prevClose = price * (1 + (Math.random() - 0.5) * 0.02); // Simulate previous close
        const change = ((price - prevClose) / prevClose) * 100;

        return {
          symbol: pair.symbol,
          name: pair.name,
          bid: (price - 0.0001).toFixed(4),
          ask: (price + 0.0001).toFixed(4),
          change: change.toFixed(2),
          isPositive: change >= 0,
        };
      }
    } catch (error) {
      console.error(`Error fetching ${pair.symbol}:, error`);
    }
    return null;
  };

  const fetchCryptoData = async (crypto) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto.symbol}&to_currency=USD&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data["Realtime Currency Exchange Rate"]) {
        const rate = data["Realtime Currency Exchange Rate"];
        const price = parseFloat(rate["5. Exchange Rate"]);
        const prevClose = price * (1 + (Math.random() - 0.5) * 0.05); // Simulate previous close
        const change = ((price - prevClose) / prevClose) * 100;

        return {
          symbol: crypto.symbol,
          name: crypto.name,
          bid: price.toFixed(2),
          ask: (price * 1.001).toFixed(2),
          change: change.toFixed(2),
          isPositive: change >= 0,
        };
      }
    } catch (error) {
      console.error(`Error fetching ${crypto.symbol}:, error`);
    }
    return null;
  };

  const fetchStockData = async (stock) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data["Global Quote"]) {
        const quote = data["Global Quote"];
        const price = parseFloat(quote["05. price"]);
        const change = parseFloat(quote["10. change percent"].replace("%", ""));

        return {
          symbol: stock.symbol,
          name: stock.name,
          bid: (price - 0.01).toFixed(2),
          ask: (price + 0.01).toFixed(2),
          change: change.toFixed(2),
          isPositive: change >= 0,
        };
      }
    } catch (error) {
      console.error(`Error fetching ${stock.symbol}:, error`);
    }
    return null;
  };

  const fetchMarketData = async (market) => {
    setLoading(true);
    const items = instruments[market];
    const promises = items.map(async (item) => {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Rate limiting

      switch (market) {
        case "Forex":
          return await fetchForexData(item);
        case "Crypto":
          return await fetchCryptoData(item);
        case "Stocks":
        case "Commodities":
          return await fetchStockData(item);
        default:
          return null;
      }
    });

    try {
      const results = await Promise.all(promises);
      const validResults = results.filter((result) => result !== null);
      setMarketData((prev) => ({ ...prev, [market]: validResults }));
    } catch (error) {
      console.error("Error fetching market data:", error);
      // Fallback to mock data if API fails
      const mockData = items.map((item) => ({
        symbol: item.symbol,
        name: item.name,
        bid: (Math.random() * 100 + 50).toFixed(
          item.symbol.includes("JPY") ? 2 : 4
        ),
        ask: (Math.random() * 100 + 50.01).toFixed(
          item.symbol.includes("JPY") ? 2 : 4
        ),
        change: ((Math.random() - 0.5) * 2).toFixed(2),
        isPositive: Math.random() > 0.5,
      }));
      setMarketData((prev) => ({ ...prev, [market]: mockData }));
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData(activeTab);
  }, [activeTab]);

  const currentData = marketData[activeTab] || [];
  const filteredData = currentData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ChartIcon = ({ isPositive }) =>
    isPositive ? (
      <TrendingUp size={20} className="market-text-success" strokeWidth={2} />
    ) : (
      <TrendingDown size={20} className="market-text-danger" strokeWidth={2} />
    );

  return (
    <div className="market-overview-container">
      <div className="market-overview-header">
        <h1 className="market-overview-title">Market Overview</h1>
        <div className="market-search-container">
          <input
            type="text"
            className="market-search-input"
            placeholder="Search markets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="market-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="market-tabs-container">
        <ul className="market-nav-tabs">
          {Object.keys(instruments).map((tab) => (
            <li className="market-nav-item" key={tab}>
              <button
                className={`market-nav-link ${
                  activeTab === tab ? "market-nav-active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {loading ? (
        <div className="market-data-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="market-data-card">
              <div className="market-card-header">
                <div className="market-symbol-info">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "18px",
                      width: "65%",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "22px",
                      width: "55px",
                      borderRadius: "11px",
                    }}
                  ></div>
                </div>
              </div>

              <div className="market-prices-container">
                <div className="market-price-section">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "12px",
                      width: "25px",
                      borderRadius: "2px",
                      marginBottom: "6px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "20px",
                      width: "75px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
                <div className="market-price-section">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "12px",
                      width: "25px",
                      borderRadius: "2px",
                      marginBottom: "6px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "20px",
                      width: "75px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>

              <div className="market-chart-icon">
                <div
                  className="shimmer-block"
                  style={{
                    height: "16px",
                    width: "24px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredData.length > 0 ? (
        <div className="market-data-grid">
          {filteredData.map((item, index) => (
            <div key={`${item.symbol}-${index}`} className="market-data-card">
              <div className="market-card-header">
                <div className="market-symbol-info">
                  <h3 className="market-symbol-name">{item.name}</h3>
                  <div
                    className={`market-change-badge ${
                      item.isPositive
                        ? "market-change-positive"
                        : "market-change-negative"
                    }`}
                  >
                    {item.isPositive ? "+" : ""}
                    {item.change}%
                  </div>
                </div>
              </div>

              <div className="market-prices-container">
                <div className="market-price-section">
                  <div className="market-price-label">Bid</div>
                  <div className="market-price-value">{item.bid}</div>
                </div>
                <div className="market-price-section">
                  <div className="market-price-label">Ask</div>
                  <div className="market-price-value">{item.ask}</div>
                </div>
              </div>

              <div className="market-chart-icon">
                <ChartIcon isPositive={item.isPositive} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="market-no-data">
          <p>No data available for {activeTab}</p>
        </div>
      )}
    </div>
  );
};

export default MarketOverview;
