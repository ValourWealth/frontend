// import axios from "axios";
// import { useEffect, useState } from "react";

// const TradingPlatform = () => {
//   const [webinars, setWebinars] = useState([]);
//   const accessToken = localStorage.getItem("accessToken");
//   const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

//   // ✅ Fetch webinars
//   useEffect(() => {
//     const fetchWebinars = async () => {
//       try {
//         const res = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         const upcoming = res.data.filter((w) => w.status === "Upcoming");
//         setWebinars(upcoming);
//       } catch (err) {
//         console.error("Failed to fetch webinars:", err);
//       }
//     };
//     fetchWebinars();
//   }, []);

//   // ✅ Register handler
//   const handleRegister = async (id) => {
//     try {
//       const res = await axios.post(
//         `${API_URL}${id}/register/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         const updated = webinars.map((w) =>
//           w.id === id
//             ? {
//                 ...w,
//                 registered_count: res.data.registered_count,
//                 already_registered: true,
//               }
//             : w
//         );
//         setWebinars(updated);
//       }
//     } catch (err) {
//       console.error("Register failed:", err);
//     }
//   };

//   // ✅ Unregister handler
//   const handleUnregister = async (id) => {
//     try {
//       const res = await axios.post(
//         `${API_URL}${id}/unregister/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         const updated = webinars.map((w) =>
//           w.id === id
//             ? {
//                 ...w,
//                 registered_count: res.data.registered_count,
//                 already_registered: false,
//               }
//             : w
//         );
//         setWebinars(updated);
//       }
//     } catch (err) {
//       console.error("Unregister failed:", err);
//     }
//   };

//   return (
//     <div className="container-fluid p-0">
//       <div className="row g-0">
//         <div className="sec_heading">
//           <h2 className="live-session-title">Upcoming Live Streams</h2>
//         </div>

//         <div className="col-lg-12">
//           {webinars.length > 0 ? (
//             webinars.map((webinar) => (
//               <div key={webinar.id} className="webinar-card webinar-car-img">
//                 {webinar.thumbnail_public_url && (
//                   <img
//                     alt={webinar.title}
//                     className="webinar-image obj_fit mb-3"
//                     src={webinar.thumbnail_public_url}
//                   />
//                 )}

//                 <div className="webinar-header">
//                   <h4 className="webinar-title">{webinar.title}</h4>
//                   <span className="status-badge">{webinar.status}</span>
//                 </div>

//                 <p className="webinar-description">{webinar.description}</p>

//                 <div className="presenter-info">
//                   <i className="bi bi-person-video3 presenter-icon"></i>
//                   <span className="presenter-name">
//                     Presented by {webinar.presenter}
//                   </span>
//                 </div>

//                 <div className="webinar-details">
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-calendar"></i>
//                       <span>{webinar.date}</span>
//                     </div>
//                     <div className="detail-item">
//                       <i className="bi bi-clock"></i>
//                       <span>{webinar.time}</span>
//                     </div>
//                   </div>
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-people"></i>
//                       <span>{webinar.registered_count} registered</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="webinar-footer">
//                   <div className="tags">
//                     <span className="duration-tag">{webinar.duration}</span>
//                     <span className="level-tag">{webinar.level}</span>
//                   </div>

//                   <div className="registers-btn">
//                     {webinar.already_registered ? (
//                       <button
//                         className="register-button unregister-btn ms-2"
//                         onClick={() => handleUnregister(webinar.id)}
//                       >
//                         Unregister
//                       </button>
//                     ) : (
//                       <button
//                         className="register-button"
//                         onClick={() => handleRegister(webinar.id)}
//                       >
//                         Register
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-white">No upcoming webinars.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingPlatform;

import axios from "axios";
import { useEffect, useState } from "react";

