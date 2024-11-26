import axios from 'axios';
import { Data, ICharacter } from '@/api/interfaces/ICharacter';

// Base URL de la API de Rick and Morty
const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Función para obtener los personajes
export const fetchCharacters = async (): Promise<ICharacter[]> => {
  try {
    const response = await axios.get<Data>(`${API_BASE_URL}/character`);
    return response.data.results; // Retorna la lista de personajes
  } catch (error) {
    console.error('Error al traer los personajes:', error);
    throw error;
  }
};
// Función para obtener el detalle de un personaje
export const fetchCharacterById = async (id: string): Promise<ICharacter> => {
  try {
    const response = await axios.get<ICharacter>(`${API_BASE_URL}/character/${id}`);
    return response.data; // Retorna los detalles del personaje
  } catch (error) {
    console.error(`Error al traer el personaje con ID ${id}:`, error);
    throw error;
  }
};