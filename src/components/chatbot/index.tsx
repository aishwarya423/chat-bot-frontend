import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import ChatMessage, { type ChatMessageI } from "../chatMessage";
import ChatForm from "../chatForm";
import ChatbotIcon from "../chatbotlcon";

const Chatbot: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessageI[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when chatHistory changes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      {/* Chatbot Popup */}
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Clara</h2>
          </div>
          <button
            onClick={() => setShowChatbot(false)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chat Body */}
        <div className="chat-body" ref={chatBodyRef}>
          {chatHistory.length === 0 && (
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hey there 👋
                <br />
                How can I help you today?
              </p>
            </div>
          )}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chat Footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
