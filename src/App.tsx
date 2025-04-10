import game_corner_music from "@assets/audio/pokemon_game_corner.mp3";
import { AudioProvider } from "@contexts/AudioContext";
import Home from "@pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <AudioProvider audioSrc={game_corner_music}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AudioProvider>
  );
}
