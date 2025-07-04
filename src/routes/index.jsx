import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Product from '../pages/Product' // Agregar esta importación
import AdminDashboard from '../pages/Admin/Dashboard'
import AdminLogin from '../pages/Admin/Login'
import AdminProducts from '../pages/Admin/Products'
import AdminCategories from '../pages/Admin/Categories'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categoria/:slug', element: <Category /> },
      { path: 'producto/:id', element: <Product /> }, // Esta ruta ya estaba definida
      {
        path: 'admin',
        element: <AdminLogin />,
      },
      {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'admin/productos',
        element: <AdminProducts />,
      },
      {
        path: 'admin/categorias',
        element: <AdminCategories />,
      },
    ],
  },
])

export default router