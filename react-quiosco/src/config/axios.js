import axios from "axios";

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //los headers se envian antes de la peticion
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  //para enviar cookies en las solicitudes
  withCredentials: true,
});

export default clienteAxios;
