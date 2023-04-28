import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext();

const QuisqoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

  // handle : para eventos con clicks -> cambia la categoria actual
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  return (
    //{{}} significa que es un codigo de JS y que pasamos un objeto
    <QuioscoContext.Provider
      value={{
        //podemos pasar cualquier cosa al value
        categorias, //estara disponible en toda la aplicacion gracias al context
        categoriaActual,
        handleClickCategoria,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuisqoProvider };
export default QuioscoContext;
