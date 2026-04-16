import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import RealEstate from "./components/RealEstate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Gallery />
      <AboutUs />
      <Services />
      <RealEstate />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
