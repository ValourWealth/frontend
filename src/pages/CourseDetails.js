// // // import { useEffect, useState } from "react";
// // // import {
// // //   FaBookOpen,
// // //   FaBookReader,
// // //   FaFileAlt,
// // //   FaLightbulb,
// // //   FaLock,
// // //   FaSignal,
// // // } from "react-icons/fa";
// // // import { useParams } from "react-router-dom";
// // // import videoImg from "../assets/images/crypto-latest.png";
// // // import ProgressBarsDisplay from "../components/DashboardSidebarComp/ProgressBar";
// // // import "../styles/academy.css";

// // // const ValourAcademy = () => {
// // //   const { courseId } = useParams();
// // //   const [activeSection, setActiveSection] = useState(null);
// // //   const [selectedLevel, setSelectedLevel] = useState("beginner");
// // //   const [videoUrl, setVideoUrl] = useState(null);
// // //   const [courseData, setCourseData] = useState(null);
// // //   const [progressData, setProgressData] = useState({
// // //     totalProgress: 0,
// // //     levelProgress: 0,
// // //     videoProgress: 0,
// // //   });
// // //   const [videoWatched, setVideoWatched] = useState([]);
// // //   const [notes, setNotes] = useState([]);
// // //   const [mcqs, setMcqs] = useState([]);
// // //   const [userAnswers, setUserAnswers] = useState({});
// // //   const [grade, setGrade] = useState(null);

// // //   const [passedLevels, setPassedLevels] = useState([]);

// // //   useEffect(() => {
// // //     const fetchProgress = async () => {
// // //       const token = localStorage.getItem("accessToken");
// // //       const res = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );
// // //       const data = await res.json();
// // //       const currentLevel = data.levels.find(
// // //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //       );
// // //       setProgressData({
// // //         totalProgress: data.total_progress,
// // //         levelProgress: currentLevel?.percent || 0,
// // //         videoProgress: currentLevel?.percent || 0,
// // //       });
// // //       setVideoWatched(currentLevel?.watched_video_ids || []);
// // //       setPassedLevels(data.passed_levels.map((lvl) => lvl.toLowerCase())); // ✅ Add this line
// // //     };

// // //     if (courseId) fetchProgress();
// // //   }, [courseId, selectedLevel]);

// // //   const toggleSection = (section) => {
// // //     setActiveSection(activeSection === section ? null : section);
// // //   };

// // //   useEffect(() => {
// // //     const fetchCourseDetails = async () => {
// // //       const token = localStorage.getItem("accessToken");
// // //       try {
// // //         const res = await fetch(
// // //           `https://backend-production-1e63.up.railway.app/courses/${courseId}/`,
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${token}`,
// // //               "Content-Type": "application/json",
// // //             },
// // //           }
// // //         );

// // //         if (!res.ok) {
// // //           // If backend returns error, throw it manually
// // //           const text = await res.text(); // because JSON parsing will crash
// // //           throw new Error(`Server error ${res.status}: ${text}`);
// // //         }

// // //         const data = await res.json();
// // //         setCourseData(data);
// // //       } catch (error) {
// // //         console.error("Error fetching course details:", error.message);
// // //       }
// // //     };

// // //     // const fetchCourseDetails = async () => {
// // //     //   const token = localStorage.getItem("accessToken");
// // //     //   const res = await fetch(
// // //     //     `https://backend-production-1e63.up.railway.app/courses/${courseId}/`,
// // //     //     {
// // //     //       headers: {
// // //     //         Authorization: `Bearer ${token}`,
// // //     //         "Content-Type": "application/json",
// // //     //       },
// // //     //     }
// // //     //   );
// // //     //   const data = await res.json();
// // //     //   setCourseData(data);
// // //     // };
// // //     fetchCourseDetails();
// // //   }, [courseId]);

// // //   useEffect(() => {
// // //     const fetchProgress = async () => {
// // //       const token = localStorage.getItem("accessToken");
// // //       const res = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );
// // //       const data = await res.json();
// // //       const currentLevel = data.levels.find(
// // //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //       );
// // //       setProgressData({
// // //         totalProgress: data.total_progress,
// // //         levelProgress: currentLevel?.percent || 0,
// // //         videoProgress: currentLevel?.percent || 0,
// // //       });
// // //       setVideoWatched(currentLevel?.watched_video_ids || []);
// // //     };
// // //     if (courseId) fetchProgress();
// // //   }, [courseId, selectedLevel]);

// // //   useEffect(() => {
// // //     const fetchNotes = async () => {
// // //       const token = localStorage.getItem("accessToken");
// // //       const levelObj = courseData?.levels.find(
// // //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //       );
// // //       if (!levelObj) return;
// // //       const res = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );
// // //       const data = await res.json();
// // //       setNotes(data);
// // //     };
// // //     if (courseData) fetchNotes();
// // //   }, [courseId, selectedLevel, courseData]);

// // //   useEffect(() => {
// // //     const fetchMCQs = async () => {
// // //       const token = localStorage.getItem("accessToken");
// // //       const levelObj = courseData?.levels.find(
// // //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //       );
// // //       if (!levelObj) return;
// // //       const res = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );
// // //       const data = await res.json();
// // //       setMcqs(data);
// // //     };
// // //     if (courseData) fetchMCQs();
// // //   }, [courseId, selectedLevel, courseData]);

// // //   const getVideosForLevel = (levelName) => {
// // //     if (!courseData) return [];
// // //     const level = courseData.levels.find(
// // //       (lvl) => lvl.level.toLowerCase() === levelName
// // //     );
// // //     return level ? level.videos : [];
// // //   };

// // //   const handleAnswer = (questionId, answer) => {
// // //     setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
// // //   };

// // //   // const submitQuiz = () => {
// // //   //   const total = mcqs.length;
// // //   //   const correct = mcqs.filter(
// // //   //     (q) => userAnswers[q.id] === q.correct_answer
// // //   //   ).length;
// // //   //   const percent = Math.round((correct / total) * 100);
// // //   //   setGrade(percent);
// // //   // };

// // //   // const isLevelUnlocked = (level) => {
// // //   //   if (level === "beginner") return true;
// // //   //   if (level === "intermediate")
// // //   //     return grade >= 50 && selectedLevel === "beginner";
// // //   //   if (level === "professional")
// // //   //     return grade >= 50 && selectedLevel === "intermediate";
// // //   //   return false;
// // //   // };

// // //   const submitQuiz = async () => {
// // //     const token = localStorage.getItem("accessToken");

// // //     const levelObj = courseData?.levels.find(
// // //       (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //     );
// // //     if (!levelObj) return;

// // //     try {
// // //       const res = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/submit/`,
// // //         {
// // //           method: "POST",
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //           body: JSON.stringify({ answers: userAnswers }),
// // //         }
// // //       );
// // //       const data = await res.json();
// // //       setGrade(Math.round(data.score));

// // //       // 💡 Re-fetch progress to update passedLevels
// // //       const progressRes = await fetch(
// // //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );
// // //       const progressData = await progressRes.json();
// // //       setPassedLevels(
// // //         progressData.passed_levels.map((lvl) => lvl.toLowerCase())
// // //       );
// // //     } catch (error) {
// // //       console.error("Error submitting quiz:", error);
// // //     }
// // //   };

// // //   const isLevelUnlocked = (level) => {
// // //     if (level === "beginner") return true;
// // //     if (level === "intermediate") return passedLevels.includes("beginner");
// // //     if (level === "professional") return passedLevels.includes("intermediate");
// // //     return false;
// // //   };

// // //   const isVideoUnlocked = (index) => {
// // //     return true; // All videos are unlocked
// // //   };

// // //   const areAllVideosWatched = () => {
// // //     return true; // So notes unlock immediately
// // //   };

// // //   const canAccessNotes = () => areAllVideosWatched();
// // //   const canAccessMCQs = () => canAccessNotes();
// // //   const renderVideos = () => {
// // //     const videos = getVideosForLevel(selectedLevel);

// // //     const markVideoWatched = async (videoId) => {
// // //       const token = localStorage.getItem("accessToken");
// // //       try {
// // //         await fetch(
// // //           `https://backend-production-1e63.up.railway.app/videos/${videoId}/watch/`,
// // //           {
// // //             method: "POST",
// // //             headers: {
// // //               Authorization: `Bearer ${token}`,
// // //               "Content-Type": "application/json",
// // //             },
// // //           }
// // //         );

// // //         const res = await fetch(
// // //           `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${token}`,
// // //               "Content-Type": "application/json",
// // //             },
// // //           }
// // //         );
// // //         const data = await res.json();
// // //         const currentLevel = data.levels.find(
// // //           (lvl) => lvl.level.toLowerCase() === selectedLevel
// // //         );
// // //         setProgressData({
// // //           totalProgress: data.total_progress,
// // //           levelProgress: currentLevel?.percent || 0,
// // //           videoProgress: currentLevel?.percent || 0,
// // //         });
// // //         setVideoWatched(currentLevel?.watched_video_ids || []);
// // //       } catch (error) {
// // //         console.error("Error marking video watched:", error);
// // //       }
// // //     };

// // //     return (
// // //       <div className="container">
// // //         <div className="row">
// // //           {videos.map((video, index) => {
// // //             const isUnlocked = isVideoUnlocked(index);
// // //             const currentVideoUrl = video.public_url;
// // //             console.log("Current video URL:", currentVideoUrl);

