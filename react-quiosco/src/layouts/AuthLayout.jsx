import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <Outlet /> {/* el contenido de children se renderizara aqui */}
    </div>
  );
};

export default AuthLayout;
