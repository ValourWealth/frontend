// import { useEffect, useState } from "react";

// const StockDashboard = () => {
//   const API_KEY = "04RGF1U9PAJ49VYI";
//   const BASE_URL = "https://www.alphavantage.co/query";

//   const [tickers, setTickers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("1 Hour");
//   const [selectedSymbol, setSelectedSymbol] = useState(null);
//   const [optionsData, setOptionsData] = useState([]);
//   const [expandedSymbol, setExpandedSymbol] = useState(null);
//   const [earningsTranscript, setEarningsTranscript] = useState("");
//   const [showFullTranscript, setShowFullTranscript] = useState(false);

//   const tickerSymbols = [
//     "AAPL",
//     "MSFT",
//     "GOOGL",
//     "AMZN",
//     "TSLA",
//     "META",
//     "NVDA",
//     "SPY",
//     "QQQ",
//     "NFLX",
//   ];

//   const fetchStockData = async (symbol) => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
//       );
//       const data = await response.json();

//       if (data["Global Quote"]) {
//         const quote = data["Global Quote"];
//         return {
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: parseFloat(
//             quote["10. change percent"].replace("%", "")
//           ).toFixed(2),
//         };
//       }
//       return null;
//     } catch (error) {
//       console.error(`Error fetching data for ${symbol}:, error`);
//       return null;
//     }
//   };
//   const fetchOptionsData = async (symbol) => {
//     if (expandedSymbol === symbol) {
//       setExpandedSymbol(null);
//       setOptionsData([]);
//       setInsiderData([]);
//       setEarningsTranscript([]);
//       return;
//     }

//     try {
//       const [optionsRes, insiderRes, transcriptRes] = await Promise.all([
//         fetch(
//           `${BASE_URL}?function=REALTIME_OPTIONS&symbol=${symbol}&apikey=${API_KEY}`
//         ),
//         fetch(
//           `${BASE_URL}?function=INSIDER_TRANSACTIONS&symbol=${symbol}&apikey=${API_KEY}`
//         ),
//         fetch(
//           `${BASE_URL}?function=EARNINGS_CALL_TRANSCRIPT&symbol=${symbol}&quarter=2024Q1&apikey=${API_KEY}`
//         ),
//       ]);

//       const optionsJson = await optionsRes.json();
//       const insiderJson = await insiderRes.json();
//       const transcriptJson = await transcriptRes.json();

//       setOptionsData(optionsJson?.data || []);
//       setInsiderData(insiderJson?.data?.slice(0, 10) || []);
//       setEarningsTranscript(transcriptJson?.transcript || []);
//       setShowFullTranscript(false); // reset toggle
//       setExpandedSymbol(symbol);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setOptionsData([]);
//       setInsiderData([]);
//       setEarningsTranscript([]);
//       setExpandedSymbol(symbol);
//     }
//   };

//   const thStyle = {
//     padding: "10px 12px",
//     whiteSpace: "nowrap",
//     borderBottom: "1px solid #444",
//     fontWeight: "600",
//     textAlign: "center",
//   };

//   const tdStyle = {
//     padding: "8px 10px",
//     whiteSpace: "nowrap",
//     textAlign: "center",
//     color: "#ccc",
//   };
//   const [insiderData, setInsiderData] = useState([]);

//   const getCompanyName = (symbol) => {
//     const names = {
//       AAPL: "Apple Inc. Common Stock",
//       MSFT: "Microsoft Corp",
//       GOOGL: "Alphabet Inc. Class A",
//       AMZN: "Amazon.com Inc.",
//       TSLA: "Tesla Inc. Common Stock",
//       META: "Meta Platforms Inc.",
//       NVDA: "NVIDIA Corporation",
//       SPY: "SPDR S&P 500 ETF Trust",
//       QQQ: "Invesco QQQ Trust Series 1",
//       NFLX: "Netflix Inc. Common Stock",
//     };
//     return names[symbol] || symbol;
//   };

//   useEffect(() => {
//     const fetchAllTickers = async () => {
//       setLoading(true);
//       const results = [];
//       for (let i = 0; i < tickerSymbols.length; i++) {
//         const stock = await fetchStockData(tickerSymbols[i]);
//         if (stock) results.push(stock);
//         if (i < tickerSymbols.length - 1) {
//           await new Promise((resolve) => setTimeout(resolve, 500));
//         }
//       }
//       setTickers(results);
//       setLoading(false);
//     };
//     fetchAllTickers();
//   }, []);

//   const formatPrice = (price) => `$${price}`;
//   const formatPercent = (percent) => {
//     const value = parseFloat(percent);
//     const sign = value >= 0 ? "+" : "";
//     return `${sign}${percent}%`;
//   };

//   const refreshData = () => {
//     setLoading(true);
//     setTickers([]);
//     const fetchAllTickers = async () => {
//       const results = [];
//       for (let i = 0; i < tickerSymbols.length; i++) {
//         const stock = await fetchStockData(tickerSymbols[i]);
//         if (stock) results.push(stock);
//         if (i < tickerSymbols.length - 1) {
//           await new Promise((resolve) => setTimeout(resolve, 500));
//         }
//       }
//       setTickers(results);
//       setLoading(false);
//     };
//     fetchAllTickers();
//   };

//   return (
//     <>
//       <style>{`
//         body {
//           font-family: 'Inter', sans-serif;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//         }

//         .main-container {
//           min-height: 100vh;
//           padding: 2rem;
//           position: relative;
//         }

//         .ticker-container {
//           position: relative;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         .ticker-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 24px;
//           box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
//                       0 16px 32px rgba(0, 0, 0, 0.3),
//                       inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           overflow: hidden;
//           position: relative;
//         }

//         .ticker-header {
//           padding: 2rem 2rem 1rem 2rem;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .ticker-title {
//           font-weight: 800;
//           font-size: 2rem;
//           background: linear-gradient(135deg, #ffffff, #e0e0e0);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin: 0;
//         }

//         .ticker-list {
//           max-height: 600px;
//           overflow-y: auto;
//           padding: 0;
//           margin: 0;
//         }

//         .ticker-item {
//           padding: 1.5rem 2rem;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//           position: relative;
//         }

//         .ticker-item::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           height: 100%;
//           width: 4px;
//           background: transparent;
//         }

//         .ticker-item.positive::before {
//           background: linear-gradient(180deg, var(--theme-color), #059669);
//         }

//         .ticker-item.negative::before {
//           background: linear-gradient(180deg, #ef4444, #dc2626);
//         }

//         .ticker-symbol {
//           font-weight: 700;
//           font-size: 1.3rem;
//           background: linear-gradient(135deg, #ffffff, #e0e0e0);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 4px;
//         }

//         .ticker-company {
//           color: #9ca3af;
//           font-size: 0.85rem;
//           font-weight: 400;
//         }

//         .ticker-price {
//           font-weight: 700;
//           font-size: 1.4rem;
//           color: #ffffff;
//         }

//         .ticker-change {
//           font-weight: 600;
//           font-size: 0.95rem;
//           padding: 4px 12px;
//           border-radius: 8px;
//           display: inline-block;
//         }

//         .ticker-change.positive {
//           color: var(--theme-color);
//           background: rgba(16, 185, 129, 0.1);
//         }

//         .ticker-change.negative {
//           color: #ef4444;
//           background: rgba(239, 68, 68, 0.1);
//         }

//         .loading-container {
//           padding: 3rem;
//           text-align: center;
//         }

//         .loading-text {
//           color: #9ca3af;
//           font-size: 1.1rem;
//           font-weight: 500;
//         }

//         /* Forcefully remove all animations or transforms */
//         .ticker-container, .ticker-card, .ticker-card * {
//           animation: none !important;
//           transform: none !important;
//           transition: none !important;
//         }
//       `}</style>

//       <div className="main-containers">
//         <div className="ticker-container">
//           <div className="ticker-card">
//             <div className="ticker-header">
//               <div className="d-flex align-items-center justify-content-between">
//                 <h1 className="ticker-title">Popular Tickers</h1>
//               </div>
//             </div>

//             {loading ? (
//               <div className="loading-container">
//                 <div className="loading-text">Loading market data...</div>
//               </div>
//             ) : (
//               <div className="ticker-list">
//                 {tickers.map((ticker) => {
//                   const isPositive = parseFloat(ticker.changePercent) >= 0;
//                   const isExpanded = expandedSymbol === ticker.symbol;

//                   return (
//                     // <div
//                     //   key={ticker.symbol}
//                     //   className={`ticker-item ${
//                     //     isPositive ? "positive" : "negative"
//                     //   }`}
//                     //   onClick={() => fetchOptionsData(ticker.symbol)}
//                     //   style={{ cursor: "pointer" }}
//                     // >
//                     <div
//                       key={ticker.symbol}
//                       className={`ticker-item ${
//                         isPositive ? "positive" : "negative"
//                       }`}
//                       onClick={() => {
//                         if (expandedSymbol !== ticker.symbol) {
//                           fetchOptionsData(ticker.symbol);
//                         }
//                       }}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <div className="ticker-symbol">{ticker.symbol}</div>
//                           <div className="ticker-company">
//                             {getCompanyName(ticker.symbol)}
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <div className="ticker-price">
//                             {formatPrice(ticker.price)}
//                           </div>
//                           <div
//                             className={`ticker-change ${
//                               isPositive ? "positive" : "negative"
//                             }`}
//                           >
//                             {formatPercent(ticker.changePercent)}
//                           </div>
//                         </div>
//                       </div>

//                       {isExpanded && expandedSymbol === ticker.symbol && (
//                         <div style={{ marginTop: "1rem", overflowX: "auto" }}>
//                           {/* Options Table */}
//                           {optionsData.length > 0 && (
//                             <table
//                               className="topsearchticker"
//                               style={{
//                                 width: "1200px",
//                                 minWidth: "1000px",
//                                 fontSize: "0.85rem",
//                                 color: "#ccc",
//                                 borderCollapse: "collapse",
//                                 backgroundColor: "rgba(255,255,255,0.02)",
//                                 border: "1px solid #333",
//                                 borderRadius: "8px",
//                                 marginBottom: "2rem",
//                               }}
//                             >
//                               <thead>
//                                 <tr
//                                   style={{
//                                     borderBottom: "1px solid #444",
//                                     backgroundColor: "#1e1e1e",
//                                     color: "#fff",
//                                   }}
//                                 >
//                                   <th style={thStyle}>Contract ID</th>
//                                   <th style={thStyle}>Type</th>
//                                   <th style={thStyle}>Strike</th>
//                                   <th style={thStyle}>Last</th>
//                                   <th style={thStyle}>Mark</th>
//                                   <th style={thStyle}>Bid</th>
//                                   <th style={thStyle}>Bid Size</th>
//                                   <th style={thStyle}>Ask</th>
//                                   <th style={thStyle}>Ask Size</th>
//                                   <th style={thStyle}>Volume</th>
//                                   <th style={thStyle}>Open Interest</th>
//                                   <th style={thStyle}>Expiration</th>
//                                   <th style={thStyle}>Quote Date</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {optionsData.map((opt) => (
//                                   <tr
//                                     key={opt.contractID}
//                                     style={{
//                                       borderBottom: "1px solid #2a2a2a",
//                                     }}
//                                   >
//                                     <td style={tdStyle}>{opt.contractID}</td>
//                                     <td style={tdStyle}>{opt.type}</td>
//                                     <td style={tdStyle}>{opt.strike}</td>
//                                     <td style={tdStyle}>{opt.last}</td>
//                                     <td style={tdStyle}>{opt.mark}</td>
//                                     <td style={tdStyle}>{opt.bid}</td>
//                                     <td style={tdStyle}>{opt.bid_size}</td>
//                                     <td style={tdStyle}>{opt.ask}</td>
//                                     <td style={tdStyle}>{opt.ask_size}</td>
//                                     <td style={tdStyle}>{opt.volume}</td>
//                                     <td style={tdStyle}>{opt.open_interest}</td>
//                                     <td style={tdStyle}>{opt.expiration}</td>
//                                     <td style={tdStyle}>{opt.date}</td>
//                                   </tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           )}

//                           {/* Insider Table */}
//                           {insiderData.length > 0 && (
//                             <table
//                               className="topsearchticker"
//                               style={{
//                                 width: "1000px",
//                                 fontSize: "0.85rem",
//                                 color: "#ccc",
//                                 borderCollapse: "collapse",
//                                 backgroundColor: "rgba(255,255,255,0.02)",
//                                 border: "1px solid #333",
//                                 borderRadius: "8px",
//                               }}
//                             >
//                               <thead>
//                                 <tr
//                                   style={{
//                                     backgroundColor: "#1e1e1e",
//                                     color: "#fff",
//                                   }}
//                                 >
//                                   <th style={thStyle}>Date</th>
//                                   <th style={thStyle}>Executive</th>
//                                   <th style={thStyle}>Title</th>
//                                   <th style={thStyle}>Type</th>
//                                   <th style={thStyle}>Shares</th>
//                                   <th style={thStyle}>Price</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {insiderData.map((tx, index) => (
//                                   <tr
//                                     key={index}
//                                     style={{
//                                       borderBottom: "1px solid #2a2a2a",
//                                     }}
//                                   >
//                                     <td style={tdStyle}>
//                                       {tx.transaction_date}
//                                     </td>
//                                     <td style={tdStyle}>{tx.executive}</td>
//                                     <td style={tdStyle}>
//                                       {tx.executive_title}
//                                     </td>
//                                     <td style={tdStyle}>
//                                       {tx.acquisition_or_disposal}
//                                     </td>
//                                     <td style={tdStyle}>{tx.shares}</td>
//                                     <td style={tdStyle}>${tx.share_price}</td>
//                                   </tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           )}

//                           {earningsTranscript.length > 0 && (
//                             <div
//                               style={{
//                                 marginTop: "1.5rem",
//                                 backgroundColor: "#111",
//                                 padding: "1rem 1.5rem",
//                                 borderRadius: "8px",
//                                 color: "#ccc",
//                                 fontSize: "0.95rem",
//                               }}
//                             >
//                               <h5
//                                 style={{ marginBottom: "1rem", color: "#fff" }}
//                               >
//                                 {/* 📣 Platinum Pulse: Earnings Coverage
//                                  */}
//                                 📣 Platinum Financial Digest
//                               </h5>

//                               {(showFullTranscript
//                                 ? earningsTranscript
//                                 : earningsTranscript.slice(0, 3)
//                               ).map((line, idx) => (
//                                 <div
//                                   key={idx}
//                                   style={{
//                                     marginBottom: "1rem",
//                                     lineHeight: "1.6",
//                                   }}
//                                 >
//                                   <strong>{line.speaker}:</strong>{" "}
//                                   {line.content}
//                                 </div>
//                               ))}

//                               {!showFullTranscript && (
//                                 <div style={{ textAlign: "right" }}>
//                                   <button
//                                     onClick={() => setShowFullTranscript(true)}
//                                     style={{
//                                       background: "#222",
//                                       color: "#fff",
//                                       border: "1px solid #555",
//                                       padding: "6px 12px",
//                                       borderRadius: "6px",
//                                       cursor: "pointer",
//                                     }}
//                                   >
//                                     View Full Transcript
//                                   </button>
//                                 </div>
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StockDashboard;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function FinancialDashboard() {
//   const [activeTimeframe, setActiveTimeframe] = useState("1 Hour");
//   const [selectedTicker, setSelectedTicker] = useState(null);
//   const [tickerData, setTickerData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sentimentScore, setSentimentScore] = useState(null);
//   const [newsSentiment, setNewsSentiment] = useState(null);

//   // Alpha Vantage API configuration
//   const API_KEY = "04RGF1U9PAJ49VYI";
//   const tickers = ["KGC", "AGNC", "GILD", "AG", "MU", "AAPL", "TSLA", "GOOGL"];

//   // Fetch ticker data from Alpha Vantage
//   useEffect(() => {
//     const fetchTickerData = async () => {
//       setLoading(true);

//       const promises = tickers.map(async (ticker) => {
//         try {
//           const [priceRes, sentimentRes, newsRes] = await Promise.all([
//             fetch(
//               `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${API_KEY}`
//             ),
//             fetch(
//               `https://www.alphavantage.co/query?function=SENTIMENT_ANALYSIS&symbol=${ticker}&apikey=${API_KEY}`
//             ),
//             fetch(
//               `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${API_KEY}`
//             ),
//           ]);

//           const priceData = await priceRes.json();
//           const sentimentData = await sentimentRes.json();
//           const newsData = await newsRes.json();

//           let currentPrice = 0;
//           let previousPrice = 0;
//           let change = 0;

//           if (priceData["Time Series (1min)"]) {
//             const timeSeries = priceData["Time Series (1min)"];
//             const latestTime = Object.keys(timeSeries)[0];
//             const latest = timeSeries[latestTime];
//             const previous = timeSeries[Object.keys(timeSeries)[1]];

//             currentPrice = parseFloat(latest["4. close"]);
//             previousPrice = parseFloat(previous["4. close"]);
//             change = ((currentPrice - previousPrice) / previousPrice) * 100;
//           }

//           const sentimentScore = sentimentData?.overall_sentiment_score || 0.0;
//           const sentimentLabel =
//             sentimentScore > 0
//               ? "Bullish"
//               : sentimentScore < 0
//               ? "Bearish"
//               : "Neutral";

//           const newsSentimentScore =
//             newsData?.feed?.[0]?.overall_sentiment_score ?? 0;

//           return {
//             symbol: ticker,
//             price: currentPrice.toFixed(2),
//             change: change.toFixed(2),
//             company: getCompanyName(ticker),
//             sentimentScore,
//             sentimentLabel,
//             newsSentimentScore,
//           };
//         } catch (error) {
//           console.error(`Error fetching ${ticker}:`, error);
//           return getDummyData(ticker);
//         }
//       });

//       const results = await Promise.all(promises);
//       setTickerData(results.filter(Boolean));
//       setSelectedTicker(results[0]);
//       setSentimentScore(results[0].sentimentScore);
//       setNewsSentiment(results[0].newsSentimentScore);
//       setLoading(false);
//     };

//     fetchTickerData();
//   }, []);

//   const getCompanyName = (ticker) => {
//     const companies = {
//       KGC: "Kinross Gold Corporation Common Stock",
//       AGNC: "AGNC Investment Corp. - Common Stock",
//       GILD: "Gilead Sciences, Inc. - Common Stock",
//       AG: "First Majestic Silver Corp. Ordinary Shares (Canada)",
//       MU: "Micron Technology, Inc. - Common Stock",
//     };
//     return companies[ticker] || `${ticker} Corporation`;
//   };

//   const getDummyData = (ticker) => {
//     const dummyData = {
//       KGC: { price: "15.56", change: "-0.30" },
//       AGNC: { price: "9.25", change: "0.40" },
//       GILD: { price: "108.67", change: "0.50" },
//       AG: { price: "8.39", change: "-1.90" },
//       MU: { price: "121.75", change: "1.10" },
//     };

//     return {
//       symbol: ticker,
//       price: dummyData[ticker]?.price || "0.00",
//       change: dummyData[ticker]?.change || "0.00",
//       company: getCompanyName(ticker),
//     };
//   };

//   const contractsData = [
//     {
//       contract: ".KGC251121C14",
//       type: "Call",
//       strike: 14,
//       price: 2.7,
//       expiry: "Nov 21st 25",
//       volume: 61,
//       itm: "59%",
//     },
//     {
//       contract: ".KGC260116C12",
//       type: "Call",
//       strike: 12,
//       price: 4.35,
//       expiry: "Jan 16th 26",
//       volume: 60,
//       itm: "70%",
//     },
//     {
//       contract: ".KGC251121C15",
//       type: "Call",
//       strike: 15,
//       price: 2.13,
//       expiry: "Nov 21st 25",
//       volume: 57,
//       itm: "51%",
//     },
//     {
//       contract: ".KGC250815C15",
//       type: "Call",
//       strike: 15,
//       price: 1.45,
//       expiry: "Aug 15th 25",
//       volume: 48,
//       itm: "55%",
//     },
//     {
//       contract: ".KGC250627C1...",
//       type: "Call",
//       strike: 15.5,
//       price: 0.41,
//       expiry: "Jun 27th 25",
//       volume: 35,
//       itm: "51%",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//         * {
//           font-family: 'Inter', sans-serif;
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .dashboard {
//           color: white;
//           min-height: 100vh;
//           padding: 1.5rem;
//         }

//         .main-container {
//           max-width: 1600px;
//           margin: 0 auto;
//           background: #1A1A1F;
//           border-radius: 20px;
//           border: 1px solid #2D2D35;
//           overflow: hidden;
//         }

//         .header {
//           padding: 2rem 3rem 1.5rem;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           border-bottom: 1px solid #2D2D35;
//         }

//         .title {
//           font-size: 2.2rem;
//           font-weight: 700;
//           color: #FFFFFF;
//           letter-spacing: -0.02em;
//         }

//         .beta-badge {
//           background: var(--theme-color);
//           color: #FFFFFF;
//           padding: 6px 14px;
//           border-radius: 16px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//         }

//         .content {
//           display: grid;
//           grid-template-columns: 380px 1fr;
//           min-height: 700px;
//         }

//         .left-panel {
//           background: #151519;
//           border-right: 1px solid #2D2D35;
//           padding: 2rem;
//         }

//         .tickers-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 1.5rem;
//         }

//         .tickers-title {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: #FFFFFF;
//         }

//         .refresh-icon {
//           color: var(--theme-color);
//           cursor: pointer;
//           padding: 8px;
//           border-radius: 8px;
//           transition: all 0.3s ease;
//         }

//         .refresh-icon:hover {
//           background: rgba(16, 185, 129, 0.1);
//         }

//         .timeframe-tabs {
//           display: flex;
//           background: #1F1F24;
//           border-radius: 10px;
//           padding: 3px;
//           margin-bottom: 2rem;
//           border: 1px solid #2D2D35;
//         }

//         .tab {
//           flex: 1;
//           padding: 10px 16px;
//           background: transparent;
//           border: none;
//           color: #9CA3AF;
//           border-radius: 7px;
//           font-weight: 500;
//           font-size: 0.9rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .tab.active {
//           background: var(--theme-color);
//           color: #FFFFFF;
//           box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
//           font-weight: 600;
//         }

//         .tickers-list {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .ticker-item {
//           background: #1F1F24;
//           border: 1px solid #2D2D35;
//           border-radius: 12px;
//           padding: 1.2rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .ticker-item::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           height: 100%;
//           width: 3px;
//           background: transparent;
//           transition: all 0.3s ease;
//         }

//         .ticker-item:hover {
//           background: #252529;
//           border-color: var(--theme-color);
//           transform: translateX(4px);
//         }

//         .ticker-item:hover::before {
//           background: var(--theme-color);
//         }

//         .ticker-item.selected {
//           background: #252529;
//           border-color: var(--theme-color);
//           box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
//         }

//         .ticker-item.selected::before {
//           background: var(--theme-color);
//         }

//         // light mode

//         .bg-light .main-container {
//         background-color: #fff;

//         }
//         /* Light Theme Override CSS */
// .bg-light {
//   background: #FFFFFF !important;
//   color: #000000 !important;
// }

// .bg-light .main-container {
//   background: #FFFFFF !important;
//   border: 1px solid #E5E7EB !important;
//   box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1) !important;
// }

// .bg-light .header {
//   border-bottom: 1px solid #E5E7EB !important;
// }

// .bg-light .title {
//   color: #000000 !important;
// }

// .bg-light .left-panel {
//   background: #FFFFFF !important;
//   border-right: 1px solid #E5E7EB !important;
// }

// .bg-light .tickers-title {
//   color: #000000 !important;
// }

// .bg-light .timeframe-tabs {
//   background: #F3F4F6 !important;
//   border: 1px solid #D1D5DB !important;
// }

// .bg-light .tab {
//   color: #374151 !important;
// }

// .bg-light .ticker-item {
//   background: #FFFFFF !important;
//   border: 1px solid #E5E7EB !important;
// }

// .bg-light .ticker-item:hover {
//   background: #F9FAFB !important;
// }

// .bg-light .ticker-item.selected {
//   background: #F0FDF4 !important;
// }

// .bg-light .ticker-symbol {
//   color: #000000 !important;
// }

// .bg-light .company-name {
//   color: #6B7280 !important;
// }

// .bg-light .price {
//   color: #000000 !important;
// }

// .bg-light .right-panel {
//   background: #FFFFFF !important;
// }

// .bg-light .ticker-header {
//   border-bottom: 1px solid #E5E7EB !important;
// }

// .bg-light .ticker-title {
//   color: #000000 !important;
// }

// .bg-light .sentiment-gauge {
//   background: #FFFFFF !important;
//   border: 1px solid #E5E7EB !important;
// }

// .bg-light .gauge-title {
//   color: #000000 !important;
// }

// .bg-light .ai-scoring {
//   color: #6B7280 !important;
// }

// .bg-light .gauge-inner {
//   background: #FFFFFF !important;
// }

// .bg-light .gauge-value {
//   color: #000000 !important;
// }

// .bg-light .sentiment-label {
// //   color: var(--theme-color) !important;
//   color: var(--theme-color) !important;
// }

// .bg-light .sentiment-tabs {
//   background: #F3F4F6 !important;
// }

// .bg-light .sentiment-tab {
//   color: #374151 !important;
// }

// .bg-light .news-gauge {
//   background: #FFFFFF !important;
//   border: 1px solid #E5E7EB !important;
// }

// .bg-light .news-title {
//   color: #000000 !important;
// }

// .bg-light .contracts-section {
//   background: #FFFFFF !important;
//   border: 1px solid #E5E7EB !important;
// }

// .bg-light .contracts-table td {
//   color: #000000 !important;
//   border-bottom: 1px solid #E5E7EB !important;
// }

// .bg-light .contracts-table tr:hover {
//   background: #F9FAFB !important;
// }

// .bg-light .loading {
//   color: #374151 !important;
// }

// .bg-light .spinner {
//   border: 3px solid #E5E7EB !important;
//   border-top: 3px solid var(--theme-color) !important;
// //   color: var(--theme-color) !important;
// }

//         .ticker-symbol {
//           font-size: 1.3rem;
//           font-weight: 700;
//           margin-bottom: 6px;
//           color: #FFFFFF;
//         }

//         .company-name {
//           font-size: 0.8rem;
//           color: #9CA3AF;
//           margin-bottom: 12px;
//           line-height: 1.3;
//         }

//         .price-info {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .price {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: #FFFFFF;
//         }

//         .change {
//           font-size: 0.9rem;
//           font-weight: 600;
//           padding: 4px 8px;
//           border-radius: 6px;
//         }

//         .change.positive {
//         color: var(--theme-color) !important;
//         //   color: var(--theme-color);
//           background: rgba(16, 185, 129, 0.1);
//         }

//         .change.negative {
//           color: #EF4444;
//           background: rgba(239, 68, 68, 0.1);
//         }

//         .right-panel {
//           padding: 2.5rem;
//           background: #1A1A1F;
//         }

//         .ticker-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 2.5rem;
//           padding-bottom: 1.5rem;
//           border-bottom: 1px solid #2D2D35;
//         }

//         .ticker-title {
//           font-size: 1.8rem;
//           font-weight: 700;
//           color: #FFFFFF;
//           letter-spacing: -0.01em;
//         }

//         .full-info-btn {
//           background: transparent;
//           border: 1px solid var(--theme-color);
//         //   color: var(--theme-color);
//         color: var(--theme-color) !important;
//           padding: 12px 20px;
//           border-radius: 10px;
//           font-weight: 600;
//           font-size: 0.9rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           letter-spacing: 0.5px;
//         }

//         .full-info-btn:hover {
//         //   background: var(--theme-color);
//         color: var(--theme-color) !important;
//           color: #FFFFFF;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
//         }

//         .sentiments-section {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           margin-bottom: 2.5rem;
//         }

//         .sentiment-gauge {
//           background: #1F1F24;
//           border-radius: 16px;
//           padding: 2rem;
//           border: 1px solid #2D2D35;
//           text-align: center;
//         }

//         .gauge-title {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: #FFFFFF;
//         }

//         .ai-scoring {
//           color: #9CA3AF;
//           font-size: 0.9rem;
//           margin-bottom: 2rem;
//         }

//         .gauge-container {
//           position: relative;
//           width: 140px;
//           height: 140px;
//           margin: 0 auto 1.5rem;
//         }

//         .gauge-circle {
//           width: 140px;
//           height: 140px;
//           border-radius: 50%;
//           background: conic-gradient(
//             from 0deg,
//             #EF4444 0deg 60deg,
//             var(--theme-color) 60deg 310deg,
//             #374151 310deg 360deg
//           );
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//         }

//         .gauge-inner {
//           width: 100px;
//           height: 100px;
//           background: #1F1F24;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//         }

//         .gauge-value {
//           font-size: 1.4rem;
//           font-weight: 700;
//           color: #FFFFFF;
//         }

//         .sentiment-label {
//         //   color: var(--theme-color);
//         color: var(--theme-color) !important;
//           font-weight: 600;
//           font-size: 1rem;
//           margin-bottom: 1.5rem;
//         }

//         .sentiment-tabs {
//           display: flex;
//           background: #151519;
//           border-radius: 8px;
//           padding: 3px;
//           gap: 2px;
//         }

//         .sentiment-tab {
//           flex: 1;
//           padding: 8px 12px;
//           background: transparent;
//           border: none;
//           color: #9CA3AF;
//           border-radius: 6px;
//           font-size: 0.8rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .sentiment-tab:first-child {
//         //   background: var(--theme-color);
//         color: var(--theme-color) !important;
//           color: #FFFFFF;
//         }

//         .news-gauge {
//           background: #1F1F24;
//           border-radius: 16px;
//           padding: 2rem;
//           border: 1px solid #2D2D35;
//           text-align: center;
//         }

//         .news-title {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 2rem;
//           color: #FFFFFF;
//         }

//         .news-meter {
//           width: 120px;
//           height: 60px;
//           margin: 0 auto 1rem;
//           position: relative;
//           background: linear-gradient(90deg, #EF4444 0%, #F59E0B 50%, var(--theme-color) 100%);
//           border-radius: 60px 60px 0 0;
//         }

//         .news-needle {
//           position: absolute;
//           bottom: 0;
//           left: 75%;
//           width: 2px;
//           height: 50px;
//           background: #FFFFFF;
//           transform-origin: bottom;
//           transform: rotate(15deg);
//         }

//         .news-value {
//           font-size: 2rem;
//           font-weight: 700;
//         //   color: var(--theme-color);
//         color: var(--theme-color) !important;
//           margin: 1rem 0;
//         }

//         .contracts-section {
//           background: #1F1F24;
//           border-radius: 16px;
//           border: 1px solid #2D2D35;
//           overflow: hidden;
//         }

//         .contracts-header {
//           background: #047857;
//           color: #FFFFFF;
//           padding: 1.2rem 1.5rem;
//           font-weight: 600;
//           font-size: 1.1rem;
//         }

//         .contracts-table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .contracts-table th {
//           background: #047857;
//           color: #FFFFFF;
//           padding: 14px 16px;
//           text-align: left;
//           font-weight: 600;
//           font-size: 0.9rem;
//           position: relative;
//           border-bottom: 1px solid #065F46;
//         }

//         .sort-indicator {
//           position: absolute;
//           top: 6px;
//           right: 8px;
//           background: #EF4444;
//           color: #FFFFFF;
//           border-radius: 50%;
//           width: 18px;
//           height: 18px;
//           font-size: 11px;
//           font-weight: 700;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .contracts-table td {
//           padding: 14px 16px;
//           border-bottom: 1px solid #2D2D35;
//           color: #E5E7EB;
//           font-size: 0.9rem;
//         }

//         .contracts-table tr:hover {
//           background: #252529;
//         }

//         .itm-percentage {
//         //   color: var(--theme-color);
//         color: var(--theme-color) !important;
//           font-weight: 600;
//         }

//         .loading {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 3rem;
//           color: #9CA3AF;
//         }

//         .spinner {
//           width: 32px;
//           height: 32px;
//           border: 3px solid #2D2D35;
//           border-top: 3px solid var(--theme-color);
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           margin-right: 1rem;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         @media (max-width: 1200px) {
//           .content {
//             grid-template-columns: 1fr;
//           }

//           .left-panel {
//             border-right: none;
//             border-bottom: 1px solid #2D2D35;
//           }

//           .sentiments-section {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 768px) {
//           .dashboard {
//             padding: 1rem;
//           }

//           .header {
//             padding: 1.5rem;
//           }

//           .title {
//             font-size: 1.8rem;
//           }

//           .left-panel, .right-panel {
//             padding: 1.5rem;
//           }
//         }
//       `}</style>

//       <div className="dashboard p-0">
//         <div className="main-container">
//           <div className="header">
//             <h1 className="title">Top Picks Of The Day</h1>
//             <span className="beta-badge">Beta</span>
//           </div>

//           <div className="content">
//             {/* Left Panel - Tickers */}
//             <div className="left-panel">
//               <div className="tickers-header">
//                 <h3 className="tickers-title">Tickers</h3>
//                 <div className="refresh-icon">
//                   <svg
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4 12a8 8 0 018-8V2.5L14.5 5 12 7.5V6a6 6 0 100 12 6 6 0 006-6h2a8 8 0 01-16 0z" />
//                   </svg>
//                 </div>
//               </div>

//               <div className="timeframe-tabs">
//                 {["1 Hour", "4 Hours", "1 Day"].map((timeframe) => (
//                   <button
//                     key={timeframe}
//                     className={`tab ${
//                       activeTimeframe === timeframe ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTimeframe(timeframe)}
//                   >
//                     {timeframe}
//                   </button>
//                 ))}
//               </div>

//               {loading ? (
//                 <div className="loading">
//                   <div className="spinner"></div>
//                   Loading tickers...
//                 </div>
//               ) : (
//                 <div className="tickers-list">
//                   {tickerData.map((ticker) => (
//                     <div
//                       key={ticker.symbol}
//                       className={`ticker-item ${
//                         selectedTicker?.symbol === ticker.symbol
//                           ? "selected"
//                           : ""
//                       }`}
//                       onClick={() => {
//                         setSelectedTicker(ticker);
//                         setSentimentScore(ticker.sentimentScore);
//                         setNewsSentiment(ticker.newsSentimentScore);
//                       }}
//                     >
//                       <div className="ticker-symbol">{ticker.symbol}</div>
//                       <div className="company-name">{ticker.company}</div>
//                       <div className="price-info">
//                         <span className="price">${ticker.price}</span>
//                         <span
//                           className={`change ${
//                             parseFloat(ticker.change) >= 0
//                               ? "positive"
//                               : "negative"
//                           }`}
//                         >
//                           {parseFloat(ticker.change) >= 0 ? "+" : ""}
//                           {ticker.change}%
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Right Panel - Details */}
//             <div className="right-panel">
//               {selectedTicker && (
//                 <>
//                   <div className="ticker-header">
//                     <h2 className="ticker-title">
//                       {selectedTicker.symbol} {selectedTicker.company}
//                     </h2>
//                     <Link to={`/trading-tools?symbol=${selectedTicker.symbol}`}>
//                       <button className="full-info-btn">
//                         FULL {selectedTicker.symbol} INFO
//                         <svg
//                           width="16"
//                           height="16"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                         </svg>
//                       </button>
//                     </Link>
//                   </div>

//                   <div className="sentiments-section">
//                     <div className="sentiment-gauge">
//                       <h3 className="gauge-title">Sentiments</h3>
//                       <p className="ai-scoring">A.I. Scoring</p>

//                       <div className="gauge-container">
//                         <div className="gauge-circle">
//                           <div className="gauge-inner">
//                             <div className="gauge-value">
//                               {sentimentScore
//                                 ? `${(sentimentScore * 100).toFixed(2)}%`
//                                 : "--"}
//                             </div>
//                             <div className="sentiment-label">
//                               {selectedTicker?.sentimentLabel || "Neutral"}
//                             </div>

//                             {/* <div className="gauge-value">85.71%</div> */}
//                           </div>
//                         </div>
//                       </div>

//                       {/* <div className="sentiment-label">Bullish</div>
//                        */}
//                       <div className="sentiment-label">
//                         {selectedTicker?.sentimentLabel || ""}
//                       </div>

//                       {/* <div className="sentiment-tabs">
//                         <button className="sentiment-tab">1 Hour</button>
//                         <button className="sentiment-tab">4 Hour</button>
//                         <button className="sentiment-tab">1 Day</button>
//                       </div> */}
//                     </div>

//                     <div className="news-gauge">
//                       <h3 className="news-title">News Sentiment</h3>
//                       <div className="news-meter">
//                         <div className="news-needle"></div>
//                       </div>
//                       <div className="news-value">
//                         {newsSentiment
//                           ? `${(newsSentiment * 100).toFixed(2)}`
//                           : "--"}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="contracts-section">
//                     <div className="contracts-header">Popular Contracts</div>
//                     <table className="contracts-table">
//                       <thead>
//                         <tr>
//                           <th>
//                             Contract
//                             <span className="sort-indicator">1</span>
//                           </th>
//                           <th>C/P</th>
//                           <th>Strike</th>
//                           <th>Price</th>
//                           <th>Expiry</th>
//                           <th>
//                             Volume
//                             <span className="sort-indicator">2</span>
//                           </th>
//                           <th>ITM%</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {contractsData.map((contract, index) => (
//                           <tr key={index}>
//                             <td>{contract.contract}</td>
//                             <td>{contract.type}</td>
//                             <td>{contract.strike}</td>
//                             <td>{contract.price}</td>
//                             <td>{contract.expiry}</td>
//                             <td>{contract.volume}</td>
//                             <td className="itm-percentage">{contract.itm}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // //////////////////////////////////////////////////////////////////// Scraping wala kam

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function FinancialDashboard() {
//   const [activeTimeframe, setActiveTimeframe] = useState("1 Hour");
//   const [selectedTicker, setSelectedTicker] = useState(null);
//   const [tickerData, setTickerData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sentimentScore, setSentimentScore] = useState(null);
//   const [newsSentiment, setNewsSentiment] = useState(null);
//   const [contractsData, setContractsData] = useState([]);
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("https://backend-production-1e63.up.railway.app/api/tickers/data");
//       const data = await res.json();

//       const enriched = data.map((item) => ({
//         ...item,
//         timeframe: item.timeframe || "1 Hour"
//       }));

//       setTickerData(enriched);

//       const filtered = enriched.filter(t => t.timeframe === activeTimeframe);
//       if (filtered.length > 0) {
//         const first = filtered[0];
//         setSelectedTicker(first);
//         setSentimentScore(parseFloat(first.sentiment));
//         setNewsSentiment(parseFloat(first.news_sentiment));
//         setContractsData(filtered.filter(t => t.symbol === first.symbol));
//       }
//     } catch (err) {
//       console.error("Failed to fetch tickers", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(fetchData, 5 * 60 * 1000); // Auto-refresh every 5 mins
//     return () => clearInterval(interval);
//   }, [activeTimeframe]);

//   const handleTickerClick = (ticker) => {
//     setSelectedTicker(ticker);
//     setSentimentScore(parseFloat(ticker.sentiment));
//     setNewsSentiment(parseFloat(ticker.news_sentiment));
//     const matchingContracts = tickerData.filter(t => t.symbol === ticker.symbol);
//     setContractsData(matchingContracts);
//     navigate(`/trading-tools?symbol=${ticker.symbol}`);
//   };

//   return (
//     <div className="dashboard p-0">
//       <div className="main-container">
//         <div className="header">
//           <h1 className="title">Top Picks Of The Day</h1>
//           <span className="beta-badge">Beta</span>
//         </div>

//         <div className="content">
//           <div className="left-panel">
//             <div className="tickers-header">
//               <h3 className="tickers-title">Tickers</h3>
//               <div className="refresh-icon" onClick={fetchData}>
//                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M4 12a8 8 0 018-8V2.5L14.5 5 12 7.5V6a6 6 0 100 12 6 6 0 006-6h2a8 8 0 01-16 0z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="timeframe-tabs">
//               {["1 Hour", "4 Hours", "1 Day"].map((timeframe) => (
//                 <button
//                   key={timeframe}
//                   className={`tab ${activeTimeframe === timeframe ? "active" : ""}`}
//                   onClick={() => setActiveTimeframe(timeframe)}
//                 >
//                   {timeframe}
//                 </button>
//               ))}
//             </div>

//             {loading ? (
//               <div className="loading">
//                 <div className="spinner"></div>
//                 Loading tickers...
//               </div>
//             ) : (
//               <div className="tickers-list">
//                 {tickerData
//                   .filter(t => t.timeframe === activeTimeframe)
//                   .map((ticker, index) => (
//                     <div
//                       key={index}
//                       className={`ticker-item ${selectedTicker?.symbol === ticker.symbol ? "selected" : ""}`}
//                       onClick={() => handleTickerClick(ticker)}
//                     >
//                       <div className="ticker-symbol">{ticker.symbol}</div>
//                       <div className="company-name">{ticker.company}</div>
//                       <div className="price-info">
//                         <span className="price">${parseFloat(ticker.price).toFixed(2)}</span>
//                         <span className={`change ${parseFloat(ticker.change) >= 0 ? "positive" : "negative"}`}>
//                           {parseFloat(ticker.change) >= 0 ? "+" : ""}{parseFloat(ticker.change).toFixed(2)}%
//                         </span>
//                       </div>
//                     </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="right-panel">
//             {selectedTicker && (
//               <>
//                 <div className="ticker-header">
//                   <h2 className="ticker-title">
//                     {selectedTicker.symbol} {selectedTicker.company}
//                   </h2>
//                   <Link to={`/trading-tools?symbol=${selectedTicker.symbol}`}>
//                     <button className="full-info-btn">
//                       FULL {selectedTicker.symbol} INFO
//                       <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                       </svg>
//                     </button>
//                   </Link>
//                 </div>

//                 <div className="sentiments-section">
//                   <div className="sentiment-gauge">
//                     <h3 className="gauge-title">Sentiments</h3>
//                     <p className="ai-scoring">A.I. Scoring</p>
//                     <div className="gauge-container">
//                       <div className="gauge-circle">
//                         <div className="gauge-inner">
//                           <div className="gauge-value">
//                             {sentimentScore ? `${(sentimentScore * 100).toFixed(2)}%` : "--"}
//                           </div>
//                           <div className="sentiment-label">
//                             {selectedTicker?.sentimentLabel || "Neutral"}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="sentiment-label">
//                       {selectedTicker?.sentimentLabel || ""}
//                     </div>
//                   </div>

//                   <div className="news-gauge">
//                     <h3 className="news-title">News Sentiment</h3>
//                     <div className="news-meter">
//                       <div className="news-needle"></div>
//                     </div>
//                     <div className="news-value">
//                       {newsSentiment ? `${(newsSentiment * 100).toFixed(2)}` : "--"}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="contracts-section">
//                   <div className="contracts-header">Popular Contracts</div>
//                   <table className="contracts-table">
//                     <thead>
//                       <tr>
//                         <th>Contract<span className="sort-indicator">1</span></th>
//                         <th>C/P</th>
//                         <th>Strike</th>
//                         <th>Price</th>
//                         <th>Expiry</th>
//                         <th>Volume<span className="sort-indicator">2</span></th>
//                         <th>ITM%</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {contractsData
//                         .sort((a, b) => parseInt(b.volume) - parseInt(a.volume))
//                         .slice(0, 5)
//                         .map((contract, index) => (
//                           <tr key={index}>
//                             <td>{contract.contract}</td>
//                             <td>{contract.cp}</td>
//                             <td>{contract.strike}</td>
//                             <td>{contract.price}</td>
//                             <td>{contract.expiry}</td>
//                             <td>{contract.volume}</td>
//                             <td className="itm-percentage">{contract.itm}</td>
//                           </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// =====================================================================================

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FinancialDashboard() {
  const [activeTimeframe, setActiveTimeframe] = useState("1 Hour");
  const [selectedTicker, setSelectedTicker] = useState(null);
  const [tickerData, setTickerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sentimentScore, setSentimentScore] = useState(null);
  const [newsSentiment, setNewsSentiment] = useState(null);

  // Alpha Vantage API configuration
  const API_KEY = "04RGF1U9PAJ49VYI";
  const tickers = ["KGC", "AGNC", "GILD", "AG", "MU", "AAPL", "TSLA", "GOOGL"];

  // Fetch ticker data from Alpha Vantage
  useEffect(() => {
    const fetchTickerDataFromBackend = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://backend-production-1e63.up.railway.app/api/tickers/data/?timeframe=${activeTimeframe.replace(
            " ",
            "_"
          )}`
        );
        const data = await response.json();

        // Group contracts under each unique symbol
        const tickerMap = {};

        for (let row of data) {
          const symbol = row.symbol;

          if (!tickerMap[symbol]) {
            tickerMap[symbol] = {
              symbol,
              company: row.company,
              sentimentScore: parseFloat(row.sentiment) || 0,
              sentimentLabel: row.sentiment_label || "Neutral",
              newsSentimentScore: parseFloat(row.news_sentiment) || 0,
              contracts: [],
              price: parseFloat(row.price || "0.00").toFixed(2),
              change: row.change || "0.00",
              sentimentType: row.sentiment_type || "neutral",
            };
          }

          // Push contract if exists
          if (row.contract) {
            tickerMap[symbol].contracts.push({
              contract: row.contract,
              type: row.cp,
              strike: row.strike,
              price: row.price,
              expiry: row.expiry,
              volume: row.volume,
              itm: row.itm,
            });
          }
        }

        const results = Object.values(tickerMap);

        setTickerData(results);
        setSelectedTicker(results[0]);
        setSentimentScore(results[0]?.sentimentScore || 0);
        setNewsSentiment(results[0]?.newsSentimentScore || 0);
      } catch (error) {
        console.error("Backend API fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickerDataFromBackend();
  }, [activeTimeframe]);

  const getCompanyName = (ticker) => {
    const companies = {
      KGC: "Kinross Gold Corporation Common Stock",
      AGNC: "AGNC Investment Corp. - Common Stock",
      GILD: "Gilead Sciences, Inc. - Common Stock",
      AG: "First Majestic Silver Corp. Ordinary Shares (Canada)",
      MU: "Micron Technology, Inc. - Common Stock",
    };
    return companies[ticker] || `${ticker} Corporation`;
  };

  const getDummyData = (ticker) => {
    const dummyData = {
      KGC: { price: "15.56", change: "-0.30" },
      AGNC: { price: "9.25", change: "0.40" },
      GILD: { price: "108.67", change: "0.50" },
      AG: { price: "8.39", change: "-1.90" },
      MU: { price: "121.75", change: "1.10" },
    };

    return {
      symbol: ticker,
      price: dummyData[ticker]?.price || "0.00",
      change: dummyData[ticker]?.change || "0.00",
      company: getCompanyName(ticker),
    };
  };

  const contractsData = selectedTicker?.contracts || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dashboard {
          color: white;
          min-height: 100vh;
          padding: 1.5rem;
        }
          .price-info .price {
          color: #ffff !important;
          }

        .main-container {
          max-width: 1600px;
          background: #1a1a1a;
          border-radius: 20px;
          border: 1px solid #2D2D35;
          overflow: hidden;
        }

        .header {
          padding: 2rem 3rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid #2D2D35;
        }

        .title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }

        .beta-badge {
          background: var(--theme-color);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .content {
          display: grid;
          grid-template-columns: 380px 1fr;
          min-height: 700px;

        }

        .left-panel {
          border-right: 1px solid #2D2D35;
          padding: 2rem;
        }

        .tickers-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .tickers-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .refresh-icon {
          color: var(--theme-color);
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .refresh-icon:hover {
          background: rgba(16, 185, 129, 0.1);
        }

        .timeframe-tabs {
          display: flex;
          background: #1F1F24;
          border-radius: 10px;
          padding: 3px;
          margin-bottom: 2rem;
          border: 1px solid #2D2D35;
        }

        .tab {
          flex: 1;
          padding: 10px 16px;
          background: transparent;
          border: none;
          color: #9CA3AF;
          border-radius: 7px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: var(--theme-color);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
          font-weight: 600;
        }

        .tickers-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ticker-item {
          background: #1F1F24;
          border: 1px solid #2D2D35;
          border-radius: 12px;
          padding: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .ticker-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .ticker-item:hover {
          background: #252529;
          border-color: var(--theme-color);
          transform: translateX(4px);
        }

        .ticker-item:hover::before {
          background: var(--theme-color);
        }

        .ticker-item.selected {
          background: #252529;
          border-color: var(--theme-color);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
        }

        .ticker-item.selected::before {
          background: var(--theme-color);
        }

        // light mode

        .bg-light .main-container {
        background-color: #fff;

        }
        /* Light Theme Override CSS */
.bg-light {
  background: #FFFFFF !important;
  color: #000000 !important;
}

.bg-light .main-container {
  background: #FFFFFF !important;
  border: 1px solid #E5E7EB !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1) !important;
}

.bg-light .header {
  border-bottom: 1px solid #E5E7EB !important;
}

.bg-light .title {
  color: #000000 !important;
}

.bg-light .left-panel {
  background: #FFFFFF !important;
  border-right: 1px solid #E5E7EB !important;
}

.bg-light .tickers-title {
  color: #000000 !important;
}

.bg-light .timeframe-tabs {
  background: #F3F4F6 !important;
  border: 1px solid #D1D5DB !important;
}

.bg-light .tab {
  color: #374151 !important;
}

.bg-light .ticker-item {
  background: #FFFFFF !important;
  border: 1px solid #E5E7EB !important;
}

.bg-light .ticker-item:hover {
  background: #F9FAFB !important;
}

.bg-light .ticker-item.selected {
  background: #F0FDF4 !important;
}

.bg-light .ticker-symbol {
  color: #000000 !important;
}

.bg-light .company-name {
  color: #6B7280 !important;
}

.bg-light .price {
  color: #000000 !important;
}

.bg-light .right-panel {
  background: #FFFFFF !important;
}

.bg-light .ticker-header {
  border-bottom: 1px solid #E5E7EB !important;
}

.bg-light .ticker-title {
  color: #000000 !important;
}

.bg-light .sentiment-gauge {
  background: #FFFFFF !important;
  border: 1px solid #E5E7EB !important;
}

.bg-light .gauge-title {
  color: #000000 !important;
}

.bg-light .ai-scoring {
  color: #6B7280 !important;
}

.bg-light .gauge-inner {
  background: #FFFFFF !important;
}

.bg-light .gauge-value {
  color: #000000 !important;
}

.bg-light .sentiment-label {
//   color: var(--theme-color) !important;
  color: var(--theme-color) !important;
}

.bg-light .sentiment-tabs {
  background: #F3F4F6 !important;
}

.bg-light .sentiment-tab {
  color: #374151 !important;
}

.bg-light .news-gauge {
  background: #FFFFFF !important;
  border: 1px solid #E5E7EB !important;
}

.bg-light .news-title {
  color: #000000 !important;
}

.bg-light .contracts-section {
  background: #FFFFFF !important;
  border: 1px solid #E5E7EB !important;
}

.bg-light .contracts-table td {
  color: #000000 !important;
  border-bottom: 1px solid #E5E7EB !important;
}

.bg-light .contracts-table tr:hover {
  background: #F9FAFB !important;
}

.bg-light .loading {
  color: #374151 !important;
}

.bg-light .spinner {
  border: 3px solid #E5E7EB !important;
  border-top: 3px solid var(--theme-color) !important;
//   color: var(--theme-color) !important;
}

        .ticker-symbol {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: #FFFFFF;
        }

        .company-name {
          font-size: 0.8rem;
          color: #9CA3AF;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .price-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.2rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .change {
          font-size: 0.9rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .change.positive {
        color: var(--theme-color) !important;
        //   color: var(--theme-color);
          background: rgba(16, 185, 129, 0.1);
        }

        .change.negative {
          color: #EF4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .right-panel {
          padding: 2.5rem;
          background: #1a1a1a;
        }

        .ticker-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #2D2D35;
        }

        .ticker-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }

        .full-info-btn {
          background: transparent;
          border: 1px solid var(--theme-color);
        //   color: var(--theme-color);
        color: var(--theme-color) !important;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.5px;
        }

        .full-info-btn:hover {
        //   background: var(--theme-color);
        color: var(--theme-color) !important;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }

        .sentiments-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .sentiment-gauge {
          background: #1F1F24;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #2D2D35;
          text-align: center;
        }

        .gauge-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #FFFFFF;
        }

        .ai-scoring {
          color: #9CA3AF;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .gauge-container {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 1.5rem;
        }

        .gauge-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #EF4444 0deg 60deg,
            var(--theme-color) 60deg 310deg,
            #374151 310deg 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .gauge-inner {
          width: 100px;
          height: 100px;
          background: #1F1F24;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .gauge-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .sentiment-label {
        //   color: var(--theme-color);
        color: var(--theme-color) !important;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .sentiment-tabs {
          display: flex;
          background: #151519;
          border-radius: 8px;
          padding: 3px;
          gap: 2px;
        }

        .sentiment-tab {
          flex: 1;
          padding: 8px 12px;
          background: transparent;
          border: none;
          color: #9CA3AF;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sentiment-tab:first-child {
        //   background: var(--theme-color);
        color: var(--theme-color) !important;
          color: #FFFFFF;
        }

        .news-gauge {
          background: #1F1F24;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #2D2D35;
          text-align: center;
        }

        .news-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #FFFFFF;
        }

        .news-meter {
          width: 120px;
          height: 60px;
          margin: 0 auto 1rem;
          position: relative;
          background: linear-gradient(90deg, #EF4444 0%, #F59E0B 50%, var(--theme-color) 100%);
          border-radius: 60px 60px 0 0;
        }

        .news-needle {
          position: absolute;
          bottom: 0;
          left: 75%;
          width: 2px;
          height: 50px;
          background: #FFFFFF;
          transform-origin: bottom;
          transform: rotate(15deg);
        }

        .news-value {
          font-size: 2rem;
          font-weight: 700;
        //   color: var(--theme-color);
        color: var(--theme-color) !important;
          margin: 1rem 0;
        }

        .contracts-section {
          background: #1F1F24;
          border-radius: 16px;
          border: 1px solid #2D2D35;
          overflow: hidden;
        }

        .contracts-header {
          background: var(--theme-color);
          color: #FFFFFF;
          padding: 1.2rem 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .contracts-table {
          width: 100%;
          border-collapse: collapse;
        }

        .contracts-table th {
          background: var(--theme-color);
          color: #FFFFFF;
          padding: 14px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 0.9rem;
          position: relative;
          border-bottom: 1px solid var(--theme-color);
        }

        .sort-indicator {
          position: absolute;
          top: 6px;
          right: 8px;
          background: #EF4444;
          color: #FFFFFF;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contracts-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #2D2D35;
          color: #E5E7EB;
          font-size: 0.9rem;
        }
        .content-dahbaord {
           max-width:100%;
          }

        .contracts-table tr:hover {
          background: #252529;
        }

        .itm-percentage {
        //   color: var(--theme-color);
        color: var(--theme-color) !important;
          font-weight: 600;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #9CA3AF;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #2D2D35;
          border-top: 3px solid var(--theme-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 1200px) {
          .content {
            grid-template-columns: 1fr;
          }

          .left-panel {
            border-right: none;
            border-bottom: 1px solid #2D2D35;
          }

          .sentiments-section {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .dashboard {
            padding: 1rem;
          }

          .header {
            padding: 1.5rem;
          }

          .title {
            font-size: 1.8rem;
          }

          .left-panel, .right-panel {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="dashboard p-0">
        <div className="main-container">
          <div className="header">
            <h1 className="title">Top Picks Of The Day</h1>
            <span className="beta-badge">Beta</span>
          </div>

          <div className="content content-dahbaord">
            {/* Left Panel - Tickers */}
            <div className="left-panel">
              <div className="tickers-header">
                <h3 className="tickers-title">Tickers</h3>
                <div className="refresh-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 12a8 8 0 018-8V2.5L14.5 5 12 7.5V6a6 6 0 100 12 6 6 0 006-6h2a8 8 0 01-16 0z" />
                  </svg>
                </div>
              </div>

              <div className="timeframe-tabs">
                {["1 Hour", "4 Hours", "1 Day"].map((timeframe) => (
                  <button
                    key={timeframe}
                    className={`tab ${
                      activeTimeframe === timeframe ? "active" : ""
                    }`}
                    onClick={() => setActiveTimeframe(timeframe)}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>

              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  Loading tickers...
                </div>
              ) : (
                <div className="tickers-list">
                  {tickerData.map((ticker) => (
                    <div
                      key={ticker.symbol}
                      className={`ticker-item ${
                        selectedTicker?.symbol === ticker.symbol
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedTicker(ticker);
                        setSentimentScore(ticker.sentimentScore);
                        setNewsSentiment(ticker.newsSentimentScore);
                      }}
                    >
                      <div className="ticker-symbol">{ticker.symbol}</div>
                      <div className="company-name">{ticker.company}</div>
                      <div className="price-info">
                        <span className="price">${ticker.price}</span>
                        <span
                          className={`change ${
                            parseFloat(ticker.change) >= 0
                              ? "positive"
                              : "negative"
                          }`}
                        >
                          {parseFloat(ticker.change) >= 0 ? "+" : ""}
                          {parseFloat(ticker.change).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Panel - Details */}
            <div className="right-panel">
              {selectedTicker && (
                <>
                  <div className="ticker-header">
                    <h2 className="ticker-title">
                      {selectedTicker.symbol} {selectedTicker.company}
                    </h2>
                    <Link to={`/trading-tools?symbol=${selectedTicker.symbol}`}>
                      <button className="full-info-btn">
                        FULL {selectedTicker.symbol} INFO
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>

                  <div className="sentiments-section">
                    <div className="sentiment-gauge">
                      <h3 className="gauge-title">Sentiments</h3>
                      <p className="ai-scoring">A.I. Scoring</p>

                      <div className="gauge-container">
                        <div className="gauge-circle">
                          <div className="gauge-inner">
                            <div className="gauge-value">
                              {sentimentScore
                                ? `${sentimentScore.toFixed(2)}%`
                                : "--"}
                            </div>
                            <div className="sentiment-label">
                              {selectedTicker?.sentimentLabel || "Neutral"}
                            </div>

                            {/* <div className="gauge-value">85.71%</div> */}
                          </div>
                        </div>
                      </div>

                      {/* <div className="sentiment-label">Bullish</div>
                       */}
                      <div className="sentiment-label">
                        {selectedTicker?.sentimentLabel || ""}
                      </div>

                      {/* <div className="sentiment-tabs">
                        <button className="sentiment-tab">1 Hour</button>
                        <button className="sentiment-tab">4 Hour</button>
                        <button className="sentiment-tab">1 Day</button>
                      </div> */}
                    </div>

                    <div className="news-gauge">
                      <h3 className="news-title">News Sentiment</h3>
                      <div className="news-meter">
                        <div className="news-needle"></div>
                      </div>
                      <div className="news-value">
                        {newsSentiment
                          ? `${parseFloat(newsSentiment).toFixed(2)}`
                          : "--"}
                      </div>
                    </div>
                  </div>

                  <div className="contracts-section">
                    <div className="contracts-header">Popular Contracts</div>
                    <table className="contracts-table">
                      <thead>
                        <tr>
                          <th>
                            Contract
                            <span className="sort-indicator">1</span>
                          </th>
                          <th>C/P</th>
                          <th>Strike</th>
                          <th>Price</th>
                          <th>Expiry</th>
                          <th>
                            Volume
                            <span className="sort-indicator">2</span>
                          </th>
                          <th>ITM%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contractsData.map((contract, index) => (
                          <tr key={index}>
                            <td>{contract.contract}</td>
                            <td>{contract.type}</td>
                            <td>{contract.strike}</td>
                            <td>{contract.price}</td>
                            <td>{contract.expiry}</td>
                            <td>{contract.volume}</td>
                            <td className="itm-percentage">{contract.itm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
