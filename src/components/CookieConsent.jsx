import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] = useState({
    essential: true, // siempre true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Verificar si ya aceptó cookies
    const savedPreferences = localStorage.getItem("cookieConsent");
    if (!savedPreferences) {
      setShowBanner(true);
    } else {
      const prefs = JSON.parse(savedPreferences);
      setPreferences(prefs);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    // Aquí se cargaría Google Analytics, etc.
    loadAnalytics(true, true);
  };

  const handleRejectAll = () => {
    const rejected = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(rejected));
    setPreferences(rejected);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const customPrefs = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(customPrefs));
    setShowBanner(false);
    setShowSettings(false);
    loadAnalytics(customPrefs.analytics, customPrefs.marketing);
  };

  const loadAnalytics = (analytics, marketing) => {
    // Aquí se cargaría Google Analytics si analytics es true
    if (analytics) {
      console.log("Analytics enabled");
      // window.dataLayer = window.dataLayer || [];
      // gtag('consent', 'update', {...})
    }
  };

  const handleToggleCheckbox = (type) => {
    if (type !== "essential") {
      setPreferences((prev) => ({
        ...prev,
        [type]: !prev[type],
      }));
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showSettings ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Message */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faCookie}
                  className="text-3xl text-[#5AAD94] mt-1"
                />
                <div>
                  <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">
                    Gestión de Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Utilizamos cookies para mejorar tu experiencia, analytics y
                    contenido personalizado. Consulta nuestra{" "}
                    <a
                      href="#privacidad"
                      className="text-[#5AAD94] hover:underline"
                    >
                      política de privacidad
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <button
                onClick={handleAcceptAll}
                className="bg-[#5AAD94] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#A47C48] transition w-full"
              >
                Aceptar todo
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition w-full"
              >
                Personalizar
              </button>
              <button
                onClick={handleRejectAll}
                className="text-gray-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
              >
                Rechazar no esenciales
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Settings */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4 text-[#1A1A1A]">
                Personalizar Cookies
              </h3>

              {/* Essential Cookies */}
              <div className="border rounded-lg p-4 mb-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={true}
                    disabled
                    className="w-5 h-5 rounded cursor-not-allowed"
                  />
                  <div className="flex-1">
                    <label className="font-semibold text-[#1A1A1A] cursor-not-allowed">
                      Cookies Esenciales
                    </label>
                    <p className="text-sm text-gray-600">
                      Necesarias para que el sitio funcione correctamente.
                      Siempre activas.
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={() => handleToggleCheckbox("analytics")}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="analytics"
                      className="font-semibold text-[#1A1A1A] cursor-pointer"
                    >
                      Cookies de Analytics
                    </label>
                    <p className="text-sm text-gray-600">
                      Nos ayudan a entender cómo utilizas el sitio (Google
                      Analytics).
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={() => handleToggleCheckbox("marketing")}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="marketing"
                      className="font-semibold text-[#1A1A1A] cursor-pointer"
                    >
                      Cookies de Marketing
                    </label>
                    <p className="text-sm text-gray-600">
                      Utilizadas para rastrear y personalizar anuncios.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <button
                onClick={handleSavePreferences}
                className="bg-[#5AAD94] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#A47C48] transition w-full"
              >
                Guardar Preferencias
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
              >
                Volver
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}