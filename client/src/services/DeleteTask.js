import axios from "axios";

export async function deleteTask(id) {
  try {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/tasks',
    });
    const response = await api.delete(`${id}`)
    console.log('deleteTask response:', response);
    return response.data
  } catch (error) {
    console.error('Error al tratar de obtener tareas existentes', error)
  }
}
