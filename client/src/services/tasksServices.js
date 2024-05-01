import axios from "axios"

// Configurar Axios con CORS
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const getAllTasks = async () => {
  try {
    let getTasks = `https://localhost:3000/api/tasks`;
    return await axios.get(getTasks);
  } catch (error) {
    console.error("Error al obtener todas las tareas:", error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    let createTaskURL = `https://localhost:3000/api/tasks`;
    return await axios.post(createTaskURL, taskData);
  } catch (error) {
    console.error("Error al crear una tarea:", error);
    throw error;
  }
};

export const getTask = async (taskId) => {
  try {
    let getTaskURL = `https://localhost:3000/api/tasks/${taskId}`;
    return await axios.get(getTaskURL);
  } catch (error) {
    console.error("Error al obtener la tarea:", error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    let updateTaskURL = `https://localhost:3000/api/tasks/${taskId}`;
    return await axios.put(updateTaskURL, taskData);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    let deleteTaskURL = `https://localhost:3000/api/tasks/${taskId}`;
    return await axios.delete(deleteTaskURL);
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    throw error;
  }
};
