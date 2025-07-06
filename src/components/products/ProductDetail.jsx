import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { FaWhatsapp, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            category:categories(*)
          `)
          .eq('id', id)
          .single();

        if (error) throw error;

        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleWhatsAppClick = () => {
    const productUrl = window.location.href;
    const message = `¡Hola! Vengo desde tu sitio web. Estoy interesado en este producto. \n\nMe gustaría saber más información y disponibilidad.\n\nEnlace al producto: ${productUrl}`;
    const whatsappNumber = '573103588801'; // Reemplaza con tu número de WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f3e8] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c7a17a]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8f3e8] flex flex-col justify-center items-center text-center px-4">
        <p className="text-[#a53838] font-serif text-xl mb-6">{error}</p>
        <Link 
          to="/" 
          className="bg-[#5a3921] text-[#f8f3e8] px-6 py-2 rounded font-serif hover:bg-[#3a2516] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8f3e8] flex flex-col justify-center items-center text-center px-4">
        <p className="text-[#6d4c3d] font-serif text-xl mb-6">Producto no encontrado</p>
        <Link 
          to="/" 
          className="bg-[#5a3921] text-[#f8f3e8] px-6 py-2 rounded font-serif hover:bg-[#3a2516] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f8f3e8] py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de regreso */}
        <Link 
          to={product.category ? `/categoria/${product.category.slug || product.category.id}` : '/'}
          className="flex items-center text-[#6d4c3d] hover:text-[#5a3921] mb-8 font-serif transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Volver a {product.category?.name || 'categoría'}
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {product.images && product.images.length > 0 ? (
              <>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e8d9c5]">
                  <img 
                    src={product.images[currentImageIndex]} 
                    alt={product.name}
                    className="w-full h-80 object-contain"
                  />
                </div>
                
                {product.images.length > 1 && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={prevImage}
                      className="bg-[#e8d9c5] hover:bg-[#d4c4ae] p-2 rounded-full text-[#5a3921] transition-colors"
                    >
                      <FaChevronLeft />
                    </button>
                    <div className="flex space-x-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-[#c7a17a]' : 'bg-[#e8d9c5]'}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextImage}
                      className="bg-[#e8d9c5] hover:bg-[#d4c4ae] p-2 rounded-full text-[#5a3921] transition-colors"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-[#e8d9c5] h-80 flex items-center justify-center rounded-lg">
                <span className="text-[#6d4c3d] font-serif">Sin imágenes disponibles</span>
              </div>
            )}
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5a3921] mb-4">
              {product.name}
            </h1>
            
            {product.category && (
              <span className="inline-block bg-[#e8d9c5] text-[#5a3921] px-3 py-1 rounded-full text-sm font-serif mb-6">
                {product.category.name}
              </span>
            )}

            {product.price && (
              <p className="text-3xl font-bold text-[#c7a17a] mb-6">
                ${product.price.toLocaleString()}
              </p>
            )}

            <div className="prose max-w-none text-[#6d4c3d] mb-8 font-serif">
              {product.description ? (
                <p className="whitespace-pre-line">{product.description}</p>
              ) : (
                <p>Este producto no tiene descripción detallada.</p>
              )}
            </div>

            {/* Especificaciones */}
            {product.specifications && (
              <div className="mb-8">
                <h3 className="text-xl font-serif font-semibold text-[#5a3921] mb-3">
                  Especificaciones
                </h3>
                <ul className="space-y-2 text-[#6d4c3d] font-serif">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="font-medium w-32">{key}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botón de WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="w-full bg-[#5a3921] hover:bg-[#3a2516] text-[#f8f3e8] py-3 px-6 rounded-lg flex items-center justify-center gap-3 font-serif text-lg transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Consultar por WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;