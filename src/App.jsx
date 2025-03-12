import About from "./components/About/About";
import Needs from "./components/Needs/Needs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 500,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Needs />
      <Footer />
    </>
  );
}

export default App;
