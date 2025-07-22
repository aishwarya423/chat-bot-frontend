import { Link } from "react-router-dom";
import ApplicationStatusCard from "../applicationStatus";
import LoginHelpVideo from "../video";
import AnnuityTable from "../grid";
import ChatbotIcon from "../chatbotlcon";
import "./index.css";

export interface ChatMessageI {
  role?: string;
  text?: string;
  link?: string;
}

const ChatMessage = ({ chat }: { chat: ChatMessageI }) => {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <div className="message-text">
        {chat.text}

        {chat.role === "model" && chat.link && (
          <div className="message-content">
            <ApplicationStatusCard />
            <AnnuityTable />
            <LoginHelpVideo />
            <Link
              to={chat.link}
              className="chat-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
