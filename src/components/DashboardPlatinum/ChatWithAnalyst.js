import axios from "axios";
import { MessageSquare, Paperclip, Search, Send, Smile } from "lucide-react";
import { useEffect, useState } from "react";

const ChatWithAnalyst = () => {
  const [selectedAnalyst, setSelectedAnalyst] = useState(null);
  const [message, setMessage] = useState("");
  const [analysts, setAnalysts] = useState([]);
  const [chatMessages, setChatMessages] = useState({});

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://backend-production-1e63.up.railway.app/api/analyst-chat/ensure/",
          { withCredentials: true }
        );
        setAnalysts(response.data); // set from backend
      } catch (err) {
        console.error("Failed to fetch analyst chats:", err);
      }
    };

    fetchChats();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedAnalyst) return;

      try {
        const res = await axios.get(
          `https://backend-production-1e63.up.railway.app/api/analyst-chat/${selectedAnalyst.id}/`,
          { withCredentials: true }
        );
        setChatMessages({
          ...chatMessages,
          [selectedAnalyst.id]: res.data.messages,
        });
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [selectedAnalyst]);

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedAnalyst) return;

    try {
      const response = await axios.post(
        "https://backend-production-1e63.up.railway.app/api/analyst-chat/message/",
        {
          chat: selectedAnalyst.id,
          content: message,
        },
        { withCredentials: true }
      );

      // Append new message to chat
      setChatMessages((prev) => ({
        ...prev,
        [selectedAnalyst.id]: [
          ...(prev[selectedAnalyst.id] || []),
          response.data,
        ],
      }));
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="">
      <div
        className="card border-0 shadow-lg"
        style={{
          height: "650px",
          backgroundColor: "#1f1f1f",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div className="row g-0 h-100">
          {/* Enhanced Sidebar - Analyst List */}
          <div
            className="col-4"
            style={{
              backgroundColor: "#2d2d30",
              borderRight: "1px solid #404040",
            }}
          >
            {/* Enhanced Header */}
            <div
              className="p-4 border-bottom"
              style={{
                borderColor: "#404040",
                background: "linear-gradient(135deg, #2d2d30 0%, #3a3a3d 100%)",
              }}
            >
              <h5 className="text-white mb-0 fw-bold">Analyst Control Panel</h5>
            </div>

            {/* Enhanced Search */}
            <div className="p-3">
              <div className="position-relative">
                <Search
                  size={18}
                  className="position-absolute text-white"
                  style={{
                    top: "50%",
                    left: "12px",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                />
                <input
                  type="text"
                  className="form-control border-0 ps-5 py-2"
                  placeholder="Search platinum user..."
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "25px",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {/* Enhanced Analyst List */}
            <div className="overflow-auto" style={{ height: "480px" }}>
              {analysts.map((analyst) => (
                <div
                  key={analyst.id}
                  className={`p-3 position-relative transition-all ${
                    selectedAnalyst?.id === analyst.id
                      ? "selected-analyst"
                      : "analyst-item"
                  }`}
                  style={{
                    cursor: "pointer",
                    borderBottom: "1px solid #404040",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setSelectedAnalyst(analyst)}
                >
                  <div className="d-flex align-items-center">
                    <div className="position-relative me-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                        style={{
                          width: "48px",
                          height: "48px",
                          background:
                            selectedAnalyst?.id === analyst.id
                              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              : "linear-gradient(135deg, #4a4a4a 0%, #5a5a5a 100%)",
                          fontSize: "20px",
                          border: "3px solid transparent",
                          backgroundClip: "padding-box",
                        }}
                      >
                        {analyst.avatar}
                      </div>
                      {analyst.online && (
                        <span
                          className="position-absolute bg-success rounded-circle shadow-sm"
                          style={{
                            width: "12px",
                            height: "12px",
                            bottom: "2px",
                            right: "2px",
                            border: "2px solid #2d2d30",
                          }}
                        ></span>
                      )}
                    </div>
                    <div className="flex-grow-1 min-width-0">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="text-white mb-0 fw-semibold text-truncate">
                          {analyst.name}
                        </h6>
                        <small
                          className="text-white"
                          style={{ fontSize: "12px" }}
                        >
                          {analyst.time}
                        </small>
                      </div>
                      <p
                        className="text-white mb-0 text-truncate"
                        style={{ fontSize: "13px", lineHeight: "1.3" }}
                      >
                        {analyst.lastMessage}
                      </p>
                      <small
                        className="text-white"
                        style={{ fontSize: "11px" }}
                      >
                        {analyst.role}
                      </small>
                    </div>
                    {analyst.unread > 0 && (
                      <span
                        className="badge rounded-pill ms-2 shadow-sm"
                        style={{
                          backgroundColor: "#4285f4",
                          fontSize: "11px",
                          minWidth: "20px",
                          height: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {analyst.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Chat Area */}
          <div
            className="col-8 d-flex flex-column"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {selectedAnalyst ? (
              <>
                {/* Enhanced Chat Header */}
                <div
                  className="p-4 d-flex align-items-center justify-content-between shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #2d2d30 0%, #3a3a3d 100%)",
                    borderBottom: "1px solid #404040",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="position-relative me-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center shadow"
                        style={{
                          width: "42px",
                          height: "42px",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          fontSize: "18px",
                        }}
                      >
                        {selectedAnalyst.avatar}
                      </div>
                      {selectedAnalyst.online && (
                        <span
                          className="position-absolute bg-success rounded-circle"
                          style={{
                            width: "10px",
                            height: "10px",
                            bottom: "1px",
                            right: "1px",
                            border: "2px solid #2d2d30",
                          }}
                        ></span>
                      )}
                    </div>
                    <div>
                      <h6 className="text-white mb-0 fw-semibold">
                        {selectedAnalyst.name}
                      </h6>
                      <small className="text-success fw-medium">
                        {selectedAnalyst.online
                          ? "Online"
                          : "Last seen recently"}
                      </small>
                    </div>
                  </div>
                  {/* <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      style={{ width: "38px", height: "38px" }}
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      style={{ width: "38px", height: "38px" }}
                    >
                      <Video size={16} />
                    </button>
                    <button
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      style={{ width: "38px", height: "38px" }}
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div> */}
                </div>

                {/* Enhanced Messages Area */}
                <div
                  className="flex-grow-1 p-4 overflow-auto"
                  style={{
                    background:
                      "linear-gradient(180deg, #1a1a1a 0%, #1f1f1f 100%)",
                    backgroundImage: `url(
                      "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E"
                    )`,
                    maxHeight: "470px",
                  }}
                >
                  {chatMessages[selectedAnalyst.id]?.map((msg, index) => (
                    <div
                      key={msg.id}
                      className={`mb-4 d-flex ${
                        msg.isUser
                          ? "justify-content-end"
                          : "justify-content-start"
                      }`}
                    >
                      <div
                        className="d-flex align-items-end max-width-75"
                        style={{
                          animation: `slideIn 0.3s ease ${
                            index * 0.1
                          }s backwards`,
                        }}
                      >
                        {!msg.isUser && (
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-2 shadow-sm"
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                "linear-gradient(135deg, #4a4a4a 0%, #5a5a5a 100%)",
                              fontSize: "14px",
                              flexShrink: 0,
                            }}
                          >
                            {selectedAnalyst.avatar}
                          </div>
                        )}
                        <div>
                          <div
                            className={`px-4 py-3 rounded-4 shadow-sm position-relative ${
                              msg.isUser
                                ? "text-white user-message"
                                : "text-white analyst-message"
                            }`}
                            style={{
                              background: msg.isUser
                                ? "linear-gradient(135deg, #4285f4 0%, #34a853 100%)"
                                : "linear-gradient(135deg, #404040 0%, #4a4a4a 100%)",
                              maxWidth: "280px",
                              wordWrap: "break-word",
                              fontSize: "14px",
                              lineHeight: "1.4",
                            }}
                          >
                            {msg.message}
                          </div>
                          <small
                            className={`text-white d-block mt-1 ${
                              msg.isUser ? "text-end" : "text-start"
                            }`}
                            style={{ fontSize: "11px" }}
                          >
                            {msg.time}
                          </small>
                        </div>
                        {msg.isUser && (
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center ms-2 shadow-sm"
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
                              fontSize: "14px",
                              flexShrink: 0,
                              color: "white",
                            }}
                          >
                            👤
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Message Input */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: "#2d2d30",
                    borderTop: "1px solid #404040",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <button
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <Paperclip size={16} />
                    </button>
                    <div className="flex-grow-1 position-relative">
                      <input
                        type="text"
                        className="form-control border-0 pe-5"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        style={{
                          backgroundColor: "#404040",
                          color: "#fff",
                          borderRadius: "25px",
                          fontSize: "14px",
                          padding: "12px 50px 12px 16px",
                        }}
                      />
                      <button className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2">
                        <Smile size={18} className="text-white" />
                      </button>
                    </div>
                    <button
                      className="btn rounded-circle p-2 shadow-sm"
                      type="button"
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      style={{
                        width: "40px",
                        height: "40px",
                        background: message.trim()
                          ? "linear-gradient(135deg, #4285f4 0%, #34a853 100%)"
                          : "#404040",
                        border: "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Send size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Enhanced No Chat Selected */
              <div
                className="d-flex align-items-center justify-content-center h-100"
                style={{
                  background:
                    "linear-gradient(180deg, #1a1a1a 0%, #1f1f1f 100%)",
                }}
              >
                <div className="text-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-lg"
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <MessageSquare size={40} className="text-white" />
                  </div>
                  <h5 className="text-white mb-2 fw-semibold">
                    select the platinum member to response and chat with it
                  </h5>
                  <p className="text-white">
                    Choose from the list to begin your conversation to help
                    platinum members
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .max-width-75 {
          max-width: 75%;
        }
        .min-width-0 {
          min-width: 0;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .analyst-item:hover {
          background-color: #383838 !important;
          transform: translateX(2px);
        }
        .selected-analyst {
          background: #161515;
          transform: translateX(4px);
        }
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(66, 133, 244, 0.25);
          border-color: #4285f4;
          background-color: #4a4a4a !important;
          color: #fff;
        }
        .btn-outline-light:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .user-message::after {
          content: "";
          position: absolute;
          right: -6px;
          bottom: 8px;
          width: 0;
          height: 0;
          border-left: 6px solid #4285f4;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        .analyst-message::before {
          content: "";
          position: absolute;
          left: -6px;
          bottom: 8px;
          width: 0;
          height: 0;
          border-right: 6px solid #404040;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #2d2d30;
        }
        ::-webkit-scrollbar-thumb {
          background: #4a4a4a;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #5a5a5a;
        }
      `}</style>
    </div>
  );
};

export default ChatWithAnalyst;
