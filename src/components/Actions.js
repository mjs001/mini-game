import React, { useState, UseEffect } from "react";
import "./Actions.scss";
export default function AllActions() {
  const [HHealth, setHHealth] = useState(100);
  const [VHealth, setVHealth] = useState(250);
  const [HeroT, setHeroT] = useState(true);
  

  const VHurt = e => {
    setVHealth(VHealth - 45);
    setHeroT(false);
    setTimeout(() => {
      setHHealth(HHealth - 20);
      setHeroT(true);
    }, 3000);
  };
  const Defend = e => {
    setHeroT(false);
    setTimeout(() => {
      setHHealth(HHealth - 10);
      setHeroT(true);
    }, 3000);
  };

  const Heal = e => {
    setHHealth(HHealth + 70);
    setHeroT(false);
    setTimeout(() => {
      setHHealth(HHealth - 20);
      setHeroT(true);
    }, 3000);
  };

  return (
    <div className="Actions">
      <button onClick={VHurt}>Attack</button>
      <button onClick={Defend}>Defend</button>
      <button onClick={Heal}>Heal</button>
      <h3>Turn: {HeroT ? "Hero's Turn" : "Villain's Turn"}</h3>
      <div>Villain (Bandit) Health: {VHealth}</div>
      <div>Hero (Panda) Health: {HHealth}</div>
      <h1>
        {HHealth <= 0 ? "You Lose!" : ""}
        {VHealth <= 0 ? "You Win!" : ""}
      </h1>
    </div>
  );
}
