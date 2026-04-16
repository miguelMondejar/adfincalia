import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const galleryItems = [
    {
      id: 1,
      title: "Comunidades Propietarias",
      description: "Gestión integral de edificios y comunidades",
      category: "Administración"
    },
    {
      id: 2,
      title: "Edificios Residenciales",
      description: "Administración profesional de viviendas",
      category: "Administración"
    },
    {
      id: 3,
      title: "Complejos Modernos",
      description: "Gestión de propiedades de todas las tipologías",
      category: "Administración"
    },
    {
      id: 4,
      title: "Servicios Inmobiliarios",
      description: "Compra, venta y alquiler de inmuebles",
      category: "Inmobiliaria"
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, galleryItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section id="galeria" className="relative pt-20">
      {/* Main Gallery Hero */}
      <div className="relative h-screen md:h-[80vh] bg-gradient-to-br from-[#5AAD94] to-[#A47C48] overflow-hidden flex items-center justify-center">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(135deg, rgba(84, 173, 148, 0.2) 0%, rgba(164, 124, 72, 0.2) 100%)",
        }}></div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-8 inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold">{galleryItems[currentIndex].category}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {galleryItems[currentIndex].title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {galleryItems[currentIndex].description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="bg-white text-[#5AAD94] p-4 rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              aria-label="Anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>

            <button
              onClick={goToNext}
              className="bg-white text-[#5AAD94] p-4 rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              aria-label="Siguiente"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Indicators - Bottom Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#5AAD94] w-12 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`Ir a galeria ${index + 1}`}
              />
            ))}
            <span className="ml-4 text-sm text-gray-600 font-semibold">
              {currentIndex + 1} / {galleryItems.length}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails Gallery */}
      <div className="bg-gray-50 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">
            Explora nuestras propiedades
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`group relative h-48 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? "border-[#5AAD94] shadow-lg"
                    : "border-transparent hover:border-[#A47C48]"
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5AAD94] to-[#A47C48]"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-100 text-xs md:text-sm">
                    {item.category}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
