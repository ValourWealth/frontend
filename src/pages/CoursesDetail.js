// // // // import React, { useState } from 'react';
// // // // import "../styles/coursedetails.css";

// // // // function CoursesDetail() {
// // // //   const [activeTab, setActiveTab] = useState('beginner');
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   // Function to handle tab switching
// // // //   const handleTabChange = (tabId) => {
// // // //     setActiveTab(tabId);
// // // //   };

// // // //   return (
// // // //     <div className="course-details-container">
// // // //       <div className="course-header">
// // // //         <h1>The Complete FOREX Scalping Trading Course</h1>
// // // //         <p className="course-subtitle">Master the art of FOREX scalping with our comprehensive course</p>
// // // //       </div>

// // // //       <div className="course-tabs">
// // // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // // //           <li className="nav-item  flex-grow-1" role="presentation">
// // // //             <button 
// // // //               className={`nav-link ${activeTab === 'beginner' ? 'active' : ''}`}
// // // //               onClick={() => handleTabChange('beginner')}
// // // //               id="beginner-tab"
// // // //               type="button"
// // // //               role="tab"
// // // //               aria-controls="beginner"
// // // //               aria-selected={activeTab === 'beginner'}
// // // //             >
// // // //               Beginner
// // // //             </button>
// // // //           </li>
// // // //           <li className="nav-item  flex-grow-1" role="presentation">
// // // //             <button 
// // // //               className={`nav-link ${activeTab === 'intermediate' ? 'active' : ''}`}
// // // //               onClick={() => handleTabChange('intermediate')}
// // // //               id="intermediate-tab"
// // // //               type="button"
// // // //               role="tab"
// // // //               aria-controls="intermediate"
// // // //               aria-selected={activeTab === 'intermediate'}
// // // //             >
// // // //               Intermediate
// // // //             </button>
// // // //           </li>
// // // //           <li className="nav-item  flex-grow-1" role="presentation">
// // // //             <button 
// // // //               className={`nav-link ${activeTab === 'professional' ? 'active' : ''}`}
// // // //               onClick={() => handleTabChange('professional')}
// // // //               id="professional-tab"
// // // //               type="button"
// // // //               role="tab"
// // // //               aria-controls="professional"
// // // //               aria-selected={activeTab === 'professional'}
// // // //             >
// // // //               Professional
// // // //             </button>
// // // //           </li>
// // // //         </ul>

// // // //         {/* Tab Content */}
// // // //         <div className="tab-content" id="courseTabsContent">
// // // //           {/* Beginner Tab Content */}
// // // //           <div 
// // // //             className={`tab-pane fade ${activeTab === 'beginner' ? 'show active' : ''}`}
// // // //             id="beginner"
// // // //             role="tabpanel"
// // // //             aria-labelledby="beginner-tab"
// // // //           >
// // // //             <div className="level-header">
// // // //               <h2>Beginner Level</h2>
// // // //               <button className="btn btn-danger">View Level</button>
// // // //             </div>
// // // //             <div className="progress mb-4">
// // // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
// // // //             </div>
            
// // // //             {/* Video Section */}
// // // //             <div className="video-container">
// // // //               <div className="ratio">
// // // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="FOREX Scalping for Beginners" allowFullScreen></iframe>
// // // //               </div>
// // // //               <div className="video-controls mt-3">
// // // //                 {/* <button className="btn btn-success play-btn">Play Video</button> */}
// // // //               </div>
// // // //             </div>

// // // //             {/* Course Modules */}
// // // //             <div className="course-modules mt-4">
// // // //               <div className="module-item">
// // // //                 <h3>Introduction to FOREX Scalping</h3>
// // // //                 <p>Learn the basics of scalping in the FOREX market</p>
// // // //               </div>
              
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>Best Forex Currency pairs to Scalp</h3>
// // // //                 <p>Discover which currency pairs are best for scalping strategies</p>
// // // //               </div>
              
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>How to Choose Your Broker</h3>
// // // //                 <p>Learn how to select the right broker for scalping</p>
// // // //               </div>

