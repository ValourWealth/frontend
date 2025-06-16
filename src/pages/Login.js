// // // import React, { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import "../styles/global.css";
// // // import websiteLogo from "../assets/images/Valour_Wealth.png";

// // // function Login() {
// // //   const [email, setEmail] = useState(""); // FIXED: Correct state variable
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setLoading(true);

// // //     try {
// // //       console.log("🔵 Sending login request...");

// // //       const response = await fetch(API_URL, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ username: email, password }),
// // //       });

// // //       console.log("🟡 Raw Response:", response);

// // //       const data = await response.json();
// // //       console.log("🟢 Response Data:", data);

// // //       if (response.ok) {
// // //         console.log("✅ Login Successful:", data);
// // //         localStorage.setItem("authToken", data.token);
// // //         navigate("/dashboard");
// // //       } else {
// // //         console.error("🔴 Login Error:", data);
// // //         setError(data.detail || "Invalid credentials. Please try again.");
// // //       }
// // //     } catch (err) {
// // //       console.error("❌ Network Error:", err);
// // //       setError("Network error. Please check your internet connection.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container p-4">
// // //       <div className="login-box">
// // //         <div className="logo-web">
// // //           <img src={websiteLogo} alt="Website Logo" className="website-logo" />
// // //         </div>

// // //         <h2>Login</h2>

// // //         {error && <p className="error-message">{error}</p>}

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="input-group">
// // //             <label>Username</label>
// // //             <input
// // //               type="email"
// // //               placeholder="Enter your Username"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="input-group">
// // //             <label>Password</label>
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="remember-forgot">
// // //             <label>
// // //               <input type="checkbox" /> Remember Me
// // //             </label>
// // //             <Link to="/forgot-password" className="forgot-link">
// // //               Forgot Password?
// // //             </Link>
// // //           </div>

// // //           <button type="submit" className="login-btn" disabled={loading}>
// // //             {loading ? "Logging in..." : "Login"}
// // //           </button>
// // //         </form>

// // //         <p className="or-text">Or login with</p>
// // //         <div className="social-login">
// // //           <button className="google">
// // //             <i className="fab fa-google"></i>{" "}
// // //           </button>
// // //           <button className="microsoft">
// // //             <i className="fab fa-microsoft"></i>{" "}
// // //           </button>
// // //           <button className="apple">
// // //             <i className="fab fa-apple"></i>
// // //           </button>
// // //         </div>

// // //         <Link to="/" className="back-home">
// // //           Back to Home
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sideLoginImg from "../assets/images/login-side-img.jpg";
import websiteLogo from "../assets/images/Valour_Wealth.png";
import "../styles/global.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const API_BASE_URL = process.env.REACT_APP_API_URL || "https://valourwealthdjango-production.up.railway.app/";

  console.log("🌍 API URL from env:", process.env.REACT_APP_API_URL);

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";

  const LOGIN_URL = `${API_BASE_URL}api/token/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("🔵 Sending login request to:", LOGIN_URL);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        let errorText = await response.text();
        throw new Error(errorText || "Invalid response from server.");
      }

      const data = await response.json();
      console.log("🟢 Response Data:", data);

      if (data.access && data.refresh) {
        console.log("✅ Login Successful");
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        navigate("/dashboard");
      } else {
        setError(data.detail || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row" style={{ position: "relative" }}>
          <div className="col-lg-6 p-0">
            <div className="login-img">
              <img
                src={sideLoginImg}
                alt="Website Logo"
                className="login-rightimg  obj_fit"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="login-box">
              <div className="logo-web">
                <img
                  src={websiteLogo}
                  alt="Website Logo"
                  className="website-logo"
                />
              </div>

              <h2>Login</h2>

              {error && <p className="error-message">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  style={{ margin: "0px", height: "42px" }}
                  type="submit"
                  className="login-btn"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <Link to="/" className="back-home">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// ===============================================================
