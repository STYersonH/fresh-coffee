import React from "react";
import useSWR from "swr";
import clienteAxios from "../config/axios";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Ordenes = () => {
  const { handleClickCompletarPedido } = useQuiosco();

  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clienteAxios("/api/pedidos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  // data obtiene lo que se retorna en la funcion index() de PedidoController.php
  const { data, error, isLoading } = useSWR("/api/pedidos", fetcher); //, {refreshInterval:1000}); para refrescar y consultar cada segundo

  console.log(data?.data);
  console.log(error);
  console.log(isLoading);

  return (
    <div>
      <h1 className="text-4xl font-black ">Ordenes</h1>
      <p className="text-2xl my-10">Administra las ordenes desde aqui</p>

      <div className="grid grid-cols-2 gap-5">
        {data?.data?.data?.map((pedido) => (
          <div
            key={pedido.key}
            className="p-5 bg-white shadow space-y-2 border-b  rounded-2xl"
          >
            <p className="text-xl font-bold text-slate-600">
              Contenido del pedido:
            </p>
            {pedido.productos.map((producto, index) => (
              <div
                className="border-b border-b-slate-200 last-of-type:border-none py-4"
                key={index}
              >
                <p className="text-sm">ID : {producto.id} </p>
                <p className="text-sm">{producto.nombre} </p>
                <p>
                  Cantidad: {""}
                  <span className="font-bold">{producto.pivot.cantidad}</span>
                </p>
              </div>
            ))}

            <p className="text-lg font-bold text-slate-600">
              Cliente:
              <span className="font-normal"> {pedido.user.name}</span>
            </p>
            <p className="text-lg font-bold text-amber-500">
              Total a pagar:
              <span className="font-normal text-slate-600">
                {" "}
                {formatearDinero(pedido.total)}
              </span>
            </p>

            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-lg uppercase font-bold text-white text-center w-full cursor-pointer"
              onClick={() => handleClickCompletarPedido(pedido.id)}
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordenes;
