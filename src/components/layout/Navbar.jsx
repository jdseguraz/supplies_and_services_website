import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src="/supplies-logo-full.png" alt="Supplies and Services ACR SAS" className='h-12' />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-800">
                <span className="text-blue-600">Supplies</span> and <span className="text-blue-600">Services</span>
              </div>
              <div className="text-sm font-medium text-gray-600 -mt-1">
                ACR SAS
              </div>
            </div>
          </Link>
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar