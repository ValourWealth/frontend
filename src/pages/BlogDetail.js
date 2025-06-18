// function BlogDetail() {
//   const blogData = [
//     {
//       id: 1,
//       title: "The Future of Artificial Intelligence in Finance",
//       excerpt:
//         "Explore how AI is revolutionizing financial services, from automated trading to risk assessment and customer experience enhancement.",
//       image:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
//       author: "John Smith",
//       date: "June 5, 2025",
//       category: "Technology",
//       readTime: "5 min read",
//       link: "/blog/ai-in-finance",
//     },
//     {
//       id: 2,
//       title: "Investment Strategies for Market Volatility",
//       excerpt:
//         "Learn proven strategies to navigate uncertain markets and protect your portfolio during economic downturns while maximizing growth potential.",
//       image:
//         "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
//       author: "Sarah Johnson",
//       date: "June 4, 2025",
//       category: "Markets",
//       readTime: "7 min read",
//       link: "/blog/investment-strategies",
//     },
//     {
//       id: 3,
//       title: "Building Wealth Through Real Estate",
//       excerpt:
//         "Discover the fundamentals of real estate investing, from choosing the right properties to financing options and long-term wealth building.",
//       image:
//         "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
//       author: "Michael Chen",
//       date: "June 3, 2025",
//       category: "Wealth",
//       readTime: "6 min read",
//       link: "/blog/real-estate-wealth",
//     },
//   ];

//   const getCategoryColor = (category) => {
//     const colors = {
//       Technology: "#3b82f6",
//       Markets: "#10b981",
//       Wealth: "#f59e0b",
//       Events: "#8b5cf6",
//     };
//     return colors[category] || "#6b7280";
//   };

//   return (
//     <div className="container-fluid p-0">
//       <div className="blog-container">
//         <div className="col-lg-12">
//           <div className="blog-post">
//             <h2 className="blog-title">Blog Post Title</h2>
//             <p className="blog-date">Posted on January 1, 2023</p>
//             <p className="blog-content">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
//               venenatis enim, nec congue magna. Suspendisse potenti. Integer
//               blandit, lorem nec elementum ullamcorper, justo neque dignissim
//               augue, in volutpat lorem tortor nec diam.
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default BlogDetail;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL =
  "https://backend-production-1e63.up.railway.app/api/editors-choice/";

function BlogDetail() {
  const { slug } = useParams(); // ⬅️ get slug from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}${slug}/`).then((res) => {
      setBlog(res.data);
    });
  }, [slug]);

  if (!blog) return <p className="text-center">Loading...</p>;

  const getCategoryColor = (category) => {
    const colors = {
      Markets: "#10b981",
      Crypto: "#8b5cf6",
      Forex: "#3b82f6",
      Stocks: "#f59e0b",
    };
    return colors[category] || "#6b7280";
  };

  return (
    <div className="container-fluid p-0">
      <div className="blog-container">
        <div className="col-lg-12">
          <div className="blog-post">
            <img src={blog.image_url} alt={blog.title} className="w-100 mb-4" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">
              <span style={{ color: getCategoryColor(blog.category) }}>
                {blog.category}
              </span>{" "}
              | {new Date(blog.created_at).toLocaleDateString()}
            </p>
            <p className="blog-content">{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
