import { useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";

const StockTicker = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stockData, setStockData] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewsLoading, setIsNewsLoading] = useState(false); // Added this line
  const [error, setError] = useState("");

  const fetchStock = async (symbol) => {
    if (!symbol) return;

    setIsLoading(true);
    setError("");
    setNewsArticles([]);

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (
        data["Global Quote"] &&
        Object.keys(data["Global Quote"]).length > 0
      ) {
        const quote = data["Global Quote"];

        setStockData({
          symbol: quote["01. symbol"],
          price: parseFloat(quote["05. price"]).toFixed(2),
          change: parseFloat(quote["09. change"]).toFixed(2),
          changePercent: quote["10. change percent"].replace("%", ""),
          open: parseFloat(quote["02. open"]).toFixed(4),
          high: parseFloat(quote["03. high"]).toFixed(4),
          low: parseFloat(quote["04. low"]).toFixed(4),
          volume: quote["06. volume"],
          prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
          companyName: getCompanyName(quote["01. symbol"]),
        });

        fetchNews(symbol);
      } else {
        setError("Stock not found");
        setStockData(null);
      }
    } catch (err) {
      setError("Failed to fetch stock data");
      setStockData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNews = async (symbol) => {
    setIsNewsLoading(true); // Added this line
    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${API_KEY}`
      );
      const data = await res.json();
      const feed = data.feed || [];
      setNewsArticles(feed.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch news", err);
    } finally {
      setIsNewsLoading(false); // Added this line
    }
  };

  const getCompanyName = (symbol) => {
    const companies = {
      AAPL: "Apple Inc.",
      MSFT: "Microsoft Corp.",
      GOOGL: "Alphabet Inc.",
      AMZN: "Amazon.com Inc.",
      META: "Meta Platforms Inc.",
      TSLA: "Tesla Inc.",
      NVDA: "NVIDIA Corp.",
      JPM: "JPMorgan Chase & Co.",
    };
    return companies[symbol] || "${symbol} Stock";
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchStock(searchQuery.trim().toUpperCase());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBack = () => {
    setStockData(null);
    setSearchQuery("");
    setNewsArticles([]);
  };

  return (
    <div className={`stock-ticker p-0 ${stockData ? "expanded" : ""}`}>
      <style>
        {`
          @keyframes newsLoadingSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes newsPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes newsSlideIn {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .news-loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-radius: 12px;
            margin: 20px 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }
          .news-loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #e2e8f0;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: newsLoadingSpin 1s linear infinite;
            margin-bottom: 16px;
          }
          .news-loading-text {
            color: #64748b;
            font-size: 16px;
            font-weight: 500;
            animation: newsPulse 2s ease-in-out infinite;
            text-align: center;
          }
          .news-loading-dots {
            display: inline-block;
            width: 20px;
            text-align: left;
          }
          .news-loading-dots::after {
            content: '';
            animation: newsLoadingDots 1.5s infinite;
          }
          @keyframes newsLoadingDots {
            0%, 20% { content: ''; }
            40% { content: '.'; }
            60% { content: '..'; }
            80%, 100% { content: '...'; }
          }
          .news-article {
            animation: newsSlideIn 0.5s ease-out;
          }
        `}
      </style>

      {!stockData ? (
        <div className="search-only-container">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search ticker (e.g., AMZN, AAPL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search ticker (e.g., AMZN, AAPL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}

          <div className="stock-details">
            <div className="back-link" onClick={handleBack}></div>

            <div className="stock-header">
              <div className="column headers">
                <div>Symbol</div>
                <div>Trend</div>
                <div>Price</div>
              </div>

              <div className="column data">
                <div className="symbol-container">
                  <div className="close-button" onClick={handleBack}>
                    ×
                  </div>
                  <div className="symbol">{stockData.symbol}</div>
                  <div className="company-name">{stockData.companyName}</div>
                </div>

                <div className="trend">
                  <svg
                    viewBox="0 0 100 30"
                    className={
                      parseFloat(stockData.change) >= 0
                        ? "trend-up"
                        : "trend-down"
                    }
                  >
                    <path
                      d={
                        parseFloat(stockData.change) >= 0
                          ? "M0,20 Q25,15 50,10 T100,5"
                          : "M0,5 Q25,10 50,15 T100,20"
                      }
                    />
                  </svg>
                </div>

                <div className="price-container">
                  <div className="price">${stockData.price}</div>
                  <div
                    className={`change ${
                      parseFloat(stockData.change) >= 0
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {parseFloat(stockData.change) >= 0 ? "+" : ""}
                    {stockData.changePercent}%
                  </div>
                </div>
              </div>
            </div>

            <div className="stock-details-rows">
              <div className="detail-row">
                <div className="detail-label">Open:</div>
                <div className="detail-value">${stockData.open}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">High:</div>
                <div className="detail-value">${stockData.high}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Low:</div>
                <div className="detail-value">${stockData.low}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Volume:</div>
                <div className="detail-value">
                  {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Prev Close:</div>
                <div className="detail-value">${stockData.prevClose}</div>
              </div>
            </div>

            <div className="news-section-ticker">
              <h4 className="news-title">Latest News on {stockData.symbol}</h4>

              {/* Added beautiful loading animation */}
              {isNewsLoading ? (
                <div className="news-loading-container">
                  <div className="news-loading-spinner"></div>
                  <div className="news-loading-text">
                    Loading latest news
                    <span className="news-loading-dots"></span>
                  </div>
                </div>
              ) : newsArticles.length > 0 ? (
                newsArticles.map((article, index) => (
                  <div key={index} className="news-article">
                    <div className="news-headline">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </div>
                    <div className="news-meta">
                      <span>
                        {new Date(article.time_published).toLocaleString()}
                      </span>
                      <span className="news-source"> | {article.source}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  No news articles found for {stockData.symbol}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StockTicker;
