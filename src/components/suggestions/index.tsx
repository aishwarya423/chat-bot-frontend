import React, { useState } from 'react';
import type { ChatFormI } from '../chatForm';

const suggestedQuestions = [
  // displaythe grid data
  "Fetch pension details",
  //simple Ui Card
  "Track annuity application status",
//card with name, email , contact
  "Connect me to an adviser",

//video 
  "Sample video link",
  //
];




const Suggestions= ({setChatHistory}:ChatFormI) => {
  const [showSuggestion, setShowSuggestion] = useState(true)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [input, setInput] = useState('');

  const handleSuggestionClick = (question:string) => {
    setInput(question);
    console.log("🚀 ~ handleSuggestionClick ~ question:", question)
    setChatHistory(history => [...history,{role: "user",text:question}]);
    setShowSuggestion(false)
  };

//   const containerStyles={
//     width: '100%',
//       maxWidth: '500px',
//       margin: '0 auto',
//       padding: '1rem',
//       fontFamily: 'Arial, sans-serif',
//       border : '2px solid green',
//       // display:'none'
//       display: `${ (showSuggestion) ? 'block' : 'none'}`,
//       position: 'relative'
//   }

  const styles = {
    container: {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
      border : '2px solid green',
      // display:'none'
      display: `${ (showSuggestion) ? 'block' : 'none'}`,
      position: 'relative'
    },
    suggestions: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    suggestionButton: {
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '20px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    form: {
      display: 'flex',
      gap: '0.5rem',
    },
    input: {
      flex: 1,
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    submitButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    closeIcon:{
      position:'absolute',
      right:'10px',
      border:'1px solid red',
      borderRadius:'50%'
       
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
      // border : '2px solid green',
      // display:'none'
      display: `${ (showSuggestion) ? 'block' : 'none'}`,
      position: 'relative'
    } }>
              <span className="material-symbols-rounded"  style={{
      position:'absolute',
      right:'10px',
      border:'1px solid red',
      borderRadius:'50%'
       
    }} 
            onClick​={() => setShowSuggestion(false)}
              
              >close</span>

      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem',
    }}>
        {suggestedQuestions.map((q, index) => (
          <button
            key={index}
            style={styles.suggestionButton}
            onClick​={() => handleSuggestionClick(q)}

           >
            {q}
          </button>
        ))}
      </div>
     
    </div>
  );
};

export default Suggestions;