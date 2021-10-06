import { useState, useEffect } from "react";

import BombButton from "../components/BombButton";

const Home = () => {
  const [bombId, setBombId] = useState(null);

  return (
    <>
      {bombId}
      <BombButton bombId={bombId} setBombId={setBombId} />
    </>
  );
};

export default Home;
