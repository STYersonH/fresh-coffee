import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import useSWR from "swr";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  // data renombrado a user

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    // mutate vuelve a llamar este codigo nuevamete
    clienteAxios("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response?.data?.errors);
      })
  );

  const login = async (datos, setErrores) => {
    try {
      const { data } = await clienteAxios.post("/api/login", datos); //estos van a ser los datos que se envia al backend
      //console.log(data.token);
      //almacenar estos datos en el almacenamiento local del navegador
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrores({ email: [], password: [] });
      await mutate(); // se pide que revalide si el usuario ya se autentico y lo hace mas rapido que si no lo usaramos
    } catch (error) {
      //console.log(error.response.data.errors);
      setErrores(error.response.data.errors ? error.response.data.errors : {});
    }
  };
  const registro = () => {};
  const logout = () => {};

  console.log("user: ", user);
  console.log("error:", error);

  //va a estar escuchando por user y por error
  useEffect(() => {
    if (middleware === "guest" && url && user) {
      navigate(url);
    }
    //si tenemos un error significa que no iniciamos sesion
    if (middleware === "auth" && error) {
      navigate("/auth/login");
    }
  }, [user, error]);

  return {
    login,
    registro,
    logout,
    user,
    error,
  };
};
