// import { useState } from "react";

// const API_KEY = "04RGF1U9PAJ49VYI";

// const StockTicker = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [stockData, setStockData] = useState(null);
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isNewsLoading, setIsNewsLoading] = useState(false); // Added this line
//   const [error, setError] = useState("");

//   const fetchStock = async (symbol) => {
//     if (!symbol) return;

//     setIsLoading(true);
//     setError("");
//     setNewsArticles([]);

//     try {
//       const res = await fetch(
//         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
//       );
//       const data = await res.json();

//       if (
//         data["Global Quote"] &&
//         Object.keys(data["Global Quote"]).length > 0
//       ) {
//         const quote = data["Global Quote"];

//         setStockData({
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: quote["10. change percent"].replace("%", ""),
//           open: parseFloat(quote["02. open"]).toFixed(4),
//           high: parseFloat(quote["03. high"]).toFixed(4),
//           low: parseFloat(quote["04. low"]).toFixed(4),
//           volume: quote["06. volume"],
//           prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
//           companyName: getCompanyName(quote["01. symbol"]),
//         });

//         fetchNews(symbol);
//       } else {
//         setError("Stock not found");
//         setStockData(null);
//       }
//     } catch (err) {
//       setError("Failed to fetch stock data");
//       setStockData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchNews = async (symbol) => {
//     setIsNewsLoading(true); // Added this line
//     try {
//       const res = await fetch(
//         `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${API_KEY}`
//       );
//       const data = await res.json();
//       const feed = data.feed || [];
//       setNewsArticles(feed.slice(0, 5));
//     } catch (err) {
//       console.error("Failed to fetch news", err);
//     } finally {
//       setIsNewsLoading(false); // Added this line
//     }
//   };

