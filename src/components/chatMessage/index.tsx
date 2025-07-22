import { Link } from "react-router-dom";
import ChatbotIcon from "../chatbotIcon";
import ApplicationStatusCard from "../applicationStatus";
import LoginHelpVideo from "../video";
import AnnuityTable from "../grid";
export interface ChatMessageI {
  role?: string;
  text?: string;
  link?: string;
}

const ChatMessage = ({ chat }: { chat: ChatMessageI }) => {
  console.log(" in chat message?")
  return (
 <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
    {chat.role ==="model" && <ChatbotIcon/>}
        <p className="message-text">
         {chat.text}

{(chat.role ==="model" && chat.link ) && (
  <>
  <br />
  <br />
  
  <ApplicationStatusCard/>  {/*Card */} 
  {/* <Dashboard/>  Bar graph */}
  <br />
  <AnnuityTable/> 
  <br />
<LoginHelpVideo />  {/* {message.type === 'loginHelp' && <LoginHelpVideo />} */}


  <br />
      <Link
        to="/dashboard"
        style={{ color: 'blue', textDecoration: 'underline' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here
      </Link>

    </>
    )}
        </p>
    {/* <Suggestions/>  */}
      </div>  )
};

export default ChatMessage;