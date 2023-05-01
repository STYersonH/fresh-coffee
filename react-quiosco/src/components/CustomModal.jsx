import Modal from "react-modal";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const ModalWrapper = styled(Modal)`
  &__overlay {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  &__content {
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    max-width: 500px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-name: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)};
  }
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "500px",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    zIndex: 1001,
  },
};

// definir un elemento del DOM e el mque la modal sera renderizada y gestionada
// aseguramos que   la modal se renderizara en el lugar correcto

// !!! EN VEZ DE USARLO USARE FRAMER MOTION
Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, children }) => {
  console.log("is open: ", isOpen);
  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
    >
      {children}
      <button onClick={onClose}>Cerrar</button>
    </ModalWrapper>
  );
};

export default CustomModal;
