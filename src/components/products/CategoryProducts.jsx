import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Link, useParams } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ProductCard from './ProductCard'
import QuoteButton from './QuoteButton'
import { motion } from 'framer-motion'

const CategoryProducts = () => {
  const { slug } = useParams()
  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(8) // Puedes ajustar este número

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true)
        console.log(`Buscando categoría con slug: ${slug}`) // Debug
        
        // 1. Consulta mejorada para categoría
        const { data: categoryData, error: categoryError, count } = await supabase
          .from('categories')
          .select('*', { count: 'exact' })
          .eq('slug', slug)
          .limit(1)

        console.log('Resultado categoría:', { data: categoryData, error: categoryError, count }) // Debug

        if (categoryError) throw categoryError
        if (!categoryData || categoryData.length === 0) {
          throw new Error(`Categoría con slug "${slug}" no encontrada`)
        }

        const selectedCategory = categoryData[0]
        console.log('Categoría encontrada:', selectedCategory) // Debug

        // 2. Consulta productos con diagnóstico
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', selectedCategory.id)
          .order('name', { ascending: true })

        console.log('Productos encontrados:', { data: productsData, error: productsError }) // Debug

        if (productsError) throw productsError

        setCategory(selectedCategory)
        setProducts(productsData || [])
      } catch (err) {
        console.error('Error completo:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryData()
  }, [slug])

  // Resetear página cuando cambie la categoría
  useEffect(() => {
    setCurrentPage(1)
  }, [slug])

  // Cálculos para la paginación
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll suave hacia arriba al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-16 bg-[#f8f3e8]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c7a17a]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#f8f3e8] border border-[#c7a17a] text-[#a53838] px-6 py-4 rounded-lg text-center">
          <strong className="font-serif">Error:</strong> 
          <span className="font-serif ml-2">{error}</span>
        </div>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#f8f3e8] rounded-lg p-12">
          <h2 className="text-3xl font-serif font-bold text-[#5a3921] mb-6">
            Categoría no encontrada
          </h2>
          <p className="text-[#6d4c3d] font-serif mb-8">
            La categoría que buscas no existe o ha sido eliminada.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-3 px-8 rounded font-serif transition-colors duration-300 transform hover:scale-105"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Encabezado de la categoría */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-bold text-[#5a3921] mb-4">
          {category.name}
        </h1>
        <p className="text-[#6d4c3d] font-serif text-lg">
          {products.length} {products.length === 1 ? 'producto disponible' : 'productos disponibles'}
        </p>
        
        {/* Indicador de página si hay múltiples páginas */}
        {totalPages > 1 && (
          <p className="text-[#6d4c3d] font-serif text-sm mt-2">
            Página {currentPage} de {totalPages}
          </p>
        )}
      </motion.div>

      {products.length === 0 ? (
        <motion.div 
          className="text-center py-16 bg-[#f8f3e8] rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-serif text-[#6d4c3d] mb-6">
            No hay productos en esta categoría
          </p>
          <Link 
            to="/" 
            className="inline-block bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-3 px-8 rounded font-serif transition-colors duration-300 transform hover:scale-105"
          >
            Ver todos los productos
          </Link>
        </motion.div>
      ) : (
        <>
          {/* Grid de productos */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Paginación */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center mt-16 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                {/* Botón anterior */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 font-serif ${
                    currentPage === 1
                      ? 'border-[#e8d9c5] text-[#e8d9c5] cursor-not-allowed'
                      : 'border-[#c7a17a] text-[#c7a17a] hover:bg-[#c7a17a] hover:text-[#f8f3e8] hover:scale-110'
                  }`}
                >
                  <FaChevronLeft size={16} />
                </button>

                {/* Números de página */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1
                  const isActive = pageNumber === currentPage
                  
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 font-serif font-bold ${
                        isActive
                          ? 'bg-[#5a3921] border-[#5a3921] text-[#f8f3e8] scale-110'
                          : 'border-[#c7a17a] text-[#c7a17a] hover:bg-[#c7a17a] hover:text-[#f8f3e8] hover:scale-110'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                })}

                {/* Botón siguiente */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 font-serif ${
                    currentPage === totalPages
                      ? 'border-[#e8d9c5] text-[#e8d9c5] cursor-not-allowed'
                      : 'border-[#c7a17a] text-[#c7a17a] hover:bg-[#c7a17a] hover:text-[#f8f3e8] hover:scale-110'
                  }`}
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Información de navegación */}
          {totalPages > 1 && (
            <div className="text-center mt-8">
              <p className="text-[#6d4c3d] font-serif text-sm">
                Mostrando {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, products.length)} de {products.length} productos
              </p>
            </div>
          )}

          {/* Navegación de regreso */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center text-[#6d4c3d] hover:text-[#5a3921] font-serif transition-colors duration-300"
            >
              <FaChevronLeft className="mr-2" size={14} />
              Volver a todas las categorías
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CategoryProducts