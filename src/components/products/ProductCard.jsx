import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { ShoppingCart, Check } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { CONTACT_CONFIG, URLS } from '../../constants/contact'

const ProductCard = ({ product, index = 0 }) => {
  // Usar la nueva estructura de imágenes o fallback a la imagen única
  const images = product.images || (product.image ? [product.image] : [])
  const mainImage = images[0] || null
  const { addToCart, isInCart } = useCart()

  const handleQuoteRequest = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Crear mensaje para WhatsApp
    const message = `¡Hola! Me interesa cotizar el siguiente producto:\n\n📦 *${product.name}*\n\n¿Podrían enviarme información sobre precio, disponibilidad y especificaciones técnicas?\n\n¡Gracias!`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`${URLS.whatsapp}/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
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

          {/* Botones de acción */}
          <div className="flex gap-2">
            {/* Botón añadir al carrito - solo icono */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`p-2 rounded-md transition-colors duration-200 flex items-center justify-center ${
                isInCart(product.id) 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isInCart(product.id) ? (
                <Check size={16} weight="bold" />
              ) : (
                <ShoppingCart size={16} weight="regular" />
              )}
            </motion.button>

            {/* Botón de cotización - expandido */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleQuoteRequest}
              className="flex-1 bg-gray-900 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FaQuoteLeft className="text-xs" />
              <span>Cotizar</span>
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard