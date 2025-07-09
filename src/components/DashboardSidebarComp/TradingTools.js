// // // import React from "react";

// // // function TradingTools() {
// // //   return (
// // //     <div>
// // //         <div className="heatmap-container">
// // //         <iframe
// // //           title="Finviz Heatmap"
// // //           src="https://finviz.com/map.ashx?t=sec"
// // //           className="heatmap-iframe"
// // //           width="100%"
// // //           height="600"
// // //           frameBorder="0"
// // //         ></iframe>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default TradingTools;

// // import React from "react";

// // function TradingTools() {
// //   return (
// //     <div>
// //       <div className="heatmap-container">
// //         <img
// //           src="https://finviz.com/export.ashx?id=map_sec.png"
// //           alt="Finviz Heatmap"
// //           className="heatmap-iframe"
// //           width="100%"
// //           height="600"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default TradingTools;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";

// const symbols = [
//   { label: "Apple (AAPL)", value: "NASDAQ:AAPL" },
//   { label: "EUR/USD", value: "FX_IDC:EURUSD" },
//   { label: "USD/JPY", value: "FX_IDC:USDJPY" },
//   { label: "BTC/USDT", value: "BINANCE:BTCUSDT" },
//   { label: "Tesla (TSLA)", value: "NASDAQ:TSLA" },
// ];

// function useQuerySymbol(defaultSymbol) {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   return queryParams.get("symbol") || defaultSymbol;
// }

// function TradingTools() {
//   const containerRef = useRef(null);
//   const querySymbol = useQuerySymbol("NASDAQ:AAPL");
//   const [selectedSymbol, setSelectedSymbol] = useState(querySymbol);

//   const loadWidget = (symbol) => {
//     if (!window.TradingView) return;

//     new window.TradingView.widget({
//       width: "100%",
//       height: 500,
//       symbol,
//       interval: "D",
//       timezone: "Etc/UTC",
//       theme: "light",
//       style: "1",
//       locale: "en",
//       toolbar_bg: "#f1f3f6",
//       enable_publishing: false,
//       allow_symbol_change: true,
//       container_id: "tradingview_widget",
//     });
//   };

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
//     if (containerRef.current) {
//       containerRef.current.innerHTML = "";
//     }
//     loadWidget(selectedSymbol);
//   }, [selectedSymbol]);

//   return (
//     <div className="space-y-8 px-6 pb-10">
//       {/* 🔘 Symbol Dropdown + TradingView */}
//       <div className="space-y-4">
//         <select
//           value={selectedSymbol}
//           onChange={(e) => setSelectedSymbol(e.target.value)}
//           className="border px-4 py-2 rounded-md"
//         >
//           {symbols.map((s) => (
//             <option key={s.value} value={s.value}>
//               {s.label}
//             </option>
//           ))}
//         </select>

//         <div id="tradingview_widget" ref={containerRef} />
//       </div>
//     </div>
//   );
// }

// export default TradingTools;

"use client";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

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
      });

      setOverview(overview);
      setSentiment({
        score: sentimentData?.overall_sentiment_score || 0,
        label:
          sentimentData?.overall_sentiment_score > 0
            ? "Bullish"
            : sentimentData?.overall_sentiment_score < 0
            ? "Bearish"
            : "Neutral",
      });
      setNewsSentiment(newsData?.feed?.[0]?.overall_sentiment_score ?? 0);
      setLatestNews(newsData?.feed?.[0]);
    };

    fetchData();
  }, [selectedSymbol]);

  return (
    <div className="space-y-8 px-6 pb-10">
      {/* Chart */}
      <div ref={containerRef} id="tradingview_widget" />

      {/* Price + Performance Summary */}
      {price && (
        <div className="bg-black text-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">{selectedSymbol}</h2>
          <p>Current Price: ${price.current}</p>
          <p className={price.change > 0 ? "text-green-400" : "text-red-400"}>
            Change: {price.change}%
          </p>
        </div>
      )}

      {/* Sentiment & News */}
      {sentiment && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded text-white text-center">
            <h3>A.I. Sentiment</h3>
            <p className="text-2xl font-bold">
              {(sentiment.score * 100).toFixed(2)}%
            </p>
            <p className="text-sm">{sentiment.label}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-white text-center">
            <h3>News Sentiment</h3>
            <p className="text-2xl font-bold">
              {(newsSentiment * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      )}

      {/* Latest News */}
      {latestNews && (
        <div className="bg-gray-800 p-4 rounded text-white">
          <h3 className="font-semibold text-lg">Latest News</h3>
          <p className="text-sm text-green-400 mb-1">
            {latestNews.title} – {latestNews.source}
          </p>
          <p className="text-sm">{latestNews.summary}</p>
        </div>
      )}

      {/* Company Financials */}
      {overview && (
        <div className="bg-gray-900 p-4 rounded text-white">
          <h3 className="text-lg font-semibold">Financial Overview</h3>
          <p>
            Market Cap: $
            {Number(overview.MarketCapitalization).toLocaleString()}
          </p>
          <p>P/E Ratio: {overview.PERatio}</p>
          <p>P/B Ratio: {overview.PriceToBookRatio}</p>
          <p>P/S Ratio: {overview.PriceToSalesRatioTTM}</p>
        </div>
      )}
    </div>
  );
}

export default TradingTools;
