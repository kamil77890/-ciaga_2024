import React, { useState } from "react";
import "./Historia.scss";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

function Historia(props) {
  const { points } = props;
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    document.querySelector("#text1").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className={`background ${scrolled ? "scrolled" : ""}`}
        onClick={scrollToContent}
      ></div>
      <section className="text1" id="text1">
        <h3>
          <strong>Temat: Oświecenie i Absolutyzm w Polsce (1683-1773)</strong>
        </h3>
        <p>
          Oświecenie oraz panujący w Europie Absolutyzm między XVII a XVIII
          <br></br>
          wiekiem wywarły znaczący wpływ na politykę, kulturę i społeczeństwo
          <br></br>
          Polski. Okres ten, trwający od roku 1683 do 1773, był czasem ważnych
          <br></br>
          przemian w historii polskiego państwa.
        </p>
        <h3>
          <strong>Oświecenie:</strong>
        </h3>
        <p>
          Kontekst międzynarodowy: Oświecenie to epoka, która nacechowana
          <br></br>
          była postępem intelektualnym i naukowym. Idee oświeceniowe
          <br></br>
          promowały rozum, naukę oraz racjonalizm. Rola oświeconych<br></br>
          monarchów: W Europie, wielu monarchów, tacy jak Fryderyk II Pruski
          <br></br>
          czy Józef II Habsburg, wprowadzali reformy zgodne z ideami
          <br></br>
          oświecenia, które obejmowały modernizację administracji, edukacji
          <br></br>
          oraz prawa. Wpływ na Polskę: Idee oświecenia dotarły także do
          <br></br>
          Polski, wpływając na myśl polityczną i społeczną. Jednakże, ze
          <br></br>
          względu na silną pozycję szlachty i konfederacje szlacheckie,
          <br></br>
          reformy oświeceniowych monarchów miały ograniczony zasięg.
          <br></br>
        </p>
        <h3>
          <strong>Absolutyzm:</strong>
        </h3>
        <p>
          Charakterystyka: Absolutyzm to system rządów, w którym władza
          <br></br>
          monarchów jest nieograniczona, a ich decyzje niepodważalne. Monarcha
          <br></br>
          uznawany był za przedstawiciela Boga na ziemi i miał pełną kontrolę
          <br></br>
          nad państwem. Absolutyzm w Europie: W XVII i XVIII wieku, absolutyzm
          <br></br>
          był powszechnym modelem rządów w Europie. Monarchowie tacy jak
          <br></br>
          Ludwik XIV we Francji czy Piotr I w Rosji wprowadzali silną kontrolę
          <br></br>
          nad swoimi krajami. Absolutyzm w Polsce: Pomimo silnego stanowiska
          <br></br>
          króla, polska monarchia była ograniczona przez silną pozycję
          <br></br>
          szlachty, która dysponowała znaczącą władzą i prawami. Mimo to,
          <br></br>
          próby wzmocnienia władzy królewskiej, jak te podejmowane przez
          <br></br>
          Stanisława Augusta Poniatowskiego, spotykały się z oporem szlachty i
          <br></br>
          kończyły się niepowodzeniem.
        </p>
      </section>
    </div>
  );
}

export default Historia;