// // //             return (
// // //               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
// // //                 <div className="video-card">
// // //                   <div
// // //                     className="video-thumbnail"
// // //                     style={{ position: "relative" }}
// // //                   >
// // //                     {isUnlocked ? (
// // //                       !videoUrl || videoUrl !== currentVideoUrl ? (
// // //                         <>
// // //                           {/* <img className="obj_fit" src={videoImg} alt={video.title} /> */}
// // //                           <img
// // //                             className="obj_fit"
// // //                             src={video.thumbnail_url || videoImg}
// // //                             alt={video.title}
// // //                           />
// // //                           <button
// // //                             onClick={() => setVideoUrl(currentVideoUrl)}
// // //                             className="play-button-overlay"
// // //                           >
// // //                             ▶
// // //                           </button>
// // //                         </>
// // //                       ) : (
// // //                         <video
// // //                           controls
// // //                           // autoPlay
// // //                           className="w-100 rounded"
// // //                           controlsList="nodownload"
// // //                           onContextMenu={(e) => e.preventDefault()}
// // //                           onEnded={() => markVideoWatched(video.id)}
// // //                         >
// // //                           <source src={currentVideoUrl} />
// // //                           Your browser does not support the video tag.
// // //                         </video>
// // //                       )
// // //                     ) : (
// // //                       <>
// // //                         <img
// // //                           className="obj_fit blur"
// // //                           src={video.thumbnail_url || videoImg}
// // //                           alt="Locked"
// // //                         />
// // //                         <div className="locked-overlay">
// // //                           <FaLock />
// // //                         </div>
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                   <div className="video-info">
// // //                     <h5 className="video-title">{video.title}</h5>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const renderNotes = () => {
// // //     if (!canAccessNotes()) {
// // //       return (
// // //         <div className="container text-center text-white">
// // //           <p>
// // //             <FaLock /> Complete all videos to unlock notes.
// // //           </p>
// // //         </div>
// // //       );
// // //     }

// // //     return (
// // //       <div className="container">
// // //         <div className="row">
// // //           {notes.length ? (
// // //             notes.map((note) => (
// // //               <div key={note.id} className="col-md-6 text-white mb-3">
// // //                 <div className="note-card p-3 bg-dark rounded">
// // //                   <h5>{note.title}</h5>
// // //                   <p style={{ whiteSpace: "pre-line", marginBottom: 0 }}>
// // //                     {note.content}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <div className="col-12 text-white">
// // //               <p>No notes found for this level.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const renderKnowledge = () => {
// // //     if (!canAccessMCQs()) {
// // //       return (
// // //         <div className="container text-center text-white">
// // //           <p>
// // //             <FaLock /> Please view notes before attempting the quiz.
// // //           </p>
// // //         </div>
// // //       );
// // //     }

// // //     return (
// // //       <div className="container">
// // //         <div className="row">
// // //           {mcqs.length === 0 ? (
// // //             <div className="col-12 text-white">
// // //               <p>No quiz available for this level.</p>
// // //             </div>
// // //           ) : (
// // //             <div className="col-12 text-white">
// // //               {mcqs.map((q) => (
// // //                 <div key={q.id} className="mb-4 p-3 bg-dark rounded">
// // //                   <h5>{q.question}</h5>
// // //                   {[q.option_a, q.option_b, q.option_c, q.option_d].map(
// // //                     (opt, idx) => {
// // //                       const optionKey = ["A", "B", "C", "D"][idx];
// // //                       return (
// // //                         <div key={optionKey} className="form-check">
// // //                           <input
// // //                             type="radio"
// // //                             className="form-check-input"
// // //                             name={`question-${q.id}`}
// // //                             id={`question-${q.id}-option-${optionKey}`}
// // //                             value={optionKey}
// // //                             checked={userAnswers[q.id] === optionKey}
// // //                             onChange={() => handleAnswer(q.id, optionKey)}
// // //                           />
// // //                           <label
// // //                             className="form-check-label"
// // //                             htmlFor={`question-${q.id}-option-${optionKey}`}
// // //                           >
// // //                             {opt}
// // //                           </label>
// // //                         </div>
// // //                       );
// // //                     }
// // //                   )}
// // //                 </div>
// // //               ))}
// // //               <button className="btn btn-success" onClick={submitQuiz}>
// // //                 Submit Quiz
// // //               </button>
// // //               {grade !== null && (
// // //                 <p className="mt-3">
// // //                   You scored: <strong>{grade}%</strong>.{" "}
// // //                   {grade >= 50
// // //                     ? "You can proceed to the next level!"
// // //                     : "Please retake the quiz."}
// // //                 </p>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="valour-container">
// // //       <div className="valour-header">
// // //         <div className="header-brand">Valour Academy</div>
// // //       </div>
// // //       <div className="valour-main">
// // //         <div className="valour-sidebar">
// // //           <div className="sidebar-section">
// // //             <div className="sidebar-heading">COURSE LEVELS</div>
// // //             {["beginner", "intermediate", "professional"].map((level) => {
// // //               const unlocked = isLevelUnlocked(level);
// // //               return (
// // //                 <div
// // //                   key={level}
// // //                   className={`sidebar-item ${
// // //                     selectedLevel === level ? "active" : ""
// // //                   }`}
// // //                   onClick={() => unlocked && setSelectedLevel(level)}
// // //                   style={{
// // //                     opacity: unlocked ? 1 : 0.4,
// // //                     cursor: unlocked ? "pointer" : "not-allowed",
// // //                   }}
// // //                 >
// // //                   <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
// // //                   {!unlocked && <FaLock style={{ marginLeft: "10px" }} />}
// // //                   <i
// // //                     className={`arrow-icon ${
// // //                       selectedLevel === level ? "down" : "right"
// // //                     }`}
// // //                   ></i>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //         <div className="valour-content p-0">
// // //           {courseData && (
// // //             <div className="main_module">
// // //               <div className="content-breadcrumb">
// // //                 <span>
// // //                   {selectedLevel.charAt(0).toUpperCase() +
// // //                     selectedLevel.slice(1)}
// // //                 </span>
// // //                 <span className="separator">›</span>
// // //                 <span>Module 1</span>
// // //               </div>
// // //               <h1 className="content-title">{courseData.title}</h1>
// // //               <p className="content-description">{courseData.description}</p>
// // //               <div className="content-info">
// // //                 <div className="lesson-count">
// // //                   <FaBookReader className="accordion-icon resources" />
// // //                   <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
// // //                 </div>
// // //                 <div className="level-badge">
// // //                   <FaSignal className="accordion-icon resources" />
// // //                   <span>
// // //                     {selectedLevel.charAt(0).toUpperCase() +
// // //                       selectedLevel.slice(1)}{" "}
// // //                     Level
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //           <div className="accordion-container">
// // //             {["resources", "notes", "knowledge"].map((section) => (
// // //               <div
// // //                 key={section}
// // //                 className={`accordion-item ${
// // //                   activeSection === section ? "active" : ""
// // //                 }`}
// // //               >
// // //                 <div
// // //                   className="accordion-header"
// // //                   onClick={() => toggleSection(section)}
// // //                 >
// // //                   <div className="accordion-title">
// // //                     {section === "resources" && (
// // //                       <FaBookOpen className="accordion-icon resources" />
// // //                     )}
// // //                     {section === "notes" && (
// // //                       <FaFileAlt className="accordion-icon resources" />
// // //                     )}
// // //                     {section === "knowledge" && (
// // //                       <FaLightbulb className="accordion-icon resources" />
// // //                     )}
// // //                     <span>
// // //                       {section.charAt(0).toUpperCase() + section.slice(1)}
// // //                     </span>
// // //                   </div>
// // //                   <i
// // //                     className={`arrow-icon ${
// // //                       activeSection === section ? "up" : "down"
// // //                     }`}
// // //                   ></i>
// // //                 </div>
// // //                 {activeSection === section && (
// // //                   <div className="accordion-content">
// // //                     {section === "resources" && renderVideos()}
// // //                     {section === "notes" && renderNotes()}
// // //                     {section === "knowledge" && renderKnowledge()}
// // //                     {/* <ProgressBarsDisplay courseId={courseId} /> 👈 pass it as prop */}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <ProgressBarsDisplay courseId={courseId} /> {/* 👈 pass it as prop */}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ValourAcademy;

// // // =======================================================================================================================================================================
// // import { useEffect, useState } from "react";
// // import {
// //   FaBookOpen,
// //   FaBookReader,
// //   FaFileAlt,
// //   FaLightbulb,
// //   FaLock,
// //   FaSignal,
// // } from "react-icons/fa";
// // import { useParams } from "react-router-dom";
// // import videoImg from "../assets/images/crypto-latest.png";
// // import ProgressBarsDisplay from "../components/DashboardSidebarComp/ProgressBar";
// // import "../styles/academy.css";

// // const ValourAcademy = () => {
// //   const { courseId } = useParams();
// //   const [activeSection, setActiveSection] = useState(null);
// //   const [selectedLevel, setSelectedLevel] = useState("beginner");
// //   const [videoUrl, setVideoUrl] = useState(null);
// //   const [courseData, setCourseData] = useState(null);
// //   const [progressData, setProgressData] = useState({
// //     totalProgress: 0,
// //     levelProgress: 0,
// //     videoProgress: 0,
// //   });
// //   const [videoWatched, setVideoWatched] = useState([]);
// //   const [notes, setNotes] = useState([]);
// //   const [mcqs, setMcqs] = useState([]);
// //   const [userAnswers, setUserAnswers] = useState({});
// //   const [grade, setGrade] = useState(null);
// //   const [passedLevels, setPassedLevels] = useState([]);

// //   // Loading states for shimmer
// //   const [loadingCourse, setLoadingCourse] = useState(true);
// //   const [loadingProgress, setLoadingProgress] = useState(true);
// //   const [loadingNotes, setLoadingNotes] = useState(true);
// //   const [loadingMcqs, setLoadingMcqs] = useState(true);

// //   useEffect(() => {
// //     const fetchProgress = async () => {
// //       setLoadingProgress(true);
// //       const token = localStorage.getItem("accessToken");
// //       const res = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       const currentLevel = data.levels.find(
// //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// //       );
// //       setProgressData({
// //         totalProgress: data.total_progress,
// //         levelProgress: currentLevel?.percent || 0,
// //         videoProgress: currentLevel?.percent || 0,
// //       });
// //       setVideoWatched(currentLevel?.watched_video_ids || []);
// //       setPassedLevels(data.passed_levels.map((lvl) => lvl.toLowerCase()));
// //       setLoadingProgress(false);
// //     };

// //     if (courseId) fetchProgress();
// //   }, [courseId, selectedLevel]);

// //   const toggleSection = (section) => {
// //     setActiveSection(activeSection === section ? null : section);
// //   };

// //   useEffect(() => {
// //     const fetchCourseDetails = async () => {
// //       setLoadingCourse(true);
// //       const token = localStorage.getItem("accessToken");
// //       try {
// //         const res = await fetch(
// //           `https://backend-production-1e63.up.railway.app/courses/${courseId}/`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         if (!res.ok) {
// //           const text = await res.text();
// //           throw new Error(`Server error ${res.status}: ${text}`);
// //         }

// //         const data = await res.json();
// //         setCourseData(data);
// //       } catch (error) {
// //         console.error("Error fetching course details:", error.message);
// //       } finally {
// //         setLoadingCourse(false);
// //       }
// //     };

// //     fetchCourseDetails();
// //   }, [courseId]);

// //   useEffect(() => {
// //     const fetchProgress = async () => {
// //       const token = localStorage.getItem("accessToken");
// //       const res = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       const currentLevel = data.levels.find(
// //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// //       );
// //       setProgressData({
// //         totalProgress: data.total_progress,
// //         levelProgress: currentLevel?.percent || 0,
// //         videoProgress: currentLevel?.percent || 0,
// //       });
// //       setVideoWatched(currentLevel?.watched_video_ids || []);
// //     };
// //     if (courseId) fetchProgress();
// //   }, [courseId, selectedLevel]);

// //   useEffect(() => {
// //     const fetchNotes = async () => {
// //       setLoadingNotes(true);
// //       const token = localStorage.getItem("accessToken");
// //       const levelObj = courseData?.levels.find(
// //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// //       );
// //       if (!levelObj) return;
// //       const res = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       setNotes(data);
// //       setLoadingNotes(false);
// //     };
// //     if (courseData) fetchNotes();
// //   }, [courseId, selectedLevel, courseData]);

// //   useEffect(() => {
// //     const fetchMCQs = async () => {
// //       setLoadingMcqs(true);
// //       const token = localStorage.getItem("accessToken");
// //       const levelObj = courseData?.levels.find(
// //         (lvl) => lvl.level.toLowerCase() === selectedLevel
// //       );
// //       if (!levelObj) return;
// //       const res = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       setMcqs(data);
// //       setLoadingMcqs(false);
// //     };
// //     if (courseData) fetchMCQs();
// //   }, [courseId, selectedLevel, courseData]);

// //   const getVideosForLevel = (levelName) => {
// //     if (!courseData) return [];
// //     const level = courseData.levels.find(
// //       (lvl) => lvl.level.toLowerCase() === levelName
// //     );
// //     return level ? level.videos : [];
// //   };

// //   const handleAnswer = (questionId, answer) => {
// //     setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
// //   };

// //   const submitQuiz = async () => {
// //     const token = localStorage.getItem("accessToken");

// //     const levelObj = courseData?.levels.find(
// //       (lvl) => lvl.level.toLowerCase() === selectedLevel
// //     );
// //     if (!levelObj) return;

// //     try {
// //       const res = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/submit/`,
// //         {
// //           method: "POST",
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ answers: userAnswers }),
// //         }
// //       );
// //       const data = await res.json();
// //       setGrade(Math.round(data.score));

// //       // Re-fetch progress to update passedLevels
// //       const progressRes = await fetch(
// //         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const progressData = await progressRes.json();
// //       setPassedLevels(
// //         progressData.passed_levels.map((lvl) => lvl.toLowerCase())
// //       );
// //     } catch (error) {
// //       console.error("Error submitting quiz:", error);
// //     }
// //   };

// //   const isLevelUnlocked = (level) => {
// //     if (level === "beginner") return true;
// //     if (level === "intermediate") return passedLevels.includes("beginner");
// //     if (level === "professional") return passedLevels.includes("intermediate");
// //     return false;
// //   };

// //   const isVideoUnlocked = (index) => {
// //     return true; // All videos are unlocked
// //   };

// //   const areAllVideosWatched = () => {
// //     return true; // So notes unlock immediately
// //   };

// //   const canAccessNotes = () => areAllVideosWatched();
// //   const canAccessMCQs = () => canAccessNotes();

// //   // Shimmer for video cards
// //   const renderVideoShimmer = () => (
// //     <div className="container">
// //       <div className="row">
// //         {[...Array(6)].map((_, index) => (
// //           <div key={index} className="col-lg-4 col-md-6 mb-4">
// //             <div
// //               className="video-card"
// //               style={{
// //                 animation: "fadeInUp 0.6s ease-out",
// //                 animationDelay: `${index * 0.1}s`,
// //               }}
// //             >
// //               <div className="video-thumbnail" style={{ position: "relative" }}>
// //                 <div
// //                   className="shimmer-block"
// //                   style={{
// //                     height: "200px",
// //                     width: "100%",
// //                     borderRadius: "8px",
// //                   }}
// //                 ></div>
// //               </div>
// //               <div className="video-info">
// //                 <div
// //                   className="shimmer-block mt-2"
// //                   style={{
// //                     height: "20px",
// //                     width: "80%",
// //                     borderRadius: "4px",
// //                   }}
// //                 ></div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   // Shimmer for notes
// //   const renderNotesShimmer = () => (
// //     <div className="container">
// //       <div className="row">
// //         {[...Array(4)].map((_, index) => (
// //           <div
// //             key={index}
// //             className="col-md-6 mb-3"
// //             style={{
// //               animation: "slideInLeft 0.5s ease-out",
// //               animationDelay: `${index * 0.1}s`,
// //             }}
// //           >
// //             <div className="note-card p-3 bg-dark rounded">
// //               <div
// //                 className="shimmer-block mb-3"
// //                 style={{
// //                   height: "24px",
// //                   width: "60%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //               <div
// //                 className="shimmer-block mb-2"
// //                 style={{
// //                   height: "16px",
// //                   width: "100%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //               <div
// //                 className="shimmer-block mb-2"
// //                 style={{
// //                   height: "16px",
// //                   width: "90%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //               <div
// //                 className="shimmer-block"
// //                 style={{
// //                   height: "16px",
// //                   width: "75%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   // Shimmer for MCQs
// //   const renderMcqsShimmer = () => (
// //     <div className="container">
// //       <div className="row">
// //         <div className="col-12">
// //           {[...Array(3)].map((_, index) => (
// //             <div
// //               key={index}
// //               className="mb-4 p-3 bg-dark rounded"
// //               style={{
// //                 animation: "bounceIn 0.6s ease-out",
// //                 animationDelay: `${index * 0.2}s`,
// //               }}
// //             >
// //               <div
// //                 className="shimmer-block mb-3"
// //                 style={{
// //                   height: "24px",
// //                   width: "85%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //               {[...Array(4)].map((_, optIndex) => (
// //                 <div key={optIndex} className="form-check mb-2">
// //                   <div className="d-flex align-items-center">
// //                     <div
// //                       className="shimmer-block me-2"
// //                       style={{
// //                         height: "16px",
// //                         width: "16px",
// //                         borderRadius: "50%",
// //                       }}
// //                     ></div>
// //                     <div
// //                       className="shimmer-block"
// //                       style={{
// //                         height: "16px",
// //                         width: "70%",
// //                         borderRadius: "4px",
// //                       }}
// //                     ></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //           <div
// //             className="shimmer-block"
// //             style={{
// //               height: "40px",
// //               width: "120px",
// //               borderRadius: "6px",
// //             }}
// //           ></div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderVideos = () => {
// //     if (loadingCourse) return renderVideoShimmer();

// //     const videos = getVideosForLevel(selectedLevel);

