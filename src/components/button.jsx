import { useState } from 'react';

export default function Buttons(turn) {
  const [played, setPlayed] = useState(0);
  const getClicked = () => {
    if (turn) {
      setPlayed('1');
    } else {
      setPlayed('2');
    }
  };

  return (
    <button className="bg-blue-200 p-4 rounded-xl size-15" onClick={getClicked}>
      {' '}
      {played}{' '}
    </button>
  );
}
