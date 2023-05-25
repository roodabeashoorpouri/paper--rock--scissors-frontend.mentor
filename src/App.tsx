// import { useState } from "react";

import "./index.css";
import Rule from "./components/rule/rule";
import Game from "./components/game/game";
import Score from "./components/score/score";

function App() {
  return (
    <>
      <Score />

      <Game />
      <Rule />
    </>
  );
}

export default App;
