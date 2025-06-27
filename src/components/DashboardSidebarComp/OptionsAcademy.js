import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBarsDisplay from "../DashboardSidebarComp/ProgressBar";
import "./styles/optionsAcademy.css";

const OptionsAcademy = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("No access token found in localStorage");
        }

        const res = await fetch(
          "https://backend-production-1e63.up.railway.app/courses/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received.");
        }

        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container my-4">
      <h3 className="academy-title">
        <strong>Fundamentals</strong>{" "}
        <span className="lesson-info">{courses.length} courses</span>
      </h3>

      <div className="row">
        {loading ? (
          <>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div
                  className="shimmer-block"
                  style={{
                    height: "180px",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                ></div>
              </div>
            ))}
          </>
        ) : (
          courses.map((course, index) => (
            <div
              key={course.id}
              className={`col-md-3 mb-4 ${index !== 0 ? "" : ""}`}
            >
              <div className="academy-card">
                <div className="academy-card-content">
                  <h5 className="academy-title">{course.title}</h5>
                  <p className="academy-duration">
                    {course.description?.slice(0, 60) ?? ""}
                  </p>
                </div>
                <div className="academy-footer">
                  <Link to={`/academy/${course.id}`} className="academy-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ProgressBarsDisplay />
    </div>
  );
};

export default OptionsAcademy;
