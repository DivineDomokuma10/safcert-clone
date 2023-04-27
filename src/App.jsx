import { set } from "react-hook-form";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

export const store = createContext();

const App = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const toggleDropMenu = () => setShowDropMenu(!showDropMenu);

  return (
    <main className="max-w-screen relative overflow-hidden flex flex-col items-center">
      <store.Provider value={{ showDropMenu, toggleDropMenu }}>
        <NavBar />
        <Home />
        <Features />
        <HowItWorks />
        <Footer />
      </store.Provider>
    </main>
  );
};

export default App;
