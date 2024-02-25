import React from "react";
import "./Chemia.scss"; // Import the SCSS file
import Nav from "../Nav/Nav";

function Chemia(props) {
  const { points } = props;
  return (
    <div>
      <Nav points={points} />
      <main>
        <div className="background"></div>
        <img
          className="back"
          src="https://img.freepik.com/premium-photo/investigations-defunct-chemistry-facility-laboratory-chemistry-instruction_410516-4221.jpg"
          alt="img"
        />
      </main>
    </div>
  );
}

export default Chemia;
