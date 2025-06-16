import axios from "axios";
import { useEffect, useState } from "react";

import HeatmapDetails from "./portfolioDetails/HeatmapDetails";
import PortfolioDetails from "./portfolioDetails/PortfolioDetail";

function PortfolioComponent() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllMarketWatch, setShowAllMarketWatch] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    :root { --sp: 1.5s; }
    @keyframes spin-all {
      0% { transform: rotate(0deg) scale(0.65); }
      100% { transform: rotate(360deg) scale(0.65); }
    }
    @keyframes spin-top {
      0% { transform: rotate(-45deg); }
      100% { transform: rotate(315deg); }
    }
    @keyframes spin-bot {
      0%, 35% { transform: rotate(0deg); }
      80%, 100% { transform: rotate(-360deg); }
    }
    @keyframes spin-left {
      0%, 35% { transform: rotate(175deg); }
      80%, 100% { transform: rotate(535deg); }
    }
    @keyframes spin-last {
      0%, 10% { transform: rotate(-280deg); }
      90%, 100% { transform: rotate(-640deg); }
    }
  `;
    document.head.appendChild(style);
  }, []);

  const colors = [
    "#fd954e",
    "#d196dd",
    "#84e4f1",
    "#ffcc00",
    "#ff7f50",
    "#32cd32",
    "#87ceeb",
    "#ba55d3",
  ];

  const getConicGradient = (assets) => {
    let gradient = "";
    let total = 0;
    assets.forEach((asset, index) => {
      const start = total;
      const end = start + asset.percentage;
      const color = colors[index % colors.length];
      gradient += `${color} ${start}% ${end}%, `;
      total = end;
    });
    return `conic-gradient(${gradient.slice(0, -2)})`;
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://backend-production-1e63.up.railway.app/api/mt5-snapshot/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      const formatted = {
        total_value: data.portfolio_value || 0,
        total_gain_loss: 0,
        total_gain_loss_percent: 0,
        assets: (data.assets || []).map((asset, index) => ({
          id: index + 1,
          asset_type: asset.asset_type || "",
          percentage: asset.percentage || 0,
          value: asset.value || 0,
        })),
        balance: data.account?.balance || 0,
        equity: data.account?.equity || 0,
        margin: data.account?.margin || 0,
        free_margin: data.account?.free_margin || 0,
        leverage: data.account?.leverage || 0,
        market_watch: data.market_watch || [],
        recent_trades: data.recent_trades || [],
      };

      setPortfolio(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(#222, #101010)",
        }}
      >
        <div
          className="content"
          style={{
            width: "50vmin",
            height: "50vmin",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "scale(0.65)",
            animation: "spin-all 5s linear infinite",
          }}
        >
          <div
            className="circle"
            style={{
              border: "6vmin solid #ff9800",
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              position: "absolute",
              top: "15vmin",
              right: "-10vmin",
              boxSizing: "border-box",
              borderTopColor: "#fff0",
              borderLeftColor: "#fff0",
              animation: "spin-bot var(--sp) ease 0s infinite",
              backgroundImage: `
              linear-gradient(0deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              linear-gradient(90deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              radial-gradient(#ffea34 5.5vmin, #fff0 calc(5.5vmin + 1px))
            `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "3vmin 1vmin, 1vmin 3vmin, 100% 100%",
              backgroundPosition: "center center",
              filter:
                "drop-shadow(0vmin 0vmin 0.5vmin #000) drop-shadow(0vmin 1vmin 0.5vmin #0004)",
            }}
          />
          <div
            className="circle"
            style={{
              border: "6vmin solid #ff9800",
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              position: "absolute",
              top: "-2vmin",
              right: "-4vmin",
              transform: "rotate(-45deg)",
              boxSizing: "border-box",
              borderTopColor: "#fff0",
              borderLeftColor: "#fff0",
              animation: "spin-top var(--sp) ease 0s infinite",
              backgroundImage: `
              linear-gradient(0deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              linear-gradient(90deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              radial-gradient(#ffea34 1.25vmin, #fff0 calc(1.25vmin + 1px))
            `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.4vmin 1vmin, 1vmin 1.4vmin, 100% 100%",
              backgroundPosition: "center center",
              filter:
                "hue-rotate(10deg) drop-shadow(0vmin 0vmin 0.5vmin #000) drop-shadow(0vmin 1vmin 0.5vmin #0004)",
            }}
          />
          <div
            className="circle"
            style={{
              border: "6vmin solid #ff9800",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              top: "-5vmin",
              left: "-13vmin",
              transform: "rotate(175deg)",
              boxSizing: "border-box",
              borderTopColor: "#fff0",
              borderLeftColor: "#fff0",
              animation:
                "spin-left var(--sp) ease calc(var(--sp) / 4) infinite",
              backgroundImage: `
              linear-gradient(0deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              linear-gradient(90deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              radial-gradient(#ffea34 9vmin, #fff0 calc(9vmin + 1px))
            `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "5vmin 1vmin, 1vmin 5vmin, 100% 100%",
              backgroundPosition: "center center",
              filter:
                "hue-rotate(20deg) drop-shadow(0vmin 0vmin 0.5vmin #000) drop-shadow(0vmin 1vmin 0.5vmin #0004)",
            }}
          />
          <div
            className="circle"
            style={{
              border: "6vmin solid #ff9800",
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              position: "absolute",
              top: "35vmin",
              left: "-6vmin",
              transform: "rotate(-280deg)",
              boxSizing: "border-box",
              borderTopColor: "#fff0",
              borderLeftColor: "#fff0",
              animation:
                "spin-last var(--sp) ease calc(calc(calc(var(--sp) / 4) + var(--sp)) * -1) infinite",
              backgroundImage: `
              linear-gradient(0deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              linear-gradient(90deg, #fff0 calc(50% - 2px), #000 calc(50% - 1px) calc(50% + 1px), #fff0 calc(50% + 2px)),
              radial-gradient(#ffea34 2.5vmin, #fff0 calc(2.5vmin + 1px))
            `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "2vmin 1vmin, 1vmin 2vmin, 100% 100%",
              backgroundPosition: "center center",
              filter:
                "hue-rotate(30deg) drop-shadow(0vmin 0vmin 0.5vmin #000) drop-shadow(0vmin 1vmin 0.5vmin #0004)",
            }}
          />
        </div>
      </div>
    );
  }

  if (!portfolio) return <div>No portfolio data available.</div>;

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-title">
          <div className="trophy-icon-container">
            <i className="bi bi-briefcase"></i>
          </div>
        </div>
        <div>
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">
            Track and manage your investments with exclusive platinum tools
          </p>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="row">
          <div className="col-lg-8 pe-lg-2">
            <div className="card summary-card p-0">
              <div className="card-body">
                <h5 className="card-title">Portfolio Summary</h5>
                <div className="total-value-section">
                  <div>
                    <div className="total-value">
                      ${parseFloat(portfolio.total_value).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="card heatmap-card">
                      <h5>Account Summary</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Current Balance: ${portfolio.balance.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Equity: ${portfolio.equity.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Margin: ${portfolio.margin.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Free Margin: ${portfolio.free_margin.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Leverage: 1:{portfolio.leverage}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card heatmap-card">
                      <h5>Recent Trades</h5>
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Volume</th>
                            <th>Price</th>
                            <th>Profit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(showAll
                            ? portfolio.recent_trades
                            : portfolio.recent_trades.slice(0, 5)
                          ).map((trade, idx) => (
                            <tr key={idx}>
                              <td>{trade.symbol || "-"}</td>
                              <td>{trade.type}</td>
                              <td>{trade.volume}</td>
                              <td>{trade.price}</td>
                              <td>${trade.profit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Show All / Show Less Button */}
                      {portfolio.recent_trades.length > 5 && (
                        <div className="text-center mt-2">
                          <button
                            className="btn btn-outline-light btn-sm w-100 p-2"
                            onClick={() => setShowAll(!showAll)}
                          >
                            {showAll ? "Show Less" : "Show All"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card heatmap-card mt-4">
                  <h5>Market Watch</h5>
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Spread</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(showAllMarketWatch
                        ? portfolio.market_watch
                        : portfolio.market_watch.slice(0, 5)
                      ).map((item, index) => (
                        <tr key={index}>
                          <td>{item.symbol}</td>
                          <td>{item.bid}</td>
                          <td>{item.ask}</td>
                          <td>{item.spread}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Show More / Show Less button */}
                  {portfolio.market_watch.length > 5 && (
                    <div className="text-center mt-2">
                      <button
                        className="btn btn-outline-light btn-sm w-100 p-2"
                        onClick={() =>
                          setShowAllMarketWatch(!showAllMarketWatch)
                        }
                      >
                        {showAllMarketWatch ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 ps-lg-2">
            <div className="card allocation-card p-0">
              <div className="card-body">
                <h5 className="card-title">Asset Allocation</h5>
                <div className="pie-chart-container d-flex justify-content-center">
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      position: "relative",
                      background: getConicGradient(portfolio.assets),
                      animation: "rotate 6s linear infinite",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "15%",
                        left: "15%",
                        width: "70%",
                        height: "70%",
                        backgroundColor: "#171717",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />
                  </div>
                </div>
                <div className="allocation-breakdown mt-3">
                  {portfolio.assets.map((asset, index) => (
                    <div
                      key={asset.id}
                      className="allocation-item d-flex justify-content-between align-items-center"
                      style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            display: "inline-block",
                            width: "12px",
                            height: "12px",
                            marginRight: "8px",
                            backgroundColor: colors[index % colors.length],
                            borderRadius: "50%",
                          }}
                        />
                        {asset.asset_type.charAt(0).toUpperCase() +
                          asset.asset_type.slice(1)}
                      </div>
                      <div>{asset.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioDetails />
      <HeatmapDetails />
    </div>
  );
}

export default PortfolioComponent;
