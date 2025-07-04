import AdminLayout from './AdminLayout'

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Estadísticas o accesos rápidos */}
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard