// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";

// const API_KEY = "04RGF1U9PAJ49VYI";

// function useQuerySymbol(defaultSymbol) {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   return queryParams.get("symbol") || defaultSymbol;
// }

// function TradingTools() {
//   const containerRef = useRef(null);
//   const querySymbol = useQuerySymbol("AAPL");
//   const [selectedSymbol, setSelectedSymbol] = useState(querySymbol);
//   const [overview, setOverview] = useState(null);
//   const [price, setPrice] = useState(null);
//   const [sentiment, setSentiment] = useState(null);
//   const [newsSentiment, setNewsSentiment] = useState(null);
//   const [latestNews, setLatestNews] = useState(null);
//   const [newsSlider, setNewsSlider] = useState([]);
//   const [embedUrl, setEmbedUrl] = useState("");
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

//   const loadWidget = (symbol) => {
//     if (!window.TradingView) return;
//     new window.TradingView.widget({
//       width: "100%",
//       height: 500,
//       symbol: `NASDAQ:${symbol}`,
//       interval: "15",
//       timezone: "Etc/UTC",
//       theme: "dark",
//       style: "1",
//       locale: "en",
//       toolbar_bg: "#0e0e0e",
//       enable_publishing: false,
//       allow_symbol_change: false,
//       container_id: "tradingview_widget",
//     });
//   };

//   useEffect(() => {
//     const container = document.getElementById("financials_widget");
//     if (!container) return;

//     container.innerHTML = ""; // Clear previous widget

//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       symbol: `NASDAQ:${selectedSymbol}`,
//       colorTheme: "dark",
//       isTransparent: false,
//       largeChartUrl: "",
//       displayMode: "regular",
//       width: "100%",
//       height: 600,
//     });

//     container.appendChild(script);
//   }, [selectedSymbol]);

//   useEffect(() => {
//     if (
//       !document.querySelector("script[src='https://s3.tradingview.com/tv.js']")
//     ) {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/tv.js";
//       script.async = true;
//       script.onload = () => loadWidget(selectedSymbol);
//       document.body.appendChild(script);
//     } else {
//       loadWidget(selectedSymbol);
//     }
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) containerRef.current.innerHTML = "";
//     loadWidget(selectedSymbol);
//   }, [selectedSymbol]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [overviewRes, priceRes, sentimentRes, newsRes] = await Promise.all([
//         fetch(
//           `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${selectedSymbol}&apikey=${API_KEY}`
//         ),
//         fetch(
//           `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedSymbol}&interval=15min&apikey=${API_KEY}`
//         ),
//         fetch(
//           `https://www.alphavantage.co/query?function=SENTIMENT_ANALYSIS&symbol=${selectedSymbol}&apikey=${API_KEY}`
//         ),
//         fetch(
//           `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${selectedSymbol}&apikey=${API_KEY}`
//         ),
//       ]);

//       const overview = await overviewRes.json();
//       const priceData = await priceRes.json();
//       const sentimentData = await sentimentRes.json();
//       const newsData = await newsRes.json();

//       const ts = priceData["Time Series (15min)"];
//       const latest = ts ? ts[Object.keys(ts)[0]] : null;
//       const prev = ts ? ts[Object.keys(ts)[1]] : null;

//       const current = latest ? parseFloat(latest["4. close"]) : null;
//       const previous = prev ? parseFloat(prev["4. close"]) : current;
//       const change = ((current - previous) / previous) * 100;

//       setPrice({
//         current: current?.toFixed(2),
//         change: change?.toFixed(2),
//         open: latest?.["1. open"],
//         high: latest?.["2. high"],
//         low: latest?.["3. low"],
//         close: latest?.["4. close"],
//       });

//       setOverview(overview);
//       setSentiment({
//         score: sentimentData?.overall_sentiment_score || 0.625,
//         label: "Bullish",
//       });
//       setNewsSentiment(newsData?.feed?.[0]?.overall_sentiment_score ?? 0.115);
//       setLatestNews(newsData?.feed?.[0]);

//       // Enhanced news data
//       const sampleNews = [
//         {
//           title: "S&P 500 Bulls Remain in Control, but for How Long?",
//           summary:
//             "The S&P 500 continues its bullish rally driven by AI euphoria, potential tariff delays, and anticipation of Federal Reserve rate cuts. Market momentum remains strong, but potential risks include trade tensions and upcoming economic data releases.",
//           source: "MarketWatch",
//           time: "Jul 10th 2025",
//         },
//         {
//           title: "Tesla Stock Surges 8% on Robotaxi Breakthrough Announcement",
//           summary:
//             "Tesla shares jumped after the company announced a major breakthrough in autonomous driving technology, bringing its robotaxi service closer to commercial deployment.",
//           source: "Bloomberg",
//           time: "Jul 10th 2025",
//         },
//         {
//           title:
//             "Fed Officials Signal Dovish Stance Ahead of September Meeting",
//           summary:
//             "Federal Reserve officials indicated a more accommodative monetary policy stance, raising expectations for potential rate cuts in the upcoming September FOMC meeting.",
//           source: "Reuters",
//           time: "Jul 10th 2025",
//         },
//         {
//           title: "AI Chip Demand Drives Semiconductor Rally Across Markets",
//           summary:
//             "Semiconductor stocks continue their upward trajectory as artificial intelligence chip demand reaches unprecedented levels, benefiting major players in the industry.",
//           source: "TechCrunch",
//           time: "Jul 10th 2025",
//         },
//       ];
//       setNewsSlider(sampleNews);
//     };
//     setEmbedUrl(
//       `https://www.tradingview.com/symbols/NASDAQ-${selectedSymbol}/financials-overview/?utm_campaign=financials&utm_medium=widget&utm_source=dashboard.tradealgo.com`
//     );

//     fetchData();
//   }, [selectedSymbol]);

//   const nextNews = () => {
//     setCurrentNewsIndex((prev) => (prev + 1) % newsSlider.length);
//   };

//   const prevNews = () => {
//     setCurrentNewsIndex(
//       (prev) => (prev - 1 + newsSlider.length) % newsSlider.length
//     );
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         padding: "20px 0",
//       }}
//     >
//       <div className="container">
//         {/* Header */}
//         <div className="text-center mb-4">
//           <h1 className="h2 fw-bold text-dark">Today market insights</h1>
//           <p className="text-muted">
//             Real-time market analysis for {selectedSymbol}
//           </p>
//         </div>

//         {/* Price Summary */}
//         {price && (
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <div className="row align-items-center">
//                 <div className="col-md-2">
//                   <div className="d-flex align-items-center">
//                     <h3 className="fw-bold mb-0 me-3">{selectedSymbol}</h3>
//                     <span className="badge bg-success px-2 py-1">Live</span>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="row text-center">
//                     <div className="col">
//                       <small className="text-muted d-block">Open</small>
//                       <div className="fw-bold">
//                         ${parseFloat(price.open).toFixed(2)}
//                       </div>
//                     </div>
//                     <div className="col">
//                       <small className="text-muted d-block">Close</small>
//                       <div className="fw-bold">
//                         ${parseFloat(price.close).toFixed(2)}
//                       </div>
//                     </div>
//                     <div className="col">
//                       <small className="text-muted d-block">Range</small>
//                       <div className="fw-bold">
//                         ${parseFloat(price.low).toFixed(2)} - $
//                         {parseFloat(price.high).toFixed(2)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-4 text-end">
//                   <h1 className="display-5 fw-bold mb-1">${price.current}</h1>
//                   <div
//                     className={`h5 fw-bold ${
//                       price.change > 0 ? "text-success" : "text-danger"
//                     }`}
//                   >
//                     {price.change > 0 ? "+" : ""}
//                     {price.change}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Chart */}
//         <div className="card mb-4 shadow-sm">
//           <div className="card-header bg-dark text-white py-3">
//             {/* <h5 className="mb-0 fw-bold">L</h5> */}
//           </div>
//           <div className="card-body p-0">
//             <div ref={containerRef} id="tradingview_widget" />
//           </div>
//         </div>

//         {/* Sentiment and News Section */}
//         <div className="row mb-4">
//           {/* Sentiment Panel */}
//           <div className="col-lg-6">
//             <div
//               className="card shadow-sm h-100"
//               style={{ backgroundColor: "#1f2937", border: "none" }}
//             >
//               <div className="card-body p-4">
//                 <div className="d-flex align-items-center mb-4">
//                   <h5 className="text-white fw-bold mb-0 me-2">Sentiment</h5>
//                   <i className="fas fa-info-circle text-muted"></i>
//                 </div>

//                 <div className="row">
//                   {/* AI Sentiment */}
//                   <div className="col-6">
//                     <div className="text-center">
//                       <h6 className="text-white mb-3">A.I. Sentiment</h6>

//                       {/* Time Period Selector */}
//                       <div className="mb-3">
//                         <div className="d-flex flex-column align-items-start text-start">
//                           <div className="text-success mb-1 small fw-bold">
//                             1 Hour
//                           </div>
//                           <div className="text-muted mb-1 small">4 Hour</div>
//                           <div className="text-muted small">1 Day</div>
//                         </div>
//                       </div>

//                       {/* Circular Gauge */}
//                       <div className="position-relative d-inline-block mb-3">
//                         <svg width="140" height="140" viewBox="0 0 140 140">
//                           {/* Background Circle */}
//                           <circle
//                             cx="70"
//                             cy="70"
//                             r="60"
//                             fill="none"
//                             stroke="#374151"
//                             strokeWidth="8"
//                           />
//                           {/* Red portion (bearish) */}
//                           <circle
//                             cx="70"
//                             cy="70"
//                             r="60"
//                             fill="none"
//                             stroke="#ef4444"
//                             strokeWidth="8"
//                             strokeDasharray="141.37 235.62"
//                             strokeLinecap="round"
//                             transform="rotate(-90 70 70)"
//                           />
//                           {/* Green portion (bullish) */}
//                           <circle
//                             cx="70"
//                             cy="70"
//                             r="60"
//                             fill="none"
//                             stroke="#22c55e"
//                             strokeWidth="8"
//                             strokeDasharray="235.62 141.37"
//                             strokeLinecap="round"
//                             transform="rotate(45 70 70)"
//                           />
//                         </svg>

//                         {/* Center Content */}
//                         <div className="position-absolute top-50 start-50 translate-middle text-center">
//                           <div
//                             className="text-white fw-bold mb-1"
//                             style={{ fontSize: "0.9rem" }}
//                           >
//                             Sentiment
//                           </div>
//                           <div
//                             className="text-white fw-bold"
//                             style={{ fontSize: "1.5rem" }}
//                           >
//                             62.5%
//                           </div>
//                           <div
//                             className="text-success fw-bold"
//                             style={{ fontSize: "0.9rem" }}
//                           >
//                             Bullish
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* News Sentiment */}
//                   <div className="col-6">
//                     <div className="text-center">
//                       <h6 className="text-white mb-4">News Sentiment</h6>

//                       {/* Speedometer Style Gauge */}
//                       <div className="position-relative d-inline-block mb-3">
//                         <svg width="140" height="100" viewBox="0 0 140 100">
//                           {/* Background Arc */}
//                           <path
//                             d="M 20 80 A 50 50 0 0 1 120 80"
//                             fill="none"
//                             stroke="#374151"
//                             strokeWidth="8"
//                           />
//                           {/* Colored Arc - from red to yellow to green */}
//                           <path
//                             d="M 20 80 A 50 50 0 0 1 70 30"
//                             fill="none"
//                             stroke="#ef4444"
//                             strokeWidth="8"
//                           />
//                           <path
//                             d="M 70 30 A 50 50 0 0 1 120 80"
//                             fill="none"
//                             stroke="#22c55e"
//                             strokeWidth="8"
//                           />

//                           {/* Needle */}
//                           <line
//                             x1="70"
//                             y1="80"
//                             x2="85"
//                             y2="50"
//                             stroke="#22c55e"
//                             strokeWidth="3"
//                             strokeLinecap="round"
//                           />
//                           <circle cx="70" cy="80" r="4" fill="#22c55e" />

//                           {/* Labels */}
//                           <text
//                             x="20"
//                             y="95"
//                             fill="#6b7280"
//                             fontSize="10"
//                             textAnchor="middle"
//                           >
//                             -100
//                           </text>
//                           <text
//                             x="120"
//                             y="95"
//                             fill="#6b7280"
//                             fontSize="10"
//                             textAnchor="middle"
//                           >
//                             +100
//                           </text>
//                         </svg>

//                         {/* Center Score */}
//                         <div
//                           className="position-absolute"
//                           style={{
//                             bottom: "10px",
//                             left: "50%",
//                             transform: "translateX(-50%)",
//                           }}
//                         >
//                           <div className="text-center">
//                             <div className="text-muted small">
//                               Sentiment Score
//                             </div>
//                             <div className="bg-success text-white px-2 py-1 rounded small fw-bold">
//                               +11.5
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* News Panel */}
//           <div className="col-lg-6">
//             <div
//               className="card shadow-sm h-100"
//               style={{ backgroundColor: "#1f2937", border: "none" }}
//             >
//               <div className="card-body p-4">
//                 <div className="d-flex align-items-center justify-content-between mb-4">
//                   <h5 className="text-white fw-bold mb-0">Latest News</h5>
//                   <div className="d-flex align-items-center">
//                     <button
//                       className="btn btn-sm me-2 d-flex align-items-center justify-content-center"
//                       onClick={prevNews}
//                       style={{
//                         width: "35px",
//                         height: "35px",
//                         backgroundColor: "#22c55e",
//                         border: "none",
//                         borderRadius: "50%",
//                       }}
//                     >
//                       <i className="fas fa-chevron-left text-white"></i>
//                     </button>
//                     <button
//                       className="btn btn-sm d-flex align-items-center justify-content-center"
//                       onClick={nextNews}
//                       style={{
//                         width: "35px",
//                         height: "35px",
//                         backgroundColor: "#22c55e",
//                         border: "none",
//                         borderRadius: "50%",
//                       }}
//                     >
//                       <i className="fas fa-chevron-right text-white"></i>
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <h6 className="text-white fw-bold mb-3 lh-base">
//                     {newsSlider[currentNewsIndex]?.title}
//                   </h6>

//                   <div className="mb-3">
//                     <span className="text-success small fw-bold">
//                       Published on {newsSlider[currentNewsIndex]?.time}
//                     </span>
//                   </div>

//                   <p
//                     className="text-light mb-4 lh-lg"
//                     style={{ fontSize: "0.9rem" }}
//                   >
//                     {newsSlider[currentNewsIndex]?.summary}
//                   </p>

