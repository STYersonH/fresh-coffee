import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
      <img
        src="../../public/img/logo.svg"
        alt="imagen logotipo"
        className="max-w-xs"
      />
      <div className=" p-10 w-full">
        <Outlet />{" "}
        {/* ../img/logo.svg el contenido de children se renderizara aqui */}
      </div>
    </main>
  );
};

export default AuthLayout;
