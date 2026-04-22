import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { COMPANY_NAME, COMPANY_FULL_NAME, LOCATION, PHONE_LINK, PHONE_FORMATTED, SOCIAL_LINKS, EMAIL, CIF } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-[#5AAD94] font-bold text-lg mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm mb-2">{COMPANY_FULL_NAME}</p>
            <p className="text-sm text-gray-400">CIF: {CIF}</p>
            <p className="text-sm mt-4">{LOCATION}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#5AAD94] font-bold text-lg mb-4">Contacto</h3>
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-[#5AAD94] hover:text-[#A47C48] transition mb-2"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>{PHONE_FORMATTED}</span>
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-[#5AAD94] hover:text-[#A47C48] transition text-sm break-all"
            >
              {EMAIL}
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="flex items-center gap-2 text-[#5AAD94] hover:text-[#A47C48] transition mt-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#5AAD94] font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4 text-2xl">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
                aria-label="adfincas en Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition"
                aria-label="adfincas en Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
                aria-label="adfincas en LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-gray-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 text-sm">
            <div>
              <p className="text-gray-400">
                <strong className="text-white">Aviso Legal:</strong> Esta web utiliza cookies propias y de terceros.
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                <strong className="text-white">Privacidad:</strong> Consulta nuestra política de privacidad y protección de datos.
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} {COMPANY_NAME} – Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
