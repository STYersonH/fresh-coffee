import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminLayout = () => {
  //instanciamos el middleware para restringir acceso
  // al panel de control
  useAuth({ middleware: "admin" });

  return (
    <div className="md:flex">
      <AdminSidebar />

      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet /> {/* el contenido de children se renderizara aqui */}
      </main>
    </div>
  );
};

export default AdminLayout;
