import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Historia from "./components/Przedmioty/Historia/Historia";
import "./App.css";
import Biologia from "./components/Przedmioty/Biologia/Biologia";
import Chemia from "./components/Przedmioty/Chemia";

function App() {
  const [showHistoria, setShowHistoria] = useState(false);
  const [showBiologia, setShowBiologia] = useState(false);
  const [showChemia, setShowChemia] = useState(false);

  const handleNavigateToHistoria = () => {
    setShowHistoria(true);
  };

  const handleNavigateToBiologia = () => {
    setShowBiologia(true);
  };
  const handleNavigateToChemia = () => {
    setShowChemia(true);
  };

  return (
    <div>
      <>
        <Nav />
        {showBiologia ? (
          <Biologia />
        ) : showHistoria ? (
          <Historia />
        ) : showChemia ? (
          <Chemia />
        ) : (
          <>
            <Main
              handleNavigateToHistoria={handleNavigateToHistoria}
              handleNavigateToBiologia={handleNavigateToBiologia}
              handleNavigateToChemia={handleNavigateToChemia}
            />
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default App;
