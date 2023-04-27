const Login = () => {
  return (
    <>
      {/* el el HTML final no se mostrara alguna etiqueta */}
      <h1 className="text-4xl font-black">Iniciar sesion</h1>
      <p>Para crear un pedido debes iniciar sesion</p>
      <div className="bg-white shadow-md rounded-2xl mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="email"
              placeholder="your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="password"
              placeholder="your password"
            />
          </div>

          <input
            type="submit"
            value="Iniciar sesion"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
