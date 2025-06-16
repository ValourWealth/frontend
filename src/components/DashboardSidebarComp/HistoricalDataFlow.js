// // import React, { useState, useEffect } from "react";
// // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// // const HistoricalDataFlow = ({ darkMode }) => {
// //   const [activeTab, setActiveTab] = useState("largeCaps");

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         backgroundColor: darkMode ? "#000000" : "#ffffff", // Full black background
// //         color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
// //         padding: "20px",
// //         borderRadius: "10px",
// //         border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
// //       }}
// //     >
// //      <div className="theme-title">
// //        <h2>Historic ATS Gainers & Losers</h2>
// //      </div>

// //       {/*darkflow Tabs */}
// //       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${activeTab === "largeCaps" ? "active" : ""}`}
// //             onClick={() => setActiveTab("largeCaps")}
// //           >
// //             Large Caps
// //           </button>
// //         </li>
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${activeTab === "mediumCaps" ? "active" : ""}`}
// //             onClick={() => setActiveTab("mediumCaps")}
// //           >
// //             Medium Caps
// //           </button>
// //         </li>
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${activeTab === "smallCaps" ? "active" : ""}`}
// //             onClick={() => setActiveTab("smallCaps")}
// //           >
// //             Small Caps
// //           </button>
// //         </li>

// //       {/* trend icons */}
// //       <span className="trend-icons">
// //       <FaArrowTrendUp className="up-icon" />
// //       <FaArrowTrendDown className="down-icon" />
// //     </span>

// //       </ul>

// //       {/* Table */}
// //       <div className="table-responsive mt-3">
// //         <table className="table table-bordered table_history">
// //           <thead
// //             className="table-primary"
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
// //               color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
// //             }}
// //             >
// //             <tr>
// //               <th>TICKER</th>
// //               <th>FROM</th>
// //               <th>TO</th>
// //               <th>IRREGULAR VOL</th>
// //               <th>PERCENT CHANGE</th>
// //             </tr>
// //           </thead>
// //           <tbody
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
// //               color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
// //             }}
// //           >
// //             {activeTab === "largeCaps" && (
// //               <>
// //                 <tr>
// //                   <td>DRI</td>
// //                   <td>
// //                     $187.87
// //                     <br /> <small>Mar 20th 8:27 AM</small>
// //                   </td>
// //                   <td>
// //                     $188.89 <br /> <small>Mar 20th 9:57 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2702.53x</span>
// //                   </td>
// //                   <td>
// //                     +0.86% <br /> <small>1.5 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PODD</td>
// //                   <td>
// //                     $265.55
// //                     <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $265.56 <br /> <small>Mar 20th 9:48 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">254.54x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MDY</td>
// //                   <td>
// //                     $535.97
// //                     <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $546.08 <br /> <small>Mar 20th 9:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">25.86x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>1.5 hours</small>
// //                   </td>

// //                   <td>MTN</td>
// //                   <td>
// //                     $193.77
// //                     <br /> <small>Mar 20th 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     $194.80 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.89x</span>
// //                   </td>
// //                   <td>
// //                     +0.55% <br /> <small>29 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CLH</td>
// //                   <td>
// //                     $186.85
// //                     <br /> <small>Mar 20th 8:04 AM</small>
// //                   </td>
// //                   <td>
// //                     $186.75 <br /> <small>Mar 20th 1:27 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.57x</span>
// //                   </td>
// //                   <td>
// //                     -0.04% <br /> <small>5 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>WM</td>
// //                   <td>
// //                     $227.41
// //                     <br /> <small>Mar 20th 8:16 AM</small>
// //                   </td>
// //                   <td>
// //                     $228.06 <br /> <small>Mar 20th 10:33 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.36x</span>
// //                   </td>
// //                   <td>
// //                     +0.29% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>UTHR</td>
// //                   <td>
// //                     $376.64
// //                     <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $378.89 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.33x</span>
// //                   </td>
// //                   <td>
// //                     +0.71% <br /> <small>9 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DE</td>
// //                   <td>
// //                     $407.80
// //                     <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>
// //                     $407.93 <br /> <small>Mar 20th 10:41 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.3x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>38 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>GS</td>
// //                   <td>
// //                     $397.48
// //                     <br /> <small>Mar 20th 8:08 AM</small>
// //                   </td>
// //                   <td>
// //                     $397.99 <br /> <small>Mar 20th 9:31 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.28x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>INBX</td>
// //                   <td>
// //                     $175.43
// //                     <br /> <small>Mar 20th 8:10 AM</small>
// //                   </td>
// //                   <td>
// //                     $177.99 <br /> <small>Mar 20th 10:04 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.24x</span>
// //                   </td>
// //                   <td>
// //                     +0.43% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TT</td>
// //                   <td>
// //                     $330.38
// //                     <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $331.13 <br /> <small>Mar 20th 11:31 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.22x</span>
// //                   </td>
// //                   <td>
// //                     +0.43% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ESS</td>
// //                   <td>
// //                     $298.08
// //                     <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     $298.54 <br /> <small>Mar 20th 8:44 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2x</span>
// //                   </td>
// //                   <td>
// //                     +0.16% <br /> <small>10 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AGM</td>
// //                   <td>
// //                     $86.68
// //                     <br /> <small>Mar 20th 12:21 PM</small>
// //                   </td>
// //                   <td>
// //                     $86.72 <br /> <small>Mar 20th 2:41 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.88x</span>
// //                   </td>
// //                   <td>
// //                     +0.05% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DEF</td>
// //                   <td>
// //                     $77.38
// //                     <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $77.98 <br /> <small>Mar 20th 9:31 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.87x</span>
// //                   </td>
// //                   <td>
// //                     +0.58% <br /> <small>18 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>RGLD</td>
// //                   <td>
// //                     $124.77
// //                     <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $124.91 <br /> <small>Mar 20th 10:33 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.87x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>1 minute</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AN</td>
// //                   <td>
// //                     $160.73
// //                     <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>
// //                     $160.71 <br /> <small>Mar 20th 10:10 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.82x</span>
// //                   </td>
// //                   <td>
// //                     -0.59% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ISRG</td>
// //                   <td>
// //                     $493.37
// //                     <br /> <small>Mar 20th 9:43 AM</small>
// //                   </td>
// //                   <td>
// //                     $495.38 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.79x</span>
// //                   </td>
// //                   <td>
// //                     +0.41% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CDNS</td>
// //                   <td>
// //                     $305.23
// //                     <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $305.18 <br /> <small>Mar 20th 9:19 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.77x</span>
// //                   </td>
// //                   <td>
// //                     -0.02% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>LDPE</td>
// //                   <td>
// //                     $170.31
// //                     <br /> <small>Mar 20th 11:30 AM</small>
// //                   </td>
// //                   <td>
// //                     $170.32 <br /> <small>Mar 20th 12:25 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.76x</span>
// //                   </td>
// //                   <td>
// //                     +0.41% <br /> <small>49 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AMP</td>
// //                   <td>
// //                     $447.18
// //                     <br /> <small>Mar 20th 8:15 AM</small>
// //                   </td>
// //                   <td>
// //                     $450.51 <br /> <small>Mar 20th 10:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.72x</span>
// //                   </td>
// //                   <td>
// //                     +0.41% <br /> <small>3 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>LIN</td>
// //                   <td>
// //                     $459.00
// //                     <br /> <small>Mar 20th 9:38 AM</small>
// //                   </td>
// //                   <td>
// //                     $459.10 <br /> <small>Mar 20th 10:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.68x</span>
// //                   </td>
// //                   <td>
// //                     +0.22% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CVX</td>
// //                   <td>
// //                     $153.39
// //                     <br /> <small>Mar 20th 9:43 AM</small>
// //                   </td>
// //                   <td>
// //                     $153.73 <br /> <small>Mar 20th 9:48 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.67x</span>
// //                   </td>
// //                   <td>
// //                     +0.22% <br /> <small>5 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SAP</td>
// //                   <td>
// //                     $191.99
// //                     <br /> <small>Mar 20th 11:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $192.18 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.64x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>20 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>KLR</td>
// //                   <td>
// //                     $213.35
// //                     <br /> <small>Mar 20th 9:11 AM</small>
// //                   </td>
// //                   <td>
// //                     $214.45 <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.63x</span>
// //                   </td>
// //                   <td>
// //                     +0.40% <br /> <small>12 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MSCI</td>
// //                   <td>
// //                     $558.30
// //                     <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $559.05 <br /> <small>Mar 20th 10:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.6x</span>
// //                   </td>
// //                   <td>
// //                     +0.10% <br /> <small>45 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EME</td>
// //                   <td>
// //                     $402.02
// //                     <br /> <small>Mar 20th 10:31 AM</small>
// //                   </td>
// //                   <td>
// //                     $403.29 <br /> <small>Mar 20th 1:42 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.6x</span>
// //                   </td>
// //                   <td>
// //                     +0.17% <br /> <small>3 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TSM</td>
// //                   <td>
// //                     $175.74
// //                     <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $175.75 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.57x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>31 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>OTLS</td>
// //                   <td>
// //                     $16.28
// //                     <br /> <small>Mar 20th 10:10 AM</small>
// //                   </td>
// //                   <td>
// //                     $16.40 <br /> <small>Mar 20th 2:45 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.56x</span>
// //                   </td>
// //                   <td>
// //                     +0.77% <br /> <small>4 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PGR</td>
// //                   <td>
// //                     $276.83
// //                     <br /> <small>Mar 20th 8:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $277.82 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.5x</span>
// //                   </td>
// //                   <td>
// //                     +0.31% <br /> <small>10 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SPY</td>
// //                   <td>
// //                     $517.02
// //                     <br /> <small>Mar 20th 8:31 AM</small>
// //                   </td>
// //                   <td>
// //                     $518.80 <br /> <small>Mar 20th 9:58 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.4x</span>
// //                   </td>
// //                   <td>
// //                     +0.34% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AAPL</td>
// //                   <td>
// //                     $170.25
// //                     <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $170.32 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.22x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>31 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>QQQ</td>
// //                   <td>
// //                     $479.42
// //                     <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $479.80 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.19x</span>
// //                   </td>
// //                   <td>
// //                     +0.51% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //               </>
// //             )}

