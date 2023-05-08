import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminSidebar = () => {
  const { logout } = useAuth({ middleware: "auth" }); //tenemos que estar autenticados para entrar a esta parte

  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="imagen logotipo" className="w-40" />
      </div>

      <nav className="flex flex-col p-4">
        <Link to="/admin" className="font-bold text-lg">
          Ordenes
        </Link>
        <Link to="/admin/productos" className="font-bold text-lg">
          Productos
        </Link>
      </nav>

      <div className="my-5 px-5">
        <button
          // truncate: ocultar con ... el texto que sobresale
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600 rounded-md"
          type="button"
          onClick={() => logout()}
        >
          cerrar sesion
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
