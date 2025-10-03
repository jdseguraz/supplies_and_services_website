import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trash, Plus, Minus, ShoppingCart, WhatsappLogo } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext'

const Cart = () => {
  const { items, totalItems, updateQuantity, removeFromCart, clearCart } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleQuoteAll = () => {
    if (items.length === 0) return

    // Crear mensaje para WhatsApp
    let message = '¡Hola! Me gustaría solicitar cotización para los siguientes productos:\n\n'
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`
      message += `   Cantidad: ${item.quantity}\n`
      if (item.product.description) {
        message += `   Descripción: ${item.product.description.substring(0, 100)}${item.product.description.length > 100 ? '...' : ''}\n`
      }
      message += '\n'
    })

    message += 'Por favor, envíenme una cotización detallada.\n\n¡Gracias!'

    // Codificar el mensaje para WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/573012345678?text=${encodedMessage}`
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Agrega productos a tu carrito para solicitar cotizaciones
            </p>
            <Link
              to="/productos"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Productos
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Carrito de Cotización
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {totalItems} producto{totalItems !== 1 ? 's' : ''} en tu carrito
          </p>
        </motion.div>

        {/* Layout responsivo */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {items.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 md:p-6 border-b border-gray-200 last:border-b-0"
                >
                  {/* Layout mobile: fila compacta, desktop: fila normal */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Imagen del producto - más pequeña en móvil */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.product.images?.[0] || item.product.image || '/api/placeholder/80/80'}
                        alt={item.product.name}
                        className="w-full h-full object-contain p-1 sm:p-2"
                      />
                    </div>

                    {/* Información del producto - solo nombre */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg truncate">
                        {item.product.name}
                      </h3>
                      {/* Descripción solo en desktop */}
                      {item.product.description && (
                        <p className="hidden sm:block text-sm text-gray-600 mt-1">
                          {item.product.description.substring(0, 80)}
                          {item.product.description.length > 80 ? '...' : ''}
                        </p>
                      )}
                    </div>

                    {/* Controles en una fila horizontal */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      {/* Controles de cantidad */}
                      <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-50 rounded-full px-2 py-1 sm:px-3 sm:py-2">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={14} className="sm:w-4 sm:h-4" />
                        </button>
                        
                        <span className="w-6 sm:w-8 text-center font-semibold text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resumen y acciones */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:sticky lg:top-8"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                Resumen
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                  <span>Total de productos:</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                  <span>Productos únicos:</span>
                  <span className="font-semibold">{items.length}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {/* Botón Cotizar Todo */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleQuoteAll}
                  className="w-full bg-green-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-md font-semibold text-base md:text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <WhatsappLogo size={20} weight="fill" className="md:w-6 md:h-6" />
                  <span>Cotizar Todo</span>
                </motion.button>

                {/* Botón Limpiar Carrito */}
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 text-gray-700 py-2 md:py-3 px-4 md:px-6 rounded-md font-medium hover:bg-gray-300 transition-colors duration-300 text-sm md:text-base"
                >
                  Limpiar Carrito
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/productos"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base"
                >
                  ← Continuar comprando
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart