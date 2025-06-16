// import axios from "axios";
// import { useEffect, useState } from "react";

// const MarketNews = () => {
//   const [activeTab, setActiveTab] = useState("Market News");
//   const [searchText, setSearchText] = useState("");
//   const [newsArticles, setNewsArticles] = useState([]);

//   const API_BASE_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/market-news/`);
//         const formattedNews = res.data.map((article, index) => ({
//           id: index + 1,
//           title: article.title,
//           content: article.summary,
//           source: article.source,
//           timeAgo: article.published_at,
//           category: article.tags?.[0] || "General",
//           isPlatinum: article.tags?.includes("Platinum"),
//           externalLink: article.url,
//         }));
//         setNewsArticles(formattedNews);
//       } catch (error) {
//         console.error("Failed to fetch market news", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const filteredNews = newsArticles.filter((article) => {
//     if (searchText === "") return true;
//     return (
//       article.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       article.content.toLowerCase().includes(searchText.toLowerCase())
//     );
//   });

//   return (
//     <div className="market-news-container">
//       <div className="news-header">
//         <div className="news-icon-container">
//           <i className="bi bi-newspaper"></i>
//         </div>
//         <div>
//           <h2 className="news-title">Market News</h2>
//           <p className="news-subtitle">
//             Curated financial news from premium sources for platinum members
//           </p>
//         </div>
//       </div>

//       <div className="news-card">
//         <div className="news-card-header">
//           <h3 className="news-card-title">Latest Financial News</h3>
//           <div className="search-filter-container">
//             <div className="search-container">
//               <input
//                 type="text"
//                 className="search-input-news"
//                 placeholder="Search news..."
//                 value={searchText}
//                 onChange={handleSearchChange}
//               />
//             </div>
//             <button className="filter-button">
//               <i className="bi bi-funnel"></i>
//             </button>
//           </div>
//         </div>

//         <div className="tabs-container">
//           <button
//             className={`tab-button ${
//               activeTab === "Market News" ? "active" : ""
//             }`}
//             onClick={() => handleTabChange("Market News")}
//           >
//             Market News
//           </button>
//         </div>

//         <div className="news-grid">
//           {filteredNews.map((article) => (
//             <div key={article.id} className="news-item">
//               <div className="news-item-content">
//                 <h4 className="news-item-title">
//                   <a
//                     href={article.externalLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {article.title}
//                     <i className="bi bi-box-arrow-up-right external-link-icon"></i>
//                   </a>
//                 </h4>
//                 <p className="news-item-description">{article.content}</p>
//                 <div className="news-item-footer">
//                   <div className="news-source-time">
//                     <span className="news-source">{article.source}</span>
//                     <span className="news-time">
//                       <i className="bi bi-clock"></i> {article.timeAgo}
//                     </span>
//                   </div>
//                   <div className="news-tags">
//                     <span className="news-category">{article.category}</span>
//                     {article.isPlatinum && (
//                       <span className="news-platinum">Platinum</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketNews;

import axios from "axios";
import { useEffect, useState } from "react";

const MarketNews = () => {
  const [activeTab, setActiveTab] = useState("Market News");
  const [searchText, setSearchText] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}api/market-news/`);
        const formattedNews = res.data.map((article, index) => ({
          id: index + 1,
          title: article.title,
          content: article.summary,
          source: article.source,
          timeAgo: article.published_at,
          category: article.tags?.[0] || "General",
          isPlatinum: article.tags?.includes("Platinum"),
          externalLink: article.url,
        }));
        setNewsArticles(formattedNews);
      } catch (error) {
        console.error("Failed to fetch market news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredNews = newsArticles.filter((article) => {
    if (searchText === "") return true;
    return (
      article.title.toLowerCase().includes(searchText.toLowerCase()) ||
      article.content.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="market-news-container">
      <div className="news-header">
        <div className="news-icon-container">
          <i className="bi bi-newspaper"></i>
        </div>
        <div>
          <h2 className="news-title">Market News</h2>
          <p className="news-subtitle">
            Curated financial news from premium sources for platinum members
          </p>
        </div>
      </div>

      <div className="news-card">
        <div className="news-card-header">
          <h3 className="news-card-title">Latest Financial News</h3>
          <div className="search-filter-container">
            <div className="search-container">
              <input
                type="text"
                className="search-input-news"
                placeholder="Search news..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
            <button className="filter-button">
              <i className="bi bi-funnel"></i>
            </button>
          </div>
        </div>

        <div className="tabs-container">
          <button
            className={`tab-button ${
              activeTab === "Market News" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Market News")}
          >
            Market News
          </button>
        </div>

        <div className="news-grid">
          {loading ? (
            // Shimmer Effect for News Articles
            <>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="news-item">
                  <div className="news-item-content">
                    {/* News Title Shimmer */}
                    <div
                      className="shimmer-block mb-3"
                      style={{
                        height: "24px",
                        width: "90%",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block mb-3"
                      style={{
                        height: "24px",
                        width: "70%",
                        borderRadius: "4px",
                      }}
                    ></div>

                    {/* News Description Shimmer */}
                    <div
                      className="shimmer-block mb-2"
                      style={{
                        height: "16px",
                        width: "100%",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block mb-2"
                      style={{
                        height: "16px",
                        width: "85%",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block mb-3"
                      style={{
                        height: "16px",
                        width: "60%",
                        borderRadius: "4px",
                      }}
                    ></div>

                    {/* News Footer Shimmer */}
                    <div className="news-item-footer">
                      <div className="news-source-time">
                        <div
                          className="shimmer-block mb-1"
                          style={{
                            height: "14px",
                            width: "80px",
                            borderRadius: "4px",
                          }}
                        ></div>
                        <div
                          className="shimmer-block"
                          style={{
                            height: "14px",
                            width: "100px",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                      <div className="news-tags">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "20px",
                            width: "60px",
                            borderRadius: "12px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Actual News Articles
            filteredNews.map((article) => (
              <div key={article.id} className="news-item">
                <div className="news-item-content">
                  <h4 className="news-item-title">
                    <a
                      href={article.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                      <i className="bi bi-box-arrow-up-right external-link-icon"></i>
                    </a>
                  </h4>
                  <p className="news-item-description">{article.content}</p>
                  <div className="news-item-footer">
                    <div className="news-source-time">
                      <span className="news-source">{article.source}</span>
                      <span className="news-time">
                        <i className="bi bi-clock"></i> {article.timeAgo}
                      </span>
                    </div>
                    <div className="news-tags">
                      <span className="news-category">{article.category}</span>
                      {article.isPlatinum && (
                        <span className="news-platinum">Platinum</span>
                      )}
                    </div>
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

export default MarketNews;
