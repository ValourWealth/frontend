import { useEffect, useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";
const BASE_URL = "https://www.alphavantage.co/query";

const TopGainersLosers = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTopGainersLosers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.top_gainers && data.top_losers) {
        // Get top 15 gainers and losers
        setGainers(data.top_gainers.slice(0, 15));
        setLosers(data.top_losers.slice(0, 15));
      } else {
        // Fallback mock data
        const mockGainers = [
          { ticker: "CARM", price: "$1.1100", change_percentage: "+399.418%" },
          { ticker: "KLTOW", price: "$0.2950", change_percentage: "+136.0%" },
          { ticker: "EVGN", price: "$2.2600", change_percentage: "+100.0%" },
          { ticker: "MRIN", price: "$1.7000", change_percentage: "+100.0%" },
          { ticker: "NCNA", price: "$0.1435", change_percentage: "+88.3202%" },
          { ticker: "TPET", price: "$0.0890", change_percentage: "+78.0%" },
          { ticker: "EDRY", price: "$1.2500", change_percentage: "+65.89%" },
          { ticker: "LUNG", price: "$2.1800", change_percentage: "+55.71%" },
          { ticker: "BORR", price: "$4.2100", change_percentage: "+48.94%" },
          { ticker: "SHIP", price: "$1.8900", change_percentage: "+42.86%" },
          { ticker: "EOSE", price: "$0.7845", change_percentage: "+38.12%" },
          { ticker: "GSAT", price: "$1.4200", change_percentage: "+35.24%" },
          { ticker: "PHIO", price: "$0.9876", change_percentage: "+32.67%" },
          { ticker: "LTRN", price: "$3.5600", change_percentage: "+28.45%" },
          { ticker: "GENE", price: "$2.7800", change_percentage: "+25.68%" },
        ];

        const mockLosers = [
          { ticker: "BIYA", price: "$1.9700", change_percentage: "-50.3778%" },
          { ticker: "BTBDW", price: "$0.0446", change_percentage: "-44.25%" },
          { ticker: "LVROW", price: "$0.0500", change_percentage: "-41.0377%" },
          { ticker: "UNCY", price: "$0.5321", change_percentage: "-40.8778%" },
          { ticker: "CAPTW", price: "$0.0155", change_percentage: "-39.6087%" },
          { ticker: "DFLIW", price: "$0.0234", change_percentage: "-38.95%" },
          { ticker: "ALZN", price: "$0.8970", change_percentage: "-35.67%" },
          { ticker: "PRQR", price: "$1.2300", change_percentage: "-32.89%" },
          { ticker: "HTOO", price: "$0.6754", change_percentage: "-30.12%" },
          { ticker: "GRVY", price: "$15.4500", change_percentage: "-28.95%" },
          { ticker: "INUV", price: "$0.4456", change_percentage: "-26.78%" },
          { ticker: "VYNE", price: "$2.1100", change_percentage: "-24.56%" },
          { ticker: "GOCO", price: "$0.7823", change_percentage: "-22.34%" },
          { ticker: "ADMP", price: "$1.9876", change_percentage: "-20.45%" },
          { ticker: "DXYN", price: "$3.4567", change_percentage: "-18.67%" },
        ];

        setGainers(mockGainers);
        setLosers(mockLosers);
      }
    } catch (error) {
      console.error("Error fetching gainers/losers:", error);
      // Set mock data on error
      const mockGainers = [
        { ticker: "CARM", price: "$1.1100", change_percentage: "+399.418%" },
        { ticker: "KLTOW", price: "$0.2950", change_percentage: "+136.0%" },
        { ticker: "EVGN", price: "$2.2600", change_percentage: "+100.0%" },
        { ticker: "MRIN", price: "$1.7000", change_percentage: "+100.0%" },
        { ticker: "NCNA", price: "$0.1435", change_percentage: "+88.3202%" },
      ];
      const mockLosers = [
        { ticker: "BIYA", price: "$1.9700", change_percentage: "-50.3778%" },
        { ticker: "BTBDW", price: "$0.0446", change_percentage: "-44.25%" },
        { ticker: "LVROW", price: "$0.0500", change_percentage: "-41.0377%" },
        { ticker: "UNCY", price: "$0.5321", change_percentage: "-40.8778%" },
        { ticker: "CAPTW", price: "$0.0155", change_percentage: "-39.6087%" },
      ];
      setGainers(mockGainers);
      setLosers(mockLosers);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopGainersLosers();
  }, []);

  return (
    <div className="top-gainers-losers-container">
      <style jsx>{`
        .top-gainers-losers-container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .market-card {
          background: #2d2d2d;
          border: 1px solid #404040;
          border-radius: 12px;
          color: #ffffff;
        }

        .card-header {
          background: transparent;
          border-bottom: 1px solid #404040;
          padding: 16px 20px;
          margin-bottom: 0;
        }

        .card-header h5 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }

        .card-body {
          padding: 0;
          max-height: 400px;
          overflow-y: auto;
        }

        .card-body::-webkit-scrollbar {
          width: 6px;
        }

        .card-body::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 3px;
        }

        .card-body::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 3px;
        }

        .card-body::-webkit-scrollbar-thumb:hover {
          background: #666;
        }

        .gainer-item,
        .loser-item {
          padding: 12px 20px;
          border-bottom: 1px solid #404040;
          transition: background-color 0.2s ease;
        }

        .gainer-item:hover,
        .loser-item:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .gainer-item:last-child,
        .loser-item:last-child {
          border-bottom: none;
        }

        .stock-symbol {
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
        }

        .stock-price {
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .stock-change-positive {
          color: #22c55e;
          font-size: 14px;
          font-weight: 500;
        }

        .stock-change-negative {
          color: #ef4444;
          font-size: 14px;
          font-weight: 500;
        }

        .shimmer-block {
          background: linear-gradient(
            90deg,
            #333333 25%,
            #4a4a4a 50%,
            #333333 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite;
          opacity: 0.7;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 768px) {
          .stock-symbol {
            font-size: 14px;
          }

          .stock-price {
            font-size: 14px;
          }

          .stock-change-positive,
          .stock-change-negative {
            font-size: 12px;
          }

          .card-body {
            max-height: 300px;
          }
        }
      `}</style>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card market-card">
            <div className="card-header">
              <h5>Top Gainers</h5>
            </div>
            <div className="card-body">
              {loading
                ? // Shimmer Loading State
                  [...Array(8)].map((_, index) => (
                    <div key={index} className="gainer-item">
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
                  ))
                : gainers.map((stock, index) => (
                    <div key={index} className="gainer-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="stock-symbol">{stock.ticker}</div>
                        <div className="text-end">
                          <div className="stock-price">{stock.price}</div>
                          <div className="stock-change-positive">
                            {stock.change_percentage}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card market-card">
            <div className="card-header">
              <h5>Top Losers</h5>
            </div>
            <div className="card-body">
              {loading
                ? // Shimmer Loading State
                  [...Array(8)].map((_, index) => (
                    <div key={index} className="loser-item">
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
                  ))
                : losers.map((stock, index) => (
                    <div key={index} className="loser-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="stock-symbol">{stock.ticker}</div>
                        <div className="text-end">
                          <div className="stock-price">{stock.price}</div>
                          <div className="stock-change-negative">
                            {stock.change_percentage}
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
  );
};

export default TopGainersLosers;
