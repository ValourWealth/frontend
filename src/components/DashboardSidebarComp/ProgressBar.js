// import { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/progressbar.css";

// const CircularProgressBar = ({ percentage, color }) => {
//   return (
//     <div className="circular-progress">
//       <div className="outer-circle">
//         <div className="inner-circle">
//           <div className="percentage">
//             {percentage}
//             <span className="percent-symbol">%</span>
//           </div>
//         </div>
//       </div>
//       <div
//         className="progress-circle"
//         style={{
//           "--percentage": percentage,
//           "--color": color,
//         }}
//       ></div>
//     </div>
//   );
// };

// const ProgressBarsDisplay = ({ courseId }) => {
//   const [selectedLevel, setSelectedLevel] = useState("beginner");
//   const [progressData, setProgressData] = useState({
//     totalProgress: 0,
//     levelProgress: 0,
//     videoProgress: 0,
//     quizScore: null,
//   });

//   useEffect(() => {
//     const fetchProgress = async () => {
//       const token = localStorage.getItem("accessToken");
//       console.log("courseId from prop:", courseId);
//       console.log("token exists:", !!token);

//       if (!token || !courseId) {
//         console.warn("Missing token or courseId");
//         return;
//       }

//       try {
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
//         console.log("Progress API data:", data);

//         const currentLevel = data.levels.find(
//           (lvl) => lvl.level.toLowerCase() === selectedLevel.toLowerCase()
//         );

//         setProgressData({
//           totalProgress: data.total_progress || 0,
//           levelProgress: currentLevel?.percent || 0,
//           videoProgress: currentLevel?.percent || 0,
//           quizScore: currentLevel?.quiz_score ?? null,
//         });
//       } catch (error) {
//         console.error("Error fetching progress:", error);
//       }
//     };

//     fetchProgress();
//   }, [courseId, selectedLevel]);
//   return (
//     <div className="container my-5 p-0">
//       <div className="progress_container shadow p-3">
//         <div className="sec_heading">
//           <h2 className="text-white">Your Progress</h2>
//         </div>

//         <div
//           className="text-center mb-3 progress-level-buttons"
//           style={{ display: "flex", justifyContent: "center" }}
//         >
//           {["beginner", "intermediate", "professional"].map((level) => (
//             <button
//               key={level}
//               className={`btn mx-2 ${
//                 selectedLevel === level ? "btn-primary" : "btn-outline-light"
//               }`}
//               onClick={() => setSelectedLevel(level)}
//             >
//               {level.charAt(0).toUpperCase() + level.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div className="row justify-content-center p-3">
//           <div className="col-md-3 text-center">
//             <CircularProgressBar
//               percentage={progressData.videoProgress}
//               color="#3CD4A0"
//             />
//             <h4 className="text-white">Video Progress</h4>
//           </div>
//           <div className="col-md-3 text-center">
//             <CircularProgressBar
//               percentage={progressData.levelProgress}
//               color="#9333EA"
//             />
//             <h4 className="text-white">Level Progress</h4>
//           </div>

//           {progressData.quizScore !== null && (
//             <div className="col-md-3 text-center">
//               <CircularProgressBar
//                 percentage={Math.round(progressData.quizScore)}
//                 color="#22D3EE"
//               />
//               <h4 className="text-white">MCQ Score</h4>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressBarsDisplay;

import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/progressbar.css";

const CircularProgressBar = ({ percentage, color }) => {
  return (
    <div className="circular-progress">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="percentage">
            {percentage}
            <span className="percent-symbol">%</span>
          </div>
        </div>
      </div>
      <div
        className="progress-circle"
        style={{
          "--percentage": percentage,
          "--color": color,
        }}
      ></div>
    </div>
  );
};

const ProgressBarsDisplay = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0,
    quizScore: null,
  });

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const res = await fetch(
          `https://backend-production-1e63.up.railway.app/api/courses/current/progress/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        console.log("Current course progress:", data);

        const currentLevel = data.levels.find(
          (lvl) => lvl.level.toLowerCase() === selectedLevel.toLowerCase()
        );

        setProgressData({
          totalProgress: data.total_progress || 0,
          levelProgress: currentLevel?.percent || 0,
          videoProgress: currentLevel?.percent || 0,
          quizScore: currentLevel?.quiz_score ?? null,
        });
      } catch (error) {
        console.error("Error fetching current course progress:", error);
      }
    };

    fetchProgress();
  }, [selectedLevel]);

  return (
    <div className="container my-5 p-0">
      <div className="progress_container shadow p-3">
        <div className="sec_heading">
          <h2 className="text-white">Your Progress</h2>
        </div>

        <div
          className="text-center mb-3 progress-level-buttons"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {["beginner", "intermediate", "professional"].map((level) => (
            <button
              key={level}
              className={`btn mx-2 ${
                selectedLevel === level ? "btn-primary" : "btn-outline-light"
              }`}
              onClick={() => setSelectedLevel(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <div className="row justify-content-center p-3">
          <div className="col-md-3 text-center">
            <CircularProgressBar
              percentage={progressData.videoProgress}
              color="#3CD4A0"
            />
            <h4 className="text-white">Video Progress</h4>
          </div>
          <div className="col-md-3 text-center">
            <CircularProgressBar
              percentage={progressData.levelProgress}
              color="#9333EA"
            />
            <h4 className="text-white">Level Progress</h4>
          </div>

          {progressData.quizScore !== null && (
            <div className="col-md-3 text-center">
              <CircularProgressBar
                percentage={Math.round(progressData.quizScore)}
                color="#22D3EE"
              />
              <h4 className="text-white">MCQ Score</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarsDisplay;
