import axios from "axios";
import { useEffect, useState } from "react";
import placeholderImg from "../assets/images/crypto2.webp";

const API_KEY = "04RGF1U9PAJ49VYI";
const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${API_KEY}`;

function PostEditor() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const feed = res.data.feed || [];
        setNews(feed.slice(0, 7));
      })
      .catch((err) => {
        console.error("Failed to fetch general market news:", err);
        setNews([]);
      });
  }, []);

  return (
    <section className="section_latest">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading">
                  <h2 className="pb-4">Crypto</h2>
                </div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-lg-8">
                <div className="news-wrap">
                  {news.length > 0 ? (
                    <a
                      href={news[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="obj_fit"
                        src={news[0].banner_image || placeholderImg}
                        alt="Market News"
                      />
                      <h3 className="truncate-text">{news[0].title}</h3>
                    </a>
                  ) : (
                    <div className="border p-5 text-center text-muted">
                      No live market news available.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="other-news_section">
                  {news.slice(1).map((item, index) => (
                    <div key={index} className="other-news-wrap">
                      <div className="other-news-card">
                        <a
                          className="other-news-img"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="side-news-img">
                            <img
                              className="obj_fit"
                              src={item.banner_image || placeholderImg}
                              alt={item.title}
                            />
                          </div>
                        </a>
                        <div className="other-news-info">
                          <h4 className="mb-0 truncate-text">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                  {news.length <= 1 && (
                    <p className="text-muted px-2">
                      No more market headlines available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostEditor;
