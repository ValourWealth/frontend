import axios from "axios";
import { useEffect, useState } from "react";

const AISuggestions = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAISuggestions = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(
          "https://backend-production-1e63.up.railway.app/api/portfolio/ai-suggestions/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const rawText = response.data.suggestions || "";
        const lines = rawText
          .split("\n")
          .filter((line) => line.trim().match(/^\d+\./))
          .map((line, idx) => {
            const match = line.match(
              /^\d+\.\s*(.*?)\:\s*(.*?)\s*\[Impact:\s*(high|moderate|low)\]$/i
            );

            if (match) {
              const [_, rawTitle, rawDesc, rawImpact] = match;
              const title = rawTitle.trim();
              const description = rawDesc.trim();
              const impactLevel = rawImpact.toLowerCase();

              const impactMap = {
                high: "High Impact",
                moderate: "Moderate Impact",
                low: "Low Impact",
              };

              return {
                id: idx + 1,
                title,
                description,
                impact: impactMap[impactLevel],
                impactLevel,
              };
            }

            // fallback: treat line as raw text if no match
            return {
              id: idx + 1,
              title: `Suggestion ${idx + 1}`,
              description: line.trim(),
              impact: "Moderate Impact",
              impactLevel: "moderate",
            };
          });

        setSuggestions(lines);
      } catch (err) {
        console.error("AI suggestion error:", err);
        setError("Unable to fetch AI suggestions.");
      } finally {
        setLoading(false);
      }
    };

    fetchAISuggestions();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h2 className="ai-suggestions-title">
          AI-Powered Portfolio Suggestions
        </h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      {loading && <p>Loading suggestions...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && suggestions.length === 0 && (
        <p>No suggestions available at the moment.</p>
      )}

      <div className="suggestions-container">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="suggestion-header">
              <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
                {suggestion.impact}
              </div>
            </div>
            <h4 className="suggestion-title">{suggestion.title}</h4>
            <p className="suggestion-description">{suggestion.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AISuggestions;
