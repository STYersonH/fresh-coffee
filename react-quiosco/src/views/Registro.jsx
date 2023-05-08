import { createRef, useState } from "react";
import { Link } from "react-router-dom";
//import clienteAxios from "../config/axios"; ya no lo necesitamos ya que lo usamos en useAuth.js
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth.js";

const Registro = () => {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  //const [errores, setErrores] = useState({ name: [], email: [], password: [] });
  const [errores, setErrores] = useState([]);
  const { registro } = useAuth({ middleware: "guest", url: "/" });

  const handleSubmit = async (e) => {
    //prevenir la accion de enviar el formulario
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    registro(datos, setErrores);
  };

  return (
    <>
      {/* el el HTML final no se mostrara alguna etiqueta */}
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-2xl mt-10 px-5 py-10">
        <form
          onSubmit={handleSubmit}
          noValidate // evitar la validacion de react
        >
          {/* mostrar errores */}
          {errores
            ? errores.map((error, index) => (
                <Alerta key={index}>{error}</Alerta>
              ))
            : null}
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Nombre:
            </label>
            {/* {errores.name
              ? errores.name.map((error, index) => (
                  <Alerta key={index}>{error}</Alerta>
                ))
              : null} */}
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="name"
              placeholder="your name"
              ref={nameRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            {/* {errores.email
              ? errores.email.map((error, index) => (
                  <Alerta key={index}>{error}</Alerta>
                ))
              : null} */}
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
            {/* {errores.password
              ? errores.password.map((error, index) => (
                  <Alerta key={index}>{error}</Alerta>
                ))
              : null} */}
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="password"
              placeholder="your password"
              ref={passwordRef}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirm" className="text-slate-800">
              Repetir Password:
            </label>
            <input
              type="password"
              id="password_confirm"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="password_confirm"
              placeholder="your password again"
              ref={passwordConfirmationRef}
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl"
          />
        </form>
      </div>
      <nav className="mt-5">
        {/* <a href="/auth/login">Ya tienes cuenta? Inicia sesion</a> */}
        <Link to="/auth/login">Ya tienes cuenta? Inicia sesion</Link>
      </nav>
    </>
  );
};

export default Registro;
