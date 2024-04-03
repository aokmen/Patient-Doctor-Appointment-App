import React from "react";
import Header from "../../components/header/Header";

const Datenschutz = () => {
  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen pt-[150px] text-main-dark-blue bg-main-light-blue">
      <div className="w-full max-w-6xl px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="font-bold text-3xl">Datenschutzerklärung</h1>

          <p>
            Die Datenschutzerklärung gilt für die Nutzung der Webseite "Patient
            - Doctor Appointment App" unter der Terminuns.
          </p>

          <div className=" leading-8">
            <h1 className="font-bold text-lg">
              1. Datenschutz auf einen Blick
            </h1>
            <h3 className="font-bold">Allgemeine Hinweise</h3>
            <p className="font-normal">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-bold">Datenerfassung auf unserer Website</h3>
            <p className="font-normal">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten
              werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
              Kontaktformular eingeben. Andere Daten werden automatisch beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie unsere Website betreten.
            </p>
          </div>
          <div className=" leading-8">
            <h1 className="font-bold text-lg">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h1>
            <h3 className="font-bold">Datenschutz</h3>
            <p className="font-normal">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
              Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
              persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
              wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
              geschieht. Wir weisen darauf hin, dass die Datenübertragung im
              Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>
          </div>
          <div className=" leading-8">
            <h1 className="font-bold text-lg">
              3. Datenerfassung auf unserer Website
            </h1>
            <h3 className="font-bold">Cookies</h3>
            <p className="font-normal">
              Die Internetseiten verwenden teilweise so genannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
              die Ihr Browser speichert.
            </p>
          </div>
          <div className=" leading-8">
            <h1 className="font-bold text-lg">4. Analyse-Tools und Werbung</h1>
            <h3 className="font-bold">Google Analytics</h3>
            <p className="font-normal">
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet
              so genannte "Cookies". Das sind Textdateien, die auf Ihrem
              Computer gespeichert werden und die eine Analyse der Benutzung der
              Website durch Sie ermöglichen. Die durch den Cookie erzeugten
              Informationen über Ihre Benutzung dieser Website werden in der
              Regel an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
          </div>
          <div className=" leading-8">
            <h1 className="font-bold text-lg">5. Datensicherheit</h1>

            <p className="font-normal">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
          </div>
          <div className=" leading-8">
            <h1 className="font-bold text-lg">
              6. Recht auf Auskunft, Löschung, Sperrung
            </h1>

            <p className="font-normal">
              Sie haben jederzeit im Rahmen der geltenden gesetzlichen
              Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können
              Sie sich jederzeit unter der im Impressum angegebenen Adresse an
              uns wenden.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Datenschutz;
