const Registro = () => {
  return (
    <>
      {" "}
      {/* el el HTML final no se mostrara alguna etiqueta */}
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-2xl mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
              name="name"
              placeholder="your name"
            />
          </div>

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
            />
          </div>

          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl"
          />
        </form>
      </div>
    </>
  );
};

export default Registro;
