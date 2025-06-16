import axios from "axios";
import { useEffect, useState } from "react";
import fallbackImg from "../assets/images/event2.webp";

const API_KEY = "04RGF1U9PAJ49VYI";
const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=stock_market&apikey=${API_KEY}`;

function Stocks() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const articles = res.data.feed || [];
        setNews(articles.slice(0, 7)); // 1 main + 6 sidebar
      })
      .catch((err) => console.error("Stock news error:", err));
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="section_stocks">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading">
                  <h2 className="pb-4">Stocks</h2>
                </div>
              </div>
            </div>

            <div className="row pt-5" data-aos="fade-up">
              <div className="col-lg-8">
                <div className="news-wrap">
                  <a
                    href={news[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="obj_fit"
                      src={news[0].banner_image || fallbackImg}
                      alt={news[0].title}
                    />
                    <h3 className="truncate-text">{news[0].title}</h3>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="other-news_section">
                  {news.slice(1, 7).map((item, idx) => (
                    <div key={idx} className="other-news-wrap">
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
                              src={item.banner_image || fallbackImg}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stocks;
