// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/ChatFeature.css";

// const ChatFeature = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [assignedAnalyst, setAssignedAnalyst] = useState(null);
//   const [conversationId, setConversationId] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const API_BASE_URL = process.env.REACT_APP_API_URL;
//   const accessToken = localStorage.getItem("accessToken");

//   const fetchAssignedAnalyst = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}api/assigned-analyst/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setAssignedAnalyst(res.data);
//       startAnalystChat(res.data.id);
//     } catch (err) {
//       console.error("Failed to fetch assigned analyst", err);
//     }
//   };

//   const startAnalystChat = async (analystId) => {
//     try {
//       const res = await axios.post(
//         `${API_BASE_URL}api/chat/start/`,
//         { analyst_id: analystId },
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       const convo = res.data;
//       setConversationId(convo.id);
//       setMessages(convo.messages || []);
//     } catch (err) {
//       console.error("Failed to start chat", err);
//     }
//   };

//   const fetchMessages = async () => {
//     if (!conversationId) return;
//     try {
//       const res = await axios.get(
//         `${API_BASE_URL}api/chat/analyst-conversations/`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       const convo = res.data.find((c) => c.id === conversationId);
//       setMessages(convo?.messages || []);
//     } catch (err) {
//       console.error("Error fetching messages", err);
//     }
//   };

//   const sendMessage = async () => {
//     if (!inputMessage.trim() || !conversationId) return;
//     try {
//       await axios.post(
//         `${API_BASE_URL}api/chat/send/`,
//         { conversation: conversationId, content: inputMessage },
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setInputMessage("");
//       fetchMessages();
//     } catch (err) {
//       console.error("Error sending message", err);
//     }
//   };

//   useEffect(() => {
//     fetchAssignedAnalyst();
//   }, []);

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/user/profile/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Failed to fetch user", err);
//       }
//     };
//     fetchUser();
//   }, [accessToken]);

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   return (
//     <div className="chat-container-feature">
//       {isChatOpen ? (
//         <div className="chat-box">
//           <div className="chat-header">
//             <div className="header-left-feature">
//               <div className="profile-icon">
//                 <img
//                   src={assignedAnalyst?.profile_photo_url || "/logo-circle.png"}
//                   alt="Analyst"
//                 />
//               </div>
//               <div className="header-text">
//                 <h2>{assignedAnalyst?.username || ""}</h2>
//                 <p>Secure Channel</p>
//               </div>
//             </div>
//             <div className="header-actions">
//               <button
//                 className="action-button"
//                 onClick={() => setIsChatOpen(false)}
//               >
//                 <i className="fas fa-times"></i>
//               </button>
//             </div>
//           </div>

//           <div className="chat-messages">
//             {messages.map((msg) => {
//               const isCurrentUser = msg.sender_name === userData?.username;
//               const profilePhoto = isCurrentUser
//                 ? userData?.profile_photo_url
//                 : msg.sender_profile_photo_url;
//               return (
//                 <div
//                   key={msg.id}
//                   className={`message d-flex ${
//                     isCurrentUser
//                       ? "justify-content-end"
//                       : "justify-content-start"
//                   }`}
//                 >
//                   {!isCurrentUser && (
//                     <img
//                       src={profilePhoto || "/default-user.png"}
//                       className="chat-avatar me-2"
//                       alt="Sender"
//                     />
//                   )}

//                   <div
//                     className={`message-bubble ${
//                       isCurrentUser
//                         ? "bg-dark text-white"
//                         : "bg-light text-dark"
//                     }`}
//                     style={{ padding: 10, borderRadius: 10, maxWidth: "70%" }}
//                   >
//                     <div className="sender-name fw-bold mb-1">
//                       {isCurrentUser ? "You" : msg.sender_name}
//                     </div>
//                     <div className="message-text-feature">{msg.content}</div>
//                     <div className="message-time text-end small">
//                       {new Date(msg.timestamp).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                         hour12: true,
//                       })}
//                     </div>
//                   </div>

//                   {isCurrentUser && (
//                     <img
//                       src={profilePhoto || "/default-user.png"}
//                       className="chat-avatar ms-2"
//                       alt="Me"
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="encrypted-message">
//             <p>Your chat is encrypted and secure</p>
//           </div>

//           <div className="chat-input-feature">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//             />
//             <div className="input-actions">
//               <button
//                 className={`send-button-feature ${
//                   inputMessage ? "active" : ""
//                 }`}
//                 onClick={sendMessage}
//               >
//                 <i className="fas fa-paper-plane"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="chat-bubble" onClick={() => setIsChatOpen(true)}>
//           <div className="chat-bubble-icon">
//             <i className="fas fa-comments"></i>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatFeature;

// components/DashboardPlatinum/ChatFeature.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/ChatFeature.css";

const ChatFeature = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [userData, setUserData] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");

  const fetchUser = async () => {
    if (!accessToken) return;
    try {
      const res = await axios.get(`${API_BASE_URL}api/user/profile/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUserData(res.data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}api/chat/my-conversations/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.data.length > 0) {
        const convo = res.data[0];
        setConversationId(convo.id);
        setMessages(convo.messages || []);
      }
    } catch (err) {
      console.error("Error fetching group chat messages", err);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;
    try {
      await axios.post(
        `${API_BASE_URL}api/chat/send/`,
        { conversation: conversationId, content: inputMessage },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setInputMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Error sending message", err);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchMessages();
    const interval = setInterval(fetchMessages, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-container-feature">
      {isChatOpen ? (
        <div className="chat-box">
          <div className="chat-header">
            <div className="header-left-feature">
              <div className="profile-icon">
                <img
                  src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/profile_photos/dashboard-logo_-_Copy_59nlLwW.png"
                  alt="Group"
                />
              </div>
              <div className="header-text">
                <h2>Platinum Group Chat</h2>
                <p>Talk with other platinum members</p>
              </div>
            </div>
            <div className="header-actions">
              <button
                className="action-button"
                onClick={() => setIsChatOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => {
              const isCurrentUser = msg.sender_name === userData?.username;
              const profilePhoto = isCurrentUser
                ? userData?.profile_photo_url
                : msg.sender_profile_photo_url;

              return (
                <div
                  key={msg.id}
                  className={`message d-flex ${
                    isCurrentUser
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  {!isCurrentUser && (
                    <img
                      src={profilePhoto || "/default-user.png"}
                      className="chat-avatar me-2"
                      alt="Sender"
                    />
                  )}
                  <div
                    className={`message-bubble ${
                      isCurrentUser
                        ? "bg-dark text-white"
                        : "bg-light text-dark"
                    }`}
                  >
                    <div className="sender-name fw-bold mb-1">
                      {isCurrentUser ? "You" : msg.sender_name}
                    </div>
                    <div className="message-text-feature">{msg.content}</div>
                    <div className="message-time text-end small">
                      {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </div>
                  {isCurrentUser && (
                    <img
                      src={profilePhoto || "/default-user.png"}
                      className="chat-avatar ms-2"
                      alt="Me"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="chat-input-feature">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="input-actions">
              <button
                className={`send-button-feature ${
                  inputMessage ? "active" : ""
                }`}
                onClick={sendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-bubble" onClick={() => setIsChatOpen(true)}>
          <div className="chat-bubble-icon">
            <i className="fas fa-users"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatFeature;
