import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

const LocationMap = () => {
  return (
    <div className="py-16 bg-[#f8f3e8] border-t border-[#e8d9c5] !mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5a3921] mb-4">
            Visítanos en Nuestro Taller
          </h2>
          <div className="h-[2px] w-20 bg-[#c7a17a] mx-auto mb-6"></div>
          <p className="text-lg text-[#6d4c3d] max-w-2xl mx-auto">
            Conoce donde creamos nuestros productos artesanales con dedicación y calidad
          </p>
        </motion.div>

        {/* Mapa con efecto hover */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border-2 border-[#e8d9c5]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.586276488915!2d-75.60839682432089!3d6.225026326558444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ec49ede769%3A0xd85457779cb92819!2zQ3JhIDgzICMgMTktMTA0LCBNZWRlbGzDrW4sIEJlbMOpbiwgTWVkZWxsw61uLCBBbnRpb3F1aWE!5e0!3m2!1sen!2sco!4v1751596622247!5m2!1sen!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación del local"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>

        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#e8d9c5] p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#5a3921]" />
            </div>
            <h3 className="font-serif font-bold text-[#5a3921] mb-2">Dirección</h3>
            <p className="text-[#6d4c3d]">Cra 83 #19 - 104<br />Belen Altavista<br />Medellín, Antioquia</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#e8d9c5] p-4 rounded-full mb-4">
              <FaClock className="text-2xl text-[#5a3921]" />
            </div>
            <h3 className="font-serif font-bold text-[#5a3921] mb-2">Horario</h3>
            <p className="text-[#6d4c3d]">
              Lunes a Viernes<br />
              7:00 AM - 6:00 PM<br />
              Sábados 8:00 AM - 2:00 PM
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LocationMap;