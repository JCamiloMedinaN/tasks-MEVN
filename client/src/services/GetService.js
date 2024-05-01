// import { ref } from 'vue'

// class GetService {

//     constructor(){
//         this.get = ref([])
//     }

//     getTasks(){
//         return this.get
//     }

//     async fetchAll(){
//         try {
//             const url = 'http://localhost:3000/api/tasks'
//             const response = await fetch(url)
//             const json = await response.json()
//             this.get.value = await json
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

import axios from "axios";

class TaskAPI {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/tasks",
    });
  }

  async getAllTasks() {
    try {
      const response = await this.api.get('')
      return response.data;
    } catch (error) {
      console.error('Error al tratar de obtener tareas existentes',error);
    }
  }

  async getTaskById(id) {
    try {
      const response = await this.api.get(`/${id}`)
      return response.data
    } catch (error) {
      console.error('Error al tratar de encontrar la tarea',error)
    }
  }

  async createTask(task) {
    try {
      const response = await this.api.post('', task)
      return response.data
    } catch (error) {
      console.error('Error al crear la tarea', error)
    }
  }


  async updateTask(id, task) {
    try {
      const response = await this.api.put(`/${id}`, task)
      return response.data
    } catch (error) {
      console.error('Error al actualizar la tarea', error)
    }
  }

  async deleteTask(id) {
    try {
      const response = await this.api.delete(`/${id}`)
      return response.data
    } catch (error) {
      console.error('Error al eliminar tarea', error)
    }
  }
}

export default TaskAPI;
