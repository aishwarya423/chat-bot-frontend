import React from 'react';

const LoginHelpVideo = () => {
  // return (
  //   <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
  //     <p style={{ marginBottom: '10px' }}>Here’s a helpful video on how to log in:</p>
  //     https://www.youtube.com/embed/dQw4w9WgXcQ
  //   </div>
  // );

const messages = [{
        sender: 'bot',
        text: 'Here’s a helpful video on how to log in:',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        }
      ]

    return (
    <div style={{ width: '300px', margin: '400', fontFamily: 'Arial' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '150px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
         {msg.text}
            {msg.videoUrl && (
              <div style={{ marginTop: '10px' }}>
                <iframe
                  width="100%"
                  height="200"
                  src={msg.videoUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
       
    </div>
  );
};

export default LoginHelpVideo;





// I'm not sure about that. Try asking something else!
  //  <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong>