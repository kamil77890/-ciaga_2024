import React, { useState } from "react";
import "./Historia.scss";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

function Historia() {
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
      >
        <img
          src="https://static.zpe.gov.pl/portal/f/res-minimized/RsiZaxpTzKBu9/6/1J5e8kCVdAxv7ajuCof7zL4dLogf1PVJ.jpg"
          alt="image"
        />
      </div>
      <div className="margin"></div>
      <section className="text1" id="text1">
        <h3>
          <strong>
            Temat: Polska w latach 1772-1795 oraz Epoka Napoleońska
          </strong>
        </h3>
        <p>
          Polska w latach 1772-1795 oraz Epoka Napoleońska to okresy o dużym
          znaczeniu dla historii kraju, które wywarły istotny wpływ na jego
          rozwój polityczny, społeczny i kulturowy. Rozpoczynając od rozbiorów
          Polski w 1772 roku, kiedy to trzy zaborcze mocarstwa: Rosja, Prusy i
          Austria, dokonały podziału ziem Rzeczypospolitej, Polska znalazła się
          pod jarzmem obcych rządów.
        </p>
        <p>
          Rozejście się Polski w różnych kierunkach między trzema mocarstwami
          spowodowało destabilizację kraju, zatarcie granic narodowych oraz
          ograniczenie autonomii polskiego społeczeństwa. Zaborcy narzucili
          swoje prawa i obyczaje, co spowodowało konflikty wewnętrzne i
          pogorszenie sytuacji ekonomicznej Polski.
        </p>
        <p>
          Epoka Napoleońska była kolejnym ważnym okresem w historii Polski,
          charakteryzującym się nadzieją na odzyskanie niepodległości. Napoleon
          Bonaparte, wykorzystując polskie nastroje niepodległościowe, próbował
          zjednać sobie Polaków. W wyniku kampanii napoleońskich na ziemiach
          polskich powstało Księstwo Warszawskie, które miało być marionetkowym
          państwem zależnym od Francji, jednakże stanowiło również pierwszy krok
          w kierunku odbudowy niepodległej Polski.
        </p>
        <p>
          Księstwo Warszawskie, powstałe w 1807 roku, obejmowało znaczną część
          ziem zaboru pruskiego oraz austriackiego. Było to państwo
          zorganizowane według wzorów francuskich, wprowadzające reformy
          administracyjne, prawne i gospodarcze, które miały na celu
          modernizację kraju.
        </p>
        <p>
          Jednakże, pomimo nadziei na odzyskanie niepodległości, Księstwo
          Warszawskie pozostawało zależne od Francji i pozostawało w cieniu
          narastającej potęgi Napoleona. Klęska Napoleona w bitwie pod Lipskiem
          w 1813 roku przyniosła upadek Księstwa Warszawskiego, a Polska
          ponownie znalazła się pod zaborami.
        </p>
        <p>
          Okres rozbiorów i Epoka Napoleońska miały długotrwałe konsekwencje dla
          Polski. Zniesienie niepodległości i utrata suwerenności skłoniły wielu
          Polaków do walki o wolność i niepodległość, co doprowadziło do
          kolejnych powstań narodowych w XIX wieku.
        </p>
        <p>
          Mimo trudności i utraty niepodległości, okres rozbiorów i Epoka
          Napoleońska pozostają istotnymi etapami w historii Polski, które
          kształtowały świadomość narodową i determinację Polaków do walki o
          wolność i niepodległość.
        </p>
        <h3>
          <strong>
            Temat: Polska w latach 1772-1795 oraz Epoka Napoleońska
          </strong>
        </h3>
        <p>
          Polska w latach 1772-1795 oraz Epoka Napoleońska to okresy o dużym
          znaczeniu dla historii kraju, które wywarły istotny wpływ na jego
          rozwój polityczny, społeczny i kulturowy. Rozpoczynając od rozbiorów
          Polski w 1772 roku, kiedy to trzy zaborcze mocarstwa: Rosja, Prusy i
          Austria, dokonały podziału ziem Rzeczypospolitej, Polska znalazła się
          pod jarzmem obcych rządów.
        </p>
        <h3>
          <strong>Epoka Napoleońska:</strong>
        </h3>
        <p>
          Epoka Napoleońska była jednym z najważniejszych okresów w historii
          Europy, a także Polski. Napoleon Bonaparte, uznawany za jednego z
          najwybitniejszych wodzów w dziejach, odegrał kluczową rolę w
          kształtowaniu nowoczesnej Europy poprzez swoje podboje i reformy. Jego
          kampanie wojskowe przyniosły zmiany polityczne, społeczne i
          gospodarcze na wielką skalę.
        </p>
        <p>
          Napoleonowi udało się zjednać sobie szerokie poparcie w Polsce, która
          liczyła na odzyskanie niepodległości. Po wybuchu wojen napoleońskich,
          na ziemiach polskich pojawiła się nadzieja na odbudowę niepodległego
          państwa polskiego. W 1807 roku, po kilku latach walk i negocjacji,
          powstało Księstwo Warszawskie, które było marionetkowym państwem
          zależnym od Francji, ale stanowiło istotny krok w kierunku odbudowy
          niepodległej Polski.
        </p>
        <p>
          Napoleon przeprowadził wiele reform na terenach przez niego
          kontrolowanych, w tym modernizację administracji, wprowadzenie kodeksu
          cywilnego oraz reformy gospodarcze. Jego rządy miały istotny wpływ na
          kształtowanie nowoczesnego państwa i społeczeństwa.
        </p>
        <p>
          Jednakże, rosnąca potęga Napoleona wywołała opór wśród innych
          europejskich mocarstw, co doprowadziło do konfliktów zbrojnych i
          ostatecznie do klęski Napoleona w bitwie pod Lipskiem w 1813 roku. Po
          tej klęsce, Polska ponownie znalazła się pod zaborami, a Księstwo
          Warszawskie przestało istnieć.
        </p>
        <p>
          Pomimo upadku Księstwa Warszawskiego, wpływ epoki napoleońskiej na
          Polskę był trwały. Wprowadzone reformy, wzrost świadomości narodowej i
          dążenie do niepodległości miały długotrwałe konsekwencje dla polskiego
          społeczeństwa.
        </p>
      </section>
    </div>
  );
}

export default Historia;
