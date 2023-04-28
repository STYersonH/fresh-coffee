import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

//usaremos el context de QuioscoProvider
import { QuisqoProvider } from "./context/QuioscoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // hace doble render para intentar causar ciertos errores
  // si aparece 2 veces el contenido esta bien
  <React.StrictMode>
    {/* para poder hacer disponible en value en toda la informacion de manera global
        estado sincronizado en todos los componentes */}
    <QuisqoProvider>
      {/* ya no usamos App.jsx */}
      <RouterProvider router={router} />
    </QuisqoProvider>
  </React.StrictMode>
);
