import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

const TestSupabase = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [rawData, setRawData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // 1. Obtener categorías directamente
        const { data: catData, error: catError } = await supabase
          .from('categories')
          .select('*')
        
        console.log('Categorías brutas:', catData) // Debug
        setCategories(catData || [])

        // 2. Obtener productos directamente
        const { data: prodData, error: prodError } = await supabase
          .from('products')
          .select('*')
        
        console.log('Productos brutos:', prodData) // Debug
        setProducts(prodData || [])

        // 3. Consulta combinada para relación
        const { data: combinedData, error: combinedError } = await supabase
          .from('categories')
          .select(`
            *,
            products(*)
          `)
        
        console.log('Datos combinados:', combinedData) // Debug
        setRawData(combinedData)

      } catch (err) {
        console.error('Error completo:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Debug de Supabase</h1>
      
      {/* Mostrar datos crudos para diagnóstico */}
      <div className="mb-8 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Datos crudos de Supabase:</h2>
        <pre>{JSON.stringify(rawData, null, 2)}</pre>
      </div>

      {/* Lista de categorías */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categorías ({categories.length})</h2>
        <ul className="list-disc pl-5">
          {categories.map(cat => (
            <li key={cat.id}>
              {cat.name} (ID: {cat.id}, Slug: {cat.slug})
            </li>
          ))}
        </ul>
      </div>

      {/* Lista de productos */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Productos ({products.length})</h2>
        {products.map(prod => (
          <div key={prod.id} className="mb-4 p-4 border rounded">
            <h3 className="font-medium">{prod.name || `Producto ${prod.id}`}</h3>
            <p>Categoría ID: {prod.category_id}</p>
            <p>Precio: {prod.price ? `$${prod.price}` : 'No especificado'}</p>
            <div className="mt-2">
              <p className="text-sm font-semibold">Imágenes:</p>
              {prod.images && prod.images.length > 0 ? (
                <div className="flex gap-2 mt-1">
                  {prod.images.map((img, index) => (
                    <div key={index} className="w-16 h-16 border rounded overflow-hidden">
                      <img 
                        src={img} 
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No hay imágenes</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestSupabase