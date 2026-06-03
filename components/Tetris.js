import React, { useState } from 'react';

const Tetris = () => {
  const [score, setScore] = useState(0);

  const handlePowerUp = async () => {
    // Adresse de test
    const wallet = "0x0000000000000000000000000000000000000000"; 
    
    try {
      const res = await fetch(`/api/check-transfer?wallet=${wallet}`);
      const data = await res.json();
      
      if (data.success) {
        alert("TALON détectés ! Bonus activé !");
        setScore(score + 100);
      } else {
        alert("Aucune transaction trouvée.");
      }
    } catch (error) {
      alert("Erreur de connexion.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>TALON Tetris</h1>
      <p>Score: {score}</p>
      <div style={{ 
        width: '200px', 
        height: '400px', 
        border: '2px solid #333', 
        margin: '0 auto',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>Game Board</p>
      </div>
      <button 
        style={{ 
          marginTop: '20px', 
          padding: '15px 30px', 
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={handlePowerUp}
      >
        Unlock Power-up (100 TALON)
      </button>
    </div>
  );
};

export default Tetris;
