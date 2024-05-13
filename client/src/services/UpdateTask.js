import axios from 'axios'

export async function updateTask(id, taskData) {
    try {
        const api = axios.create({
            baseURL: 'http://localhost:3000/api/tasks',
        });
        const response = await api.put(`/${id}`, taskData);
        console.log(`updateTask response for task with ID ${id}:`, response);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}