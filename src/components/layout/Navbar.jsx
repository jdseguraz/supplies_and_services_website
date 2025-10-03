import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getFeaturedCategories } from '../../data/products'
import { FaChevronDown } from 'react-icons/fa'
import { ShoppingCart, List, X } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext'

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const featuredCategories = getFeaturedCategories(6)
  const { totalItems } = useCart()

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cerrar dropdown de productos en mobile
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false)
      }
      
      // Cerrar menú móvil
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const isMobile = window.innerWidth < 768
        if (isMobile) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isProductsOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isProductsOpen, isMobileMenuOpen])

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src="/supplies-logo-full.png" alt="Supplies and Services ACR SAS" className='h-12' />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-800">
                <span className="text-blue-600">Supplies</span> and <span className="text-blue-600">Services</span>
              </div>
              <div className="text-sm font-medium text-gray-600 -mt-1">
                ACR SAS
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Products Dropdown Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link 
                to="/productos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group flex items-center space-x-1"
              >
                <span>Productos</span>
                <FaChevronDown className={`text-xs transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 transform -translate-x-1/2 mt-2 w-[800px] max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-6">
                        Nuestras categorías de productos
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {featuredCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/categoria/${category.slug}`}
                            onClick={() => setIsProductsOpen(false)}
                            className="group p-4 rounded hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md"
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className="w-20 h-20 rounded-xl overflow-hidden p-2">
                                <img 
                                  src={category.image} 
                                  alt={category.name}
                                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {category.name}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                        <Link
                          to="/productos"
                          onClick={() => setIsProductsOpen(false)}
                          className="text-blue-600 hover:underline transition-colors duration-200"
                        >
                          Ver catálogo completo
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile: Carrito + Menú Hamburguesa */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Carrito de cotización - Siempre visible */}
            <Link 
              to="/carrito" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              <ShoppingCart size={24} weight="regular" />
              {totalItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                >
                  {totalItems}
                </motion.div>
              )}
            </Link>
            
            {/* Botón hamburguesa */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Desktop: Solo Carrito */}
          <div className="hidden md:block">
            <Link 
              to="/carrito" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              <ShoppingCart size={24} weight="regular" />
              {totalItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                >
                  {totalItems}
                </motion.div>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Inicio
                </Link>
                
                {/* Productos con submenu en mobile */}
                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    <span>Productos</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 overflow-hidden"
                      >
                        <Link
                          to="/productos"
                          onClick={() => {
                            setIsProductsOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                          className="block px-8 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                        >
                          Ver catálogo completo
                        </Link>
                        {featuredCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/categoria/${category.slug}`}
                            onClick={() => {
                              setIsProductsOpen(false)
                              setIsMobileMenuOpen(false)
                            }}
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar