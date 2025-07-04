import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/products/ProductDetail'

const Product = () => {
  const { id } = useParams()

  return (
    <div>
      <ProductDetail productId={id} />
    </div>
  )
}

export default Product