import React, { useEffect, useState } from 'react';
import '../DashboardSidebarComp/styles/progressbar.css';

const CircularProgressBar = ({ percentage, color }) => {
  const rotation = percentage * 3.6;

  return (
    <div className="circular-progress">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="percentage">
            {percentage}<span className="percent-symbol">%</span>
          </div>
        </div>
      </div>

      <div
        className="progress-circle"
        style={{
          '--percentage': percentage,
          '--color': color
        }}
      ></div>
    </div>
  );
};

const OverallProgressBar = () => {
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("https://valourwealthdjango-production.up.railway.app/user/courses/progress/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const totalProgress = data?.overall?.overall_progress || 0;
        const videoProgress = Math.round((data?.overall?.watched / data?.overall?.total) * 100) || 0;

        const courses = data?.courses || [];
        const levelProgress = courses.length
          ? Math.round(courses.reduce((acc, course) => acc + course.video_progress, 0) / courses.length)
          : 0;

        setProgressData({
          totalProgress,
          levelProgress,
          videoProgress
        });
      })
      .catch((err) => {
        console.error("Progress fetch failed:", err);
      });
  }, []);

  return (
    <div className="container my-5 p-0">
      <div className="progress_container shadow p-3">
        <div className="sec_heading">
          <h2 className='text-white'>Your Overall Progress</h2>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.videoProgress} color="#3CD4A0" />
            <h4 className='text-white'>Video Progress</h4>
          </div>
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.levelProgress} color="#9333EA" />
            <h4 className='text-white'>Level Progress</h4>
          </div>
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.totalProgress} color="#F05252" />
            <h4 className='text-white'>Overall Performance</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallProgressBar;
