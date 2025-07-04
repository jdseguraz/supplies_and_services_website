import { useParams } from 'react-router-dom'
import CategoryProducts from '../../components/products/CategoryProducts'

const Category = () => {
  const { slug } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryProducts categoryId={slug} />
    </div>
  )
}

export default Category