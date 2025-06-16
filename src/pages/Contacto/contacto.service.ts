import axios from 'axios';
import type { ContactoForm, ContactoRequest } from './contacto.types';

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerContactos = async (): Promise<ContactoForm[]> => {
  const res = await axios.get(`${API_URL}/contacto`);
  return res.data;
};

export const enviarContacto = async (data: ContactoRequest): Promise<void> => {
  await axios.post(`${API_URL}/contacto`, data);
};

export const actualizarContacto = async (id: number, data: ContactoRequest): Promise<ContactoForm> => {
  const res = await axios.put(`${API_URL}/contacto/${id}`, data);
  return res.data;
};

export const eliminarContacto = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/contacto/${id}`);
};