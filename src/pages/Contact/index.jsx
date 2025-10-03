import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaBuilding } from 'react-icons/fa'
import { CONTACT_CONFIG } from '../../constants/contact'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Contacta</span> con Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte con tus proyectos industriales. 
            Contáctanos para una consulta personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaBuilding className="inline mr-2" />
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="inline mr-2" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="313 464 6224"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option>Selecciona un servicio</option>
                  <option>Corte Laser</option>
                  <option>Corte de Lámina</option>
                  <option>Dobles de Lámina</option>
                  <option>Refrigeración Industrial</option>
                  <option>Consultoría Integral</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Describe tu proyecto o consulta..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Teléfono</p>
                    <p className="text-gray-600">{CONTACT_CONFIG.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">{CONTACT_CONFIG.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Ubicación</p>
                    <p className="text-gray-600">{CONTACT_CONFIG.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Horario de Atención</p>
                    <div className="text-gray-600 text-sm">
                      <p>{CONTACT_CONFIG.businessHours.weekdays}</p>
                      <p>{CONTACT_CONFIG.businessHours.saturday}</p>
                      <p>{CONTACT_CONFIG.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">{CONTACT_CONFIG.companyName}</h3>
              <p className="text-blue-100 mb-4">
                {CONTACT_CONFIG.slogan}
              </p>
              <div className="space-y-2 text-blue-100 text-sm">
                <p>✓ Más de 26 años de experiencia</p>
                <p>✓ Proyectos ejecutados con éxito</p>
                <p>✓ Equipo técnico especializado</p>
                <p>✓ Calidad garantizada</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={CONTACT_CONFIG.mapsEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${CONTACT_CONFIG.companyName}`}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact