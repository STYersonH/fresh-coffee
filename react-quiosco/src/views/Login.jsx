import { createRef, useState } from "react";
import { Link } from "react-router-dom";
//import clienteAxios from "../config/axios";
import { useAuth } from "../hooks/useAuth";
import Alerta from "../components/Alerta";

const Login = () => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState({ email: [], password: [] });
  //const [errores, setErrores] = useState([]);

  const { login } = useAuth({ middleware: "guest", url: "/" }); //redireccionar a la pagina principal

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // moviendo try...catch a useAuth.js
    login(datos, setErrores);
  };

  return (
    <>
      {/* el el HTML final no se mostrara alguna etiqueta */}
      <h1 className="text-4xl font-black">Iniciar sesion</h1>
      <p>Para crear un pedido debes iniciar sesion</p>
      <div className="bg-white shadow-md rounded-2xl mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>
          {/* {errores
            ? errores.map((error, index) => (
                <Alerta key={index}>{error}</Alerta>
              ))
            : null} */}
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            {errores.email
              ? errores.email.map((error, index) => (
                  <Alerta key={index}>{error}</Alerta>
                ))
              : null}
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="email"
              placeholder="your email"
              ref={emailRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            {errores.password
              ? errores.password.map((error, index) => (
                  <Alerta key={index}>{error}</Alerta>
                ))
              : null}
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="password"
              placeholder="your password"
              ref={passwordRef}
            />
          </div>

          <input
            type="submit"
            value="Iniciar sesion"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl"
          />
        </form>
      </div>
      <nav className="mt-5">
        {/* <a href="/auth/registro">No tienes cuenta? crea una</a> */}
        {/* no se recargara la pagina al usar Link */}
        <Link to="/auth/registro">No tienes cuenta? crea una</Link>
      </nav>
    </>
  );
};

export default Login;
