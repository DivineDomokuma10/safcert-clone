import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import Form from "./components/subFeatures/Form";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);
  const toggleDropMenu = () => setShowDropMenu(!showDropMenu);
  const show = () => setShowForm(true);
  const hide = () => setShowForm(false);

  return (
    <main className="max-w-screen overflow-auto flex flex-col items-center">
      {showForm && <Form hide={hide}/>}
      <NavBar
        showDropMenu={showDropMenu}
        toggleDropMenu={toggleDropMenu}
        show={show}
      />
      <Home show={show} />
      <Features show={show} />
      <HowItWorks />
      <Footer show={show} />
    </main>
  );
};

export default App;