// //     const markVideoWatched = async (videoId) => {
// //       const token = localStorage.getItem("accessToken");
// //       try {
// //         await fetch(
// //           `https://backend-production-1e63.up.railway.app/videos/${videoId}/watch/`,
// //           {
// //             method: "POST",
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         const res = await fetch(
// //           `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         const data = await res.json();
// //         const currentLevel = data.levels.find(
// //           (lvl) => lvl.level.toLowerCase() === selectedLevel
// //         );
// //         setProgressData({
// //           totalProgress: data.total_progress,
// //           levelProgress: currentLevel?.percent || 0,
// //           videoProgress: currentLevel?.percent || 0,
// //         });
// //         setVideoWatched(currentLevel?.watched_video_ids || []);
// //       } catch (error) {
// //         console.error("Error marking video watched:", error);
// //       }
// //     };

// //     return (
// //       <div className="container">
// //         <div className="row">
// //           {videos.map((video, index) => {
// //             const isUnlocked = isVideoUnlocked(index);
// //             const currentVideoUrl = video.public_url;
// //             console.log("Current video URL:", currentVideoUrl);

// //             return (
// //               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
// //                 <div
// //                   className="video-card"
// //                   style={{
// //                     animation: "fadeInUp 0.6s ease-out",
// //                     animationDelay: `${index * 0.1}s`,
// //                     transform: "translateY(0)",
// //                     transition: "all 0.3s ease",
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.transform =
// //                       "translateY(-5px) scale(1.02)";
// //                     e.currentTarget.style.boxShadow =
// //                       "0 10px 25px rgba(0,0,0,0.2)";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.transform = "translateY(0) scale(1)";
// //                     e.currentTarget.style.boxShadow = "none";
// //                   }}
// //                 >
// //                   <div
// //                     className="video-thumbnail"
// //                     style={{ position: "relative" }}
// //                   >
// //                     {isUnlocked ? (
// //                       !videoUrl || videoUrl !== currentVideoUrl ? (
// //                         <>
// //                           <img
// //                             className="obj_fit"
// //                             src={video.thumbnail_url || videoImg}
// //                             alt={video.title}
// //                             style={{ transition: "all 0.3s ease" }}
// //                           />
// //                           <button
// //                             onClick={() => setVideoUrl(currentVideoUrl)}
// //                             className="play-button-overlay"
// //                             style={{
// //                               transition: "all 0.3s ease",
// //                               transform: "scale(1)",
// //                             }}
// //                             onMouseEnter={(e) => {
// //                               e.target.style.transform = "scale(1.1)";
// //                               e.target.style.backgroundColor =
// //                                 "rgba(255,255,255,0.9)";
// //                             }}
// //                             onMouseLeave={(e) => {
// //                               e.target.style.transform = "scale(1)";
// //                               // e.target.style.backgroundColor =
// //                               //   "rgba(255,255,255,0.8)";
// //                             }}
// //                           >
// //                             ▶
// //                           </button>
// //                         </>
// //                       ) : (
// //                         <video
// //                           controls
// //                           className="w-100 rounded"
// //                           controlsList="nodownload"
// //                           onContextMenu={(e) => e.preventDefault()}
// //                           onEnded={() => markVideoWatched(video.id)}
// //                           style={{ animation: "zoomIn 0.5s ease-out" }}
// //                         >
// //                           <source src={currentVideoUrl} />
// //                           Your browser does not support the video tag.
// //                         </video>
// //                       )
// //                     ) : (
// //                       <>
// //                         <img
// //                           className="obj_fit blur"
// //                           src={video.thumbnail_url || videoImg}
// //                           alt="Locked"
// //                         />
// //                         <div
// //                           className="locked-overlay"
// //                           style={{ animation: "pulse 2s infinite" }}
// //                         >
// //                           <FaLock />
// //                         </div>
// //                       </>
// //                     )}
// //                   </div>
// //                   <div className="video-info">
// //                     <h5
// //                       className="video-title"
// //                       style={{ transition: "color 0.3s ease" }}
// //                     >
// //                       {video.title}
// //                     </h5>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const renderNotes = () => {
// //     if (loadingNotes) return renderNotesShimmer();

// //     if (!canAccessNotes()) {
// //       return (
// //         <div
// //           className="container text-center text-white"
// //           style={{ animation: "fadeIn 0.5s ease-out" }}
// //         >
// //           <p>
// //             <FaLock style={{ animation: "shake 1s ease-in-out infinite" }} />{" "}
// //             Complete all videos to unlock notes.
// //           </p>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="container">
// //         <div className="row">
// //           {notes.length ? (
// //             notes.map((note, index) => (
// //               <div key={note.id} className="col-md-6 text-white mb-3">
// //                 <div
// //                   className="note-card p-3 bg-dark rounded"
// //                   style={{
// //                     animation: "slideInLeft 0.5s ease-out",
// //                     animationDelay: `${index * 0.1}s`,
// //                     transition: "all 0.3s ease",
// //                     transform: "translateX(0)",
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.transform = "translateX(5px)";
// //                     e.currentTarget.style.backgroundColor = "#2c3e50";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.transform = "translateX(0)";
// //                     e.currentTarget.style.backgroundColor = "";
// //                   }}
// //                 >
// //                   <h5 style={{ transition: "color 0.3s ease" }}>
// //                     {note.title}
// //                   </h5>
// //                   <p style={{ whiteSpace: "pre-line", marginBottom: 0 }}>
// //                     {note.content}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div
// //               className="col-12 text-white"
// //               style={{ animation: "fadeIn 0.5s ease-out" }}
// //             >
// //               <p>No notes found for this level.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const renderKnowledge = () => {
// //     if (loadingMcqs) return renderMcqsShimmer();

// //     if (!canAccessMCQs()) {
// //       return (
// //         <div
// //           className="container text-center text-white"
// //           style={{ animation: "fadeIn 0.5s ease-out" }}
// //         >
// //           <p>
// //             <FaLock style={{ animation: "shake 1s ease-in-out infinite" }} />{" "}
// //             Please view notes before attempting the quiz.
// //           </p>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="container">
// //         <div className="row">
// //           {mcqs.length === 0 ? (
// //             <div
// //               className="col-12 text-white"
// //               style={{ animation: "fadeIn 0.5s ease-out" }}
// //             >
// //               <p>No quiz available for this level.</p>
// //             </div>
// //           ) : (
// //             <div className="col-12 text-white">
// //               {mcqs.map((q, index) => (
// //                 <div
// //                   key={q.id}
// //                   className="mb-4 p-3 bg-dark rounded"
// //                   style={{
// //                     animation: "bounceIn 0.6s ease-out",
// //                     animationDelay: `${index * 0.2}s`,
// //                     transition: "all 0.3s ease",
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.backgroundColor = "#34495e";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.backgroundColor = "";
// //                   }}
// //                 >
// //                   <h5>{q.question}</h5>
// //                   {[q.option_a, q.option_b, q.option_c, q.option_d].map(
// //                     (opt, idx) => {
// //                       const optionKey = ["A", "B", "C", "D"][idx];
// //                       return (
// //                         <div key={optionKey} className="form-check">
// //                           <input
// //                             type="radio"
// //                             className="form-check-input"
// //                             name={`question-${q.id}`}
// //                             id={`question-${q.id}-option-${optionKey}`}
// //                             value={optionKey}
// //                             checked={userAnswers[q.id] === optionKey}
// //                             onChange={() => handleAnswer(q.id, optionKey)}
// //                             style={{
// //                               transition: "all 0.3s ease",
// //                               transform: "scale(1)",
// //                             }}
// //                             onMouseEnter={(e) => {
// //                               e.target.style.transform = "scale(1.1)";
// //                             }}
// //                             onMouseLeave={(e) => {
// //                               e.target.style.transform = "scale(1)";
// //                             }}
// //                           />
// //                           <label
// //                             className="form-check-label"
// //                             htmlFor={`question-${q.id}-option-${optionKey}`}
// //                             style={{
// //                               transition: "color 0.3s ease",
// //                               cursor: "pointer",
// //                             }}
// //                             onMouseEnter={(e) => {
// //                               e.target.style.color = "#3498db";
// //                             }}
// //                             onMouseLeave={(e) => {
// //                               e.target.style.color = "";
// //                             }}
// //                           >
// //                             {opt}
// //                           </label>
// //                         </div>
// //                       );
// //                     }
// //                   )}
// //                 </div>
// //               ))}
// //               <button
// //                 className="btn btn-success"
// //                 onClick={submitQuiz}
// //                 style={{
// //                   transition: "all 0.3s ease",
// //                   transform: "scale(1)",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.transform = "scale(1.05)";
// //                   e.target.style.boxShadow =
// //                     "0 5px 15px rgba(40, 167, 69, 0.4)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.transform = "scale(1)";
// //                   e.target.style.boxShadow = "none";
// //                 }}
// //               >
// //                 Submit Quiz
// //               </button>
// //               {grade !== null && (
// //                 <p
// //                   className="mt-3"
// //                   style={{ animation: "fadeIn 0.5s ease-out" }}
// //                 >
// //                   You scored:{" "}
// //                   <strong
// //                     style={{ color: grade >= 50 ? "#27ae60" : "#e74c3c" }}
// //                   >
// //                     {grade}%
// //                   </strong>
// //                   .{" "}
// //                   {grade >= 50
// //                     ? "🎉 You can proceed to the next level!"
// //                     : "📚 Please retake the quiz."}
// //                 </p>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="valour-container">
// //       <div className="valour-header">
// //         <div
// //           className="header-brand"
// //           style={{ animation: "slideInDown 0.5s ease-out" }}
// //         >
// //           Valour Academy
// //         </div>
// //       </div>
// //       <div className="valour-main">
// //         <div
// //           className="valour-sidebar"
// //           style={{ animation: "slideInLeft 0.5s ease-out" }}
// //         >
// //           <div className="sidebar-section">
// //             <div className="sidebar-heading">COURSE LEVELS</div>
// //             {["beginner", "intermediate", "professional"].map(
// //               (level, index) => {
// //                 const unlocked = isLevelUnlocked(level);
// //                 return (
// //                   <div
// //                     key={level}
// //                     className={`sidebar-item ${
// //                       selectedLevel === level ? "active" : ""
// //                     }`}
// //                     onClick={() => unlocked && setSelectedLevel(level)}
// //                     style={{
// //                       opacity: unlocked ? 1 : 0.4,
// //                       cursor: unlocked ? "pointer" : "not-allowed",
// //                       animation: "slideInLeft 0.5s ease-out",
// //                       animationDelay: `${index * 0.1}s`,
// //                       transition: "all 0.3s ease",
// //                       transform: "translateX(0)",
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       if (unlocked) {
// //                         e.currentTarget.style.transform = "translateX(5px)";
// //                         e.currentTarget.style.backgroundColor =
// //                           "rgba(52, 152, 219, 0.1)";
// //                       }
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.currentTarget.style.transform = "translateX(0)";
// //                       e.currentTarget.style.backgroundColor = "";
// //                     }}
// //                   >
// //                     <span>
// //                       {level.charAt(0).toUpperCase() + level.slice(1)}
// //                     </span>
// //                     {!unlocked && (
// //                       <FaLock
// //                         style={{
// //                           marginLeft: "10px",
// //                           animation: "pulse 2s infinite",
// //                         }}
// //                       />
// //                     )}
// //                     <i
// //                       className={`arrow-icon ${
// //                         selectedLevel === level ? "down" : "right"
// //                       }`}
// //                       style={{ transition: "transform 0.3s ease" }}
// //                     ></i>
// //                   </div>
// //                 );
// //               }
// //             )}
// //           </div>
// //         </div>
// //         <div
// //           className="valour-content p-0"
// //           style={{ animation: "fadeInRight 0.5s ease-out" }}
// //         >
// //           {loadingCourse ? (
// //             // Course header shimmer
// //             <div className="main_module">
// //               <div className="content-breadcrumb">
// //                 <div
// //                   className="shimmer-block"
// //                   style={{
// //                     height: "16px",
// //                     width: "120px",
// //                     borderRadius: "4px",
// //                     display: "inline-block",
// //                   }}
// //                 ></div>
// //                 <span className="separator">›</span>
// //                 <div
// //                   className="shimmer-block"
// //                   style={{
// //                     height: "16px",
// //                     width: "80px",
// //                     borderRadius: "4px",
// //                     display: "inline-block",
// //                   }}
// //                 ></div>
// //               </div>
// //               <div
// //                 className="shimmer-block mb-3"
// //                 style={{
// //                   height: "32px",
// //                   width: "60%",
// //                   borderRadius: "6px",
// //                 }}
// //               ></div>
// //               <div
// //                 className="shimmer-block mb-4"
// //                 style={{
// //                   height: "16px",
// //                   width: "80%",
// //                   borderRadius: "4px",
// //                 }}
// //               ></div>
// //               <div className="content-info">
// //                 <div className="lesson-count">
// //                   <div
// //                     className="shimmer-block"
// //                     style={{
// //                       height: "20px",
// //                       width: "100px",
// //                       borderRadius: "4px",
// //                     }}
// //                   ></div>
// //                 </div>
// //                 <div className="level-badge">
// //                   <div
// //                     className="shimmer-block"
// //                     style={{
// //                       height: "20px",
// //                       width: "120px",
// //                       borderRadius: "4px",
// //                     }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             courseData && (
// //               <div
// //                 className="main_module"
// //                 style={{ animation: "fadeIn 0.6s ease-out" }}
// //               >
// //                 <div className="content-breadcrumb">
// //                   <span>
// //                     {selectedLevel.charAt(0).toUpperCase() +
// //                       selectedLevel.slice(1)}
// //                   </span>
// //                   <span className="separator">›</span>
// //                   <span>Module 1</span>
// //                 </div>
// //                 <h1
// //                   className="content-title"
// //                   style={{ animation: "slideInUp 0.5s ease-out" }}
// //                 >
// //                   {courseData.title}
// //                 </h1>
// //                 <p
// //                   className="content-description"
// //                   style={{
// //                     animation: "slideInUp 0.5s ease-out",
// //                     animationDelay: "0.1s",
// //                   }}
// //                 >
// //                   {courseData.description}
// //                 </p>
// //                 <div
// //                   className="content-info"
// //                   style={{
// //                     animation: "slideInUp 0.5s ease-out",
// //                     animationDelay: "0.2s",
// //                   }}
// //                 >
// //                   <div className="lesson-count">
// //                     <FaBookReader className="accordion-icon resources" />
// //                     <span>
// //                       {getVideosForLevel(selectedLevel).length} Lessons
// //                     </span>
// //                   </div>
// //                   <div className="level-badge">
// //                     <FaSignal className="accordion-icon resources" />
// //                     <span>
// //                       {selectedLevel.charAt(0).toUpperCase() +
// //                         selectedLevel.slice(1)}{" "}
// //                       Level
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             )
// //           )}
// //           <div className="accordion-container">
// //             {["resources", "notes", "knowledge"].map((section, index) => (
// //               <div
// //                 key={section}
// //                 className={`accordion-item ${
// //                   activeSection === section ? "active" : ""
// //                 }`}
// //                 style={{
// //                   animation: "slideInUp 0.5s ease-out",
// //                   animationDelay: `${index * 0.1}s`,
// //                   transition: "all 0.3s ease",
// //                 }}
// //               >
// //                 <div
// //                   className="accordion-header"
// //                   onClick={() => toggleSection(section)}
// //                   style={{
// //                     transition: "all 0.3s ease",
// //                     cursor: "pointer",
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.backgroundColor =
// //                       "rgba(52, 152, 219, 0.1)";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.backgroundColor = "";
// //                   }}
// //                 >
// //                   <div className="accordion-title">
// //                     {section === "resources" && (
// //                       <FaBookOpen
// //                         className="accordion-icon resources"
// //                         style={{ transition: "transform 0.3s ease" }}
// //                       />
// //                     )}
// //                     {section === "notes" && (
// //                       <FaFileAlt
// //                         className="accordion-icon resources"
// //                         style={{ transition: "transform 0.3s ease" }}
// //                       />
// //                     )}
// //                     {section === "knowledge" && (
// //                       <FaLightbulb
// //                         className="accordion-icon resources"
// //                         style={{ transition: "transform 0.3s ease" }}
// //                       />
// //                     )}
// //                     <span>
// //                       {section.charAt(0).toUpperCase() + section.slice(1)}
// //                     </span>
// //                   </div>
// //                   <i
// //                     className={`arrow-icon ${
// //                       activeSection === section ? "up" : "down"
// //                     }`}
// //                     style={{
// //                       transition: "transform 0.3s ease",
// //                       transform:
// //                         activeSection === section
// //                           ? "rotate(180deg)"
// //                           : "rotate(0deg)",
// //                     }}
// //                   ></i>
// //                 </div>
// //                 {activeSection === section && (
// //                   <div
// //                     className="accordion-content"
// //                     style={{ animation: "slideDown 0.3s ease-out" }}
// //                   >
// //                     {section === "resources" && renderVideos()}
// //                     {section === "notes" && renderNotes()}
// //                     {section === "knowledge" && renderKnowledge()}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //           <ProgressBarsDisplay courseId={courseId} />
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes slideInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes slideInRight {
// //           from {
// //             opacity: 0;
// //             transform: translateX(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes slideInDown {
// //           from {
// //             opacity: 0;
// //             transform: translateY(-30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes slideInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes bounceIn {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.3);
// //           }
// //           50% {
// //             opacity: 1;
// //             transform: scale(1.05);
// //           }
// //           70% {
// //             transform: scale(0.9);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }

// //         @keyframes zoomIn {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.8);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }

// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //           }
// //           to {
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes pulse {
// //           0% {
// //             transform: scale(1);
// //           }
// //           50% {
// //             transform: scale(1.05);
// //           }
// //           100% {
// //             transform: scale(1);
// //           }
// //         }

// //         @keyframes shake {
// //           0%,
// //           100% {
// //             transform: translateX(0);
// //           }
// //           10%,
// //           30%,
// //           50%,
// //           70%,
// //           90% {
// //             transform: translateX(-2px);
// //           }
// //           20%,
// //           40%,
// //           60%,
// //           80% {
// //             transform: translateX(2px);
// //           }
// //         }

// //         @keyframes slideDown {
// //           from {
// //             opacity: 0;
// //             max-height: 0;
// //             transform: translateY(-10px);
// //           }
// //           to {
// //             opacity: 1;
// //             max-height: 1000px;
// //             transform: translateY(0);
// //           }
// //         }

// //         .shimmer-block {
// //           background: linear-gradient(
// //             90deg,
// //             #f0f0f0 25%,
// //             #e0e0e0 50%,
// //             #f0f0f0 75%
// //           );
// //           background-size: 200% 100%;
// //           animation: shimmer 1.5s infinite;
// //         }

// //         @keyframes shimmer {
// //           0% {
// //             background-position: -200% 0;
// //           }
// //           100% {
// //             background-position: 200% 0;
// //           }
// //         }

// //         .accordion-header:hover .accordion-icon {
// //           transform: scale(1.1);
// //         }

// //         .video-card {
// //           cursor: pointer;
// //           border-radius: 12px;
// //           overflow: hidden;
// //         }

// //         .note-card {
// //           border-left: 4px solid #3498db;
// //           transition: border-color 0.3s ease;
// //         }

// //         .note-card:hover {
// //           border-left-color: #2ecc71;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ValourAcademy;
// // ==================================================================

// import { useEffect, useState } from "react";
// import {
//   FaBookOpen,
//   FaBookReader,
//   FaFileAlt,
//   FaLightbulb,
//   FaLock,
//   FaSignal,
// } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import videoImg from "../assets/images/crypto-latest.png";
// import ProgressBarsDisplay from "../components/DashboardSidebarComp/ProgressBar";
// import "../styles/academy.css";

// const ValourAcademy = () => {
//   const { courseId } = useParams();
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState("beginner");
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [courseData, setCourseData] = useState(null);
//   const [progressData, setProgressData] = useState({
//     totalProgress: 0,
//     levelProgress: 0,
//     videoProgress: 0,
//   });
//   const [videoWatched, setVideoWatched] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [mcqs, setMcqs] = useState([]);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [grade, setGrade] = useState(null);
//   const [passedLevels, setPassedLevels] = useState([]);

//   // Loading states
//   const [loadingCourse, setLoadingCourse] = useState(true);
//   const [loadingProgress, setLoadingProgress] = useState(true);
//   const [loadingNotes, setLoadingNotes] = useState(true);
//   const [loadingMcqs, setLoadingMcqs] = useState(true);

//   useEffect(() => {
//     const fetchProgress = async () => {
//       setLoadingProgress(true);
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await res.json();
//       const currentLevel = data.levels.find(
//         (lvl) => lvl.level.toLowerCase() === selectedLevel
//       );
//       setProgressData({
//         totalProgress: data.total_progress,
//         levelProgress: currentLevel?.percent || 0,
//         videoProgress: currentLevel?.percent || 0,
//       });
//       setVideoWatched(currentLevel?.watched_video_ids || []);
//       setPassedLevels(data.passed_levels.map((lvl) => lvl.toLowerCase()));
//       setLoadingProgress(false);
//     };

//     if (courseId) fetchProgress();
//   }, [courseId, selectedLevel]);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoadingCourse(true);
//       const token = localStorage.getItem("accessToken");
//       try {
//         const res = await fetch(
//           `https://backend-production-1e63.up.railway.app/courses/${courseId}/`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!res.ok) {
//           const text = await res.text();
//           throw new Error(`Server error ${res.status}: ${text}`);
//         }

//         const data = await res.json();
//         setCourseData(data);
//       } catch (error) {
//         console.error("Error fetching course details:", error.message);
//       } finally {
//         setLoadingCourse(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   useEffect(() => {
//     const fetchProgress = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await res.json();
//       const currentLevel = data.levels.find(
//         (lvl) => lvl.level.toLowerCase() === selectedLevel
//       );
//       setProgressData({
//         totalProgress: data.total_progress,
//         levelProgress: currentLevel?.percent || 0,
//         videoProgress: currentLevel?.percent || 0,
//       });
//       setVideoWatched(currentLevel?.watched_video_ids || []);
//     };
//     if (courseId) fetchProgress();
//   }, [courseId, selectedLevel]);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       setLoadingNotes(true);
//       const token = localStorage.getItem("accessToken");
//       const levelObj = courseData?.levels.find(
//         (lvl) => lvl.level.toLowerCase() === selectedLevel
//       );
//       if (!levelObj) return;
//       const res = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await res.json();
//       setNotes(data);
//       setLoadingNotes(false);
//     };
//     if (courseData) fetchNotes();
//   }, [courseId, selectedLevel, courseData]);

//   useEffect(() => {
//     const fetchMCQs = async () => {
//       setLoadingMcqs(true);
//       const token = localStorage.getItem("accessToken");
//       const levelObj = courseData?.levels.find(
//         (lvl) => lvl.level.toLowerCase() === selectedLevel
//       );
//       if (!levelObj) return;
//       const res = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await res.json();
//       setMcqs(data);
//       setLoadingMcqs(false);
//     };
//     if (courseData) fetchMCQs();
//   }, [courseId, selectedLevel, courseData]);

//   const getVideosForLevel = (levelName) => {
//     if (!courseData) return [];
//     const level = courseData.levels.find(
//       (lvl) => lvl.level.toLowerCase() === levelName
//     );
//     return level ? level.videos : [];
//   };

//   const handleAnswer = (questionId, answer) => {
//     setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
//   };

//   const submitQuiz = async () => {
//     const token = localStorage.getItem("accessToken");

//     const levelObj = courseData?.levels.find(
//       (lvl) => lvl.level.toLowerCase() === selectedLevel
//     );
//     if (!levelObj) return;

//     try {
//       const res = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/submit/`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ answers: userAnswers }),
//         }
//       );
//       const data = await res.json();
//       setGrade(Math.round(data.score));

//       // Re-fetch progress to update passedLevels
//       const progressRes = await fetch(
//         `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const progressData = await progressRes.json();
//       setPassedLevels(
//         progressData.passed_levels.map((lvl) => lvl.toLowerCase())
//       );
//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//     }
//   };

//   const isLevelUnlocked = (level) => {
//     if (level === "beginner") return true;
//     if (level === "intermediate") return passedLevels.includes("beginner");
//     if (level === "professional") return passedLevels.includes("intermediate");
//     return false;
//   };

//   const isVideoUnlocked = (index) => {
//     return true; // All videos are unlocked
//   };

//   const areAllVideosWatched = () => {
//     return true; // So notes unlock immediately
//   };

//   const canAccessNotes = () => areAllVideosWatched();
//   const canAccessMCQs = () => canAccessNotes();

//   // Simple loading placeholders (no shimmer)
//   const renderVideoLoading = () => (
//     <div className="container">
//       <div className="row">
//         {[...Array(6)].map((_, index) => (
//           <div key={index} className="col-lg-4 col-md-6 mb-4">
//             <div className="video-card">
//               <div
//                 style={{
//                   height: "200px",
//                   backgroundColor: "#f8f9fa",
//                   borderRadius: "0px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#666",
//                 }}
//               >
//                 Loading...
//               </div>
//               <div style={{ padding: "15px" }}>
//                 <div
//                   style={{
//                     height: "20px",
//                     backgroundColor: "#000",
//                     borderRadius: "4px",
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderNotesLoading = () => (
//     <div className="container">
//       <div className="row">
//         {[...Array(4)].map((_, index) => (
//           <div key={index} className="col-md-6 mb-3">
//             <div className="note-card p-3 bg-dark rounded">
//               <div style={{ color: "#666" }}>Loading notes...</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderMcqsLoading = () => (
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <div className="mb-4 p-3 bg-dark rounded">
//             <div style={{ color: "#666" }}>Loading quiz...</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderVideos = () => {
//     if (loadingCourse) return renderVideoLoading();

//     const videos = getVideosForLevel(selectedLevel);

//     const markVideoWatched = async (videoId) => {
//       const token = localStorage.getItem("accessToken");
//       try {
//         await fetch(
//           `https://backend-production-1e63.up.railway.app/videos/${videoId}/watch/`,
//           {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const res = await fetch(
//           `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = await res.json();
//         const currentLevel = data.levels.find(
//           (lvl) => lvl.level.toLowerCase() === selectedLevel
//         );
//         setProgressData({
//           totalProgress: data.total_progress,
//           levelProgress: currentLevel?.percent || 0,
//           videoProgress: currentLevel?.percent || 0,
//         });
//         setVideoWatched(currentLevel?.watched_video_ids || []);
//       } catch (error) {
//         console.error("Error marking video watched:", error);
//       }
//     };

//     return (
//       <div className="container">
//         <div className="row">
//           {videos.map((video, index) => {
//             const isUnlocked = isVideoUnlocked(index);
//             const currentVideoUrl = video.public_url;
//             const isVideoPlaying = videoUrl === currentVideoUrl;

//             return (
//               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
//                 <div className="video-card">
//                   <div style={{ position: "relative" }}>
//                     {isUnlocked ? (
//                       !isVideoPlaying ? (
//                         // Show thumbnail with play button
//                         <>
//                           <img
//                             src={video.thumbnail_url || videoImg}
//                             alt={video.title}
//                             style={{
//                               width: "100%",
//                               height: "200px",
//                               objectFit: "cover",
//                               borderRadius: "0px",
//                             }}
//                           />
//                           <button
//                             onClick={() => setVideoUrl(currentVideoUrl)}
//                             style={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "50%",
//                               transform: "translate(-50%, -50%)",
//                               background: "rgba(255,255,255,0.9)",
//                               border: "none",
//                               borderRadius: "50%",
//                               width: "60px",
//                               height: "60px",
//                               fontSize: "24px",
//                               cursor: "pointer",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               color: "#000",
//                             }}
//                           >
//                             ▶
//                           </button>
//                         </>
//                       ) : (
//                         // Show video player with simple controls
//                         <div
//                           style={{
//                             position: "relative",
//                             width: "100%",
//                             height: "auto",
//                             backgroundColor: "#000",
//                             borderRadius: "0px",
//                             overflow: "hidden",
//                           }}
//                         >
//                           <video
//                             key={currentVideoUrl}
//                             controls
//                             controlsList="nodownload noremoteplayback"
//                             preload="metadata"
//                             style={{
//                               width: "100%",
//                               height: "100%",
//                               display: "block",
//                               backgroundColor: "#000",
//                             }}
//                             onLoadStart={() =>
//                               console.log("Video loading started")
//                             }
//                             onLoadedMetadata={() =>
//                               console.log("Video metadata loaded")
//                             }
//                             onCanPlay={() => console.log("Video can play")}
//                             onEnded={() => markVideoWatched(video.id)}
//                             onError={(e) => {
//                               console.error("Video error:", e.target.error);
//                               console.log("Video URL:", currentVideoUrl);
//                             }}
//                             poster={video.thumbnail_url || videoImg}
//                           >
//                             <source src={currentVideoUrl} type="video/mp4" />
//                             <source src={currentVideoUrl} type="video/webm" />
//                             <source src={currentVideoUrl} type="video/ogg" />
//                             <p
//                               style={{
//                                 color: "white",
//                                 padding: "20px",
//                                 textAlign: "center",
//                               }}
//                             >
//                               Your browser does not support the video tag.
//                               <br />
//                               <a
//                                 href={currentVideoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 style={{ color: "#007bff" }}
//                               >
//                                 Click here to open video directly
//                               </a>
//                             </p>
//                           </video>

//                           {/* Simple close button */}
//                           <button
//                             onClick={() => setVideoUrl(null)}
//                             style={{
//                               position: "absolute",
//                               top: "10px",
//                               right: "10px",
//                               background: "rgba(255,255,255,0.9)",
//                               color: "#000",
//                               border: "none",
//                               borderRadius: "4px",
//                               width: "30px",
//                               height: "30px",
//                               cursor: "pointer",
//                               fontSize: "16px",
//                               fontWeight: "bold",
//                               zIndex: 100,
//                             }}
//                           >
//                             ✕
//                           </button>

//                           {/* Video info overlay */}
//                           <div
//                             style={{
//                               position: "absolute",
//                               top: "0px",
//                               left: "0px",
//                               background: "rgba(0,0,0,0.7)",
//                               color: "white",
//                               padding: "8px 12px",
//                               borderRadius: "4px",
//                               fontSize: "12px",
//                             }}
//                           >
//                             {video.title}
//                           </div>
//                         </div>
//                       )
//                     ) : (
//                       // Show locked state
//                       <>
//                         <img
//                           src={video.thumbnail_url || videoImg}
//                           alt="Locked"
//                           style={{
//                             width: "100%",
//                             height: "200px",
//                             objectFit: "cover",
//                             filter: "blur(5px)",
//                             borderRadius: "8px",
//                           }}
//                         />
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             color: "white",
//                             fontSize: "32px",
//                           }}
//                         >
//                           <FaLock />
//                         </div>
//                       </>
//                     )}
//                   </div>
//                   <div style={{ padding: "15px" }}>
//                     <h5 style={{ margin: "0", fontSize: "16px" }}>
//                       {video.title}
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const renderNotes = () => {
//     if (loadingNotes) return renderNotesLoading();

//     if (!canAccessNotes()) {
//       return (
//         <div className="container text-center text-white">
//           <p>
//             <FaLock /> Complete all videos to unlock notes.
//           </p>
//         </div>
//       );
//     }

//     return (
//       <div className="container">
//         <div className="row">
//           {notes.length ? (
//             notes.map((note, index) => (
//               <div key={note.id} className="col-md-6 text-white mb-3">
//                 <div className="note-card p-3 bg-dark rounded">
//                   <h5>{note.title}</h5>
//                   <p style={{ whiteSpace: "pre-line", marginBottom: 0 }}>
//                     {note.content}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-white">
//               <p>No notes found for this level.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderKnowledge = () => {
//     if (loadingMcqs) return renderMcqsLoading();

//     if (!canAccessMCQs()) {
//       return (
//         <div className="container text-center text-white">
//           <p>
//             <FaLock /> Please view notes before attempting the quiz.
//           </p>
//         </div>
//       );
//     }

//     return (
//       <div className="container">
//         <div className="row">
//           {mcqs.length === 0 ? (
//             <div className="col-12 text-white">
//               <p>No quiz available for this level.</p>
//             </div>
//           ) : (
//             <div className="col-12 text-white">
//               {mcqs.map((q, index) => (
//                 <div key={q.id} className="mb-4 p-3 bg-dark rounded">
//                   <h5>{q.question}</h5>
//                   {[q.option_a, q.option_b, q.option_c, q.option_d].map(
//                     (opt, idx) => {
//                       const optionKey = ["A", "B", "C", "D"][idx];
//                       return (
//                         <div key={optionKey} className="form-check">
//                           <input
//                             type="radio"
//                             className="form-check-input"
//                             name={`question-${q.id}`}
//                             id={`question-${q.id}-option-${optionKey}`}
//                             value={optionKey}
//                             checked={userAnswers[q.id] === optionKey}
//                             onChange={() => handleAnswer(q.id, optionKey)}
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`question-${q.id}-option-${optionKey}`}
//                             style={{ cursor: "pointer" }}
//                           >
//                             {opt}
//                           </label>
//                         </div>
//                       );
//                     }
//                   )}
//                 </div>
//               ))}
//               <button className="btn btn-success" onClick={submitQuiz}>
//                 Submit Quiz
//               </button>
//               {grade !== null && (
//                 <p className="mt-3">
//                   You scored:{" "}
//                   <strong
//                     style={{ color: grade >= 50 ? "#27ae60" : "#e74c3c" }}
//                   >
//                     {grade}%
//                   </strong>
//                   .{" "}
//                   {grade >= 50
//                     ? "🎉 You can proceed to the next level!"
//                     : "📚 Please retake the quiz."}
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="valour-container">
//       <div className="valour-header">
//         <div className="header-brand">Valour Academy</div>
//       </div>
//       <div className="valour-main">
//         <div className="valour-sidebar">
//           <div className="sidebar-section">
//             <div className="sidebar-heading">COURSE LEVELS</div>
//             {["beginner", "intermediate", "professional"].map((level) => {
//               const unlocked = isLevelUnlocked(level);
//               return (
//                 <div
//                   key={level}
//                   className={`sidebar-item ${
//                     selectedLevel === level ? "active" : ""
//                   }`}
//                   onClick={() => unlocked && setSelectedLevel(level)}
//                   style={{
//                     opacity: unlocked ? 1 : 0.4,
//                     cursor: unlocked ? "pointer" : "not-allowed",
//                   }}
//                 >
//                   <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
//                   {!unlocked && <FaLock style={{ marginLeft: "10px" }} />}
//                   <i
//                     className={`arrow-icon ${
//                       selectedLevel === level ? "down" : "right"
//                     }`}
//                   ></i>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="valour-content p-0">
//           {loadingCourse ? (
//             // Simple course header loading
//             <div className="main_module">
//               <div className="content-breadcrumb">
//                 <span style={{ color: "#666" }}>Loading...</span>
//               </div>
//               <h1 className="content-title" style={{ color: "#666" }}>
//                 Loading Course...
//               </h1>
//               <p className="content-description" style={{ color: "#666" }}>
//                 Please wait...
//               </p>
//             </div>
//           ) : (
//             courseData && (
//               <div className="main_module">
//                 <div className="content-breadcrumb">
//                   <span>
//                     {selectedLevel.charAt(0).toUpperCase() +
//                       selectedLevel.slice(1)}
//                   </span>
//                   <span className="separator">›</span>
//                   <span>Module 1</span>
//                 </div>
//                 <h1 className="content-title">{courseData.title}</h1>
//                 <p className="content-description">{courseData.description}</p>
//                 <div className="content-info">
//                   <div className="lesson-count">
//                     <FaBookReader className="accordion-icon resources" />
//                     <span>
//                       {getVideosForLevel(selectedLevel).length} Lessons
//                     </span>
//                   </div>
//                   <div className="level-badge">
//                     <FaSignal className="accordion-icon resources" />
//                     <span>
//                       {selectedLevel.charAt(0).toUpperCase() +
//                         selectedLevel.slice(1)}{" "}
//                       Level
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//           <div className="accordion-container">
//             {["resources", "notes", "knowledge"].map((section) => (
//               <div
//                 key={section}
//                 className={`accordion-item ${
//                   activeSection === section ? "active" : ""
//                 }`}
//               >
//                 <div
//                   className="accordion-header"
//                   onClick={() => toggleSection(section)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="accordion-title">
//                     {section === "resources" && (
//                       <FaBookOpen className="accordion-icon resources" />
//                     )}
//                     {section === "notes" && (
//                       <FaFileAlt className="accordion-icon resources" />
//                     )}
//                     {section === "knowledge" && (
//                       <FaLightbulb className="accordion-icon resources" />
//                     )}
//                     <span>
//                       {section.charAt(0).toUpperCase() + section.slice(1)}
//                     </span>
//                   </div>
//                   <i
//                     className={`arrow-icon ${
//                       activeSection === section ? "up" : "down"
//                     }`}
//                   ></i>
//                 </div>
//                 {activeSection === section && (
//                   <div className="accordion-content">
//                     {section === "resources" && renderVideos()}
//                     {section === "notes" && renderNotes()}
//                     {section === "knowledge" && renderKnowledge()}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <ProgressBarsDisplay courseId={courseId} />
//         </div>
//       </div>

//       <style>{`
//         .video-card {
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//           background: #0000;
//           cursor: pointer;

//         }

//         .video-card:hover {
//           box-shadow: 0 4px 16px rgba(0,0,0,0.15);
//         }

//         .note-card {
//           border-left: 4px solid #3498db;
//         }

//         /* Ensure video controls are always visible */
//         video {
//           background: #000 !important;
//         }

//         video::-webkit-media-controls {
//           display: flex !important;
//         }

//         video::-webkit-media-controls-panel {
//           display: flex !important;
//           background-color: rgba(0, 0, 0, 0.8) !important;
//         }

//         video::-webkit-media-controls-play-button {
//           display: block !important;
//         }

//         video::-webkit-media-controls-timeline {
//           display: block !important;
//         }

//         video::-webkit-media-controls-current-time-display {
//           display: block !important;
//         }

//         video::-webkit-media-controls-time-remaining-display {
//           display: block !important;
//         }

//         video::-webkit-media-controls-mute-button {
//           display: block !important;
//         }

//         video::-webkit-media-controls-volume-slider {
//           display: block !important;
//         }

//         video::-webkit-media-controls-fullscreen-button {
//           display: block !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ValourAcademy;

// ==================================================================================
import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaBookReader,
  FaFileAlt,
  FaLightbulb,
  FaLock,
  FaSignal,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import videoImg from "../assets/images/crypto-latest.png";
import ProgressBarsDisplay from "../components/DashboardSidebarComp/ProgressBar";
import "../styles/academy.css";

const ValourAcademy = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [videoUrl, setVideoUrl] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0,
  });
  const [videoWatched, setVideoWatched] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [grade, setGrade] = useState(null);
  const [passedLevels, setPassedLevels] = useState([]);

  // Loading states
  const [loadingCourse, setLoadingCourse] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [loadingMcqs, setLoadingMcqs] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      setLoadingProgress(true);
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const currentLevel = data.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      setProgressData({
        totalProgress: data.total_progress,
        levelProgress: currentLevel?.percent || 0,
        videoProgress: currentLevel?.percent || 0,
      });
      setVideoWatched(currentLevel?.watched_video_ids || []);
      setPassedLevels(data.passed_levels.map((lvl) => lvl.toLowerCase()));
      setLoadingProgress(false);
    };

    if (courseId) fetchProgress();
  }, [courseId, selectedLevel]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoadingCourse(true);
      const token = localStorage.getItem("accessToken");
      try {
        const res = await fetch(
          `https://backend-production-1e63.up.railway.app/courses/${courseId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error ${res.status}: ${text}`);
        }

        const data = await res.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course details:", error.message);
      } finally {
        setLoadingCourse(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const currentLevel = data.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      setProgressData({
        totalProgress: data.total_progress,
        levelProgress: currentLevel?.percent || 0,
        videoProgress: currentLevel?.percent || 0,
      });
      setVideoWatched(currentLevel?.watched_video_ids || []);
    };
    if (courseId) fetchProgress();
  }, [courseId, selectedLevel]);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoadingNotes(true);
      const token = localStorage.getItem("accessToken");
      const levelObj = courseData?.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      if (!levelObj) return;
      const res = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setNotes(data);
      setLoadingNotes(false);
    };
    if (courseData) fetchNotes();
  }, [courseId, selectedLevel, courseData]);

  useEffect(() => {
    const fetchMCQs = async () => {
      setLoadingMcqs(true);
      const token = localStorage.getItem("accessToken");
      const levelObj = courseData?.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      if (!levelObj) return;
      const res = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setMcqs(data);
      setLoadingMcqs(false);
    };
    if (courseData) fetchMCQs();
  }, [courseId, selectedLevel, courseData]);

  const getVideosForLevel = (levelName) => {
    if (!courseData) return [];
    const level = courseData.levels.find(
      (lvl) => lvl.level.toLowerCase() === levelName
    );
    return level ? level.videos : [];
  };

  const handleAnswer = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = async () => {
    const token = localStorage.getItem("accessToken");

    const levelObj = courseData?.levels.find(
      (lvl) => lvl.level.toLowerCase() === selectedLevel
    );
    if (!levelObj) return;

    try {
      const res = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/submit/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: userAnswers }),
        }
      );
      const data = await res.json();
      setGrade(Math.round(data.score));

      // Re-fetch progress to update passedLevels
      const progressRes = await fetch(
        `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const progressData = await progressRes.json();
      setPassedLevels(
        progressData.passed_levels.map((lvl) => lvl.toLowerCase())
      );
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const isLevelUnlocked = (level) => {
    if (level === "beginner") return true;
    if (level === "intermediate") return passedLevels.includes("beginner");
    if (level === "professional") return passedLevels.includes("intermediate");
    return false;
  };

  const isVideoUnlocked = (index) => {
    return true; // All videos are unlocked
  };

  const areAllVideosWatched = () => {
    return true; // So notes unlock immediately
  };

  const canAccessNotes = () => areAllVideosWatched();
  const canAccessMCQs = () => canAccessNotes();

  // Simple loading placeholders (no shimmer)
  const renderVideoLoading = () => (
    <div className="container">
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="video-card">
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                }}
              >
                Loading...
              </div>
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    height: "20px",
                    backgroundColor: "#000",
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotesLoading = () => (
    <div className="container">
      <div className="row">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="note-card p-3 bg-dark rounded">
              <div style={{ color: "#666" }}>Loading notes...</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMcqsLoading = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mb-4 p-3 bg-dark rounded">
            <div style={{ color: "#666" }}>Loading quiz...</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVideos = () => {
    if (loadingCourse) return renderVideoLoading();

    const videos = getVideosForLevel(selectedLevel);

    const markVideoWatched = async (videoId) => {
      const token = localStorage.getItem("accessToken");
      try {
        await fetch(
          `https://backend-production-1e63.up.railway.app/videos/${videoId}/watch/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const res = await fetch(
          `https://backend-production-1e63.up.railway.app/courses/${courseId}/progress/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        const currentLevel = data.levels.find(
          (lvl) => lvl.level.toLowerCase() === selectedLevel
        );
        setProgressData({
          totalProgress: data.total_progress,
          levelProgress: currentLevel?.percent || 0,
          videoProgress: currentLevel?.percent || 0,
        });
        setVideoWatched(currentLevel?.watched_video_ids || []);
      } catch (error) {
        console.error("Error marking video watched:", error);
      }
    };

    return (
      <div className="container">
        <div className="row">
          {videos.map((video, index) => {
            const isUnlocked = isVideoUnlocked(index);
            const currentVideoUrl = video.public_url;
            const isVideoPlaying = videoUrl === currentVideoUrl;

            return (
              <div key={video.id} className="col-lg-4 col-md-6 mb-4">
                <div className="video-card">
                  <div style={{ position: "relative" }}>
                    {isUnlocked ? (
                      !isVideoPlaying ? (
                        // Show thumbnail with play button
                        <>
                          <img
                            src={video.thumbnail_url || videoImg}
                            alt={video.title}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: "0px",
                            }}
                          />
                          <button
                            onClick={() => setVideoUrl(currentVideoUrl)}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              background: "rgba(255,255,255,0.9)",
                              border: "none",
                              borderRadius: "50%",
                              width: "60px",
                              height: "60px",
                              fontSize: "24px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#000",
                            }}
                          >
                            ▶
                          </button>
                        </>
                      ) : (
                        // Show video player with simple controls
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            backgroundColor: "#000",
                            borderRadius: "0px",
                            overflow: "hidden",
                          }}
                        >
                          <video
                            key={currentVideoUrl}
                            controls
                            controlsList="nodownload noremoteplayback"
                            preload="metadata"
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "block",
                              backgroundColor: "#000",
                            }}
                            onLoadStart={() =>
                              console.log("Video loading started")
                            }
                            onLoadedMetadata={() =>
                              console.log("Video metadata loaded")
                            }
                            onCanPlay={() => console.log("Video can play")}
                            onEnded={() => markVideoWatched(video.id)}
                            onError={(e) => {
                              console.error("Video error:", e.target.error);
                              console.log("Video URL:", currentVideoUrl);
                            }}
                            poster={video.thumbnail_url || videoImg}
                          >
                            <source src={currentVideoUrl} type="video/mp4" />
                            <source src={currentVideoUrl} type="video/webm" />
                            <source src={currentVideoUrl} type="video/ogg" />
                            <p
                              style={{
                                color: "white",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              Your browser does not support the video tag.
                              <br />
                              <a
                                href={currentVideoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#007bff" }}
                              >
                                Click here to open video directly
                              </a>
                            </p>
                          </video>

                          {/* Simple close button */}
                          <button
                            onClick={() => setVideoUrl(null)}
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              background: "rgba(255,255,255,0.9)",
                              color: "#000",
                              border: "none",
                              borderRadius: "4px",
                              width: "30px",
                              height: "30px",
                              cursor: "pointer",
                              fontSize: "16px",
                              fontWeight: "bold",
                              zIndex: 100,
                            }}
                          >
                            ✕
                          </button>

                          {/* Video info overlay */}
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              background: "rgba(0,0,0,0.7)",
                              color: "white",
                              padding: "8px 12px",
                              borderRadius: "4px",
                              fontSize: "12px",
                            }}
                          >
                            {video.title}
                          </div>
                        </div>
                      )
                    ) : (
                      // Show locked state
                      <>
                        <img
                          src={video.thumbnail_url || videoImg}
                          alt="Locked"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            filter: "blur(5px)",
                            borderRadius: "8px",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontSize: "32px",
                          }}
                        >
                          <FaLock />
                        </div>
                      </>
                    )}
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h5 style={{ margin: "0", fontSize: "16px" }}>
                      {video.title}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNotes = () => {
    if (loadingNotes) return renderNotesLoading();

    if (!canAccessNotes()) {
      return (
        <div className="container text-center text-white">
          <p>
            <FaLock /> Complete all videos to unlock notes.
          </p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {notes.length ? (
            notes.map((note, index) => (
              <div key={note.id} className="col-md-6 text-white mb-3">
                <div className="note-card p-3 bg-dark rounded">
                  <h5>{note.title}</h5>
                  <p style={{ whiteSpace: "pre-line", marginBottom: 0 }}>
                    {note.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-white">
              <p>No notes found for this level.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderKnowledge = () => {
    if (loadingMcqs) return renderMcqsLoading();

    if (!canAccessMCQs()) {
      return (
        <div className="container text-center text-white">
          <p>
            <FaLock /> Please view notes before attempting the quiz.
          </p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {mcqs.length === 0 ? (
            <div className="col-12 text-white">
              <p>No quiz available for this level.</p>
            </div>
          ) : (
            <div className="col-12 text-white">
              {mcqs.map((q, index) => (
                <div key={q.id} className="mb-4 p-3 bg-dark rounded">
                  <h5>{q.question}</h5>
                  {[q.option_a, q.option_b, q.option_c, q.option_d].map(
                    (opt, idx) => {
                      const optionKey = ["A", "B", "C", "D"][idx];
                      return (
                        <div key={optionKey} className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name={`question-${q.id}`}
                            id={`question-${q.id}-option-${optionKey}`}
                            value={optionKey}
                            checked={userAnswers[q.id] === optionKey}
                            onChange={() => handleAnswer(q.id, optionKey)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`question-${q.id}-option-${optionKey}`}
                            style={{ cursor: "pointer" }}
                          >
                            {opt}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
              ))}
              <button className="btn btn-success" onClick={submitQuiz}>
                Submit Quiz
              </button>
              {grade !== null && (
                <p className="mt-3">
                  You scored:{" "}
                  <strong
                    style={{ color: grade >= 50 ? "#27ae60" : "#e74c3c" }}
                  >
                    {grade}%
                  </strong>
                  .{" "}
                  {grade >= 50
                    ? "🎉 You can proceed to the next level!"
                    : "📚 Please retake the quiz."}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="valour-container">
      <div className="back-btn-wrapper text-end">
        <button
          onClick={() => navigate("/dashboard")}
          className="btn btn-outline-light"
          style={{
            borderRadius: "30px",
            padding: "8px 20px",
            fontWeight: "500",
            fontSize: "14px",
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "1px solid #444",
            position: "fixed",
            bottom: "18px",
            right: "0",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="valour-header">
        <div className="header-brand">Valour Academy</div>
      </div>
      <div className="valour-main">
        <div className="valour-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-heading">COURSE LEVELS</div>
            {["beginner", "intermediate", "professional"].map((level) => {
              const unlocked = isLevelUnlocked(level);
              return (
                <div
                  key={level}
                  className={`sidebar-item ${
                    selectedLevel === level ? "active" : ""
                  }`}
                  onClick={() => unlocked && setSelectedLevel(level)}
                  style={{
                    opacity: unlocked ? 1 : 0.4,
                    cursor: unlocked ? "pointer" : "not-allowed",
                  }}
                >
                  <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                  {!unlocked && <FaLock style={{ marginLeft: "10px" }} />}
                  <i
                    className={`arrow-icon ${
                      selectedLevel === level ? "down" : "right"
                    }`}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
        <div className="valour-content p-0">
          {loadingCourse ? (
            // Simple course header loading
            <div className="main_module">
              <div className="content-breadcrumb">
                <span style={{ color: "#666" }}>Loading...</span>
              </div>
              <h1 className="content-title" style={{ color: "#666" }}>
                Loading Course...
              </h1>
              <p className="content-description" style={{ color: "#666" }}>
                Please wait...
              </p>
            </div>
          ) : (
            courseData && (
              <div className="main_module">
                <div className="content-breadcrumb">
                  <span>
                    {selectedLevel.charAt(0).toUpperCase() +
                      selectedLevel.slice(1)}
                  </span>
                  <span className="separator">›</span>
                  <span>Module 1</span>
                </div>
                <h1 className="content-title">{courseData.title}</h1>
                <p className="content-description">{courseData.description}</p>
                <div className="content-info">
                  <div className="lesson-count">
                    <FaBookReader className="accordion-icon resources" />
                    <span>
                      {getVideosForLevel(selectedLevel).length} Lessons
                    </span>
                  </div>
                  <div className="level-badge">
                    <FaSignal className="accordion-icon resources" />
                    <span>
                      {selectedLevel.charAt(0).toUpperCase() +
                        selectedLevel.slice(1)}{" "}
                      Level
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="accordion-container">
            {["resources", "notes", "knowledge"].map((section) => (
              <div
                key={section}
                className={`accordion-item ${
                  activeSection === section ? "active" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleSection(section)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="accordion-title">
                    {section === "resources" && (
                      <FaBookOpen className="accordion-icon resources" />
                    )}
                    {section === "notes" && (
                      <FaFileAlt className="accordion-icon resources" />
                    )}
                    {section === "knowledge" && (
                      <FaLightbulb className="accordion-icon resources" />
                    )}
                    <span>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </div>
                  <i
                    className={`arrow-icon ${
                      activeSection === section ? "up" : "down"
                    }`}
                  ></i>
                </div>
                {activeSection === section && (
                  <div className="accordion-content">
                    {section === "resources" && renderVideos()}
                    {section === "notes" && renderNotes()}
                    {section === "knowledge" && renderKnowledge()}
                  </div>
                )}
              </div>
            ))}
          </div>
          <ProgressBarsDisplay courseId={courseId} />
        </div>
      </div>

      <style>{`
        .video-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          background: #0000;
          cursor: pointer;

        }

        .video-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .note-card {
          border-left: 4px solid #3498db;
        }

        /* Ensure video controls are always visible */
        video {
          background: #000 !important;
        }

        video::-webkit-media-controls {
          display: flex !important;
        }

        video::-webkit-media-controls-panel {
          display: flex !important;
          background-color: rgba(0, 0, 0, 0.8) !important;
        }

        video::-webkit-media-controls-play-button {
          display: block !important;
        }

        video::-webkit-media-controls-timeline {
          display: block !important;
        }

        video::-webkit-media-controls-current-time-display {
          display: block !important;
        }

        video::-webkit-media-controls-time-remaining-display {
          display: block !important;
        }

        video::-webkit-media-controls-mute-button {
          display: block !important;
        }

        video::-webkit-media-controls-volume-slider {
          display: block !important;
        }

        video::-webkit-media-controls-fullscreen-button {
          display: block !important;
        }
      `}</style>
    </div>
  );
};

export default ValourAcademy;