// //             {activeTab === "mediumCaps" && (
// //               <>
// //                 <tr>
// //                   <td>MPC</td>
// //                   <td>
// //                     $149.77 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $150.87 <br /> <small>Mar 20th 1:51 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">34124.4x</span>
// //                   </td>
// //                   <td>
// //                     +0.73% <br /> <small>5 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ED</td>
// //                   <td>
// //                     $107.49 <br /> <small>Mar 20th 9:19 AM</small>
// //                   </td>
// //                   <td>
// //                     $107.51 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">151.28x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>13 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>BPMC</td>
// //                   <td>
// //                     $90.50 <br /> <small>Mar 20th 9:25 AM</small>
// //                   </td>
// //                   <td>
// //                     $90.56 <br /> <small>Mar 20th 10:26 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">145.64x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>FTNT</td>
// //                   <td>
// //                     $98.19 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $98.20 <br /> <small>Mar 20th 8:21 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">62.54x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>18 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>JBL</td>
// //                   <td>
// //                     $139.44 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $143.71 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">61.57x</span>
// //                   </td>
// //                   <td>
// //                     +3.06% <br /> <small>1 day</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DXCM</td>
// //                   <td>
// //                     $73.40 <br /> <small>Mar 20th 8:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $75.42 <br /> <small>Mar 20th 11:16 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">39.02x</span>
// //                   </td>
// //                   <td>
// //                     +2.75% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>GKOS</td>
// //                   <td>
// //                     $100.48 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $101.60 <br /> <small>Mar 20th 10:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">25.99x</span>
// //                   </td>
// //                   <td>
// //                     +1.11% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>XLU</td>
// //                   <td>
// //                     $78.92 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $79.13 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">19.34x</span>
// //                   </td>
// //                   <td>
// //                     +0.27% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EAT</td>
// //                   <td>
// //                     $141.46 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $141.91 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">15.56x</span>
// //                   </td>
// //                   <td>
// //                     +0.32% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ARES</td>
// //                   <td>
// //                     $147.65 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $147.75 <br /> <small>Mar 20th 8:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">15.41x</span>
// //                   </td>
// //                   <td>
// //                     +0.07% <br /> <small>42 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PLTR</td>
// //                   <td>
// //                     $86.07 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $86.10 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">13.94x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PVH</td>
// //                   <td>
// //                     $65.18 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $66.23 <br /> <small>Mar 20th 11:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">11.31x</span>
// //                   </td>
// //                   <td>
// //                     +1.61% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>FIVE</td>
// //                   <td>
// //                     $75.58 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $76.01 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">10.98x</span>
// //                   </td>
// //                   <td>
// //                     +0.57% <br /> <small>23 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PFSI</td>
// //                   <td>
// //                     $101.22 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $101.72 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">9.86x</span>
// //                   </td>
// //                   <td>
// //                     +0.49% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CLS</td>
// //                   <td>
// //                     $91.99 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     $95.64 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">9.31x</span>
// //                   </td>
// //                   <td>
// //                     +3.97% <br /> <small>23 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ILMN</td>
// //                   <td>
// //                     $84.91 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $84.92 <br /> <small>Mar 20th 8:26 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">8.29x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>12 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DECK</td>
// //                   <td>
// //                     $119.04 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $119.08 <br /> <small>Mar 20th 8:54 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">6.38x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>51 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>NVT</td>
// //                   <td>
// //                     $56.30 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $56.95 <br /> <small>Mar 20th 10:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">5.59x</span>
// //                   </td>
// //                   <td>
// //                     +1.14% <br /> <small>30 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MET</td>
// //                   <td>
// //                     $83.00 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     $83.03 <br /> <small>Mar 20th 9:10 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">5.16x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>36 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>NTRS</td>
// //                   <td>
// //                     $99.25 <br /> <small>Mar 20th 8:44 AM</small>
// //                   </td>
// //                   <td>
// //                     $99.26 <br /> <small>Mar 20th 9:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">5.16x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>19 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PDD</td>
// //                   <td>
// //                     $123.33 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $131.03 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.86x</span>
// //                   </td>
// //                   <td>
// //                     +6.24% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SCCO</td>
// //                   <td>
// //                     $99.54 <br /> <small>Mar 20th 8:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $99.57 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.79x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>12 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TOL</td>
// //                   <td>
// //                     $107.08 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $108.05 <br /> <small>Mar 20th 2:24 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.25x</span>
// //                   </td>
// //                   <td>
// //                     +0.91% <br /> <small>4 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EBAY</td>
// //                   <td>
// //                     $67.21 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $67.22 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.97x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>NVS</td>
// //                   <td>
// //                     $113.13 <br /> <small>Mar 20th 1:06 PM</small>
// //                   </td>
// //                   <td>
// //                     $113.23 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.74x</span>
// //                   </td>
// //                   <td>
// //                     +0.09% <br /> <small>18 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>KMX</td>
// //                   <td>
// //                     $70.50 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $72.26 <br /> <small>Mar 20th 12:05 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.69x</span>
// //                   </td>
// //                   <td>
// //                     +2.49% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MS</td>
// //                   <td>
// //                     $119.85 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $119.88 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.6x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>31 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EFA</td>
// //                   <td>
// //                     $83.73 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $84.02 <br /> <small>Mar 20th 10:15 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.59x</span>
// //                   </td>
// //                   <td>
// //                     +0.34% <br /> <small>43 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>IJR</td>
// //                   <td>
// //                     $105.84 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $106.66 <br /> <small>Mar 20th 12:16 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.47x</span>
// //                   </td>
// //                   <td>
// //                     +0.77% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>HWM</td>
// //                   <td>
// //                     $131.96 <br /> <small>Mar 20th 8:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $132.03 <br /> <small>Mar 20th 8:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.43x</span>
// //                   </td>
// //                   <td>
// //                     +0.05% <br /> <small>35 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>OC</td>
// //                   <td>
// //                     $147.38 <br /> <small>Mar 20th 8:54 AM</small>
// //                   </td>
// //                   <td>
// //                     $148.09 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.39x</span>
// //                   </td>
// //                   <td>
// //                     +0.48% <br /> <small>51 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PTCT</td>
// //                   <td>
// //                     $56.97 <br /> <small>Mar 20th 9:25 AM</small>
// //                   </td>
// //                   <td>
// //                     $57.23 <br /> <small>Mar 20th 9:51 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.25x</span>
// //                   </td>
// //                   <td>
// //                     +0.46% <br /> <small>25 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CAVA</td>
// //                   <td>
// //                     $81.03 <br /> <small>Mar 20th 8:35 AM</small>
// //                   </td>
// //                   <td>
// //                     $84.66 <br /> <small>Mar 21st 8:10 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.21x</span>
// //                   </td>
// //                   <td>
// //                     +4.49% <br /> <small>23 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>HSBC</td>
// //                   <td>
// //                     $57.46 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     $57.63 <br /> <small>Mar 21st 8:10 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.07x</span>
// //                   </td>
// //                   <td>
// //                     +0.30% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AGX</td>
// //                   <td>
// //                     $122.03 <br /> <small>Mar 20th 8:56 AM</small>
// //                   </td>
// //                   <td>
// //                     $122.12 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.95x</span>
// //                   </td>
// //                   <td>
// //                     +0.07% <br /> <small>36 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>WLK</td>
// //                   <td>
// //                     $100.70 <br /> <small>Mar 20th 10:26 AM</small>
// //                   </td>
// //                   <td>
// //                     $101.41 <br /> <small>Mar 20th 3:29 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.94x</span>
// //                   </td>
// //                   <td>
// //                     +0.70% <br /> <small>5 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TKR</td>
// //                   <td>
// //                     $74.98 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $75.39 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.94x</span>
// //                   </td>
// //                   <td>
// //                     +0.54% <br /> <small>13 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EXE</td>
// //                   <td>
// //                     $108.50 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     $109.27 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.91x</span>
// //                   </td>
// //                   <td>
// //                     +0.71% <br /> <small>23 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>VNQ</td>
// //                   <td>
// //                     $91.33 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $91.36 <br /> <small>Mar 20th 8:34 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.9x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>19 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>BUD</td>
// //                   <td>
// //                     $62.61 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $62.65 <br /> <small>Mar 20th 10:15 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.87x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>39 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SE</td>
// //                   <td>
// //                     $126.25 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $126.73 <br /> <small>Mar 20th 11:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.86x</span>
// //                   </td>
// //                   <td>
// //                     +0.38% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>Z</td>
// //                   <td>
// //                     $70.20 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     $70.93 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.8x</span>
// //                   </td>
// //                   <td>
// //                     +1.04% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>WPC</td>
// //                   <td>
// //                     $61.83 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $61.97 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.8x</span>
// //                   </td>
// //                   <td>
// //                     +0.23% <br /> <small>20 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>VLO</td>
// //                   <td>
// //                     $133.87 <br /> <small>Mar 20th 9:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $133.88 <br /> <small>Mar 20th 9:25 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.79x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>19 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>VST</td>
// //                   <td>
// //                     $129.86 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $129.89 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.56x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AFL</td>
// //                   <td>
// //                     $108.44 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $108.49 <br /> <small>Mar 20th 8:44 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.53x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>30 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>INTA</td>
// //                   <td>
// //                     $60.27 <br /> <small>Mar 20th 11:03 AM</small>
// //                   </td>
// //                   <td>
// //                     $61.10 <br /> <small>Mar 20th 12:35 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.42x</span>
// //                   </td>
// //                   <td>
// //                     +1.39% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>NET</td>
// //                   <td>
// //                     $117.55 <br /> <small>Mar 20th 8:45 AM</small>
// //                   </td>
// //                   <td>
// //                     $117.82 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.39x</span>
// //                   </td>
// //                   <td>
// //                     +0.23% <br /> <small>47 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MU</td>
// //                   <td>
// //                     $102.04 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $102.05 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.32x</span>
// //                   </td>
// //                   <td>7 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CORT</td>
// //                   <td>
// //                     $52.38 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $52.39 <br /> <small>Mar 20th 11:26 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.28x</span>
// //                   </td>
// //                   <td>1 hour</td>
// //                 </tr>
// //                 <tr>
// //                   <td>LEA</td>
// //                   <td>
// //                     $135.98 <br /> <small>Mar 20th 2:43 PM</small>
// //                   </td>
// //                   <td>
// //                     $135.72 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.15x</span>
// //                   </td>
// //                   <td>17 hours</td>
// //                 </tr>
// //                 <tr>
// //                   <td>EMR</td>
// //                   <td>
// //                     $110.30 <br /> <small>Mar 20th 9:31 AM</small>
// //                   </td>
// //                   <td>
// //                     $110.45 <br /> <small>Mar 20th 1:42 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.11x</span>
// //                   </td>
// //                   <td>+0.43%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>BXP</td>
// //                   <td>
// //                     $64.80 <br /> <small>Mar 20th 10:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $65.35 <br /> <small>Mar 20th 11:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.09x</span>
// //                   </td>
// //                   <td>+0.35%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>PEZ</td>
// //                   <td>
// //                     $56.23 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $56.48 <br /> <small>Mar 20th 11:51 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.07x</span>
// //                   </td>
// //                   <td>+0.44%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>FND</td>
// //                   <td>
// //                     $123.79 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     $124.46 <br /> <small>Mar 20th 2:41 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.06x</span>
// //                   </td>
// //                   <td>+0.84%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>AXSM</td>
// //                   <td>
// //                     $104.95 <br /> <small>Mar 20th 9:59 AM</small>
// //                   </td>
// //                   <td>
// //                     $104.05 <br /> <small>Mar 20th 10:15 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.82x</span>
// //                   </td>
// //                   <td>+0.08%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>TKO</td>
// //                   <td>
// //                     $104.09 <br /> <small>Mar 20th 9:10 AM</small>
// //                   </td>
// //                   <td>
// //                     $104.01 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.87x</span>
// //                   </td>
// //                   <td>22 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>ALK</td>
// //                   <td>
// //                     $40.71 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $40.80 <br /> <small>Mar 20th 11:36 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.84x</span>
// //                   </td>
// //                   <td>2 hours</td>
// //                 </tr>
// //                 <tr>
// //                   <td>BMY</td>
// //                   <td>
// //                     $50.08 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     $50.44 <br /> <small>Mar 21st 8:20 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.82x</span>
// //                   </td>
// //                   <td>1 day</td>
// //                 </tr>
// //                 <tr>
// //                   <td>SN</td>
// //                   <td>
// //                     $90.93 <br /> <small>Mar 20th 3:41 AM</small>
// //                   </td>
// //                   <td>
// //                     $91.30 <br /> <small>Mar 20th 1:32 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.79x</span>
// //                   </td>
// //                   <td>+0.58%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>SABA</td>
// //                   <td>
// //                     $157.75 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $158.41 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.78x</span>
// //                   </td>
// //                   <td>+0.34%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>AST</td>
// //                   <td>
// //                     $127.32 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $127.46 <br /> <small>Mar 20th 9:40 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.77x</span>
// //                   </td>
// //                   <td>+0.03%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>IVW</td>
// //                   <td>
// //                     $84.82 <br /> <small>Mar 20th 9:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $84.84 <br /> <small>Mar 20th 9:35 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.73x</span>
// //                   </td>
// //                   <td>+0.02%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CBRE</td>
// //                   <td>
// //                     $104.96 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     $104.58 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.72x</span>
// //                   </td>
// //                   <td>+0.76%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>KSH</td>
// //                   <td>
// //                     $67.69 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $67.71 <br /> <small>Mar 20th 10:36 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.71x</span>
// //                   </td>
// //                   <td>1 hour</td>
// //                 </tr>
// //                 <tr>
// //                   <td>MRVI</td>
// //                   <td>
// //                     $65.72 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $65.80 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.71x</span>
// //                   </td>
// //                   <td>7 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRVO</td>
// //                   <td>
// //                     $72.98 <br /> <small>Mar 20th 11:03 AM</small>
// //                   </td>
// //                   <td>
// //                     $72.95 <br /> <small>Mar 20th 11:21 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.66x</span>
// //                   </td>
// //                   <td>18 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>BLK</td>
// //                   <td>
// //                     $83.75 <br /> <small>Mar 20th 9:35 AM</small>
// //                   </td>
// //                   <td>
// //                     $84.30 <br /> <small>Mar 20th 1:41 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.66x</span>
// //                   </td>
// //                   <td>4 hours</td>
// //                 </tr>
// //                 <tr>
// //                   <td>XLE</td>
// //                   <td>
// //                     $92.25 <br /> <small>Mar 20th 1:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $93.26 <br /> <small>Mar 20th 2:05 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.66x</span>
// //                   </td>
// //                   <td>+0.08%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>WFRD</td>
// //                   <td>
// //                     $92.59 <br /> <small>Mar 20th 3:39 PM</small>
// //                   </td>
// //                   <td>
// //                     $92.83 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.61x</span>
// //                   </td>
// //                   <td>16 hours</td>
// //                 </tr>
// //                 <tr>
// //                   <td>PIE</td>
// //                   <td>
// //                     $74.35 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $74.56 <br /> <small>Mar 20th 10:41 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.61x</span>
// //                   </td>
// //                   <td>+0.28%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRBK</td>
// //                   <td>
// //                     $59.11 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     $59.24 <br /> <small>Mar 20th 10:05 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.61x</span>
// //                   </td>
// //                   <td>+0.22%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>BALL</td>
// //                   <td>
// //                     $65.96 <br /> <small>Mar 20th 10:15 AM</small>
// //                   </td>
// //                   <td>
// //                     $66.49 <br /> <small>Mar 20th 3:29 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.58x</span>
// //                   </td>
// //                   <td>5 hours</td>
// //                 </tr>
// //                 <tr>
// //                   <td>TTE</td>
// //                   <td>
// //                     $63.95 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     $63.42 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.58x</span>
// //                   </td>
// //                   <td>4 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>RMBS</td>
// //                   <td>
// //                     $56.25 <br /> <small>Mar 20th 2:43 PM</small>
// //                   </td>
// //                   <td>
// //                     $56.36 <br /> <small>Mar 20th 3:16 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.57x</span>
// //                   </td>
// //                   <td>26 minutes</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CAMT</td>
// //                   <td>
// //                     $65.40 <br /> <small>Mar 20th 10:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $65.79 <br /> <small>Mar 20th 1:15 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.53x</span>
// //                   </td>
// //                   <td>+0.34%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>HCB</td>
// //                   <td>
// //                     $43.20 <br /> <small>Mar 20th 12:41 PM</small>
// //                   </td>
// //                   <td>
// //                     $43.73 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.53x</span>
// //                   </td>
// //                   <td>+0.74%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRH</td>
// //                   <td>
// //                     $95.14 <br /> <small>Mar 20th 10:21 AM</small>
// //                   </td>
// //                   <td>
// //                     $95.42 <br /> <small>Mar 20th 10:29 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.53x</span>
// //                   </td>
// //                   <td>+0.28%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>BSX</td>
// //                   <td>
// //                     $100.72 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $101.61 <br /> <small>Mar 20th 12:05 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.52x</span>
// //                   </td>
// //                   <td>+0.88%</td>
// //                 </tr>
// //                 <tr>
// //                   <td>LRCX</td>
// //                   <td>
// //                     $97.02 <br /> <small>Mar 20th 10:26 AM</small>
// //                   </td>
// //                   <td>
// //                     $97.51 <br /> <small>Mar 20th 11:26 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.5x</span>
// //                   </td>
// //                   <td>1 hour</td>
// //                 </tr>
// //                 <tr>
// //                   <td>ALC</td>
// //                   <td>
// //                     $82.52 <br /> <small>Mar 20th 12:03 PM</small>
// //                   </td>
// //                   <td>
// //                     $82.86 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.5x</span>
// //                   </td>
// //                   <td>7 minutes</td>
// //                 </tr>
// //               </>
// //             )}

