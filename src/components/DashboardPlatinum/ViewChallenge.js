// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// function ViewChallenge() {
//   const { id } = useParams();
//   const [challenge, setChallenge] = useState(null);
//   const [answer, setAnswer] = useState("");
//   const [screenshot, setScreenshot] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [isJoined, setIsJoined] = useState(false);
//   const [participantId, setParticipantId] = useState(null);
//   const [existingAnswer, setExistingAnswer] = useState(null);
//   const [existingScreenshot, setExistingScreenshot] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const token = localStorage.getItem("accessToken");
//   const isChallengeOutdated = (challenge) => {
//     return new Date(challenge.end_date) < new Date();
//   };

//   useEffect(() => {
//     const fetchChallenge = async () => {
//       const res = await axios.get(
//         `https://valourwealthdjango-production.up.railway.app/api/challenges/${id}/`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setChallenge(res.data);
//       if (res.data.is_joined) {
//         setIsJoined(true);
//         setParticipantId(res.data.participant_id);
//       }
//     };

//     fetchChallenge();
//   }, [id, token]);

//   useEffect(() => {
//     const fetchParticipantData = async () => {
//       if (!participantId) return;

//       try {
//         const res = await axios.get(
//           `https://valourwealthdjango-production.up.railway.app/api/challenge-participants/${participantId}/`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (res.data.answers || res.data.screenshot_url) {
//           setExistingAnswer(res.data.answers);
//           setExistingScreenshot(res.data.screenshot_url);
//         }
//       } catch (error) {
//         console.error("Failed to fetch participant data", error);
//       }
//     };

//     fetchParticipantData();
//   }, [participantId]);

//   const handleAnswerChange = (e) => setAnswer(e.target.value);
//   const handleScreenshotChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setScreenshot(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("answers", answer);
//     formData.append("screenshots", screenshot);

//     try {
//       await axios.patch(
//         `https://valourwealthdjango-production.up.railway.app/api/challenge-participants/${participantId}/`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSubmitted(true);
//       setExistingAnswer(answer);
//       setExistingScreenshot(previewUrl);
//       setAnswer("");
//       setScreenshot(null);
//       setPreviewUrl("");
//       setTimeout(() => setSubmitted(false), 3000);
//     } catch (err) {
//       console.error("Submission failed", err);
//       alert("Submission failed");
//     }
//   };

//   if (!challenge) return <div>Loading challenge details...</div>;

//   // ⛔ Prevent access to past challenges if not joined
//   if (!isJoined && new Date(challenge.end_date) < new Date()) {
//     return (
//       <div className="alert alert-danger mt-3">
//         This challenge has <strong>expired</strong> and is no longer open to
//         join.
//       </div>
//     );
//   }

//   // 🚫 Block unjoined users on active challenges
//   if (!isJoined) {
//     return (
//       <div className="alert alert-danger mt-3">
//         You must <strong>join this challenge</strong> before accessing details.
//       </div>
//     );
//   }

//   return (
//     <div className="challenge-container">
//       <div className="challenge-header-details">
//         <h2 className="text-white">{challenge.title}</h2>
//         <div className="challenge-meta">
//           <span className="badges bg-danger me-2">
//             Deadline: {challenge.end_date}
//           </span>
//           <span className="badges bg-secondary">
//             Participants: {challenge.participants_count}
//           </span>
//         </div>
//       </div>

//       <div className="challenge-description-details mt-3">
//         <h4 className="text-white">Challenge Description:</h4>
//         <p className="text-white">{challenge.description}</p>
//       </div>