//   const getCompanyName = (symbol) => {
//     const companies = {
//       AAPL: "Apple Inc.",
//       MSFT: "Microsoft Corp.",
//       GOOGL: "Alphabet Inc.",
//       AMZN: "Amazon.com Inc.",
//       META: "Meta Platforms Inc.",
//       TSLA: "Tesla Inc.",
//       NVDA: "NVIDIA Corp.",
//       JPM: "JPMorgan Chase & Co.",
//     };
//     return companies[symbol] || "${symbol} Stock";
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       fetchStock(searchQuery.trim().toUpperCase());
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleBack = () => {
//     setStockData(null);
//     setSearchQuery("");
//     setNewsArticles([]);
//   };

//   return (
//     <div className={`stock-ticker p-0 ${stockData ? "expanded" : ""}`}>
//       <style>
//         {`
//           @keyframes newsLoadingSpin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//           @keyframes newsPulse {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0.5; }
//           }
//           @keyframes newsSlideIn {
//             0% { transform: translateY(20px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }
//           .news-loading-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             padding: 40px 20px;
//             background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
//             border-radius: 12px;
//             margin: 20px 0;
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//           }
//           .news-loading-spinner {
//             width: 40px;
//             height: 40px;
//             border: 4px solid #e2e8f0;
//             border-top: 4px solid #3b82f6;
//             border-radius: 50%;
//             animation: newsLoadingSpin 1s linear infinite;
//             margin-bottom: 16px;
//           }
//           .news-loading-text {
//             color: #64748b;
//             font-size: 16px;
//             font-weight: 500;
//             animation: newsPulse 2s ease-in-out infinite;
//             text-align: center;
//           }
//           .news-loading-dots {
//             display: inline-block;
//             width: 20px;
//             text-align: left;
//           }
//           .news-loading-dots::after {
//             content: '';
//             animation: newsLoadingDots 1.5s infinite;
//           }
//           @keyframes newsLoadingDots {
//             0%, 20% { content: ''; }
//             40% { content: '.'; }
//             60% { content: '..'; }
//             80%, 100% { content: '...'; }
//           }
//           .news-article {
//             animation: newsSlideIn 0.5s ease-out;
//           }
//         `}
//       </style>

//       {!stockData ? (
//         <div className="search-only-container">
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>
//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}
//         </div>
//       ) : (
//         <>
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>

//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}

//           <div className="stock-details">
//             <div className="back-link" onClick={handleBack}></div>

//             <div className="stock-header">
//               <div className="column headers">
//                 <div>Symbol</div>
//                 <div>Trend</div>
//                 <div>Price</div>
//               </div>

//               <div className="column data">
//                 <div className="symbol-container">
//                   <div className="close-button" onClick={handleBack}>
//                     ×
//                   </div>
//                   <div className="symbol">{stockData.symbol}</div>
//                   <div className="company-name">{stockData.companyName}</div>
//                 </div>

//                 <div className="trend">
//                   <svg
//                     viewBox="0 0 100 30"
//                     className={
//                       parseFloat(stockData.change) >= 0
//                         ? "trend-up"
//                         : "trend-down"
//                     }
//                   >
//                     <path
//                       d={
//                         parseFloat(stockData.change) >= 0
//                           ? "M0,20 Q25,15 50,10 T100,5"
//                           : "M0,5 Q25,10 50,15 T100,20"
//                       }
//                     />
//                   </svg>
//                 </div>

//                 <div className="price-container">
//                   <div className="price">${stockData.price}</div>
//                   <div
//                     className={`change ${
//                       parseFloat(stockData.change) >= 0
//                         ? "positive"
//                         : "negative"
//                     }`}
//                   >
//                     {parseFloat(stockData.change) >= 0 ? "+" : ""}
//                     {stockData.changePercent}%
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="stock-details-rows">
//               <div className="detail-row">
//                 <div className="detail-label">Open:</div>
//                 <div className="detail-value">${stockData.open}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">High:</div>
//                 <div className="detail-value">${stockData.high}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Low:</div>
//                 <div className="detail-value">${stockData.low}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Volume:</div>
//                 <div className="detail-value">
//                   {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
//                 </div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Prev Close:</div>
//                 <div className="detail-value">${stockData.prevClose}</div>
//               </div>
//             </div>

//             <div className="news-section-ticker">
//               <h4 className="news-title">Latest News on {stockData.symbol}</h4>

//               {/* Added beautiful loading animation */}
//               {isNewsLoading ? (
//                 <div className="news-loading-container">
//                   <div className="news-loading-spinner"></div>
//                   <div className="news-loading-text">
//                     Loading latest news
//                     <span className="news-loading-dots"></span>
//                   </div>
//                 </div>
//               ) : newsArticles.length > 0 ? (
//                 newsArticles.map((article, index) => (
//                   <div key={index} className="news-article">
//                     <div className="news-headline">
//                       <a
//                         href={article.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {article.title}
//                       </a>
//                     </div>
//                     <div className="news-meta">
//                       <span>
//                         {new Date(article.time_published).toLocaleString()}
//                       </span>
//                       <span className="news-source"> | {article.source}</span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div
//                   style={{
//                     padding: "20px",
//                     textAlign: "center",
//                     color: "#666",
//                     fontStyle: "italic",
//                   }}
//                 >
//                   No news articles found for {stockData.symbol}
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default StockTicker;

// ================
// // import { useState } from "react";

// // const API_KEY = "04RGF1U9PAJ49VYI";

// // const StockTicker = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [stockData, setStockData] = useState(null);
// //   const [newsArticles, setNewsArticles] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isNewsLoading, setIsNewsLoading] = useState(false); // Added this line
// //   const [error, setError] = useState("");

// //   const fetchStock = async (symbol) => {
// //     if (!symbol) return;

// //     setIsLoading(true);
// //     setError("");
// //     setNewsArticles([]);

// //     try {
// //       const res = await fetch(
// //         https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}
// //       );
// //       const data = await res.json();

// //       if (
// //         data["Global Quote"] &&
// //         Object.keys(data["Global Quote"]).length > 0
// //       ) {
// //         const quote = data["Global Quote"];

// //         setStockData({
// //           symbol: quote["01. symbol"],
// //           price: parseFloat(quote["05. price"]).toFixed(2),
// //           change: parseFloat(quote["09. change"]).toFixed(2),
// //           changePercent: quote["10. change percent"].replace("%", ""),
// //           open: parseFloat(quote["02. open"]).toFixed(4),
// //           high: parseFloat(quote["03. high"]).toFixed(4),
// //           low: parseFloat(quote["04. low"]).toFixed(4),
// //           volume: quote["06. volume"],
// //           prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
// //           companyName: getCompanyName(quote["01. symbol"]),
// //         });

// //         fetchNews(symbol);
// //       } else {
// //         setError("Stock not found");
// //         setStockData(null);
// //       }
// //     } catch (err) {
// //       setError("Failed to fetch stock data");
// //       setStockData(null);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const fetchNews = async (symbol) => {
// //     setIsNewsLoading(true); // Added this line
// //     try {
// //       const res = await fetch(
// //         https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${API_KEY}
// //       );
// //       const data = await res.json();
// //       const feed = data.feed || [];
// //       setNewsArticles(feed.slice(0, 5));
// //     } catch (err) {
// //       console.error("Failed to fetch news", err);
// //     } finally {
// //       setIsNewsLoading(false); // Added this line
// //     }
// //   };

// //   const getCompanyName = (symbol) => {
// //     const companies = {
// //       AAPL: "Apple Inc.",
// //       MSFT: "Microsoft Corp.",
// //       GOOGL: "Alphabet Inc.",
// //       AMZN: "Amazon.com Inc.",
// //       META: "Meta Platforms Inc.",
// //       TSLA: "Tesla Inc.",
// //       NVDA: "NVIDIA Corp.",
// //       JPM: "JPMorgan Chase & Co.",
// //     };
// //     return companies[symbol] || "${symbol} Stock";
// //   };

// //   const handleSearch = () => {
// //     if (searchQuery.trim()) {
// //       fetchStock(searchQuery.trim().toUpperCase());
// //     }
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       handleSearch();
// //     }
// //   };

// //   const handleBack = () => {
// //     setStockData(null);
// //     setSearchQuery("");
// //     setNewsArticles([]);
// //   };

// //   return (
// //     <div className={stock-ticker p-0 ${stockData ? "expanded" : ""}}>
// //       <style>
// //         {`
// //           @keyframes newsLoadingSpin {
// //             0% { transform: rotate(0deg); }
// //             100% { transform: rotate(360deg); }
// //           }
// //           @keyframes newsPulse {
// //             0%, 100% { opacity: 1; }
// //             50% { opacity: 0.5; }
// //           }
// //           @keyframes newsSlideIn {
// //             0% { transform: translateY(20px); opacity: 0; }
// //             100% { transform: translateY(0); opacity: 1; }
// //           }
// //           .news-loading-container {
// //             display: flex;
// //             flex-direction: column;
// //             align-items: center;
// //             justify-content: center;
// //             padding: 40px 20px;
// //             background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
// //             border-radius: 12px;
// //             margin: 20px 0;
// //             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
// //           }
// //           .news-loading-spinner {
// //             width: 40px;
// //             height: 40px;
// //             border: 4px solid #e2e8f0;
// //             border-top: 4px solid #3b82f6;
// //             border-radius: 50%;
// //             animation: newsLoadingSpin 1s linear infinite;
// //             margin-bottom: 16px;
// //           }
// //           .news-loading-text {
// //             color: #64748b;
// //             font-size: 16px;
// //             font-weight: 500;
// //             animation: newsPulse 2s ease-in-out infinite;
// //             text-align: center;
// //           }
// //           .news-loading-dots {
// //             display: inline-block;
// //             width: 20px;
// //             text-align: left;
// //           }
// //           .news-loading-dots::after {
// //             content: '';
// //             animation: newsLoadingDots 1.5s infinite;
// //           }
// //           @keyframes newsLoadingDots {
// //             0%, 20% { content: ''; }
// //             40% { content: '.'; }
// //             60% { content: '..'; }
// //             80%, 100% { content: '...'; }
// //           }
// //           .news-article {
// //             animation: newsSlideIn 0.5s ease-out;
// //           }
// //         `}
// //       </style>

// //       {!stockData ? (
// //         <div className="search-only-container">
// //           <div className="search-container">
// //             <input
// //               type="text"
// //               className="search-bar"
// //               placeholder="Search ticker (e.g., AMZN, AAPL)"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               onKeyDown={handleKeyDown}
// //             />
// //             <button className="search-button" onClick={handleSearch}>
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //               >
// //                 <circle cx="11" cy="11" r="8" />
// //                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
// //               </svg>
// //             </button>
// //           </div>
// //           {isLoading && <div className="loading">Loading...</div>}
// //           {error && <div className="error">{error}</div>}
// //         </div>
// //       ) : (
// //         <>
// //           <div className="search-container">
// //             <input
// //               type="text"
// //               className="search-bar"
// //               placeholder="Search ticker (e.g., AMZN, AAPL)"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               onKeyDown={handleKeyDown}
// //             />
// //             <button className="search-button" onClick={handleSearch}>
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //               >
// //                 <circle cx="11" cy="11" r="8" />
// //                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
// //               </svg>
// //             </button>
// //           </div>

// //           {isLoading && <div className="loading">Loading...</div>}
// //           {error && <div className="error">{error}</div>}

// //           <div className="stock-details">
// //             <div className="back-link" onClick={handleBack}></div>

// //             <div className="stock-header">
// //               <div className="column headers">
// //                 <div>Symbol</div>
// //                 <div>Trend</div>
// //                 <div>Price</div>
// //               </div>

// //               <div className="column data">
// //                 <div className="symbol-container">
// //                   <div className="close-button" onClick={handleBack}>
// //                     ×
// //                   </div>
// //                   <div className="symbol">{stockData.symbol}</div>
// //                   <div className="company-name">{stockData.companyName}</div>
// //                 </div>

// //                 <div className="trend">
// //                   <svg
// //                     viewBox="0 0 100 30"
// //                     className={
// //                       parseFloat(stockData.change) >= 0
// //                         ? "trend-up"
// //                         : "trend-down"
// //                     }
// //                   >
// //                     <path
// //                       d={
// //                         parseFloat(stockData.change) >= 0
// //                           ? "M0,20 Q25,15 50,10 T100,5"
// //                           : "M0,5 Q25,10 50,15 T100,20"
// //                       }
// //                     />
// //                   </svg>
// //                 </div>

// //                 <div className="price-container">
// //                   <div className="price">${stockData.price}</div>
// //                   <div
// //                     className={`change ${
// //                       parseFloat(stockData.change) >= 0
// //                         ? "positive"
// //                         : "negative"
// //                     }`}
// //                   >
// //                     {parseFloat(stockData.change) >= 0 ? "+" : ""}
// //                     {stockData.changePercent}%
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="stock-details-rows">
// //               <div className="detail-row">
// //                 <div className="detail-label">Open:</div>
// //                 <div className="detail-value">${stockData.open}</div>
// //               </div>
// //               <div className="detail-row">
// //                 <div className="detail-label">High:</div>
// //                 <div className="detail-value">${stockData.high}</div>
// //               </div>
// //               <div className="detail-row">
// //                 <div className="detail-label">Low:</div>
// //                 <div className="detail-value">${stockData.low}</div>
// //               </div>
// //               <div className="detail-row">
// //                 <div className="detail-label">Volume:</div>
// //                 <div className="detail-value">
// //                   {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
// //                 </div>
// //               </div>
// //               <div className="detail-row">
// //                 <div className="detail-label">Prev Close:</div>
// //                 <div className="detail-value">${stockData.prevClose}</div>
// //               </div>
// //             </div>

// //             <div className="news-section-ticker">
// //               <h4 className="news-title">Latest News on {stockData.symbol}</h4>

// //               {/* Added beautiful loading animation */}
// //               {isNewsLoading ? (
// //                 <div className="news-loading-container">
// //                   <div className="news-loading-spinner"></div>
// //                   <div className="news-loading-text">
// //                     Loading latest news
// //                     <span className="news-loading-dots"></span>
// //                   </div>
// //                 </div>
// //               ) : newsArticles.length > 0 ? (
// //                 newsArticles.map((article, index) => (
// //                   <div key={index} className="news-article">
// //                     <div className="news-headline">
// //                       <a
// //                         href={article.url}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         {article.title}
// //                       </a>
// //                     </div>
// //                     <div className="news-meta">
// //                       <span>
// //                         {new Date(article.time_published).toLocaleString()}
// //                       </span>
// //                       <span className="news-source"> | {article.source}</span>
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div
// //                   style={{
// //                     padding: "20px",
// //                     textAlign: "center",
// //                     color: "#666",
// //                     fontStyle: "italic",
// //                   }}
// //                 >
// //                   No news articles found for {stockData.symbol}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default StockTicker;

// import { useState } from "react";

// const API_KEY = "04RGF1U9PAJ49VYI";

// const StockTicker = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [stockData, setStockData] = useState(null);
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isNewsLoading, setIsNewsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleInputChange = async (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);

//     if (value.length < 1) {
//       setSuggestions([]);
//       setShowSuggestions(false);
//       return;
//     }

//     try {
//       const res = await fetch(
//         https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}
//       );
//       const data = await res.json();

//       if (data.bestMatches) {
//         setSuggestions(data.bestMatches.slice(0, 5));
//         setShowSuggestions(true);
//       } else {
//         setSuggestions([]);
//         setShowSuggestions(false);
//       }
//     } catch (err) {
//       console.error("Failed to fetch suggestions", err);
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   };

