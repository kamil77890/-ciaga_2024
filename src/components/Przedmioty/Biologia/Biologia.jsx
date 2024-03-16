import React, { useState } from "react";
import "./Biologia.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

function Biologia(props) {
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
    document.querySelector("#text").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className={`background ${scrolled ? "scrolled" : ""}`}
        onClick={scrollToContent}
      ></div>
      <section className="text" id="text">
        <h3>
          <strong>Układ krążenia i odporność organizmu</strong>
        </h3>
        <ul>
          <li>
            <strong>Składa się z serca, naczyń krwionośnych i krwi.</strong>{" "}
            Odpowiada za transport tlenu i substancji odżywczych.
          </li>
          <li>
            <strong>Funkcja:</strong> transportowanie tlenu, substancji
            odżywczych oraz usuwanie produktów przemiany materii.
          </li>
          <li>
            <strong>Serce:</strong> organ z dwoma przedsionkami i dwiema
            komorami, rytm skurczów i rozkurczów.
          </li>
          <img
            src="https://i.pinimg.com/564x/57/fe/9c/57fe9ca2bd20cd819795250632b904d3.jpg"
            alt="adwadadwa"
            className="heart"
            srcset=""
          />
        </ul>

        <h2>Odporność Organizmu:</h2>
        <ul>
          <li>
            <strong>Komórki Immunologiczne:</strong> limfocyty, leukocyty,
            makrofagi. Wspierają obronę organizmu przed patogenami.
          </li>
          <li>
            <strong>Rodzaje Odporności:</strong>
            <ul>
              <li>
                <strong>Wrodzona:</strong> szybka reakcja na patogeny, np.
                bariery fizyczne, komórki fagocytujące.
              </li>
              <li>
                <strong>Nabyta:</strong> specyficzna, opóźniona reakcja, zależy
                od wcześniejszego kontaktu z patogenem.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Trzy Linie Obrony Organizmu:</h2>
        <ul>
          <li>
            <strong>Bariera Fizyczna:</strong> skóra, błony śluzowe. Chroni
            organizm przed wtargnięciem patogenów.
          </li>
          <li>
            <strong>Odpowiedź Nieswoista:</strong> fagocytoza, komórki NK.
            Szybka reakcja na obce substancje bez uprzedniego rozpoznania.
          </li>
          <li>
            <strong>Odpowiedź Swoista:</strong> limfocyty B i T, produkcja
            przeciwciał. Reakcja na obce substancje po ich rozpoznaniu.
          </li>
        </ul>

        <h2>Sposoby Nabierania Odporności Swoistej:</h2>
        <ul>
          <li>
            <strong>Czynna:</strong> organizm wytwarza przeciwciała po kontakcie
            z patogenem.
          </li>
          <li>
            <strong>Bierne:</strong> organizm otrzymuje przeciwciała gotowe z
            zewnątrz, np. zaszczepienie.
          </li>
          <li>
            <strong>Naturalna:</strong> przez zakażenie.
          </li>
          <li>
            <strong>Sztuczna:</strong> przez szczepionki.
          </li>
          <li>
            <strong>Choroby Autoimmunologiczne:</strong> organizm atakuje własne
            komórki.
          </li>
        </ul>

        <h2>Konflikt Serologiczny:</h2>
        <ul>
          <li>
            <strong>
              Wynikający z niespójności antygenowej między matką a płodem.
            </strong>{" "}
            Może prowadzić do powikłań w ciąży.
          </li>
        </ul>

        <h2>Układ Zgodności Tkankowej:</h2>
        <ul>
          <li>
            <strong>
              System oznaczania zgodności tkankowej, istotny przy przeszczepach.
            </strong>{" "}
            Pomaga uniknąć odrzucenia przeszczepionego narządu.
          </li>
        </ul>

        <h2>Transplantacja:</h2>
        <ul>
          <li>
            <strong>
              Przeniesienie narządu lub tkaniny z jednego organizmu do drugiego.
            </strong>{" "}
            Pomocna w leczeniu ciężkich schorzeń.
          </li>
        </ul>

        <h2>Immunosupresja:</h2>
        <ul>
          <li>
            <strong>
              Zastosowanie leków w celu osłabienia reakcji odpornościowej
              organizmu.
            </strong>{" "}
            Konieczna po przeszczepach, aby uniknąć odrzucenia.
          </li>
        </ul>

        <h2>Alergia:</h2>
        <ul>
          <li>
            <strong>
              Nadwrażliwość na substancje obce, np. pyłki, sierść zwierząt.
            </strong>{" "}
            Może prowadzić do reakcji alergicznych.
          </li>
        </ul>

        <h2>Budowa Serca:</h2>
        <ul>
          <li>
            <strong>
              Składa się z czterech jam: dwóch przedsionków i dwóch komór.
            </strong>{" "}
            Zapewnia ciągłość cyrkulacji krwi.
          </li>
        </ul>

        <h2>Płucny Obieg Krwi i Ustrojowy Obieg Krwi:</h2>
        <ul>
          <li>
            <strong>Płucny obieg:</strong> transportuje krew do i z płuc, gdzie
            następuje wymiana gazowa.
          </li>
          <li>
            <strong>Ustrojowy obieg:</strong> dostarcza krew do wszystkich
            tkanek i narządów ciała.
          </li>
        </ul>

        <h2>Najważniejsze Narządy Układu Limfatycznego:</h2>
        <ul>
          <li>
            <strong>Węzły chłonne, śledziona, grasicza.</strong> Wspierają
            funkcje odpornościowe organizmu.
          </li>
        </ul>

        <h2>Metody Diagnostyczne Układu Krążenia:</h2>
        <ul>
          <li>
            <strong>
              EKG, Echo serca, badanie stężenia lipidów, pomiar ciśnienia krwi.
            </strong>{" "}
            Pomocne w diagnozowaniu chorób serca i naczyń krwionośnych.
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Biologia;
