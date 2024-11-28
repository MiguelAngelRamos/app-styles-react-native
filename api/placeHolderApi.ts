import axios from 'axios';
import IPost from './interfaces/IPost';

const API_BASE_HOLDER = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async ():Promise<IPost[]> => {

  try {
    const response = await axios.get<IPost[]>(`${API_BASE_HOLDER}/posts`);
    const posts: IPost[] = response.data;
    return posts;
  } catch (error) {
    console.error('Error al traer los posts', error);
    throw error;
  }
}