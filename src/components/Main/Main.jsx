import React, { useState } from "react";
import "./Main.scss";

function Main(props) {
  const {
    handleNavigateToHistoria,
    handleNavigateToBiologia,
    handleNavigateToChemia,
  } = props;

  return (
    <div className="Main">
      <div className="content">
        <img
          src="https://i.redd.it/idmbv0oydf671.jpg"
          alt=""
          className="background"
        />
        <div className="someRandomText">
          <h1>Sciagi</h1>
          <span>Learn more with us!!</span>
        </div>

        <div className="someContent">
          <div className="boxes" id="przedmioty">
            <div className="button-container-2">
              <span className="mas">Biologia</span>
              <button
                className="button-2"
                type="button"
                name="Hover"
                onClick={handleNavigateToBiologia}
              >
                Biologia
              </button>
            </div>
            <div className="button-container-2">
              <span className="mas">Historia</span>
              <button
                className="button-2"
                type="button"
                name="Hover"
                onClick={handleNavigateToHistoria}
              >
                Historia
              </button>
            </div>
            <div className="button-container-2">
              <span className="mas">Chemia</span>
              <button
                className="button-2"
                type="button"
                name="Hover"
                onClick={handleNavigateToChemia}
              >
                Chemia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
