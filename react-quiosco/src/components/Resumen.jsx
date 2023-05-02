import useQuiosco from "../hooks/useQuiosco";

import EmptyCart from "../../public/img/emptyCart.svg";
import ResumenProducto from "./ResumenProducto";

import { formatearDinero } from "../helpers";

const Resumen = () => {
  const { pedido, total } = useQuiosco();

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5 flex flex-col">
      <h1 className="text-4xl font-black">Mi pedido</h1>
      <p className="text-lg my-5">
        Aqui podras ver el resumen y totales de tu pedido
      </p>
      {/* para que un contenedor tenga todo el espacio disponible de su padre */}
      {/* contenedor padre debe tener -> flex flex-col */}
      <div className="flex-1 flex flex-col">
        {pedido.length === 0 ? (
          //contenedor hijo debe tener -> flex-1
          <div className="flex-1 flex flex-col justify-center">
            <img src={EmptyCart} alt="empty car" />
            <p className="text-center text-2xl mt-5">Agrega algun pedido</p>
          </div>
        ) : (
          <>
            {pedido.map((producto) => (
              <ResumenProducto producto={producto} key={producto.id} />
            ))}
            <p className="text-xl mt-10">total: {formatearDinero(total)}</p>
            <form action="" className="w-full">
              <div className="mt-5">
                <input
                  type="text"
                  className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-lg uppercase font-bold text-white text-center w-full cursor-pointer"
                  //value="confirmar pedido"
                  defaultValue="confirmar pedido"
                />
              </div>
            </form>
          </>
        )}
      </div>
    </aside>
  );
};

export default Resumen;
