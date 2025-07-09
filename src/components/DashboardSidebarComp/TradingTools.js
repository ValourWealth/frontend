// // import React from "react";

// // function TradingTools() {
// //   return (
// //     <div>
// //         <div className="heatmap-container">
// //         <iframe
// //           title="Finviz Heatmap"
// //           src="https://finviz.com/map.ashx?t=sec"
// //           className="heatmap-iframe"
// //           width="100%"
// //           height="600"
// //           frameBorder="0"
// //         ></iframe>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TradingTools;

// import React from "react";

// function TradingTools() {
//   return (
//     <div>
//       <div className="heatmap-container">
//         <img
//           src="https://finviz.com/export.ashx?id=map_sec.png"
//           alt="Finviz Heatmap"
//           className="heatmap-iframe"
//           width="100%"
//           height="600"
//         />
//       </div>
//     </div>
//   );
// }

// export default TradingTools;

"use client";

import { useEffect, useRef, useState } from "react";

const symbols = [
  { label: "Apple (AAPL)", value: "NASDAQ:AAPL" },
  { label: "EUR/USD", value: "FX_IDC:EURUSD" },
  { label: "USD/JPY", value: "FX_IDC:USDJPY" },
  { label: "BTC/USDT", value: "BINANCE:BTCUSDT" },
  { label: "Tesla (TSLA)", value: "NASDAQ:TSLA" },
];

function TradingTools() {
  const [selectedSymbol, setSelectedSymbol] = useState("NASDAQ:AAPL");
  const containerRef = useRef < HTMLDivElement > null;

  const loadWidget = (symbol) => {
    if (!window.TradingView) return;

    new window.TradingView.widget({
      width: "100%",
      height: 500,
      symbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_widget",
    });
  };

  useEffect(() => {
    // Only load script once
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
    // Clear previous chart
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }
    loadWidget(selectedSymbol);
  }, [selectedSymbol]);

  return (
    <div className="space-y-8">
      {/* 🔥 Finviz Heatmap */}
      <div className="heatmap-container">
        <img
          src="https://finviz.com/export.ashx?id=map_sec.png"
          alt="Finviz Heatmap"
          width="100%"
          height="600"
        />
      </div>

      {/* 🔘 Dropdown + Chart */}
      <div className="space-y-4">
        <select
          value={selectedSymbol}
          onChange={(e) => setSelectedSymbol(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          {symbols.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        <div id="tradingview_widget" ref={containerRef} />
      </div>
    </div>
  );
}

export default TradingTools;
