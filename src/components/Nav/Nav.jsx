import React, { useState, useEffect } from "react";
import "./nav.scss";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const [blackBackground, setBlackBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 780) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
    setBlackBackground((prevState) => !prevState);
  };

  return (
    <div className={clicked ? "clicked" : ""}>
      <div className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="icon" id="home">
          <img
            src="https://activenow.io/wp-content/uploads/2022/07/wsparcie-300x300.png"
            alt="png"
          />
          <strong>Ściągi</strong>
        </div>
        <div className="menu">
          <a href="http://localhost:5173/" id="home">
            Home
          </a>
          <a href="#przedmioty" onClick={handleClick}>
            Przedmioty
          </a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
