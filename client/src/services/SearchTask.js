import axios from 'axios'

export async function searchTasks(query){
    try {
        const api = axios.create({
            baseURL: 'http://localhost:3000/api/tasks',
        })
        const response = await api.get(`/search?query=${query}`)
        return response.data
    } catch (error) {
        console.error('Error al buscar la tarea', error)
    }
}
