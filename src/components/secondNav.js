import { useEffect, useState } from "react";
import technology1 from "../assets/images/apple-img.webp";
import event1 from "../assets/images/event1.webp";
import event2 from "../assets/images/event2.webp";
import market1 from "../assets/images/intel-mrket-img.webp";
import market2 from "../assets/images/reddit-market-img.webp";
import technology2 from "../assets/images/technology2.webp";
import wealth1 from "../assets/images/wealth1.webp";
import wealth2 from "../assets/images/wealth2.webp";
import "../styles/secondnavbar.css";
import NavbarSearch from "./NavSearch";
const API_KEY = "04RGF1U9PAJ49VYI";

const Navbar = () => {
  const [techNews, setTechNews] = useState([]);
  const [eventNews, setEventNews] = useState([]);
  const [wealthNews, setWealthNews] = useState([]);
  const [marketNews, setMarketNews] = useState([]); // Added this line

  useEffect(() => {
    const fetchNews = async (topic, setter) => {
      try {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${topic}&apikey=${API_KEY}`
        );
        const data = await res.json();
        if (data?.feed) setter(data.feed.slice(0, 2));
      } catch (err) {
        console.error(`Error fetching ${topic} news, err`);
      }
    };

    fetchNews("technology", setTechNews);
    fetchNews("finance", setEventNews);
    fetchNews("financial_markets", setWealthNews);
    fetchNews("markets", setMarketNews); // Added this line
  }, []);

  const renderArticles = (
    items,
    fallback1,
    fallback2,
    category,
    fallbackTitles
  ) =>
    items.length > 0 ? (
      items.map((article, index) => (
        <div className="article" key={index}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="article-image">
              <img
                src={article.banner_image || fallback1}
                alt={article.title}
              />
            </div>
            <div className="article-content">
              <span className="article-category">{category}</span>
              <h4 className="article-title">{article.title}</h4>
            </div>
          </a>
        </div>
      ))
    ) : (
      <>
        <div className="article">
          <div className="article-image">
            <img src={fallback1} alt="default 1" />
          </div>
          <div className="article-content">
            <span className="article-category">{category}</span>
            <h4 className="article-title">{fallbackTitles[0]}</h4>
          </div>
        </div>
        <div className="article">
          <div className="article-image">
            <img src={fallback2} alt="default 2" />
          </div>
          <div className="article-content">
            <span className="article-category">{category}</span>
            <h4 className="article-title">{fallbackTitles[1]}</h4>
          </div>
        </div>
      </>
    );

  return (
    <nav className="second-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="nav-links second-nav-links">
          {/* Markets */}
          <li className="nav-item">
            <a id="markets" href="/market-details">
              Markets
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                {/* Left section with market categories */}
                <div className="dropdown-left">
                  <h3>Markets</h3>
                  <ul className="category-list">
                    <li>
                      <a href="/market-details?category=upcoming">
                        1. Upcoming
                      </a>
                    </li>
                    <li>
                      <a href="/market-details?category=featured">
                        2. Featured
                      </a>
                    </li>
                    <li>
                      <a href="/market-details?category=virtual">3. Virtual</a>
                    </li>
                    <li>
                      <a href="/market-details?category=all">4. All</a>
                    </li>
                  </ul>
                </div>

                {/* Center section with latest market articles */}
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(marketNews, market1, market2, "Markets", [
                      "Stock Markets Rally Amid Economic Recovery",
                      "Global Indices Post Gains as Inflation Cools",
                    ])}
                  </div>
                </div>

                {/* Right section with social + view more */}
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/market-details">
                      View More Markets →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Technology */}
          <li className="nav-item">
            <a id="technology" href="/technology-details">
              Technology
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Technology</h3>
                  <ul className="category-list">
                    <li>
                      <a href="/technology-details?category=ai">1. AI</a>
                    </li>
                    <li>
                      <a href="/technology-details?category=software">
                        2. Software
                      </a>
                    </li>
                    <li>
                      <a href="/technology-details?category=hardware">
                        3. Hardware
                      </a>
                    </li>
                    <li>
                      <a href="/technology-details?category=all">4. All</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(
                      techNews,
                      technology1,
                      technology2,
                      "Technology",
                      [
                        "How Apple Plans to Bring Generative Ai to All Its Devices",
                        "Meta Launches AI Coding Software in Competition With OpenAI",
                      ]
                    )}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/technology-details">
                      View More Technology →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Wealth */}
          <li className="nav-item">
            <a id="wealth" href="/wealth-details">
              Wealth
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Wealth</h3>
                  <ul className="category-list">
                    <li>
                      <a href="/wealth-details?category=investing">
                        1. Investing
                      </a>
                    </li>
                    <li>
                      <a href="/wealth-details?category=real-estate">
                        2. Real Estate
                      </a>
                    </li>
                    <li>
                      <a href="/wealth-details?category=retirement">
                        3. Retirement
                      </a>
                    </li>
                    <li>
                      <a href="/wealth-details?category=all">4. All</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(wealthNews, wealth1, wealth2, "Wealth", [
                      "New Tax Laws Could Impact High-Net-Worth Individuals in 2024",
                      "Alternative Investments Gain Popularity Among Millennials",
                    ])}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/wealth-details">
                      View More Wealth →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Events */}
          <li className="nav-item">
            <a id="events" href="/events-details">
              Events
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Events</h3>
                  <ul className="category-list">
                    <li>
                      <a href="/events-details?category=upcoming">
                        1. Upcoming
                      </a>
                    </li>
                    <li>
                      <a href="/events-details?category=featured">
                        2. Featured
                      </a>
                    </li>
                    <li>
                      <a href="/events-details?category=virtual">3. Virtual</a>
                    </li>
                    <li>
                      <a href="/events-details?category=all">4. All</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(eventNews, event1, event2, "Events", [
                      "Annual Investment Summit to Feature Top Financial Experts",
                      "Tech Conference Announces Expanded Program for Next Quarter",
                    ])}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/events-details">
                      View More Events →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Products */}
          <li>
            <a id="products" href="/our-products">
              Products
            </a>
          </li>
        </ul>

        <div className="search-box">
          <NavbarSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
