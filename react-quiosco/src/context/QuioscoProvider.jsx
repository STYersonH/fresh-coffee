import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias";
import clienteAxios from "../config/axios";

const QuioscoContext = createContext();

const QuisqoProvider = ({ children }) => {
  // const [categorias, setCategorias] = useState(categoriasDB); //ya no se usa ahora que se usa la API
  const [categorias, setCategorias] = useState([]);
  // const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  // Obtener categorias mediante la API desde el back
  const obtenerCategorias = async () => {
    try {
      //acceder a una variable de entorno local
      const dominio = import.meta.env.VITE_API_URL; //ya no se necesita al tener el archivo axios.js
      //const respuesta = await axios("http://127.0.0.1:8000/api/categorias");
      // -- obtengo solo lo que me interesa
      const { data } = await clienteAxios(`/api/categorias`);
      //console.log(data.data);
      setCategorias(data.data);
      setCategoriaActual(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  // handle : para eventos con clicks -> cambia la categoria actual
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal((modal) => !modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  //desestructuracion de objetos
  const handleAgregarPedido = ({ categoria_id, ...producto }) => {
    //se actualizara la cantidad del pedido
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );

      setPedido(pedidoActualizado);
      toast.success("Guardado correctamente");
    } else {
      // agregar en pedido, el producto nuevo
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    //llenar el producto al cual se le abrira el modal
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handleEliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("producto eliminado del pedido");
  };

  const handleSubmitNuevaOrden = async (logout) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      //como es post entonces se usara el metodo store
      // data es lo que nos retorna axios
      const { data } = await clienteAxios.post(
        "/api/pedidos",
        {
          //el objeto que enviaremos al servidor: al controller
          total,
          productos: pedido.map((producto) => {
            //pasar solo la informacion que necesitamos
            return {
              id: producto.id,
              cantidad: producto.cantidad,
            };
          }), //renombrando pedido
        },
        {
          //enviar una peticion autenticada
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // mostrar como mensaje exitoso lo que se envio desde PedidoController
      toast.success(data.message);
      setTimeout(() => {
        setPedido([]);
      }, 1000);

      setTimeout(() => {
        localStorage.removeItem("AUTH_ITEM");
        logout();
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCompletarPedido = async (id) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      // automaticamente llamara al update de PedidoController
      // se debe pasar el id
      await clienteAxios.put(`api/pedidos/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //{{}} significa que es un codigo de JS y que pasamos un objeto
    <QuioscoContext.Provider
      value={{
        //podemos pasar cualquier cosa al value
        categorias, //estara disponible en toda la aplicacion gracias al context
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total,
        handleSubmitNuevaOrden,
        handleClickCompletarPedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuisqoProvider };
export default QuioscoContext;
