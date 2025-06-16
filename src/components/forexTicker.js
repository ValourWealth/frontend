// "use client";

// import { ArrowDownRight, ArrowUpRight } from "lucide-react";
// import React, { useEffect, useState } from "react";

// import "../styles/ticker.css";

// const ForexTicker = () => {
//   const [forexData, setForexData] = useState([]);

//   useEffect(() => {
//     const mockForexData = [
//       {
//         symbol: "EURUSD",
//         value: 1.08289,
//         change: 0.0,
//         changePercent: 0.42,
//         icon: "🇪🇺",
//       },
//       {
//         symbol: "BTCUSD",
//         value: 88540,
//         change: -1378.0,
//         changePercent: -1.53,
//         icon: "₿",
//       },
//       {
//         symbol: "ETHUSD",
//         value: 2191.1,
//         change: -11.4,
//         changePercent: -0.52,
//         icon: "Ξ",
//       },
//       {
//         symbol: "GBPUSD",
//         value: 1.28994,
//         change: 0.0,
//         changePercent: 0.19,
//         icon: "🇬🇧",
//       },
//       {
//         symbol: "USDJPY",
//         value: 149.82,
//         change: 0.25,
//         changePercent: 0.17,
//         icon: "🇯🇵",
//       },
//       {
//         symbol: "AUDUSD",
//         value: 0.6543,
//         change: -0.0021,
//         changePercent: -0.32,
//         icon: "🇦🇺",
//       },
//       {
//         symbol: "USDCAD",
//         value: 1.3642,
//         change: 0.0034,
//         changePercent: 0.25,
//         icon: "🇨🇦",
//       },
//       {
//         symbol: "USDCHF",
//         value: 0.9021,
//         change: -0.0015,
//         changePercent: -0.17,
//         icon: "🇨🇭",
//       },
//     ];

//     const fetchForexData = () => {
//       const updatedData = mockForexData.map((item) => {
//         const fluctuation = (Math.random() - 0.5) * 0.01;
//         const newValue = Number(item.value) + fluctuation * item.value;
//         const change = newValue - item.value;
//         const changePercent = (change / item.value) * 100;

//         return { ...item, value: newValue, change, changePercent };
//       });
//       setForexData(updatedData);
//     };

//     fetchForexData();
//     const intervalId = setInterval(fetchForexData, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const getChangeClass = (change) => {
//     return change > 0
//       ? "text-success"
//       : change < 0
//       ? "text-danger"
//       : "text-secondary";
//   };

//   return (
//     <div className="bg-dark text-white py-2 overflow-hidden">
//       <div className="ticker-wrapper">
//         <div className="d-flex flex-nowrap ticker-container">
//           {[...forexData, ...forexData].map((item, index) => (
//             <React.Fragment key={index}>
//               <span className="d-flex align-items-center mx-3">
//                 <span className="me-1">{item.icon}</span>
//                 <span className="fw-bold me-2">{item.symbol}</span>
//                 <span className="me-2">{item.value.toFixed(5)}</span>
//                 <span
//                   className={`d-flex align-items-center ${getChangeClass(
//                     item.change
//                   )}`}
//                 >
//                   {item.change >= 0 ? (
//                     <>
//                       <ArrowUpRight size={14} className="me-1" /> +
//                       {item.change.toFixed(4)}
//                     </>
//                   ) : (
//                     <>
//                       <ArrowDownRight size={14} className="me-1" />{" "}
//                       {item.change.toFixed(4)}
//                     </>
//                   )}
//                   <span className="ms-1">
//                     ({item.changePercent.toFixed(2)}%)
//                   </span>
//                 </span>
//               </span>
//               {index < forexData.length - 1 && (
//                 <span className="text-muted mx-1">|</span>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ForexTickerDemo() {
//   return (
//     <div className="container-fluid p-0">
//       <ForexTicker />
//     </div>
//   );
// }

// // "use client";

// // import { ArrowDownRight, ArrowUpRight } from "lucide-react";
// // import React, { useEffect, useState } from "react";
// // import "../styles/ticker.css";

// // const symbols = [
// //   { symbol: "BINANCE:BTCUSDT", label: "BTC-USD", icon: "₿" },
// //   { symbol: "BINANCE:ETHUSDT", label: "ETH-USD", icon: "Ξ" },
// //   { symbol: "BINANCE:BNBUSDT", label: "BNB-USD", icon: "🟡" },
// //   { symbol: "BINANCE:DOGEUSDT", label: "DOGE-USD", icon: "🐶" },
// //   { symbol: "BINANCE:XRPUSDT", label: "XRP-USD", icon: "💧" },
// //   { symbol: "BINANCE:ADAUSDT", label: "ADA-USD", icon: "🅰" },
// //   { symbol: "BINANCE:SOLUSDT", label: "SOL-USD", icon: "🌞" },
// //   { symbol: "BINANCE:MATICUSDT", label: "MATIC-USD", icon: "🟣" },
// // ];

// // const API_KEY = "d08gifhr01qh1ecc2v7gd08gifhr01qh1ecc2v80"; // Your actual key

// // const ForexTicker = () => {
// //   const [forexData, setForexData] = useState([]);

