import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/supplies-logo-full.png" alt="Supplies and Services ACR SAS" className='h-16 mb-4 filter brightness-0 invert' />
            <p className="text-gray-300 text-sm leading-relaxed">
              Cálculo - Diseño - Suministro e instalación para plantas agro-industriales
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Nuestros Servicios</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Corte laser</li>
              <li>• Corte de lámina</li>
              <li>• Dobles de lámina</li>
              <li>• Suministro e instalación de refrigeración industrial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contacto</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <span>+57 313 464 6224</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <span>gerencia@suppliesandservices.net</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span>CALLE 59 N° 50-35 BARRIO PRADO CENTRO - MEDELLÍN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Supplies and Services ACR SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer