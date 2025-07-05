import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // ✅ Auto-switch images only when video is not playing
  useEffect(() => {
    if (!playStatus) {
      const interval = setInterval(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [playStatus]);

  // ✅ Auto-stop video after 10 seconds
  useEffect(() => {
    if (playStatus) {
      const timeout = setTimeout(() => {
        setPlayStatus(false);
      }, 10000); // 10 seconds
      return () => clearTimeout(timeout);
    }
  }, [playStatus]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
