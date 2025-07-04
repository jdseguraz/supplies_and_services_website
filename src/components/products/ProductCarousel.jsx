import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProductCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Producto ${index + 1}`}
              className="w-full h-64 object-contain rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductCarousel