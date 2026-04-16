import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { REAL_ESTATE_SERVICES } from "../data/realEstateServices";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "../data/constants";

// Inicializar EmailJS
if (EMAILJS_SERVICE_ID !== "service_xxxxxxxxxxxx") {
  emailjs.init(EMAILJS_USER_ID);
}

export default function RealEstate() {
  const [formData, setFormData] = useState({
    propertyType: "vivienda",
    location: "",
    area: "",
    rooms: "",
    bathrooms: "",
    description: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (EMAILJS_SERVICE_ID === "service_xxxxxxxxxxxx") {
        // Modo demo
        console.log("Datos del formulario (modo demo):", formData);
        setSubmitted(true);
      } else {
        // Enviar con EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            property_type: formData.propertyType,
            location: formData.location,
            area: formData.area,
            rooms: formData.rooms,
            bathrooms: formData.bathrooms,
            description: formData.description,
            owner_name: formData.ownerName,
            owner_phone: formData.ownerPhone,
            owner_email: formData.ownerEmail,
            to_email: "info@adfincalia.es",
          },
          EMAILJS_USER_ID
        );
        setSubmitted(true);
      }

      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          propertyType: "vivienda",
          location: "",
          area: "",
          rooms: "",
          bathrooms: "",
          description: "",
          ownerName: "",
          ownerPhone: "",
          ownerEmail: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Error al enviar formulario:", err);
      setError("Error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inmobiliaria" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Servicios Inmobiliarios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expertos en compra, venta y gestión de propiedades inmobiliarias
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {REAL_ESTATE_SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition border-l-4 border-[#5AAD94]"
            >
              <div className="w-12 h-12 bg-[#5AAD94] rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="text-gray-600 text-sm space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#A47C48] mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-r from-[#5AAD94] to-[#A47C48] rounded-lg p-12 text-white">
          <h3 className="text-3xl font-bold mb-2 text-center">¿Tienes un inmueble?</h3>
          <p className="text-center mb-8 text-lg">Completa este formulario y nos pondremos en contacto</p>

          {submitted ? (
            <div className="bg-green-500 p-6 rounded-lg text-center">
              <p className="text-xl font-semibold">¡Gracias! Tu solicitud ha sido enviada correctamente.</p>
              <p className="text-sm mt-2">Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {error && (
                <div className="bg-red-500 p-4 rounded-lg mb-6">
                  <p>{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Tipo de Propiedad */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Tipo de Propiedad *
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-[#1A1A1A] border border-gray-300"
                  >
                    <option value="vivienda">Vivienda</option>
                    <option value="local">Local Comercial</option>
                    <option value="garage">Garaje</option>
                    <option value="terreno">Terreno</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Ubicación *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Ciudad, provincia..."
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Área */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Área (m²)
                  </label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Ej: 100"
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Habitaciones */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Habitaciones
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    placeholder="Ej: 3"
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Baños */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Baños
                  </label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    placeholder="Ej: 2"
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Nombre Propietario */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nombre Propietario *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleInputChange}
                    placeholder="+34 6xx xxx xxx"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Descripción Adicional
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos más detalles sobre la propiedad..."
                  rows="4"
                  className="w-full px-4 py-2 rounded border border-gray-300 text-[#1A1A1A]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-[#5AAD94] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-xs mt-6 opacity-75">
            Los campos marcados con * son obligatorios
          </p>
        </div>
      </div>
    </section>
  );
}
