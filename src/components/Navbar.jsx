import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PHONE_LINK, MENU_ITEMS, COMPANY_NAME, SOCIAL_LINKS, WHATSAPP_URL } from "../data/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-[#5AAD94] to-[#A47C48] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className={`flex items-center gap-3 font-bold text-2xl transition-all duration-300 ${
              scrolled
                ? "text-[#5AAD94]"
                : "text-white"
            }`}
            aria-label="adfincalia - Inicio"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                scrolled
                  ? "bg-[#5AAD94] text-white"
                  : "bg-white text-[#5AAD94]"
              }`}
            >
              AD
            </div>
            <span className="hidden sm:inline">adfincalia</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-8 mx-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-80 relative group ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-[#5AAD94]" : "bg-white"
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled
                  ? "bg-green-100 text-green-600 hover:bg-green-200"
                  : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              }`}
              title="Contactar por WhatsApp"
              aria-label="Abrir WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled
                  ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              }`}
              title="Enviar email"
              aria-label="Enviar email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>

            {/* Phone Button */}
            <a
              href={PHONE_LINK}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg ${
                scrolled
                  ? "bg-[#5AAD94] text-white hover:bg-[#A47C48]"
                  : "bg-white text-[#5AAD94] hover:bg-gray-100"
              }`}
              aria-label="Llamar"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span className="hidden lg:inline">Llamar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2 items-center">
            {/* Mobile WhatsApp Icon */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-green-100 text-green-600"
                  : "bg-white bg-opacity-20 text-white"
              }`}
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                size="lg"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden border-t transition-all duration-300 ${
              scrolled
                ? "border-gray-200 bg-gray-50"
                : "border-white border-opacity-20 bg-gradient-to-b from-[#5AAD94] to-[#A47C48]"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Menu Items */}
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white hover:bg-opacity-20"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Divider */}
              <div
                className={`my-2 ${
                  scrolled ? "border-gray-200" : "border-white border-opacity-20"
                } border-t`}
              ></div>

              {/* Mobile CTA Buttons */}
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                onClick={handleMenuItemClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-white bg-white bg-opacity-20 hover:bg-opacity-30"
                }`}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </a>

              <a
                href={PHONE_LINK}
                onClick={handleMenuItemClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-[#5AAD94] bg-green-50 hover:bg-green-100"
                    : "text-white bg-white bg-opacity-20 hover:bg-opacity-30"
                }`}
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>Llamar</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}