import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";

//tendra acceso a value de QuioscoProvider
const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;