// //             {activeTab === "smallCaps" && (
// //               <>
// //                 <tr>
// //                   <td>LUV</td>
// //                   <td>
// //                     $33.59 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $33.61 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">235.63x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>11 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DBX</td>
// //                   <td>
// //                     $26.76 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $26.77 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">111.95x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SBSW</td>
// //                   <td>
// //                     $4.47 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $4.48 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">81.66x</span>
// //                   </td>
// //                   <td>
// //                     +0.11% <br /> <small>11 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SPRY</td>
// //                   <td>
// //                     $11.64 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $14.34 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">51.39x</span>
// //                   </td>
// //                   <td>
// //                     +23.20% <br /> <small>1 day</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DAL</td>
// //                   <td>
// //                     $47.75 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $47.76 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">19.45x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>REAL</td>
// //                   <td>
// //                     $6.16 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $6.17 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">15.61x</span>
// //                   </td>
// //                   <td>
// //                     +0.08% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AU</td>
// //                   <td>
// //                     $35.53 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $36.49 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">11.39x</span>
// //                   </td>
// //                   <td>
// //                     +2.70% <br /> <small>1 day</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>KTOS</td>
// //                   <td>
// //                     $32.55 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $32.56 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">10.35x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SSTI</td>
// //                   <td>
// //                     $18.41 <br /> <small>Mar 20th 12:25 PM</small>
// //                   </td>
// //                   <td>
// //                     $18.49 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">9.22x</span>
// //                   </td>
// //                   <td>
// //                     +0.41% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MIRM</td>
// //                   <td>
// //                     $47.50 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $47.97 <br /> <small>Mar 20th 3:49 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">6.6x</span>
// //                   </td>
// //                   <td>
// //                     +0.99% <br /> <small>6 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CMC</td>
// //                   <td>
// //                     $45.42 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $46.67 <br /> <small>Mar 20th 10:15 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">6.03x</span>
// //                   </td>
// //                   <td>
// //                     +2.76% <br /> <small>43 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PII</td>
// //                   <td>
// //                     $40.23 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $42.48 <br /> <small>Mar 20th 12:03 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">5.75x</span>
// //                   </td>
// //                   <td>
// //                     +5.59% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>RIOT</td>
// //                   <td>
// //                     $7.79 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $7.79 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.51x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>NOVA</td>
// //                   <td>
// //                     $0.48 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $0.54 <br /> <small>Mar 21st 8:15 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.33x</span>
// //                   </td>
// //                   <td>
// //                     +11.35% <br /> <small>20 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CPS</td>
// //                   <td>
// //                     $16.74 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $16.92 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.32x</span>
// //                   </td>
// //                   <td>
// //                     +1.08% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SNDX</td>
// //                   <td>
// //                     $13.86 <br /> <small>Mar 20th 12:25 PM</small>
// //                   </td>
// //                   <td>
// //                     $14.08 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">4.17x</span>
// //                   </td>
// //                   <td>
// //                     +1.59% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>RXRX</td>
// //                   <td>
// //                     $6.58 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $6.58 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.71x</span>
// //                   </td>
// //                   <td>
// //                     +0.08% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRSP</td>
// //                   <td>
// //                     $41.82 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $41.84 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.7x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>8 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CAPR</td>
// //                   <td>
// //                     $13.89 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $14.34 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.56x</span>
// //                   </td>
// //                   <td>
// //                     +3.24% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>VNOM</td>
// //                   <td>
// //                     $45.20 <br /> <small>Mar 20th 9:46 AM</small>
// //                   </td>
// //                   <td>
// //                     $45.32 <br /> <small>Mar 20th 11:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.43x</span>
// //                   </td>
// //                   <td>
// //                     +0.27% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>QDEL</td>
// //                   <td>
// //                     $34.77 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $35.16 <br /> <small>Mar 20th 4:03 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.33x</span>
// //                   </td>
// //                   <td>
// //                     +1.12% <br /> <small>6 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MT</td>
// //                   <td>
// //                     $33.06 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $33.07 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3.33x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SDRL</td>
// //                   <td>
// //                     $25.07 <br /> <small>Mar 20th 12:05 PM</small>
// //                   </td>
// //                   <td>
// //                     $25.10 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">3x</span>
// //                   </td>
// //                   <td>
// //                     +0.12% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>IAC</td>
// //                   <td>
// //                     $48.44 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $49.20 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.84x</span>
// //                   </td>
// //                   <td>
// //                     +1.58% <br /> <small>2 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>MGY</td>
// //                   <td>
// //                     $25.01 <br /> <small>Mar 20th 11:56 AM</small>
// //                   </td>
// //                   <td>
// //                     $25.36 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.84x</span>
// //                   </td>
// //                   <td>
// //                     +1.40% <br /> <small>20 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>WDC</td>
// //                   <td>
// //                     $44.60 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $45.23 <br /> <small>Mar 20th 11:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.77x</span>
// //                   </td>
// //                   <td>
// //                     +1.40% <br /> <small>1 hour</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>USB</td>
// //                   <td>
// //                     $42.43 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $42.54 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.64x</span>
// //                   </td>
// //                   <td>
// //                     +0.26% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>FTI</td>
// //                   <td>
// //                     $28.61 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $28.99 <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.47x</span>
// //                   </td>
// //                   <td>
// //                     +1.33% <br /> <small>30 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>LUMN</td>
// //                   <td>
// //                     $4.99 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $5.00 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.41x</span>
// //                   </td>
// //                   <td>
// //                     +0.20% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>BNS</td>
// //                   <td>
// //                     $48.06 <br /> <small>Mar 20th 12:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $48.09 <br /> <small>Mar 20th 4:54 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.32x</span>
// //                   </td>
// //                   <td>
// //                     +0.06% <br /> <small>4 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>HUMA</td>
// //                   <td>
// //                     $3.29 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $3.30 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.3x</span>
// //                   </td>
// //                   <td>
// //                     +0.30% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>WAY</td>
// //                   <td>
// //                     $37.43 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $38.32 <br /> <small>Mar 20th 3:16 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.26x</span>
// //                   </td>
// //                   <td>
// //                     +2.38% <br /> <small>5 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AES</td>
// //                   <td>
// //                     $12.98 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $12.99 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.23x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>LQDA</td>
// //                   <td>
// //                     $15.40 <br /> <small>Mar 20th 1:46 PM</small>
// //                   </td>
// //                   <td>
// //                     $15.46 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.12x</span>
// //                   </td>
// //                   <td>
// //                     +0.39% <br /> <small>18 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DENN</td>
// //                   <td>
// //                     $3.97 <br /> <small>Mar 20th 3:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $4.01 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.09x</span>
// //                   </td>
// //                   <td>
// //                     +1.13% <br /> <small>16 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ASO</td>
// //                   <td>
// //                     $47.56 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $47.57 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.06x</span>
// //                   </td>
// //                   <td>
// //                     +0.02% <br /> <small>11 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TOST</td>
// //                   <td>
// //                     $35.90 <br /> <small>Mar 20th 4:26 PM</small>
// //                   </td>
// //                   <td>
// //                     $35.90 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">2.02x</span>
// //                   </td>
// //                   <td>
// //                     +0.01% <br /> <small>15 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRI</td>
// //                   <td>
// //                     $40.87 <br /> <small>Mar 20th 9:51 AM</small>
// //                   </td>
// //                   <td>
// //                     $41.22 <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.98x</span>
// //                   </td>
// //                   <td>
// //                     +0.87% <br /> <small>12 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>GENI</td>
// //                   <td>
// //                     $10.03 <br /> <small>Mar 20th 2:36 PM</small>
// //                   </td>
// //                   <td>
// //                     $10.05 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.98x</span>
// //                   </td>
// //                   <td>
// //                     +0.20% <br /> <small>17 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>VTLE</td>
// //                   <td>
// //                     $22.42 <br /> <small>Mar 20th 2:41 PM</small>
// //                   </td>
// //                   <td>
// //                     $22.77 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.97x</span>
// //                   </td>
// //                   <td>
// //                     +1.56% <br /> <small>17 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SU</td>
// //                   <td>
// //                     $37.49 <br /> <small>Mar 20th 12:03 PM</small>
// //                   </td>
// //                   <td>
// //                     $37.71 <br /> <small>Mar 20th 4:11 PM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.94x</span>
// //                   </td>
// //                   <td>
// //                     +0.59% <br /> <small>4 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AAP</td>
// //                   <td>
// //                     $37.20 <br /> <small>Mar 20th 9:41 AM</small>
// //                   </td>
// //                   <td>
// //                     $37.58 <br /> <small>Mar 20th 9:56 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.91x</span>
// //                   </td>
// //                   <td>
// //                     +1.02% <br /> <small>15 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CAL</td>
// //                   <td>
// //                     $16.86 <br /> <small>Mar 20th 5:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $16.86 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.91x</span>
// //                   </td>
// //                   <td>
// //                     +0.03% <br /> <small>14 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ACVA</td>
// //                   <td>
// //                     $15.46 <br /> <small>Mar 20th 1:51 PM</small>
// //                   </td>
// //                   <td>
// //                     $15.69 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.81x</span>
// //                   </td>
// //                   <td>
// //                     +1.49% <br /> <small>18 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SMR</td>
// //                   <td>
// //                     $18.53 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $18.54 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.8x</span>
// //                   </td>
// //                   <td>
// //                     +0.05% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CNH</td>
// //                   <td>
// //                     $12.94 <br /> <small>Mar 20th 3:11 PM</small>
// //                   </td>
// //                   <td>
// //                     $12.95 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.73x</span>
// //                   </td>
// //                   <td>
// //                     +0.04% <br /> <small>16 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>EOSE</td>
// //                   <td>
// //                     $4.43 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $4.44 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.7x</span>
// //                   </td>
// //                   <td>
// //                     +0.11% <br /> <small>11 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>BE</td>
// //                   <td>
// //                     $25.32 <br /> <small>Mar 20th 9:32 AM</small>
// //                   </td>
// //                   <td>
// //                     $25.41 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">1.68x</span>
// //                   </td>
// //                   <td>
// //                     +0.36% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>PARA</td>
// //                   <td>
// //                     $11.74 <br /> <small>Mar 20th 8:02 AM</small>
// //                   </td>
// //                   <td>
// //                     $11.75 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>1.68x</td>
// //                   <td>
// //                     +0.04% <br /> <small>3 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>DNN</td>
// //                   <td>
// //                     $1.50 <br /> <small>Mar 20th 1:51 PM</small>
// //                   </td>
// //                   <td>
// //                     $1.51 <br /> <small>Mar 20th 2:41 PM</small>
// //                   </td>
// //                   <td>1.67x</td>
// //                   <td>
// //                     +0.66% <br /> <small>49 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>ALLY</td>
// //                   <td>
// //                     $35.80 <br /> <small>Mar 20th 9:51 AM</small>
// //                   </td>
// //                   <td>
// //                     $36.13 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>1.65x</td>
// //                   <td>
// //                     +0.94% <br /> <small>22 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SEMR</td>
// //                   <td>
// //                     $10.09 <br /> <small>Mar 20th 3:39 PM</small>
// //                   </td>
// //                   <td>
// //                     $10.14 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>1.58x</td>
// //                   <td>
// //                     +0.50% <br /> <small>16 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>AR</td>
// //                   <td>
// //                     $41.07 <br /> <small>Mar 20th 9:36 AM</small>
// //                   </td>
// //                   <td>
// //                     $41.26 <br /> <small>Mar 20th 10:03 AM</small>
// //                   </td>
// //                   <td>1.58x</td>
// //                   <td>
// //                     +0.45% <br /> <small>27 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>TRMD</td>
// //                   <td>
// //                     $19.96 <br /> <small>Mar 20th 8:06 AM</small>
// //                   </td>
// //                   <td>
// //                     $19.97 <br /> <small>Mar 20th 8:14 AM</small>
// //                   </td>
// //                   <td>1.56x</td>
// //                   <td>
// //                     +0.05% <br /> <small>7 minutes</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>CRMD</td>
// //                   <td>
// //                     $10.84 <br /> <small>Mar 20th 3:59 PM</small>
// //                   </td>
// //                   <td>
// //                     $10.85 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>1.53x</td>
// //                   <td>
// //                     +0.09% <br /> <small>16 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>BP</td>
// //                   <td>
// //                     $34.71 <br /> <small>Mar 20th 12:31 PM</small>
// //                   </td>
// //                   <td>
// //                     $34.76 <br /> <small>Mar 21st 8:03 AM</small>
// //                   </td>
// //                   <td>1.52x</td>
// //                   <td>
// //                     +0.14% <br /> <small>19 hours</small>
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>SGRY</td>
// //                   <td>
// //                     $24.40 <br /> <small>Mar 20th 5:24 PM</small>
// //                   </td>
// //                   <td>
// //                     $24.41 <br /> <small>Mar 20th 5:36 PM</small>
// //                   </td>
// //                   <td>1.52x</td>
// //                   <td>
// //                     +0.04% <br /> <small>11 minutes</small>
// //                   </td>
// //                 </tr>
// //               </>
// //             )}

// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HistoricalDataFlow;

// // // import React, { useState, useEffect } from "react";
// // // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
// // // import axios from "axios";

// // // const API_BASE_URL = process.env.REACT_APP_API_URL;

// // // const HistoricalDataFlow = ({ darkMode }) => {
// // //   const [activeTab, setActiveTab] = useState("largeCaps");
// // //   const [trend, setTrend] = useState("up");
// // //   const [tableData, setTableData] = useState([]);

// // //   const fetchData = async (tab = activeTab, selectedTrend = trend) => {
// // //     let url = `${API_BASE_URL}api/`;

// // //     if (tab === "largeCaps") {
// // //       url += selectedTrend === "up" ? "large_caps/" : "large_caps_down/";
// // //     } else if (tab === "mediumCaps") {
// // //       url += selectedTrend === "up" ? "medium_caps/" : "medium_caps_down/";
// // //     } else if (tab === "smallCaps") {
// // //       url += selectedTrend === "up" ? "small_caps/" : "small_caps_down/";
// // //     }

// // //     try {
// // //       const response = await axios.get(url);
// // //       setTableData(response.data.chunked_data || []);
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //       setTableData([]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, [activeTab, trend]);

// // //   const handleTabChange = (tab) => {
// // //     setActiveTab(tab);
// // //   };