//   const fetchStock = async (symbol) => {
//     if (!symbol) return;

//     setIsLoading(true);
//     setError("");
//     setNewsArticles([]);
//     setSuggestions([]);
//     setShowSuggestions(false);

//     try {
//       const res = await fetch(
//         https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}
//       );
//       const data = await res.json();

//       if (data["Global Quote"] && Object.keys(data["Global Quote"]).length > 0) {
//         const quote = data["Global Quote"];

//         setStockData({
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: quote["10. change percent"].replace("%", ""),
//           open: parseFloat(quote["02. open"]).toFixed(4),
//           high: parseFloat(quote["03. high"]).toFixed(4),
//           low: parseFloat(quote["04. low"]).toFixed(4),
//           volume: quote["06. volume"],
//           prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
//           companyName: getCompanyName(quote["01. symbol"]),
//         });

//         fetchNews(symbol);
//       } else {
//         setError("Stock not found");
//         setStockData(null);
//       }
//     } catch (err) {
//       setError("Failed to fetch stock data");
//       setStockData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchNews = async (symbol) => {
//     setIsNewsLoading(true);
//     try {
//       const res = await fetch(
//         https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${API_KEY}
//       );
//       const data = await res.json();
//       const feed = data.feed || [];
//       setNewsArticles(feed.slice(0, 5));
//     } catch (err) {
//       console.error("Failed to fetch news", err);
//     } finally {
//       setIsNewsLoading(false);
//     }
//   };

