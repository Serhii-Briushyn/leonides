import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import ChangeLife from "./components/ChangeLife/ChangeLife";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import LeonidesOffer from "./components/LeonidesOffer/LeonidesOffer";
import HumanNeeds from "./components/HumanNeeds/HumanNeeds";
import Partners from "./Partners/Partners";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyInfo />
      <LeonidesOffer />
      <HumanNeeds />
      <ChangeLife />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
