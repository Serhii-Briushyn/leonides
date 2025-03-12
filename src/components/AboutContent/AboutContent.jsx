import styles from "./AboutContent.module.css";

const AboutContent = () => {
  return (
    <ul className={styles.container}>
      <li>
        <h2 className={styles.title}>INŠPIROVANÝ HISTÓRIOU</h2>
        <p className={styles.description} style={{ marginBottom: "24px" }}>
          Staroveké Grécko, označované ako kolíska Európskej civilizácie.
          Najpokrokovejším objavom je <span>Demokracia</span>, o ktorú sa
          usilujú všetky súčasné štátne zriadenia. Veľkým gréckym zázrakom je
          vznik filozofie. Diela starovekých Gréckych filozofov sú studnicou
          nevyčerpateľného poznania a inšpirácie. Boli položené základy dnešných
          disciplín ako fyzika, botanika, logika, rétorika a politické vedy.
          Veľký rozmach v stavebnom umení prinieslo pokroky ako vodovod,
          kanalizácia, či kúpele. Grécka lyrika, divadlo, školstvo a olympiáda.{" "}
          <br /> Toto všetko malo byť zničené jedným národom, jedným kráľom{" "}
          <span>Xerxesom, kráľom Perzskej ríše</span>. Mala to byť pomsta za
          porážku jeho otca spred desiatich rokov. Zhromaždil najväčšiu armádu
          tej doby s úmyslom podmaniť si celé Grécko.
        </p>
        <p className={styles.description}>
          Na odpor sa mu postavil jediný človek z celého Grécka{" "}
          <span>LEONIDAS, kráľ Sparty</span>. Kráľ, ktorý chcel uchrániť svoj
          národ pred smrťou a otroctvom. Leonidas vedel, že jediná možnosť
          postaviť sa na odpor je v priesmyku v Termopylách. Tam Peržanom
          nepomôže ani mnohopočetná presila, keďže sa bude bojovať na úzkom
          úseku priesmyku v Termopylách. Preto kráľ Leonidas s tristo najlepšími
          vojakmi vyrazil na boj k Termopylám, kde čakali na blížiaceho sa
          Xerxesa a jeho armádu. Tri dni odolávala spartanská armáda náporu
          Peržanov vďaka úzkemu priesmyku a dobre vyzbrojeným Sparťanom.
          Barbarom neumožnili uplatniť obrovskú presilu. Bolo otázkou času, kedy
          sa bitka skončí a hrdinskí bojovníci padnú. V tejto dobe sa
          roztrieštené Grécko spojilo a vyrazilo do boja proti Peržanom, ktorých
          definitívne porazili. Odkaz pre dnešné generácie: Táto bitka a
          nekonečné hrdinstvo Leonidasa bola jedným z najzásadnejších okamihov
          vývoja našej ľudskej civilizácie. Túžba pokračovať bola silnejšia, ako
          túžba prestať.{" "}
          <span>
            Hrdinstvo, odvaha, vytrvalosť, vášeň a túžba nás inšpirovala a stále
            inšpiruje v spoločnosti LEONIDES.
          </span>
        </p>
      </li>
      <li>
        <h2 className={styles.title}>VÍZIA A POSLANIE LEONIDES</h2>
        <p className={styles.description}>
          Kráľ LEONIDAS sa svojou odvahou a vierou vzoprel otroctvu a tyranii
          Perzskej ríše, čím uchránil základné ľudské hodnoty ako je sloboda a
          demokracia. Svojím hrdinstvom ovplyvnil vývoj celej civilizácie až po
          dnešok. Inšpirovaný históriou sme sa my v spoločnosti{" "}
          <span>LEONIDES - Transform your life</span> od svojho vzniku
          zaviazali, že naším poslaním bude pozitívne transformovať ľudské
          životy. Našim klientom prinášame transparentné informácie pod
          „príkrovku“ finančného trhu, o ktorých sa bežne nehovorí. Reálne
          riešenia, výhodné produkty a zodpovedný prístup.{" "}
          <span>Dávame šancu ľuďom</span>, ktorí chcú zmeniť svoj život k
          lepšiemu a žiť svoj sen. Ponúkame obchodnú príležitosť a kompletný
          systém, ktorý ich prevedie k úspechu. Motivujeme ľudí, povzbudzujeme
          ich, aby nabrali odvahu postaviť život na vlastných rukách a vytvoriť
          si svoju vlastnú vysnívanú budúcnosť. Sme presvedčení, že každý človek
          by mal dostať šancu žiť svoj život, aký si sám vysníval. Naše
          poslanie, systém, a vízia pomáha vytvárať hodnotu, dávať šancu a
          slobodu ľuďom.
        </p>
      </li>
      <li>
        <h2 className={styles.title}>HODNOTY</h2>
        <ul className={styles.list}>
          <li>Transparentnosť</li>
          <li>Etika</li>
          <li>Odvaha</li>
          <li>Líderstvo</li>
          <li>Vzdelávanie</li>
          <li>Tímovosť</li>
          <li>Presvedčenie</li>
        </ul>
      </li>

      <li>
        <h2 className={styles.title}>STABILITA A ZÁZEMIE SPOLOČNOSTI</h2>
        <ul className={styles.list}>
          <li>Vznik od roku 2009</li>
          <li>Viac ako 10 ročná prax v odbore</li>
          <li>Sme členom AFISP</li>
          <li>Povolenie NBS PAG</li>
          <li>Certifikát solventných firiem</li>
          <li>Ocenený TOP externý partner za roky 2014 - 2015</li>
        </ul>
      </li>
    </ul>
  );
};

export default AboutContent;
