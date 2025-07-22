import React, { useCallback, useEffect, useState } from "react";
import type { ChatFormI } from "../chatForm";
import "./index.css";

interface SuggestionItem {
  id: string;
  label: string;
  description?: string;
  type?: "chip" | "card" | "contact" | "video";
}

const defaultSuggestions: SuggestionItem[] = [
  {
    id: "pension",
    label: "Fetch pension details",
    description: "View your pension summary",
    type: "chip",
  },
  {
    id: "track",
    label: "Track annuity application status",
    description: "Check your annuity status",
    type: "chip",
  },
  {
    id: "adviser",
    label: "Connect me to an adviser",
    description: "Speak with an adviser",
    type: "contact",
  },
  {
    id: "video",
    label: "Sample video link",
    description: "Watch a sample video",
    type: "video",
  },
];

const Suggestions = ({ setChatHistory }: ChatFormI) => {
  const [showSuggestion, setShowSuggestion] = useState(true);

  useEffect(() => {
    setShowSuggestion(true);
  }, []);

  const handleSuggestionClick = useCallback(
    (item: SuggestionItem) => {
      setChatHistory((history) => [
        ...history,
        { role: "user", text: item.label },
      ]);
      setShowSuggestion(false);
    },
    [setChatHistory]
  );

  return (
    <div className="suggestions-wrapper">
      {showSuggestion ? (
        <div className="suggestions-container animate-fade-in">
          <button
            className="close-icon material-symbols-rounded"
            onClick={() => setShowSuggestion(false)}
          >
            close
          </button>
          <h4 className="suggestions-heading">Quick Actions</h4>
          <div className="suggestions-list">
            {defaultSuggestions.map((item) => (
              <button
                key={item.id}
                className={`suggestion-button ${item.type}`}
                onClick={() => handleSuggestionClick(item)}
              >
                <span className="suggestion-title">{item.label}</span>
                {item.description && (
                  <span className="suggestion-desc">{item.description}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          className="toggle-suggestions-btn"
          onClick={() => setShowSuggestion(true)}
        >
          Show Suggestions
        </button>
      )}
    </div>
  );
};

export default Suggestions;
