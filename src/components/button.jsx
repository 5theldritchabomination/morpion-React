import { useState } from 'react';

export default function Buttons(turn) {
  const [played, setPlayed] = useState(null);

  const getClicked = () => {
    if (turn % 2 == 0) {
      setPlayed('X');
    } else {
      setPlayed('O');
    }
  };

  return (
    <button className="bg-blue-200 p-4 rounded-xl size-15" onClick={getClicked}>
      {' '}
      {played}{' '}
    </button>
  );
}
