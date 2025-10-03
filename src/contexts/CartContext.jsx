import { createContext, useContext, useReducer, useEffect } from 'react'

// Clave para localStorage
const CART_STORAGE_KEY = 'supplies_cart'

// Función para cargar el carrito desde localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      // Validar que el formato sea correcto
      if (parsedCart && Array.isArray(parsedCart.items)) {
        return {
          items: parsedCart.items,
          totalItems: parsedCart.items.reduce((total, item) => total + item.quantity, 0)
        }
      }
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
  }
  return {
    items: [],
    totalItems: 0
  }
}

// Función para guardar el carrito en localStorage
const saveCartToStorage = (cartState) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

// Estado inicial del carrito (ahora carga desde localStorage)
const initialState = loadCartFromStorage()

// Tipos de acciones
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  HYDRATE_CART: 'HYDRATE_CART'
}

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  let newState
  
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product, quantity = 1 } = action.payload
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id)
      
      let newItems
      if (existingItemIndex > -1) {
        // Si el producto ya existe, actualizar la cantidad
        newItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Si es un producto nuevo, agregarlo al carrito
        newItems = [...state.items, { product, quantity }]
      }
      
      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
      break
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload
      const newItems = state.items.filter(item => item.product.id !== productId)
      
      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
      break
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload
      
      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, remover el item
        return cartReducer(state, { 
          type: CART_ACTIONS.REMOVE_ITEM, 
          payload: { productId } 
        })
      }
      
      const newItems = state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
      
      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
      break
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      newState = {
        items: [],
        totalItems: 0
      }
      break
    }
    
    case CART_ACTIONS.HYDRATE_CART: {
      // No guardar en localStorage ya que viene de allí
      return action.payload
    }
    
    default:
      return state
  }
  
  // Guardar el nuevo estado en localStorage
  saveCartToStorage(newState)
  return newState
}

// Crear el contexto
const CartContext = createContext()

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Efecto para manejar la hidratación y sincronización
  useEffect(() => {
    // Verificar si hay cambios en localStorage desde otras pestañas
    const handleStorageChange = (e) => {
      if (e.key === CART_STORAGE_KEY) {
        // Recargar el carrito si cambió en otra pestaña
        const updatedCart = loadCartFromStorage()
        dispatch({ 
          type: 'HYDRATE_CART', 
          payload: updatedCart 
        })
      }
    }

    // Escuchar cambios en localStorage
    window.addEventListener('storage', handleStorageChange)

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  
  // Funciones para manejar el carrito
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { product, quantity }
    })
  }
  
  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { productId }
    })
  }
  
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, quantity }
    })
  }
  
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  // Función para limpiar el localStorage (útil para debugging)
  const clearCartStorage = () => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY)
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error)
    }
  }
  
  const isInCart = (productId) => {
    return state.items.some(item => item.product.id === productId)
  }
  
  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.product.id === productId)
    return item ? item.quantity : 0
  }
  
  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    clearCartStorage,
    isInCart,
    getItemQuantity
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext