import useQuiosco from "../hooks/useQuiosco";

const ModalProducto = () => {
  const { producto, handleClickModal } = useQuiosco();

  return (
    <div className=" w-full h-full md:flex gap-10 bg-red-500 p-3">
      <div className="md:w-1/3">
        <img
          src={`../../public/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
