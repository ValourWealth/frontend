import axios from "axios";
import { useEffect, useState } from "react";
import placeholderImg from "../assets/images/crypto2.webp";

const API_KEY = "04RGF1U9PAJ49VYI";
const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=finance&apikey=${API_KEY}`;

function MarketDetails() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const feed = response.data.feed || [];
        setArticles(feed.slice(0, 5)); // Limit to 5 articles
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="market_details_section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-3">
            {articles.slice(0, 2).map((item, idx) => (
              <div key={idx} className="editors-choice market_details mb-3">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img
                      className="obj_fit"
                      src={item.banner_image || placeholderImg}
                      alt="news"
                    />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{item.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Middle Featured */}
          <div className="col-lg-6">
            {articles[2] && (
              <div className="editors-choice market_details mb-3">
                <a
                  href={articles[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="market_detail_img img_height">
                    <img
                      className="obj_fit"
                      src={articles[2].banner_image || placeholderImg}
                      alt="news"
                    />
                  </div>
                  <div className="editor_desc max_height mb-0">
                    <h3>Markets</h3>
                    <h2 className="extra-heading">{articles[2].title}</h2>
                    <h4 className="name">{articles[2].source}</h4>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-lg-3">
            {articles.slice(3, 5).map((item, idx) => (
              <div key={idx} className="editors-choice market_details mb-3">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img
                      className="obj_fit"
                      src={item.banner_image || placeholderImg}
                      alt="news"
                    />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{item.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketDetails;
