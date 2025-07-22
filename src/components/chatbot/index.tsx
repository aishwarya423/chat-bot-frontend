import React, { useState } from "react";

import "./index.css";
import ChatMessage, { type ChatMessageI } from "../chatMessage";
import ChatForm from "../chatForm";
import ChatbotIcon from "../chatbotIcon";


const Chatbot: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessageI[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);

 return (
    <div className ={`container ${showChatbot ? "show-chatbot" : ""}`}>
      
      {/* <Dashboard />
      <DashboardTwo />
      <HighchartsBar /> */}


      <button onClick​={()=>setShowChatbot(prev =>!prev)} id="chatbot-toggler">  
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
      {/* Chatbot header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon/>
          <h2 className="logo-text">Clara</h2>
        </div>
        <button onClick​={()=>setShowChatbot(prev =>!prev)}
         className="material-symbols-rounded">
          keyboard_arrow_down</button>
      </div>
      {/* Chatbot body */}
      <div className="chat-body">
      <div className="message bot-message">
          <ChatbotIcon/>
        <p className="message-text">
          Hey there 👋<br/>How can I help you today?
        </p>
      </div>


      {/* Render the chat history dynamically  */}
      {chatHistory.map((chat,index)=>(
        <ChatMessage key={index} chat={chat} />
      ))}

      
      </div>

      {/* Chat Footer */}
      <div className="chat-footer">
    <ChatForm setChatHistory={setChatHistory}/>
      </div>

      </div>
    </div>
  );
};

export default Chatbot;