import React from "react";
import "./index.css";

const LoginHelpVideo = () => {
  const messages = [
    {
      sender: "bot",
      text: "Here’s a helpful video on how to log in:",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="video-message-wrapper">
      {messages.map((msg, index) => (
        <div key={index} className="video-message">
          <p className="video-text">{msg.text}</p>
          {msg.videoUrl && (
            <div className="video-container">
              <iframe
                src={msg.videoUrl}
                title="Login Help Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LoginHelpVideo;
