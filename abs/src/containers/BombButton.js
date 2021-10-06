import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const BombButton = () => {
  const [bombId, setBombId] = useState(null);

  const changeBombId = (e) => {
    const newBombId = Math.floor(Math.random() * 25001);
    setBombId(newBombId);
  };

  return (
    <>
      <div>{bombId}</div>
      <Button onClick={changeBombId}>Grab new bomb</Button>
    </>
  );
};

export default BombButton;
