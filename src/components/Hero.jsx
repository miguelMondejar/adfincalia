import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { HERO_TITLE, HERO_SUBTITLE, HERO_CTA, SECTIONS, WHATSAPP_URL, PHONE_LINK } from "../data/constants";
import { trackEvent } from "../utils/analyticsConfig";

export default function Hero() {
  const handleScrollToContacto = () => {
    trackEvent("cta_click", { button: "hero_solicitar_presupuesto" });
    document.querySelector(`#${SECTIONS.realEstate}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("cta_click", { button: "hero_whatsapp" });
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section
      id="inicio"
      className="h-[90vh] text-white text-center bg-gradient-to-r from-[#5AAD94] to-[#A47C48] relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(84, 173, 148, 0.3) 0%, rgba(164, 124, 72, 0.3) 100%)',
      }}></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg">
          <span className="text-5xl md:text-6xl font-bold text-[#5AAD94]">AD</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
          {HERO_TITLE}
        </h1>

        <p className="text-lg md:text-2xl mb-12 text-gray-100 max-w-2xl">
          {HERO_SUBTITLE}
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
          <button
            onClick={handleScrollToContacto}
            className="bg-white text-[#5AAD94] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105 duration-300 animate-pulse"
          >
            {HERO_CTA} <FontAwesomeIcon icon={faArrowRight} />
          </button>

          {/* Secondary CTA - WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25d366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-bold transition shadow-xl hover:shadow-2xl hover:scale-105 duration-300 flex items-center gap-3 text-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Chatear
          </button>
        </div>
      </div>
    </section>
  );
}
