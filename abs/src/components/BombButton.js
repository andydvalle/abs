import Button from "react-bootstrap/Button";

const BombButton = ({ updateBomb }) => {
  const changeBombId = (e) => {
    const newBombId = Math.floor(Math.random() * 25001);
    updateBomb(newBombId);
  };

  return (
    <>
      <Button onClick={changeBombId}>Load new bomb</Button>
    </>
  );
};

export default BombButton;
