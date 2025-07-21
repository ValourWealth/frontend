// import axios from "axios";
// import { useEffect, useState } from "react";
// import ViewJournalDetails from "./ViewJournalDetails";

// const JournalEntryShimmer = () => {
//   return (
//     <div className="journal-entry-card-shimmer">
//       <div className="entry-header-shimmer">
//         <div className="entry-symbol-shimmer animate"></div>
//         <div className="entry-type-shimmer animate"></div>
//         <div className="entry-result-shimmer animate"></div>
//       </div>

//       <div className="entry-details-shimmer">
//         <div className="detail-item-shimmer">
//           <div className="detail-label-shimmer animate"></div>
//           <div className="detail-value-shimmer animate"></div>
//         </div>
//         <div className="detail-item-shimmer">
//           <div className="detail-label-shimmer animate"></div>
//           <div className="detail-value-shimmer animate"></div>
//         </div>
//         <div className="detail-item-shimmer">
//           <div className="detail-label-shimmer animate"></div>
//           <div className="detail-value-shimmer animate"></div>
//         </div>
//       </div>

//       <div className="entry-lesson-shimmer">
//         <div className="lesson-header-shimmer animate"></div>
//         <div className="lesson-text-shimmer animate"></div>
//         <div className="lesson-text-shimmer short animate"></div>
//       </div>

//       <div className="view-details-button-shimmer animate"></div>
//     </div>
//   );
// };

// const JournalLoadingShimmer = () => {
//   return (
//     <div className="journal-shimmer-container">
//       <div className="shimmer-wrapper">
//         <JournalEntryShimmer />
//         <JournalEntryShimmer />
//         <JournalEntryShimmer />
//       </div>
//     </div>
//   );
// };

// // Spinner Component for showing the loading animation
// const Spinner = () => {
//   return (
//     <div className="spinner-box">
//       <div className="configure-border-1">
//         <div className="configure-core"></div>
//       </div>
//       <div className="configure-border-2">
//         <div className="configure-core"></div>
//       </div>
//     </div>
//   );
// };

// const TradeJournal = () => {
//   const [showJournalForm, setShowJournalForm] = useState(false);
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [selectedEntry, setSelectedEntry] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Track loading state

//   const [formData, setFormData] = useState({
//     symbol: "",
//     tradeType: "long",
//     entryDate: "",
//     entryPrice: "",
//     exitDate: "",
//     exitPrice: "",
//     positionSize: "",
//     riskRewardRatio: "",
//     stopLoss: "",
//     takeProfit: "",
//     entryReason: "",
//     exitReason: "",
//     emotionalState: "",
//     marketConditions: "",
//     whatWentWell: "",
//     whatWentWrong: "",
//     lessonsLearned: "",
//     additionalNotes: "",
//   });

//   const handleViewDetails = (entry) => {
//     setSelectedEntry(entry);
//     setIsModalOpen(true);
//   };

//   const handleCloseDetails = () => {
//     setSelectedEntry(null);
//     setIsModalOpen(false);
//   };

