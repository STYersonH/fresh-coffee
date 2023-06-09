import Categoria from "./Categoria";
import useQuiosco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  // recuperar las categorias desde QuioscoProvider al usar useQuiosco
  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "Auth" });

  return (
    <aside className="md:w-72">
      <div className="p-4">
        {/* ya no se coloca .. ya que se hizo en AuthLayout */}
        <img
          src="../../public/img/logo.svg"
          alt="imagen logo"
          className="w-40 "
        />
      </div>

      <p className="my-10 text-xl text-center">Hola: {user?.name}</p>

      <div className="mt-10">
        {categorias.map((categoria) => (
          //se debe tener siempre una key
          <Categoria categoria={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 py-5">
        <button
          // truncate: ocultar con ... el texto que sobresale
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600 rounded-md"
          type="button"
          onClick={() => logout()}
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
