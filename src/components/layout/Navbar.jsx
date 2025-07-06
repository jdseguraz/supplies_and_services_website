import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const location = useLocation()

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

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Scroll to top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src="/public/logotipo.png" alt="logo" className='h-[50px]' />
          </Link>

          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-amber-600 transition font-medium"
            >
              Inicio
            </Link>
            
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="text-gray-700 hover:text-amber-600 transition font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Iconos de acción */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://wa.me/573103588801?text=Hola%2C%20vengo%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerte%20una%20cotizaci%C3%B3n"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-amber-600 transition"
            >
              <FaShoppingBag size={20} />
            </a>
          </div>

          {/* Botón móvil */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/"
                className="text-gray-700 hover:text-amber-600 transition font-medium py-2"
              >
                Inicio
              </Link>
              
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categoria/${category.slug}`}
                  className="text-gray-700 hover:text-amber-600 transition font-medium py-2"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar