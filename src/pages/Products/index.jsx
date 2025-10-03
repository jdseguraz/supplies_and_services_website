import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { categories, getAllProducts, getProductsByCategory } from '../../data/products'
import ProductCard from '../../components/products/ProductCard'
import { FaSearch, FaFilter, FaTh, FaList } from 'react-icons/fa'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  
  const allProducts = getAllProducts()

  // Filtrar productos basado en categoría y búsqueda
  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.categorySlug === selectedCategory)
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [allProducts, selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section 
        className="relative h-80 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/foto5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Contenido del banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl lg:text-7xl font-medium mb-6 text-white">
            Catálogo de productos
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra completa selección de componentes industriales para puertas frigoríficas y sistemas especializados
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Filtros y búsqueda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Barra de búsqueda */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Filtro de categorías */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition-colors"
              >
                <option value="all">Todas las Categorías</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Categorías destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorías</h2>
          {/* Contenedor con scroll horizontal en móvil y grid en desktop */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
            <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 min-w-max md:min-w-0">
              {categories.map((category, index) => {
                // Obtener el primer producto de la categoría para mostrar su imagen
                const categoryProducts = getProductsByCategory(category.slug)
                const firstProduct = categoryProducts[0]
                const categoryImage = firstProduct?.images?.[0] || firstProduct?.image || category.image
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex-shrink-0 w-36 md:w-auto"
                  >
                    <Link
                      to={`/categoria/${category.slug}`}
                      className={`block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden ${
                        selectedCategory === category.slug ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedCategory(category.slug)}
                    >
                      {/* Imagen de la categoría */}
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={categoryImage} 
                          alt={category.name}
                          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Nombre de la categoría */}
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-center">
                          {category.name}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <hr className="my-8" />

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex-col justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'Todos los Productos' : 
               categories.find(cat => cat.slug === selectedCategory)?.name || 'Productos'}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid de productos */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl text-gray-300 mb-4">•</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-500 mb-6">
                Prueba con otros términos de búsqueda o selecciona una categoría diferente
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Limpiar Filtros
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-xl p-8 mt-16 text-center text-white overflow-hidden"
          style={{
            backgroundImage: 'url(/foto4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay oscuro para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
          
          {/* Contenido */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-gray-100 mb-6 text-lg">
              Contáctanos para soluciones personalizadas y cotizaciones especiales
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Contactar Ahora
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products