import Producto from "../components/Producto";
import useSWR from "swr";
//import { productos as data } from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";
import clienteAxios from "../config/axios";

const Inicio = () => {
  const { categoriaActual } = useQuiosco(); //podemos acceder a cualquier variable de QuioscoContext

  // consulta SWR
  const fetcher = () =>
    clienteAxios("/api/productos").then((data) => {
      //console.log(data)
      return data.data;
    });
  // obtener la data de la API
  const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
    //puede refrescar la informacion
    refreshInterval: 1000,
  });

  if (isLoading) return "Cargando...";

  //filtrar solo los productos por su categoriaActual
  const productos = data.data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );
  return (
    <>
      <h1 className="text-4xl font-black ">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map((producto) => (
          <Producto key={producto.imagen} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default Inicio;
