import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/platinum.css";
import SessionManagement from "./SessionManagement";

const ScheduleCall = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const [callCredits, setCallCredits] = useState(0);
  const [users, setUsers] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const timeSlots = [
    { id: 1, label: "09:00 AM", value: "09:00:00" },
    { id: 2, label: "10:00 AM", value: "10:00:00" },
    { id: 3, label: "11:00 AM", value: "11:00:00" },
    { id: 4, label: "02:00 PM", value: "14:00:00" },
    { id: 5, label: "03:00 PM", value: "15:00:00" },
    { id: 6, label: "04:00 PM", value: "16:00:00" },
  ];

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const prevMonthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day =
        new Date(currentYear, currentMonth, 0).getDate() -
        (firstDayOfMonth - i) +
        1;
      prevMonthDays.push(
        <div key={`prev-${i}`} className="calendar-day prev-month">
          {day}
        </div>
      );
    }
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate === i;
      currentMonthDays.push(
        <div
          key={`current-${i}`}
          className={`calendar-day current-month ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
        </div>
      );
    }
    const totalCells = 42;
    const remainingCells =
      totalCells - (prevMonthDays.length + currentMonthDays.length);
    const nextMonthDays = [];
    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push(
        <div key={`next-${i}`} className="calendar-day next-month">
          {i}
        </div>
      );
    }
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const getMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[currentMonth]} ${currentYear}`;
  };

  const fetchCallCredits = async () => {
    try {
      const res = await axios.get(`${API_URL}api/callcredits/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.data.length > 0) {
        setCallCredits(res.data[0].hours_remaining);
      }
    } catch (err) {
      console.error("Error fetching call credits", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}api/users/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    fetchCallCredits();
    fetchUsers();
  }, []);

  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
  };

  const handleScheduleCall = async () => {
    if (!selectedDate || !selectedTimeSlot || !selectedUser) {
      alert("Please select date, time and user.");
      return;
    }
    const selectedFullDate = `${currentYear}-${String(
      currentMonth + 1
    ).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`;

    try {
      await axios.post(
        `${API_URL}api/sessions/`,
        {
          date: selectedFullDate,
          time_slot: selectedTimeSlot,
          analyst: selectedUser,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      alert("Call Scheduled Successfully!");
      fetchCallCredits();
    } catch (err) {
      console.error("Error scheduling call:", err?.response?.data);
      alert(
        "Error: " + (err?.response?.data?.detail || "Error scheduling call")
      );
    }
  };

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <div className="phone-icon">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <div className="schedule-title">
          <h2>Schedule 1-on-1 Calls</h2>
          <p>Book exclusive sessions with valourwealth analysts</p>
        </div>
      </div>

      <div className="schedule-box">
        <div className="schedule-box-header">
          <h3>Schedule 1-on-1 Call</h3>
          <p>You have {callCredits} hours of call credits remaining</p>
        </div>

        <div className="schedule-box-content">
          <div className="calendar-section">
            <h4>Select Date</h4>
            <div className="calendar">
              <div className="calendar-header">
                <button className="nav-btn">&lt;</button>
                <div className="month-year">{getMonth()}</div>
                <button className="nav-btn">&gt;</button>
              </div>
              <div className="calendar-weekdays">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div className="calendar-days">{generateCalendar()}</div>
            </div>
          </div>

          <div className="time-analyst-section">
            <div className="time-slot-section">
              <h4>Select available Time Slot</h4>
              <div className="time-slots">
                {timeSlots.map((slot, index) =>
                  index % 2 === 0 ? (
                    <div key={slot.id} className="time-slot-row">
                      <div
                        className={`time-slot ${
                          selectedTimeSlot === slot.value ? "selected" : ""
                        }`}
                        onClick={() => handleTimeSlotSelect(slot.value)}
                      >
                        {slot.label}
                      </div>
                      {timeSlots[index + 1] && (
                        <div
                          className={`time-slot ${
                            selectedTimeSlot === timeSlots[index + 1].value
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleTimeSlotSelect(timeSlots[index + 1].value)
                          }
                        >
                          {timeSlots[index + 1].label}
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <div className="analyst-section">
              <h4>Select Analyst</h4>
              <div className="select-dropdown">
                <select
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                >
                  <option value="">Select a Analyst</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              <button
                className="schedule-btn"
                disabled={!selectedDate || !selectedTimeSlot || !selectedUser}
                onClick={handleScheduleCall}
              >
                Schedule Call (1 Hour Credit)
              </button>
            </div>
          </div>
        </div>
      </div>

      <SessionManagement />
    </div>
  );
};

export default ScheduleCall;
