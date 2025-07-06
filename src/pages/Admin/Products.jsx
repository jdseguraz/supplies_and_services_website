import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Modal from '../../components/common/Modal'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Datos de ejemplo - reemplazar con datos reales de tu API/estado
  const product = {
    id: id,
    name: "Mueble Colonial Elegante",
    description: "Hermoso mueble colonial hecho a mano con madera de primera calidad. Perfecto para dar un toque elegante y tradicional a cualquier espacio de tu hogar. Cuenta con detalles tallados únicos y un acabado impecable que resalta la belleza natural de la madera.",
    price: 850000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    specifications: {
      "Material": "Madera de roble",
      "Dimensiones": "120cm x 80cm x 45cm",
      "Peso": "25 kg",
      "Color": "Madera natural",
      "Origen": "Artesanía local"
    },
    features: [
      "Madera de primera calidad",
      "Tallado a mano",
      "Acabado resistente al agua",
      "Diseño colonial auténtico",
      "Garantía de 2 años"
    ]
  }

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

  const handleQuoteClick = () => {
    const productUrl = `${window.location.origin}/producto/${product.id}`
    const message = `Hola, estoy interesado en este producto. ${productUrl}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  }

  const nextMainImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % product.images.length)
  }

  const prevMainImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen bg-[#f8f3e8] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navegación de regreso */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#5a3921] hover:text-[#3a2516] transition-colors font-serif"
          >
            <FaArrowLeft className="h-4 w-4" />
            <span>Volver al catálogo</span>
          </Link>
        </motion.div>

        {/* Contenido principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="relative">
                <div 
                  className="h-96 bg-gray-50 flex items-center justify-center cursor-pointer relative rounded-lg overflow-hidden"
                  onClick={() => product.images?.length > 0 && openImageModal(currentImageIndex)}
                >
                  {product.images && product.images.length > 0 ? (
                    <>
                      <img
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain p-4"
                        onError={(e) => {
                          e.target.src = '/placeholder-product.png'
                          e.target.className = 'max-h-full max-w-full object-cover p-4'
                        }}
                      />
                      
                      {/* Controles de navegación */}
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevMainImage()
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
                            aria-label="Imagen anterior"
                          >
                            <FaChevronLeft className="h-5 w-5 text-[#5a3921]" />
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextMainImage()
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
                            aria-label="Siguiente imagen"
                          >
                            <FaChevronRight className="h-5 w-5 text-[#5a3921]" />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6d4c3d]">
                      <span>Imagen no disponible</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Miniaturas */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-[#c7a17a] opacity-100' 
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Vista ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/placeholder-product.png'
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif text-[#5a3921] mb-4">
                  {product.name}
                </h1>
                
                {product.price ? (
                  <div className="text-4xl font-bold text-[#c7a17a] mb-6">
                    ${product.price.toLocaleString()}
                  </div>
                ) : (
                  <div className="text-xl text-[#6d4c3d] mb-6">Consultar precio</div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-serif text-[#5a3921] mb-3">Descripción</h3>
                <p className="text-[#6d4c3d] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Características */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif text-[#5a3921] mb-3">Características</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#6d4c3d]">
                        <span className="text-[#c7a17a] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Especificaciones */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h3 className="text-lg font-serif text-[#5a3921] mb-3">Especificaciones</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-[#6d4c3d] font-medium">{key}:</span>
                        <span className="text-[#5a3921]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botón de cotización */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuoteClick}
                className="w-full bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors font-serif text-lg shadow-md"
              >
                <FaWhatsapp className="text-[#e8d9c5] h-6 w-6" />
                <span>Solicitar cotización</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

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
    </div>
  )
}

export default ProductDetail