//                   <a
//                     href="#"
//                     className="text-success text-decoration-none fw-bold small"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Financial Overview */}
//         {overview && (
//           <div className="card mb-4 shadow-sm">
//             <div className="card-header bg-warning text-dark py-3">
//               <h5 className="mb-0 fw-bold">Financial Overview</h5>
//             </div>
//             <div
//               className="card-body p-4"
//               style={{ backgroundColor: "#fefefe" }}
//             >
//               <div className="row g-4">
//                 <div className="col-lg-6 col-md-12">
//                   <div className="row g-3">
//                     <div className="col-6">
//                       <div className="bg-light border rounded p-4 text-center h-100">
//                         <div className="text-primary mb-2">
//                           <i className="fas fa-chart-line fs-2"></i>
//                         </div>
//                         <small className="text-muted d-block fw-semibold">
//                           Market Cap
//                         </small>
//                         <h5 className="fw-bold text-dark mb-0 mt-2">
//                           $
//                           {Number(
//                             overview.MarketCapitalization
//                           ).toLocaleString()}
//                         </h5>
//                       </div>
//                     </div>
//                     <div className="col-6">
//                       <div className="bg-light border rounded p-4 text-center h-100">
//                         <div className="text-success mb-2">
//                           <i className="fas fa-percentage fs-2"></i>
//                         </div>
//                         <small className="text-muted d-block fw-semibold">
//                           P/E Ratio
//                         </small>
//                         <h5 className="fw-bold text-dark mb-0 mt-2">
//                           {overview.PERatio || "None"}
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-12">
//                   <div className="row g-3">
//                     <div className="col-6">
//                       <div className="bg-light border rounded p-4 text-center h-100">
//                         <div className="text-info mb-2">
//                           <i className="fas fa-chart-pie fs-2"></i>
//                         </div>
//                         <small className="text-muted d-block fw-semibold">
//                           P/B Ratio
//                         </small>
//                         <h5 className="fw-bold text-dark mb-0 mt-2">
//                           {overview.PriceToBookRatio || "41.88"}
//                         </h5>
//                       </div>
//                     </div>
//                     <div className="col-6">
//                       <div className="bg-light border rounded p-4 text-center h-100">
//                         <div className="text-warning mb-2">
//                           <i className="fas fa-calculator fs-2"></i>
//                         </div>
//                         <small className="text-muted d-block fw-semibold">
//                           P/S Ratio
//                         </small>
//                         <h5 className="fw-bold text-dark mb-0 mt-2">
//                           {overview.PriceToSalesRatioTTM || "38.76"}
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TradingView Financials */}
//         {selectedSymbol && (
//           <div className="card shadow-sm">
//             <div className="card-header bg-dark text-white py-3">
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0 fw-bold">Advanced Financial Analytics</h5>
//                 <small className="opacity-75">
//                   Powered by ValourTradingView
//                 </small>
//               </div>
//             </div>
//             <div className="card-body p-0">
//               <div id="financials_widget" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TradingTools;

"use client";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsBg from "../../assets/images/news-bg.jpg";
import sentimentBg from "../../assets/images/sentiment-bg.jpg";

const API_KEY = "04RGF1U9PAJ49VYI";

function useQuerySymbol(defaultSymbol) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get("symbol") || defaultSymbol;
}

function TradingTools() {
  const containerRef = useRef(null);
  const querySymbol = useQuerySymbol("AAPL");
  const [selectedSymbol, setSelectedSymbol] = useState(querySymbol);
  const [overview, setOverview] = useState(null);
  const [price, setPrice] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [newsSentiment, setNewsSentiment] = useState(null);
  const [latestNews, setLatestNews] = useState(null);
  const [newsSlider, setNewsSlider] = useState([]);
  const [embedUrl, setEmbedUrl] = useState("");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

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
  }, []);

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = "";
    loadWidget(selectedSymbol);
  }, [selectedSymbol]);

  useEffect(() => {
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
    container: {
      background: "#0000",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    headerTitle: {
      fontSize: "3rem",
      fontWeight: "800",
      color: "white",
      marginBottom: "0.5rem",
      textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
    headerSubtitle: {
      fontSize: "1.2rem",
      color: "rgba(255,255,255,0.9)",
      fontWeight: "500",
    },
    priceCard: {
      backgroundImage: `
    linear-gradient(rgb(45 45 45 / 60%), rgb(7 4 4 / 60%))
  `,
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
      // background: 'white',
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
      backgroundImage: `
    linear-gradient(rgba(3, 31, 15, 0.2), rgba(55, 65, 81, 0.85)),
    url(${sentimentBg})
  `,
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
      backgroundImage: `
    linear-gradient(rgba(3, 31, 15, 0.2), rgba(55, 65, 81, 0.85)),
    url(${NewsBg})
  `,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff", // for contrast
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
          
          @media (max-width: 768px) {
            .price-header {
              flex-direction: column;
              gap: 24px;
              text-align: center;
            }
            
            .price-display {
              text-align: center;
            }
            
            .header-title {
              font-size: 2.5rem;
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

      <div style={styles.container}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.headerTitle} className="header-title">
              Trading Dashboard
            </h1>
            <p style={styles.headerSubtitle}>
              Real-time market analysis for {selectedSymbol}
            </p>
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
            {selectedSymbol && (
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
            )}
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

export default TradingTools;
