import { createContext, useContext, useReducer } from 'react'

// Estado inicial del carrito
const initialState = {
  items: [],
  totalItems: 0
}

// Tipos de acciones
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
}

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
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
      
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload
      const newItems = state.items.filter(item => item.product.id !== productId)
      
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
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
      
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((total, item) => total + item.quantity, 0)
      }
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      return initialState
    }
    
    default:
      return state
  }
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