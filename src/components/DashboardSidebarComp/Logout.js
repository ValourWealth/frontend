// import React from "react";

// function Logout() {
//   return (
//     <section className="logout">
//       <div className="container">Logout</div>
//     </section>
//   );
// }

// export default Logout;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear tokens from the local storage for log out the user
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    //  Redirect the user to login or homepage
    navigate("/login");
  }, [navigate]);

  return (
    <section className="logout">
      <div className="container">Logging out...</div>
    </section>
  );
}

export default Logout;
