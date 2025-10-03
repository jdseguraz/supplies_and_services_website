import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, index = 0 }) => {
  // Usar la nueva estructura de imágenes o fallback a la imagen única
  const images = product.images || (product.image ? [product.image] : [])
  const mainImage = images[0] || null

  const handleQuoteRequest = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Por ahora solo un placeholder - luego se puede conectar a un sistema de cotización
    console.log(`Solicitud de cotización para: ${product.name}`)
    // Aquí se podría abrir un modal, redirigir a contacto, etc.
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group"
    >
      <Link to={`/producto/${product.id}`} className="block">
        {/* Imagen del producto */}
        <div className="relative h-56 overflow-hidden bg-white p-4">
          {mainImage ? (
            <img 
              src={mainImage} 
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-sm">Sin imagen</span>
            </div>
          )}
          
          {/* Indicador de múltiples imágenes */}
          {images.length > 1 && (
            <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-medium">
              +{images.length}
            </div>
          )}
        </div>

        {/* Contenido de la card */}
        <div className="p-4 border-t border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Botón de cotización */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleQuoteRequest}
            className="w-full bg-gray-900 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <FaQuoteLeft className="text-xs" />
            <span>Cotizar</span>
          </motion.button>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard