import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ isOpen, onClose, children }) => {
  // Cerrar modal al presionar Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative z-10 w-full max-w-6xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-amber-400 transition text-xl"
          aria-label="Cerrar modal"
        >
          <small>Cerrar </small>x
        </button>
        
        <div className="bg-white rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal