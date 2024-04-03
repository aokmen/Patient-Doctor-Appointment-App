import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Hilfebereich = () => {
  const [faqStates, setFaqStates] = useState({});

  const toggleDetails = (index) => {
    setFaqStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };
  const faqs = [
    {
      question: (
        <ul className="list-disc">
          <li>
            Ich habe mein Passwort vergessen / Wie kann ich mein Passwort
            zurücksetzen?
          </li>
        </ul>
      ),

      answer: (
        <p className=" mt-3 group-open:animate-fadeIn">
          <span className="font-semibold">
            Wenn Sie Ihr Passwort vergessen haben oder bewusst zurücksetzen
            wollen, dann erfahren Sie hier wie Sie vorgehen können.
          </span>
          <ul className="list-decimal">
            <li>
              Wir empfehlen Ihnen, Ihr Passwort aus Sicherheitsgründen
              regelmäßig zu ändern; verwenden Sie idealerweise Groß- und
              Kleinbuchstaben, eine Zahl und ein Sonderzeichen
            </li>
            <li>
              Die Mitarbeitenden von Terminuns fragen Sie niemals nach Ihrem
              Passwort. Bitte bewahren Sie es nur für sich selbst auf und geben
              Sie es nicht an andere weiter
            </li>
            <li>
              Sie können das Passwort Ihres Terminuns-Kontos nur zurücksetzen,
              wenn Sie bereits ein Terminuns-Konto eingerichtet haben
            </li>
            <li>
              Sie können das Passwort für Ihr Terminuns-Konto per E-Mail oder
              SMS zurücksetzen
            </li>
          </ul>
        </p>
      ),
    },
    {
      question: (
        <ul className="list-disc">
          <li>Wie kann ich einen Termin vereinbaren?</li>
        </ul>
      ),

      answer: (
        <p className=" mt-3 group-open:animate-fadeIn">
          <span className="font-semibold">
            Einen Arzttermin suchen und vereinbaren
          </span>
          <ul className="list-decimal">
            <li>Starten Sie die Suche über das Suchfeld auf der Startseite</li>

            <li>
              Geben Sie Ihren Ort oder Ihre PLZ ein und klicken Sie auf Suchen
            </li>

            <li>Sie sehen nun die Suchergebnisse, die zu Ihrer Suche passen</li>

            <li>
              Wählen Sie einen Arzt oder eine Arztpraxis, um einen Termin zu
              vereinbaren
            </li>

            <li>
              Wählen Sie ein Datum und eine Uhrzeit, je nach Verfügbarkeit
            </li>

            <li>
              Falls Sie noch nicht eingeloggt sind, können Sie nun entweder ein
              neues Konto anlegen oder sich in Ihr bestehendes Konto einloggen
            </li>
            <li>Klicken Sie auf Terminbuchung bestätigen</li>

            <li>
              Sie haben anschließend die Möglichkeit sich auf die Warteliste zu
              setzen, wenn Ihr Termin die Bedingungen hierfür erfüllt
            </li>
          </ul>
        </p>
      ),
    },
    {
      question: (
        <ul className="list-disc">
          <li> Mobil-App: Ich kann meine Termine nicht einsehen</li>
        </ul>
      ),

      answer: (
        <p className=" mt-3 group-open:animate-fadeIn">
          <span className="font-semibold">
            Wenn Sie Nutzer der Terminuns-App für Mobilgeräte sind, aber in der
            Sektion Meine Termine in der Navigationsleiste werden keine Termine
            angezeigt? Prüfen Sie bitte folgende Punkte:
          </span>
          <ul className="list-decimal">
            <li>
              Stellen Sie sicher, dass Sie in Ihrem Terminuns-Konto eingeloggt
              sind.
            </li>
            <li>
              Wenn Sie eingeloggt sind und Ihre vergangenen Termine dennoch
              nicht angezeigt werden, kann es sein, dass die Terminhistorie
              Ihrer vergangenen Termine verborgen ist.
            </li>
          </ul>
        </p>
      ),
    },
    // Diğer sorular buraya eklenebilir
  ];
  return (
    <>
    <Header/>
      <div className="flex items-center justify-center  pt-[150px] text-main-dark-blue bg-main-light-blue">
        <div className="w-full max-w-6xl h-[890px] px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">
            Terminuns Hilfebereich
          </h2>
          <p className="text-xl mt-3">Häufig gestellte Fragen</p>

          <div className="divide-y divide-main-light-blue max-w-2xl mx-auto mt-8">
            {faqs.map((faq, index) => (
              <div className="py-5 flex flex-col" key={index}>
                <button
                  className="flex justify-between items-center font-medium cursor-pointer"
                  onClick={() => toggleDetails(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transition ${
                      faqStates[index] ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-3 ${
                    faqStates[index] ? "animate-fadeIn" : "hidden"
                  }`}
                >
                  <span className="font-semibold">{faq.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Hilfebereich;
