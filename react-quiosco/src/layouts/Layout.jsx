import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      Layout
      <Outlet /> {/* el contenido de children se renderizara aqui */}
    </div>
  );
};

export default Layout;
