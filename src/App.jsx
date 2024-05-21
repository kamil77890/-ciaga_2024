import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Historia from "./components/Przedmioty/Historia/Historia";
import Biologia from "./components/Przedmioty/Biologia/Biologia";
import "./App.css";

function App() {
  const [showHistoria, setShowHistoria] = useState(false);
  const [showBiologia, setShowBiologia] = useState(false);

  const handleNavigateToHistoria = () => {
    setShowHistoria(true);
  };

  const handleNavigateToBiologia = () => {
    setShowBiologia(true);
  };

  return (
    <div>
      <Nav />
      <Biologia />
      {!showBiologia && (
        <>
          <Main handleNavigateToHistoria={handleNavigateToHistoria} handleNavigateToBiologia={handleNavigateToBiologia}/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
