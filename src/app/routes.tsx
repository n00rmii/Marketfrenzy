import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import GameSetup from "./pages/GameSetup";
import GameLobby from "./pages/GameLobby";
import GameRules from "./pages/GameRules";
import JoinGameProfile from "./pages/JoinGameProfile";
import ChooseYourParty from "./pages/ChooseYourParty";
import SelectYourTeam from "./pages/SelectYourTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/setup",
    Component: GameSetup,
  },
  {
    path: "/lobby",
    Component: GameLobby,
  },
  {
    path: "/rules",
    Component: GameRules,
  },
  {
    path: "/join",
    Component: JoinGameProfile,
  },
  {
    path: "/choose-party",
    Component: ChooseYourParty,
  },
  {
    path: "/select-team",
    Component: SelectYourTeam,
  },
]);