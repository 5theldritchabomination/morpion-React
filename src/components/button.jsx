export default function Buttons() {
  const getClicked = () => {
    if (turn) {
    } else {
    }
  };
  return (
    <button
      className="bg-blue-200 p-4 rounded-xl size-15"
      onClick={getClicked}
    ></button>
  );
}
