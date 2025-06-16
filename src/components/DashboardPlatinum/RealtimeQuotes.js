import axios from "axios";
import { useEffect, useState } from "react";
import UpcomingIPOs from "./UpcomingIPOs";

const API_KEY = "04RGF1U9PAJ49VYI";
const defaultSymbols = [
  "AAPL",
  "MSFT",
  "IBM",
  "GOOGL",
  "META",
  "AMZN",
  "TSLA",
  "NFLX",
];

const RealtimeQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const quote = response.data["Global Quote"];
    return {
      symbol: quote["01. symbol"],
      open: quote["02. open"],
      high: quote["03. high"],
      low: quote["04. low"],
      close: quote["05. price"],
      change: quote["09. change"],
      change_percent: quote["10. change percent"],
    };
  };

  const fetchQuotes = async (symbols) => {
    setLoading(true);
    try {
      const promises = symbols.map((sym) => fetchQuote(sym));
      const results = await Promise.all(promises);
      setQuotes(results);
    } catch (err) {
      console.error("Error fetching live data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(defaultSymbols);
  }, []);

  const handleSearch = () => {
    if (!searchSymbol.trim()) return;
    fetchQuotes([searchSymbol.trim().toUpperCase()]);
  };

  return (
    <div class="" style={{ overflow: "hidden" }}>
      <div class="row">
        <div className="col-lg-6">
          <div
            className="card shadow realtime-card"
            style={{ backgroundColor: "#161515", border: "1px solid #2c2c2c" }}
          >
            <div className="card-body text-white">
              <h5 className="card-title mb-4">Live Realtime Quotes</h5>

              <div className="mb-3 d-flex">
                <input
                  type="text"
                  className="form-control me-2 bg-dark text-white border-secondary"
                  placeholder="Search symbol (e.g. TSLA)"
                  value={searchSymbol}
                  onChange={(e) => setSearchSymbol(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="btn btn-outline-light"
                >
                  Search
                </button>
              </div>

              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((q) => (
                        <tr key={q.symbol}>
                          <td>{q.symbol}</td>
                          <td>{q.open}</td>
                          <td>{q.high}</td>
                          <td>{q.low}</td>
                          <td>{q.close}</td>
                          <td
                            style={{
                              color: parseFloat(q.change) >= 0 ? "lime" : "red",
                            }}
                          >
                            {q.change} ({q.change_percent})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <UpcomingIPOs />
        </div>
      </div>
    </div>
  );
};

export default RealtimeQuotes;
