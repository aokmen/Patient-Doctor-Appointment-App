import React from "react";

const Impressum = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-main-dark-blue bg-main-light-blue">
      <div className="w-full max-w-6xl px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="font-bold text-3xl">Impressum</h1>

          <p>Anbieterin dieser Seite ist die</p>

          <div className=" leading-7">
            <h3 className="font-bold">Terminuns</h3>
            <p className="font-normal">
              KölnerStrasse 06 <br /> 6606 Köln <br />
              <span className="font-medium">Telefon:</span> +49 (0)123456789
              <br />
              <span className="font-medium">E-Mail:</span> kontakt@terminuns.de
              <br /> <span className="font-medium">Geschäftsführer:</span>
              Terminuns
              <br />{" "}
              <span className="font-medium">
                Umsatzsteuer-Identifikationsnummer:
              </span>{" "}
              DE0000000
            </p>
          </div>

          <div className=" leading-7">
            <h3 className="font-bold">Urheberrechtshinweis:</h3>
            <p className="font-normal ">
              Alle Inhalte (Texte, Bilder sowie deren Anordnung, Layout-,
              Schrift- und Farbgestaltung) auf Webseiten der Terminuns GmbH
              unterliegen dem Schutz des Urheberrechts. Terminuns ist eine
              eingetragene Marke der Terminuns.
            </p>
          </div>

          <div className=" leading-7">
            <h3 className="font-bold">
              Ärzteverzeichnis und verlinkte Webseiten:
            </h3>
            <p className="font-normal ">
              Das Ärzteverzeichnis wird aus öffentlichen Quellen sowie durch
              Eigenangaben von Ärzten erstellt. Für die Richtigkeit von externen
              Angaben kann trotz sorgfältiger Prüfung keine Gewähr übernommen
              werden. Unsere Webseite enthält zudem Links auf externe Webseiten
              Dritter (insbesondere von Ärzten und Behandlern). Auf Inhalte
              dieser direkt oder indirekt verlinkten Webseiten haben wir keinen
              Einfluss. Daher können wir für die „externen Links“ auch keine
              Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der
              externen Links sind die jeweilige Anbieter oder Betreiber
              (Urheber) der Seiten verantwortlich.
            </p>
          </div>
          <div className=" leading-7">
            <h3 className="font-bold">
              Hinweis zum Streitbeilegungsverfahren:
            </h3>
            <p className="font-normal ">
              Die Europäische Kommission stellt eine Plattform für
              außergerichtliche Online-Streitigkeiten bereit
              (https://ec.europa.eu/consumers/odr). Terminuns nimmt jedoch an
              keinem formellen Streitbeilegungsverfahren teil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