// // // //               <div className="quiz_btn">
// // // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // // //                 Take Quiz
// // // //               </button>
// // // //             </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Intermediate Tab Content */}
// // // //           <div 
// // // //             className={`tab-pane fade ${activeTab === 'intermediate' ? 'show active' : ''}`}
// // // //             id="intermediate"
// // // //             role="tabpanel"
// // // //             aria-labelledby="intermediate-tab"
// // // //           >
// // // //             <div className="level-header">
// // // //               <h2>Intermediate Level</h2>
// // // //               <button className="btn btn-danger">View Level</button>
// // // //             </div>
// // // //             <div className="progress mb-4">
// // // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
// // // //             </div>
            
// // // //             {/* Video Section */}
// // // //             <div className="video-container locked-video">
// // // //               <div className="ratio">
// // // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Intermediate FOREX Scalping Techniques" allowFullScreen></iframe>
// // // //                 <div className="video-lock-overlay">
// // // //                   <div className="lock-content">
// // // //                     <i className="bi bi-lock-fill"></i>
// // // //                     <h4>Unlock Intermediate Content</h4>
// // // //                     <p>Complete beginner level to unlock</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Course Modules */}
// // // //             <div className="course-modules mt-4">
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>Advanced Scalping Patterns</h3>
// // // //                 <p>Master advanced patterns for more profitable trades</p>
// // // //               </div>
              
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>Risk Management for Scalpers</h3>
// // // //                 <p>Learn essential risk management techniques</p>
// // // //               </div>

// // // //               <div className="quiz_btn">
// // // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // // //                 Take Quiz
// // // //               </button>
// // // //             </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Professional Tab Content */}
// // // //           <div 
// // // //             className={`tab-pane fade ${activeTab === 'professional' ? 'show active' : ''}`}
// // // //             id="professional"
// // // //             role="tabpanel"
// // // //             aria-labelledby="professional-tab"
// // // //           >
// // // //             <div className="level-header">
// // // //               <h2>Professional Level</h2>
// // // //               <button className="btn btn-danger">View Level</button>
// // // //             </div>
// // // //             <div className="progress mb-4">
// // // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
// // // //             </div>
            
// // // //             {/* Video Section */}
// // // //             <div className="video-container locked-video">
// // // //               <div className="ratio">
// // // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Professional FOREX Scalping Strategies" allowFullScreen></iframe>
// // // //                 <div className="video-lock-overlay">
// // // //                   <div className="lock-content">
// // // //                     <i className="bi bi-lock-fill"></i>
// // // //                     <h4>Unlock Professional Content</h4>
// // // //                     <p>Complete intermediate level to unlock</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Course Modules */}
// // // //             <div className="course-modules mt-4">
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>Expert Scalping Strategies</h3>
// // // //                 <p>Advanced techniques used by professional traders</p>
// // // //               </div>
              
// // // //               <div className="module-item locked">
// // // //                 <div className="locked-overlay">
// // // //                   <i className="bi bi-lock-fill"></i>
// // // //                   <span>Locked</span>
// // // //                 </div>
// // // //                 <h3>Automating Your Scalping Strategy</h3>
// // // //                 <p>Learn how to automate your scalping strategies</p>
// // // //               </div>
// // // //               <div className="quiz_btn">
// // // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // // //                 Take Quiz
// // // //               </button>
// // // //             </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
    

// // // //       {/* Modal (Added) */}
// // // //       <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
// // // //         <div className="modal-dialog modal-dialog-centered" role="document">
// // // //           <div className="modal-content">
// // // //             <div className="modal-header">
// // // //               <h5 className="modal-title">Starting Quiz</h5>
// // // //               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
// // // //             </div>
// // // //             <div className="modal-body">
// // // //               <p>Are you ready to start the quiz?</p>
// // // //             </div>
// // // //             <div className="modal-footer">
// // // //               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
// // // //               <button className="btn btn-success">Start Quiz</button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Modal Backdrop */}
// // // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CoursesDetail;

 


// // // // 1 updations code working;;
// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "../styles/coursedetails.css";

