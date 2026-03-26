import { useState } from "react";
import { useNavigate } from "react-router";
import GameSetupHost from "../../imports/GameSetupHost";

export default function GameSetup() {
  const navigate = useNavigate();
  const [setupData, setSetupData] = useState({
    sellerTeams: 4,
    customerTeams: 6,
    playersPerTeam: 3,
    numberOfRounds: 3,
    roundDuration: 15,
    startingCash: 1000,
    deviceOption: 'shared' // 'shared' or 'personal'
  });

  const handleSaveAndLaunch = () => {
    // Store setup data in localStorage or context for the lobby
    localStorage.setItem('gameSetup', JSON.stringify(setupData));
    navigate('/lobby');
  };

  return (
    <div onClick={(e) => {
      // Check if the clicked element is the "Save & Launch Lobby" button
      const target = e.target as HTMLElement;
      const buttonElement = target.closest('[data-name="Button"]');
      if (buttonElement && (buttonElement.textContent?.includes('SAVE & LAUNCH LOBBY') || buttonElement.textContent?.includes('Save & Launch Lobby'))) {
        handleSaveAndLaunch();
      }
    }}>
      <GameSetupHost
        sellerTeams={setupData.sellerTeams}
        customerTeams={setupData.customerTeams}
        playersPerTeam={setupData.playersPerTeam}
        numberOfRounds={setupData.numberOfRounds}
        roundDuration={setupData.roundDuration}
        startingCash={setupData.startingCash}
        onSellerTeamsChange={(value) => setSetupData(prev => ({ ...prev, sellerTeams: value }))}
        onCustomerTeamsChange={(value) => setSetupData(prev => ({ ...prev, customerTeams: value }))}
        onPlayersPerTeamChange={(value) => setSetupData(prev => ({ ...prev, playersPerTeam: value }))}
        onNumberOfRoundsChange={(value) => setSetupData(prev => ({ ...prev, numberOfRounds: value }))}
        onRoundDurationChange={(value) => setSetupData(prev => ({ ...prev, roundDuration: value }))}
        onStartingCashChange={(value) => setSetupData(prev => ({ ...prev, startingCash: value }))}
      />
    </div>
  );
}