// Base    image: "/products/bisagra_batiente.png"e dato    image: "/products/empaque.png"local simulada para product    image: "/products/lamina_de_alfajor.png" y categorías
export const categories = [
  {
    id: 1,
    name: "Bisagras",
    slug: "bisagras",
    description: "Bisagras industriales para puertas de cámaras frigoríficas",
    image: "/products/bisagra_batiente.png",
    icon: "�"
  },
  {
    id: 2,
    name: "Empaques",
    slug: "empaques",
    description: "Empaques y sellos para cámaras frigoríficas",
    image: "/products/empaque.png",
    icon: "�"
  },
  {
    id: 3,
    name: "Poleas",
    slug: "poleas",
    description: "Poleas y sistemas de rodamiento para puertas correderas",
    image: "/products/polea_importada.png"
  },
  {
    id: 4,
    name: "Rieles",
    slug: "rieles",
    description: "Rieles y guías para sistemas de puertas industriales",
    image: "/products/riel_superior.png"
  },
  {
    id: 5,
    name: "Accesorios",
    slug: "accesorios",
    description: "Accesorios y herrajes para puertas industriales",
    image: "/products/manija_externa_frontal.png"
  },
  {
    id: 6,
    name: "Láminas",
    slug: "laminas",
    description: "Láminas y materiales para construcción de puertas",
    image: "/products/lamina_de_alfajor.png",
    icon: "�"
  }
];