// //   const fetchData = async () => {
// //     const results = await Promise.all(
// //       symbols.map(async (item) => {
// //         try {
// //           const res = await fetch(
// //             `https://finnhub.io/api/v1/quote?symbol=${item.symbol}&token=${API_KEY}`
// //           );
// //           const data = await res.json();
// //           const value = data.c;
// //           const prev = data.pc;
// //           const change = value - prev;
// //           const changePercent = ((change / prev) * 100).toFixed(2);

// //           return {
// //             ...item,
// //             value,
// //             change,
// //             changePercent,
// //           };
// //         } catch (err) {
// //           return { ...item, value: null, change: null, changePercent: null };
// //         }
// //       })
// //     );
// //     setForexData(results);
// //   };

// //   useEffect(() => {
// //     fetchData();
// //     const interval = setInterval(fetchData, 10000); // every 10s
// //     return () => clearInterval(interval);
// //   }, []);

// //   const getChangeClass = (change) => {
// //     return change > 0
// //       ? "text-success"
// //       : change < 0
// //       ? "text-danger"
// //       : "text-secondary";
// //   };

// //   return (
// //     <div className="bg-dark text-white py-2 overflow-hidden">
// //       <div className="ticker-wrapper">
// //         <div className="d-flex flex-nowrap ticker-container">
// //           {[...forexData, ...forexData].map((item, index) =>
// //             item.value && item.change !== null ? (
// //               <React.Fragment key={index}>
// //                 <span className="d-flex align-items-center mx-3">
// //                   <span className="me-1">{item.icon}</span>
// //                   <span className="fw-bold me-2">{item.label}</span>
// //                   <span className="me-2">{item.value.toFixed(2)}</span>
// //                   <span
// //                     className={`d-flex align-items-center ${getChangeClass(
// //                       item.change
// //                     )}`}
// //                   >
// //                     {item.change >= 0 ? (
// //                       <>
// //                         <ArrowUpRight size={14} className="me-1" /> +
// //                         {item.change.toFixed(2)}
// //                       </>
// //                     ) : (
// //                       <>
// //                         <ArrowDownRight size={14} className="me-1" />{" "}
// //                         {item.change.toFixed(2)}
// //                       </>
// //                     )}
// //                     <span className="ms-1">({item.changePercent}%)</span>
// //                   </span>
// //                 </span>
// //                 {index < forexData.length - 1 && (
// //                   <span className="text-muted mx-1">|</span>
// //                 )}
// //               </React.Fragment>
// //             ) : null
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default function ForexTickerDemo() {
// //   return (
// //     <div className="container-fluid p-0">
// //       <ForexTicker />
// //     </div>
// //   );
// // }

"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import "../styles/ticker.css";

const symbols = [
  { symbol: "BINANCE:BTCUSDT", label: "BTC-USD", icon: "" },
  { symbol: "BINANCE:ETHUSDT", label: "ETH-USD", icon: "" },
  { symbol: "BINANCE:BNBUSDT", label: "BNB-USD", icon: "" },
  { symbol: "BINANCE:DOGEUSDT", label: "DOGE-USD", icon: "" },
  { symbol: "BINANCE:XRPUSDT", label: "XRP-USD", icon: "" },
  { symbol: "BINANCE:ADAUSDT", label: "ADA-USD", icon: "" },
  { symbol: "BINANCE:SOLUSDT", label: "SOL-USD", icon: "" },
  { symbol: "BINANCE:MATICUSDT", label: "MATIC-USD", icon: "" },
];

const API_KEY = "d08gifhr01qh1ecc2v7gd08gifhr01qh1ecc2v80";

const ForexTicker = () => {
  const [forexData, setForexData] = useState([]);

  const fetchData = async () => {
    const results = await Promise.all(
      symbols.map(async (item) => {
        try {
          const res = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${item.symbol}&token=${API_KEY}`
          );
          const data = await res.json();
          const value = data.c;
          const prev = data.pc;
          const change = value - prev;
          const changePercent = ((change / prev) * 100).toFixed(2);

          return {
            ...item,
            value,
            change,
            changePercent,
          };
        } catch (err) {
          return { ...item, value: null, change: null, changePercent: null };
        }
      })
    );
    setForexData(results);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  const getChangeClass = (change) => {
    return change > 0
      ? "text-success"
      : change < 0
      ? "text-danger"
      : "text-secondary";
  };

  return (
    <div className="bg-dark text-white py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="d-flex flex-nowrap ticker-container">
          {[...forexData, ...forexData].map((item, index) =>
            item.value && item.change !== null ? (
              <React.Fragment key={index}>
                <span className="d-flex align-items-center mx-3">
                  <span className="me-1">{item.icon}</span>
                  <span className="fw-bold me-2">{item.label}</span>
                  <span className="me-2">{item.value.toFixed(2)}</span>
                  <span
                    className={`d-flex align-items-center ${getChangeClass(
                      item.change
                    )}`}
                  >
                    {item.change >= 0 ? (
                      <>
                        <ArrowUpRight size={14} className="me-1" /> +
                        {item.change.toFixed(2)}
                      </>
                    ) : (
                      <>
                        <ArrowDownRight size={14} className="me-1" />{" "}
                        {item.change.toFixed(2)}
                      </>
                    )}
                    <span className="ms-1">({item.changePercent}%)</span>
                  </span>
                </span>
                {index < forexData.length - 1 && (
                  <span className="text-muted mx-1">|</span>
                )}
              </React.Fragment>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default function ForexTickerDemo() {
  return (
    <div className="container-fluid p-0">
      <ForexTicker />
    </div>
  );
}
