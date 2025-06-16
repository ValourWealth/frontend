import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Markets",
      route: "/market-details",
      keywords: ["markets", "stock", "trading", "shares"],
    },
    {
      name: "Technology",
      route: "/technology-details",
      keywords: ["technology", "tech", "software", "tools"],
    },
    {
      name: "Wealth",
      route: "/wealth-details",
      keywords: ["wealth", "investment", "portfolio", "money"],
    },
    {
      name: "Events",
      route: "/events-details",
      keywords: ["events", "webinar", "conference", "meeting"],
    },
    {
      name: "Products",
      route: "/our-products",
      keywords: ["products", "services", "plans", "packages"],
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const getFilteredSuggestions = () => {
    if (!searchTerm) return [];
    return navItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  };

  const handleSuggestionClick = (route) => {
    console.log("Navigating to:", route);
    navigate(route);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const suggestions = getFilteredSuggestions();
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0].route);
      }
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search markets, technology, wealth, events..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          onFocus={() => searchTerm && setShowSuggestions(true)}
        />
        <button className="search-icon">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {showSuggestions && (
        <div className="suggestions-dropdown">
          {getFilteredSuggestions().map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onMouseDown={() => handleSuggestionClick(item.route)}
            >
              <span>{item.name}</span>
            </div>
          ))}
          {getFilteredSuggestions().length === 0 && (
            <div className="no-suggestions">No matching sections found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
