import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Historia from "./components/Historia/Historia";

import "./App.css";

function App() {
  const [points, setPoints] = useState(0);
  const [isChemiaVisible, setIsChemiaVisible] = useState(false);
  const [isHistoriaVisible, setIsHistoriaVisible] = useState(false);

  return (
    <div>
      {isHistoriaVisible ? (
        <Historia points={points} />
      ) : (
        <div>
          <Nav points={points} setIsChemiaVisible={setIsChemiaVisible} />
          <Main
            points={points}
            setPoints={setPoints}
            setIsChemiaVisible={setIsChemiaVisible}
            setIsHistoriaVisible={setIsHistoriaVisible}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
