import React from "react";
import App from "./App";
import { GameProvider } from "./contexts/GameContext";
function start() {
  return (
    <div>
      <GameProvider>
        <App />
      </GameProvider>
    </div>
  );
}

export default start;
