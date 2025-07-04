import HeroBanner from '../../components/common/HeroBanner'
import SocialMedia from '../../components/common/SocialMedia'
import LocationMap from '../../components/common/LocationMap'
import CategoriesPreview from '../../components/products/CategoriesPreview'

const Home = () => {
  return (
    <div className="space-y-12 pb-12">
      <HeroBanner /> 
      <SocialMedia />
      <CategoriesPreview />
      <LocationMap />
    </div>
  )
}

export default Home