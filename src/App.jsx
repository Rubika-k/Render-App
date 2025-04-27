import React, { useState } from 'react';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(prevShowContent => !prevShowContent);
  };

  return (
    <div className="app-container">
      <h1>Conditional Rendering</h1>
      <button className="toggle-button" onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>
      {showContent && (
        <div className="content">
          <p>Hello Rubzzz!</p>
        </div>
      )}
    </div>
  );
}

export default App;
