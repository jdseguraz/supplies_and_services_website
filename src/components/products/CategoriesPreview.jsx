import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Modal from '../common/Modal'
import { motion } from 'framer-motion'

const CategoriesPreview = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchCategoriesWithProducts = async () => {
      try {
        setLoading(true)
        
        const { data, error } = await supabase
          .from('categories')
          .select(`
            *,
            products:products(
              *,
              categories!inner(*)
            )
          `)
          .order('name', { ascending: true })

        if (error) throw error

        const filteredCategories = data.filter(cat => cat.products.length > 0)
        setCategories(filteredCategories)
      } catch (err) {
        console.error('Error fetching categories:', err)
        setError('Error al cargar las categorías')
      } finally {
        setLoading(false)
      }
    }

    fetchCategoriesWithProducts()
  }, [])

  const handleQuoteClick = (productId, productName) => {
    const productUrl = `${window.location.origin}/producto/${productId}`
    const message = `¡Hola! Vengo desde tu sitio web. Estoy interesado en este producto. \n\nMe gustaría saber más información y disponibilidad.\n\nEnlace al producto: ${productUrl}`
    const whatsappNumber = '573103588801'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  if (loading) {
    return (
      <div className="py-16 bg-[#f8f3e8] flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c7a17a]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-16 bg-[#f8f3e8] text-center">
        <p className="text-[#a53838] font-serif">{error}</p>
      </div>
    )
  }

  if (categories.length === 0) {
    return (
      <div className="py-16 bg-[#f8f3e8] text-center">
        <p className="text-[#6d4c3d] font-serif">No hay categorías disponibles</p>
      </div>
    )
  }

  return (
    <div className="py-16 bg-white" id='categories-preview'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <motion.div 
            key={category.id} 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Encabezado de categoría */}
            <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-2">
              <h2 className="text-3xl font-serif font-bold text-[#5a3921]">
                {category.name}
              </h2>
              <Link
                to={`/categoria/${category.slug || category.id}`}
                className="text-[#6d4c3d] hover:text-[#5a3921] text-sm uppercase tracking-wider flex items-center gap-1"
              >
                Ver todos
                <span className="text-[#c7a17a]">→</span>
              </Link>
            </div>
            
            {/* Grid de productos (4 máximo) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.products.slice(0, 4).map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  {/* Contenedor de imagen con altura fija */}
                  <div 
                    className="h-56 bg-gray-50 flex items-center justify-center cursor-pointer relative"
                    onClick={() => product.images?.length > 0 && openImageModal(product.images[0])}
                  >
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain p-4"
                        style={{ height: '100%', width: 'auto' }}
                        onError={(e) => {
                          e.target.src = '/placeholder-product.png'
                          e.target.className = 'max-h-full max-w-full object-cover p-4'
                        }}
                      />
                    ) : (
                      <span className="text-[#6d4c3d] text-sm">Sin imagen</span>
                    )}
                  </div>
                  
                  {/* Info del producto */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-black text-base line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    {product.price && (
                      <p className="text-[#c7a17a] font-bold mb-3 text-lg">
                        ${product.price.toLocaleString()}
                      </p>
                    )}
                    
                    {/* Botón de cotización */}
                    <button
                      onClick={() => handleQuoteClick(product.id, product.name)}
                      className="mt-auto w-full bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors font-serif"
                    >
                      <FaWhatsapp className="text-[#e8d9c5]" />
                      <span>Cotizar</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      <Modal isOpen={selectedImage !== null} onClose={closeImageModal}>
        {selectedImage && (
          <div className="max-w-4xl mx-auto bg-[#f8f3e8] p-4 rounded-lg">
            <img
              src={selectedImage}
              alt="Vista ampliada del producto"
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeImageModal}
                className="bg-[#5a3921] text-[#f8f3e8] px-6 py-2 rounded font-serif hover:bg-[#3a2516] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default CategoriesPreview