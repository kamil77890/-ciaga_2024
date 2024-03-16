import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Historia from "./components/Przedmioty/Historia/Historia";
import "./App.css";
import Biologia from "./components/Przedmioty/Biologia/Biologia";

function App() {
  const [points, setPoints] = useState(0);
  const [showHistoria, setShowHistoria] = useState(false);
  const [showBiologia, setShowBiologia] = useState(false);

  const handleShowHistoria = () => {
    setShowHistoria(true);
  };

  const handleNavigateToHistoria = () => {
    setShowHistoria(true);
  };

  const handleNavigateToBiologia = () => {
    setShowBiologia(true);
  };

  return (
    <div>
      <>
        <Nav points={points} />
        {showBiologia ? (
          <Biologia />
        ) : showHistoria ? (
          <Historia points={points} />
        ) : (
          <>
            <Main
              handleNavigateToHistoria={handleNavigateToHistoria}
              handleNavigateToBiologia={handleNavigateToBiologia}
            />
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default App;
