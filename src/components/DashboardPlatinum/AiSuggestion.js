// const AISuggestions = () => {
//   // Sample data for AI suggestions
//   const suggestions = [
//     {
//       id: 1,
//       title: "Exposure",
//       description: "Your portfolio currently down",
//       impact: "High Impact",
//       impactLevel: "high",
//     },
//   ];

//   return (
//     <>
//       <div className="d-flex align-items-center mb-4">
//         <h2 className="ai-suggestions-title">
//           AI-Powered Portfolio Suggestions
//         </h2>
//         <div className="info-icon ms-2">
//           <i className="bi bi-info-circle"></i>
//         </div>
//       </div>

//       <div className="suggestions-container">
//         {suggestions.map((suggestion) => (
//           <div key={suggestion.id} className="suggestion-card">
//             <div className="suggestion-header">
//               {/* <div className="suggestion-icon-title">
//                 <div
//                   className={`suggestion-icon ${suggestion.impactLevel}-icon`}
//                 >
//                   <i className="bi bi-lightbulb"></i>
//                 </div>
//                 <h3 className="suggestion-title">{suggestion.title}</h3>
//               </div> */}
//               <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
//                 {suggestion.impact}
//               </div>
//             </div>

//             <p className="suggestion-description">{suggestion.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AISuggestions;

// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // const AISuggestions = () => {
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchAISuggestions = async () => {
// //       setLoading(true);
// //       setError(null);

// //       try {
// //         // If you use JWT in localStorage:
// //         const token = localStorage.getItem("accessToken");

// //         const response = await axios.get(
// //           "https://valourwealthdjango-production.up.railway.app/api/portfolio/ai-suggestions/",
// //           {
// //             headers: {
// //               Authorization: token ? `Bearer ${token}` : undefined,
// //             },
// //           }
// //         );

// //         // Expecting response.data to hold an array of suggestion strings or objects
// //         // e.g. { recommendations: ["Trim ...", "Add ...", ...] }
// //         const data = response.data;
// //         if (Array.isArray(data.recommendations)) {
// //           setSuggestions(
// //             data.recommendations.map((text, idx) => ({
// //               id: idx + 1,
// //               description: text,
// //               impact: "",
// //             }))
// //           );
// //         } else if (Array.isArray(data)) {
// //           setSuggestions(data.map((item, idx) => ({ id: idx + 1, ...item })));
// //         } else {
// //           setError("Unexpected API response");
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setError("Failed to load AI suggestions.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchAISuggestions();
// //   }, []);

// //   return (
// //     <>
// //       <div className="d-flex align-items-center mb-4">
// //         <h2 className="ai-suggestions-title">Portfolio Pulse</h2>
// //         <div className="info-icon ms-2">
// //           <i className="bi bi-info-circle"></i>
// //         </div>
// //       </div>

// //       {loading && <p>Loading AI suggestions...</p>}
// //       {error && <p className="text-danger">{error}</p>}

// //       <div className="suggestions-container">
// //         {suggestions.map((sugg) => (
// //           <div key={sugg.id} className="suggestion-card">
// //             {sugg.impact && (
// //               <div className={`impact-badge ${sugg.impactLevel}-impact`}>
// //                 {sugg.impact}
// //               </div>
// //             )}
// //             <p className="suggestion-description">{sugg.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default AISuggestions;

// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // const AISuggestions = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [suggestions, setSuggestions] = useState([]);

// //   useEffect(() => {
// //     const fetchSuggestions = async () => {
// //       try {
// //         const token = localStorage.getItem("access_token");
// //         const res = await axios.get("/api/portfolio/ai-suggestions/", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         // DEBUG: log the raw response so we know its shape
// //         console.log("AI Suggestions API returned:", res.data);

// //         let recs = [];

// //         // Case A: { recommendations: [ "...", "..." ] }
// //         if (Array.isArray(res.data.recommendations)) {
// //           recs = res.data.recommendations.map((text, i) => ({
// //             id: i,
// //             description: text,
// //             impact: "", // you could derive this from text or leave blank
// //             impactLevel: "medium", // default or parse out a keyword
// //           }));

// //           // Case B: { pulse: "Line1\nLine2\nLine3" }
// //         } else if (typeof res.data.pulse === "string") {
// //           recs = res.data.pulse.split("\n").map((line, i) => ({
// //             id: i,
// //             description: line.replace(/^\*\w+\*:\s*/, ""),
// //             impact: "",
// //             impactLevel: "medium",
// //           }));

// //           // Case C: fallback if you just get a string
// //         } else if (typeof res.data === "string") {
// //           recs = res.data.split("\n").map((line, i) => ({
// //             id: i,
// //             description: line,
// //             impact: "",
// //             impactLevel: "medium",
// //           }));
// //         } else {
// //           throw new Error("Unexpected response format");
// //         }

// //         setSuggestions(recs);
// //       } catch (err) {
// //         console.error(err);
// //         setError(err.response?.data || err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSuggestions();
// //   }, []);

// //   if (loading) return <p>Loading AI suggestions…</p>;
// //   if (error)
// //     return <p className="text-danger">Error: {JSON.stringify(error)}</p>;

// //   return (
// //     <>
// //       <div className="d-flex align-items-center mb-4">
// //         <h2 className="ai-suggestions-title">Portfolio Pulse</h2>
// //         <div className="info-icon ms-2">
// //           <i className="bi bi-info-circle"></i>
// //         </div>
// //       </div>

// //       {suggestions.length === 0 ? (
// //         <p>No suggestions available.</p>
// //       ) : (
// //         <div className="suggestions-container">
// //           {suggestions.map((s) => (
// //             <div key={s.id} className="suggestion-card">
// //               <div className="suggestion-header">
// //                 <div className={`impact-badge ${s.impactLevel}-impact`}>
// //                   {s.impact}
// //                 </div>
// //               </div>
// //               <p className="suggestion-description">{s.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default AISuggestions;

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
          "https://valourwealthdjango-production.up.railway.app/api/portfolio/ai-suggestions/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const rawText = response.data.suggestions || "";

        // Split AI text into individual numbered lines (1. ..., 2. ...)
        // const lines = rawText
        //   .split("\n")
        //   .filter((line) => line.trim().match(/^\d+\./)) // only numbered lines
        //   .map((line, idx) => {
        //     const match = line.match(/^\d+\.\s*\*{0,2}(.*?)\*{0,2}:\s*(.*)$/);
        //     const title = match ? match[1].trim() : `Suggestion ${idx + 1}`;
        //     const description = match ? match[2].trim() : line;

        //     return {
        //       id: idx + 1,
        //       title,
        //       description,
        //       impact: "Moderate Impact",
        //       impactLevel: "medium",
        //     };
        //   });

        // .map((line, idx) => ({
        //   id: idx + 1,
        //   title: `Suggestion ${idx + 1}`,
        //   description: line.trim(),
        //   impact: "Moderate Impact", // Optional: derive based on keywords
        //   impactLevel: "medium", // Optional: high/medium/low styling
        // }));
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
          // <div key={suggestion.id} className="suggestion-card">
          //   <div className="suggestion-header">
          //     <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
          //       {suggestion.impact}
          //     </div>
          //   </div>
          //   <p className="suggestion-description">{suggestion.description}</p>
          // </div>
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
