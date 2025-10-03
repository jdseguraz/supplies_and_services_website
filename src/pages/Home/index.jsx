import { motion } from 'framer-motion'
import { FaCog, FaIndustry, FaTools, FaSnowflake } from 'react-icons/fa'
import { CONTACT_CONFIG } from '../../constants/contact'

const Home = () => {
  const services = [
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "Corte Laser",
      description: "Precisión y calidad en cortes láser para todas sus necesidades industriales."
    },
    {
      icon: <FaCog className="text-4xl text-blue-600" />,
      title: "Corte de Lámina",
      description: "Cortes especializados en láminas con la más alta precisión técnica."
    },
    {
      icon: <FaIndustry className="text-4xl text-blue-600" />,
      title: "Dobles de Lámina",
      description: "Conformado y doblado de láminas para estructuras industriales."
    },
    {
      icon: <FaSnowflake className="text-4xl text-blue-600" />,
      title: "Refrigeración Industrial",
      description: "Suministro e instalación de sistemas de refrigeración industrial."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Supplies</span> and <br />
                <span className="text-blue-600">Services</span> ACR SAS
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cálculo - Diseño - Suministro e instalación para plantas agro-industriales
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Conoce Nuestros Servicios
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/foto1.jpg" alt="Servicios industriales" className="rounded-lg shadow-lg" />
              <img src="/foto2.jpg" alt="Equipos industriales" className="rounded-lg shadow-lg" />
              <img src="/foto3.jpg" alt="Instalaciones" className="rounded-lg shadow-lg" />
              <img src="/foto4.jpg" alt="Proyectos" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros <span className="text-blue-600">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para la industria agro-industrial con la más alta calidad y precisión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Experiencia y <span className="text-blue-600">Calidad</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En {CONTACT_CONFIG.companyName} nos especializamos en brindar soluciones técnicas 
                de alta calidad para la industria agro-industrial. Nuestro equipo de profesionales 
                cuenta con amplia experiencia en el diseño, cálculo y ejecución de proyectos industriales.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Más de 26 años de experiencia</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Proyectos ejecutados con éxito</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Equipo técnico especializado</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              <img src="/foto5.jpg" alt="Equipo de trabajo" className="rounded-lg shadow-lg" />
              <img src="/foto6.jpg" alt="Instalaciones" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home