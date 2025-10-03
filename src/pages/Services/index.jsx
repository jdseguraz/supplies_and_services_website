import { motion } from 'framer-motion'
import { Play, Quotes, Wrench, Scissors, Factory, Snowflake } from 'phosphor-react'
import { CONTACT_CONFIG, URLS } from '../../constants/contact'

const Services = () => {
  const services = [
    {
      id: 'corte-laser',
      title: 'Corte Láser',
      icon: <Scissors className="text-4xl text-blue-600" weight="duotone" />,
      shortDescription: 'Precisión y calidad en cortes láser de alta tecnología',
      longDescription: 'Utilizamos tecnología de corte láser de última generación para ofrecer cortes precisos en diversos materiales. Nuestro equipo especializado garantiza acabados perfectos y tolerancias mínimas para proyectos industriales de alta exigencia.',
      features: [
        'Corte de acero hasta 25mm de espesor',
        'Precisión de ±0.1mm',
        'Corte de formas complejas y diseños personalizados',
        'Acabados de alta calidad sin rebabas',
        'Tiempos de entrega optimizados'
      ],
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      images: [
        'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1586901533048-0e856dff2c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 'corte-lamina',
      title: 'Corte de Lámina',
      icon: <Wrench className="text-4xl text-blue-600" weight="duotone" />,
      shortDescription: 'Corte especializado de láminas metálicas con precisión industrial',
      longDescription: 'Servicio especializado en corte de láminas metálicas utilizando diversas técnicas según las necesidades del proyecto. Manejamos diferentes espesores y tipos de material con la máxima precisión y calidad.',
      features: [
        'Corte de láminas de acero, aluminio y acero inoxidable',
        'Espesores desde 0.5mm hasta 50mm',
        'Corte por plasma, oxicorte y cizalla',
        'Diseños personalizados según planos',
        'Control de calidad riguroso'
      ],
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      images: [
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1609205862806-24ced33f4fd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 'dobles-lamina',
      title: 'Dobles de Lámina',
      icon: <Factory className="text-4xl text-blue-600" weight="duotone" />,
      shortDescription: 'Conformado y doblado de láminas metálicas con precisión angular',
      longDescription: 'Servicios especializados en doblado y conformado de láminas metálicas. Utilizamos prensas hidráulicas y equipos de alta precisión para lograr ángulos exactos y formas complejas según especificaciones técnicas.',
      features: [
        'Doblado de láminas hasta 6 metros de longitud',
        'Precisión angular de ±1°',
        'Doblado de formas complejas y perfiles especiales',
        'Trabajo con diversos materiales metálicos',
        'Acabados profesionales sin marcas'
      ],
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      images: [
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
        'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 'refrigeracion-industrial',
      title: 'Suministro e Instalación de Refrigeración Industrial',
      icon: <Snowflake className="text-4xl text-blue-600" weight="duotone" />,
      shortDescription: 'Sistemas completos de refrigeración para plantas industriales',
      longDescription: 'Diseño, suministro e instalación de sistemas de refrigeración industrial completos. Nos especializamos en plantas agro-industriales, cámaras frigoríficas y sistemas de conservación de gran escala con tecnología de punta.',
      features: [
        'Diseño personalizado según necesidades',
        'Instalación de cámaras frigoríficas',
        'Sistemas de refrigeración para plantas agro-industriales',
        'Mantenimiento preventivo y correctivo',
        'Eficiencia energética optimizada',
        'Cumplimiento de normativas sanitarias'
      ],
      videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      images: [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1586901533048-0e856dff2c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ]
    }
  ]

  const handleQuoteService = (service) => {
    // Crear mensaje específico para el servicio
    let message = `¡Hola! Me interesa solicitar una cotización para el servicio de *${service.title}*.\n\n`
    message += `📋 *Servicio seleccionado:* ${service.title}\n`
    message += `💼 *Descripción:* ${service.shortDescription}\n\n`
    message += `Me gustaría recibir información sobre:\n`
    message += `• Cotización detallada del servicio\n`
    message += `• Tiempos de ejecución\n`
    message += `• Especificaciones técnicas\n`
    message += `• Disponibilidad para visita técnica\n\n`
    message += `¿Podrían contactarme para coordinar una reunión?\n\n¡Gracias!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`${URLS.whatsapp}/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative text-white py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/foto2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Soluciones industriales especializadas con tecnología de punta y más de 26 años de experiencia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800">Características:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuoteService(service)}
                    className="bg-black text-white py-3 px-8 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-3"
                  >
                    <Quotes weight="duotone" />
                    <span>Cotizar {service.title}</span>
                  </motion.button>
                </div>

                {/* Media Gallery */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Video Player */}
                  <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video
                      className="w-full h-64 object-cover"
                      poster={service.images[0]}
                      muted
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                    
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <Play className="text-white text-2xl" weight="fill" />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        Video disponible próximamente
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="grid grid-cols-3 gap-4">
                    {service.images.map((image, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded-lg overflow-hidden shadow-lg"
                      >
                        <img
                          src={image}
                          alt={`${service.title} - Imagen ${imgIdx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="relative py-16 text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/foto4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas una solución personalizada?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir tu proyecto y encontrar la mejor solución técnica
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = `¡Hola! Me interesa discutir un proyecto personalizado con ${CONTACT_CONFIG.companyName}.\n\nMe gustaría recibir información sobre:\n• Consultoría técnica especializada\n• Soluciones personalizadas\n• Visita técnica para evaluación\n\n¿Podrían contactarme para coordinar una reunión?\n\n¡Gracias!`
                const encodedMessage = encodeURIComponent(message)
                window.open(`${URLS.whatsapp}/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank')
              }}
              className="bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-xl"
            >
              Contactar Ahora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services