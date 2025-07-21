// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API_KEY = "04RGF1U9PAJ49VYI";

// export default function SearchStockBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const navigate = useNavigate();

//   const fetchSuggestions = async (value) => {
//     setQuery(value);
//     if (value.length < 1) {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     try {
//       const res = await fetch(
//         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`
//       );
//       const data = await res.json();
//       console.log("Alpha Vantage Response:", data);

//       if (data.bestMatches) {
//         setResults(data.bestMatches.slice(0, 5));
//         setShowResults(true);
//       } else {
//         setResults([]);
//         setShowResults(false);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setResults([]);
//       setShowResults(false);
//     }
//   };

//   const handleSelect = (symbol) => {
//     navigate(`/trading-tools?symbol=${symbol}`);
//     setQuery("");
//     setResults([]);
//     setShowResults(false);
//   };

//   const styles = {
//     searchContainer: {
//       position: "relative",
//       width: "100%",
//       maxWidth: "500px",
//       margin: "0 auto",
//       zIndex: 50,
//     },
//     searchWrapper: {
//       position: "relative",
//       width: "100%",
//     },
//     searchInputGroup: {
//       position: "relative",
//       display: "flex",
//       alignItems: "center",
//       background: "white",
//       border: "2px solid #e5e7eb",
//       borderRadius: "16px",
//       boxShadow:
//         "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//       transition: "all 0.2s ease",
//       overflow: "hidden",
//     },
//     searchInputGroupFocus: {
//       borderColor: "#3b82f6",
//       boxShadow:
//         "0 0 0 3px rgba(59, 130, 246, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//       transform: "translateY(-1px)",
//     },
//     searchIcon: {
//       position: "absolute",
//       left: "16px",
//       width: "20px",
//       height: "20px",
//       color: "#6b7280",
//       zIndex: 1,
//     },
//     searchInput: {
//       width: "100%",
//       padding: "16px 60px 16px 48px",
//       border: "none",
//       outline: "none",
//       fontSize: "16px",
//       background: "transparent",
//       color: "#1f2937",
//       fontWeight: "500",
//     },
//     resultsDropdown: {
//       position: "absolute",
//       top: "calc(100% + 8px)",
//       left: 0,
//       right: 0,
//       background: "white",
//       border: "1px solid #e5e7eb",
//       borderRadius: "16px",
//       boxShadow:
//         "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       zIndex: 50,
//       maxHeight: "320px",
//       overflowY: "auto",
//       animation: "fadeIn 0.2s ease-out",
//     },
//     resultItem: {
//       display: "flex",
//       alignItems: "center",
//       padding: "16px",
//       cursor: "pointer",
//       borderBottom: "1px solid #f3f4f6",
//       transition: "all 0.2s ease",
//       gap: "12px",
//     },
//     resultItemHover: {
//       background: "#f8fafc",
//       transform: "translateX(4px)",
//     },
//     resultIcon: {
//       width: "24px",
//       height: "24px",
//       color: "#3b82f6",
//       flexShrink: 0,
//     },
//     resultContent: {
//       flex: 1,
//       minWidth: 0,
//     },
//     resultMain: {
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       marginBottom: "4px",
//     },
//     resultSymbol: {
//       fontWeight: "700",
//       color: "#1f2937",
//       fontSize: "16px",
//     },
//     resultName: {
//       fontSize: "14px",
//       color: "#4b5563",
//       fontWeight: "500",
//       whiteSpace: "nowrap",
//       overflow: "hidden",
//       textOverflow: "ellipsis",
//       maxWidth: "200px",
//     },
//     resultDetails: {
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//     },
//     resultType: {
//       background: "#dbeafe",
//       color: "#1d4ed8",
//       padding: "2px 8px",
//       borderRadius: "12px",
//       fontSize: "11px",
//       fontWeight: "600",
//       textTransform: "uppercase",
//     },
//     resultArrow: {
//       width: "16px",
//       height: "16px",
//       color: "#9ca3af",
//       flexShrink: 0,
//       opacity: 0,
//       transition: "opacity 0.2s ease",
//     },
//     resultArrowVisible: {
//       opacity: 1,
//     },
//   };

