import { useState, useEffect } from "react";

const Home = () => {
  const [bombId, setBombId] = useState(0);

  return <div>{bombId}</div>;
};

export default Home;
