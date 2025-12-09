import { useState } from 'react';
import buttons from './components/button.jsx';

export default function App() {
  const [score_p1, setScorep1] = useState(0);
  const [score_p2, setScorep2] = useState(0);
  const [turn, setTurn] = useState(0);
  const getTurn = () => {
    if (turn) {
      setTurn(1);
    } else {
      setTurn(0);
    }
  };
  const getClicked = () => {
    if (turn) {
    } else {
    }
  };

  return (
    <>
      <div>
        <input placeholder="Nom du joueur 1"></input>
        <input placeholder="Nom du joueur 2"></input>
        <div className="grid grid-cols-3 gap-6">
          <buttons />
          <buttons />
          <buttons />
          <buttons />
          <buttons />
          <buttons />
          <buttons />
          <buttons />
          <buttons />
        </div>
      </div>
    </>
  );
}
