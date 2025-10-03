import { motion } from 'framer-motion'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getCategoryBySlug, getProductsByCategory } from '../../data/products'
import ProductCard from '../../components/products/ProductCard'
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa'

const Category = () => {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const products = getProductsByCategory(slug)

  // Si no se encuentra la categoría, redirigir a productos
  if (!category) {
    return <Navigate to="/productos" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section de la Categoría */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-blue-100 mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <FaChevronRight className="text-xs" />
            <Link to="/productos" className="hover:text-white transition-colors">
              Productos
            </Link>
            <FaChevronRight className="text-xs" />
            <span className="text-white">{category.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  {category.name}
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  to="/productos"
                  className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
                >
                  <FaArrowLeft />
                  <span>Volver a Productos</span>
                </Link>
                <span className="text-blue-300">|</span>
                <span className="text-blue-100">
                  {products.length} producto{products.length !== 1 ? 's' : ''} disponible{products.length !== 1 ? 's' : ''}
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Productos de la Categoría */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Productos en <span className="text-blue-600">{category.name}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de productos especializados en {category.name.toLowerCase()}
            </p>
          </motion.div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
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
              <div className="text-6xl text-gray-300 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Próximamente
              </h3>
              <p className="text-gray-500 mb-6">
                Estamos trabajando en agregar productos para esta categoría
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Consultar Disponibilidad
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categorías Relacionadas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Otras <span className="text-blue-600">Categorías</span>
            </h2>
            <p className="text-gray-600">
              Explora nuestras otras líneas de productos y servicios
            </p>
          </motion.div>

          <div className="w-full flex justify-center items-center">
            {/* Aquí se mostrarían otras categorías - por simplicidad mostraremos un enlace */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/productos"
                className="block rounded-lg p-2 hover:bg-blue-600 border border-blue-600 transition-all duration-200 text-center group"
              >
                <h3 className="text-sm font-medium text-blue-600 group-hover:text-white transition-colors duration-200">
                  Ver Todas las Categorías
                </h3>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas una cotización personalizada?
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte con soluciones 
              específicas para tu proyecto en {category.name.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/productos"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Ver Más Productos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Category