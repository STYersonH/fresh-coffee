import { createContext } from "react";

const QuioscoContext = createContext();

const QuisqoProvider = ({ children }) => {
  //podemos pasar cualquier cosa al value
  const hola = "hola mundo";
  const funcion = (_) => console.log("a");

  return (
    //{{}} significa que es un codigo de JS y que pasamos un objeto
    <QuioscoContext.Provider
      value={{
        hola,
        funcion,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuisqoProvider };
export default QuioscoContext;
