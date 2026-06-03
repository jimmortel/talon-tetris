import React, { useState } from 'react';

const Tetris = () => {
  const [score, setScore] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>TALON Tetris</h1>
      <p>Score: {score}</p>
      <div style={{ 
        width: '200px', 
        height: '400px', 
        border: '2px solid #333', 
        margin: '0 auto',
        backgroundColor: '#f0f0f0' 
      }}>
        {/* Le moteur de jeu sera ici */}
        <p>Game Board Placeholder</p>
      </div>
      <button 
        style={{ marginTop: '20px', padding: '10px 20px' }}
        onClick={() => alert("Checking TALON transaction...")}
      >
        Unlock Power-up (100 TALON)
      </button>
    </div>
  );
};

export default Tetris;
