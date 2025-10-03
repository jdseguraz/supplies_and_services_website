import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ShoppingCart, Check } from 'phosphor-react'
import { getProductById, getCategoryBySlug } from '../../data/products'
import { useCart } from '../../contexts/CartContext'
import { CONTACT_CONFIG, URLS } from '../../constants/contact'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart, isInCart } = useCart()

  useEffect(() => {
    const productData = getProductById(parseInt(id))
    if (productData) {
      setProduct(productData)
      const categoryData = getCategoryBySlug(productData.categorySlug)
      setCategory(categoryData)
    }
    setLoading(false)
  }, [id])

  const handleQuoteRequest = () => {
    if (!product) return
    
    // Crear mensaje detallado para WhatsApp
    let message = `¡Hola! Me interesa cotizar el siguiente producto:\n\n`
    message += `📦 *${product.name}*\n\n`
    
    if (product.description) {
      message += `📋 *Descripción:*\n${product.description.substring(0, 200)}${product.description.length > 200 ? '...' : ''}\n\n`
    }
    
    if (product.specifications && product.specifications.length > 0) {
      message += `🔧 *Especificaciones destacadas:*\n`
      product.specifications.slice(0, 3).forEach(spec => {
        message += `• ${spec}\n`
      })
      message += '\n'
    }
    
    message += `¿Podrían enviarme información sobre precio, disponibilidad y tiempo de entrega?\n\n¡Gracias!`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`${URLS.whatsapp}/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1)
      setAddedToCart(true)
      // Resetear la animación después de 2 segundos
      setTimeout(() => setAddedToCart(false), 2000)
    }
  }

  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
          <Link
            to="/productos"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaArrowLeft />
            <span>Volver a productos</span>
          </Link>
        </div>
      </div>
    )
  }

  const images = product.images || []
  const hasMultipleImages = images.length > 1

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
            <span>/</span>
            <Link to="/productos" className="hover:text-blue-600">Productos</Link>
            {category && (
              <>
                <span>/</span>
                <Link to={`/categoria/${category.slug}`} className="hover:text-blue-600">
                  {category.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Botón volver */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/productos"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Volver a productos</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {images.length > 0 ? (
                <div className="relative aspect-square">
                  <img
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                  
                  {/* Controles del carousel */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center text-gray-400">
                  <span>Sin imagen disponible</span>
                </div>
              )}

              {/* Thumbnails */}
              {hasMultipleImages && (
                <div className="p-4 bg-gray-50">
                  <div className="flex space-x-2 overflow-x-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-blue-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} - ${index + 1}`}
                          className="w-full h-full object-contain bg-white p-1"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Título y categoría */}
            <div>
              {category && (
                <Link
                  to={`/categoria/${category.slug}`}
                  className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium mb-3 hover:bg-blue-200 transition-colors"
                >
                  {category.name}
                </Link>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
            </div>

            {/* Descripción */}
            {product.description && (
              <div className="bg-white rounded-md p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Descripción
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Especificaciones */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="bg-white rounded-md p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Especificaciones Técnicas
                </h2>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex gap-4">
              {/* Botón Añadir al carrito */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-6 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 ${
                  isInCart(product?.id) 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isInCart(product?.id) ? (
                  <>
                    <Check size={20} weight="bold" />
                    <span>En el carrito</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} weight="regular" />
                    <span>Añadir al carrito</span>
                  </>
                )}
              </motion.button>

              {/* Botón Cotizar ahora */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleQuoteRequest}
                className="flex-1 bg-black text-white py-4 px-6 rounded-md font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <FaQuoteLeft className="text-lg" />
                <span>Cotizar ahora</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Product