//       <div className="submission-form mt-4">
//         {isChallengeOutdated(challenge) ? (
//           <div className="alert alert-warning mt-3">
//             This challenge has ended. Submissions are closed.
//           </div>
//         ) : existingAnswer || existingScreenshot ? (
//           <div className="submitted-view">
//             <div className="alert alert-info">
//               <strong>
//                 You already submitted a response to this challenge.
//               </strong>
//             </div>
//             <p>
//               <strong>Your Answer:</strong> {existingAnswer}
//             </p>
//             {existingScreenshot && (
//               <div className="screenshot-preview mt-3">
//                 <strong>Uploaded Screenshot:</strong>
//                 <img
//                   src={existingScreenshot}
//                   alt="Screenshot preview"
//                   className="img-thumbnail mt-2"
//                   style={{ maxWidth: "400px" }}
//                 />
//               </div>
//             )}
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3 challenge-form">
//               <textarea
//                 id="answerText"
//                 className="form-control"
//                 rows="6"
//                 value={answer}
//                 onChange={handleAnswerChange}
//                 placeholder="Type your answer here..."
//                 required
//               ></textarea>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="screenshotUpload" className="form-label">
//                 Upload Screenshot:
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="screenshotUpload"
//                 accept="image/*"
//                 onChange={handleScreenshotChange}
//                 required
//               />
//               {previewUrl && (
//                 <div className="screenshot-preview mt-2">
//                   <h5>Preview:</h5>
//                   <img
//                     src={previewUrl}
//                     alt="Screenshot preview"
//                     className="img-thumbnail"
//                     style={{ maxWidth: "400px" }}
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="btn submit-btn"
//               disabled={submitted}
//             >
//               {submitted ? "Submitted!" : "Submit Answer"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ViewChallenge;

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ViewChallenge() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [answer, setAnswer] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [participantId, setParticipantId] = useState(null);
  const [existingAnswer, setExistingAnswer] = useState(null);
  const [existingScreenshot, setExistingScreenshot] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  const isChallengeOutdated = (challenge) => {
    return new Date(challenge.end_date) < new Date();
  };

  useEffect(() => {
    const fetchChallenge = async () => {
      const res = await axios.get(
        `https://valourwealthdjango-production.up.railway.app/api/challenges/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setChallenge(res.data);
      if (res.data.is_joined) {
        setIsJoined(true);
        setParticipantId(res.data.participant_id);
      }
    };

    fetchChallenge();
  }, [id, token]);

  useEffect(() => {
    const fetchParticipantData = async () => {
      if (!participantId) return;

      try {
        const res = await axios.get(
          `https://valourwealthdjango-production.up.railway.app/api/challenge-participants/${participantId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.answers || res.data.screenshot_url) {
          setExistingAnswer(res.data.answers);
          setExistingScreenshot(res.data.screenshot_url);
        }
      } catch (error) {
        console.error("Failed to fetch participant data", error);
      }
    };

    fetchParticipantData();
  }, [participantId]);

  const handleAnswerChange = (e) => setAnswer(e.target.value);
  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("answers", answer);
    formData.append("screenshots", screenshot);

    try {
      await axios.patch(
        `https://valourwealthdjango-production.up.railway.app/api/challenge-participants/${participantId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSubmitted(true);
      setExistingAnswer(answer);
      setExistingScreenshot(previewUrl);
      setAnswer("");
      setScreenshot(null);
      setPreviewUrl("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Submission failed");
    }
  };

  if (!challenge) return <div>Loading challenge details...</div>;

  if (!isJoined && new Date(challenge.end_date) < new Date()) {
    return (
      <div className="alert alert-danger mt-3">
        This challenge has <strong>expired</strong> and is no longer open to
        join.
      </div>
    );
  }

  if (!isJoined) {
    return (
      <div className="alert alert-danger mt-3">
        You must <strong>join this challenge</strong> before accessing details.
      </div>
    );
  }

  return (
    <div className="challenge-container">
      <div className="challenge-header-details">
        <h2 className="text-white">{challenge.title}</h2>
        <div className="challenge-meta">
          <span className="badges bg-danger me-2">
            Deadline: {challenge.end_date}
          </span>
          <span className="badges bg-secondary">
            Participants: {challenge.participants_count}
          </span>
        </div>
      </div>

      <div className="challenge-description-details mt-3">
        <h4 className="text-white">Challenge Description:</h4>
        <p className="text-white">{challenge.description}</p>
      </div>

      <div className="submission-form mt-4">
        {isChallengeOutdated(challenge) ? (
          <div className="alert alert-warning mt-3">
            This challenge has ended. Submissions are closed.
          </div>
        ) : existingAnswer || existingScreenshot ? (
          <div className="submitted-view">
            <div className="alert alert-info">
              <strong>
                You already submitted a response to this challenge.
              </strong>
            </div>
            <p>
              <strong>Your Answer:</strong> {existingAnswer}
            </p>
            {existingScreenshot && (
              <div className="screenshot-preview mt-3">
                <strong>Uploaded Screenshot:</strong>
                <img
                  src={existingScreenshot}
                  alt="Screenshot preview"
                  className="img-thumbnail mt-2"
                  style={{ maxWidth: "400px" }}
                />
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3 challenge-form">
              <textarea
                id="answerText"
                className="form-control"
                rows="6"
                value={answer}
                onChange={handleAnswerChange}
                placeholder="Type your answer here..."
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="screenshotUpload" className="form-label">
                Upload Screenshot:
              </label>
              <input
                type="file"
                className="form-control"
                id="screenshotUpload"
                accept="image/*"
                onChange={handleScreenshotChange}
                required
              />
              {previewUrl && (
                <div className="screenshot-preview mt-2">
                  <h5>Preview:</h5>
                  <img
                    src={previewUrl}
                    alt="Screenshot preview"
                    className="img-thumbnail"
                    style={{ maxWidth: "400px" }}
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn submit-btn"
              disabled={submitted}
            >
              {submitted ? "Submitted!" : "Submit Answer"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ViewChallenge;