// // //   const handleTrendChange = (selectedTrend) => {
// // //     setTrend(selectedTrend);
// // //   };

// // //   return (
// // //     <div
// // //       className="container"
// // //       style={{
// // //         backgroundColor: darkMode ? "#000000" : "#ffffff",
// // //         color: darkMode ? "#ffffff" : "#000000",
// // //         padding: "20px",
// // //         borderRadius: "10px",
// // //         border: darkMode ? "1px solid #444" : "1px solid #ddd",
// // //       }}
// // //     >
// // //       <h2>Historic ATS Gainers & Losers</h2>

// // //       <div className="d-flex justify-content-between align-items-center">
// // //         <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// // //           <li className="nav-item">
// // //             <button
// // //               className={`nav-link ${activeTab === "largeCaps" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("largeCaps")}
// // //             >
// // //               Large Caps
// // //             </button>
// // //           </li>
// // //           <li className="nav-item">
// // //             <button
// // //               className={`nav-link ${activeTab === "mediumCaps" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("mediumCaps")}
// // //             >
// // //               Medium Caps
// // //             </button>
// // //           </li>
// // //           <li className="nav-item">
// // //             <button
// // //               className={`nav-link ${activeTab === "smallCaps" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("smallCaps")}
// // //             >
// // //               Small Caps
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         <div className="trend-icons d-flex gap-2 mt-4">
// // //           <FaArrowTrendUp
// // //             className={`up-icon ${trend === "up" ? "active-trend" : ""}`}
// // //             onClick={() => handleTrendChange("up")}
// // //             style={{ cursor: "pointer", fontSize: "24px" }}
// // //           />
// // //           <FaArrowTrendDown
// // //             className={`down-icon ${trend === "down" ? "active-trend" : ""}`}
// // //             onClick={() => handleTrendChange("down")}
// // //             style={{ cursor: "pointer", fontSize: "24px" }}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="table-responsive mt-3">
// // //         <table className="table table-bordered table_history">
// // //           <thead
// // //             className="table-primary"
// // //             style={{
// // //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// // //               color: darkMode ? "#ffffff" : "#000000",
// // //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// // //             }}
// // //           >
// // //             <tr>
// // //               <th>TICKER</th>
// // //               <th>FROM</th>
// // //               <th>TO</th>
// // //               <th>IRREGULAR VOL</th>
// // //               <th>PERCENT CHANGE</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody
// // //             style={{
// // //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// // //               color: darkMode ? "#ffffff" : "#000000",
// // //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// // //             }}
// // //           >
// // //             {tableData.length === 0 ? (
// // //               <tr>
// // //                 <td colSpan="5" className="text-center">
// // //                   No data found
// // //                 </td>
// // //               </tr>
// // //             ) : (
// // //               tableData.map((row, idx) => (
// // //                 <tr key={idx}>
// // //                   {row.map((col, i) => (
// // //                     <td key={i}>{col}</td>
// // //                   ))}
// // //                 </tr>
// // //               ))
// // //             )}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HistoricalDataFlow;

// // // this code is work ====================
// // import React, { useEffect, useState } from "react";
// // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// // const API_BASE_URL = process.env.REACT_APP_API_URL;

// // const HistoricalDataFlow = ({ darkMode }) => {
// //   const [activeTab, setActiveTab] = useState("largeCaps");
// //   const [trend, setTrend] = useState("up");
// //   const [tableData, setTableData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const apiPaths = {
// //     up: {
// //       largeCaps: "api/large_caps/",
// //       mediumCaps: "api/medium_caps/",
// //       smallCaps: "api/small_caps/",
// //     },
// //     down: {
// //       largeCaps: "api/large_caps_down/",
// //       mediumCaps: "api/medium_caps_down/",
// //       smallCaps: "api/small_caps_down/",
// //     },
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       setError(null);
// //       const endpoint = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

// //       try {
// //         const response = await fetch(endpoint);
// //         if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
// //         const data = await response.json();

// //         // Support both formats: {"chunked_data": [...]} or just raw list
// //         const formatted = data.chunked_data || data;
// //         setTableData(formatted);
// //       } catch (err) {
// //         console.error("Fetch error:", err.message);
// //         setError("Failed to load data. Please try again.");
// //         setTableData([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [activeTab, trend]);

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         backgroundColor: darkMode ? "#000000" : "#ffffff",
// //         color: darkMode ? "#ffffff" : "#000000",
// //         padding: "20px",
// //       }}
// //     >
// //       <div className="theme-title">
// //         <h2>Historic ATS Gainers & Losers</h2>
// //       </div>

// //       {/* Tabs */}
// //       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// //         {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
// //           <li className="nav-item" key={tab}>
// //             <button
// //               className={`nav-link ${activeTab === tab ? "active" : ""}`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.replace("Caps", " Caps").replace(/^./, (c) => c.toUpperCase())}
// //             </button>
// //           </li>
// //         ))}

// //         {/* Trend toggle icons */}
// //         <span className="trend-icons">
// //           <FaArrowTrendUp
// //             className={`up-icon ${trend === "up" ? "active-trend" : ""}`}
// //             onClick={() => setTrend("up")}
// //           />
// //           <FaArrowTrendDown
// //             className={`down-icon ${trend === "down" ? "active-trend" : ""}`}
// //             onClick={() => setTrend("down")}
// //           />
// //         </span>
// //       </ul>

// //       {/* Table */}
// //       <div className="table-responsive mt-3">
// //         <table className="table table-bordered table_history">
// //           <thead
// //             className="table-primary"
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#000000",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             <tr>
// //               <th>TICKER</th>
// //               <th>FROM</th>
// //               <th>TO</th>
// //               <th>IRREGULAR VOL</th>
// //               <th>PERCENT CHANGE</th>
// //             </tr>
// //           </thead>
// //           <tbody
// //             style={{
// //               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#1c1e20",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   Loading data...
// //                 </td>
// //               </tr>
// //             ) : error ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center text-danger">
// //                   {error}
// //                 </td>
// //               </tr>
// //             ) : tableData.length > 0 ? (
// //               tableData.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td>{item.ticker}</td>
// //                   <td>
// //                     ${item.from_price}
// //                     <br />
// //                     <small>{item.from_time}</small>
// //                   </td>
// //                   <td>
// //                     ${item.to_price}
// //                     <br />
// //                     <small>{item.to_time}</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">{item.irregular_vol}x</span>
// //                   </td>
// //                   <td>
// //                     <span className="text-success">+{item.percent_change}%</span>
// //                     <br />
// //                     <small>{item.duration}</small>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   No data available.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HistoricalDataFlow;

// // import React, { useEffect, useState } from "react";
// // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// // const API_BASE_URL = process.env.REACT_APP_API_URL;

// // const HistoricalDataFlow = ({ darkMode }) => {
// //   const [activeTab, setActiveTab] = useState("largeCaps");
// //   const [trend, setTrend] = useState("up");
// //   const [tableData, setTableData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [active, setActive] = useState("up");

// //   const apiPaths = {
// //     up: {
// //       largeCaps: "api/large_caps/",
// //       mediumCaps: "api/medium_caps/",
// //       smallCaps: "api/small_caps/",
// //     },
// //     down: {
// //       largeCaps: "api/large_caps_down/",
// //       mediumCaps: "api/medium_caps_down/",
// //       smallCaps: "api/small_caps_down/",
// //     },
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       setError(null);
// //       const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;
// //       console.log("🔍 Fetching:", url); // ✅ Debug log

// //       try {
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setTableData(data);
// //       } catch (err) {
// //         console.error("Fetch error:", err.message);
// //         setError("Failed to load data. Please try again later.");
// //         setTableData([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [activeTab, trend]);

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         backgroundColor: darkMode ? "#000000" : "#ffffff",
// //         color: darkMode ? "#ffffff" : "#000000",
// //         padding: "20px",
// //       }}
// //     >
// //       <div className="theme-title">
// //         <h2>Historic ATS Gainers & Losers</h2>
// //       </div>

// //       {/* Tabs */}
// //       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// //         {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
// //           <li className="nav-item" key={tab}>
// //             <button
// //               className={`nav-link ${activeTab === tab ? "active" : ""}`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.replace("Caps", " Caps").replace(/^./, (c) => c.toUpperCase())}
// //             </button>
// //           </li>
// //         ))}

// //         {/* Trend toggle icons */}
// //         <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
// //           <FaArrowTrendUp
// //             className="up-icon"
// //             style={{
// //               backgroundColor: active === "up" ? "green" : "grey",
// //               color: "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("up");
// //               setActive("up");
// //             }}
// //           />
// //           <FaArrowTrendDown
// //             className="down-icon"
// //             style={{
// //               backgroundColor: active === "down" ? "red" : "grey",
// //               color: active === "down" ? "white" : "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("down");
// //               setActive("down");
// //             }}
// //           />
// //         </div>
// //       </ul>

// //       {/* Table */}
// //       <div className="table-responsive mt-3">
// //         <table className="table table-bordered table_history">
// //           <thead
// //             className="table-primary"
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#000000",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             <tr>
// //               <th>TICKER</th>
// //               <th>FROM</th>
// //               <th>TO</th>
// //               <th>IRREGULAR VOL</th>
// //               <th>PERCENT CHANGE</th>
// //             </tr>
// //           </thead>
// //           <tbody
// //             style={{
// //               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#1c1e20",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   Loading data...
// //                 </td>
// //               </tr>
// //             ) : error ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center text-danger">
// //                   {error}
// //                 </td>
// //               </tr>
// //             ) : tableData.length > 0 ? (
// //               tableData.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td>{item.ticker || "-"}</td>
// //                   <td>
// //                     ${item.from_price ?? "-"}
// //                     <br />
// //                     <small>{item.from_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     ${item.to_price ?? "-"}
// //                     <br />
// //                     <small>{item.to_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">{item.irregular_vol || "x"}</span>
// //                   </td>
// //                   <td>
// //                     <span className="text-success">
// //                       +{item.percent_change ? (item.percent_change * 100).toFixed(2) : "0"}%
// //                     </span>
// //                     <br />
// //                     <small>{item.duration ?? "-"}</small>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   No data available.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HistoricalDataFlow;

// // import React, { useEffect, useState } from "react";
// // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// // const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

// // const HistoricalDataFlow = ({ darkMode }) => {
// //   const [activeTab, setActiveTab] = useState("largeCaps");
// //   const [trend, setTrend] = useState("up");
// //   const [tableData, setTableData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [active, setActive] = useState("up");

// //   const apiPaths = {
// //     up: {
// //       largeCaps: "api/large_caps/",
// //       mediumCaps: "api/medium_caps/",
// //       smallCaps: "api/small_caps/",
// //     },
// //     down: {
// //       largeCaps: "api/large_caps_down/",
// //       mediumCaps: "api/medium_caps_down/",
// //       smallCaps: "api/small_caps_down/",
// //     },
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       setError(null);
// //       const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;
// //       console.log("📡 trend:", trend);
// //       console.log("📡 activeTab:", activeTab);
// //       console.log("📡 Final URL:", url);

// //       try {
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setTableData(data);
// //       } catch (err) {
// //         console.error("Fetch error:", err.message);
// //         setError("Failed to load data. Please try again later.");
// //         setTableData([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [activeTab, trend]);

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         backgroundColor: darkMode ? "#000000" : "#ffffff",
// //         color: darkMode ? "#ffffff" : "#000000",
// //         padding: "20px",
// //       }}
// //     >
// //       <div className="theme-title">
// //         <h2>Historic ATS Gainers & Losers</h2>
// //       </div>

// //       {/* Tabs */}
// //       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// //         {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
// //           <li className="nav-item" key={tab}>
// //             <button
// //               className={`nav-link ${activeTab === tab ? "active" : ""}`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.replace("Caps", " Caps").replace(/^./, (c) => c.toUpperCase())}
// //             </button>
// //           </li>
// //         ))}

// //         {/* Trend toggle icons */}
// //         <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
// //           <FaArrowTrendUp
// //             className="up-icon"
// //             style={{
// //               backgroundColor: active === "up" ? "green" : "grey",
// //               color: "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("up");
// //               setActive("up");
// //             }}
// //           />
// //           <FaArrowTrendDown
// //             className="down-icon"
// //             style={{
// //               backgroundColor: active === "down" ? "red" : "grey",
// //               color: active === "down" ? "white" : "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("down");
// //               setActive("down");
// //             }}
// //           />
// //         </div>
// //       </ul>

// //       {/* Table */}
// //       <div className="table-responsive mt-3">
// //         <table className="table table-bordered table_history">
// //           <thead
// //             className="table-primary"
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#000000",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             <tr>
// //               <th>TICKER</th>
// //               <th>FROM</th>
// //               <th>TO</th>
// //               <th>IRREGULAR VOL</th>
// //               <th>PERCENT CHANGE</th>
// //             </tr>
// //           </thead>
// //           <tbody
// //             style={{
// //               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#1c1e20",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   Loading data...
// //                 </td>
// //               </tr>
// //             ) : error ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center text-danger">
// //                   {error}
// //                 </td>
// //               </tr>
// //             ) : tableData.length > 0 ? (
// //               tableData.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td>{item.ticker || "-"}</td>
// //                   <td>
// //                     ${item.from_price ?? "-"}
// //                     <br />
// //                     <small>{item.from_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     ${item.to_price ?? "-"}
// //                     <br />
// //                     <small>{item.to_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     <span className="badge bg-success">{item.irregular_vol || "x"}</span>
// //                   </td>
// //                   <td>
// //                     <span className="text-success">
// //                       +{item.percent_change ? (item.percent_change * 100).toFixed(2) : "0"}%
// //                     </span>
// //                     <br />
// //                     <small>{item.duration ?? "-"}</small>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   No data available.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HistoricalDataFlow;

// // ==================================================================================================
// // import React, { useEffect, useState } from "react";
// // import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// // import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// // const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

// // const HistoricalDataFlow = ({ darkMode }) => {
// //   const [activeTab, setActiveTab] = useState("largeCaps");
// //   const [trend, setTrend] = useState("up");
// //   const [tableData, setTableData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [active, setActive] = useState("up");

// //   const apiPaths = {
// //     up: {
// //       largeCaps: "api/large_caps/",
// //       mediumCaps: "api/medium_caps/",
// //       smallCaps: "api/small_caps/",
// //     },
// //     down: {
// //       largeCaps: "api/large_caps_down/",
// //       mediumCaps: "api/medium_caps_down/",
// //       smallCaps: "api/small_caps_down/",
// //     },
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       setError(null);
// //       const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

// //       try {
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error: ${response.status}`);
// //         }

// //         const raw = await response.json();

// //         // NEW: Safely extract and parse trend-specific array
// //         let cleanData = [];
// //         if (Array.isArray(raw) && raw.length > 0) {
// //           const trendKey = trend === "up" ? "trending_up" : "trending_down";
// //           const rawList = raw[0][trendKey];
// //           if (typeof rawList === "string") {
// //             cleanData = JSON.parse(rawList); // parse stringified JSON
// //           } else if (Array.isArray(rawList)) {
// //             cleanData = rawList;
// //           }
// //         }

// //         setTableData(cleanData);
// //       } catch (err) {
// //         console.error("Fetch error:", err.message);
// //         setError("Failed to load data. Please try again later.");
// //         setTableData([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [activeTab, trend]);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     setLoading(true);
// //   //     setError(null);
// //   //     const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;
// //   //     console.log("📡 trend:", trend);
// //   //     console.log("📡 activeTab:", activeTab);
// //   //     console.log("📡 Final URL:", url);

// //   //     try {
// //   //       const response = await fetch(url);
// //   //       if (!response.ok) {
// //   //         throw new Error(`HTTP error: ${response.status}`);
// //   //       }
// //   //       const data = await response.json();
// //   //       setTableData(data);
// //   //     } catch (err) {
// //   //       console.error("Fetch error:", err.message);
// //   //       setError("Failed to load data. Please try again later.");
// //   //       setTableData([]);
// //   //     } finally {
// //   //       setLoading(false);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, [activeTab, trend]);

// //   return (
// //     <div
// //       className="container "
// //       style={{
// //         backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
// //         color: darkMode ? "#ffffff" : "#000000",
// //         padding: "20px",
// //       }}
// //      >
// //       <div className="theme-title">
// //         <h2>Historic ATS Gainers & Losers</h2>
// //       </div>

// //       {/* Tabs */}
// //       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
// //         {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
// //           <li className="nav-item" key={tab}>
// //             <button
// //               className={`nav-link ${activeTab === tab ? "active" : ""}`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.replace("Caps", " Caps").replace(/^./, (c) => c.toUpperCase())}
// //             </button>
// //           </li>
// //         ))}

// //         {/* Trend toggle icons */}
// //         <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
// //           <FaArrowTrendUp
// //             className="up-icon"
// //             style={{
// //               backgroundColor: active === "up" ? "green" : "grey",
// //               color: "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("up");
// //               setActive("up");
// //             }}
// //           />
// //           <FaArrowTrendDown
// //             className="down-icon"
// //             style={{
// //               backgroundColor: active === "down" ? "red" : "grey",
// //               color: active === "down" ? "white" : "black",
// //               padding: "10px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => {
// //               setTrend("down");
// //               setActive("down");
// //             }}
// //           />
// //         </div>
// //       </ul>

// //       {/* Table */}
// //       <div className="table-responsive mt-3">
// //         <table className="table table-bordered table_history">
// //           <thead
// //             className="table-primary"
// //             style={{
// //               backgroundColor: darkMode ? "#000000" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#000000",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             <tr>
// //               <th>TICKER</th>
// //               <th>FROM</th>
// //               <th>TO</th>
// //               <th>IRREGULAR VOL</th>
// //               <th>PERCENT CHANGE</th>
// //             </tr>
// //           </thead>
// //           <tbody
// //             style={{
// //               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
// //               color: darkMode ? "#ffffff" : "#1c1e20",
// //               border: darkMode ? "1px solid #444" : "1px solid #ddd",
// //             }}
// //           >
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   Loading data...
// //                 </td>
// //               </tr>
// //             ) : error ? (
// //               <tr>
// //                 <td colSpan="5" className="text-center text-danger">
// //                   {error}
// //                 </td>
// //               </tr>
// //             ) : tableData.length > 0 ? (
// //               tableData.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td>{item.ticker || "-"}</td>
// //                   <td>
// //                     ${item.from_price ?? "-"}
// //                     <br />
// //                     <small>{item.from_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     ${item.to_price ?? "-"}
// //                     <br />
// //                     <small>{item.to_time ?? "-"}</small>
// //                   </td>
// //                   <td>
// //                     <span className={`badge ${trend === "up" ? "bg-success" : "bg-danger"}`}>
// //                       {item.irregular_vol || "x"}
// //                     </span>
// //                   </td>
// //                   <td>
// //                     <span className="text-success">
// //                       +{item.percent_change ? (item.percent_change * 100).toFixed(2) : "0"}%
// //                     </span>
// //                     <br />
// //                     <small>{item.duration ?? "-"}</small>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5" className="text-center">
// //                   No data available.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HistoricalDataFlow;

// // this is the code =========================================================================
// import React, { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/historicalDataFlow.css";
// import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

// const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

// const HistoricalDataFlow = ({ darkMode }) => {
//   const [activeTab, setActiveTab] = useState("largeCaps");
//   const [trend, setTrend] = useState("up");
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [active, setActive] = useState("up");

//   const apiPaths = {
//     up: {
//       largeCaps: "api/large_caps/",
//       mediumCaps: "api/medium_caps/",
//       smallCaps: "api/small_caps/",
//     },
//     down: {
//       largeCaps: "api/large_caps_down/",
//       mediumCaps: "api/medium_caps_down/",
//       smallCaps: "api/small_caps_down/",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

//         const raw = await response.json();
//         const cleanData = Array.isArray(raw) ? raw : [];

//         setTableData(cleanData);
//       } catch (err) {
//         console.error("Fetch error:", err.message);
//         setError("Failed to load data. Please try again later.");
//         setTableData([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeTab, trend]);

//   return (
//     <div
//       className="container"
//       style={{
//         backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
//         color: darkMode ? "#ffffff" : "#000000",
//         padding: "20px",
//       }}
//     >
//       <div className="theme-title">
//         <h2>Historic ATS Gainers & Losers</h2>
//       </div>

//       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
//         {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
//           <li className="nav-item" key={tab}>
//             <button
//               className={`nav-link ${activeTab === tab ? "active" : ""}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.replace("Caps", " Caps").replace(/^./, (c) => c.toUpperCase())}
//             </button>
//           </li>
//         ))}

//         <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
//           <FaArrowTrendUp
//             className="up-icon"
//             style={{
//               backgroundColor: active === "up" ? "green" : "grey",
//               color: "black",
//               padding: "10px",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//             onClick={() => {
//               setTrend("up");
//               setActive("up");
//             }}
//           />
//           <FaArrowTrendDown
//             className="down-icon"
//             style={{
//               backgroundColor: active === "down" ? "red" : "grey",
//               color: active === "down" ? "white" : "black",
//               padding: "10px",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//             onClick={() => {
//               setTrend("down");
//               setActive("down");
//             }}
//           />
//         </div>
//       </ul>

//       <div className="table-responsive mt-3">
//         <table className="table table-bordered table_history">
//           <thead
//             className="table-primary"
//             style={{
//               backgroundColor: darkMode ? "#000000" : "#ffffff",
//               color: darkMode ? "#ffffff" : "#000000",
//               border: darkMode ? "1px solid #444" : "1px solid #ddd",
//             }}
//           >
//             <tr>
//               <th>TICKER</th>
//               <th>FROM</th>
//               <th>TO</th>
//               <th>IRREGULAR VOL</th>
//               <th>PERCENT CHANGE</th>
//             </tr>
//           </thead>
//           <tbody
//             style={{
//               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
//               color: darkMode ? "#ffffff" : "#1c1e20",
//               border: darkMode ? "1px solid #444" : "1px solid #ddd",
//             }}
//           >
//             {loading ? (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Loading data...
//                 </td>
//               </tr>
//             ) : error ? (
//               <tr>
//                 <td colSpan="5" className="text-center text-danger">
//                   {error}
//                 </td>
//               </tr>
//             ) : tableData.length > 0 ? (
//               tableData.map((item, idx) => (
//                 <tr key={idx}>
//                   <td>{item.ticker || "-"}</td>
//                   <td>
//                     ${item.from_price ?? "-"}
//                     <br />
//                     <small>{item.from_time ?? "-"}</small>
//                   </td>
//                   <td>
//                     ${item.to_price ?? "-"}
//                     <br />
//                     <small>{item.to_time ?? "-"}</small>
//                   </td>
//                   <td>
//                     <span className={`badge ${trend === "up" ? "bg-success" : "bg-danger"}`}>
//                       {item.irregular_vol || "x"}
//                     </span>
//                   </td>
//                   <td>
//                   <span
//                    className={item.percent_change >= 0 ? "text-success" : "text-danger"}>
//                   {item.percent_change >= 0 ? "+" : ""}
//                   {(item.percent_change * 100).toFixed(2)}%
//                 </span>
// <br />
// <small>{item.duration ?? "-"}</small>

//                     <br />
//                     <small>{item.duration ?? "-"}</small>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HistoricalDataFlow;

import { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import "../DashboardSidebarComp/styles/historicalDataFlow.css";

const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

const HistoricalDataFlow = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("largeCaps");
  const [trend, setTrend] = useState("up");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState("up");

  const apiPaths = {
    up: {
      largeCaps: "api/large_caps/",
      mediumCaps: "api/medium_caps/",
      smallCaps: "api/small_caps/",
    },
    down: {
      largeCaps: "api/large_caps_down/",
      mediumCaps: "api/medium_caps_down/",
      smallCaps: "api/small_caps_down/",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        setTableData(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load data. Please try again later.");
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, trend]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "20px",
      }}
    >
      <div className="theme-title">
        <h2>Historic ATS Gainers & Losers</h2>
      </div>

      <ul className="nav nav-tabs gap-2 mt-4 historic-table">
        {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab
                .replace("Caps", " Caps")
                .replace(/^./, (c) => c.toUpperCase())}
            </button>
          </li>
        ))}

        <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
          <FaArrowTrendUp
            className="up-icon"
            style={{
              backgroundColor: active === "up" ? "green" : "grey",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTrend("up");
              setActive("up");
            }}
          />
          <FaArrowTrendDown
            className="down-icon"
            style={{
              backgroundColor: active === "down" ? "red" : "grey",
              color: active === "down" ? "white" : "black",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTrend("down");
              setActive("down");
            }}
          />
        </div>
      </ul>

      <div className="table-responsive mt-3">
        <table className="table table-bordered table_history">
          <thead
            className="table-primary"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              border: darkMode ? "1px solid #444" : "1px solid #ddd",
            }}
          >
            <tr>
              <th>TICKER</th>
              <th>FROM</th>
              <th>TO</th>
              <th>IRREGULAR VOL</th>
              <th>PERCENT CHANGE</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
              color: darkMode ? "#ffffff" : "#1c1e20",
              border: darkMode ? "1px solid #444" : "1px solid #ddd",
            }}
          >
            {/* {loading ? (
              <tr>
                <td colSpan="5" className="text-center">Loading data...</td>
              </tr> */}
            {loading ? (
              [...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(5)].map((_, colIndex) => (
                    <td key={colIndex}>
                      <div className="shimmer shimmer-line"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan="5" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : tableData.length > 0 ? (
              tableData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.ticker || "-"}</td>
                  <td>
                    {item.from_price && item.from_time ? (
                      <>
                        ${item.from_price} <br />
                        <small>{item.from_time}</small>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {item.to_price && item.to_time ? (
                      <>
                        ${item.to_price} <br />
                        <small>{item.to_time}</small>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        trend === "up" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.irregular_vol || "x"}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        parseFloat(item.percent_change) >= 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {parseFloat(item.percent_change) >= 0 ? "+" : ""}
                      {isNaN(parseFloat(item.percent_change))
                        ? "NaN%"
                        : `${parseFloat(item.percent_change).toFixed(2)}%`}
                    </span>

                    <br />
                    <small>{item.duration ?? "-"}</small>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalDataFlow;
