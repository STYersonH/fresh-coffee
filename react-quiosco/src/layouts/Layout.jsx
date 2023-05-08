import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//importar componente y estilos de toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import Modal from "../components/Modal";
import ModalProducto from "../components/ModalProducto";

import useQuiosco from "../hooks/useQuiosco";

import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const { user, error } = useAuth({ middleware: "auth" }); //auth en vez de guess para escribir el codigo condicional
  const { modal, handleClickModal } = useQuiosco();

  return (
    <>
      <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet /> {/* el contenido de children se renderizara aqui */}
        </main>
        <Resumen />
      </div>

      {/* animatePresence para que se aplique la animacion para el exit */}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        animatePresence={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modal && (
          // <CustomModal isOpen={modal} onClose={() => handleClickModal()}>
          //   <p>Desde CustomModal</p>
          // </CustomModal>
          <Modal modalOpen={modal} handleClose={handleClickModal}>
            <ModalProducto />
          </Modal>
        )}
      </AnimatePresence>

      {/* definimos el componente para luego usarlo, mostrar mensajes */}
      <ToastContainer />
    </>
  );
};

export default Layout;
