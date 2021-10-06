import { useState } from "react";
import React from "react";
import ResponsiveImage from "./ResponsiveImage";
import BombButton from "./BombButton";
import BombGang from "../assets/abs_gang.png";

const Bomb = () => {
  const [bombId, setBombId] = useState(null);
  const [bombImageSrc, setBombImageSrc] = useState(BombGang);

  const updateBomb = (newBombId) => {
    console.log(newBombId);
    setBombId(newBombId);
    updateBombImg(newBombId);
  };

  const updateBombImg = (id) => {
    setBombImageSrc(
      `https://nervous.mypinata.cloud/ipfs/QmatHos3sX8dDpzdfaDvpn21vQ8q2xSXHhzC5P7WfgxHg2/${id}.png/`
    );
  };

  return (
    <>
      <ResponsiveImage src={bombImageSrc} width={400} height={400} />
      <BombButton updateBomb={updateBomb} />
    </>
  );
};

export default Bomb;
