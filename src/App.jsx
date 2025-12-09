import { useState } from 'react';
import Buttons from './components/button.jsx';

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

  return (
    <>
      <div>
        <input placeholder="Nom du joueur 1"></input>
        <input placeholder="Nom du joueur 2"></input>
        <div className="grid grid-cols-3 gap-6">
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
          <Buttons turn={turn} />
        </div>
      </div>
    </>
  );
}
