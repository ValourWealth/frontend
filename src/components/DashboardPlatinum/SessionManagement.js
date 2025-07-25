import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/platinum.css";

const SessionManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [pastSessions, setPastSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
  const [notes, setNotes] = useState("");
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchSessions = async () => {
    try {
      const [resUpcoming, resPast] = await Promise.all([
        axios.get(`${API_URL}api/sessions/upcoming/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        axios.get(`${API_URL}api/sessions/past/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      ]);
      setUpcomingSessions(resUpcoming.data);
      setPastSessions(resPast.data);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get(`${API_URL}api/user/profile/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setProfilePhotoUrl(res.data.profile_photo_url);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
    fetchUserProfile();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.patch(
        `${API_URL}api/sessions/${id}/cancel/`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      alert("Session Cancelled Successfully!");
      fetchSessions();
    } catch (error) {
      console.error("Error cancelling session:", error);
      alert("❌ Error cancelling session. Please try again.");
    }
  };

  const handleJoin = (session) => {
    if (session.recording_link) {
      window.open(session.recording_link, "_blank");
    } else {
      alert("Session link not available yet.");
    }
  };

  const openNotesModal = (session) => {
    setSelectedSession(session);
    setNotes(session.notes || "");
    setShowNotesModal(true);
  };

  const saveNotes = async () => {
    if (!selectedSession) return;

    try {
      await axios.patch(
        `${API_URL}api/sessions/${selectedSession.id}/`,
        { notes },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      alert("✅ Notes saved successfully!");
      setShowNotesModal(false);
      fetchSessions();
    } catch (error) {
      console.error("Error saving notes:", error);
      alert("❌ Error saving notes. Please try again.");
    }
  };

  const renderSessionCard = (session, isPast = false) => (
    <div key={session.id} className="psession-card mb-4">
      <div className="session-header">
        <div className="session-avatar">
          <img
            src={profilePhotoUrl || "/api/placeholder/50/50"}
            alt="Avatar"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="session-status">{session.status}</div>
      </div>
      <div className="session-title">1-on-1 Session</div>
      <div className="session-host">with {session.analyst_name}</div>
      <div className="session-details">
        <div className="detail-item">
          <i className="bi bi-calendar"></i> {session.date}
        </div>
        <div className="detail-item">
          <i className="bi bi-clock"></i> {session.time_slot}
        </div>
        <div className="detail-item">
          <i className="bi bi-hourglass"></i> {session.duration} Minutes
        </div>
      </div>
      <div className="session-actions">
        {!isPast && session.status !== "Cancelled" && (
          <>
            <button
              className="btn btn-primary me-2"
              onClick={() => handleJoin(session)}
            >
              Join Session
            </button>
            <button
              className="btn btn-danger text-white mt-2"
              onClick={() => handleCancel(session.id)}
            >
              Cancel Session
            </button>
          </>
        )}

        {isPast && (
          <>
            {session.notes && (
              <div className="text-white mb-2">
                <strong>Notes:</strong> {session.notes}
              </div>
            )}
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => openNotesModal(session)}
            >
              {session.notes ? "View/Edit Notes" : "Add Notes"}
            </button>
            {session.recording_link && (
              <a
                href={session.recording_link}
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Recording
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="session-management">
      <div className="container-fluid">
        <div className="tabs-container">
          <div className="nav-tabs">
            <button
              className={`tab-button ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Sessions
            </button>
            <button
              className={`tab-button ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past Sessions
            </button>
          </div>
        </div>

        <div className="tab-content-platinum mt-4">
          {loading ? (
            <div className="shimmer-card p-4">
              <div className=" mb-3" style={{ width: "50%" }}></div>
              <div
                className="shimmer-block shimmer-subtitle mb-2"
                style={{ width: "70%" }}
              ></div>
              <div className=" mb-2" style={{ width: "90%" }}></div>
              <div className=" mb-2" style={{ width: "60%" }}></div>
              <div className="" style={{ width: "40%" }}></div>
            </div>
          ) : (
            <>
              {activeTab === "upcoming" && (
                <div className="tab-pane show active">
                  {upcomingSessions.length === 0 ? (
                    <p>No upcoming sessions found.</p>
                  ) : (
                    upcomingSessions.map((session) =>
                      renderSessionCard(session)
                    )
                  )}
                </div>
              )}

              {activeTab === "past" && (
                <div className="tab-pane show active">
                  {pastSessions.length === 0 ? (
                    <p>No past sessions found.</p>
                  ) : (
                    pastSessions.map((session) =>
                      renderSessionCard(session, true)
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {showNotesModal && (
          <div className="modal-backdrop">
            <div className="notes-modal">
              <h4>{selectedSession.notes ? "Edit Notes" : "Add Notes"}</h4>
              <textarea
                className="form-control my-3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="6"
              />
              <div className="text-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setShowNotesModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary mt-2" onClick={saveNotes}>
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionManagement;
