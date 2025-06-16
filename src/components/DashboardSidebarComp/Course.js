import React from 'react'
import "./styles/liveSessions.css";  
import stream_img from "./images/course-card-img.jpg"; 
import { Link } from "react-router-dom";

function Course() {
  return (
     <div className="container mt-4">
      <h4 className="section-title mb-3">Courses</h4>
      <div className="row">

        {/* Single Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card stream_cards shadow-sm">
            <img src={stream_img} alt="Live Session" className="card-img-top" />
            <div className="course-card">
              <h4 className="course-title">
                The Complete FOREX Scalping Trading Course
              </h4>
              <p className="course-desc">
                What you'll learn Introduction to Forex Scalping Trading Which
                timeframe's we use Scalping Trading in the forex market. You’re
                going to learn my favorite...
              </p>
              <Link to="/course-detail" className="theme_btn">View Details</Link>
              </div>
          </div>
        </div> 

      </div>
    </div>
)
}

export default Course





// import React, { useState, useEffect } from "react";
// import "./styles/liveSessions.css";
// import stream_img from "./images/course-card-img.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const API_BASE_URL = process.env.REACT_APP_API_URL;

// function Course() {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       console.warn("No auth token found, redirecting to login.");
//       navigate("/login"); // Redirect if no token
//       return;
//     }

//     console.log("Auth Token:", token); // Debugging

//     fetch(`${API_BASE_URL}/api/courses/`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           if (response.status === 401) {
//             throw new Error("Unauthorized! Please log in again.");
//           }
//           throw new Error("Failed to fetch courses");
//         }
//         return response.json();
//       })
//       .then((data) => setCourses(data))
//       .catch((error) => setError(error.message));
//   }, [navigate]);

//   return (
//     <div className="container mt-4">
//       <h4 className="section-title mb-3">Courses</h4>
//       {error && <p className="error-message">{error}</p>}
//       <div className="row">
//         {courses.length === 0 ? (
//           <p>No courses available at the moment.</p>
//         ) : (
//           courses.map((course) => (
//             <div key={course.id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card stream_cards shadow-sm">
//                 <img
//                   src={course.thumbnail?.startsWith("http") ? course.thumbnail : `${API_BASE_URL}${course.thumbnail || stream_img}`}
//                   alt="Course Thumbnail"
//                   className="card-img-top"
//                 />
//                 <div className="course-card">
//                   <h4 className="course-title">{course.title}</h4>
//                   <p className="course-desc">{course.description.substring(0, 150)}...</p>
//                   <Link to={`/course-detail/${course.id}`} className="theme_btn">
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Course;
