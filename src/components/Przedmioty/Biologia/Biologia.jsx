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
          <strong>Inpuls Nerwowy: Droga Chemiczna i Elektryczna</strong>
        </h3>
        <h3>Inpuls Nerwowy: Kluczowy Proces Komunikacji</h3>
        <p>
          Inpuls nerwowy to kluczowy proces komunikacji między neuronami mózgu.
        </p>

        <h3>Elektryczna Droga Impulsu</h3>
        <p>Elektryczny impuls przemieszcza się wzdłuż aksonu.</p>

        <h3>Chemiczna Droga Przekazu</h3>
        <p>
          W synapsie następuje przekazanie za pomocą neuroprzekaźników.
          Neuroprzekaźniki, takie jak neurotransmitery, przechodzą przez
          szczelinę synaptyczną i oddziałują z receptorami na neuronie
          postsynaptycznym, zmieniając jego potencjał błonowy.
        </p>

        <h3>Regulacja Funkcji Mózgu</h3>
        <p>
          Ten skomplikowany proces reguluje funkcje mózgu, jak percepcja, pamięć
          czy ruch.
        </p>

        <h3>Zrozumienie Drgań</h3>
        <p>
          Zrozumienie obu dróg - elektrycznej i chemicznej - jest kluczowe dla
          poznania mechanizmów działania naszego układu nerwowego.
        </p>
        <h3>Regulacja Układu Nerwowego</h3>

        <h4>Autonomiczna Regulacja</h4>
        <p>
          Układ autonomiczny kontroluje procesy niezależne od woli, jak tętno,
          oddychanie i trawienie. Składa się z gałęzi współczulnej i
          przywspółczulnej, działających antagonistycznie.
        </p>

        <h4>Regulacja Hormonalna</h4>
        <p>
          Hormony, takie jak adrenalina i kortyzol, wydzielane podczas stresu,
          wpływają na reakcje organizmu, współdziałając z układem nerwowym.
        </p>

        <h4>Feedback w Regulacji</h4>
        <p>
          Mechanizmy regulacji działają poprzez monitorowanie zmian w organizmie
          i uruchamianie odpowiednich reakcji w celu utrzymania homeostazy.
        </p>

        <h4>Regulacja Emocji i Nastroju</h4>
        <p>
          Układ nerwowy kontroluje emocje i nastroje poprzez interakcje między
          obszarami mózgu, takimi jak kora mózgowa i układ limbiczny.
        </p>

        <h4>Plastyczność Neuronalna</h4>
        <p>
          Plastyczność neuronów pozwala na adaptację układu nerwowego do
          zmieniających się warunków poprzez modyfikację połączeń synaptycznych.
        </p>

        <h3>
          <strong>
            Struktury Mózgu i Zmysłów: Istota Szara i Biała, Półkule Mózgu,
            Budowa Ucha oraz Móżdżek
          </strong>
        </h3>
        <p>
          Podział Mózgu na Półkule: Mózg dzieli się na dwie półkule: lewą i
          prawą, z których każda kontroluje różne funkcje. Lewa półkula jest
          zazwyczaj związana z logicznym myśleniem i językiem, podczas gdy prawa
          półkula zajmuje się przetwarzaniem emocji i percepcją przestrzenną.
        </p>
        <p>
          Istota Szara i Biała: Istota szara to obszar mózgu zawierający ciała
          komórek nerwowych, odpowiedzialny głównie za przetwarzanie informacji.
          Natomiast istota biała to obszar zawierający aksony, czyli wypustki
          neuronów, które przekazują sygnały między różnymi częściami mózgu.
        </p>
        <p>
          Móżdżek: Móżdżek to struktura znajdująca się w tylnej części mózgowia,
          odpowiedzialna za koordynację ruchów, utrzymanie równowagi i naukę
          pewnych automatycznych zachowań.
        </p>
        <p>
          Budowa Ucha: Ucho składa się z trzech głównych części: ucha
          zewnętrznego, środkowego i wewnętrznego. Ucho zewnętrzne zbiera
          dźwięki i kieruje je do ucha środkowego, gdzie dźwięki są wzmacniane i
          przekazywane do ucha wewnętrznego. Tam dźwięki są przetwarzane przez
          narząd słuchu, czyli ślimak, i przesyłane do mózgu za pośrednictwem
          nerwu słuchowego.
        </p>
        <img
          src="https://laryngologia.pl/wp-content/uploads/2018/02/budowa_ucha.png"
          alt=""
        />
        <h3>
          <strong>
            Funkcje i Struktury Układu Nerwowego: Mózg, Budowa Oka, Receptory i
            Funkcje Nerwowe
          </strong>
        </h3>
        <p>
          Pierń Mózgu: Pierń mózgu, zwany również rdzeniem przedłużonym, to
          część mózgowia znajdująca się poniżej mózgowia właściwego. Jest
          kluczowym obszarem regulującym funkcje życiowe, takie jak oddychanie,
          ciśnienie krwi i rytm serca.
        </p>
        <p>
          Budowa Oka: Pręciki i Czopki: Oko składa się z różnych struktur, w tym
          siatkówki. W siatkówce znajdują się pręciki, odpowiedzialne głównie za
          widzenie nocne i wykrywanie kształtów, oraz czopki, które umożliwiają
          widzenie kolorów i szczegółów.
        </p>
        <img
          src="https://sebastiangajda.com.pl/wp-content/uploads/2018/10/post_translated.jpg"
          alt=""
        />
        <p>
          Ruch: Warunkowy i Bezwarunkowy: Ruchy organizmu dzielimy na warunkowe,
          czyli te, które są wynikiem świadomej kontroli przez mózg, oraz
          bezwarunkowe, które są reakcjami niezależnymi od woli, wywołanymi
          bodźcami zewnętrznymi.
        </p>
        <p>
          Higiena Układu Nerwowego: Dbanie o zdrowie układu nerwowego obejmuje
          zdrową dietę, regularną aktywność fizyczną, unikanie stresu,
          odpowiednią ilość snu oraz unikanie substancji szkodliwych, takich jak
          alkohol i narkotyki.
        </p>
        <p>
          Receptory: Hemoreceptory i Nocyreceptory: Hemoreceptory to receptory
          czucia dotykowego, które reagują na bodźce mechaniczne, takie jak
          ucisk i dotyk. Natomiast nocyreceptory są receptory bólu, reagujące na
          bodźce sygnalizujące uszkodzenie tkanek.
        </p>
        <h3>
          <strong>
            Receptory, Budowa Komórki Nerwowej i Podział Układu Nerwowego
          </strong>
        </h3>
        <p>
          Receptory: Receptory to specjalistyczne struktury lub komórki zdolne
          do wykrywania bodźców zewnętrznych lub wewnętrznych, przekształcając
          je w impulsy nerwowe. Receptory pełnią kluczową rolę w percepcji
          zmysłowej i regulacji różnych funkcji organizmu.
        </p>
        <p>
          Interoreceptory: Interoreceptory to receptory znajdujące się wewnątrz
          organizmu, reagujące na bodźce związane z wewnętrznymi procesami
          fizjologicznymi, takimi jak ciśnienie krwi, poziom pH czy temperatura
          ciała.
        </p>
        <p>
          Eksteroreceptory: Eksteroreceptory to receptory znajdujące się na
          powierzchni ciała, reagujące na bodźce zewnętrzne, takie jak dotyk,
          dźwięk, światło, smak czy zapach.
        </p>
        <p>
          Smak i Węch: Smak i węch to zmysły chemiczne, w których receptory
          odpowiedzialne za wykrywanie cząsteczek chemicznych znajdują się w
          jamie ustnej (smak) oraz w nosie (węch).
        </p>
        <p>
          Budowa Komórki Nerwowej: Komórka nerwowa, zwana neuronem, składa się z
          ciała komórkowego (soma), dendrytów (krótkie wypustki przyjmujące
          sygnały), oraz aksonu (długa wypustka przekazująca sygnały do innych
          komórek).
        </p>
        <p>
          Podział Układu Nerwowego: Układ nerwowy dzieli się na trzy główne
          części: mózg (odpowiedzialny za przetwarzanie informacji i koordynację
          działania), móżdżek (regulujący równowagę i koordynację ruchów), oraz
          pień mózgu (kontrolujący funkcje życiowe, takie jak oddychanie i rytm
          serca).
        </p>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h3>Układ Nerwowy: Podział i Funkcje</h3>
        <p>
          Podział Układu Nerwowego: Układ nerwowy dzieli się na układ
          autonomiczny (reguluje funkcje wewnętrzne, takie jak oddychanie i
          trawienie) oraz układ somatyczny (kontroluje ruchy dobrowolne, takie
          jak chodzenie i machanie rękami). Są one często antagonistyczne,
          działając przeciwko sobie w pewnych funkcjach.
        </p>
        <p>
          Funkcje Układu Nerwowego: Układ nerwowy pełni wiele funkcji, w tym
          kontrolę ruchów, regulację procesów fizjologicznych, takich jak
          oddychanie i trawienie, oraz przetwarzanie informacji sensorycznych i
          wydawanie na nie odpowiedzi.
        </p>

        <h3>Analiza Informacji</h3>
        <p>
          Odbiór i Analiza Informacji: Układ nerwowy odbiera informacje
          sensoryczne poprzez receptory, analizuje je w różnych obszarach mózgu
          i podejmuje decyzje dotyczące reakcji na te bodźce.
        </p>
        <p>
          Reakcja na Bodźce: Po odbiorze i analizie informacji, układ nerwowy
          generuje odpowiednie reakcje, które mogą być zarówno ruchowe (np.
          ucieczka przed niebezpieczeństwem) jak i wewnętrzne (np. regulacja
          temperatury ciała w odpowiedzi na zmiany otoczenia).
        </p>

        <h3>Budowa Ucha i Mechanizm Przekazywania Impulsu Nerwowego</h3>
        <p>
          Budowa Ucha i Funkcje: Ucho składa się z trzech głównych części: ucha
          zewnętrznego, środkowego i wewnętrznego. Każda część pełni różne
          funkcje, takie jak zbieranie dźwięków (ucha zewnętrzne), wzmacnianie
          ich i przekazywanie do ucha wewnętrznego (ucha środkowe), oraz
          przetwarzanie dźwięków i przekazywanie informacji do mózgu (ucha
          wewnętrzne).
        </p>
        <p>
          Mechanizm Przekazywania Impulsu Nerwowego: Impuls nerwowy przemieszcza
          się wzdłuż neuronu za pomocą zmiany potencjału elektrycznego w postaci
          bodźca elektrycznego, a następnie przekazuje się do sąsiednich
          neuronów poprzez substancje chemiczne zwane neurotransmiterami w
          szczelinach synaptycznych.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Biologia;
