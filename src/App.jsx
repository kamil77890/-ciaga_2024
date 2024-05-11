import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Historia from "./components/Przedmioty/Historia/Historia";
import "./App.css";

function App() {
  const [showHistoria, setShowHistoria] = useState(false);

  const handleNavigateToHistoria = () => {
    setShowHistoria(true);
  };

  return (
    <div>
      <Nav />
      {showHistoria && <Historia />}
      {!showHistoria && (
        <>
          <Main handleNavigateToHistoria={handleNavigateToHistoria} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
