import { useEffect, useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";
// const PAIRS = [
//   { from: "EUR", to: "USD" },
//   { from: "GBP", to: "USD" },
//   { from: "USD", to: "JPY" },
//   { from: "BTC", to: "USD" },
// ];

const PAIRS = [
  { from: "EUR", to: "USD" },
  { from: "GBP", to: "USD" },
  { from: "USD", to: "JPY" },
  { from: "BTC", to: "USD" },
  { from: "AUD", to: "USD" },
  { from: "USD", to: "CAD" },
  { from: "USD", to: "CHF" },
  { from: "NZD", to: "USD" },
  { from: "USD", to: "INR" },
  { from: "USD", to: "CNY" },
  { from: "USD", to: "HKD" },
  { from: "USD", to: "SGD" },
  { from: "USD", to: "KRW" },
  { from: "USD", to: "ZAR" },
  { from: "USD", to: "THB" },
  { from: "USD", to: "MXN" },
  { from: "USD", to: "BRL" },
  { from: "USD", to: "SEK" },
  { from: "USD", to: "NOK" },
  { from: "USD", to: "DKK" },
  { from: "USD", to: "PLN" },
  { from: "USD", to: "TWD" },
  { from: "USD", to: "PHP" },
  { from: "USD", to: "MYR" },
  { from: "USD", to: "IDR" },
  { from: "USD", to: "TRY" },
  { from: "USD", to: "RUB" },
  { from: "USD", to: "EGP" },
  { from: "USD", to: "PKR" },
  { from: "USD", to: "SAR" },
];

const MarketInsights = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const allRates = [];

      for (const { from, to } of PAIRS) {
        try {
          const res = await fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`
          );
          const data = await res.json();
          const rate = data["Realtime Currency Exchange Rate"];

          allRates.push({
            pair: `${from}/${to}`,
            bid: parseFloat(rate["8. Bid Price"]).toFixed(4),
            ask: parseFloat(rate["9. Ask Price"]).toFixed(4),
            trend:
              parseFloat(rate["8. Bid Price"]) <
              parseFloat(rate["9. Ask Price"])
                ? "up"
                : "down",
          });
        } catch (err) {
          console.error(Error`fetching ${from}/${to}`, err);
        }
      }

      setRates(allRates);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="mb-4 position-relative">
      <div className="card insight-card platinum-card shadow-lg rounded-4 border-0 bg-dark text-light overflow-hidden position-relative">
        <div className="card-body position-relative">
          <h5 className="card-title mb-4 text-start fw-bold text-white">
            Market Insights
          </h5>
          <div className="chart-placeholder mb-4">
            <svg viewBox="0 0 600 120" className="w-100">
              <path
                d="M0,60 C100,40 200,80 300,60 C400,40 500,70 600,60"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          <div className="market-data">
            {isLoading
              ? [...Array(4)].map((_, idx) => (
                  <div key={idx} className="shimmer shimmer-line"></div>
                ))
              : rates.map(({ pair, bid, ask, trend }) => (
                  <div
                    className="market-row d-flex justify-content-between align-items-center py-3 px-2 border-bottom border-secondary-subtle hover-bg"
                    key={pair}
                  >
                    <div className="d-flex align-items-center gap-2 fw-semibold">
                      <i
                        className={`bi bi-arrow-${
                          trend === "up" ? "up" : "down"
                        }-right ${
                          trend === "up" ? "text-success" : "text-danger"
                        } fs-5`}
                      ></i>
                      <span>{pair}</span>
                    </div>
                    <div className="d-flex flex-column text-end">
                      <small className="text-muted">Bid</small>
                      <span className="fw-bold">{bid}</span>
                    </div>
                    <div className="d-flex flex-column text-end">
                      <small className="text-muted">Ask</small>
                      <span className="fw-bold">{ask}</span>
                    </div>
                  </div>
                ))}
          </div>

          {/* <div className="market-data">
            {rates.map(({ pair, bid, ask, trend }) => (
              <div
                className="market-row d-flex justify-content-between align-items-center py-3 px-2 border-bottom border-secondary-subtle hover-bg"
                key={pair}
              >
                <div className="d-flex align-items-center gap-2 fw-semibold">
                  <i
                    className={`bi bi-arrow-${
                      trend === "up" ? "up" : "down"
                    }-right ${
                      trend === "up" ? "text-success" : "text-danger"
                    } fs-5`}
                  ></i>
                  <span>{pair}</span>
                </div>
                <div className="d-flex flex-column text-end">
                  <small className="text-muted">Bid</small>
                  <span className="fw-bold">{bid}</span>
                </div>
                <div className="d-flex flex-column text-end">
                  <small className="text-muted">Ask</small>
                  <span className="fw-bold">{ask}</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner-blur"></div>
            <div className="spinner-ring"></div>
            <p className="text-light mt-3">Fetching market data...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketInsights;
