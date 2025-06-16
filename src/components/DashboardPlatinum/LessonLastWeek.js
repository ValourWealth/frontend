

// InvestmentDashboard.jsx
import React from 'react';

const LessonLastWeek = () => {
  // Lessons from last week data
  const lessons = [
    {
      category: "Risk Management",
      title: "Patience in Position Sizing",
      content: "Last week's volatility demonstrated the importance of proper position sizing. Members who followed our 3% max allocation guideline were able to weather the storm and capitalize on the recovery.",
    },
    {
      category: "Strategy",
      title: "Sector Rotation Timing",
      content: "Our early rotation into healthcare and consumer staples provided a buffer against tech sector volatility. This reinforces our approach of anticipating sector moves rather than chasing performance.",
    },
    {
      category: "Options",
      title: "Options Hedging Success",
      content: "Members who implemented our suggested protective put strategy on tech holdings were able to limit drawdowns to under 2% despite the sector's 5% decline midweek.",
    }
  ];

  // Economic events data
  const economicEvents = [
    {
      date: "Apr 15",
      day: "Mon",
      event: "Retail Sales Data (US)",
      time: "8:30 AM EST",
      impact: "Medium Impact"
    },
    {
      date: "Apr 16",
      day: "Tue",
      event: "Industrial Production (US)",
      time: "9:15 AM EST",
      impact: "Medium Impact"
    },
    {
      date: "Apr 17",
      day: "Wed",
      event: "Fed Rate Book",
      time: "2:00 PM EST",
      impact: "High Impact"
    },
    {
      date: "Apr 18",
      day: "Thu",
      event: "Initial Jobless Claims (US)",
      time: "8:30 AM EST",
      impact: "Medium Impact"
    },
    {
      date: "Apr 19",
      day: "Fri",
      event: "Existing Home Sales (US)",
      time: "10:00 AM EST",
      impact: "Medium Impact"
    }
  ];

  // Earnings reports data
  const earningsReports = [
    {
      date: "Apr 15",
      day: "Mon",
      company: "Goldman Sachs (GS)",
      timing: "Before Market Open",
      impact: "High Impact"
    },
    {
      date: "Apr 16",
      day: "Tue",
      company: "Johnson & Johnson (JNJ)",
      timing: "Before Market Open",
      impact: "High Impact"
    },
    {
      date: "Apr 16",
      day: "Tue",
      company: "Netflix (NFLX)",
      timing: "After Market Close",
      impact: "High Impact"
    },
    {
      date: "Apr 17",
      day: "Wed",
      company: "Tesla (TSLA)",
      timing: "After Market Close",
      impact: "High Impact"
    },
    {
      date: "Apr 18",
      day: "Thu",
      company: "American Express (AXP)",
      timing: "Before Market Open",
      impact: "Medium Impact"
    }
  ];

  // Get impact class based on impact level
  const getImpactClass = (impact) => {
    if (impact === "High Impact") {
      return "high-impact";
    } else if (impact === "Medium Impact") {
      return "medium-impact";
    } else {
      return "low-impact";
    }
  };

  return (
    <div className="investment-dashboard container-fluid bg-dark text-white py-4">
      {/* Lessons from Last Week Section */}
      <div className="mb-5">
        <h2 className="section-title mb-4">Lessons from Last Week</h2>
        <div className="row">
          {lessons.map((lesson, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="lesson-card h-100">
                <div className="category-badge">{lesson.category}</div>
                <h3 className="lesson-title">{lesson.title}</h3>
                <p className="lesson-content">{lesson.content}</p>
                <a href="#" className="learn-more">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Next Week Section */}
      <div>
        <h2 className="section-title mb-4">What's Coming Next Week</h2>
        <div className="row">
          {/* Economic Events */}
          <div className="col-md-6 mb-3">
            <div className="events-card">
              <div className="card-header">
                <i className="bi bi-calendar-event me-2"></i>
                Key Economic Events
              </div>
              <div className="card-body p-0">
                <table className="table table-dark mb-0">
                  <tbody>
                    {economicEvents.map((event, index) => (
                      <tr key={index}>
                        <td className="date-column">
                          <div className="date">{event.date}</div>
                          <div className="day">{event.day}</div>
                        </td>
                        <td>
                          <div className="event-title">{event.event}</div>
                          <div className="event-time">{event.time}</div>
                        </td>
                        <td>
                          <span className={`impact-badge ${getImpactClass(event.impact)}`}>
                            {event.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Earnings Reports */}
          <div className="col-md-6 mb-3">
            <div className="events-card">
              <div className="card-header">
                <i className="bi bi-graph-up me-2"></i>
                Key Earnings Reports
              </div>
              <div className="card-body p-0">
                <table className="table table-dark mb-0">
                  <tbody>
                    {earningsReports.map((report, index) => (
                      <tr key={index}>
                        <td className="date-column">
                          <div className="date">{report.date}</div>
                          <div className="day">{report.day}</div>
                        </td>
                        <td>
                          <div className="event-title">{report.company}</div>
                          <div className="event-time">{report.timing}</div>
                        </td>
                        <td>
                          <span className={`impact-badge ${getImpactClass(report.impact)}`}>
                            {report.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonLastWeek;