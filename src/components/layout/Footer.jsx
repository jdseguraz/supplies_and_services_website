import { Link } from 'react-router-dom'
import { Phone, Envelope, MapPin, Clock, WhatsappLogo, ArrowRight } from 'phosphor-react'
import { CONTACT_CONFIG } from '../../constants/contact'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="text-blue-400">Supplies</span> and <br />
                <span className="text-blue-400">Services</span> ACR SAS
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {CONTACT_CONFIG.slogan}
            </p>
            <p className="text-gray-400 text-xs">
              Más de 26 años de experiencia en soluciones industriales
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Navegación</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <ArrowRight size={12} className="mr-2" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Servicios</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Corte Láser</li>
              <li>• Corte de Lámina</li>
              <li>• Dobles de Lámina</li>
              <li>• Refrigeración Industrial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contacto</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-400" size={16} weight="duotone" />
                <span>{CONTACT_CONFIG.phone}</span>
              </div>
              <div className="flex items-center">
                <WhatsappLogo className="mr-3 text-green-400" size={16} weight="duotone" />
                <span>{CONTACT_CONFIG.whatsappNumber}</span>
              </div>
              <div className="flex items-center">
                <Envelope className="mr-3 text-blue-400" size={16} weight="duotone" />
                <span>{CONTACT_CONFIG.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-400" size={16} weight="duotone" />
                <span>{CONTACT_CONFIG.address}</span>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 text-blue-400 mt-0.5" size={16} weight="duotone" />
                <div className="text-xs">
                  <div>{CONTACT_CONFIG.businessHours.weekdays}</div>
                  <div>{CONTACT_CONFIG.businessHours.saturday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {CONTACT_CONFIG.companyName}. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado para la excelencia industrial</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer