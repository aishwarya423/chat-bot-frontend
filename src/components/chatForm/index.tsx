import React, { useRef } from "react";
import type { ChatMessageI } from "../chatMessage";
import Suggestions from "../suggestions";

export interface ChatFormI {
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessageI[]>>;
}
const ChatForm = ({ setChatHistory }: ChatFormI) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log("am i here");
      const userMessage = inputRef.current.value.trim();
      console.log("user mesasge", userMessage);
      if (!userMessage) return;
      else {
        inputRef.current.value = "";

        //Update chat history with user's message
        setChatHistory((history) => [
          ...history,
          { role: "user", text: userMessage },
        ]);

        // Add thinking place holder to bot's response
        setTimeout(
          () =>
            setChatHistory((history) => [
              ...history,
              { role: "model", text: "Thinking..." },
            ]),
          600
        );
        setTimeout(
          () =>
            setChatHistory((history) => [
              ...history,
              {
                role: "model",
                link: "/dashboard",
                text: `Here’s a customized dashboard overview tailored for your personal banking account.${" "}`,
              },
            ]),
          600
        );
      }
    }
  };
  return (
    <>
    {/* <input>hiii</input> */}
    {/* <textarea name="g" id="1">Give me a customised dashboard for my account overview</textarea> */}
        <Suggestions setChatHistory={setChatHistory}/> 
    
    <form action="#" className="chat-form" >
        <input ref = {inputRef} type="text" placeholder = "Message..." className="message-input" required/>
     
        <button onClick​={e=>{handleFormSubmit(e)}} className="material-symbols-rounded">arrow_upward</button>
     
      </form>
    </>

  )
};

export default ChatForm;

// Suggested prompts
//Give me a customised dashboard for my account overview