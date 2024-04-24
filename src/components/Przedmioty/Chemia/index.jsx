import React, { useState } from "react";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";
import "./Chemia.scss";
const Chemia = () => {
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
    <div className="jajajaja">
      <Nav />
      <div
        className={`background ${scrolled ? "scrolled" : ""}`}
        onClick={scrollToContent}
      ></div>
      <section className="text" id="text">
        <h3>
          <strong>Stopień utlenienia pierwiastka</strong>
        </h3>
        <p>
          Stopień utlenienia, znany także jako liczba utlenienia, wskazuje na
          liczbę elektronów, które atom oddaje lub przyjmuje podczas reakcji
          chemicznych. Jest to istotne dla zrozumienia, jak pierwiastki łączą
          się i reagują ze sobą, pozwalając na przewidywanie produktów reakcji
          chemicznych. Na przykład, w wodzie \( H_2O \) wodór ma stopień
          utlenienia +1, natomiast tlen -2.
        </p>
        <h3>
          <strong>Reakcje utleniania i redukcji</strong>
        </h3>
        <p>
          Reakcje utleniania i redukcji, zwane reakcjami redoks, to procesy, w
          których dochodzi do zmiany stopni utlenienia reagentów. Reduktor
          oddaje elektrony, podczas gdy utleniacz je przyjmuje. Te reakcje są
          kluczowe w wielu procesach biologicznych i technologicznych, włączając
          fotosyntezę oraz działanie baterii.
        </p>
        <h3>
          <strong>Ogniwa galwaniczne</strong>
        </h3>
        <p>
          Ogniwo galwaniczne to urządzenie przekształcające energię chemiczną w
          energię elektryczną przez reakcje redoks zachodzące pomiędzy dwoma
          różnymi metalami. W typowym ogniwie, anoda jest miejscem utleniania, a
          katoda - miejscem redukcji. Prąd elektryczny przepływa między nimi za
          pośrednictwem przewodnika zewnętrznego.
        </p>
        <img
          className="image-style"
          src="https://slideplayer.pl/slide/15060286/91/images/2/Stopie%C5%84+utlenienia+Wnioski+F-I+LiI%2C+NaI%2C+KI+MgII%2C+CaII%2C+SrII%2C+BaII.jpg"
          alt=""
        />
        <h3>
          <strong>Elektrochemiczne źródła energii</strong>
        </h3>
        <p>
          Elektrochemiczne źródła energii, takie jak baterie i akumulatory,
          magazynują energię chemiczną, którą można przekształcić w energię
          elektryczną. Te urządzenia są niezbędne w codziennym życiu,
          zapewniając zasilanie dla urządzeń elektronicznych, pojazdów
          elektrycznych i systemów awaryjnych.
        </p>
        <h3>
          <strong>Korozja metali</strong>
        </h3>
        <p>
          Korozja to proces degradacji metali spowodowany ich reakcją chemiczną
          z otoczeniem, najczęściej z tlenem. Korozja prowadzi do tworzenia
          tlenków, które osłabiają metal. Proces ten można spowolnić stosując
          różne metody ochronne, takie jak malowanie, powłoki ochronne czy
          inhibitory korozji.
        </p>
      </section>
      <section className="text" id="text">
        <h3>
          <img
            src="https://chemicznykoktajl.wordpress.com/wp-content/uploads/2013/06/z33.gif?w=630"
            alt=""
          />
          <strong>Korozja metali</strong>
        </h3>
        <p>
          Korozja metali to proces chemiczny lub elektrochemiczny, który
          powoduje stopniowe niszczenie metalów pod wpływem środowiska. Jest to
          zjawisko niepożądane, które prowadzi do utraty właściwości
          mechanicznych, estetycznych oraz funkcjonalnych materiałów metalowych.
          Najbardziej znaną formą korozji jest rdzewienie stali, które zachodzi
          gdy żelazo reaguje z tlenem i wodą.
        </p>
        <p>
          Proces korozji zależy od wielu czynników, takich jak rodzaj metalu,
          obecność elektrolitów, temperatura, wilgotność oraz pH środowiska.
          Metale takie jak żelazo, stal, aluminium, czy miedź mają różną
          odporność na korozję, a ich powierzchnia może być pasywowana, co
          polega na stworzeniu ochronnej warstwy tlenków, która zapobiega
          dalszej korozji.
        </p>
        <h4>Mechanizm korozji</h4>
        <p>
          Korozja elektrochemiczna zachodzi poprzez tworzenie ogniw
          galwanicznych na powierzchni metalu, gdzie różne obszary pełnią role
          anod i katod. W obszarach anodowych metal ulega utlenieniu, co
          skutkuje uwolnieniem elektronów i rozpuszczaniem się metalu. Elektrony
          te przemieszczają się do obszarów katodowych, gdzie następuje redukcja
          tlenów lub innych substancji. Na przykład, w obecności wody i tlenu
          może dojść do redukcji tlenu, który przyłącza uwolnione elektrony
          tworząc jony wodorotlenowe. Te reakcje prowadzą do powstania produktów
          korozji, takich jak rdza.
        </p>
        <h4>Metody ochrony przed korozją</h4>
        <p>Istnieją różne metody ochrony metali przed korozją, włączając:</p>
        <ul>
          <li>
            <strong>Malowanie:</strong> Nakładanie warstw farb lub lakierów
            izolujących metal od środowiska.
          </li>
          <li>
            <strong>Anodowanie:</strong> Proces elektrochemiczny stosowany
            głównie dla aluminium, polegający na wytwarzaniu grubej warstwy
            tlenków, która chroni metal przed dalszą korozją.
          </li>
          <li>
            <strong>Galwanizacja:</strong> Powlekanie metalu cienką warstwą
            innego metalu (często cynku), który oferuje lepszą odporność na
            korozję.
          </li>
          <li>
            <strong>Użycie inhibitorów korozji:</strong> Dodatki chemiczne,
            które spowalniają korozję poprzez passywację metalu lub blokowanie
            procesów elektrochemicznych.
          </li>
          <li>
            <strong>Stosowanie stopów:</strong> Wytwarzanie stopów metali, które
            są bardziej odporne na korozję, np. stal nierdzewna, która zawiera
            chrom i inne metale zwiększające jej odporność.
          </li>
        </ul>
        <p>
          Odpowiednie metody ochrony mogą znacząco wydłużyć żywotność urządzeń i
          konstrukcji metalowych, co jest kluczowe w wielu branżach, w tym w
          budownictwie, motoryzacji oraz inżynierii morskiej.
        </p>
      </section>
      <section className="text" id="text">
        <h3>
          <strong>Stopień utlenienia pierwiastka</strong>
        </h3>
        <p>
          Stopień utlenienia wskazuje na liczbę elektronów, które atom zyskuje
          lub traci w trakcie reakcji. Przykład: w cząsteczce wody H<sub>2</sub>
          O, wodór (H) ma stopień utlenienia +1, a tlen (O) -2. Kolejny przykład
          to dwutlenek węgla, CO<sub>2</sub>, gdzie węgiel ma stopień utlenienia
          +4, a tlen zawsze -2.
        </p>
        <h3>
          <strong>Reakcje utleniania i redukcji</strong>
        </h3>
        <p>
          Reakcje te obejmują przeniesienie elektronów między substancjami.
          Przykładem jest reakcja między cynkiem a siarczanem miedzi(II), gdzie
          cynk jest utleniany (traci elektrony) i przechodzi do roztworu jako
          jony Zn<sup>2+</sup>, a miedź jest redukowana (zyskuje elektrony) i
          osadza się na cynku w postaci metalicznej.
        </p>
        <h3>
          <strong>Ogniwa galwaniczne</strong>
        </h3>
        <p>
          Ogniwo Daniella jest klasycznym przykładem ogniwa galwanicznego, gdzie
          cynk i miedź pełnią role elektrod. Cynk, będący bardziej aktywny,
          ulega korozji, a miedź jest redukowana, co prowadzi do przepływu
          elektronów przez zewnętrzny obwód.
        </p>
        <h3>
          <strong>Elektrochemiczne źródła energii</strong>
        </h3>
        <p>
          Przykładem elektrochemicznego źródła energii są baterie litowo-jonowe,
          używane w telefonach komórkowych i laptopach. W tych bateriach, jony
          litu przemieszczają się między anodą a katodą, umożliwiając przepływ
          elektronów i wytwarzanie prądu.
        </p>
        <h3>
          <strong>Korozja metali</strong>
        </h3>
        <p>
          Przykład korozji to rdzewienie żelaza, gdzie metal reaguje z tlenem i
          wodą, prowadząc do powstania brunatnej warstwy tlenku żelaza(III),
          czyli rdzy. Innym przykładem jest korozja aluminium w środowisku
          morskim, gdzie sól przyspiesza proces korozji przez tworzenie
          agresywnego elektrolitu.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Chemia;
