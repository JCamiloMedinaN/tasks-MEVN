import axios from "axios"

export async function getAllTasks() {
  try {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/tasks',
    });
    const response = await api.get('')
    console.log('getAllTasks response:', response);
    return response.data
  } catch (error) {
    console.error('Error al tratar de obtener tareas existentes', error)
  }
}