//   const API_BASE = process.env.REACT_APP_API_URL;
//   const API_URL = `${API_BASE}api/trade-journal/`;
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     const fetchEntries = async () => {
//       setIsLoading(true); // Start loading
//       try {
//         const res = await axios.get(API_URL, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setJournalEntries(res.data);
//       } catch (err) {
//         console.error("Error fetching journal entries:", err);
//       } finally {
//         setIsLoading(false); // End loading
//       }
//     };
//     fetchEntries();
//   }, []);

//   const handleOpenForm = () => setShowJournalForm(true);

//   const handleCloseForm = () => {
//     setShowJournalForm(false);
//     setFormData({
//       symbol: "",
//       tradeType: "long",
//       entryDate: "",
//       entryPrice: "",
//       exitDate: "",
//       exitPrice: "",
//       positionSize: "",
//       riskRewardRatio: "",
//       stopLoss: "",
//       takeProfit: "",
//       entryReason: "",
//       exitReason: "",
//       emotionalState: "",
//       marketConditions: "",
//       whatWentWell: "",
//       whatWentWrong: "",
//       lessonsLearned: "",
//       additionalNotes: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       symbol: formData.symbol,
//       trade_type: formData.tradeType,
//       entry_date: formData.entryDate,
//       entry_price: parseFloat(formData.entryPrice),
//       exit_date: formData.exitDate,
//       exit_price: parseFloat(formData.exitPrice),
//       position_size: parseInt(formData.positionSize),
//       risk_reward_ratio: formData.riskRewardRatio,
//       stop_loss: formData.stopLoss ? parseFloat(formData.stopLoss) : null,
//       take_profit: formData.takeProfit ? parseFloat(formData.takeProfit) : null,
//       entry_reason: formData.entryReason,
//       exit_reason: formData.exitReason,
//       emotional_state: formData.emotionalState,
//       market_conditions: formData.marketConditions,
//       what_went_well: formData.whatWentWell,
//       what_went_wrong: formData.whatWentWrong,
//       lessons_learned: formData.lessonsLearned,
//       additional_notes: formData.additionalNotes,
//     };

//     setIsLoading(true); // Show spinner while submitting
//     try {
//       const res = await axios.post(API_URL, payload, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setJournalEntries((prev) => [res.data, ...prev]);
//       handleCloseForm();
//     } catch (err) {
//       console.error("Failed to save journal entry:", err.response?.data || err);
//       alert("Failed to save journal entry. Check required fields.");
//     } finally {
//       setIsLoading(false); // Hide spinner after submission
//     }
//   };

//   const calculateProfitLoss = (entry) => {
//     const entryPrice = parseFloat(entry.entry_price);
//     const exitPrice = parseFloat(entry.exit_price);
//     const positionSize = parseInt(entry.position_size);
//     let profitLoss = 0;
//     let profitLossPercentage = 0;
//     if (entry.trade_type === "long") {
//       profitLoss = (exitPrice - entryPrice) * positionSize;
//       profitLossPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
//     } else {
//       profitLoss = (entryPrice - exitPrice) * positionSize;
//       profitLossPercentage = ((entryPrice - exitPrice) / entryPrice) * 100;
//     }
//     return {
//       profitLoss: profitLoss.toFixed(2),
//       profitLossPercentage: profitLossPercentage.toFixed(2),
//     };
//   };

//   return (
//     <div className="trade-journal-container">
//       <div className="journal-header">
//         <h1>Trade Journal</h1>
//         <p>
//           Track your trades, analyze your performance, and improve your trading
//           strategy
//         </p>
//         <button className="add-entry-button" onClick={handleOpenForm}>
//           <i className="bi bi-plus-lg"></i> Add New Trade
//         </button>
//       </div>

//       {isLoading && showJournalForm ? (
//         <Spinner /> // Show spinner while submitting form
//       ) : showJournalForm ? (
//         <div className="journal-form-overlay">
//           <div className="journal-form-container">
//             <div className="form-header">
//               <h2>New Trade Entry</h2>
//               <button className="close-button" onClick={handleCloseForm}>
//                 <i className="bi bi-x-lg"></i>
//               </button>
//             </div>
//             <form className="trade-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Symbol</label>
//                 <input
//                   name="symbol"
//                   value={formData.symbol}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Trade Type</label>
//                 <select
//                   name="tradeType"
//                   value={formData.tradeType}
//                   onChange={handleInputChange}
//                 >
//                   <option value="long">Long</option>
//                   <option value="short">Short</option>
//                 </select>
//                 <label>Entry Date</label>
//                 <input
//                   type="date"
//                   name="entryDate"
//                   value={formData.entryDate}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Entry Price</label>
//                 <input
//                   type="number"
//                   step="0.0001"
//                   name="entryPrice"
//                   value={formData.entryPrice}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Exit Date</label>
//                 <input
//                   type="date"
//                   name="exitDate"
//                   value={formData.exitDate}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Exit Price</label>
//                 <input
//                   type="number"
//                   step="0.0001"
//                   name="exitPrice"
//                   value={formData.exitPrice}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Position Size</label>
//                 <input
//                   type="number"
//                   name="positionSize"
//                   value={formData.positionSize}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Risk/Reward Ratio</label>
//                 <input
//                   name="riskRewardRatio"
//                   value={formData.riskRewardRatio}
//                   onChange={handleInputChange}
//                 />
//                 <label>Stop Loss</label>
//                 <input
//                   type="number"
//                   name="stopLoss"
//                   step="0.0001"
//                   value={formData.stopLoss}
//                   onChange={handleInputChange}
//                 />
//                 <label>Take Profit</label>
//                 <input
//                   type="number"
//                   name="takeProfit"
//                   step="0.0001"
//                   value={formData.takeProfit}
//                   onChange={handleInputChange}
//                 />
//                 <label>Entry Reason</label>
//                 <textarea
//                   name="entryReason"
//                   value={formData.entryReason}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Exit Reason</label>
//                 <textarea
//                   name="exitReason"
//                   value={formData.exitReason}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Emotional State</label>
//                 <textarea
//                   name="emotionalState"
//                   value={formData.emotionalState}
//                   onChange={handleInputChange}
//                 />
//                 <label>Market Conditions</label>
//                 <textarea
//                   name="marketConditions"
//                   value={formData.marketConditions}
//                   onChange={handleInputChange}
//                 />
//                 <label>What Went Well</label>
//                 <textarea
//                   name="whatWentWell"
//                   value={formData.whatWentWell}
//                   onChange={handleInputChange}
//                 />
//                 <label>What Went Wrong</label>
//                 <textarea
//                   name="whatWentWrong"
//                   value={formData.whatWentWrong}
//                   onChange={handleInputChange}
//                 />
//                 <label>Lessons Learned</label>
//                 <textarea
//                   name="lessonsLearned"
//                   value={formData.lessonsLearned}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label>Additional Notes</label>
//                 <textarea
//                   name="additionalNotes"
//                   value={formData.additionalNotes}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-actions">
//                 <button
//                   type="button"
//                   className="cancel-button"
//                   onClick={handleCloseForm}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="submit-button">
//                   Save Trade
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <div className="journal-entries-container">
//           {isLoading ? (
//             <JournalLoadingShimmer /> // Show shimmer within entries container
//           ) : journalEntries.length === 0 ? (
//             <div className="no-entries">
//               <i className="bi bi-journal-text"></i>
//               <h2>No journal entries yet</h2>
//               <p>
//                 Start tracking your trades by clicking the "Add New Trade"
//                 button above.
//               </p>
//             </div>
//           ) : (
//             <div className="entries-list">
//               {journalEntries.map((entry) => {
//                 const { profitLoss, profitLossPercentage } =
//                   calculateProfitLoss(entry);
//                 return (
//                   <div key={entry.id} className="journal-entry-card">
//                     <div className="entry-header">
//                       <div className="entry-symbol">{entry.symbol}</div>
//                       <div className={`entry-type ${entry.trade_type}`}>
//                         {entry.trade_type.toUpperCase()}
//                       </div>
//                       <div
//                         className={`entry-result ${
//                           profitLoss >= 0 ? "profit" : "loss"
//                         }`}
//                       >
//                         {profitLoss >= 0 ? "+" : ""}
//                         {profitLoss} ({profitLossPercentage}%)
//                       </div>
//                     </div>
//                     <div className="entry-details">
//                       <div className="detail-item">
//                         <span className="detail-label">Entry:</span>
//                         <span className="detail-value">
//                           {entry.entry_price} on{" "}
//                           {new Date(entry.entry_date).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="detail-item">
//                         <span className="detail-label">Exit:</span>
//                         <span className="detail-value">
//                           {entry.exit_price} on{" "}
//                           {new Date(entry.exit_date).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="detail-item">
//                         <span className="detail-label">Size:</span>
//                         <span className="detail-value">
//                           {entry.position_size}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="entry-lesson">
//                       <strong>Lesson:</strong>{" "}
//                       {entry.lessons_learned.slice(0, 100)}
//                       {entry.lessons_learned.length > 100 ? "..." : ""}
//                     </div>
//                     <button
//                       className="view-details-button"
//                       onClick={() =>
//                         handleViewDetails({
//                           ...entry,
//                           profitLoss: parseFloat(
//                             calculateProfitLoss(entry).profitLoss
//                           ),
//                           profitLossPercentage: parseFloat(
//                             calculateProfitLoss(entry).profitLossPercentage
//                           ),
//                         })
//                       }
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 );
//               })}

//               {isModalOpen && selectedEntry && (
//                 <ViewJournalDetails
//                   isOpen={isModalOpen}
//                   onClose={handleCloseDetails}
//                   entry={selectedEntry}
//                 />
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Journal Shimmer Styles */}
//       <style>{`
//         /* Shimmer Container */
//         .journal-shimmer-container {
//           width: 100%;
//           max-width: none;
//         }

//         .shimmer-wrapper {
//           width: 0px;
//           animation: fullView 0.5s forwards linear;
//         }

//         /* Journal Entry Card Shimmer */
//         .journal-entry-card-shimmer {
//           background: #2a2a2a;
//           border: 1px solid #3a3a3a;
//           border-radius: 12px;
//           padding: 20px;
//           margin-bottom: 16px;
//         }

//         /* Entry Header Shimmer */
//         .entry-header-shimmer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 16px;
//         }

//         .entry-symbol-shimmer {
//           width: 80px;
//           height: 20px;
//           background: #3a3a3a;
//           border-radius: 6px;
//         }

//         .entry-type-shimmer {
//           width: 50px;
//           height: 18px;
//           background: #3a3a3a;
//           border-radius: 12px;
//         }

//         .entry-result-shimmer {
//           width: 120px;
//           height: 20px;
//           background: #3a3a3a;
//           border-radius: 6px;
//         }

//         /* Entry Details Shimmer */
//         .entry-details-shimmer {
//           margin-bottom: 16px;
//         }

//         .detail-item-shimmer {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 8px;
//         }

//         .detail-label-shimmer {
//           width: 60px;
//           height: 14px;
//           background: #3a3a3a;
//           border-radius: 4px;
//         }

//         .detail-value-shimmer {
//           width: 150px;
//           height: 14px;
//           background: #3a3a3a;
//           border-radius: 4px;
//         }

//         /* Entry Lesson Shimmer */
//         .entry-lesson-shimmer {
//           margin-bottom: 16px;
//         }

//         .lesson-header-shimmer {
//           width: 60px;
//           height: 16px;
//           background: #3a3a3a;
//           border-radius: 4px;
//           margin-bottom: 8px;
//         }

//         .lesson-text-shimmer {
//           height: 14px;
//           background: #3a3a3a;
//           border-radius: 4px;
//           margin-bottom: 6px;
//           width: 100%;
//         }

//         .lesson-text-shimmer.short {
//           width: 70%;
//         }

//         /* View Details Button Shimmer */
//         .view-details-button-shimmer {
//           width: 100px;
//           height: 32px;
//           background: #3a3a3a;
//           border-radius: 6px;
//         }

//         /* Animation */
//         @keyframes fullView {
//           100% {
//             width: 100%;
//           }
//         }

//         .animate {
//           animation: shimmer 2s infinite;
//           background: linear-gradient(
//             90deg,
//             #3a3a3a 0%,
//             #4a4a4a 50%,
//             #3a3a3a 100%
//           );
//           background-size: 200% 100%;
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TradeJournal;

import { useState } from "react";
import AddTradeModal from "./AddTradeModel";

