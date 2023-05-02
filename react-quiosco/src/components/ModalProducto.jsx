import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

const ModalProducto = () => {
  const { producto, handleClickModal, handleAgregarPedido, pedido } =
    useQuiosco();

  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  //se ejecutara una vez que se renderize lo del arreglo de dependencias
  useEffect(() => {
    //detectar si hay un pedido del producto clickeado
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      console.log("si esta el pedido");
      const productoEdicion = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id
      )[0];
      //para que al volver a pulsar AGREGAR en un mismo producto este tenga la cantidad establecida antes
      setCantidad(productoEdicion.cantidad);
      setEdicion(true);
    } else {
      console.log("no esta el pedido");
    }
  }, [pedido]); //arreglo de dependencias [] -> se ejecuta una sola vez

  //evitar que se reduzca a numeros negativos
  const reducirPedido = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className=" w-full h-full md:flex gap-10 bg-white p-3">
      <div className="md:w-1/3">
        <img
          src={`../../public/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>

        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 mt-5 ">
          <button onClick={() => reducirPedido()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <p>{cantidad}</p>
          <button onClick={() => setCantidad(cantidad + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-[70px] text-white font-bold uppercase rounded-2xl "
          //le pasamos un objeto que contiene producto y cantidad
          // onClick={() => handleAgregarPedido({ producto, cantidad })}

          //podemos hacer que cantidad sea parte del obj producto
          onClick={() => {
            handleAgregarPedido({ ...producto, cantidad });
            handleClickModal();
          }}
        >
          {edicion ? "Guardar cambios" : "agregar pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
