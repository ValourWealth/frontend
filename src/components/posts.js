// import React from "react";
// import walmartImg from "../assets/images/event2.webp";
// import recentPost from "../assets/images/reddit-market-img.webp";
// // recent post images
// import recentPost2 from "../assets/images/reddit-market-img.webp";
// import recentPost3 from "../assets/images/apple-img.webp";
// import recentPost4 from "../assets/images/crypto1.webp";
// import recentPost5 from "../assets/images/intel-mrket-img.webp";
// import recentPost6 from "../assets/images/reddit.webp";

// function Posts() {
//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents" data-aos="fade-up">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading pb-lg-3 pb-2 ">
//                   <h2 className="pb-4">Explore Recent Post</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="recent_post">
//                   <h3 className="mb-0">Editors' Choice</h3>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5">
//               <div className="col-lg-8">
//                 <div className="news-wrap">
//                   <a href="https://www.forbes.com/digital-assets/news/?sh=511db729f9d5" target="_blank" rel="no opener">
//                     <img
//                       className="obj_fit"
//                       src={recentPost}
//                       alt="Walmart News"
//                     />

//                     <h3>
//                       Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla,
//                       Walmart, Netflix, Shopify, Super Micro & More
//                     </h3>
//                   </a>
//                 </div>
//               </div>

//               <div className="col-lg-4">
//               <div className="other-news_section">
//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={walmartImg}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost2}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost3}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">This is How a Cheap Balanced Portfolio Flattens Those Pricey Hedge Funds</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost4}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost5}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">The Stock of AMD Faces a New Risk And This One Has Nothing to Do With AI</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost6}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity</h4>

//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Posts;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import placeholderImg from "../assets/images/crypto2.webp";

// const API_KEY = "04RGF1U9PAJ49VYI";
// const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${API_KEY}`;

// function PostEditor() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         const feed = res.data.feed || [];
//         setNews(feed.slice(0, 7));
//       })
//       .catch((err) => {
//         console.error("Failed to fetch general market news:", err);
//         setNews([]);
//       });
//   }, []);

//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading">
//                   <h2 className="pb-4">Cryto</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5" data-aos="fade-up">
//               <div className="col-lg-8">
//                 <div className="news-wrap">
//                   {news.length > 0 ? (
//                     <a
//                       href={news[0].url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         className="obj_fit"
//                         src={news[0].banner_image || placeholderImg}
//                         alt="Market News"
//                       />
//                       <h3 className="truncate-text">{news[0].title}</h3>
//                     </a>
//                   ) : (
//                     <div className="border p-5 text-center text-muted">
//                       No live market news available.
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="col-lg-4">
//                 <div className="other-news_section">
//                   {news.slice(1).map((item, index) => (
//                     <div key={index} className="other-news-wrap">
//                       <div className="other-news-card">
//                         <a
//                           className="other-news-img"
//                           href={item.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <div className="side-news-img">
//                             <img
//                               className="obj_fit"
//                               src={item.banner_image || placeholderImg}
//                               alt={item.title}
//                             />
//                           </div>
//                         </a>
//                         <div className="other-news-info">
//                           <h4 className="mb-0 truncate-text">{item.title}</h4>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   {news.length <= 1 && (
//                     <p className="text-muted px-2">
//                       No more market headlines available.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PostEditor;

import axios from "axios";
import { useEffect, useState } from "react";
import placeholderImg from "../assets/images/event2.webp"; // fallback image

const API_KEY = "04RGF1U9PAJ49VYI";
const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=finance&apikey=${API_KEY}`;

function Posts() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const articles = res.data.feed || [];
        setNews(articles.slice(0, 7)); // main + 6 sidebar
      })
      .catch((err) => console.error("News fetch error:", err));
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="section_latest">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading pb-lg-3 pb-2">
                  <h2 className="pb-4">Explore Recent Post</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="recent_post">
                  <h3 className="mb-0">Editors' Choice</h3>
                </div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-lg-8">
                <div className="news-wrap">
                  <a
                    href={news[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="obj_fit"
                      src={news[0].banner_image || placeholderImg}
                      alt={news[0].title}
                    />
                    <h3 className="truncate-text">{news[0].title}</h3>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="other-news_section">
                  {news.slice(1, 7).map((item, index) => (
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
