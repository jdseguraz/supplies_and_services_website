import AdminLayout from './AdminLayout'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

const AdminCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true })
      
      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      setLoading(false)
    }
  }

  useState(() => {
    fetchCategories()
  }, [])

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Administrar Categorías</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded">
            Añadir Categoría
          </button>
        </div>
        
        {loading ? (
          <p>Cargando categorías...</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{category.slug}</td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      <button className="text-amber-600 hover:text-amber-800">Editar</button>
                      <button className="text-red-600 hover:text-red-800">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminCategories