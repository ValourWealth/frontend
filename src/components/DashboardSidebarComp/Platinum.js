// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import "../DashboardSidebarComp/styles/mentorship.css";
// // // import PlatinumCard from "../DashboardSidebarComp/platinumCard";
// // // import SalesContactForm from "./sales-form";

// // // const Mentorship = ({ darkMode }) => {
// // //   const [userData, setUserData] = useState(null);
// // //   const accessToken = localStorage.getItem("accessToken");
// // //   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
// // //     ? process.env.REACT_APP_API_URL
// // //     : process.env.REACT_APP_API_URL + "/";
// // //   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;
// // //   const [showForm, setShowForm] = useState(false);

// // //   useEffect(() => {
// // //     const fetchUser = async () => {
// // //       if (!accessToken) return;

// // //       try {
// // //         const res = await axios.get(USER_API_URL, {
// // //           headers: {
// // //             Authorization: `Bearer ${accessToken}`,
// // //           },
// // //         });
// // //         setUserData(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching user:", err);
// // //       }
// // //     };

// // //     fetchUser();
// // //   }, [accessToken]);

// // //   // ✅ If user is platinum, redirect automatically
// // //   useEffect(() => {
// // //     if (userData?.subscription_status === "platinum") {
// // //       window.location.href = "/platinum-dashboard";
// // //     }
// // //   }, [userData]);

// // //   // ⛔ If user is NOT platinum, show PlatinumCard
// // //   if (userData && userData.subscription_status !== "platinum") {
// // //     return (
// // //       <div className="container mt-5">
// // //         <button onClick={() => setShowForm(true)}>Open Sales Form</button>;
// // //         {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
// // //         <PlatinumCard />
// // //       </div>
// // //     );
// // //   }

// // //   //  While loading user data, show nothing or a loader
// // //   if (!userData) {
// // //     return <div className="text-center mt-5">Loading...</div>;
// // //   }

// // //   return null;
// // // };

// // // export default Mentorship;

// // import React from "react";
// // import platinumIMg from "../DashboardSidebarComp/platinum-1.jpg";
// // import platinumIMg1 from "../DashboardSidebarComp/platinum-2.jpg";

// // function Platinum() {
// //   return (
// //     <div className="container mt-4">
// //       {/* <PlatinumCard/> */}
// //       <div class="container">
// //         <div class="row">
// //           <div class="col-lg-4">
// //             <div class="platinum_img">
// //               <img
// //                 className="obj_fit"
// //                 src={platinumIMg}
// //                 alt=""
// //                 style={{ borderRadius: "20px" }}
// //               />
// //             </div>
// //           </div>

// //           <div class="col-lg-4">
// //             <div class="platinum_img">
// //               <img
// //                 className="obj_fit"
// //                 src={platinumIMg1}
// //                 alt=""
// //                 style={{ borderRadius: "20px" }}
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //
// //     </div>
// //   );
// // }

// // export default Platinum;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/mentorship.css";
// import SalesContactForm from "./sales-form";

// import platinumImg2 from "../DashboardSidebarComp/images/platinum-monthly.jpg";
// import platinumImg1 from "../DashboardSidebarComp/images/platinum.jpg";

// const Platinum = () => {
//   const [userData, setUserData] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const accessToken = localStorage.getItem("accessToken");

//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;
//       try {
//         const res = await axios.get(USER_API_URL, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };
//     fetchUser();
//   }, [accessToken]);

//   //  Redirect platinum users
//   useEffect(() => {
//     if (userData?.subscription_status === "platinum") {
//       window.location.href = "/platinum-dashboard";
//     }
//   }, [userData]);

//   // 🟡 Show Platinum sign-up for others
//   if (userData && userData.subscription_status !== "platinum") {
//     return (
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
//             <img
//               src={platinumImg1}
//               className="img-fluid rounded"
//               style={{ cursor: "pointer" }}
//               alt="Platinum 1"
//             />
//           </div>
//           <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
//             <img
//               src={platinumImg2}
//               className="img-fluid rounded"
//               style={{ cursor: "pointer" }}
//               alt="Platinum 2"
//             />
//           </div>
//         </div>
//         <div className="text-center my-4"></div>
//         {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
//       </div>
//     );
//   }

//   if (!userData) {
//     return <div className="text-center mt-5">Loading...</div>;
//   }

//   return null;
// };

// export default Platinum;

import axios from "axios";
import { useEffect, useState } from "react";
import accessingLogo from "../DashboardSidebarComp/images/accessingplatinumdahboard.png";
import "../DashboardSidebarComp/styles/mentorship.css";
import SalesContactForm from "./sales-form";

import platinumImg2 from "../DashboardSidebarComp/images/platinum-monthly.jpg";
import platinumImg1 from "../DashboardSidebarComp/images/platinum.jpg";

const Platinum = () => {
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  const onboardingTexts = ["Welcome", "to the", "Platinum Member", "World"];

  // setTimeout(() => {
  //   // optional fade out first
  //   document.querySelector(".transition-screen").classList.add("fade-out");
  //   setTimeout(() => {
  //     window.location.href = "/platinum-dashboard";
  //   }, 1000); // delay after fade
  // }, 1500);
  const [showOuterGlow, setShowOuterGlow] = useState(false);

  const handleGlowClick = () => {
    setShowOuterGlow(true);
    setTimeout(() => {
      window.location.href = "/platinum-dashboard";
    }, 1200); // matches glow animation
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(USER_API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [accessToken]);

  useEffect(() => {
    if (userData?.subscription_status === "platinum") {
      setShowTransition(true);

      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => {
          if (prev < onboardingTexts.length - 1) return prev + 1;
          else {
            clearInterval(interval);
            setTimeout(() => {
              window.location.href = "/platinum-dashboard";
            }, 1500);
            return prev;
          }
        });
      }, 1200);
    }
  }, [userData]);

  // if (showTransition) {
  //   return (
  //     <div className="transition-screen">
  //       <div className="rotating-logo-container">
  //         <div className="wave-effect"></div>
  //         <img
  //           src={accessingLogo}
  //           alt="Accessing Platinum"
  //           className="rotating-logo"
  //         />
  //       </div>
  //       <div className="transition-text">
  //         {onboardingTexts.slice(0, currentTextIndex + 1).map((line, idx) => (
  //           <div key={idx} className="fade-text">
  //             {line}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  if (showTransition) {
    return (
      <div className="transition-screen">
        <div className="rotating-logo-container" onClick={handleGlowClick}>
          {showOuterGlow && <div className="outer-glow-overlay"></div>}

          {/* <div
          className="rotating-logo-container"
          onClick={() => (window.location.href = "/platinum-dashboard")}> */}
          <div className="wave-effect">
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
          </div>

          <img
            src={accessingLogo}
            alt="Accessing Platinum"
            className="static-logo"
          />
        </div>
      </div>
    );
  }

  if (userData && userData.subscription_status !== "platinum") {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
            <img
              src={platinumImg1}
              className="img-fluid rounded"
              style={{ cursor: "pointer" }}
              alt="Platinum 1"
            />
          </div>
          <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
            <img
              src={platinumImg2}
              className="img-fluid rounded"
              style={{ cursor: "pointer" }}
              alt="Platinum 2"
            />
          </div>
        </div>
        <div className="text-center my-4"></div>
        {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
      </div>
    );
  }

  if (!userData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return null;
};

export default Platinum;
