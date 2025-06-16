import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import Font Awesome (optional, in case you use icons in JSX)
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Global Styles
import "./styles/global.css"; // Adjust based on your folder structure
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/variable.css";
import "./styles/responsive.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
