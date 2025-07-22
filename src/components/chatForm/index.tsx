import React, { useRef } from "react";
import type { ChatMessageI } from "../chatMessage";
import Suggestions from "../suggestions";

export interface ChatFormI {
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessageI[]>>;
}

const ChatForm = ({ setChatHistory }: ChatFormI) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    // Update chat history with user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Add thinking placeholder
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
    }, 600);

    // Simulate bot response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        {
          role: "model",
          link: "/dashboard",
          text: `Here’s a customized dashboard overview tailored for your personal banking account.`,
        },
      ]);
    }, 1200);
  };

  return (
    <>
      {/* Suggestions above input */}
      <Suggestions setChatHistory={setChatHistory} />

      <form onSubmit={handleFormSubmit} className="chat-form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="message-input"
          required
        />
        <button type="submit" className="material-symbols-rounded">
          arrow_upward
        </button>
      </form>
    </>
  );
};

export default ChatForm;