//   const [hoveredIndex, setHoveredIndex] = useState(-1);

//   return (
//     <>
//       <style>
//         {`
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .search-input::placeholder {
//             color: #9ca3af;
//             font-weight: 400;
//           }

//           .results-dropdown::-webkit-scrollbar {
//             width: 6px;
//           }

//           .results-dropdown::-webkit-scrollbar-track {
//             background: #f1f5f9;
//           }

//           .results-dropdown::-webkit-scrollbar-thumb {
//             background: #cbd5e1;
//             border-radius: 3px;
//           }

//           .results-dropdown::-webkit-scrollbar-thumb:hover {
//             background: #94a3b8;
//           }

//           @media (max-width: 640px) {
//             .search-container {
//               max-width: 100% !important;
//               margin: 0 16px !important;
//             }

//             .search-input {
//               font-size: 16px !important;
//               padding: 14px 50px 14px 44px !important;
//             }

//             .search-icon {
//               left: 14px !important;
//               width: 18px !important;
//               height: 18px !important;
//             }

//             .result-item {
//               padding: 14px !important;
//             }

//             .result-name {
//               max-width: 150px !important;
//             }
//           }
//         `}
//       </style>

//       <div style={styles.searchContainer} className="search-container">
//         <div style={styles.searchWrapper}>
//           <div style={styles.searchInputGroup}>
//             <div style={styles.searchIcon} className="search-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.35-4.35"></path>
//               </svg>
//             </div>

//             <input
//               type="text"
//               value={query}
//               placeholder="Search stocks (e.g., AAPL, AMZN, TSLA)"
//               onChange={(e) => fetchSuggestions(e.target.value)}
//               style={styles.searchInput}
//               className="search-input"
//             />
//           </div>

//           {showResults && results.length > 0 && (
//             <div style={styles.resultsDropdown} className="results-dropdown">
//               {results.map((s, i) => (
//                 <div
//                   key={i}
//                   onClick={() => handleSelect(s["1. symbol"])}
//                   style={{
//                     ...styles.resultItem,
//                     ...(hoveredIndex === i ? styles.resultItemHover : {}),
//                     ...(i === results.length - 1
//                       ? { borderBottom: "none" }
//                       : {}),
//                   }}
//                   className="result-item"
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(-1)}
//                 >
//                   <div style={styles.resultIcon}>
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
//                     </svg>
//                   </div>

//                   <div style={styles.resultContent}>
//                     <div style={styles.resultMain}>
//                       <span
//                         style={styles.resultSymbol}
//                         className="result-symbol"
//                       >
//                         {s["1. symbol"]}
//                       </span>
//                       <span style={styles.resultName} className="result-name">
//                         {s["2. name"]}
//                       </span>
//                     </div>
//                     <div style={styles.resultDetails}>
//                       <span style={styles.resultType}>{s["3. type"]}</span>
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       ...styles.resultArrow,
//                       ...(hoveredIndex === i ? styles.resultArrowVisible : {}),
//                     }}
//                   >
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="m9 18 6-6-6-6" />
//                     </svg>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";

