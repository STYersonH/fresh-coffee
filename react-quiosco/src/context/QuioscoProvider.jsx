import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext();

const QuisqoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});

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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuisqoProvider };
export default QuioscoContext;
