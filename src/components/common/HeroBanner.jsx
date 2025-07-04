import { motion } from 'framer-motion';

const HeroBanner = () => {
  const handleDiscoverClick = () => {
    const element = document.getElementById('categories-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 150
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)'
    }
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/hero3.jpeg"
          alt="Fondo de cinturones artesanales"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      {/* Contenido */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-8" variants={containerVariants}>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-6 max-w-2xl mx-auto leading-relaxed font-serif"
          >
            Fabricación de cinturones en cuero, sintético y reatas para damas, caballeros y niñ@s
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-amber-200 font-medium"
          >
            Ventas al por mayor y detal para confecciones
          </motion.p>
        </motion.div>
        <motion.button
          onClick={handleDiscoverClick}
          className="bg-transparent text-white font-medium py-2.5 px-8 rounded-full border-2 border-white/30"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Descubrir Colección
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HeroBanner;