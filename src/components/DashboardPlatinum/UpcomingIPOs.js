import { useEffect, useState } from "react";

const ipoData = [
  {
    symbol: "KNRG",
    name: "Simplify Exchange Traded Funds",
    ipoDate: "2025-05-28",
    priceRangeLow: "0",
    priceRangeHigh: "0",
    currency: "USD",
    exchange: "NYSE",
  },
  {
    symbol: "VNTG",
    name: "Vantage Corp (Singapore)",
    ipoDate: "2025-06-10",
    priceRangeLow: "4",
    priceRangeHigh: "5",
    currency: "USD",
    exchange: "NYSE",
  },
];

const UpcomingIPOs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(ipoData);
      } catch (error) {
        console.error("Error fetching IPO data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ipo-full">
      <div className="ipo-card shadow p-2">
        <div className="card-body text-white">
          <h5 className="card-title mb-4 p-3"> Upcoming IPOs</h5>

          {loading ? (
            // Shimmer Effect
            <>
              {[...Array(2)].map((_, index) => (
                <div key={index} className="mb-4 p-3 rounded ipo-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className="shimmer-block"
                      style={{
                        height: "24px",
                        width: "60%",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block"
                      style={{
                        height: "20px",
                        width: "60px",
                        borderRadius: "12px",
                      }}
                    ></div>
                  </div>
                  <hr className="border-secondary" />
                  <div className="row">
                    <div className="col-6">
                      <div
                        className="shimmer-block mb-2"
                        style={{
                          height: "16px",
                          width: "80%",
                          borderRadius: "4px",
                        }}
                      ></div>
                      <div
                        className="shimmer-block"
                        style={{
                          height: "16px",
                          width: "60%",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                    <div className="col-6">
                      <div
                        className="shimmer-block"
                        style={{
                          height: "16px",
                          width: "85%",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Actual Data
            data.map((ipo) => (
              <div key={ipo.symbol} className="mb-4 p-3 rounded ipo-box">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">
                    <strong>{ipo.symbol}</strong> – {ipo.name}
                  </h6>
                  <span className="badge bg-secondary">{ipo.exchange}</span>
                </div>
                <hr className="border-secondary" />
                <div className="row">
                  <div className="col-6">
                    <p className="mb-1">
                      <strong>IPO Date:</strong> {ipo.ipoDate}
                    </p>
                    <p className="mb-1">
                      <strong>Currency:</strong> {ipo.currency}
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1">
                      <strong>Price Range:</strong> ${ipo.priceRangeLow} - $
                      {ipo.priceRangeHigh}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingIPOs;