// // // // const CourseDetail = () => {
// // // //   const { id: courseId } = useParams(); // Corrected useParams
// // // //   const [levels, setLevels] = useState([]);
// // // //   const [activeTab, setActiveTab] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const accessToken = localStorage.getItem("accessToken");
// // // //   const API_BASE_URL = process.env.REACT_APP_API_URL;

// // // //   useEffect(() => {
// // // //     if (!accessToken) {
// // // //       setError("Unauthorized. Please log in.");
// // // //       return;
// // // //     }
// // // //     if (!courseId) {
// // // //       setError("Invalid course ID. Please try again.");
// // // //       return;
// // // //     }
    
// // // //     const fetchLevels = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API_BASE_URL}api/courses/${courseId}/levels/`, {
// // // //           headers: { Authorization: `Bearer ${accessToken}` },
// // // //         });
// // // //         const levelsData = res.data;

// // // //         // Fetch videos for each level
// // // //         const levelsWithVideos = await Promise.all(
// // // //           levelsData.map(async (level, index) => {
// // // //             const videosRes = await axios.get(`${API_BASE_URL}api/levels/${level.id}/videos/`, {
// // // //               headers: { Authorization: `Bearer ${accessToken}` },
// // // //             });
// // // //             let videos = videosRes.data;

// // // //             // Locking mechanism
// // // //             if (index === 0) {
// // // //               videos = videos.map((video, i) => ({
// // // //                 ...video,
// // // //                 unlocked: i === 0, // Unlock the first video, rest locked
// // // //               }));
// // // //             } else {
// // // //               videos = videos.map((video) => ({
// // // //                 ...video,
// // // //                 unlocked: false, // Lock all videos initially for non-beginner levels
// // // //               }));
// // // //             }

// // // //             return { ...level, videos };
// // // //           })
// // // //         );

// // // //         setLevels(levelsWithVideos);
// // // //         setActiveTab(levelsWithVideos.length > 0 ? levelsWithVideos[0].id : null);
// // // //       } catch (err) {
// // // //         setError("Failed to load course levels. Ensure you are enrolled.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
    
// // // //     fetchLevels();
// // // //   }, [courseId, accessToken, API_BASE_URL]);

// // // //   if (loading) return <div>Loading...</div>;
// // // //   if (error) return <div className="error">{error}</div>;

// // // //   return (
// // // //     <div className="course-details-container">
// // // //       <h1>Course Details</h1>

// // // //       {/* Tabs */}
// // // //       <ul className="nav nav-tabs">
// // // //         {levels.map((level) => (
// // // //           <li key={level.id} className="nav-item flex-grow-1">
// // // //             <button
// // // //               className={`nav-link ${activeTab === level.id ? "active" : ""}`}
// // // //               onClick={() => setActiveTab(level.id)}
// // // //             >
// // // //               {level.name}
// // // //             </button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {/* Tab Content */}
// // // //       <div className="tab-content">
// // // //         {levels.map((level) => (
// // // //           <div
// // // //             key={level.id}
// // // //             className={`tab-pane fade ${activeTab === level.id ? "show active" : ""}`}
// // // //           >
// // // //             <h2>{level.name} Level</h2>
// // // //             <div className="progress">
// // // //               <div className="progress-bar bg-success" style={{ width: "30%" }}></div>
// // // //             </div>

// // // //             <div className="video-container">
// // // //               {level.videos.length > 0 ? (
// // // //                 level.videos.map((video, index) => (
// // // //                   <div key={video.id} className={`module-item ${video.unlocked ? "" : "locked"}`}>
// // // //                     {video.unlocked ? (
// // // //                       <iframe src={video.video_url} title={video.title} allowFullScreen></iframe>
// // // //                     ) : (
// // // //                       <div className="locked-overlay">
// // // //                         <i className="bi bi-lock-fill"></i>
// // // //                         <span>Locked</span>
// // // //                       </div>
// // // //                     )}
// // // //                     <h3>{video.title}</h3>
// // // //                   </div>
// // // //                 ))
// // // //               ) : (
// // // //                 <p>No videos available for this level.</p>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CourseDetail;



// // // =====================================================================================working=================


// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import "../styles/coursedetails.css";

