// import { useEffect, useState } from "react";

// const ExtraContent = () => {
//   const [stockData, setStockData] = useState({});
//   const [forexData, setForexData] = useState({});
//   const [cryptoData, setCryptoData] = useState({});
//   const [newsData, setNewsData] = useState([]);
//   const [topGainersLosers, setTopGainersLosers] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_KEY = "04RGF1U9PAJ49VYI";
//   const BASE_URL = "https://www.alphavantage.co/query";

//   // Fetch Stock Data
//   const fetchStockData = async () => {
//     try {
//       const symbols = ["AAPL", "GOOGL", "MSFT", "TSLA"];
//       const stockPromises = symbols.map(async (symbol) => {
//         const response = await fetch(
//           `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
//         );
//         const data = await response.json();
//         return { symbol, data: data["Global Quote"] };
//       });

//       const results = await Promise.all(stockPromises);
//       const stockObj = {};
//       results.forEach(({ symbol, data }) => {
//         stockObj[symbol] = data;
//       });
//       setStockData(stockObj);
//     } catch (err) {
//       console.error("Error fetching stock data:", err);
//     }
//   };

//   // Fetch Forex Data
//   const fetchForexData = async () => {
//     try {
//       const pairs = ["EURUSD", "GBPUSD", "USDJPY"];
//       const forexPromises = pairs.map(async (pair) => {
//         const response = await fetch(
//           `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair.slice(
//             0,
//             3
//           )}&to_currency=${pair.slice(3)}&apikey=${API_KEY}`
//         );
//         const data = await response.json();
//         return { pair, data: data["Realtime Currency Exchange Rate"] };
//       });

//       const results = await Promise.all(forexPromises);
//       const forexObj = {};
//       results.forEach(({ pair, data }) => {
//         forexObj[pair] = data;
//       });
//       setForexData(forexObj);
//     } catch (err) {
//       console.error("Error fetching forex data:", err);
//     }
//   };

//   // Fetch Crypto Data
//   const fetchCryptoData = async () => {
//     try {
//       const cryptos = ["BTC", "ETH", "ADA"];
//       const cryptoPromises = cryptos.map(async (crypto) => {
//         const response = await fetch(
//           `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto}&to_currency=USD&apikey=${API_KEY}`
//         );
//         const data = await response.json();
//         return { crypto, data: data["Realtime Currency Exchange Rate"] };
//       });

//       const results = await Promise.all(cryptoPromises);
//       const cryptoObj = {};
//       results.forEach(({ crypto, data }) => {
//         cryptoObj[crypto] = data;
//       });
//       setCryptoData(cryptoObj);
//     } catch (err) {
//       console.error("Error fetching crypto data:", err);
//     }
//   };

//   // Fetch News Data
//   const fetchNewsData = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}?function=NEWS_SENTIMENT&tickers=AAPL,GOOGL,MSFT&apikey=${API_KEY}`
//       );
//       const data = await response.json();
//       setNewsData(data.feed?.slice(0, 6) || []);
//     } catch (err) {
//       console.error("Error fetching news data:", err);
//     }
//   };

//   // Fetch Top Gainers/Losers
//   const fetchTopGainersLosers = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
//       );
//       const data = await response.json();
//       setTopGainersLosers(data);
//     } catch (err) {
//       console.error("Error fetching gainers/losers data:", err);
//     }
//   };

//   useEffect(() => {
//     const fetchAllData = async () => {
//       setLoading(true);
//       try {
//         await Promise.all([
//           fetchStockData(),
//           fetchForexData(),
//           fetchCryptoData(),
//           fetchNewsData(),
//           fetchTopGainersLosers(),
//         ]);
//       } catch (err) {
//         setError("Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//     const interval = setInterval(fetchAllData, 60000); // Refresh every minute
//     return () => clearInterval(interval);
//   }, []);

//   const formatPrice = (price) => {
//     return parseFloat(price).toFixed(4);
//   };

