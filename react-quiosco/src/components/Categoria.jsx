import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const { icono, id, nombre } = categoria;

  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer ${
        categoriaActual.nombre === nombre && "bg-amber-400"
      }`}
      // se crea la funcion en vez de ejecutar la funcion al renderizar
      onClick={() => handleClickCategoria(id)} //siempre tiene que ser un arrow function
    >
      <img src={`/img/icono_${icono}.svg`} alt="img icon" className="w-12" />
      <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  );
};

export default Categoria;
