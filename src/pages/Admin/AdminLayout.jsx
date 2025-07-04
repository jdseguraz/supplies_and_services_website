import { Link, Outlet } from 'react-router-dom'

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-bold mb-8">Administración</h2>
        
        <nav className="space-y-2">
          <Link 
            to="/admin/dashboard" 
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link 
            to="/admin/productos" 
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Productos
          </Link>
          <Link 
            to="/admin/categorias" 
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Categorías
          </Link>
          <Link 
            to="/" 
            className="block py-2 px-4 rounded hover:bg-gray-700 mt-8 text-sm text-gray-300"
          >
            Volver al sitio
          </Link>
        </nav>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 bg-gray-100">
        {children || <Outlet />}
      </div>
    </div>
  )
}

export default AdminLayout