export const products = [
  // Bisagras
  {
    id: 1,
    name: "Bisagra Batiente",
    categoryId: 1,
    categorySlug: "bisagras",
    description: "Bisagra de alto rendimiento para puertas batientes industriales. Fabricada en acero resistente con tratamiento anticorrosivo.",
    images: ["/products/bisagra_batiente.png", "/products/bisagra_batiente_2.png"],
    specifications: ["Material: Acero galvanizado", "Carga: Hasta 200kg", "Ángulo: 180°"],
    price: null
  },
  {
    id: 2,
    name: "Bisagra H 45°",
    categoryId: 1,
    categorySlug: "bisagras",
    description: "Bisagra especializada con diseño en H para apertura de 45 grados. Ideal para aplicaciones que requieren apertura limitada.",
    images: ["/products/bisagra_h_45.png", "/products/bisagra_h_45_2.png"],
    specifications: ["Apertura: 45°", "Diseño: H", "Material: Acero reforzado"],
    price: null
  },
  {
    id: 3,
    name: "Bisagra Vaivén",
    categoryId: 1,
    categorySlug: "bisagras",
    description: "Bisagra de doble acción para puertas vaivén. Permite apertura en ambas direcciones con retorno automático.",
    images: ["/products/bisagra_vaiven.png", "/products/bisagra_vaiven_2.png"],
    specifications: ["Acción: Doble", "Retorno: Automático", "Durabilidad: Alta"],
    price: null
  },

  // Empaques
  {
    id: 4,
    name: "Empaque Universal",
    categoryId: 2,
    categorySlug: "empaques",
    description: "Empaque versátil de alta calidad para múltiples aplicaciones industriales. Excelente resistencia al desgaste y condiciones ambientales.",
    images: ["/products/empaque.png", "/products/empaque_2.png", "/products/empaque_3.png", "/products/empaque_4.png"],
    specifications: ["Material: Caucho EPDM", "Temperatura: -40°C a 120°C", "Resistencia: UV y ozono"],
    price: null
  },
  {
    id: 5,
    name: "Empaque de Arrastre",
    categoryId: 2,
    categorySlug: "empaques",
    description: "Empaque especializado para sistemas de arrastre. Diseñado para soportar fricción constante y movimientos repetitivos.",
    images: ["/products/empaque_arrastre.png"],
    specifications: ["Resistencia: Alta fricción", "Durabilidad: Extendida", "Aplicación: Sistemas móviles"],
    price: null
  },
  {
    id: 6,
    name: "Empaque Sello Recibidor",
    categoryId: 2,
    categorySlug: "empaques",
    description: "Empaque de sellado para marcos receptores. Garantiza hermeticidad y aislamiento térmico superior.",
    images: ["/products/empaque_sello_recibidor.png"],
    specifications: ["Función: Sellado hermético", "Aislamiento: Térmico", "Instalación: Marco receptor"],
    price: null
  },
  {
    id: 7,
    name: "Empaque Vaivén",
    categoryId: 2,
    categorySlug: "empaques",
    description: "Empaque específico para puertas vaivén. Resiste el movimiento bidireccional y proporciona sellado efectivo.",
    images: ["/products/empaque_vaiven.png", "/products/empaque_vaiven_2.png"],
    specifications: ["Movimiento: Bidireccional", "Flexibilidad: Alta", "Sellado: Efectivo"],
    price: null
  },

  // Poleas
  {
    id: 8,
    name: "Polea Importada",
    categoryId: 3,
    categorySlug: "poleas",
    description: "Polea de alta calidad importada con rodamientos de precisión. Diseñada para cargas pesadas y uso intensivo.",
    images: ["/products/polea_importada.png"],
    specifications: ["Rodamientos: Precisión", "Carga: Pesada", "Origen: Importada"],
    price: null
  },
  {
    id: 9,
    name: "Polea Liviana",
    categoryId: 3,
    categorySlug: "poleas",
    description: "Polea ligera de construcción robusta. Ideal para aplicaciones que requieren bajo peso y alta eficiencia.",
    images: ["/products/polea_liviana.png", "/products/polea_liviana_2.png"],
    specifications: ["Peso: Reducido", "Eficiencia: Alta", "Construcción: Robusta"],
    price: null
  },
  {
    id: 10,
    name: "Eje Polea Acero Inox",
    categoryId: 3,
    categorySlug: "poleas",
    description: "Eje de polea fabricado en acero inoxidable. Resistente a la corrosión y condiciones extremas.",
    images: ["/products/eje_polea_acero_inox.png"],
    specifications: ["Material: Acero inoxidable", "Resistencia: Corrosión", "Durabilidad: Extrema"],
    price: null
  },

  // Rieles
  {
    id: 11,
    name: "Riel Superior",
    categoryId: 4,
    categorySlug: "rieles",
    description: "Riel superior de alta resistencia para sistemas de puertas correderas. Fabricado con materiales de primera calidad.",
    images: ["/products/riel_superior.png", "/products/riel_superior_2.png"],
    specifications: ["Posición: Superior", "Sistema: Corredera", "Material: Acero reforzado"],
    price: null
  },
  {
    id: 12,
    name: "Riel Superior Corredera con Tapa y Guía Triangular",
    categoryId: 4,
    categorySlug: "rieles",
    description: "Sistema completo de riel superior con tapa protectora y guía triangular. Solución integral para puertas correderas industriales.",
    images: ["/products/riel_superior_corredera_tapa_riel_superior_y_riel_guia_triangular.png"],
    specifications: ["Incluye: Tapa y guía", "Diseño: Triangular", "Protección: Completa"],
    price: null
  },

  // Accesorios
  {
    id: 13,
    name: "Manija Externa Frontal",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Manija externa de instalación frontal. Diseño ergonómico y resistente para uso industrial intensivo.",
    images: ["/products/manija_externa_frontal.png", "/products/manija_externa_frontal_2.png"],
    specifications: ["Posición: Frontal", "Ergonomía: Optimizada", "Resistencia: Industrial"],
    price: null
  },
  {
    id: 14,
    name: "Manija Externa Lateral",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Manija externa con instalación lateral. Ideal para espacios reducidos y aplicaciones específicas.",
    images: ["/products/manija_externa_lateral.png"],
    specifications: ["Posición: Lateral", "Aplicación: Espacios reducidos", "Instalación: Específica"],
    price: null
  },
  {
    id: 15,
    name: "Juego de Cerradura Corredera",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Conjunto completo de cerradura para puertas correderas. Incluye todos los componentes necesarios para instalación.",
    images: ["/products/juego_de_cerradura_corredera.png"],
    specifications: ["Tipo: Corredera", "Conjunto: Completo", "Instalación: Incluida"],
    price: null
  },
  {
    id: 16,
    name: "Juego de Cerradura Redonda",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Juego completo de cerradura con diseño redondo. Sistema de seguridad confiable y duradero.",
    images: ["/products/juego_de_cerradura_redonda.png"],
    specifications: ["Diseño: Redondo", "Seguridad: Confiable", "Durabilidad: Alta"],
    price: null
  },
  {
    id: 17,
    name: "Contramarco",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Contramarco estructural para puertas industriales. Proporciona soporte y alineación perfecta.",
    images: ["/products/contramarco.png", "/products/contramarco_2.png"],
    specifications: ["Función: Estructural", "Soporte: Completo", "Alineación: Perfecta"],
    price: null
  },
  {
    id: 18,
    name: "Brida",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Brida de sujeción robusta para fijación de componentes. Fabricada en acero con tratamiento anticorrosivo.",
    images: ["/products/brida.png", "/products/brida_2.png"],
    specifications: ["Material: Acero tratado", "Función: Sujeción", "Resistencia: Corrosión"],
    price: null
  },
  {
    id: 19,
    name: "Bulón con Injerto",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Bulón de alta resistencia con sistema de injerto integrado. Ideal para fijaciones permanentes.",
    images: ["/products/Bulon_con_injerto.png"],
    specifications: ["Sistema: Injerto integrado", "Fijación: Permanente", "Resistencia: Alta"],
    price: null
  },
  {
    id: 20,
    name: "Bulón sin Injerto",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Bulón estándar sin sistema de injerto. Solución versátil para múltiples aplicaciones de fijación.",
    images: ["/products/Bulon_sin_injerto.png"],
    specifications: ["Tipo: Estándar", "Aplicación: Versátil", "Fijación: Múltiple"],
    price: null
  },
  {
    id: 21,
    name: "Bomper Protección PVC y Puntera PVC",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Conjunto de protección en PVC incluyendo bomper y puntera. Protege contra impactos y desgaste.",
    images: ["/products/bomper_proteccion_pvc_y_puntera_pvc.png"],
    specifications: ["Material: PVC", "Protección: Impactos", "Incluye: Bomper y puntera"],
    price: null
  },
  {
    id: 22,
    name: "Borde de Hojas",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Perfil de borde para hojas de puerta. Proporciona acabado profesional y protección del canto.",
    images: ["/products/borde_de_hojas.png"],
    specifications: ["Función: Acabado", "Protección: Canto", "Instalación: Hojas"],
    price: null
  },
  {
    id: 23,
    name: "Cortina Termofilm y Soporte",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Cortina térmica de film transparente con soporte incluido. Mantiene la temperatura y permite visibilidad.",
    images: ["/products/cortina_termofilm_y_soporte.png"],
    specifications: ["Material: Film térmico", "Visibilidad: Transparente", "Incluye: Soporte"],
    price: null
  },
  {
    id: 24,
    name: "Esparrago 50cm",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Espárrago roscado de 50cm de longitud. Elemento de fijación versátil para estructuras industriales.",
    images: ["/products/esparrago_50cm.png"],
    specifications: ["Longitud: 50cm", "Tipo: Roscado", "Uso: Estructural"],
    price: null
  },
  {
    id: 25,
    name: "Gancho Tope Gancho",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Sistema de gancho con tope integrado. Proporciona sujeción segura y limitación de movimiento.",
    images: ["/products/gancho_tope_gancho.png"],
    specifications: ["Sistema: Tope integrado", "Sujeción: Segura", "Limitación: Movimiento"],
    price: null
  },
  {
    id: 26,
    name: "Rampa",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Rampa de acceso para puertas industriales. Facilita el tránsito de equipos y personal.",
    images: ["/products/rampa.png"],
    specifications: ["Función: Acceso", "Tránsito: Equipos y personal", "Instalación: Industrial"],
    price: null
  },
  {
    id: 27,
    name: "Resistencia 40W",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Resistencia eléctrica de 40W para sistemas de calefacción. Previene la condensación y congelamiento.",
    images: ["/products/resistencia_40w.png"],
    specifications: ["Potencia: 40W", "Función: Calefacción", "Previene: Condensación"],
    price: null
  },
  {
    id: 28,
    name: "Sombrero Chino",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Elemento de protección superior tipo sombrero chino. Protege contra intemperie y proporciona drenaje.",
    images: ["/products/sombrero_chino.png"],
    specifications: ["Protección: Intemperie", "Drenaje: Incluido", "Tipo: Superior"],
    price: null
  },
  {
    id: 29,
    name: "Tornillos Nylon 23 y 16cm 12mm Diámetro",
    categoryId: 5,
    categorySlug: "accesorios",
    description: "Conjunto de tornillos de nylon en dos longitudes (23 y 16cm) con diámetro de 12mm. Resistentes a la corrosión.",
    images: ["/products/tornillos_nylon_23_y_16cm_12mm_diametro.png"],
    specifications: ["Material: Nylon", "Longitudes: 23 y 16cm", "Diámetro: 12mm"],
    price: null
  },

  // Láminas
  {
    id: 30,
    name: "Lámina de Alfajor",
    categoryId: 6,
    categorySlug: "laminas",
    description: "Lámina tipo alfajor con estructura multicapa. Excelente aislamiento térmico y resistencia estructural.",
    images: ["/products/lamina_de_alfajor.png"],
    specifications: ["Estructura: Multicapa", "Aislamiento: Térmico", "Resistencia: Estructural"],
    price: null
  },
  {
    id: 31,
    name: "Lámina Pre Pintada",
    categoryId: 6,
    categorySlug: "laminas",
    description: "Lámina con acabado pre pintado de fábrica. Lista para instalación con excelente durabilidad del color.",
    images: ["/products/lamina_pre_pintada.png"],
    specifications: ["Acabado: Pre pintado", "Instalación: Lista", "Durabilidad: Color"],
    price: null
  }
];

// Funciones utilitarias
export const getCategoryBySlug = (slug) => {
  return categories.find(category => category.slug === slug);
};

export const getProductsByCategory = (categorySlug) => {
  return products.filter(product => product.categorySlug === categorySlug);
};

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedCategories = (limit = 4) => {
  return categories.slice(0, limit);
};