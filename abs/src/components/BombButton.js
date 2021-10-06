import Button from "react-bootstrap/Button";

const BombButton = ({ bombId, setBombId }) => {
  const changeBombId = (e) => {
    const newBombId = Math.floor(Math.random() * 25001);
    setBombId(newBombId);
  };

  return (
    <>
      <Button onClick={changeBombId}>Grab new bomb</Button>
    </>
  );
};

export default BombButton;