import {
  Activity,
  AlertCircle,
  ArrowDownRight,
  BarChart3,
  Calendar,
  CheckCircle,
  DollarSign,
  Download,
  Plus,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";

const Journal = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState("dashboard");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const portfolioMetrics = {
    totalProfitLoss: 7881.0,
    successRate: 90.0,
    totalExecutedTrades: 10,
    averageWinningTrade: 949.56,
    averageLosingTrade: 665.0,
    riskRewardRatio: 1.43,
    successfulTrades: 9,
    failedTrades: 1,
    latestTradeActivity: [
      {
        ticker: "AAPL",
        position: "LONG",
        tradeDate: "18/01/2024",
        profitAmount: 730.0,
      },
      {
        ticker: "NVDA",
        position: "LONG",
        tradeDate: "16/01/2024",
        profitAmount: 1637.5,
      },
      {
        ticker: "BTC-USD",
        position: "LONG",
        tradeDate: "14/01/2024",
        profitAmount: 1350.0,
      },
    ],
  };

  const [journalEntries, setJournalEntries] = useState([
    {
      ticker: "AAPL",
      positionType: "LONG",
      tradingTags: [
        "breakout",
        "tech",
        "swing",
        "high-confidence",
        "earnings-play",
      ],
      openPrice: 185.5,
      closePrice: 192.8,
      shareQuantity: 100,
      holdingPeriod: "3 days",
      netProfit: 730.0,
      tradeNotes:
        "Strong breakout above resistance with high volume. Held through earnings announcement.",
    },
    {
      ticker: "NVDA",
      positionType: "LONG",
      tradingTags: ["ai-trend", "momentum", "swing", "high-confidence", "tech"],
      openPrice: 825,
      closePrice: 890.5,
      shareQuantity: 25,
      holdingPeriod: "6 days",
      netProfit: 1637.5,
      tradeNotes:
        "AI momentum trade. Strong institutional buying. Exit at resistance level.",
    },
    {
      ticker: "BTC-USD",
      positionType: "LONG",
      tradingTags: ["crypto", "scalp", "btc-dominance", "medium-confidence"],
      openPrice: 42500,
      closePrice: 45200,
      shareQuantity: 0.5,
      holdingPeriod: "2 days",
      netProfit: 1350.0,
      tradeNotes: "Quick scalp on Bitcoin bounce off support. Tight stop loss.",
    },
  ]);

  const performanceAnalytics = {
    winLossBreakdown: {
      victories: 9,
      defeats: 1,
      victoryPercentage: 90.0,
      defeatPercentage: 10.0,
    },
    sidePerformanceData: {
      longPositions: {
        tradeCount: 8,
        winPercentage: 87.5,
        totalProfit: 7088.5,
      },
      shortPositions: { tradeCount: 2, winPercentage: 100, totalProfit: 792.5 },
    },
    symbolPerformanceData: [
      { ticker: "AAPL", tradeCount: 1, winPercentage: 100, totalProfit: 730.0 },
      {
        ticker: "NVDA",
        tradeCount: 1,
        winPercentage: 100,
        totalProfit: 1637.5,
      },
      {
        ticker: "BTC-USD",
        tradeCount: 1,
        winPercentage: 100,
        totalProfit: 1350.0,
      },
      { ticker: "TSLA", tradeCount: 1, winPercentage: 0, totalProfit: -665.0 },
      {
        ticker: "SPY-C-510",
        tradeCount: 1,
        winPercentage: 100,
        totalProfit: 2550.0,
      },
    ],
  };

  const tradingAnalysisData = {
    averageExitPerformance: 71.3,
    missedProfitOpportunities: 4142.5,
    optimalExitTrades: 4,
    earlyExitTrades: 1,
    exitPerformanceDistribution: {
      excellent: { count: 4, percentage: 40.0 },
      good: { count: 5, percentage: 50.0 },
      average: { count: 0, percentage: 0.0 },
      poor: { count: 1, percentage: 10.0 },
    },
    worstExitPerformers: [
      {
        ticker: "TSLA",
        position: "LONG",
        missedAmount: 990.0,
        exitPerformance: 28.0,
      },
    ],
    detailedExitAnalysis: [
      {
        ticker: "AAPL",
        side: "LONG",
        actualExit: 192.8,
        bestExit: 198.5,
        performance: 78.5,
        missedProfit: 570.0,
        reason:
          "Target reached at 1.618 Fibonacci extension. Took profits before weekend.",
      },
      {
        ticker: "NVDA",
        side: "LONG",
        actualExit: 890.5,
        bestExit: 920,
        performance: 69.2,
        missedProfit: 737.5,
        reason: "Hit resistance at $890. RSI overbought, taking profits.",
      },
      {
        ticker: "BTC-USD",
        side: "LONG",
        actualExit: 45200,
        bestExit: 46800,
        performance: 85.4,
        missedProfit: 800.0,
        reason:
          "Quick profit target hit. Crypto volatility requires fast exits.",
      },
      {
        ticker: "TSLA",
        side: "LONG",
        actualExit: 235.2,
        bestExit: 255,
        performance: 28.0,
        missedProfit: 990.0,
        reason: "Stop loss hit. Failed breakout became breakdown.",
      },
      {
        ticker: "SPY-C-510",
        side: "LONG",
        actualExit: 5.8,
        bestExit: 7.2,
        performance: 80.6,
        missedProfit: 14.0,
        reason: "Theta decay approaching. Secured 78% gain.",
      },
    ],
  };

  const reportsData = {
    performanceSummary: {
      totalPnL: 7881.0,
      winRate: 90.0,
      avgWin: 949.56,
      avgLoss: 665.0,
      isProfitable: true,
      winLossRatio: "9W / 1L",
    },
    bestTrade: {
      ticker: "SPY-C-510",
      position: "LONG",
      profit: 2550.0,
      entryPrice: 3.25,
      exitPrice: 5.8,
      quantity: 10,
      date: "Jan 9, 2024",
    },
    worstTrade: {
      ticker: "TSLA",
      position: "LONG",
      loss: -665.0,
      entryPrice: 248.5,
      exitPrice: 235.2,
      quantity: 50,
      date: "Jan 11, 2024",
    },
    detailedTradeLog: [
      {
        date: "Jan 18, 2024",
        ticker: "AAPL",
        side: "LONG",
        entry: 185.5,
        exit: 192.8,
        qty: 100,
        pnl: 730.0,
      },
      {
        date: "Jan 16, 2024",
        ticker: "NVDA",
        side: "LONG",
        entry: 825,
        exit: 890.5,
        qty: 25,
        pnl: 1637.5,
      },
      {
        date: "Jan 14, 2024",
        ticker: "BTC-USD",
        side: "LONG",
        entry: 42500,
        exit: 45200,
        qty: 0.5,
        pnl: 1350.0,
      },
      {
        date: "Jan 11, 2024",
        ticker: "TSLA",
        side: "LONG",
        entry: 248.5,
        exit: 235.2,
        qty: 50,
        pnl: -665.0,
      },
      {
        date: "Jan 9, 2024",
        ticker: "SPY-C-510",
        side: "LONG",
        entry: 3.25,
        exit: 5.8,
        qty: 10,
        pnl: 2550.0,
      },
    ],
  };

  const renderMainDashboard = () => (
    <div className="main-dashboard-wrapper">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="dashboard-main-title">Dashboard</h2>
          <p className="dashboard-subtitle-text">
            Overview of your trading performance and key metrics
          </p>
        </div>
      </div>

      {/* Primary Metrics Row */}
      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <DollarSign className="metric-icon-primary profit-color" />
              <span className="metric-label-text">Total P&L</span>
            </div>
            <div className="metric-value-display profit-color">
              ${portfolioMetrics.totalProfitLoss.toFixed(2)}
            </div>
            <div className="metric-description-text">Overall profit/loss</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <Target className="metric-icon-primary profit-color" />
              <span className="metric-label-text">Win Rate</span>
            </div>
            <div className="metric-value-display profit-color">
              {portfolioMetrics.successRate}%
            </div>
            <div className="metric-description-text">
              {portfolioMetrics.successfulTrades} wins,{" "}
              {portfolioMetrics.failedTrades} losses
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <Activity className="metric-icon-primary info-color" />
              <span className="metric-label-text">Total Trades</span>
            </div>
            <div className="metric-value-display text-white">
              {portfolioMetrics.totalExecutedTrades}
            </div>
            <div className="metric-description-text">Trades recorded</div>
          </div>
        </div>
      </div>

      {/* Secondary Metrics Row */}
      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <TrendingUp className="metric-icon-primary profit-color" />
              <span className="metric-label-text">Avg Win</span>
            </div>
            <div className="metric-value-display profit-color">
              ${portfolioMetrics.averageWinningTrade}
            </div>
            <div className="metric-description-text">Average winning trade</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <ArrowDownRight className="metric-icon-primary loss-color" />
              <span className="metric-label-text">Avg Loss</span>
            </div>
            <div className="metric-value-display loss-color">
              ${portfolioMetrics.averageLosingTrade}
            </div>
            <div className="metric-description-text">Average losing trade</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="primary-metric-container">
            <div className="metric-header-section">
              <BarChart3 className="metric-icon-primary info-color" />
              <span className="metric-label-text">Risk/Reward</span>
            </div>
            <div className="metric-value-display profit-color">
              {portfolioMetrics.riskRewardRatio}
            </div>
            <div className="metric-description-text">Reward to risk ratio</div>
          </div>
        </div>
      </div>

      {/* Win Rate Progress and Recent Activity */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Win Rate Progress</h5>
            <p className="chart-subtitle-text">
              Your current win rate compared to target
            </p>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="progress-label-text">Current Win Rate</span>
                <span className="profit-color">
                  {portfolioMetrics.successRate}%
                </span>
              </div>
              <div className="custom-progress-container">
                <div
                  className="custom-progress-fill"
                  style={{ width: `${portfolioMetrics.successRate}% ` }}
                ></div>
              </div>
            </div>

            <div className="row text-center mt-4">
              <div className="col-6">
                <div className="profit-color h6">
                  {portfolioMetrics.successfulTrades}
                </div>
                <div className="progress-label-text small">Winning Trades</div>
              </div>
              <div className="col-6">
                <div className="loss-color h6">
                  {portfolioMetrics.failedTrades}
                </div>
                <div className="progress-label-text small">Losing Trades</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Recent Activity</h5>
            <p className="chart-subtitle-text">
              Latest trading activity summary
            </p>

            {portfolioMetrics.latestTradeActivity.map((trade, index) => (
              <div key={index} className="activity-row-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-white fw-bold">{trade.ticker}</span>
                      <span className="position-badge-long">
                        {trade.position}
                      </span>
                    </div>
                    <div className="progress-label-text small mt-1">
                      {trade.tradeDate}
                    </div>
                  </div>
                  <div className="profit-color fw-bold">
                    ${trade.profitAmount.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center mt-3">
              <small className="progress-label-text">
                And 7 more trades...
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTradeJournal = () => (
    <div className="trade-journal-wrapper">
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="dashboard-main-title">Trade Journal</h2>
            <p className="dashboard-subtitle-text">10 trades recorded</p>
          </div>

          <button onClick={() => setIsAddModalOpen(true)}>
            <Plus size={16} className="me-2" />
            Add New Trade
          </button>
        </div>
      </div>

      {journalEntries.map((trade, index) => (
        <div key={index} className="journal-trade-container mb-3">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <h5 className="text-white mb-0">{trade.ticker}</h5>
                  <span className="position-badge-long">
                    {trade.positionType}
                  </span>
                  <div className="d-flex gap-1 flex-wrap">
                    {trade.tradingTags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="trading-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="profit-color h5 mb-0">
                  <TrendingUp size={16} className="me-1" />$
                  {trade.netProfit.toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="trade-detail-section">
                    <div className="progress-label-text small">Entry Price</div>
                    <div className="text-white">${trade.openPrice}</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="trade-detail-section">
                    <div className="progress-label-text small">Exit Price</div>
                    <div className="text-white">${trade.closePrice}</div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="trade-detail-section">
                    <div className="progress-label-text small">Quantity</div>
                    <div className="text-white">{trade.shareQuantity}</div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="trade-detail-section">
                    <div className="progress-label-text small">Duration</div>
                    <div className="text-white">{trade.holdingPeriod}</div>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="progress-label-text small mb-1">Notes</div>
                <div className="text-white">{trade.tradeNotes}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTradingAnalysis = () => (
    <div className="trading-analysis-wrapper">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="dashboard-main-title">Trading Analysis</h2>
          <p className="dashboard-subtitle-text">
            Exit performance analysis and missed opportunity insights from 10
            trades
          </p>
        </div>
      </div>

      {/* Analysis Metrics Row */}
      <div className="row mb-4">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="analysis-metric-container">
            <div className="metric-header-section">
              <BarChart3 className="metric-icon-primary info-color" />
              <span className="metric-label-text">Avg Exit Performance</span>
            </div>
            <div className="metric-value-display info-color">
              {tradingAnalysisData.averageExitPerformance}%
            </div>
            <div className="metric-description-text">
              of best possible exit achieved
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="analysis-metric-container">
            <div className="metric-header-section">
              <AlertCircle className="metric-icon-primary warning-color" />
              <span className="metric-label-text">Missed Profits</span>
            </div>
            <div className="metric-value-display warning-color">
              ${tradingAnalysisData.missedProfitOpportunities.toFixed(2)}
            </div>
            <div className="metric-description-text">
              potential profits left on table
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="analysis-metric-container">
            <div className="metric-header-section">
              <CheckCircle className="metric-icon-primary profit-color" />
              <span className="metric-label-text">Optimal Exits</span>
            </div>
            <div className="metric-value-display profit-color">
              {tradingAnalysisData.optimalExitTrades}
            </div>
            <div className="metric-description-text">
              trades with 80%+ exit performance
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="analysis-metric-container">
            <div className="metric-header-section">
              <XCircle className="metric-icon-primary loss-color" />
              <span className="metric-label-text">Early Exits</span>
            </div>
            <div className="metric-value-display loss-color">
              {tradingAnalysisData.earlyExitTrades}
            </div>
            <div className="metric-description-text">
              trades exited too early (less than 50%)
            </div>
          </div>
        </div>
      </div>

      {/* Exit Performance Distribution and Worst Performers */}
      <div className="row mb-4">
        <div className="col-lg-8 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Exit Performance Distribution</h5>
            <p className="chart-subtitle-text">
              How well you time your exits compared to theoretical best
            </p>

            <div className="exit-performance-distribution">
              <div className="performance-category-item">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-white">Excellent (80%+)</span>
                  <span className="text-white">
                    {
                      tradingAnalysisData.exitPerformanceDistribution.excellent
                        .count
                    }{" "}
                    trades (
                    {
                      tradingAnalysisData.exitPerformanceDistribution.excellent
                        .percentage
                    }
                    %)
                  </span>
                </div>
                <div className="performance-progress-bar">
                  <div
                    className="performance-progress-fill excellent-performance"
                    style={{
                      width: `${tradingAnalysisData.exitPerformanceDistribution.excellent.percentage}% `,
                    }}
                  ></div>
                </div>
              </div>

              <div className="performance-category-item">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-white">Good (60-80%)</span>
                  <span className="text-white">
                    {tradingAnalysisData.exitPerformanceDistribution.good.count}{" "}
                    trades (
                    {
                      tradingAnalysisData.exitPerformanceDistribution.good
                        .percentage
                    }
                    %)
                  </span>
                </div>
                <div className="performance-progress-bar">
                  <div
                    className="performance-progress-fill good-performance"
                    style={{
                      width: `${tradingAnalysisData.exitPerformanceDistribution.good.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="performance-category-item">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-white">Average (40-60%)</span>
                  <span className="text-white">
                    {
                      tradingAnalysisData.exitPerformanceDistribution.average
                        .count
                    }{" "}
                    trades (
                    {
                      tradingAnalysisData.exitPerformanceDistribution.average
                        .percentage
                    }
                    %)
                  </span>
                </div>
                <div className="performance-progress-bar">
                  <div
                    className="performance-progress-fill average-performance"
                    style={{
                      width: `${tradingAnalysisData.exitPerformanceDistribution.average.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="performance-category-item">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-white">Poor (40%)</span>
                  <span className="text-white">
                    {tradingAnalysisData.exitPerformanceDistribution.poor.count}{" "}
                    trades (
                    {
                      tradingAnalysisData.exitPerformanceDistribution.poor
                        .percentage
                    }
                    %)
                  </span>
                </div>
                <div className="performance-progress-bar">
                  <div
                    className="performance-progress-fill poor-performance"
                    style={{
                      width: `${tradingAnalysisData.exitPerformanceDistribution.poor.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Worst Exit Performers</h5>
            <p className="chart-subtitle-text">
              Trades that could have been managed better
            </p>

            {tradingAnalysisData.worstExitPerformers.map((performer, index) => (
              <div key={index} className="worst-performer-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-white fw-bold">
                        {performer.ticker}
                      </span>
                      <span className="position-badge-long">
                        {performer.position}
                      </span>
                    </div>
                    <div className="progress-label-text small mt-1">
                      Missed: ${performer.missedAmount.toFixed(2)}
                    </div>
                  </div>
                  <div className="loss-color fw-bold">
                    {performer.exitPerformance}%
                  </div>
                </div>
                <div className="progress-label-text small mt-1">
                  exit performance
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Exit Analysis */}
      <div className="row">
        <div className="col-12">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Detailed Exit Analysis</h5>
            <p className="chart-subtitle-text">
              Compare actual vs theoretical exits for each trade
            </p>

            <div className="detailed-analysis-table">
              <div className="analysis-table-header">
                <div className="analysis-table-row">
                  <div className="analysis-cell-symbol">Symbol</div>
                  <div className="analysis-cell-side">Side</div>
                  <div className="analysis-cell-exit">Actual Exit</div>
                  <div className="analysis-cell-best">Best Exit</div>
                  <div className="analysis-cell-performance">Performance</div>
                  <div className="analysis-cell-missed">Missed Profit</div>
                  <div className="analysis-cell-reason">Exit Reason</div>
                </div>
              </div>

              <div className="analysis-table-body">
                {tradingAnalysisData.detailedExitAnalysis.map(
                  (analysis, index) => (
                    <div key={index} className="analysis-table-row">
                      <div className="analysis-cell-symbol">
                        <span className="text-white fw-bold">
                          {analysis.ticker}
                        </span>
                      </div>
                      <div className="analysis-cell-side">
                        <span className="position-badge-long">
                          {analysis.side}
                        </span>
                      </div>
                      <div className="analysis-cell-exit">
                        <span className="text-white">
                          ${analysis.actualExit}
                        </span>
                      </div>
                      <div className="analysis-cell-best">
                        <span className="text-white">${analysis.bestExit}</span>
                      </div>
                      <div className="analysis-cell-performance">
                        <span
                          className={
                            analysis.performance >= 70
                              ? "profit-color"
                              : analysis.performance >= 40
                              ? "warning-color"
                              : "loss-color"
                          }
                        >
                          {analysis.performance}%
                        </span>
                      </div>
                      <div className="analysis-cell-missed">
                        <span className="loss-color">
                          ${analysis.missedProfit.toFixed(2)}
                        </span>
                      </div>
                      <div className="analysis-cell-reason">
                        <span className="progress-label-text small">
                          {analysis.reason}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="performance-analytics-wrapper">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="dashboard-main-title">Analytics</h2>
          <p className="dashboard-subtitle-text">
            Advanced analytics and performance insights from 10 trades
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-6 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Win/Loss Distribution</h5>
            <p className="chart-subtitle-text">
              Breakdown of winning vs losing trades
            </p>

            <div className="win-loss-analytics">
              <div className="analytics-stat-item">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="analytics-stat-indicator bg-success"></div>
                  <span className="text-white">Wins</span>
                  <span className="ms-auto text-white">
                    {performanceAnalytics.winLossBreakdown.victories}
                  </span>
                  <span className="profit-color">
                    {performanceAnalytics.winLossBreakdown.victoryPercentage}%
                  </span>
                </div>
              </div>
              <div className="analytics-stat-item">
                <div className="d-flex align-items-center gap-2">
                  <div className="analytics-stat-indicator bg-danger"></div>
                  <span className="text-white">Losses</span>
                  <span className="ms-auto text-white">
                    {performanceAnalytics.winLossBreakdown.defeats}
                  </span>
                  <span className="loss-color">
                    {performanceAnalytics.winLossBreakdown.defeatPercentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Performance by Side</h5>
            <p className="chart-subtitle-text">
              Long vs Short position performance
            </p>

            <div className="side-performance-analytics">
              <div className="side-analytics-item mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="position-badge-long">LONG</span>
                    <span className="text-white ms-2">
                      {
                        performanceAnalytics.sidePerformanceData.longPositions
                          .tradeCount
                      }{" "}
                      trades
                    </span>
                  </div>
                  <div className="profit-color">
                    $
                    {performanceAnalytics.sidePerformanceData.longPositions.totalProfit.toFixed(
                      2
                    )}
                  </div>
                </div>
                <div className="progress-label-text small mt-1">
                  Win Rate:{" "}
                  {
                    performanceAnalytics.sidePerformanceData.longPositions
                      .winPercentage
                  }
                  %
                </div>
              </div>

              <div className="side-analytics-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="position-badge-short">SHORT</span>
                    <span className="text-white ms-2">
                      {
                        performanceAnalytics.sidePerformanceData.shortPositions
                          .tradeCount
                      }{" "}
                      trades
                    </span>
                  </div>
                  <div className="profit-color">
                    $
                    {performanceAnalytics.sidePerformanceData.shortPositions.totalProfit.toFixed(
                      2
                    )}
                  </div>
                </div>
                <div className="progress-label-text small mt-1">
                  Win Rate:{" "}
                  {
                    performanceAnalytics.sidePerformanceData.shortPositions
                      .winPercentage
                  }
                  %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="analytics-chart-container">
            <h5 className="chart-title-text">Performance by Symbol</h5>
            <p className="chart-subtitle-text">
              Detailed breakdown of performance per trading symbol
            </p>

            {performanceAnalytics.symbolPerformanceData.map((item, index) => (
              <div key={index} className="symbol-analytics-performance-row">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-white fw-bold">{item.ticker}</span>
                    <span className="progress-label-text">
                      {item.tradeCount} trades
                    </span>
                    <span
                      className={`analytics-win-rate-badge ${
                        item.winPercentage === 100
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    >
                      {item.winPercentage}% win rate
                    </span>
                  </div>
                  <div
                    className={`fw-bold ${
                      item.totalProfit >= 0 ? "profit-color" : "loss-color"
                    }`}
                  >
                    {item.totalProfit >= 0 ? "+" : ""}$
                    {item.totalProfit.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="comprehensive-reports-wrapper">
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="dashboard-main-title">Reports</h2>
            <p className="dashboard-subtitle-text">
              Comprehensive trading performance report (10 trades)
            </p>
          </div>
          <button className="export-csv-button">
            <Download size={16} className="me-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="reports-performance-summary-container">
            <div className="d-flex align-items-center gap-2 mb-3">
              <DollarSign className="reports-section-icon" />
              <h5 className="chart-title-text mb-0">Performance Summary</h5>
            </div>
            <p className="chart-subtitle-text mb-4">
              Key metrics from 10 trades
            </p>

            <div className="row text-center">
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="reports-summary-metric">
                  <div className="reports-metric-value profit-color">
                    ${reportsData.performanceSummary.totalPnL.toFixed(2)}
                  </div>
                  <div className="reports-metric-label">Total P&L</div>
                  <span
                    className={`reports-profitability-badge ${
                      reportsData.performanceSummary.isProfitable
                        ? "profitable-badge"
                        : "unprofitable-badge"
                    }`}
                  >
                    Profitable
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="reports-summary-metric">
                  <div className="reports-metric-value text-white">
                    {reportsData.performanceSummary.winRate}%
                  </div>
                  <div className="reports-metric-label">Win Rate</div>
                  <div className="progress-label-text small">
                    {reportsData.performanceSummary.winLossRatio}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="reports-summary-metric">
                  <div className="reports-metric-value profit-color">
                    ${reportsData.performanceSummary.avgWin}
                  </div>
                  <div className="reports-metric-label">Avg Win</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="reports-summary-metric">
                  <div className="reports-metric-value loss-color">
                    ${reportsData.performanceSummary.avgLoss}
                  </div>
                  <div className="reports-metric-label">Avg Loss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best and Worst Trades */}
      <div className="row mb-4">
        <div className="col-lg-6 mb-4">
          <div className="reports-trade-highlight-container">
            <div className="d-flex align-items-center gap-2 mb-3">
              <TrendingUp className="reports-best-trade-icon" />
              <h5 className="chart-title-text mb-0">Best Trade</h5>
            </div>

            <div className="reports-trade-details">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-white fw-bold">
                    {reportsData.bestTrade.ticker}
                  </span>
                  <span className="position-badge-long">
                    {reportsData.bestTrade.position}
                  </span>
                </div>
                <div className="profit-color h5 mb-0">
                  ${reportsData.bestTrade.profit.toFixed(2)}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <div className="reports-trade-detail-item">
                    <div className="progress-label-text small">
                      Entry: ${reportsData.bestTrade.entryPrice} → Exit: $
                      {reportsData.bestTrade.exitPrice}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="reports-trade-detail-item">
                    <div className="progress-label-text small">
                      Quantity: {reportsData.bestTrade.quantity}
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-label-text small mt-2">
                Date: {reportsData.bestTrade.date}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="reports-trade-highlight-container">
            <div className="d-flex align-items-center gap-2 mb-3">
              <ArrowDownRight className="reports-worst-trade-icon" />
              <h5 className="chart-title-text mb-0">Worst Trade</h5>
            </div>

            <div className="reports-trade-details">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-white fw-bold">
                    {reportsData.worstTrade.ticker}
                  </span>
                  <span className="position-badge-long">
                    {reportsData.worstTrade.position}
                  </span>
                </div>
                <div className="loss-color h5 mb-0">
                  {reportsData.worstTrade.loss.toFixed(2)}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <div className="reports-trade-detail-item">
                    <div className="progress-label-text small">
                      Entry: ${reportsData.worstTrade.entryPrice} → Exit: $
                      {reportsData.worstTrade.exitPrice}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="reports-trade-detail-item">
                    <div className="progress-label-text small">
                      Quantity: {reportsData.worstTrade.quantity}
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-label-text small mt-2">
                Date: {reportsData.worstTrade.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Trade Log */}
      <div className="row">
        <div className="col-12">
          <div className="reports-detailed-log-container">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Calendar className="reports-section-icon" />
              <h5 className="chart-title-text mb-0">Detailed Trade Log</h5>
            </div>
            <p className="chart-subtitle-text mb-4">
              Complete record of all trades
            </p>

            <div className="reports-trade-log-table">
              <div className="reports-table-header">
                <div className="reports-table-row">
                  <div className="reports-cell-date">Date</div>
                  <div className="reports-cell-symbol">Symbol</div>
                  <div className="reports-cell-side">Side</div>
                  <div className="reports-cell-entry">Entry</div>
                  <div className="reports-cell-exit">Exit</div>
                  <div className="reports-cell-qty">Qty</div>
                  <div className="reports-cell-pnl">P&L</div>
                </div>
              </div>

              <div className="reports-table-body">
                {reportsData.detailedTradeLog.map((trade, index) => (
                  <div key={index} className="reports-table-row">
                    <div className="reports-cell-date">
                      <span className="text-white">{trade.date}</span>
                    </div>
                    <div className="reports-cell-symbol">
                      <span className="text-white fw-bold">{trade.ticker}</span>
                    </div>
                    <div className="reports-cell-side">
                      <span className="position-badge-long">{trade.side}</span>
                    </div>
                    <div className="reports-cell-entry">
                      <span className="text-white">${trade.entry}</span>
                    </div>
                    <div className="reports-cell-exit">
                      <span className="text-white">${trade.exit}</span>
                    </div>
                    <div className="reports-cell-qty">
                      <span className="text-white">{trade.qty}</span>
                    </div>
                    <div className="reports-cell-pnl">
                      <span
                        className={`fw-bold ${item.totalProfit >= 0 ? "profit-color" : "loss-color"}`}

                      >
                        {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(2)}
                      </span>
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

  return (
    <div className="trading-platform-main">
      {/* Primary Navigation */}
      <nav className="platform-navigation-bar px-2">
        <div className="row">
          <div className="container-fluid d-flex justify-content-between align-items-center py-3">
            <div className="platform-nav-content">
              <ul className="platform-nav-pills">
                <li className="platform-nav-item">
                  <button
                    className={`platform-nav-button ${
                      currentActiveTab === "dashboard"
                        ? "platform-nav-active"
                        : ""
                    }`}
                    onClick={() => setCurrentActiveTab("dashboard")}
                  >
                    Dashboard
                  </button>
                </li>
                <li className="platform-nav-item">
                  <button
                    className={`platform-nav-button ${
                      currentActiveTab === "journal"
                        ? "platform-nav-active"
                        : ""
                    }`}
                    onClick={() => setCurrentActiveTab("journal")}
                  >
                    Trade Journal
                  </button>
                </li>
                <li className="platform-nav-item">
                  <button
                    className={`platform-nav-button ${
                      currentActiveTab === "analysis"
                        ? "platform-nav-active"
                        : ""
                    }`}
                    onClick={() => setCurrentActiveTab("analysis")}
                  >
                    Trading Analysis
                  </button>
                </li>
                <li className="platform-nav-item">
                  <button
                    className={`platform-nav-button ${
                      currentActiveTab === "analytics"
                        ? "platform-nav-active"
                        : ""
                    }`}
                    onClick={() => setCurrentActiveTab("analytics")}
                  >
                    Analytics
                  </button>
                </li>
                <li className="platform-nav-item">
                  <button
                    className={`platform-nav-button ${
                      currentActiveTab === "reports"
                        ? "platform-nav-active"
                        : ""
                    }`}
                    onClick={() => setCurrentActiveTab("reports")}
                  >
                    Reports
                  </button>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-2">
              <button className="secondary-action-button">
                <Download size={16} className="me-2" />
                Export Data
              </button>
              <button onClick={() => setIsAddModalOpen(true)}>
                <Plus size={16} className="me-2" />
                Add New Trade
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container-fluid py-4">
        {currentActiveTab === "dashboard" && renderMainDashboard()}
        {currentActiveTab === "journal" && renderTradeJournal()}
        {currentActiveTab === "analysis" && renderTradingAnalysis()}
        {currentActiveTab === "analytics" && renderAnalytics()}
        {currentActiveTab === "reports" && renderReports()}
      </div>

      <AddTradeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        // CHANGE TO:
        onAddTrade={(data) => {
          console.log("Trade added:", data);

          // Add new trade to journal entries
          const newJournalEntry = {
            ticker: data.symbol,
            positionType: data.side.toUpperCase(),
            tradingTags: data.tags || [],
            openPrice: data.entryPrice,
            closePrice: data.exitPrice,
            shareQuantity: data.quantity,
            holdingPeriod: data.duration || "N/A",
            netProfit: data.profitLoss,
            tradeNotes: data.notes || "No notes provided",
            entryDate: data.entryDate,
            exitDate: data.exitDate,
          };

          // Actually add to the journal entries (this was missing!)
          setJournalEntries((prev) => [newJournalEntry, ...prev]);
          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
};

export default Journal;
