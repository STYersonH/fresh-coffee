import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext();

const QuisqoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);

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
  const handleAgregarPedido = ({ categoria_id, imagen, ...producto }) => {
    //se actualizara la cantidad del pedido
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );

      setPedido(pedidoActualizado);
    } else {
      // agregar en pedido, el producto nuevo
      setPedido([...pedido, producto]);
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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuisqoProvider };
export default QuioscoContext;
