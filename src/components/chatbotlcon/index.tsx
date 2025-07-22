import chatIcon from "../../assets/react.svg";

const ChatbotIcon: React.FC = () => {
  return (
    <a href="https://react.dev" target="_blank">
      <img src={chatIcon} className="logo react" alt="React logo" />
    </a>
  );
};

export default ChatbotIcon;
