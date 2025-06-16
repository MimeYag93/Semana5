import axios from "axios";
import type { Mensaje } from "./mensajes.types";

const API_URL = import.meta.env.VITE_API_URL;

// Obtener todos los mensajes
export const obtenerMensajes = async (): Promise<Mensaje[]> => {
  const res = await axios.get(`${API_URL}/mensaje`);
  return res.data;
};

// Crear un nuevo mensaje
export const crearMensaje = async (contenido: string): Promise<Mensaje> => {
  const res = await axios.post(`${API_URL}/mensaje`, { contenido });
  return res.data;
};

// Actualizar un mensaje existente
export const actualizarMensaje = async (
  id: number,
  contenido: string
): Promise<Mensaje> => {
  const res = await axios.put(`${API_URL}/mensaje/${id}`, { contenido });
  return res.data;
};

// Eliminar un mensaje por ID
export const eliminarMensaje = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/mensaje/${id}`);
};