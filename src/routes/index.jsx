import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Category from '../pages/Category'
import Product from '../pages/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'productos', element: <Products /> },
      { path: 'categoria/:slug', element: <Category /> },
      { path: 'producto/:id', element: <Product /> },
    ],
  },
])

export default router