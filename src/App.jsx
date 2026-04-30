import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import RealEstate from "./components/RealEstate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import LegalInfo from "./pages/LegalInfo";
import Hero from "./components/Hero";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Check URL to determine current page
    const path = window.location.pathname;
    if (path.includes("/legal")) {
      setCurrentPage("legal");
    } else {
      setCurrentPage("home");
    }

    // Also listen for URL changes
    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath.includes("/legal")) {
        setCurrentPage("legal");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      
      {currentPage === "home" ? (
        <>
          <Hero />
          <Gallery />
          <AboutUs />
          <Services />
          <RealEstate />
          <Contact />
        </>
      ) : (
        <LegalInfo />
      )}
      
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
