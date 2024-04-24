import React, { useState } from "react";
import "./Biologia.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

function Biologia() {
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
          <strong>Układ oddechowy</strong>
        </h3>
        <p>
          Układ oddechowy człowieka składa się z wielu narządów, w tym z nosa,
          gardła, krtani, tchawicy, oskrzeli i płuc. Jego główną funkcją jest
          dostarczanie tlenu do organizmu oraz usuwanie dwutlenku węgla.
        </p>
        <h4>Składniki układu oddechowego:</h4>
        <ul>
          <li>
            <strong>Nos:</strong> pełni funkcję filtra, ogrzewa i nawilża
            wdychane powietrze.
          </li>
          <li>
            <strong>Gardło:</strong> stanowi połączenie nosa i krtani, bierze
            udział w procesie połykania i oddychania.
          </li>
          <li>
            <strong>Krtani:</strong> zawiera struny głosowe, pełniące rolę w
            tworzeniu dźwięków mowy.
          </li>
          <li>
            <strong>Płuca:</strong> główny organ odpowiedzialny za wymianę
            gazową, czyli pobieranie tlenu i usuwanie dwutlenku węgla.
          </li>
        </ul>

        <h4>Proces oddychania:</h4>
        <p>
          Proces oddychania składa się z dwóch faz: wdychania (inhalacji) i
          wydychania (ekspiracji). Podczas wdychania, mięśnie międzyżebrowe oraz
          przepona kurczą się, powiększając objętość klatki piersiowej, co
          powoduje ssanie powietrza do płuc. W trakcie wydychania, mięśnie te
          się rozluźniają, a płuca kurczą się, wypychając powietrze na zewnątrz.
        </p>

        <h3>
          <strong>Układ wydalniczy</strong>
        </h3>
        <p>
          Układ wydalniczy pełni istotną rolę w usuwaniu zbędnych produktów
          przemiany materii oraz regulacji składu chemicznego płynów
          ustrojowych. Składa się z narządów takich jak nerki, cewki moczowe,
          moczowody i pęcherz moczowy.
        </p>

        <h4>Składniki układu wydalniczego:</h4>
        <ul>
          <li>
            <strong>Nerki:</strong> główne narządy wydalnicze, filtrują krew i
            wytwarzają mocz.
          </li>
          <li>
            <strong>Cewki moczowe:</strong> przewody odprowadzające mocz z nerek
            do pęcherza moczowego.
          </li>
          <li>
            <strong>Moczowody:</strong> przewody prowadzące mocz z pęcherza
            moczowego na zewnątrz organizmu.
          </li>
          <li>
            <strong>Pęcherz moczowy:</strong> narząd magazynujący mocz przed
            jego wydaleniem.
          </li>
        </ul>

        <h4>Proces wydalania:</h4>
        <p>
          Proces wydalania, zwany moczopójstwem, polega na wydaleniu mocz z
          organizmu poprzez cewkę moczową. Mocz powstaje w nerkach w wyniku
          filtracji krwi, następnie jest magazynowany w pęcherzu moczowym, aż do
          chwili, gdy organizm jest gotowy do jego wydalenia. Następnie mocz
          jest wypierany z pęcherza moczowego przez skurcze mięśni pęcherza i
          wyprowadzany na zewnątrz przez cewkę moczową.
        </p>

        <h3>
          <strong>
            Znaczenie układu oddechowego i wydalniczego dla organizmu
          </strong>
        </h3>
        <p>
          Układy oddechowy i wydalniczy są niezwykle istotne dla prawidłowego
          funkcjonowania organizmu. Bez odpowiedniego dostarczenia tlenu do
          tkanek i narządów oraz usuwania produktów przemiany materii, organizm
          nie byłby w stanie przetrwać. Układ oddechowy zapewnia niezbędny tlen,
          który jest niezbędny do procesu oddychania komórkowego, czyli
          produkcji energii wewnątrz komórek. Natomiast układ wydalniczy usuwa
          szkodliwe substancje, takie jak mocznik czy kreatynina, które mogą być
          toksyczne dla organizmu, jeśli nie zostaną usunięte.
        </p>

        <p>
          Zatem prawidłowe funkcjonowanie układów oddechowego i wydalniczego
          jest kluczowe dla utrzymania homeostazy organizmu, czyli równowagi
          wewnętrznej, która jest niezbędna do jego prawidłowego funkcjonowania.
          Dlatego też konieczne jest dbanie o te układy poprzez zdrowy styl
          życia, regularną aktywność fizyczną oraz odpowiednie nawodnienie
          organizmu.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Biologia;
