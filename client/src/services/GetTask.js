import axios from 'axios'

export async function getTaskById (id){
    try {
        const api = axios.create({
            baseURL: 'http://localhost:3000/api/tasks',
        })
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error) {
        console.error('Error al encontrar la tarea', error)
    }
}