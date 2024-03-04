import { tasksInstance } from "./instance.js";

export const getTasksRequest = () => tasksInstance.get('/tasks')
export const getTaskRequest = (id) => tasksInstance.get(`/tasks/${id}`)
export const createTasksRequest = (task) => tasksInstance.post('/tasks', task)
export const updateTasksRequest = (task) => tasksInstance.put(`/tasks/${task._id}`)
export const deleteTasksRequest = (id) => tasksInstance.delete(`/tasks/${id}`)
