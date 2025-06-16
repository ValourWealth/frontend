import { useEffect, useState } from "react";

const TranscriptView = ({ symbol = "AAPL", quarter = "2024Q1" }) => {
  const API_KEY = "04RGF1U9PAJ49VYI";
  const BASE_URL = "https://www.alphavantage.co/query";
  const [transcript, setTranscript] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTranscript = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}?function=EARNINGS_CALL_TRANSCRIPT&symbol=${symbol}&quarter=${quarter}&apikey=${API_KEY}`
      );
      const data = await response.json();
      if (data.transcript) {
        setTranscript(data.transcript);
      } else {
        setTranscript([]);
      }
    } catch (err) {
      console.error("Failed to fetch transcript:", err);
      setTranscript([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTranscript();
  }, [symbol, quarter]);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      style={{
        padding: "2rem",
        color: "#ddd",
        backgroundColor: "#111",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
        {symbol} Earnings Call Transcript - {quarter}
      </h2>

      {loading ? (
        <p>Loading transcript...</p>
      ) : transcript.length === 0 ? (
        <p>No transcript available.</p>
      ) : (
        transcript.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              backgroundColor: "#1a1a1a",
              borderRadius: "8px",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>
              {item.speaker}
            </p>
            <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>
              {item.title}
            </p>
            <p style={{ lineHeight: "1.5" }}>
              {expandedIndex === index
                ? item.content
                : item.content.length > 250
                ? item.content.substring(0, 250) + "..."
                : item.content}
            </p>
            {item.content.length > 250 && (
              <button
                onClick={() => toggleExpanded(index)}
                style={{
                  marginTop: "0.5rem",
                  background: "none",
                  border: "none",
                  color: "#3b82f6",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                {expandedIndex === index ? "Hide Full" : "View Full"}
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TranscriptView;