const TradingPlatform = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchWebinars = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const upcoming = res.data.filter((w) => w.status === "Upcoming");
        setWebinars(upcoming);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWebinars();
  }, []);

  const handleRegister = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}${id}/register/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        const updated = webinars.map((w) =>
          w.id === id
            ? {
                ...w,
                registered_count: res.data.registered_count,
                already_registered: true,
              }
            : w
        );
        setWebinars(updated);
      }
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  const handleUnregister = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}${id}/unregister/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        const updated = webinars.map((w) =>
          w.id === id
            ? {
                ...w,
                registered_count: res.data.registered_count,
                already_registered: false,
              }
            : w
        );
        setWebinars(updated);
      }
    } catch (err) {
      console.error("Failed to unregister:", err);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="sec_heading">
          <h2 className="live-session-title">Upcoming Live Streams</h2>
        </div>

        <div className="col-lg-12">
          {loading ? (
            // Shimmer Effect - 1-2 upcoming webinars expected
            <>
              {[...Array(1)].map((_, index) => (
                <div key={index} className="webinar-card webinar-car-img">
                  {/* Webinar Image Shimmer */}
                  <div
                    className="shimmer-block webinar-image obj_fit mb-3"
                    style={{ borderRadius: "8px" }}
                  ></div>

                  {/* Webinar Header Shimmer */}
                  <div className="webinar-header">
                    <div
                      className="shimmer-block mb-2"
                      style={{
                        height: "24px",
                        width: "75%",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block"
                      style={{
                        height: "20px",
                        width: "80px",
                        borderRadius: "12px",
                      }}
                    ></div>
                  </div>

                  {/* Description Shimmer */}
                  <div
                    className="shimmer-block mb-2"
                    style={{
                      height: "16px",
                      width: "100%",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block mb-3"
                    style={{
                      height: "16px",
                      width: "80%",
                      borderRadius: "4px",
                    }}
                  ></div>

                  {/* Presenter Info Shimmer */}
                  <div className="presenter-info">
                    <div
                      className="shimmer-block"
                      style={{
                        height: "16px",
                        width: "160px",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>

                  {/* Webinar Details Shimmer */}
                  <div className="webinar-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "16px",
                            width: "100px",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                      <div className="detail-item">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "16px",
                            width: "80px",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-item">
                        <div
                          className="shimmer-block"
                          style={{
                            height: "16px",
                            width: "120px",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Shimmer */}
                  <div className="webinar-footer">
                    <div className="tags">
                      <div
                        className="shimmer-block"
                        style={{
                          height: "20px",
                          width: "60px",
                          borderRadius: "12px",
                          marginRight: "8px",
                        }}
                      ></div>
                      <div
                        className="shimmer-block"
                        style={{
                          height: "20px",
                          width: "70px",
                          borderRadius: "12px",
                        }}
                      ></div>
                    </div>
                    <div className="registers-btn">
                      <div
                        className="shimmer-block"
                        style={{
                          height: "36px",
                          width: "100px",
                          borderRadius: "6px",
                          marginRight: "8px",
                        }}
                      ></div>
                      <div
                        className="shimmer-block"
                        style={{
                          height: "36px",
                          width: "120px",
                          borderRadius: "6px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : webinars.length > 0 ? (
            // Actual Webinars
            webinars.slice(0, 2).map((webinar) => (
              <div key={webinar.id} className="webinar-card webinar-car-img">
                {webinar.thumbnail_public_url && (
                  <img
                    alt={webinar.title}
                    className="webinar-image mb-3"
                    src={webinar.thumbnail_public_url}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />

                  // <img
                  //   alt={webinar.title}
                  //   className="webinar-image obj_fit mb-3"
                  //   src={webinar.thumbnail_public_url}
                  // />
                )}

                <div className="webinar-header">
                  <h4 className="webinar-title">{webinar.title}</h4>
                  <span className="status-badge">{webinar.status}</span>
                </div>

                <p className="webinar-description">{webinar.description}</p>

                <div className="presenter-info">
                  <i className="bi bi-person-video3 presenter-icon"></i>
                  <span className="presenter-name">
                    Presented by {webinar.presenter}
                  </span>
                </div>

                <div className="webinar-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-calendar"></i>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-people"></i>
                      <span>{webinar.registered_count} registered</span>
                    </div>
                  </div>
                </div>

                <div className="webinar-footer">
                  <div className="tags">
                    <span className="duration-tag">{webinar.duration}</span>
                    <span className="level-tag">{webinar.level}</span>
                  </div>
                  <div className="registers-btn">
                    {webinar.already_registered ? (
                      <button
                        className="register-button unregister-btn ms-2"
                        onClick={() => handleUnregister(webinar.id)}
                      >
                        Unregister
                      </button>
                    ) : (
                      <button
                        className="register-button"
                        onClick={() => handleRegister(webinar.id)}
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No upcoming webinars.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingPlatform;
