import axios from 'axios'

export async function createTask(task) {
    try {
        const api = axios.create({
            baseURL : 'http://localhost:3000/api/tasks',
        })
        const response = await api.post('', task)
        return response.data
    } catch (error) {
    console.error('Erroral crear tarea:', error);
    }
}
