import { FaWhatsapp, FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-[#f8f3e8] py-16 px-4 border-t border-b border-[#e8d9c5] !mt-0">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#5a3921] mb-3 "
          >
            Conéctate con Nosotros
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-[#c7a17a]"></div>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#6d4c3d] max-w-2xl mx-auto font-serif italic mb-8"
          >
            Siguenos en redes sociales para estar al tanto de nuestras novedades, promociones y más.
          </motion.p>
        </div>

        {/* Redes Sociales */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://wa.me/573103588801?text=Hola%2C%20vengo%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerte%20una%20cotizaci%C3%B3n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
              aria-label="WhatsApp"
            >
              <div className="bg-[#e8d9c5] p-4 rounded-full group-hover:bg-[#d4c4ae] transition-colors duration-500 border border-[#c7a17a]">
                <FaWhatsapp size={28} className="text-[#5a3921] group-hover:text-[#3a2516]" />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-[#6d4c3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                WhatsApp
              </span>
            </a>
            <a 
              href="https://www.instagram.com/cinturonesfostmary?igsh=MTl6MGp5cXhwYzFmbQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Instagram"
            >
              <div className="bg-[#e8d9c5] p-4 rounded-full group-hover:bg-[#d4c4ae] transition-colors duration-500 border border-[#c7a17a]">
                <FaInstagram size={28} className="text-[#5a3921] group-hover:text-[#3a2516]" />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-[#6d4c3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </span>
            </a>
            <a 
              href="https://facebook.com/tupagina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Facebook"
            >
              <div className="bg-[#e8d9c5] p-4 rounded-full group-hover:bg-[#d4c4ae] transition-colors duration-500 border border-[#c7a17a]">
                <FaFacebook size={28} className="text-[#5a3921] group-hover:text-[#3a2516]" />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-[#6d4c3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Facebook
              </span>
            </a>
          </div>

          {/* Contacto simplificado */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-10"
          >
            <p className="text-[#6d4c3d] mb-4 font-serif">También puedes contactarnos directamente:</p>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#5a3921]" />
                <span className="text-[#6d4c3d]">+57 310 3588801</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#5a3921]" />
                <span className="text-[#6d4c3d]">+57 310 3588801</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SocialMedia;