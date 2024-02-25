import React from "react";
import "./Main.scss";
import { TRUE } from "sass";

function Main(props) {
  const {
    points,
    setPoints,
    isChemiaVisible,
    setIsChemiaVisible,
    setIsHistoriaVisible,
  } = props;

  const handleClickPrzedmioty = () => {
    const randomPoints = Math.floor(Math.random() * 3) + 1;
    setPoints((points) => {
      return points + randomPoints;
    });
  };
  const handleClickChemia = () => {
    setIsChemiaVisible(true);
  };
  const handleClickHistoria = () => {
    setIsHistoriaVisible(true);
  };

  return (
    <div className="Main">
      <div className="background">
        <img
          className="back"
          src="https://free4kwallpapers.com/uploads/originals/2020/10/13/digital-landscape-wallpaper.jpg"
          alt="background"
        />
      </div>
      <div className="someContent">
        <button className="someButton">
          <span>
            <a href="#przedmioty">Przejdz do lekcji...</a>
          </span>
        </button>
      </div>
      <div id="przedmioty"></div>
      <h1>Sciagi</h1>
      <span>Learn more with us!!</span>
      <div className="boxes" onClick={handleClickPrzedmioty}>
        <div className="button-container-2">
          <span className="mas">Biologia</span>
          <button type="button" name="Hover" href="#" disabled={true}>
            BEGINNER
          </button>
        </div>
        <div className="button-container-2" onClick={handleClickHistoria}>
          <span className="mas">Historia</span>
          <button type="button" name="Hover" href="#">
            HISTORIA
          </button>
        </div>
        <div className="button-container-2">
          <span className="mas">Geografia</span>
          <button type="button" name="Hover" href="#" disabled>
            INTERMEDIATE
          </button>
        </div>
        <div className="button-container-2" onClick={handleClickChemia}>
          <span className="mas">Chemia</span>
          <button type="button" name="Hover" href="#" disabled>
            GIGACHAD
          </button>
        </div>
      </div>
      <div className="about" id="about"></div>
    </div>
  );
}
export default Main;
