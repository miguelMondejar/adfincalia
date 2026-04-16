import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SERVICES_DATA } from "../data/services";

export default function Services() {
  const services = SERVICES_DATA;

  return (
    <section className="py-20 px-6 bg-gray-50" id="servicios">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">Servicios</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales para la administración de fincas y servicios inmobiliarios
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center h-full"
            >
              <div className="w-16 h-16 bg-[#5AAD94] rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={s.icon} className="text-3xl text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#1A1A1A]">{s.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{s.desc}</p>
              {s.details && (
                <ul className="text-gray-600 text-sm md:text-base list-disc list-inside text-left w-full">
                  {s.details.map((d, j) => (
                    <li key={j} className="mb-2">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-10 shadow-md">
          <h3 className="text-2xl font-bold text-[#5AAD94] mb-4">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-[#A47C48] mb-2">Experiencia</p>
              <p className="text-gray-600">Años de trayectoria en el sector inmobiliario</p>
            </div>
            <div>
              <p className="font-semibold text-[#A47C48] mb-2">Profesionalismo</p>
              <p className="text-gray-600">Equipo cualificado y dedicado a tu satisfacción</p>
            </div>
            <div>
              <p className="font-semibold text-[#A47C48] mb-2">Confianza</p>
              <p className="text-gray-600">Transparencia total en cada transacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}