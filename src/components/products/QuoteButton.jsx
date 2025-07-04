import { FaWhatsapp } from 'react-icons/fa'

const QuoteButton = ({ productId }) => {
  const handleClick = () => {
    const message = `Hola, estoy interesado en el producto: ${window.location.origin}/producto/${productId}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      <FaWhatsapp size={20} />
      Cotizar
    </button>
  )
}

export default QuoteButton