// // const CoursesDetail = () => {
// //   const { id: courseId } = useParams();
// //   const [activeTab, setActiveTab] = useState("beginner");
// //   const [showModal, setShowModal] = useState(false);
// //   const [levels, setLevels] = useState([]);
// //   const [currentVideo, setCurrentVideo] = useState(null);
// //   const accessToken = localStorage.getItem("accessToken");
// //   const API_BASE_URL = process.env.REACT_APP_API_URL;

// //   useEffect(() => {
// //     if (!accessToken || !courseId) return;
    
// //     const fetchLevels = async () => {
// //       try {
// //         const res = await axios.get(`${API_BASE_URL}api/courses/${courseId}/levels/`, {
// //           headers: { Authorization: `Bearer ${accessToken}` },
// //         });
// //         const levelsData = res.data;

// //         const levelsWithVideos = await Promise.all(
// //           levelsData.map(async (level, index) => {
// //             const videosRes = await axios.get(`${API_BASE_URL}api/levels/${level.id}/videos/`, {
// //               headers: { Authorization: `Bearer ${accessToken}` },
// //             });
// //             let videos = videosRes.data.map((video, i) => ({
// //               ...video,
// //               unlocked: index === 0 && i === 0,
// //             }));
// //             if (index === 0 && videos.length > 0) {
// //               setCurrentVideo(videos[0].video_url);
// //             }
// //             return { ...level, videos };
// //           })
// //         );
// //         setLevels(levelsWithVideos);
// //       } catch (err) {
// //         console.error("Failed to load course levels.", err);
// //       }
// //     };
// //     fetchLevels();
// //   }, [courseId, accessToken, API_BASE_URL]);

// //   return (
// //     <div className="course-details-container">
// //       <div className="course-header">
// //         <h1>The Complete FOREX Scalping Trading Course</h1>
// //         <p className="course-subtitle">Master the art of FOREX scalping with our comprehensive course</p>
// //       </div>

// //       <div className="course-tabs">
// //         <ul className="nav nav-tabs">
// //           {levels.map((level) => (
// //             <li key={level.id} className="nav-item flex-grow-1" role="presentation">
// //               <button 
// //                 className={`nav-link ${activeTab === level.name.toLowerCase() ? "active" : ""}`}
// //                 onClick={() => setActiveTab(level.name.toLowerCase())}
// //               >
// //                 {level.name}
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         <div className="tab-content" id="courseTabsContent">
// //           {levels.map((level) => (
// //             <div key={level.id} className={`tab-pane fade ${activeTab === level.name.toLowerCase() ? "show active" : ""}`}>
// //               <div className="level-header">
// //                 <h2>{level.name} Level</h2>
// //                 <button className="btn btn-danger">View Level</button>
// //               </div>
// //               <div className="progress mb-4">
// //                 <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }}></div>
// //               </div>
              
// //               {level.name.toLowerCase() === "beginner" && currentVideo && (
// //                 <div className="video-container">
// //                   <video controls autoPlay width="100%" onError={(e) => console.error("Error loading video", e.target.src)}>
// //                     <source src={currentVideo} type="video/mp4" />
// //                     Your browser does not support the video tag.
// //                   </video>
// //                 </div>
// //               )}
              
// //               <div className="course-modules mt-4">
// //                 {level.videos.map((video) => (
// //                   <div key={video.id} className={`module-item ${video.unlocked ? "" : "locked"}`}>
// //                     {video.unlocked ? (
// //                       <video controls width="100%">
// //                         <source src={video.video_url} type="video/mp4" />
// //                         Your browser does not support the video tag.
// //                       </video>
// //                     ) : (
// //                       <div className="locked-overlay">
// //                         <i className="bi bi-lock-fill"></i>
// //                         <span>Locked</span>
// //                       </div>
// //                     )}
// //                     <h3>{video.title}</h3>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="quiz_btn">
// //                 <button className="theme_btn" onClick={() => setShowModal(true)}>Take Quiz</button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {showModal && (
// //         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
// //           <div className="modal-dialog modal-dialog-centered" role="document">
// //             <div className="modal-content">
// //               <div className="modal-header">
// //                 <h5 className="modal-title">Starting Quiz</h5>
// //                 <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
// //               </div>
// //               <div className="modal-body">
// //                 <p>Are you ready to start the quiz?</p>
// //               </div>
// //               <div className="modal-footer">
// //                 <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
// //                 <button className="btn btn-success">Start Quiz</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {showModal && <div className="modal-backdrop fade show"></div>}
// //     </div>
// //   );
// // };

