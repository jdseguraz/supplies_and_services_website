import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from('categories')
        .select('id, name, slug')
        .order('name', { ascending: true })
        
      setCategories(data || [])
    }

    fetchCategories()
  }, [])

  return (
    <footer className="bg-black text-[#f8f3e8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Información */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#c7a17a]">CinturonesArt</h3>
            <p className="mb-6 text-[#e8d9c5] leading-relaxed">
              Fabricamos cinturones artesanales de alta calidad con materiales premium y técnicas tradicionales.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/573103588801?text=Hola%2C%20vengo%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerte%20una%20cotizaci%C3%B3n"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c7a17a] hover:text-[#f8f3e8] transition-colors duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
              <a 
                href="https://www.instagram.com/cinturonesfostmary?igsh=MTl6MGp5cXhwYzFmbQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c7a17a] hover:text-[#f8f3e8] transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a 
                href="https://facebook.com/tupagina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c7a17a] hover:text-[#f8f3e8] transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#c7a17a]">Enlaces</h3>
            <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto">
              <Link 
                to="/" 
                className="text-[#e8d9c5] hover:text-[#c7a17a] transition-colors duration-300 text-base relative group block"
              >
                Inicio
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/categoria/${category.slug}`} 
                  className="text-[#e8d9c5] hover:text-[#c7a17a] transition-colors duration-300 text-base relative group block"
                >
                  {category.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#c7a17a]">Contacto</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <FaMapMarkerAlt className="mt-1 mr-4 text-[#c7a17a] group-hover:text-[#f8f3e8] transition-colors duration-300" size={20} />
                <span className="text-[#e8d9c5] leading-relaxed">
                  Dirección: Cra 83 #19 - 104, Belen altavista parte baja, Medellín, Colombia
                </span>
              </li>
              <li className="flex items-center group">
                <FaPhone className="mr-4 text-[#c7a17a] group-hover:text-[#f8f3e8] transition-colors duration-300" size={20} />
                <a 
                  href="tel:+123456789" 
                  className="text-[#e8d9c5] hover:text-[#c7a17a] transition-colors duration-300"
                >
                  +57 310 3588801
                </a>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="mr-4 text-[#c7a17a] group-hover:text-[#f8f3e8] transition-colors duration-300" size={20} />
                <a 
                  href="mailto:info@cinturonesart.com" 
                  className="text-[#e8d9c5] hover:text-[#c7a17a] transition-colors duration-300"
                >
                  info@cinturonesart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="border-t border-[#3a2516] mb-8"></div>

        {/* Derechos de autor */}
        <div className="text-center">
          <p className="text-[#6d4c3d] text-md">
            &copy; {new Date().getFullYear()} Juan Segura. Todos los derechos reservados.
          </p>
          <p className="text-[#5a3921] text-sm mt-2">
            Hecho con dedicación y pasión
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer