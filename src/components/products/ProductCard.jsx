import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Modal from '../common/Modal'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openImageModal = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleQuoteClick = (productId) => {
    const productUrl = `${window.location.origin}/producto/${productId}`
    const message = `Hola, estoy interesado en este producto: ${productUrl}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      {/* Tarjeta del producto */}
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full"
      >
        {/* Contenedor de imágenes */}
        <div 
          className="h-56 bg-gray-50 flex items-center justify-center cursor-pointer relative"
          onClick={() => product.images?.length > 0 && openImageModal(currentImageIndex)}
        >
          {product.images && product.images.length > 0 ? (
            <>
              <img
                src={product.images[currentImageIndex]}
                alt={product.name || `Producto ${product.id}`}
                className="max-h-full max-w-full object-contain p-4"
                style={{ height: '100%', width: 'auto' }}
                onError={(e) => {
                  e.target.src = '/placeholder-product.png'
                  e.target.className = 'max-h-full max-w-full object-cover p-4'
                }}
              />
              
              {/* Miniaturas para navegación */}
              {product.images.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(index)
                      }}
                      className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-[#c7a17a]' : 'bg-gray-300'}`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#6d4c3d]">
              <span>Imagen no disponible</span>
            </div>
          )}
        </div>

        {/* Detalles del producto */}
        <div className="p-4 flex flex-col flex-grow">
          <Link to={`/producto/${product.id}`} className="group">
            <h3 className="text-black text-base line-clamp-2 mb-2 group-hover:text-[#5a3921] transition-colors">
              {product.name || `Producto ${product.id}`}
            </h3>
          </Link>
          
          {product.description && (
            <p className="text-[#6d4c3d] text-sm mb-4 line-clamp-3">{product.description}</p>
          )}

          <div className="mt-auto flex justify-between items-center">
            {product.price ? (
              <span className="text-[#c7a17a] font-bold text-lg">
                ${product.price.toLocaleString()}
              </span>
            ) : (
              <span className="text-[#6d4c3d] text-sm">Consultar precio</span>
            )}
            
            <button
              onClick={() => handleQuoteClick(product.id)}
              className="bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors font-serif text-sm"
            >
              <FaWhatsapp className="text-[#e8d9c5]" />
              <span>Cotizar</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal para imágenes grandes */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {product.images && product.images.length > 0 ? (
          <div className="max-w-4xl mx-auto bg-[#f8f3e8] p-4 rounded-lg">
            <div className="relative">
              <img
                src={product.images[selectedImageIndex]}
                alt={`Imagen ${selectedImageIndex + 1} de ${product.name}`}
                className="w-full max-h-[80vh] object-contain"
              />
              
              {/* Navegación entre imágenes */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <FaChevronLeft className="h-6 w-6 text-[#5a3921]" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
                    aria-label="Siguiente imagen"
                  >
                    <FaChevronRight className="h-6 w-6 text-[#5a3921]" />
                  </button>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedImageIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full ${selectedImageIndex === index ? 'bg-[#c7a17a]' : 'bg-white/80'}`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#5a3921] text-[#f8f3e8] px-6 py-2 rounded font-serif hover:bg-[#3a2516] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-[#f8f3e8] rounded-lg">
            <p className="text-[#6d4c3d]">No hay imágenes disponibles</p>
          </div>
        )}
      </Modal>
    </>
  )
}

export default ProductCard