import React from "react";
import "./styles.css";
import HeroAndVill from "../src/components/HeroAndVill";
import AllActions from "../src/components/Actions";
export default function App() {
  return (
    <div className="App">
      <div className="components">
        <AllActions />
        <HeroAndVill />
      </div>
    </div>
  );
}
