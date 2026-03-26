import { useEffect, useState } from "react";
import GameLobbyHost from "../../imports/GameLobbyHost-2-974";

export default function GameLobby() {
  const [setupData, setSetupData] = useState<any>(null);

  useEffect(() => {
    // Retrieve setup data from localStorage
    const stored = localStorage.getItem('gameSetup');
    if (stored) {
      setSetupData(JSON.parse(stored));
    }
  }, []);

  return <GameLobbyHost />;
}