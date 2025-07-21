import { useEffect, useState } from "react";
import TradingPlatform from "./upcomingsessions";
const API_KEY = "04RGF1U9PAJ49VYI";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Category mapping for different topics
  const getCategoryFromTitle = (title, summary) => {
    const text = (title + " " + summary).toLowerCase();

    if (
      text.includes("bitcoin") ||
      text.includes("crypto") ||
      text.includes("ethereum") ||
      text.includes("blockchain")
    ) {
      return "Crypto";
    } else if (
      text.includes("oil") ||
      text.includes("gold") ||
      text.includes("commodity") ||
      text.includes("crude")
    ) {
      return "Commodities";
    } else if (
      text.includes("stock") ||
      text.includes("earnings") ||
      text.includes("shares") ||
      text.includes("nasdaq") ||
      text.includes("dow")
    ) {
      return "Stocks";
    } else if (
      text.includes("fed") ||
      text.includes("interest") ||
      text.includes("rate") ||
      text.includes("inflation") ||
      text.includes("gdp")
    ) {
      return "Economy";
    } else {
      return "Market";
    }
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const newsTime = new Date(timestamp);
    const diffInHours = Math.floor((now - newsTime) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now - newsTime) / (1000 * 60));
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL,MSFT,GOOGL,AMZN,TSLA&topics=financial_markets&time_from=T0000&limit=50&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.feed && Array.isArray(data.feed)) {
        const processedNews = data.feed.slice(0, 8).map((item, index) => ({
          id: index,
          title: item.title || "Market Update",
          source: item.source || "Financial News",
          timestamp: item.time_published || new Date().toISOString(),
          url: item.url || "#",
          category: getCategoryFromTitle(item.title || "", item.summary || ""),
          summary: item.summary || "",
        }));

        setNews(processedNews);
      } else {
        // Fallback mock data if API fails
        const mockNews = [
          {
            id: 1,
            title: "Fed Signals Potential Rate Cut in Coming Months",
            source: "Financial Times",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Economy",
          },
          {
            id: 2,
            title: "Tech Stocks Rally as Earnings Beat Expectations",
            source: "Bloomberg",
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Stocks",
          },
          {
            id: 3,
            title: "Oil Prices Surge Amid Middle East Tensions",
            source: "Reuters",
            timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Commodities",
          },
          {
            id: 4,
            title: "Bitcoin Breaks $65,000 Resistance Level",
            source: "CoinDesk",
            timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Crypto",
          },
          {
            id: 5,
            title: "Tesla Reports Record Quarterly Deliveries",
            source: "CNBC",
            timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Stocks",
          },
          {
            id: 6,
            title: "Gold Hits New High as Investors Seek Safe Haven",
            source: "MarketWatch",
            timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
            url: "#",
            category: "Commodities",
          },
        ];
        setNews(mockNews);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      // Set mock data on error
      const mockNews = [
        {
          id: 1,
          title: "Market Analysis: Key Economic Indicators Show Growth",
          source: "Financial Times",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          url: "#",
          category: "Economy",
        },
        {
          id: 2,
          title: "Technology Sector Leads Market Gains Today",
          source: "Bloomberg",
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
          url: "#",
          category: "Stocks",
        },
        {
          id: 3,
          title: "Energy Markets React to Global Supply Changes",
          source: "Reuters",
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          url: "#",
          category: "Commodities",
        },
        {
          id: 4,
          title: "Cryptocurrency Market Shows Strong Performance",
          source: "CoinDesk",
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
          url: "#",
          category: "Crypto",
        },
      ];
      setNews(mockNews);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Economy":
        return "#3b82f6"; // Blue
      case "Stocks":
        return "var(--theme-color)"; // Green
      case "Commodities":
        return "#f59e0b"; // Orange
      case "Crypto":
        return "#8b5cf6"; // Purple
      default:
        return "#6b7280"; // Gray
    }
  };

  return (
    <div class="container mb-4">
      <div class="row">
        <div className="col-lg-6">
          <div className="news-container">
            <h2 className="news-header">Latest News</h2>

            {loading ? (
              // Shimmer Loading State
              <>
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="news-item">
                    <div
                      className="shimmer-block"
                      style={{
                        height: "20px",
                        width: `${Math.random() * 30 + 70}%`,
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    ></div>
                    <div className="news-meta">
                      <div
                        className="shimmer-block"
                        style={{
                          height: "14px",
                          width: "120px",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        className="shimmer-block"
                        style={{
                          height: "20px",
                          width: "60px",
                          borderRadius: "10px",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Actual News Data
              news.map((item) => (
                <div key={item.id} className="news-item">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-title"
                    onClick={(e) => {
                      if (item.url === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span>{item.title}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="news-external-icon"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  <div className="news-meta">
                    <div className="news-source-time">
                      <span>{item.source}</span>
                      <div className="news-dot"></div>
                      <span>{timeAgo(item.timestamp)}</span>
                    </div>
                    <span
                      className="news-badge"
                      style={{
                        backgroundColor: getCategoryColor(item.category),
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div class="col-lg-6">
          <TradingPlatform />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