//   const getCompanyName = (symbol) => {
//     const companies = {
//       AAPL: "Apple Inc.",
//       MSFT: "Microsoft Corp.",
//       GOOGL: "Alphabet Inc.",
//       AMZN: "Amazon.com Inc.",
//       META: "Meta Platforms Inc.",
//       TSLA: "Tesla Inc.",
//       NVDA: "NVIDIA Corp.",
//       JPM: "JPMorgan Chase & Co.",
//     };
//     return companies[symbol] || ${symbol} Stock;
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       fetchStock(searchQuery.trim().toUpperCase());
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleBack = () => {
//     setStockData(null);
//     setSearchQuery("");
//     setNewsArticles([]);
//   };

//   return (
//     <div className="stock-ticker max-w-xl mx-auto p-4">
//       <div className="relative">
//         <input
//           type="text"
//           className="w-full border p-2 rounded"
//           placeholder="Search ticker (e.g., AMZN, AAPL)"
//           value={searchQuery}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//         />
//         {showSuggestions && suggestions.length > 0 && (
//           <div className="absolute bg-white border w-full mt-1 rounded shadow z-50 max-h-60 overflow-y-auto">
//             {suggestions.map((sugg, index) => (
//               <div
//                 key={index}
//                 onClick={() => {
//                   const symbol = sugg["1. symbol"];
//                   setSearchQuery(symbol);
//                   fetchStock(symbol);
//                 }}
//                 className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
//               >
//                 <span className="font-medium text-blue-600">{sugg["1. symbol"]}</span>
//                 <span className="text-sm text-gray-600">{sugg["2. name"]}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {isLoading && <div className="text-center mt-4">Loading stock data...</div>}
//       {error && <div className="text-red-500 text-center mt-4">{error}</div>}

//       {stockData && (
//         <div className="mt-6 border p-4 rounded shadow-md bg-white">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-2xl font-bold">{stockData.symbol}</h2>
//               <p className="text-gray-600">{stockData.companyName}</p>
//             </div>
//             <button onClick={handleBack} className="text-red-500 text-xl font-bold">
//               ×
//             </button>
//           </div>

//           <div className="mt-4">
//             <div className="text-3xl font-bold">${stockData.price}</div>
//             <div
//               className={`mt-1 text-sm font-semibold ${
//                 parseFloat(stockData.change) >= 0 ? "text-green-600" : "text-red-500"
//               }`}
//             >
//               {parseFloat(stockData.change) >= 0 ? "+" : ""}
//               {stockData.change} ({stockData.changePercent}%)
//             </div>
//           </div>

//           <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
//             <div>Open: ${stockData.open}</div>
//             <div>High: ${stockData.high}</div>
//             <div>Low: ${stockData.low}</div>
//             <div>Volume: {stockData.volume}</div>
//             <div>Prev Close: ${stockData.prevClose}</div>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">
//               Latest News on {stockData.symbol}
//             </h3>
//             {isNewsLoading ? (
//               <div className="text-center text-gray-500">Loading news...</div>
//             ) : newsArticles.length > 0 ? (
//               <ul className="space-y-2">
//                 {newsArticles.map((article, i) => (
//                   <li key={i} className="border-b pb-2">
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-medium text-blue-600 hover:underline"
//                     >
//                       {article.title}
//                     </a>
//                     <div className="text-xs text-gray-500">
//                       {new Date(article.time_published).toLocaleString()} |{" "}
//                       {article.source}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <div className="text-gray-500 italic">No recent news found.</div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockTicker;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "04RGF1U9PAJ49VYI";

export default function SearchStockBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

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
      console.log("Alpha Vantage Response:", data);

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
    navigate(`/trading-tools?symbol=${symbol}`);
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  const styles = {
    searchContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto",
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
      border: "2px solid #e5e7eb",
      borderRadius: "16px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: "all 0.2s ease",
      overflow: "hidden",
    },
    searchInputGroupFocus: {
      borderColor: "#3b82f6",
      boxShadow:
        "0 0 0 3px rgba(59, 130, 246, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transform: "translateY(-1px)",
    },
    searchIcon: {
      position: "absolute",
      left: "16px",
      width: "20px",
      height: "20px",
      color: "#6b7280",
      zIndex: 1,
    },
    searchInput: {
      width: "100%",
      padding: "16px 60px 16px 48px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      background: "transparent",
      color: "#1f2937",
      fontWeight: "500",
    },
    resultsDropdown: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: 0,
      right: 0,
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "16px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      zIndex: 50,
      maxHeight: "320px",
      overflowY: "auto",
      animation: "fadeIn 0.2s ease-out",
    },
    resultItem: {
      display: "flex",
      alignItems: "center",
      padding: "16px",
      cursor: "pointer",
      borderBottom: "1px solid #f3f4f6",
      transition: "all 0.2s ease",
      gap: "12px",
    },
    resultItemHover: {
      background: "#f8fafc",
      transform: "translateX(4px)",
    },
    resultIcon: {
      width: "24px",
      height: "24px",
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
      gap: "12px",
      marginBottom: "4px",
    },
    resultSymbol: {
      fontWeight: "700",
      color: "#1f2937",
      fontSize: "16px",
    },
    resultName: {
      fontSize: "14px",
      color: "#4b5563",
      fontWeight: "500",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "200px",
    },
    resultDetails: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    resultType: {
      background: "#dbeafe",
      color: "#1d4ed8",
      padding: "2px 8px",
      borderRadius: "12px",
      fontSize: "11px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    resultArrow: {
      width: "16px",
      height: "16px",
      color: "#9ca3af",
      flexShrink: 0,
      opacity: 0,
      transition: "opacity 0.2s ease",
    },
    resultArrowVisible: {
      opacity: 1,
    },
  };

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .search-input::placeholder {
            color: #9ca3af;
            font-weight: 400;
          }
          
          .results-dropdown::-webkit-scrollbar {
            width: 6px;
          }
          
          .results-dropdown::-webkit-scrollbar-track {
            background: #f1f5f9;
          }
          
          .results-dropdown::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
          }
          
          .results-dropdown::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
          
          @media (max-width: 640px) {
            .search-container {
              max-width: 100% !important;
              margin: 0 16px !important;
            }
            
            .search-input {
              font-size: 16px !important;
              padding: 14px 50px 14px 44px !important;
            }
            
            .search-icon {
              left: 14px !important;
              width: 18px !important;
              height: 18px !important;
            }
            
            .result-item {
              padding: 14px !important;
            }
            
            .result-name {
              max-width: 150px !important;
            }
          }
        `}
      </style>

      <div style={styles.searchContainer} className="search-container">
        <div style={styles.searchWrapper}>
          <div style={styles.searchInputGroup}>
            <div style={styles.searchIcon} className="search-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>

            <input
              type="text"
              value={query}
              placeholder="Search stocks (e.g., AAPL, AMZN, TSLA)"
              onChange={(e) => fetchSuggestions(e.target.value)}
              style={styles.searchInput}
              className="search-input"
            />
          </div>

          {showResults && results.length > 0 && (
            <div style={styles.resultsDropdown} className="results-dropdown">
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
                  className="result-item"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <div style={styles.resultIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                    </svg>
                  </div>

                  <div style={styles.resultContent}>
                    <div style={styles.resultMain}>
                      <span
                        style={styles.resultSymbol}
                        className="result-symbol"
                      >
                        {s["1. symbol"]}
                      </span>
                      <span style={styles.resultName} className="result-name">
                        {s["2. name"]}
                      </span>
                    </div>
                    <div style={styles.resultDetails}>
                      <span style={styles.resultType}>{s["3. type"]}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.resultArrow,
                      ...(hoveredIndex === i ? styles.resultArrowVisible : {}),
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
