import React, { useState } from "react";
import "./Hero.scss";
import "./Villain.scss";
import "./HeroAndVill.scss";
export default function HeroAndVill() {
  function Hero() {
    return (
      <img
        className="Hero"
        src="https://cdn.pixabay.com/photo/2014/04/03/10/00/panda-309548_960_720.png"
        alt="panda"
      />
      
    );
  }

  function Villain() {
    return (
      <img
        className="Villain"
        src="https://cdn.pixabay.com/photo/2016/03/31/20/31/alien-1295828_960_720.png"
        alt="bandit"
      />
    );
  }
  return (
    <div className="HeroAndVill">
      {" "}
      {Hero()} {Villain()}{" "}
    </div>
  );
}
