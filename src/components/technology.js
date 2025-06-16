// import axios from "axios";
// import { useEffect, useState } from "react";
// import placeholderImg from "../assets/images/crypto2.webp";

// const API_KEY = "04RGF1U9PAJ49VYI";
// const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${API_KEY}`;

// function Technology() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         const feed = res.data.feed || [];
//         setNews(feed.slice(0, 6)); // limit to 6 headlines
//       })
//       .catch((err) => {
//         console.error("Failed to load news:", err);
//       });
//   }, []);

//   return (
//     <section className="section_latest">
//       <div className="container">
//         <div className="sec_heading mb-4">
//           <h2>Technologies</h2>
//         </div>

//         <div className="row">
//           {news.map((item, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <a
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-decoration-none"
//               >
//                 <div className="card h-100">
//                   <img
//                     src={item.banner_image || placeholderImg}
//                     alt={item.title}
//                     className="card-img-top obj_fit"
//                   />
//                   <div className="card-body ">
//                     <span
//                       style={{
//                         padding: "4px",
//                         borderRadius: "10px",
//                         marginBottom: "10px",
//                       }}
//                       className={`technology-badge ${getBadgeClass(
//                         item.overall_sentiment_label
//                       )}`}
//                     >
//                       {item.overall_sentiment_label}
//                     </span>

//                     <h5 className="mt-2 text-white">{item.title}</h5>
//                     <p className="text-white mb-0">{item.source}</p>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Optional: color-code sentiment
// function getBadgeClass(sentiment) {
//   switch (sentiment) {
//     case "Positive":
//       return "bg-success text-white";
//     case "Negative":
//       return "bg-danger text-white";
//     case "Neutral":
//       return "bg-secondary text-white";
//     default:
//       return "bg-light text-dark";
//   }
// }

// export default Technology;

import axios from "axios";
import { useEffect, useState } from "react";
import placeholderImg from "../assets/images/crypto2.webp";

const API_KEY = "04RGF1U9PAJ49VYI";
const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${API_KEY}`;

function Technology() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const feed = res.data.feed || [];
        setNews(feed.slice(0, 6)); // limit to 6 headlines
      })
      .catch((err) => {
        console.error("Failed to load news:", err);
      });
  }, []);

  return (
    <section className="section_latest">
      <div className="container">
        <div className="sec_heading mb-4">
          <h2>Technology</h2>
        </div>

        <div className="row">
          {news.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100" style={{ border: "none" }}>
                  <img
                    src={item.banner_image || placeholderImg}
                    alt={item.title}
                    className="card-img-top obj_fit"
                  />
                  <div className="card-body " style={{ background: "#171717" }}>
                    <span
                      style={{
                        padding: "4px",
                        borderRadius: "10px",
                        marginBottom: "10px",
                      }}
                      className={`technology-bade ${getBadgeClass(
                        item.overall_sentiment_label
                      )}`}
                    >
                      {item.overall_sentiment_label}
                    </span>
                    <h5 className="mt-2 text-white">{item.title}</h5>
                    <p className="text-white mb-0">{item.source}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional: color-code sentiment
function getBadgeClass(sentiment) {
  switch (sentiment) {
    case "Positive":
      return "bg-success text-white";
    case "Negative":
      return "bg-danger text-white";
    case "Neutral":
      return "bg-secondary text-white";
    default:
      return "bg-light text-dark";
  }
}

export default Technology;