// // export default CoursesDetail;







// // this code is working properly with full fledged ========================================================================================================================
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/coursedetails.css";

const CoursesDetail = () => {
  const { id: courseId } = useParams();
  const [activeTab, setActiveTab] = useState("beginner");
  const [showModal, setShowModal] = useState(false);
  const [levels, setLevels] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!accessToken || !courseId) return;
    
    const fetchCourseDetails = async () => {
      try {
        const courseRes = await axios.get(`${API_BASE_URL}api/courses/${courseId}/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setCourseTitle(courseRes.data.title);
        setCourseDescription(courseRes.data.description);
      } catch (err) {
        console.error("Failed to load course details.", err);
      }
    };
    
    const fetchLevels = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/courses/${courseId}/levels/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const levelsData = res.data;

        const levelsWithVideos = await Promise.all(
          levelsData.map(async (level, index) => {
            const videosRes = await axios.get(`${API_BASE_URL}api/levels/${level.id}/videos/`, {
              headers: { Authorization: `Bearer ${accessToken}` },
            });
            let videos = videosRes.data.map((video, i) => {
              const fullVideoUrl = video.video_file
              ? `${API_BASE_URL.replace(/\/$/, "")}${video.video_file}`
              : null;
            
              console.log("Fixed Video URL:", fullVideoUrl);
              return {
                ...video,
                video_url: fullVideoUrl,
                unlocked: index === 0 && i === 0,
              };
            });
            if (index === 0 && videos.length > 0) {
              setCurrentVideo(videos[0].video_url);
            }
            return { ...level, videos };
          })
        );
        setLevels(levelsWithVideos);
      } catch (err) {
        console.error("Failed to load course levels.", err);
      }
    };
    
    fetchCourseDetails();
    fetchLevels();
  }, [courseId, accessToken, API_BASE_URL]);

  return (
    <div className="course-details-container">
      <div className="course-header">
        <h1>The Complete FOREX Scalping Trading Course</h1>
        <p className="course-subtitle">Master the art of FOREX scalping with our comprehensive course</p>
      </div>

      <div className="course-tabs">
        <ul className="nav nav-tabs">
          {levels.map((level) => (
            <li key={level.id} className="nav-item flex-grow-1" role="presentation">
              <button 
                className={`nav-link ${activeTab === level.name.toLowerCase() ? "active" : ""}`}
                onClick={() => setActiveTab(level.name.toLowerCase())}
              >
                {level.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content" id="courseTabsContent">
          {levels.map((level) => (
            <div key={level.id} className={`tab-pane fade ${activeTab === level.name.toLowerCase() ? "show active" : ""}`}>
              <div className="level-header">
                <h2>{level.name} Level</h2>
                <button className="btn btn-danger">View Level</button>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }}></div>
              </div>
              
              {level.name.toLowerCase() === "beginner" && currentVideo && (
                <div className="video-container">
                  <video controls autoPlay width="100%" onError={(e) => console.error("Error loading video", e.target.src)}>
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              <div className="course-modules mt-4">
                {level.videos.map((video) => (
                  video.unlocked && video.video_url ? (
                    <div key={video.id} className="module-item">
                      <video controls width="100%">
                        <source src={video.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h3>{video.title}</h3>
                    </div>
                  ) : (
                    <div key={video.id} className="module-item locked">
                      <div className="locked-overlay">
                        <i className="bi bi-lock-fill"></i>
                        <span>Locked</span>
                      </div>
                      <h3>{video.title}</h3>
                    </div>
                  )
                ))}
              </div>
              <div className="quiz_btn">
                <button className="theme_btn" onClick={() => setShowModal(true)}>Take Quiz</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Starting Quiz</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you ready to start the quiz?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button className="btn btn-success">Start Quiz</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default CoursesDetail;

// ===================================================================================================================================

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../styles/coursedetails.css";

// const CoursesDetail = () => {
//   const { id: courseId } = useParams();
//   const [activeTab, setActiveTab] = useState("beginner");
//   const [showModal, setShowModal] = useState(false);
//   const [levels, setLevels] = useState([]);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [courseTitle, setCourseTitle] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [quizData, setQuizData] = useState(null);
//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     if (!accessToken || !courseId) return;
    
//     const fetchCourseDetails = async () => {
//       try {
//         const courseRes = await axios.get(`${API_BASE_URL}api/courses/${courseId}/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setCourseTitle(courseRes.data.title);
//         setCourseDescription(courseRes.data.description);
//       } catch (err) {
//         console.error("Failed to load course details.", err);
//       }
//     };
    
//     const fetchLevels = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/courses/${courseId}/levels/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         const levelsData = res.data;

//         const levelsWithVideos = await Promise.all(
//           levelsData.map(async (level, index) => {
//             const videosRes = await axios.get(`${API_BASE_URL}api/levels/${level.id}/videos/`, {
//               headers: { Authorization: `Bearer ${accessToken}` },
//             });
//             let videos = videosRes.data.map((video, i) => {
//               const fullVideoUrl = video.video_file
//               ? `${API_BASE_URL.replace(/\/$/, "")}${video.video_file}`
//               : null;
            
//               console.log("Fixed Video URL:", fullVideoUrl);
//               return {
//                 ...video,
//                 video_url: fullVideoUrl,
//                 unlocked: index === 0 && i === 0,
//               };
//             });
//             if (index === 0 && videos.length > 0) {
//               setCurrentVideo(videos[0].video_url);
//             }
//             return { ...level, videos };
//           })
//         );
//         setLevels(levelsWithVideos);
//       } catch (err) {
//         console.error("Failed to load course levels.", err);
//       }
//     };
    
//     fetchCourseDetails();
//     fetchLevels();
//   }, [courseId, accessToken, API_BASE_URL]);

//   const fetchQuizData = async (quizId) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}api/quizzes/${quizId}/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setQuizData(response.data);
//     } catch (error) {
//       console.error("Failed to load quiz data:", error);
//     }
//   };

//   return (
//     <div className="course-details-container">
//       <div className="course-header">
//         <h1>{courseTitle}</h1>
//         <p className="course-subtitle">{courseDescription}</p>
//       </div>

//       <div className="course-tabs">
//         <ul className="nav nav-tabs">
//           {levels.map((level) => (
//             <li key={level.id} className="nav-item flex-grow-1" role="presentation">
//               <button 
//                 className={`nav-link ${activeTab === level.name.toLowerCase() ? "active" : ""}`}
//                 onClick={() => setActiveTab(level.name.toLowerCase())}
//               >
//                 {level.name}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="tab-content" id="courseTabsContent">
//           {levels.map((level) => (
//             <div key={level.id} className={`tab-pane fade ${activeTab === level.name.toLowerCase() ? "show active" : ""}`}>
//               <div className="level-header">
//                 <h2>{level.name} Level</h2>
//                 <button className="btn btn-danger">View Level</button>
//               </div>
//               <div className="progress mb-4">
//                 <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }}></div>
//               </div>
              
//               {level.name.toLowerCase() === "beginner" && currentVideo && (
//                 <div className="video-container">
//                   <video controls autoPlay width="100%" onError={(e) => console.error("Error loading video", e.target.src)}>
//                     <source src={currentVideo} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               )}
              
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => { setShowModal(true); fetchQuizData(level.quiz_id); }}>Take Quiz</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Quiz</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 {quizData ? (
//                   <>
//                     <h3>{quizData.title}</h3>
//                     {quizData.questions.map((question, index) => (
//                       <div key={index}>
//                         <p>{question.text}</p>
//                         {question.answers.map((answer, idx) => (
//                           <label key={idx}>
//                             <input type="radio" name={`question_${index}`} value={answer.id} /> {answer.text}
//                           </label>
//                         ))}
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <p>Loading quiz...</p>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && <div className="modal-backdrop fade show"></div>}
//     </div>
//   );
// };

// export default CoursesDetail;
