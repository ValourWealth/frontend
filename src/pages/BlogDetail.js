function BlogDetail() {
  const blogData = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Finance",
      excerpt:
        "Explore how AI is revolutionizing financial services, from automated trading to risk assessment and customer experience enhancement.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      author: "John Smith",
      date: "June 5, 2025",
      category: "Technology",
      readTime: "5 min read",
      link: "/blog/ai-in-finance",
    },
    {
      id: 2,
      title: "Investment Strategies for Market Volatility",
      excerpt:
        "Learn proven strategies to navigate uncertain markets and protect your portfolio during economic downturns while maximizing growth potential.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      author: "Sarah Johnson",
      date: "June 4, 2025",
      category: "Markets",
      readTime: "7 min read",
      link: "/blog/investment-strategies",
    },
    {
      id: 3,
      title: "Building Wealth Through Real Estate",
      excerpt:
        "Discover the fundamentals of real estate investing, from choosing the right properties to financing options and long-term wealth building.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      author: "Michael Chen",
      date: "June 3, 2025",
      category: "Wealth",
      readTime: "6 min read",
      link: "/blog/real-estate-wealth",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "#3b82f6",
      Markets: "#10b981",
      Wealth: "#f59e0b",
      Events: "#8b5cf6",
    };
    return colors[category] || "#6b7280";
  };

  return (
    <div className="container-fluid p-0">
      <div className="blog-container">
        <div className="col-lg-12">
          <div className="blog-post">
            <h2 className="blog-title">Blog Post Title</h2>
            <p className="blog-date">Posted on January 1, 2023</p>
            <p className="blog-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              venenatis enim, nec congue magna. Suspendisse potenti. Integer
              blandit, lorem nec elementum ullamcorper, justo neque dignissim
              augue, in volutpat lorem tortor nec diam.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards Section
      <section className="blog-cards-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Related Articles</h2>
            <p className="section-subtitle">
              Discover more insights and expert analysis
            </p>
          </div>

          <div className="row">
            {blogData.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                <article className="blog-card">
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} />
                    <div className="image-overlay"></div>
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: getCategoryColor(blog.category),
                      }}
                    >
                      {blog.category}
                    </span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-date">{blog.date}</span>
                      <span className="blog-separator">•</span>
                      <span className="blog-read-time">{blog.readTime}</span>
                    </div>

                    <h3 className="blog-title">
                      <a href={blog.link}>{blog.title}</a>
                    </h3>

                    <p className="blog-excerpt">{blog.excerpt}</p>

                    <div className="blog-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="author-name">{blog.author}</span>
                      </div>

                      <a href={blog.link} className="read-more-btn">
                        Read More
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default BlogDetail;