//   const formatChange = (change, changePercent) => {
//     const isPositive = parseFloat(change) >= 0;
//     return (
//       <span className={`change ${isPositive ? "positive" : "negative"}`}>
//         {isPositive ? "+" : ""}
//         {formatPrice(change)} ({changePercent})
//       </span>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="dashboard-container">
//         <div className="container-fluid">
//           {/* Stock Quotes Shimmer */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="card market-card mb-0">
//                 <div className="card-header mb-0">
//                   <div
//                     className="shimmer-block"
//                     style={{
//                       height: "24px",
//                       width: "200px",
//                       borderRadius: "6px",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="card-body">
//                   <div className="row">
//                     {[...Array(4)].map((_, index) => (
//                       <div key={index} className="col-md-6 col-lg-3 mb-3">
//                         <div className="quote-card">
//                           <div className="quote-header">
//                             <div
//                               className="shimmer-block mb-2"
//                               style={{
//                                 height: "20px",
//                                 width: "60px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                             <div
//                               className="shimmer-block mb-2"
//                               style={{
//                                 height: "24px",
//                                 width: "100px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                           </div>
//                           <div className="quote-details">
//                             <div
//                               className="shimmer-block mb-2"
//                               style={{
//                                 height: "18px",
//                                 width: "80px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                             <div className="quote-info">
//                               <div
//                                 className="shimmer-block mb-1"
//                                 style={{
//                                   height: "14px",
//                                   width: "70px",
//                                   borderRadius: "4px",
//                                 }}
//                               ></div>
//                               <div
//                                 className="shimmer-block"
//                                 style={{
//                                   height: "14px",
//                                   width: "65px",
//                                   borderRadius: "4px",
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Forex Section Shimmer */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="card market-card">
//                 <div className="card-header mb-0">
//                   <div
//                     className="shimmer-block"
//                     style={{
//                       height: "24px",
//                       width: "250px",
//                       borderRadius: "6px",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="card-body">
//                   <div className="row">
//                     {[...Array(3)].map((_, index) => (
//                       <div key={index} className="col-md-4 mb-3">
//                         <div className="quote-card">
//                           <div className="forex-pair">
//                             <div
//                               className="shimmer-block mb-2"
//                               style={{
//                                 height: "20px",
//                                 width: "80px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                             <div
//                               className="shimmer-block mb-2"
//                               style={{
//                                 height: "24px",
//                                 width: "100px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                           </div>
//                           <div className="forex-time">
//                             <div
//                               className="shimmer-block"
//                               style={{
//                                 height: "14px",
//                                 width: "150px",
//                                 borderRadius: "4px",
//                               }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Top Gainers/Losers Shimmer */}
//           <div className="row mb-4">
//             <div className="col-md-6 mb-3">
//               <div className="card market-card">
//                 <div className="card-header mb-0">
//                   <div
//                     className="shimmer-block"
//                     style={{
//                       height: "24px",
//                       width: "150px",
//                       borderRadius: "6px",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="card-body">
//                   {[...Array(5)].map((_, index) => (
//                     <div key={index} className="gainer-item mb-2">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div
//                           className="shimmer-block"
//                           style={{
//                             height: "18px",
//                             width: "60px",
//                             borderRadius: "4px",
//                           }}
//                         ></div>
//                         <div className="text-end">
//                           <div
//                             className="shimmer-block mb-1"
//                             style={{
//                               height: "18px",
//                               width: "80px",
//                               borderRadius: "4px",
//                             }}
//                           ></div>
//                           <div
//                             className="shimmer-block"
//                             style={{
//                               height: "14px",
//                               width: "50px",
//                               borderRadius: "4px",
//                             }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 mb-3">
//               <div className="card market-card">
//                 <div className="card-header mb-0">
//                   <div
//                     className="shimmer-block"
//                     style={{
//                       height: "24px",
//                       width: "140px",
//                       borderRadius: "6px",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="card-body">
//                   {[...Array(5)].map((_, index) => (
//                     <div key={index} className="loser-item mb-2">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div
//                           className="shimmer-block"
//                           style={{
//                             height: "18px",
//                             width: "60px",
//                             borderRadius: "4px",
//                           }}
//                         ></div>
//                         <div className="text-end">
//                           <div
//                             className="shimmer-block mb-1"
//                             style={{
//                               height: "18px",
//                               width: "80px",
//                               borderRadius: "4px",
//                             }}
//                           ></div>
//                           <div
//                             className="shimmer-block"
//                             style={{
//                               height: "14px",
//                               width: "50px",
//                               borderRadius: "4px",
//                             }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="container-fluid">
//         {/* Stock Quotes Section */}
//         <div className="row mb-4">
//           <div className="col-12">
//             <div className="card market-card mb-0">
//               <div className="card-header mb-0">
//                 <h5 className="card-title mb-0">
//                   <i className="fas fa-stock-chart me-2"></i>
//                   Live Stock Quotes
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   {Object.entries(stockData).map(([symbol, data]) => (
//                     <div key={symbol} className="col-md-6 col-lg-3 mb-3">
//                       <div className="quote-card">
//                         <div className="quote-header">
//                           <h6 className="quote-symbol">{symbol}</h6>
//                           <span className="quote-price">
//                             ${data ? formatPrice(data["05. price"]) : "N/A"}
//                           </span>
//                         </div>
//                         <div className="quote-details">
//                           {data && (
//                             <>
//                               <div className="quote-change">
//                                 {formatChange(
//                                   data["09. change"],
//                                   data["10. change percent"]
//                                 )}
//                               </div>
//                               <div className="quote-info">
//                                 <small>
//                                   High: ${formatPrice(data["03. high"])}
//                                 </small>
//                                 <small>
//                                   Low: ${formatPrice(data["04. low"])}
//                                 </small>
//                               </div>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Forex Section */}
//         <div className="row mb-4">
//           <div className="col-12">
//             <div className="card market-card">
//               <div className="card-header mb-0">
//                 <h5 className="card-title mb-0">
//                   <i className="fas fa-exchange-alt me-2"></i>
//                   Forex Exchange Rates
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   {Object.entries(forexData).map(([pair, data]) => (
//                     <div key={pair} className="col-md-4 mb-3">
//                       <div className="quote-card">
//                         <div className="forex-pair">
//                           <h6>
//                             {pair.slice(0, 3)}/{pair.slice(3)}
//                           </h6>
//                           <span className="forex-rate">
//                             {data
//                               ? formatPrice(data["5. Exchange Rate"])
//                               : "N/A"}
//                           </span>
//                         </div>
//                         {data && (
//                           <div className="forex-time">
//                             <small>
//                               Last Updated:{" "}
//                               {new Date(
//                                 data["6. Last Refreshed"]
//                               ).toLocaleTimeString()}
//                             </small>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Top Gainers/Losers Section */}
//         <div className="row mb-4">
//           <div className="col-md-6 mb-3">
//             <div className="card market-card">
//               <div className="card-body">
//                 {topGainersLosers.top_gainers
//                   ?.slice(0, 5)
//                   .map((stock, index) => (
//                     <div key={index} className="gainer-item mb-2">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <span className="stock-symbol">{stock.ticker}</span>
//                         <div className="text-end">
//                           <div className="stock-price">
//                             ${formatPrice(stock.price)}
//                           </div>
//                           <div className="text-success small">
//                             +{stock.change_percentage}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 mb-3">
//             <div className="card market-card">
//               <div className="card-body">
//                 {topGainersLosers.top_losers
//                   ?.slice(0, 5)
//                   .map((stock, index) => (
//                     <div key={index} className="loser-item mb-2">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <span className="stock-symbol">{stock.ticker}</span>
//                         <div className="text-end">
//                           <div className="stock-price">
//                             ${formatPrice(stock.price)}
//                           </div>
//                           <div className="text-danger small">
//                             {stock.change_percentage}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExtraContent;

import { useEffect, useState } from "react";
import TopGainersLosers from "./TopGainersLosers";

const ExtraContent = () => {
  const [stockData, setStockData] = useState({});
  const [forexData, setForexData] = useState({});
  const [cryptoData, setCryptoData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [topGainersLosers, setTopGainersLosers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "04RGF1U9PAJ49VYI";
  const BASE_URL = "https://www.alphavantage.co/query";

  const currencyOptions = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"];
  const [selectedFrom, setSelectedFrom] = useState("USD");
  const [selectedTo, setSelectedTo] = useState("EUR");
  const [selectedRate, setSelectedRate] = useState(null);

  useEffect(() => {
    const fetchSelectedRate = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${selectedFrom}&to_currency=${selectedTo}&apikey=${API_KEY}`
        );
        const data = await res.json();
        setSelectedRate(data["Realtime Currency Exchange Rate"]);
      } catch (err) {
        console.error("Error fetching selected forex rate:", err);
      }
    };

    if (selectedFrom && selectedTo && selectedFrom !== selectedTo) {
      fetchSelectedRate();
    }
  }, [selectedFrom, selectedTo]);

  // Fetch Stock Data
  const fetchStockData = async () => {
    try {
      const symbols = ["AAPL", "GOOGL", "MSFT", "TSLA"];
      const stockPromises = symbols.map(async (symbol) => {
        const response = await fetch(
          `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();
        return { symbol, data: data["Global Quote"] };
      });

      const results = await Promise.all(stockPromises);
      const stockObj = {};
      results.forEach(({ symbol, data }) => {
        stockObj[symbol] = data;
      });
      setStockData(stockObj);
    } catch (err) {
      console.error("Error fetching stock data:", err);
    }
  };

  // Fetch Forex Data
  // const fetchForexData = async () => {
  //   try {
  //     const pairs = ["EURUSD", "GBPUSD", "USDJPY"];
  //     const forexPromises = pairs.map(async (pair) => {
  //       const response = await fetch(
  //         `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair.slice(
  //           0,
  //           3
  //         )}&to_currency=${pair.slice(3)}&apikey=${API_KEY}`
  //       );
  //       const data = await response.json();
  //       return { pair, data: data["Realtime Currency Exchange Rate"] };
  //     });

  //     const results = await Promise.all(forexPromises);
  //     const forexObj = {};
  //     results.forEach(({ pair, data }) => {
  //       forexObj[pair] = data;
  //     });
  //     setForexData(forexObj);
  //   } catch (err) {
  //     console.error("Error fetching forex data:", err);
  //   }
  // };

  const fetchForexData = async () => {
    try {
      const defaultBase = "USD";
      const pairs = currencyOptions
        .filter((currency) => currency !== defaultBase)
        .map((currency) => defaultBase + currency); // e.g., USDJPY, USDEUR

      const forexPromises = pairs.map(async (pair) => {
        const response = await fetch(
          `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair.slice(
            0,
            3
          )}&to_currency=${pair.slice(3)}&apikey=${API_KEY}`
        );
        const data = await response.json();
        return { pair, data: data["Realtime Currency Exchange Rate"] };
      });

      const results = await Promise.all(forexPromises);
      const forexObj = {};
      results.forEach(({ pair, data }) => {
        forexObj[pair] = data;
      });
      setForexData(forexObj);
    } catch (err) {
      console.error("Error fetching forex data:", err);
    }
  };

  // Fetch Crypto Data
  const fetchCryptoData = async () => {
    try {
      const cryptos = ["BTC", "ETH", "ADA"];
      const cryptoPromises = cryptos.map(async (crypto) => {
        const response = await fetch(
          `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto}&to_currency=USD&apikey=${API_KEY}`
        );
        const data = await response.json();
        return { crypto, data: data["Realtime Currency Exchange Rate"] };
      });

      const results = await Promise.all(cryptoPromises);
      const cryptoObj = {};
      results.forEach(({ crypto, data }) => {
        cryptoObj[crypto] = data;
      });
      setCryptoData(cryptoObj);
    } catch (err) {
      console.error("Error fetching crypto data:", err);
    }
  };

  // Fetch News Data
  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}?function=NEWS_SENTIMENT&tickers=AAPL,GOOGL,MSFT&apikey=${API_KEY}`
      );
      const data = await response.json();
      setNewsData(data.feed?.slice(0, 6) || []);
    } catch (err) {
      console.error("Error fetching news data:", err);
    }
  };

  // Fetch Top Gainers/Losers
  const fetchTopGainersLosers = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
      );
      const data = await response.json();
      setTopGainersLosers(data);
    } catch (err) {
      console.error("Error fetching gainers/losers data:", err);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchStockData(),
          fetchForexData(),
          fetchCryptoData(),
          fetchNewsData(),
          fetchTopGainersLosers(),
        ]);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
    const interval = setInterval(fetchAllData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(4);
  };

  const formatChange = (change, changePercent) => {
    const isPositive = parseFloat(change) >= 0;
    return (
      <span className={`change ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? "+" : ""}
        {formatPrice(change)} ({changePercent})
      </span>
    );
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="container-fluid">
          {/* Stock Quotes Shimmer */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card market-card mb-0">
                <div className="card-header mb-0">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "24px",
                      width: "200px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>
                <div className="card-body">
                  <div className="row">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="col-md-6 col-lg-3 mb-3">
                        <div className="quote-card">
                          <div className="quote-header">
                            <div
                              className="shimmer-block mb-2"
                              style={{
                                height: "20px",
                                width: "60px",
                                borderRadius: "4px",
                              }}
                            ></div>
                            <div
                              className="shimmer-block mb-2"
                              style={{
                                height: "24px",
                                width: "100px",
                                borderRadius: "4px",
                              }}
                            ></div>
                          </div>
                          <div className="quote-details">
                            <div
                              className="shimmer-block mb-2"
                              style={{
                                height: "18px",
                                width: "80px",
                                borderRadius: "4px",
                              }}
                            ></div>
                            <div className="quote-info">
                              <div
                                className="shimmer-block mb-1"
                                style={{
                                  height: "14px",
                                  width: "70px",
                                  borderRadius: "4px",
                                }}
                              ></div>
                              <div
                                className="shimmer-block"
                                style={{
                                  height: "14px",
                                  width: "65px",
                                  borderRadius: "4px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Forex Section Shimmer */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card market-card">
                <div className="card-header mb-0">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "24px",
                      width: "250px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>
                <div className="card-body">
                  <div className="row">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="quote-card">
                          <div className="forex-pair">
                            <div
                              className="shimmer-block mb-2"
                              style={{
                                height: "20px",
                                width: "80px",
                                borderRadius: "4px",
                              }}
                            ></div>
                            <div
                              className="shimmer-block mb-2"
                              style={{
                                height: "24px",
                                width: "100px",
                                borderRadius: "4px",
                              }}
                            ></div>
                          </div>
                          <div className="forex-time">
                            <div
                              className="shimmer-block"
                              style={{
                                height: "14px",
                                width: "150px",
                                borderRadius: "4px",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Gainers/Losers Shimmer */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <div className="card market-card">
                <div className="card-header mb-0">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "24px",
                      width: "150px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>
                <div className="card-body">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="gainer-item mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "18px",
                            width: "60px",
                            borderRadius: "4px",
                          }}
                        ></div>
                        <div className="text-end">
                          <div
                            className="shimmer-block mb-1"
                            style={{
                              height: "18px",
                              width: "80px",
                              borderRadius: "4px",
                            }}
                          ></div>
                          <div
                            className="shimmer-block"
                            style={{
                              height: "14px",
                              width: "50px",
                              borderRadius: "4px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card market-card">
                <div className="card-header mb-0">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "24px",
                      width: "140px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>
                <div className="card-body">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="loser-item mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "18px",
                            width: "60px",
                            borderRadius: "4px",
                          }}
                        ></div>
                        <div className="text-end">
                          <div
                            className="shimmer-block mb-1"
                            style={{
                              height: "18px",
                              width: "80px",
                              borderRadius: "4px",
                            }}
                          ></div>
                          <div
                            className="shimmer-block"
                            style={{
                              height: "14px",
                              width: "50px",
                              borderRadius: "4px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="container-fluid">
        {/* Stock Quotes Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card market-card mb-0">
              <div className="card-header mb-0">
                <h5 className="card-title mb-0">
                  <i className="fas fa-stock-chart me-2"></i>
                  Live Stock Quotes
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {Object.entries(stockData).map(([symbol, data]) => (
                    <div key={symbol} className="col-md-6 col-lg-3 mb-3">
                      <div className="quote-card">
                        <div className="quote-header">
                          <h6 className="quote-symbol">{symbol}</h6>
                          <span className="quote-price">
                            ${data ? formatPrice(data["05. price"]) : "N/A"}
                          </span>
                        </div>
                        <div className="quote-details">
                          {data && (
                            <>
                              <div className="quote-change">
                                {formatChange(
                                  data["09. change"],
                                  data["10. change percent"]
                                )}
                              </div>
                              <div className="quote-info">
                                <small>
                                  High: ${formatPrice(data["03. high"])}
                                </small>
                                <small>
                                  Low: ${formatPrice(data["04. low"])}
                                </small>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forex Section */}
        {/* <div className="row mb-4">
          <div className="col-12">
            <div className="card market-card">
              <div className="card-header mb-0">
                <h5 className="card-title mb-0">
                  <i className="fas fa-exchange-alt me-2"></i>
                  Forex Exchange Rates
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {Object.entries(forexData).map(([pair, data]) => (
                    <div key={pair} className="col-md-4 mb-3">
                      <div className="quote-card">
                        <div className="forex-pair">
                          <h6>
                            {pair.slice(0, 3)}/{pair.slice(3)}
                          </h6>
                          <span className="forex-rate">
                            {data
                              ? formatPrice(data["5. Exchange Rate"])
                              : "N/A"}
                          </span>
                        </div>
                        {data && (
                          <div className="forex-time">
                            <small>
                              Last Updated:{" "}
                              {new Date(
                                data["6. Last Refreshed"]
                              ).toLocaleTimeString()}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Forex Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card market-card">
              <div className="card-header mb-0 d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0">
                  <i className="fas fa-exchange-alt me-2"></i>
                  Forex Exchange Rates
                </h5>
                <div className="d-flex mt-2">
                  <select
                    className="form-select me-2"
                    value={selectedFrom}
                    onChange={(e) => setSelectedFrom(e.target.value)}
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-select"
                    value={selectedTo}
                    onChange={(e) => setSelectedTo(e.target.value)}
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="card-body">
                {/* Selected Forex Rate */}
                {selectedRate && (
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <div className="quote-card">
                        <div className="forex-pair">
                          <h6>
                            {selectedFrom}/{selectedTo}
                          </h6>
                          <span className="forex-rate">
                            {formatPrice(selectedRate["5. Exchange Rate"])}
                          </span>
                        </div>
                        <div className="forex-time">
                          <small>
                            Last Updated:{" "}
                            {new Date(
                              selectedRate["6. Last Refreshed"]
                            ).toLocaleTimeString()}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Default Forex Rates */}
                <div className="row">
                  {Object.entries(forexData).map(([pair, data]) => (
                    <div key={pair} className="col-md-4 mb-3">
                      <div className="quote-card">
                        <div className="forex-pair">
                          <h6>
                            {pair.slice(0, 3)}/{pair.slice(3)}
                          </h6>
                          <span className="forex-rate">
                            {data
                              ? formatPrice(data["5. Exchange Rate"])
                              : "N/A"}
                          </span>
                        </div>
                        {data && (
                          <div className="forex-time">
                            <small>
                              Last Updated:{" "}
                              {new Date(
                                data["6. Last Refreshed"]
                              ).toLocaleTimeString()}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Gainers/Losers Section */}
        <div className="row mb-4">
          <TopGainersLosers />
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