export default function TradingTools() {
  const containerRef = useRef(null);

  // Search states
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Dashboard states
  const [selectedSymbol, setSelectedSymbol] = useState(null); // Initially null - no dashboard
  const [overview, setOverview] = useState(null);
  const [price, setPrice] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [newsSentiment, setNewsSentiment] = useState(null);
  const [latestNews, setLatestNews] = useState(null);
  const [newsSlider, setNewsSlider] = useState([]);
  const [embedUrl, setEmbedUrl] = useState("");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Search functionality
  const fetchSuggestions = async (value) => {
    setQuery(value);
    if (value.length < 1) {
      setResults([]);
      setShowResults(false);
      return;
    }

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.bestMatches) {
        setResults(data.bestMatches.slice(0, 5));
        setShowResults(true);
      } else {
        setResults([]);
        setShowResults(false);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResults([]);
      setShowResults(false);
    }
  };

  const handleSelect = (symbol) => {
    setQuery(symbol);
    setSelectedSymbol(symbol); // This will trigger dashboard to show
    setResults([]);
    setShowResults(false);
  };

  // Clear dashboard and go back to search only
  const clearDashboard = () => {
    setSelectedSymbol(null);
    setQuery("");
    setOverview(null);
    setPrice(null);
    setSentiment(null);
    setNewsSentiment(null);
    setLatestNews(null);
    setNewsSlider([]);
  };

  const loadWidget = (symbol) => {
    if (!window.TradingView) return;
    new window.TradingView.widget({
      width: "100%",
      height: 500,
      symbol: `NASDAQ:${symbol}`,
      interval: "15",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#0e0e0e",
      enable_publishing: false,
      allow_symbol_change: false,
      container_id: "tradingview_widget",
    });
  };

  useEffect(() => {
    if (!selectedSymbol) return;

    const container = document.getElementById("financials_widget");
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `NASDAQ:${selectedSymbol}`,
      colorTheme: "dark",
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: 600,
    });

    container.appendChild(script);
  }, [selectedSymbol]);

  useEffect(() => {
    if (!selectedSymbol) return;

    if (
      !document.querySelector("script[src='https://s3.tradingview.com/tv.js']")
    ) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => loadWidget(selectedSymbol);
      document.body.appendChild(script);
    } else {
      loadWidget(selectedSymbol);
    }
  }, [selectedSymbol]);

  useEffect(() => {
    if (!selectedSymbol) return;
    if (containerRef.current) containerRef.current.innerHTML = "";
    loadWidget(selectedSymbol);
  }, [selectedSymbol]);

  useEffect(() => {
    if (!selectedSymbol) return;

    const fetchData = async () => {
      const [overviewRes, priceRes, sentimentRes, newsRes] = await Promise.all([
        fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${selectedSymbol}&apikey=${API_KEY}`
        ),
        fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedSymbol}&interval=15min&apikey=${API_KEY}`
        ),
        fetch(
          `https://www.alphavantage.co/query?function=SENTIMENT_ANALYSIS&symbol=${selectedSymbol}&apikey=${API_KEY}`
        ),
        fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${selectedSymbol}&apikey=${API_KEY}`
        ),
      ]);

      const overview = await overviewRes.json();
      const priceData = await priceRes.json();
      const sentimentData = await sentimentRes.json();
      const newsData = await newsRes.json();

      const ts = priceData["Time Series (15min)"];
      const latest = ts ? ts[Object.keys(ts)[0]] : null;
      const prev = ts ? ts[Object.keys(ts)[1]] : null;

      const current = latest ? parseFloat(latest["4. close"]) : null;
      const previous = prev ? parseFloat(prev["4. close"]) : current;
      const change = ((current - previous) / previous) * 100;

      setPrice({
        current: current?.toFixed(2),
        change: change?.toFixed(2),
        open: latest?.["1. open"],
        high: latest?.["2. high"],
        low: latest?.["3. low"],
        close: latest?.["4. close"],
      });

      setOverview(overview);
      setSentiment({
        score: sentimentData?.overall_sentiment_score || 0.625,
        label: "Bullish",
      });
      setNewsSentiment(newsData?.feed?.[0]?.overall_sentiment_score ?? 0.115);
      setLatestNews(newsData?.feed?.[0]);

      const sampleNews = [
        {
          title: "S&P 500 Bulls Remain in Control, but for How Long?",
          summary:
            "The S&P 500 continues its bullish rally driven by AI euphoria, potential tariff delays, and anticipation of Federal Reserve rate cuts. Market momentum remains strong, but potential risks include trade tensions and upcoming economic data releases.",
          source: "MarketWatch",
          time: "Jul 10th 2025",
        },
        {
          title: "Tesla Stock Surges 8% on Robotaxi Breakthrough Announcement",
          summary:
            "Tesla shares jumped after the company announced a major breakthrough in autonomous driving technology, bringing its robotaxi service closer to commercial deployment.",
          source: "Bloomberg",
          time: "Jul 10th 2025",
        },
        {
          title:
            "Fed Officials Signal Dovish Stance Ahead of September Meeting",
          summary:
            "Federal Reserve officials indicated a more accommodative monetary policy stance, raising expectations for potential rate cuts in the upcoming September FOMC meeting.",
          source: "Reuters",
          time: "Jul 10th 2025",
        },
        {
          title: "AI Chip Demand Drives Semiconductor Rally Across Markets",
          summary:
            "Semiconductor stocks continue their upward trajectory as artificial intelligence chip demand reaches unprecedented levels, benefiting major players in the industry.",
          source: "TechCrunch",
          time: "Jul 10th 2025",
        },
      ];
      setNewsSlider(sampleNews);
    };
    setEmbedUrl(
      `https://www.tradingview.com/symbols/NASDAQ-${selectedSymbol}/financials-overview/?utm_campaign=financials&utm_medium=widget&utm_source=dashboard.tradealgo.com`
    );

    fetchData();
  }, [selectedSymbol]);

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsSlider.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex(
      (prev) => (prev - 1 + newsSlider.length) % newsSlider.length
    );
  };

  const styles = {
    // Search only container (centered on screen)
    searchOnlyContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    searchOnlyTitle: {
      fontSize: "3.5rem",
      fontWeight: "900",
      color: "white",
      textAlign: "center",
      marginBottom: "2rem",
      textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
    searchOnlySubtitle: {
      fontSize: "1.3rem",
      color: "rgba(255,255,255,0.9)",
      textAlign: "center",
      marginBottom: "3rem",
      fontWeight: "500",
    },
    // Dashboard container (full page, scrollable)
    dashboardContainer: {
      background: "#000",
      minHeight: "100vh",
      padding: "20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflowY: "auto", // Make it scrollable
    },
    // Search bar styles
    searchContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "600px",
      zIndex: 50,
    },
    searchWrapper: {
      position: "relative",
      width: "100%",
    },
    searchInputGroup: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "white",
      border: "3px solid rgba(255,255,255,0.3)",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
      overflow: "hidden",
    },
    searchIcon: {
      position: "absolute",
      left: "20px",
      width: "24px",
      height: "24px",
      color: "#6b7280",
      zIndex: 1,
    },
    searchInput: {
      width: "100%",
      padding: "12px 40px 10px 50px",
      border: "none",
      outline: "none",
      fontSize: "18px",
      background: "transparent",
      color: "#1f2937",
      fontWeight: "500",
    },
    resultsDropdown: {
      position: "absolute",
      top: "calc(100% + 12px)",
      left: 0,
      right: 0,
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "20px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      zIndex: 50,
      maxHeight: "400px",
      overflowY: "auto",
    },
    resultItem: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      cursor: "pointer",
      borderBottom: "1px solid #f3f4f6",
      transition: "all 0.2s ease",
      gap: "16px",
    },
    resultItemHover: {
      background: "#f8fafc",
      transform: "translateX(6px)",
    },
    resultIcon: {
      width: "28px",
      height: "28px",
      color: "#3b82f6",
      flexShrink: 0,
    },
    resultContent: {
      flex: 1,
      minWidth: 0,
    },
    resultMain: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "6px",
    },
    resultSymbol: {
      fontWeight: "800",
      color: "#1f2937",
      fontSize: "18px",
    },
    resultName: {
      fontSize: "15px",
      color: "#4b5563",
      fontWeight: "500",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "250px",
    },
    resultType: {
      background: "#dbeafe",
      color: "#1d4ed8",
      padding: "4px 12px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    // Dashboard header (when stock is selected)
    dashboardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      padding: "0 20px",
    },
    dashboardTitle: {
      fontSize: "2.5rem",
      fontWeight: "800",
      color: "white",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    backButton: {
      background: "linear-gradient(45deg, #ef4444, #dc2626)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
    },
    // Original dashboard styles
    priceCard: {
      backgroundImage: `linear-gradient(rgb(45 45 45 / 60%), rgb(7 4 4 / 60%))`,

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "24px",
      padding: "32px",
      marginBottom: "32px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      color: "#fff",
    },
    priceHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "24px",
    },
    symbolSection: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    symbol: {
      fontSize: "2.5rem",
      fontWeight: "900",
      color: "white",
      margin: 0,
    },
    liveBadge: {
      background: "linear-gradient(45deg, #22c55e, #16a34a)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      fontSize: "0.85rem",
      fontWeight: "700",
      boxShadow: "0 4px 8px rgba(34,197,94,0.3)",
      animation: "pulse 2s infinite",
    },
    priceDisplay: {
      textAlign: "right",
    },
    currentPrice: {
      fontSize: "3.5rem",
      fontWeight: "900",
      color: "white",
      marginBottom: "8px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    priceChange: {
      fontSize: "1.5rem",
      fontWeight: "700",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    priceMetrics: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "24px",
      marginTop: "24px",
    },
    metricCard: {
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      border: "1px solid rgba(255,255,255,0.2)",
    },
    metricLabel: {
      fontSize: "0.9rem",
      color: "rgba(255,255,255,0.8)",
      marginBottom: "8px",
      fontWeight: "600",
    },
    metricValue: {
      fontSize: "1.5rem",
      fontWeight: "800",
      color: "white",
    },
    chartCard: {
      borderRadius: "24px",
      marginBottom: "32px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.05)",
    },
    chartHeader: {
      background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
      padding: "24px",
      color: "white",
    },
    chartTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    sentimentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },
    sentimentCard: {
      backgroundImage: `linear-gradient(rgba(3, 31, 15, 0.2), rgba(55, 65, 81, 0.85))`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff",
    },
    sentimentTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "white",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    newsCard: {
      backgroundImage: `linear-gradient(rgba(3, 31, 15, 0.2), rgba(55, 65, 81, 0.85))`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff",
    },
    newsHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    newsTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "white",
      margin: 0,
    },
    newsControls: {
      display: "flex",
      gap: "12px",
    },
    newsButton: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "none",
      background: "linear-gradient(45deg, #22c55e, #16a34a)",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 8px rgba(34,197,94,0.3)",
    },
    newsContent: {
      color: "white",
    },
    newsHeadline: {
      fontSize: "1.2rem",
      fontWeight: "700",
      marginBottom: "16px",
      lineHeight: "1.4",
    },
    newsSource: {
      color: "#22c55e",
      fontSize: "0.9rem",
      fontWeight: "600",
      marginBottom: "16px",
    },
    newsSummary: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "rgba(255,255,255,0.9)",
      marginBottom: "16px",
    },
    newsLink: {
      color: "#22c55e",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "0.9rem",
    },
    overviewCard: {
      background: "white",
      borderRadius: "24px",
      marginBottom: "32px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.05)",
    },
    overviewHeader: {
      background: "#000",
      padding: "24px",
      color: "white",
    },
    overviewTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    overviewGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      background: "#000",
      gap: "24px",
      padding: "32px",
    },
    overviewItem: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "center",
      border: "1px solid rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
    },
    overviewIcon: {
      fontSize: "2.5rem",
      marginBottom: "12px",
      color: "#3b82f6",
    },
    overviewLabel: {
      fontSize: "0.9rem",
      color: "#6b7280",
      marginBottom: "8px",
      fontWeight: "600",
    },
    overviewValue: {
      fontSize: "1.5rem",
      fontWeight: "800",
      color: "#1f2937",
    },
  };

  // If no stock is selected, show only search bar
  if (!selectedSymbol) {
    return (
      <div style={styles.searchOnlyContainer}>
        <div style={styles.searchContainer}>
          <div style={styles.searchWrapper}>
            <div style={styles.searchInputGroup}>
              <div style={styles.searchIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>

              <input
                type="text"
                value={query}
                placeholder="Search stocks (e.g., AAPL, AMZN, TSLA, GOOGL)"
                onChange={(e) => fetchSuggestions(e.target.value)}
                style={styles.searchInput}
              />
            </div>

            {showResults && results.length > 0 && (
              <div style={styles.resultsDropdown}>
                {results.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(s["1. symbol"])}
                    style={{
                      ...styles.resultItem,
                      ...(hoveredIndex === i ? styles.resultItemHover : {}),
                      ...(i === results.length - 1
                        ? { borderBottom: "none" }
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    <div style={styles.resultIcon}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                      </svg>
                    </div>

                    <div style={styles.resultContent}>
                      <div style={styles.resultMain}>
                        <span style={styles.resultSymbol}>
                          {s["1. symbol"]}
                        </span>
                        <span style={styles.resultName}>{s["2. name"]}</span>
                      </div>
                      <div>
                        <span style={styles.resultType}>{s["3. type"]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // If stock is selected, show full dashboard
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          .overview-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          
          .news-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(34,197,94,0.4);
          }
          
          .metric-card:hover {
            background: rgba(255,255,255,0.15);
            transform: translateY(-2px);
          }
          
          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
          }
          
          @media (max-width: 768px) {
            .price-header {
              flex-direction: column;
              gap: 24px;
              text-align: center;
            }
            
            .price-display {
              text-align: center;
            }
            
            .dashboard-title {
              font-size: 2rem;
            }
            
            .current-price {
              font-size: 2.5rem;
            }
            
            .symbol {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div style={styles.dashboardContainer}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", height: "100vh" }}>
          {/* Dashboard Header with Back Button */}
          <div style={styles.dashboardHeader}>
            <h1 style={styles.dashboardTitle} className="dashboard-title">
              Trading Dashboard - {selectedSymbol}
            </h1>
            <button
              onClick={clearDashboard}
              style={styles.backButton}
              className="back-button"
            >
              ← Back to Search
            </button>
          </div>

          {/* Price Summary */}
          {price && (
            <div style={styles.priceCard}>
              <div style={styles.priceHeader} className="price-header">
                <div style={styles.symbolSection}>
                  <h2 style={styles.symbol} className="symbol">
                    {selectedSymbol}
                  </h2>
                  <span style={styles.liveBadge}>● Live</span>
                </div>
                <div style={styles.priceDisplay} className="price-display">
                  <div style={styles.currentPrice} className="current-price">
                    ${price.current}
                  </div>
                  <div
                    style={{
                      ...styles.priceChange,
                      color: price.change > 0 ? "#22c55e" : "#ef4444",
                    }}
                  >
                    {price.change > 0 ? "+" : ""}
                    {price.change}%
                  </div>
                </div>
              </div>

              <div style={styles.priceMetrics}>
                <div style={styles.metricCard} className="metric-card">
                  <div style={styles.metricLabel}>Open</div>
                  <div style={styles.metricValue}>
                    ${parseFloat(price.open).toFixed(2)}
                  </div>
                </div>
                <div style={styles.metricCard} className="metric-card">
                  <div style={styles.metricLabel}>Close</div>
                  <div style={styles.metricValue}>
                    ${parseFloat(price.close).toFixed(2)}
                  </div>
                </div>
                <div style={styles.metricCard} className="metric-card">
                  <div style={styles.metricLabel}>Range</div>
                  <div style={styles.metricValue}>
                    ${parseFloat(price.low).toFixed(2)} - $
                    {parseFloat(price.high).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chart and Financial Analytics Side by Side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "7fr 5fr",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {/* Chart */}
            <div style={styles.chartCard}>
              <div style={styles.chartHeader}>
                <h2 style={styles.chartTitle}>📊 Live Price Chart</h2>
              </div>
              <div>
                <div ref={containerRef} id="tradingview_widget" />
              </div>
            </div>

            {/* Advanced Financial Analytics */}
            <div style={styles.chartCard}>
              <div style={styles.chartHeader}>
                <h2 style={styles.chartTitle}>
                  📊 Advanced Financial Analytics
                  <span
                    style={{
                      fontSize: "0.8rem",
                      opacity: "0.8",
                      marginLeft: "auto",
                    }}
                  >
                    Powered by TradingView
                  </span>
                </h2>
              </div>
              <div>
                <div id="financials_widget" />
              </div>
            </div>
          </div>

          {/* Sentiment and News Section */}
          <div style={styles.sentimentGrid}>
            {/* Sentiment Panel */}
            <div style={styles.sentimentCard}>
              <h3 style={styles.sentimentTitle}>🧠 Sentiment Analysis</h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "32px",
                }}
              >
                {/* AI Sentiment */}
                <div style={{ textAlign: "center" }}>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      marginBottom: "20px",
                    }}
                  >
                    A.I. Sentiment
                  </h4>

                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginBottom: "16px",
                    }}
                  >
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="6"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="6"
                        strokeDasharray="196 118"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>

                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontWeight: "800",
                        }}
                      >
                        62.5%
                      </div>
                      <div
                        style={{
                          color: "#22c55e",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                        }}
                      >
                        Bullish
                      </div>
                    </div>
                  </div>
                </div>

                {/* News Sentiment */}
                <div style={{ textAlign: "center" }}>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      marginBottom: "20px",
                    }}
                  >
                    News Sentiment
                  </h4>

                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginBottom: "16px",
                    }}
                  >
                    <svg width="120" height="80" viewBox="0 0 120 80">
                      <path
                        d="M 20 70 A 40 40 0 0 1 100 70"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="6"
                      />
                      <path
                        d="M 20 70 A 40 40 0 0 1 100 70"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="6"
                        strokeDasharray="50 76"
                      />
                      <line
                        x1="60"
                        y1="70"
                        x2="75"
                        y2="45"
                        stroke="#22c55e"
                        strokeWidth="3"
                      />
                      <circle cx="60" cy="70" r="3" fill="#22c55e" />
                    </svg>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#22c55e",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      +11.5
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Panel */}
            <div style={styles.newsCard}>
              <div style={styles.newsHeader}>
                <h3 style={styles.newsTitle}>📰 Latest News</h3>
                <div style={styles.newsControls}>
                  <button
                    style={styles.newsButton}
                    className="news-button"
                    onClick={prevNews}
                  >
                    ←
                  </button>
                  <button
                    style={styles.newsButton}
                    className="news-button"
                    onClick={nextNews}
                  >
                    →
                  </button>
                </div>
              </div>

              <div style={styles.newsContent}>
                <h4 style={styles.newsHeadline}>
                  {newsSlider[currentNewsIndex]?.title}
                </h4>

                <div style={styles.newsSource}>
                  📅 Published on {newsSlider[currentNewsIndex]?.time}
                </div>

                <p style={styles.newsSummary}>
                  {newsSlider[currentNewsIndex]?.summary}
                </p>

                <a href="#" style={styles.newsLink}>
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Financial Overview */}
          {overview && (
            <div style={styles.overviewCard}>
              <div style={styles.overviewHeader}>
                <h2 style={styles.overviewTitle}>💼 Financial Overview</h2>
              </div>
              <div style={styles.overviewGrid}>
                <div style={styles.overviewItem} className="overview-item">
                  <div style={styles.overviewIcon}>📈</div>
                  <div style={styles.overviewLabel}>Market Cap</div>
                  <div style={styles.overviewValue}>
                    $
                    {overview.MarketCapitalization
                      ? Number(overview.MarketCapitalization).toLocaleString()
                      : "N/A"}
                  </div>
                </div>

                <div style={styles.overviewItem} className="overview-item">
                  <div style={styles.overviewIcon}>📊</div>
                  <div style={styles.overviewLabel}>P/E Ratio</div>
                  <div style={styles.overviewValue}>
                    {overview.PERatio || "N/A"}
                  </div>
                </div>

                <div style={styles.overviewItem} className="overview-item">
                  <div style={styles.overviewIcon}>📉</div>
                  <div style={styles.overviewLabel}>P/B Ratio</div>
                  <div style={styles.overviewValue}>
                    {overview.PriceToBookRatio || "N/A"}
                  </div>
                </div>

                <div style={styles.overviewItem} className="overview-item">
                  <div style={styles.overviewIcon}>💰</div>
                  <div style={styles.overviewLabel}>P/S Ratio</div>
                  <div style={styles.overviewValue}>
                    {overview.PriceToSalesRatioTTM || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
